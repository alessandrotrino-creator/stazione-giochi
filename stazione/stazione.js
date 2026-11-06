/* =====================================================================
   STAZIONE: il menu iniziale della piattaforma.
   ATRIO (tabellone + cartelli delle classi) → carrellata verso i binari
   del proprio anno → i treni arrivano → Tecla la bigliettaia timbra il
   biglietto (a casa chiede la parola d'ordine) → treno → capitolo.
   Binari: 1-2-3 prime, 4-5-6 seconde, 7-8-9 terze (Scienze, Matematica, in arrivo).
   L'orologio grande, tenuto premuto 3 secondi, apre la modalità docente.
   ===================================================================== */
var Stazione = (function () {
  var D = {}, scala = 1, classe = null, pannello = null, imp = Salvataggio.impostazioni();
  var LARGO = 1600, PARALLASSE = 1.4, SCENE = 4;                 // 0 = atrio, 1-2-3 = binari di prime, seconde, terze
  var POSTI = [                                                   // dove stanno i treni in ogni gruppo di binari
    { area: [90, 450, 400, 400], vuoto: [190, 590, 240, 250], nome: [97, 896] },
    { area: [620, 440, 360, 410], vuoto: [680, 590, 240, 250], nome: [635, 896] },
    { area: [1110, 450, 400, 400], vuoto: [1150, 590, 250, 250], nome: [1173, 896] }
  ];
  var VOCI = {
    ottavio: { altezza: 520, timbro: "triangle", passo: 0.06, volume: 0.04 },
    tecla: { altezza: 300, timbro: "sine", passo: 0.1, volume: 0.05 }
  };
  var CHIAVE_SCENA = "stazione-dei-giochi:scena";
  var scena = 0, arrivati = {}, timbrato = false, anim = null;

  function el(tag, cl, html) { var e = document.createElement(tag); if (cl) e.className = cl; if (html != null) e.innerHTML = html; return e; }
  function T(k, p) { return Lingue.html(k, p); }
  function binario(anno, i) { return (anno - 1) * 3 + i + 1; }
  function numeri(anno) { return { a: String(binario(anno, 0)), b: String(binario(anno, 1)), c: String(binario(anno, 2)) }; }
  function annoClasse() { var c = Piattaforma.trovaClasse(classe); return c ? (c.anno || 2) : 0; }
  function capitoliAnno(g, anno) { return g ? (g.capitoli || []).filter(function (c) { return c.anno === anno; }) : []; }
  function giocoDel(i) { return Piattaforma.giochi()[i] || null; }
  function salvaScena() { try { sessionStorage.setItem(CHIAVE_SCENA, String(scena)); } catch (e) {} }
  function scenaSalvata() { try { return +sessionStorage.getItem(CHIAVE_SCENA) || 0; } catch (e) { return 0; } }

  function adatta() {
    var W = window.innerWidth, H = window.innerHeight;
    scala = Math.min(W / 1600, H / 900);
    D.palco.style.transform = "translate(" + (W - 1600 * scala) / 2 + "px," + (H - 900 * scala) / 2 + "px) scale(" + scala + ")";
  }

  /* ---------------- pannelli ---------------- */
  function apri(costruttore, chiudibile) {
    pannello = { c: costruttore, chiudibile: chiudibile !== false };
    ridisegnaPannello();
    D.velo.classList.add("aperto"); D.pannello.classList.add("aperto");
  }
  function ridisegnaPannello() {
    if (!pannello) return;
    D.pannello.setAttribute("dir", Lingue.info().dir);
    D.pannello.innerHTML = "";
    pannello.c(D.pannello);
    if (pannello.chiudibile) {
      var x = el("button", "pn-chiudi", T("ui.chiudi"));
      x.addEventListener("click", chiudi);
      D.pannello.appendChild(x);
    }
  }
  function chiudi() { pannello = null; D.velo.classList.remove("aperto"); D.pannello.classList.remove("aperto"); }

  /* ---------------- biglietti delle classi ---------------- */
  function pannelloBiglietti(p) {
    var casa = Casa.attiva();
    p.appendChild(el("h2", "", T(casa ? "st.casa.chiGioca" : "st.scegliBiglietto")));
    // biglietti raggruppati per anno (prime, seconde, terze), in ordine di sezione
    var classi = Piattaforma.classi().slice().sort(function (a, b) {
      return (a.anno || 2) - (b.anno || 2) || String(a.nome || "").localeCompare(String(b.nome || ""));
    });
    var molte = classi.length > 6, annoPrima = null, g = null;
    classi.forEach(function (c) {
      if (!g || (molte && (c.anno || 2) !== annoPrima)) {
        if (molte) p.appendChild(el("h3", "st-anno", T("st.classi" + (c.anno || 2))));
        g = el("div", "st-biglietti" + (molte ? " fitti" : ""));
        p.appendChild(g);
        annoPrima = c.anno || 2;
      }
      // se la classe ha scelto un nome per il biglietto, quello è il nome grande; la classe va sotto
      var grande = c.soprannome || c.nome, sotto = c.soprannome ? c.nome + " · " : "";
      var b = el("button", "st-biglietto" + (c.id === classe ? " scelto" : "") + (c.soprannome ? " con-nome" : ""),
        '<span class="st-b-tipo">' + T("st.bigliettoTipo") + '</span><span class="st-b-nome"></span>' +
        '<span class="st-b-anno"></span>');
      b.querySelector(".st-b-nome").textContent = grande || Lingue.semplice("st.liberaNome");
      b.querySelector(".st-b-anno").textContent = sotto + Lingue.semplice("st.anno" + (c.anno || 2));
      b.addEventListener("click", function () {
        if (casa) { Suoni.effetto("prendi"); apri(pannelloNumero(c), false); return; }
        bigliettoScelto(c.id);
      });
      g.appendChild(b);
    });
    if (!Salvataggio.classi().length && !casa) p.appendChild(el("p", "pn-nota", T("st.liberaNota")));
  }

  /* dopo il biglietto: Ottavio indica il cartello (o, se si torna da un capitolo, si va dritti ai binari) */
  function bigliettoScelto(id) {
    classe = id; Salvataggio.ultimaClasse(id); timbrato = false; chiudi(); aggiorna();
    Suoni.effetto("prendi");
    dopoBiglietto();
  }
  function dopoBiglietto() {
    if (scena > 0) { teclaTimbra(); return; }
    var torna = scenaSalvata();
    if (torna > 0) { setTimeout(function () { vaiA(torna); }, 500); return; }
    parlaCartello();
  }
  function parlaCartello() {
    var a = annoClasse() || 2, n = numeri(a);
    parla("ottavio", "st.ottavio.cartello", { nome: Piattaforma.nomeClasse(classe), a: n.a, b: n.b, c: n.c });
  }

  /* a casa: dopo la classe, il numero di registro (serve solo per il codice di fine capitolo) */
  function pannelloNumero(c) {
    var g = Casa.giocatore(), cifre = g && g.classe === c.id ? String(g.numero) : "";
    return function (p) {
      p.appendChild(el("h2", "", T("st.casa.numero")));
      p.appendChild(el("p", "pn-nota", T("st.casa.numeroNota")));
      var vis = el("div", "st-numero", cifre || "&nbsp;");
      p.appendChild(vis);
      var t = el("div", "st-tastierino");
      ["1", "2", "3", "4", "5", "6", "7", "8", "9", "⌫", "0", "✓"].forEach(function (k) {
        var b = el("button", k === "✓" ? "principale" : "", k);
        b.addEventListener("click", function () {
          if (k === "⌫") cifre = cifre.slice(0, -1);
          else if (k === "✓") {
            var n = +cifre;
            if (n >= 1 && n <= 40) { Casa.salvaGiocatore({ classe: c.id, numero: n }); bigliettoScelto(c.id); }
            return;
          } else if (cifre.length < 2 && !(cifre === "" && k === "0")) cifre += k;
          vis.innerHTML = cifre || "&nbsp;";
        });
        t.appendChild(b);
      });
      p.appendChild(t);
      var ind = el("button", "pn-tasto", "◀ " + T("st.casa.indietro"));
      ind.addEventListener("click", function () { apri(pannelloBiglietti, !!classe); });
      p.appendChild(ind);
    };
  }

  /* a casa: un capitolo si apre con la parola d'ordine, che chiede Tecla la bigliettaia */
  function pannelloParola(gioco, cap, anno) {
    return function (p) {
      var testa = el("div", "st-tecla-pn",
        '<svg viewBox="-70 -190 140 200" aria-hidden="true"><use href="#tecla" x="-70" y="-190" width="140" height="200"/></svg>' +
        '<div><b>' + T("st.tecla") + "</b><p>" + T("st.tecla.chiede") + "</p></div>");
      p.appendChild(testa);
      p.appendChild(el("h2", "", T("st.casa.parolaTitolo")));
      p.appendChild(el("p", "", "<b>" + T(cap.titolo) + "</b>"));
      p.appendChild(el("p", "pn-nota", T("st.casa.parolaNota")));
      var inp = el("input", "st-parola"); inp.type = "text"; inp.maxLength = 30;
      inp.autocomplete = "off"; inp.setAttribute("autocapitalize", "characters"); inp.spellcheck = false;
      var no = el("p", "st-parola-no", "");
      function prova() {
        if (Casa.parolaGiusta(gioco.id, cap.id, inp.value)) {
          Piattaforma.sblocca(classe, gioco.id, cap.id, true);
          Suoni.rumore("timbro"); Suoni.effetto("magia");
          apri(pannelloCapitoli(gioco, anno));
          parla("tecla", "st.tecla.si");
        } else { Suoni.effetto("errore"); no.innerHTML = T("st.casa.parolaNo"); inp.select(); }
      }
      inp.addEventListener("keydown", function (e) { if (e.key === "Enter") prova(); });
      p.appendChild(inp); p.appendChild(no);
      var b = el("button", "pn-tasto principale", T("st.casa.conferma"));
      b.addEventListener("click", prova);
      p.appendChild(b);
      setTimeout(function () { inp.focus(); }, 100);
    };
  }

  /* ---------------- capitoli di un treno (un gioco, un anno) ---------------- */
  function pannelloCapitoli(gioco, anno) {
    return function (p) {
      p.appendChild(el("h2", "", T(Piattaforma.titolo(gioco, anno)) + ' <span class="st-materia">· ' + T(gioco.materia) + " · " + T("st.classi" + anno) + "</span>"));
      p.appendChild(el("p", "", T(Piattaforma.descrizione(gioco, anno))));
      var capitoli = capitoliAnno(gioco, anno);
      if (!capitoli.length) { p.appendChild(el("p", "st-officina", T("st.inCostruzione"))); return; }
      var pr = Salvataggio.progressi(gioco.id, classe);
      capitoli.forEach(function (cap) {
        var aperto = Piattaforma.sbloccato(classe, gioco.id, cap.id);
        var fatto = pr.completati.indexOf(cap.id) >= 0;
        var iniziato = !!Salvataggio.carica(gioco.id, classe, cap.id);
        var riga = el("div", "st-cap" + (aperto ? "" : " chiuso"));
        riga.appendChild(el("span", "st-cap-n", cap.numero ? String(cap.numero) : "★"));
        riga.appendChild(el("span", "st-cap-titolo", T(cap.titolo)));
        riga.appendChild(el("span", "st-cap-stato", aperto ? (fatto ? T("st.completato") : iniziato ? T("st.inCorso") : T("st.nuovo")) : "🔒 " + T("st.bloccato")));
        // a casa, accanto al capitolo finito, il codice da portare in classe
        if (fatto && pr.codici && pr.codici[cap.id]) riga.appendChild(el("span", "st-cap-codice", T("st.casa.codice", { codice: pr.codici[cap.id] })));
        if (!aperto && Casa.attiva() && Casa.haParola(gioco.id, cap.id)) {
          var bp = el("button", "pn-tasto", T("st.casa.parola"));
          bp.addEventListener("click", function () { apri(pannelloParola(gioco, cap, anno)); parla("tecla", "st.tecla.chiede"); });
          riga.appendChild(bp);
        }
        if (aperto) {
          var b = el("button", "pn-tasto principale", iniziato && !fatto ? T("st.riprendi") : T("st.parti"));
          b.addEventListener("click", function () { Suoni.effetto("magia"); salvaScena(); Piattaforma.gioca(gioco.id, cap.id, classe); });
          riga.appendChild(b);
        }
        p.appendChild(riga);
      });
    };
  }

  /* ---------------- tabellone a palette: tutti i nove binari ---------------- */
  function sfarfalla(nodo, finale, ritardo) {
    var lettere = (finale.replace(/\s/g, "") || "—") + "0123456789", passi = 12, i = 0;
    nodo.textContent = "";
    setTimeout(function giro() {
      i++;
      var fisse = Math.floor(finale.length * i / passi), s = finale.slice(0, fisse);
      for (var j = fisse; j < finale.length; j++) s += finale[j] === " " ? " " : lettere[Math.floor(Math.random() * lettere.length)];
      nodo.textContent = s;
      if (i < passi) setTimeout(giro, 55);
    }, ritardo);
  }
  function disegnaTabellone(gira) {
    D.tabellone.innerHTML = '<div class="tb-titolo">' + T("st.partenze") + "</div>";
    [1, 2, 3].forEach(function (anno) {
      [0, 1, 2].forEach(function (i) {
        var g = giocoDel(i), pronto = capitoliAnno(g, anno).length > 0, n = (anno - 1) * 3 + i;
        var testi = [
          g ? Lingue.semplice(Piattaforma.titolo(g, anno)) : "—",
          Lingue.semplice("st.tb" + anno),
          Lingue.semplice(pronto ? "st.inPartenza" : "st.inArrivo")
        ];
        var r = el("div", "tb-riga" + (gira ? " gira" : "") + (anno === annoClasse() ? " tua" : ""),
          '<span class="tb-bin">' + binario(anno, i) + '</span><span class="tb-dest"></span><span class="tb-mat"></span><span class="tb-stato' + (pronto ? "" : " attesa") + '"></span>');
        var celle = r.querySelectorAll("span:not(.tb-bin)");
        testi.forEach(function (t, j) { if (gira) sfarfalla(celle[j], t, n * 70 + 200); else celle[j].textContent = t; });
        r.style.animationDelay = n * 0.07 + "s";
        D.tabellone.appendChild(r);
      });
    });
    if (gira) Suoni.rumore("palette");
  }

  /* ---------------- il mondo: cartelli, insegne, treni, Tecla ---------------- */
  function disegnaMondoUi() {
    var M = D.mondoUi, tuo = annoClasse();
    M.querySelectorAll(".st-cartello, .st-insegna, .st-treno, .st-nome-treno, .st-tecla").forEach(function (n) { n.remove(); });
    // cartelli dell'atrio
    [1, 2, 3].forEach(function (anno, i) {
      var n = numeri(anno);
      var c = el("button", "st-cartello" + (anno === tuo ? " tuo" : ""),
        '<span class="st-c-classi">' + T("st.classi" + anno) + '</span><span class="st-c-binari">' + T("st.binari", n) + "</span>" +
        '<svg class="st-c-freccia" viewBox="0 0 60 40" aria-hidden="true"><path d="M4 20 H46 M32 6 L50 20 L32 34" fill="none" stroke="#fff" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/></svg>');
      c.style.left = (110 + i * 480) + "px";
      c.addEventListener("click", function () {
        if (!classe) { apri(pannelloBiglietti, false); return; }
        vaiA(anno);
      });
      M.appendChild(c);
    });
    // nei binari: insegna in alto, treni, nomi, Tecla
    [1, 2, 3].forEach(function (anno) {
      var x0 = anno * LARGO;
      var ins = el("div", "st-insegna", "<b>" + T("st.classi" + anno) + "</b> " + T("st.binari", numeri(anno)));
      ins.style.left = (x0 + 470) + "px";
      M.appendChild(ins);
      POSTI.forEach(function (posto, i) {
        var g = giocoDel(i), pronto = capitoliAnno(g, anno).length > 0, ar = pronto ? posto.area : posto.vuoto;
        var a = el("button", "st-treno" + (pronto ? "" : " vuoto"));
        a.style.left = (x0 + ar[0]) + "px"; a.style.top = ar[1] + "px"; a.style.width = ar[2] + "px"; a.style.height = ar[3] + "px";
        a.setAttribute("aria-label", (g ? Lingue.semplice(Piattaforma.titolo(g, anno)) + " · " : "") + Lingue.semplice(pronto ? "st.inPartenza" : "st.inArrivo"));
        a.addEventListener("click", function () {
          if (anim) return;
          if (!classe) { apri(pannelloBiglietti, false); return; }
          if (!pronto) { parla("ottavio", "st.ottavio.3"); return; }
          Suoni.effetto("pagina"); apri(pannelloCapitoli(g, anno));
        });
        M.appendChild(a);
        var nome = pronto ? T(Piattaforma.titolo(g, anno)) + "<small>" + T(g.materia) + "</small>"
          : (g ? T(g.materia) : T("st.nuovaMateria")) + "<small>" + T("st.inArrivo") + "</small>";
        var nm = el("div", "st-nome-treno" + (pronto ? "" : " vuoto"), nome);
        var dove = pronto ? posto.nome : [StazioneGrafica.PARAURTI[i] - 130, 600];   // binario vuoto: il cartello sta sul palo
        nm.style.left = (x0 + dove[0]) + "px"; nm.style.top = dove[1] + "px";
        M.appendChild(nm);
      });
      var t = el("button", "st-tecla", '<svg viewBox="-70 -190 140 200"><use href="#tecla" x="-70" y="-190" width="140" height="200"/></svg>');
      t.style.left = (x0 + 1205) + "px";
      t.setAttribute("aria-label", Lingue.semplice("st.tecla"));
      t.addEventListener("click", function () { parla("tecla", Casa.attiva() ? "st.tecla.casa" : "st.tecla.2"); });
      M.appendChild(t);
    });
  }

  /* ---------------- telecamera: carrellata tra atrio e binari ---------------- */
  function posa(k, durata) {
    var tr = durata ? "transform " + durata + "ms cubic-bezier(.5,.05,.3,1)" : "none";
    D.mondo.style.transition = tr; D.primo.style.transition = tr;
    D.mondo.style.transform = "translateX(" + (-k * LARGO) + "px)";
    D.primo.style.transform = "translateX(" + (-k * LARGO * PARALLASSE) + "px)";
  }
  /* un'animazione con il tasto «Salta»: passi = [[ms, funzione], ...], fine = funzione */
  function animazione(passi, fine) {
    if (anim) anim.salta();
    var timer = [], a = { finito: false };
    function chiudiAnim(saltata) {
      if (a.finito) return; a.finito = true;
      timer.forEach(clearTimeout); anim = null; D.salta.classList.remove("mostra"); D.palco.classList.remove("in-viaggio");
      fine(saltata);
    }
    a.salta = function () { chiudiAnim(true); };
    passi.forEach(function (p) { timer.push(setTimeout(p[1], p[0])); });
    var ultimo = passi.reduce(function (m, p) { return Math.max(m, p[0]); }, 0);
    timer.push(setTimeout(function () { chiudiAnim(false); }, ultimo + 20));
    anim = a; D.salta.classList.add("mostra"); D.palco.classList.add("in-viaggio");
    return a;
  }

  function vaiA(k) {
    if (anim || k === scena) { if (k === scena && k > 0) arrivo(k); return; }
    chiudi(); zittisci();
    var dist = Math.abs(k - scena), durata = 900 + 650 * dist;
    scena = k; salvaScena(); aggiornaComandi();
    Suoni.rumore("passi", durata / 1000);
    posa(k, durata);
    animazione([[durata, function () {}]], function (saltata) {
      if (saltata) posa(k, 0);
      arrivo(k);
    });
  }

  /* arrivo ai binari: la prima volta i treni entrano in stazione; poi parla Tecla */
  function arrivo(anno) {
    if (anno === 0) { if (classe) parlaCartello(); return; }
    var treni = D.mondo.querySelectorAll('.st-arrivo[data-anno="' + anno + '"]');
    var vap = Array.prototype.map.call(treni, function (t) { return t.nextElementSibling; });
    function fermi() {
      treni.forEach(function (t) { t.classList.remove("attesa", "parte"); });
      vap.forEach(function (v) { v.classList.remove("sbuffa"); void v.getBoundingClientRect(); v.classList.add("sbuffa"); });
    }
    if (arrivati[anno] || !treni.length) { arrivati[anno] = true; fermi(); teclaTimbra(); return; }
    arrivati[anno] = true;
    animazione([
      [100, function () { Suoni.rumore("fischio"); treni.forEach(function (t, i) { t.style.animationDelay = i * 0.35 + "s"; t.classList.remove("attesa"); t.classList.add("parte"); }); }],
      [1300, function () { Suoni.rumore("freno"); }],
      [2400 + 350 * (treni.length - 1), function () {}]
    ], function () { fermi(); teclaTimbra(); });
  }

  /* Tecla controlla il biglietto: in classe lo timbra; a casa ricorda la parola d'ordine */
  function teclaTimbra() {
    if (!classe) { apri(pannelloBiglietti, false); return; }
    if (Casa.attiva()) { parla("tecla", "st.tecla.casa"); return; }
    parla("tecla", "st.tecla.1", { nome: Piattaforma.nomeClasse(classe) });
    setTimeout(function () { timbrato = true; Suoni.rumore("timbro"); aggiornaBiglietto(true); }, 900);
  }

  function aggiornaComandi() {
    D.atrio.classList.toggle("mostra", scena > 0);
  }

  /* ---------------- scritte fisse ---------------- */
  function aggiornaBiglietto(appena) {
    var gioc = Casa.attiva() && Casa.giocatore();
    D.bigliettoScelto.innerHTML = classe
      ? "🎫 " + (gioc ? T("st.casa.biglietto", { classe: Piattaforma.nomeClasse(classe), numero: String(gioc.numero) }) : Lingue.html("st.biglietto", { nome: Piattaforma.nomeClasse(classe) })) +
        ' <span class="st-cambia">' + T("st.cambia") + "</span>" + (timbrato ? '<span class="st-timbro' + (appena ? " nuovo" : "") + '">✓</span>' : "")
      : "🎫 " + T(Casa.attiva() ? "st.casa.chiGioca" : "st.scegliBiglietto");
  }

  function aggiorna() {
    var inf = Lingue.info();
    [D.ui, D.mondoUi].forEach(function (n) { n.setAttribute("dir", inf.dir); n.setAttribute("lang", inf.codice); });
    document.documentElement.lang = inf.codice;
    D.palco.style.setProperty("--font", inf.font);
    document.title = Lingue.semplice("st.titolo");
    D.ui.querySelectorAll("[data-t]").forEach(function (n) { n.innerHTML = T(n.getAttribute("data-t")); });
    aggiornaBiglietto(false);
    D.bozza.innerHTML = inf.codice === "it" ? "" : T("ui.bozza");
    D.bozza.classList.toggle("vuota", inf.codice === "it");
    disegnaMondoUi();
    ["ottavio", "tecla"].forEach(function (chi) {
      var f = D.fumetti[chi];
      if (f.chiave) f.querySelector(".st-f-testo").innerHTML = T(f.chiave, f.param);
    });
    ridisegnaPannello();
  }

  /* ---------------- chi parla: Ottavio o Tecla ---------------- */
  function zittisci() {
    ["ottavio", "tecla"].forEach(function (chi) { var f = D.fumetti[chi]; f.classList.remove("mostra"); f.chiave = null; });
  }
  function parla(chi, chiave, param) {
    zittisci();
    var f = D.fumetti[chi];
    f.chiave = chiave; f.param = param;
    f.querySelector(".st-f-testo").innerHTML = T(chiave, param);
    void f.offsetWidth; f.classList.add("mostra");
    clearTimeout(parla.t);
    parla.t = setTimeout(zittisci, 7000);
    if (chi === "ottavio") { D.ottavio.classList.remove("salta"); void D.ottavio.offsetWidth; D.ottavio.classList.add("salta"); }
    else D.mondoUi.querySelectorAll(".st-tecla").forEach(function (t) { t.classList.remove("salta"); void t.offsetWidth; t.classList.add("salta"); });
    Suoni.borbotta(VOCI[chi], Lingue.semplice(chiave, param));
  }

  function pannelloLingue(p) {
    p.appendChild(el("h2", "", T("ui.scegliLingua")));
    var g = el("div", "pn-lingue");
    Lingue.elenco().forEach(function (l) {
      var b = el("button", "pn-lingua" + (l.codice === Lingue.attiva() ? " attiva" : ""), l.nome);
      b.setAttribute("dir", l.dir); b.setAttribute("lang", l.codice); b.style.fontFamily = l.font;
      b.addEventListener("click", function () {
        Lingue.imposta(l.codice); imp.lingua = l.codice; Salvataggio.salvaImpostazioni(imp);
        aggiorna(); disegnaTabellone(true);
      });
      g.appendChild(b);
    });
    p.appendChild(g);
  }

  /* l'orologio tenuto premuto per 3 secondi apre la modalità docente */
  function preparaOrologio() {
    if (!window.Docente) return;                     // nel pacchetto per casa la modalità docente non c'è
    var t = null, anello = D.anello;
    function inizia(e) {
      e.preventDefault();
      anello.classList.add("carica");
      t = setTimeout(function () { anello.classList.remove("carica"); Docente.apri({ apri: apri, chiudi: chiudi, dopo: function () { aggiorna(); disegnaTabellone(true); } }); }, 3000);
    }
    function ferma() { clearTimeout(t); anello.classList.remove("carica"); }
    D.orologio.addEventListener("pointerdown", inizia);
    ["pointerup", "pointerleave", "pointercancel"].forEach(function (ev) { D.orologio.addEventListener(ev, ferma); });
    D.orologio.addEventListener("contextmenu", function (e) { e.preventDefault(); });
  }

  /* il disegno del mondo: atrio + tre gruppi di binari, uno accanto all'altro */
  function disegnaMondo() {
    var s = '<svg viewBox="0 0 ' + SCENE * LARGO + ' 900" width="' + SCENE * LARGO + '" height="900" aria-hidden="true">' + StazioneGrafica.atrio();
    [1, 2, 3].forEach(function (anno) {
      var treni = [0, 1, 2].map(function (i) { var g = giocoDel(i); return capitoliAnno(g, anno).length ? g.id : null; });
      s += '<g transform="translate(' + anno * LARGO + ' 0)">' + StazioneGrafica.binari(anno, treni) + "</g>";
    });
    for (var k = 1; k <= SCENE; k++) s += StazioneGrafica.pilastro(k * LARGO);
    D.mondo.insertAdjacentHTML("afterbegin", s + "</svg>");
    D.primo.innerHTML = '<svg viewBox="0 0 ' + Math.ceil((SCENE - 1) * LARGO * PARALLASSE + LARGO + 100) + ' 900" width="' + Math.ceil((SCENE - 1) * LARGO * PARALLASSE + LARGO + 100) + '" height="900" aria-hidden="true">' +
      StazioneGrafica.primoPiano(PARALLASSE, SCENE) + "</svg>";
    D.cornice.innerHTML = '<svg viewBox="0 0 1600 900" aria-hidden="true">' + StazioneGrafica.cornice() + "</svg>";
  }

  return {
    mostra: function () {
      Lingue.imposta(imp.lingua || "it");
      Suoni.muto(imp.muto);
      var ultima = Salvataggio.ultimaClasse(), casa = Casa.attiva(), gioc = Casa.giocatore();
      if (casa) ultima = gioc && gioc.classe;
      classe = Piattaforma.trovaClasse(ultima) ? ultima : null;

      D.contenitore = el("div", "contenitore");
      D.palco = el("div", "palco stazione");
      D.mondo = el("div", "st-mondo");
      D.mondoUi = el("div", "st-mondo-ui", '<div class="tabellone"></div>');
      D.mondo.appendChild(D.mondoUi);
      D.primo = el("div", "st-primo");
      D.cornice = el("div", "st-cornice");
      D.ui = el("div", "ui");
      D.ui.innerHTML =
        '<button class="st-biglietto-scelto"></button>' +
        '<button class="st-atrio"><svg viewBox="0 0 60 40" aria-hidden="true"><path d="M56 20 H14 M28 6 L10 20 L28 34" fill="none" stroke="#fff" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/></svg><span data-t="st.atrio"></span></button>' +
        '<div class="barra-alta">' +
          '<button class="tasto" data-azione="lingua"><span class="icona">' + Stazione.ICONE.lingua + '</span><span class="etich" data-t="ui.lingua"></span></button>' +
          '<button class="tasto" data-azione="audio"><span class="icona">' + (imp.muto ? Stazione.ICONE.audioNo : Stazione.ICONE.audioSi) + '</span><span class="etich" data-t="ui.audio"></span></button>' +
        "</div>" +
        '<div class="bozza vuota"></div>' +
        '<div class="st-orologio" aria-hidden="true"><div class="st-anello"></div></div>' +
        '<div class="st-ottavio"><svg viewBox="-70 -150 140 160"><use href="#ottavio" x="-70" y="-150" width="140" height="160"/></svg></div>' +
        '<div class="st-fumetto"><b data-t="st.ottavio"></b><span class="st-f-testo"></span></div>' +
        '<div class="st-fumetto tecla"><b data-t="st.tecla"></b><span class="st-f-testo"></span></div>' +
        '<button class="st-salta"><span data-t="st.salta"></span> ⏭</button>' +
        '<div class="velo"></div><div class="pannello" role="dialog"></div>';
      [D.mondo, D.primo, D.cornice, D.ui].forEach(function (n) { D.palco.appendChild(n); });
      D.contenitore.appendChild(D.palco); document.body.appendChild(D.contenitore);
      ["velo", "pannello", "bozza"].forEach(function (c) { D[c] = D.ui.querySelector("." + c); });
      D.tabellone = D.mondoUi.querySelector(".tabellone");
      D.bigliettoScelto = D.ui.querySelector(".st-biglietto-scelto");
      D.atrio = D.ui.querySelector(".st-atrio");
      D.salta = D.ui.querySelector(".st-salta");
      D.orologio = D.ui.querySelector(".st-orologio");
      D.anello = D.ui.querySelector(".st-anello");
      D.ottavio = D.ui.querySelector(".st-ottavio");
      var f = D.ui.querySelectorAll(".st-fumetto");
      D.fumetti = { ottavio: f[0], tecla: f[1] };
      disegnaMondo();

      D.bigliettoScelto.addEventListener("click", function () { if (!anim) apri(pannelloBiglietti, !!classe); });
      D.atrio.addEventListener("click", function () { vaiA(0); });
      D.salta.addEventListener("click", function () { if (anim) anim.salta(); });
      D.ottavio.addEventListener("click", function () {
        if (!classe) parla("ottavio", "st.ottavio.1");
        else if (scena === 0) parlaCartello();
        else parla("ottavio", "st.ottavio.2");
      });
      D.ui.querySelector('[data-azione="lingua"]').addEventListener("click", function () { apri(pannelloLingue); });
      D.ui.querySelector('[data-azione="audio"]').addEventListener("click", function () {
        imp.muto = !imp.muto; Suoni.muto(imp.muto); Salvataggio.salvaImpostazioni(imp);
        D.ui.querySelector('[data-azione="audio"] .icona').innerHTML = imp.muto ? Stazione.ICONE.audioNo : Stazione.ICONE.audioSi;
      });
      D.velo.addEventListener("click", function () { if (pannello && pannello.chiudibile) chiudi(); });
      window.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && anim) { anim.salta(); return; }
        if (e.key === "Escape" && pannello && pannello.chiudibile) chiudi();
      });
      window.addEventListener("resize", adatta);
      preparaOrologio();
      StazioneGrafica.lancette(); setInterval(StazioneGrafica.lancette, 20000);
      posa(0, 0); adatta(); aggiorna(); aggiornaComandi(); disegnaTabellone(true);
      setTimeout(function () { parla("ottavio", casa && !classe ? "st.ottavio.casa" : "st.ottavio.1"); }, 900);
      // in classe, ogni volta che si torna alla stazione si conferma il biglietto: niente salvataggi nella classe sbagliata;
      // a casa il dispositivo è di uno studente solo, quindi si chiede solo la prima volta
      if (!casa || !classe) setTimeout(function () { apri(pannelloBiglietti, !!classe); }, 1800);
      else setTimeout(dopoBiglietto, 1800);
    },
    /* per il collaudo */
    stato: function () { return { scena: scena, classe: classe, anim: !!anim, timbrato: timbrato, arrivati: Object.keys(arrivati) }; },
    vaiA: function (k) { vaiA(k); },
    ICONE: {
      lingua: '<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="18" fill="#7fc8ff" stroke="#140d1f" stroke-width="3"/><path d="M6 24h36M24 6c-8 9-8 27 0 36M24 6c8 9 8 27 0 36M10 14h28M10 34h28" fill="none" stroke="#140d1f" stroke-width="2.5"/></svg>',
      audioSi: '<svg viewBox="0 0 48 48"><path d="M8 18h8l10-8v28l-10-8H8z" fill="#fff8e6" stroke="#140d1f" stroke-width="3" stroke-linejoin="round"/><path d="M32 16c4 4 4 12 0 16M36 11c7 7 7 19 0 26" fill="none" stroke="#140d1f" stroke-width="3" stroke-linecap="round"/></svg>',
      audioNo: '<svg viewBox="0 0 48 48"><path d="M8 18h8l10-8v28l-10-8H8z" fill="#fff8e6" stroke="#140d1f" stroke-width="3" stroke-linejoin="round"/><path d="M32 18l10 12M42 18L32 30" stroke="#d84a3a" stroke-width="4" stroke-linecap="round"/></svg>'
    }
  };
})();
