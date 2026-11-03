/* =====================================================================
   STAZIONE: il menu iniziale della piattaforma.
   Biglietto della classe → treno (gioco) → capitolo.
   L'orologio grande, tenuto premuto 3 secondi, apre la modalità docente.
   ===================================================================== */
var Stazione = (function () {
  var D = {}, scala = 1, classe = null, pannello = null, imp = Salvataggio.impostazioni();
  var POSTI = [                                    // dove stanno i treni sul disegno
    { binario: 1, area: [140, 380, 390, 470], nome: [175, 852] },
    { binario: 2, area: [610, 300, 380, 550], nome: [640, 852] },
    { binario: 3, area: [1160, 560, 240, 280], nome: [1120, 852] }
  ];
  var VOCE_OTTAVIO = { altezza: 520, timbro: "triangle", passo: 0.06, volume: 0.04 };

  function el(tag, cl, html) { var e = document.createElement(tag); if (cl) e.className = cl; if (html != null) e.innerHTML = html; return e; }
  function T(k, p) { return Lingue.html(k, p); }

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
    var g = el("div", "st-biglietti");
    Piattaforma.classi().forEach(function (c) {
      // se la classe ha scelto un nome per il biglietto, quello è il nome grande; la classe va sotto
      var grande = c.soprannome || c.nome, sotto = c.soprannome ? c.nome + " · " : "";
      var b = el("button", "st-biglietto" + (c.id === classe ? " scelto" : "") + (c.soprannome ? " con-nome" : ""),
        '<span class="st-b-tipo">' + T("st.bigliettoTipo") + '</span><span class="st-b-nome"></span>' +
        '<span class="st-b-anno"></span>');
      b.querySelector(".st-b-nome").textContent = grande || Lingue.semplice("st.liberaNome");
      b.querySelector(".st-b-anno").textContent = sotto + Lingue.semplice("st.anno" + (c.anno || 2));
      b.addEventListener("click", function () {
        if (casa) { Suoni.effetto("prendi"); apri(pannelloNumero(c), false); return; }
        classe = c.id; Salvataggio.ultimaClasse(c.id); chiudi(); aggiorna();
        Suoni.effetto("prendi");
        parlaOttavio("st.ottavio.2");
      });
      g.appendChild(b);
    });
    p.appendChild(g);
    if (!Salvataggio.classi().length && !casa) p.appendChild(el("p", "pn-nota", T("st.liberaNota")));
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
            if (n >= 1 && n <= 40) {
              Casa.salvaGiocatore({ classe: c.id, numero: n });
              classe = c.id; Salvataggio.ultimaClasse(c.id); chiudi(); aggiorna();
              Suoni.effetto("prendi"); parlaOttavio("st.ottavio.2");
            }
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

  /* a casa: un capitolo si apre con la parola d'ordine detta in classe */
  function pannelloParola(gioco, cap) {
    return function (p) {
      p.appendChild(el("h2", "", T("st.casa.parolaTitolo")));
      p.appendChild(el("p", "", "<b>" + T(cap.titolo) + "</b>"));
      p.appendChild(el("p", "pn-nota", T("st.casa.parolaNota")));
      var inp = el("input", "st-parola"); inp.type = "text"; inp.maxLength = 30;
      inp.autocomplete = "off"; inp.setAttribute("autocapitalize", "characters"); inp.spellcheck = false;
      var no = el("p", "st-parola-no", "");
      function prova() {
        if (Casa.parolaGiusta(gioco.id, cap.id, inp.value)) {
          Piattaforma.sblocca(classe, gioco.id, cap.id, true);
          Suoni.effetto("magia"); apri(pannelloCapitoli(gioco));
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

  /* ---------------- capitoli di un gioco ---------------- */
  function pannelloCapitoli(gioco) {
    return function (p) {
      p.appendChild(el("h2", "", T(gioco.titolo) + ' <span class="st-materia">· ' + T(gioco.materia) + "</span>"));
      p.appendChild(el("p", "", T(gioco.descrizione)));
      var c = Piattaforma.trovaClasse(classe) || { anno: 2 };
      var capitoli = gioco.capitoli || [];
      if (!capitoli.length) { p.appendChild(el("p", "st-officina", T("st.inCostruzione"))); return; }
      var pr = Salvataggio.progressi(gioco.id, classe);
      var anni = [c.anno].concat([1, 2, 3].filter(function (a) { return a !== c.anno; }));
      anni.forEach(function (anno) {
        var delAnno = capitoli.filter(function (x) { return x.anno === anno; });
        if (!delAnno.length) return;
        p.appendChild(el("h3", "st-anno", T("st.anno" + anno)));
        delAnno.forEach(function (cap) {
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
            bp.addEventListener("click", function () { apri(pannelloParola(gioco, cap)); });
            riga.appendChild(bp);
          }
          if (aperto) {
            var b = el("button", "pn-tasto principale", iniziato && !fatto ? T("st.riprendi") : T("st.parti"));
            b.addEventListener("click", function () { Suoni.effetto("magia"); Piattaforma.gioca(gioco.id, cap.id, classe); });
            riga.appendChild(b);
          }
          p.appendChild(riga);
        });
      });
    };
  }

  /* ---------------- tabellone e scritte ---------------- */
  function disegnaTabellone(gira) {
    var giochi = Piattaforma.giochi();
    D.tabellone.innerHTML = '<div class="tb-titolo">' + T("st.partenze") + "</div>";
    POSTI.forEach(function (posto, i) {
      var g = giochi[i];
      var r = el("div", "tb-riga" + (gira ? " gira" : ""),
        '<span class="tb-bin">' + posto.binario + '</span><span class="tb-dest">' + (g ? T(g.titolo) : T("st.prossimamente")) +
        '</span><span class="tb-mat">' + (g ? T(g.materia) : "—") + '</span><span class="tb-stato">' + (g ? T("st.inPartenza") : "") + "</span>");
      r.style.animationDelay = i * 0.12 + "s";
      D.tabellone.appendChild(r);
    });
  }

  function disegnaTreni() {
    D.treni.innerHTML = "";
    var giochi = Piattaforma.giochi();
    POSTI.forEach(function (posto, i) {
      var g = giochi[i];
      var a = el("button", "st-treno" + (g ? "" : " vuoto"));
      a.style.left = posto.area[0] + "px"; a.style.top = posto.area[1] + "px";
      a.style.width = posto.area[2] + "px"; a.style.height = posto.area[3] + "px";
      a.setAttribute("aria-label", g ? Lingue.semplice(g.titolo) : Lingue.semplice("st.prossimamente"));
      a.addEventListener("click", function () {
        if (!classe) { apri(pannelloBiglietti, false); return; }
        if (!g) { parlaOttavio("st.ottavio.3"); return; }
        Suoni.effetto("pagina"); apri(pannelloCapitoli(g));
      });
      D.treni.appendChild(a);
      var n = el("div", "st-nome-treno" + (g ? "" : " vuoto"), g ? T(g.titolo) + "<small>" + T(g.materia) + "</small>" : T("st.prossimamente"));
      n.style.left = posto.nome[0] + "px"; n.style.top = posto.nome[1] + "px";
      D.treni.appendChild(n);
    });
  }

  function aggiorna() {
    var inf = Lingue.info();
    D.ui.setAttribute("dir", inf.dir); D.ui.setAttribute("lang", inf.codice);
    document.documentElement.lang = inf.codice;
    D.palco.style.setProperty("--font", inf.font);
    document.title = Lingue.semplice("st.titolo");
    D.ui.querySelectorAll("[data-t]").forEach(function (n) { n.innerHTML = T(n.getAttribute("data-t")); });
    var gioc = Casa.attiva() && Casa.giocatore();
    D.bigliettoScelto.innerHTML = classe
      ? "🎫 " + (gioc ? T("st.casa.biglietto", { classe: Piattaforma.nomeClasse(classe), numero: String(gioc.numero) }) : Lingue.html("st.biglietto", { nome: Piattaforma.nomeClasse(classe) })) +
        ' <span class="st-cambia">' + T("st.cambia") + "</span>"
      : "🎫 " + T(Casa.attiva() ? "st.casa.chiGioca" : "st.scegliBiglietto");
    D.bozza.innerHTML = inf.codice === "it" ? "" : T("ui.bozza");
    D.bozza.classList.toggle("vuota", inf.codice === "it");
    disegnaTreni();
    if (D.fumetto.chiave) D.fumetto.querySelector(".st-f-testo").innerHTML = T(D.fumetto.chiave);
    ridisegnaPannello();
  }

  function parlaOttavio(chiave) {
    D.fumetto.chiave = chiave;
    D.fumetto.querySelector(".st-f-testo").innerHTML = T(chiave);
    D.fumetto.classList.remove("mostra"); void D.fumetto.offsetWidth; D.fumetto.classList.add("mostra");
    clearTimeout(parlaOttavio.t);
    parlaOttavio.t = setTimeout(function () { D.fumetto.classList.remove("mostra"); D.fumetto.chiave = null; }, 7000);
    D.ottavio.classList.remove("salta"); void D.ottavio.offsetWidth; D.ottavio.classList.add("salta");
    Suoni.borbotta(VOCE_OTTAVIO, Lingue.semplice(chiave));
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

  return {
    mostra: function () {
      Lingue.imposta(imp.lingua || "it");
      Suoni.muto(imp.muto);
      var ultima = Salvataggio.ultimaClasse(), casa = Casa.attiva(), gioc = Casa.giocatore();
      if (casa) ultima = gioc && gioc.classe;
      classe = Piattaforma.trovaClasse(ultima) ? ultima : null;

      D.contenitore = el("div", "contenitore");
      D.palco = el("div", "palco stazione");
      D.sfondo = el("div", "l-sfondo");
      Grafica.disegnaSfondo("stazione", D.sfondo);
      D.ui = el("div", "ui");
      D.ui.innerHTML =
        '<div class="tabellone"></div>' +
        '<div class="st-treni"></div>' +
        '<button class="st-biglietto-scelto"></button>' +
        '<div class="barra-alta">' +
          '<button class="tasto" data-azione="lingua"><span class="icona">' + Stazione.ICONE.lingua + '</span><span class="etich" data-t="ui.lingua"></span></button>' +
          '<button class="tasto" data-azione="audio"><span class="icona">' + (imp.muto ? Stazione.ICONE.audioNo : Stazione.ICONE.audioSi) + '</span><span class="etich" data-t="ui.audio"></span></button>' +
        "</div>" +
        '<div class="bozza vuota"></div>' +
        '<div class="st-orologio" aria-hidden="true"><div class="st-anello"></div></div>' +
        '<div class="st-ottavio"><svg viewBox="-70 -150 140 160"><use href="#ottavio" x="-70" y="-150" width="140" height="160"/></svg></div>' +
        '<div class="st-fumetto"><b data-t="st.ottavio"></b><span class="st-f-testo"></span></div>' +
        '<div class="velo"></div><div class="pannello" role="dialog"></div>';
      D.palco.appendChild(D.sfondo); D.palco.appendChild(D.ui);
      D.contenitore.appendChild(D.palco); document.body.appendChild(D.contenitore);
      ["tabellone", "velo", "pannello", "bozza"].forEach(function (c) { D[c] = D.ui.querySelector("." + c); });
      D.treni = D.ui.querySelector(".st-treni");
      D.bigliettoScelto = D.ui.querySelector(".st-biglietto-scelto");
      D.orologio = D.ui.querySelector(".st-orologio");
      D.anello = D.ui.querySelector(".st-anello");
      D.ottavio = D.ui.querySelector(".st-ottavio");
      D.fumetto = D.ui.querySelector(".st-fumetto");

      D.bigliettoScelto.addEventListener("click", function () { apri(pannelloBiglietti, !!classe); });
      D.ottavio.addEventListener("click", function () { parlaOttavio(classe ? "st.ottavio.2" : "st.ottavio.1"); });
      D.ui.querySelector('[data-azione="lingua"]').addEventListener("click", function () { apri(pannelloLingue); });
      D.ui.querySelector('[data-azione="audio"]').addEventListener("click", function () {
        imp.muto = !imp.muto; Suoni.muto(imp.muto); Salvataggio.salvaImpostazioni(imp);
        D.ui.querySelector('[data-azione="audio"] .icona').innerHTML = imp.muto ? Stazione.ICONE.audioNo : Stazione.ICONE.audioSi;
      });
      D.velo.addEventListener("click", function () { if (pannello && pannello.chiudibile) chiudi(); });
      window.addEventListener("keydown", function (e) { if (e.key === "Escape" && pannello && pannello.chiudibile) chiudi(); });
      window.addEventListener("resize", adatta);
      preparaOrologio();
      adatta(); aggiorna(); disegnaTabellone(true);
      setTimeout(function () { parlaOttavio(casa && !classe ? "st.ottavio.casa" : "st.ottavio.1"); }, 700);
      // in classe, ogni volta che si torna alla stazione si conferma il biglietto: niente salvataggi nella classe sbagliata;
      // a casa il dispositivo è di uno studente solo, quindi si chiede solo la prima volta
      if (!casa || !classe) setTimeout(function () { apri(pannelloBiglietti, !!classe); }, 1600);
    },
    ICONE: {
      lingua: '<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="18" fill="#7fc8ff" stroke="#140d1f" stroke-width="3"/><path d="M6 24h36M24 6c-8 9-8 27 0 36M24 6c8 9 8 27 0 36M10 14h28M10 34h28" fill="none" stroke="#140d1f" stroke-width="2.5"/></svg>',
      audioSi: '<svg viewBox="0 0 48 48"><path d="M8 18h8l10-8v28l-10-8H8z" fill="#fff8e6" stroke="#140d1f" stroke-width="3" stroke-linejoin="round"/><path d="M32 16c4 4 4 12 0 16M36 11c7 7 7 19 0 26" fill="none" stroke="#140d1f" stroke-width="3" stroke-linecap="round"/></svg>',
      audioNo: '<svg viewBox="0 0 48 48"><path d="M8 18h8l10-8v28l-10-8H8z" fill="#fff8e6" stroke="#140d1f" stroke-width="3" stroke-linejoin="round"/><path d="M32 18l10 12M42 18L32 30" stroke="#d84a3a" stroke-width="4" stroke-linecap="round"/></svg>'
    }
  };
})();
