/* =====================================================================
   Matematica · terze · Capitolo 2 · Stanza: LONDRA, 1557 — la bottega del tipografo (Lez. 4)
   Madama Parolona, alla finestra, ha rubato dalla cassa i caratteri dell'uguale ed è innamorata della parola
   «zenzizenzizenzike». Il capobottega fa passare verso il banco delle bozze solo gli apprendisti:
   TRAVESTIRSI → il grembiule appeso al gancio + il berretto nascosto nel cesto degli stracci (combinarli),
   poi usare il travestimento sul capobottega (Penna fa la piuma del berretto) → LE BOZZE DI RECORDE:
   polinomio da ridurre e ordinare (scelta), grado di un polinomio (TASTIERINO), addizione di polinomi
   (TASTIERINO, coefficiente con il segno) → I REGOLI GEMELLI (scelta): il gemello di «pa + q + ra» è il righello
   di al-Khwarizmi → flag serveRegolo: si torna a Baghdad → con il righello: l'uguale torna, pagina 5 del diario
   (il ricciolo = «uguale», con domanda) → in dono il carattere dell'uguale per la macchina di Tours.
   Fatti storici verificati: CAPITOLI.md (Recorde, The Whetstone of Witte 1557, «linee gemelle», + e − tedeschi,
   zenzizenzizenzike = potenza ottava). La bottega e il capobottega sono inventati.
   ===================================================================== */
(function () {
  Motore.aggiungi("oggetti", {
    grembiule: { icona: "ogg-grembiule", nome: "ogg.grembiule", descrizione: "ogg.grembiule.d", suAltro: "grembiule.altro" },
    berretto: { icona: "ogg-berretto", nome: "ogg.berretto", descrizione: "ogg.berretto.d", suAltro: "grembiule.altro" },
    travestimento: { icona: "ogg-travestimento", nome: "ogg.travestimento", descrizione: "ogg.travestimento.d", suAltro: "travestimento.altro" },
    pagina5: { icona: "ogg-diario", nome: "ogg.pagina5", descrizione: "ogg.pagina5.d", suAltro: "pagina.altro" },
    uguale: { icona: "ogg-uguale", nome: "ogg.uguale", descrizione: "ogg.uguale.d", loSapevi: "ogg.uguale.ls", suAltro: "uguale.altro" }
  });
  Motore.aggiungi("personaggi", {
    recorde: { nome: "nome.recorde", colore: "#f2b8a0", voce: { altezza: 180, timbro: "triangle", passo: 0.08, volume: 0.04 } },
    capo: { nome: "nome.capo", colore: "#d8c8a0", voce: { altezza: 120, timbro: "square", passo: 0.09, volume: 0.02 } }
  });
  Motore.aggiungi("figurine", {
    recorde: { nome: "fig.recorde.nome", anni: "fig.recorde.anni", paese: "fig.recorde.paese", testo: "fig.recorde.testo", ritratto: "recorde" }
  });
  Motore.aggiungi("combinazioni", [
    { a: "grembiule", b: "berretto", fai: async function (m) {
      m.togli("grembiule"); m.togli("berretto"); m.prendi("travestimento");
      await m.pensa("t2l.trav.1");
      await m.dice("penna", "t2l.trav.2");
    } }
  ]);

  var APICI = "⁰¹²³⁴⁵⁶⁷⁸⁹";
  function sup(n) { return n === 1 ? "" : String(n).split("").map(function (c) { return APICI[+c]; }).join(""); }
  function T(c, lett, e) {   // un termine con il suo segno davanti (per scrivere una somma)
    var s = c < 0 ? " − " : " + ", a = Math.abs(c);
    return s + (a === 1 && lett ? "" : a) + (lett ? lett + sup(e) : "");
  }
  function scrivi(termini) { var s = termini.join(""); return s.charAt(1) === "+" ? s.slice(3) : "−" + s.slice(3); }
  var meno = function (n) { return String(n).replace("-", "−"); };

  /* ---------- il travestimento: grembiule e berretto disegnati addosso a Zara (a ogni ritorno a Londra) ---------- */
  var GREMBIULE = '<path d="M-26 -436 Q4 -446 34 -436 L30 -372 L48 -366 C52 -300 54 -230 50 -170 Q4 -160 -44 -170 C-48 -230 -46 -300 -42 -366 L-22 -372 Z" fill="#c8b48a" stroke="#1d1428" stroke-width="3" stroke-linejoin="round"/>' +
    '<path d="M-42 -366 L-22 -372 M30 -372 L48 -366" stroke="#1d1428" stroke-width="3"/><rect x="-14" y="-330" width="34" height="24" rx="3" fill="#a8946a" stroke="#1d1428" stroke-width="2.5"/>' +
    '<g fill="#2a2a34"><circle cx="-10" cy="-400" r="4"/><circle cx="24" cy="-240" r="5"/><circle cx="-26" cy="-210" r="3"/></g>';
  var BRETELLE = '<path d="M-30 -446 L-20 -300 M38 -446 L28 -300" stroke="#a8946a" stroke-width="9"/><path d="M-36 -300 Q4 -292 44 -300" stroke="#a8946a" stroke-width="9" fill="none"/>';
  var BERRETTO = '<g stroke="#1d1428" stroke-width="3" stroke-linejoin="round"><ellipse cx="6" cy="-586" rx="56" ry="14" fill="#4a5a3a"/>' +
    '<path d="M-44 -588 C-42 -628 56 -632 58 -588 Q6 -600 -44 -588 Z" fill="#5a6a46"/>' +
    '<path d="M40 -604 C70 -650 92 -660 100 -654 C92 -628 70 -610 46 -598 Z" fill="#e8f0ff" stroke-width="2.5"/><path d="M46 -600 L96 -652" stroke-width="2"/></g>';
  function vestiZara(m) {
    var a = m.attore("zara"), NS = "http://www.w3.org/2000/svg";
    if (!a || !a.svgs) return;
    Object.keys(a.svgs).forEach(function (k) {
      var s = a.svgs[k];
      if (s.querySelector(".trav")) return;
      var giacche = s.querySelectorAll('[fill="url(#z-giacca)"]'), dopo = giacche[giacche.length - 1];
      var g = document.createElementNS(NS, "g"); g.setAttribute("class", "trav");
      g.innerHTML = k === "schiena" ? BRETELLE : GREMBIULE;
      if (dopo) dopo.parentNode.insertBefore(g, dopo.nextSibling); else s.appendChild(g);
      var c = document.createElementNS(NS, "g"); c.setAttribute("class", "trav"); c.innerHTML = BERRETTO;
      s.appendChild(c);
    });
  }

  async function passaCapo(m) {
    m.togli("travestimento");
    m.flag("travestita", true);
    vestiZara(m);
    m.suono("magia");
    await m.dice("narratore", "t2l.capo.trav.1");
    await m.dice("capo", "t2l.capo.trav.2");
    await m.dice("capo", "t2l.capo.trav.3");
  }

  /* ---------- 1. polinomio da ridurre e ordinare (scelta) ---------- */
  async function ordina(m) {
    var c1 = Alg3.a_caso(2, 5), c2 = Alg3.a_caso(3, 7), k = Alg3.a_caso(2, 9);
    var termini = Alg3.mescola([T(c2, "x", 1), T(c1, "x", 3), T(-k, "", 0), T(1, "x", 3), T(-1, "x", 1)]);
    var par = { pol: scrivi(termini), g: scrivi([T(c1 + 1, "x", 3), T(c2 - 1, "x", 1), T(-k, "", 0)]) };
    await m.dice("recorde", "t2l.ord.intro", par);
    m.aiutoQui({ id: "h-ord", chi: "penna", chiavi: ["t2l.h.ord.1", "t2l.h.ord.2", "t2l.h.ord.3"], param: par });
    for (;;) {
      var v = await m.scegli(Alg3.mescola([
        { testo: "t2t.op", valore: "giusta", param: { t: par.g } },
        { testo: "t2t.op", valore: "esponenti", param: { t: scrivi([T(c1 + 1, "x", 6), T(c2 - 1, "x", 1), T(-k, "", 0)]) } },
        { testo: "t2t.op", valore: "uno", param: { t: scrivi([T(c1, "x", 3), T(c2 - 1, "x", 1), T(-k, "", 0)]) } },
        { testo: "t2t.op", valore: "crescente", param: { t: scrivi([T(-k, "", 0), T(c2 - 1, "x", 1), T(c1 + 1, "x", 3)]) } }
      ]), "t2l.ord.domanda", par);
      if (v === "giusta") break;
      m.suono("errore"); m.errore("t2-polinomio-" + v);
      await m.dice("penna", "t2l.ord.err." + v, par);
    }
    m.suono("prendi"); m.aiutoQui(null);
    m.flag("lOrdina", true);
    await m.dice("recorde", "t2l.ord.ok", par);
    m.annota("t2l.q.ordina");
  }

  /* ---------- 2. il grado di un polinomio (tastierino) ---------- */
  async function grado(m) {
    var e1 = Alg3.a_caso(2, 3), f1 = Alg3.a_caso(2, 3), D = e1 + f1, e2 = D - 1, f3 = Alg3.a_caso(1, D - 2);
    var p = Alg3.a_caso(2, 7), q = Alg3.a_caso(2, 9), r = Alg3.a_caso(2, 6);
    var termini = Alg3.mescola([T(p, "a" + sup(e1) + "b", f1), T(-q, "a", e2), T(r, "b", f3)]);
    var tutti = e1 + f1 + e2 + f3;
    var par = { pol: scrivi(termini), g: String(D), m1: "a" + sup(e1) + "b" + sup(f1), e1: String(e1), f1: String(f1), e2: String(e2) };
    await m.dice("recorde", "t2l.gr.intro", par);
    m.aiutoQui({ id: "h-grpol", chi: "penna", chiavi: ["t2l.h.gr.1", "t2l.h.gr.2", "t2l.h.gr.3"], param: par });
    await Alg3.finoAlGiusto(m, "t2l.gr.domanda", par, { max: 2, promemoria: "t2l.gr.prom" }, D, async function (n) {
      var tipo = n === e2 ? "esponente" : (n === tutti ? "somma" : (n === 3 ? "termini" : "calcolo"));
      m.errore("t2-gradopol-" + tipo);
      await m.dice("penna", "t2l.gr.err." + tipo, Object.assign({ n: String(n) }, par));
    });
    m.aiutoQui(null);
    m.flag("lGrado", true);
    await m.dice("recorde", "t2l.gr.ok", par);
    m.annota("t2l.q.grado");
  }

  /* ---------- 3. addizione di due polinomi (tastierino, con il segno) ---------- */
  async function addizione(m) {
    var a1 = Alg3.a_caso(3, 7), a2 = Alg3.a_caso(1, a1 - 2), b1 = Alg3.a_caso(2, 6), b2 = b1 + Alg3.a_caso(1, 5), c1 = Alg3.a_caso(2, 9), c2 = Alg3.a_caso(1, 9);
    var A = scrivi([T(a1, "x", 2), T(b1, "x", 1), T(-c1, "", 0)]), B = scrivi([T(-a2, "x", 2), T(-b2, "x", 1), T(c2, "", 0)]);
    var S = b1 - b2;
    var par = { A: A, B: B, b1: String(b1), b2: String(b2), S: meno(S), g: scrivi([T(a1 - a2, "x", 2), T(S, "x", 1), T(c2 - c1, "", 0)]) };
    await m.dice("recorde", "t2l.add.intro", par);
    m.aiutoQui({ id: "h-add", chi: "penna", chiavi: ["t2l.h.add.1", "t2l.h.add.2", "t2l.h.add.3"], param: par });
    await Alg3.finoAlGiusto(m, "t2l.add.domanda", par, { max: 2, segno: true, promemoria: "t2l.add.prom" }, S, async function (n) {
      var tipo = n === -S ? "segno" : (n === b1 + b2 ? "somma" : "calcolo");
      m.errore("t2-addpol-" + tipo);
      await m.dice("penna", "t2l.add.err." + tipo, Object.assign({ n: meno(n) }, par));
    });
    m.aiutoQui(null);
    m.flag("lAddizione", true);
    await m.dice("recorde", "t2l.add.ok", par);
    m.annota("t2l.q.addizione");
  }

  /* ---------- 4. i regoli gemelli (scelta) ---------- */
  async function gemelli(m) {
    var p = Alg3.a_caso(2, 4), r = Alg3.a_caso(1, 3), q = Alg3.a_caso(2, 6), s = p + r;
    var mio = scrivi([T(p, "a", 1), T(q, "", 0), T(r, "a", 1)]);
    var luoghi = Alg3.mescola(["t2l.gem.tipografo", "t2l.gem.rilegatore", "t2l.gem.vicino"]);
    var par = { mio: mio, giusto: scrivi([T(q, "", 0), T(s, "a", 1)]) };
    await m.dice("recorde", "t2l.gem.intro.2", par);
    m.aiutoQui({ id: "h-gem", chi: "penna", chiavi: ["t2l.h.gem.1", "t2l.h.gem.2", "t2l.h.gem.3"], param: par });
    for (;;) {
      var v = await m.scegli(Alg3.mescola([
        { testo: "t2l.gem.op.baghdad", valore: "giusta", param: { t: par.giusto } },
        { testo: luoghi[0], valore: "esponente", param: { t: scrivi([T(s, "a", 2), T(q, "", 0)]) } },
        { testo: luoghi[1], valore: "tutto", param: { t: scrivi([T(s + q, "a", 1)]) } },
        { testo: luoghi[2], valore: "dimentica", param: { t: scrivi([T(p, "a", 1), T(q, "", 0)]) } }
      ]), "t2l.gem.domanda", par);
      if (v === "giusta") break;
      m.suono("errore"); m.errore("t2-gemelli-" + v);
      await m.dice("penna", "t2l.gem.err." + v, par);
    }
    m.suono("prendi"); m.aiutoQui(null);
    m.flag("serveRegolo", true);
    await m.dice("recorde", "t2l.gem.ok.1", par);
    await m.dice("penna", "t2l.gem.ok.2");
    m.annota("t2l.q.gemelli");
  }

  /* ---------- con il righello: l'uguale torna ---------- */
  async function ugualeTorna(m) {
    m.togli("righello");
    m.suono("magia");
    m.effetto("lampo-lettere", 1180, 440, 1200);
    m.flag("ugualeTornato", true);
    await m.dice("recorde", "t2l.fine.1");
    await m.dice("parolona", "t2l.fine.2");
    m.flag("parolonaVia", true);
    await m.dice("penna", "t2l.fine.3");
    m.prendi("pagina5");
    await leggiPagina5(m);
    await m.dice("recorde", "t2l.fine.4");
    m.prendi("uguale");
    m.figurina("recorde");
    m.annota("t2l.q.recorde");
    await m.dice("penna", "t2l.fine.6");
  }

  /* ---------- la pagina 5 del diario: il ricciolo ---------- */
  async function leggiPagina5(m) {
    var a = Alg3.a_caso(2, 6), b = Alg3.a_caso(2, 6);
    await m.pannello(function (p, chiudi) {
      p.innerHTML = "<h2>" + Lingue.html("t2l.pag5.titolo") + "</h2>" +
        '<div class="pn-diario"><div>' + Lingue.html("t2l.pag5.testo") + "</div>" +
        '<div class="riga num">' + a + Alg3.simbolo("stella") + b + Alg3.simbolo("ricciolo") + (a + b) + "</div>" +
        '<div class="riga num">' + (a + b) + Alg3.simbolo("ricciolo") + a + Alg3.simbolo("stella") + b + "</div>" +
        '<div class="firma">' + Lingue.html("t2a.pag3.firma") + "</div></div>";
      var t = document.createElement("button"); t.className = "pn-tasto principale"; t.innerHTML = Lingue.html("t2.pag1.capito");
      t.addEventListener("click", function (e) { e.stopPropagation(); chiudi(); });
      p.appendChild(t);
    }, { chiudibile: false });
    if (m.flag("riccioloCapito")) return;
    m.aiutoQui({ id: "h-ricciolo", chi: "penna", chiavi: ["t2l.h.ricc.1", "t2l.h.ricc.2", "t2l.h.ricc.3"] });
    for (;;) {
      var v = await m.scegli(Alg3.mescola([
        { testo: "t2l.ricc.giusta", valore: "giusta" },
        { testo: "t2l.ricc.piu", valore: "piu" },
        { testo: "t2l.ricc.risultato", valore: "risultato" }
      ]), "t2l.ricc.domanda");
      if (v === "giusta") break;
      m.suono("errore"); m.errore("t2-diario-ricciolo-" + v);
      await m.dice("penna", "t2l.ricc.err." + v);
    }
    m.suono("prendi"); m.aiutoQui(null);
    m.flag("riccioloCapito", true);
    await m.dice("penna", "t2l.ricc.ok");
    m.annota("t2l.q.diario5");
  }

  async function lezione(m) {
    if (!m.flag("travestita")) return m.dice("capo", "t2l.capo.no");
    if (!m.flag("lOrdina")) await ordina(m);
    if (!m.flag("lGrado")) await grado(m);
    if (!m.flag("lAddizione")) await addizione(m);
    if (!m.flag("serveRegolo")) return gemelli(m);
    if (!m.flag("ugualeTornato")) return m.dice("recorde", m.ha("righello") ? "t2l.gem.hai" : "t2l.gem.aspetta");
    return m.dice("recorde", "t2l.dlg.dopo");
  }

  async function dialogoRecorde(m) {
    if (!m.flag("travestita")) return m.dice("capo", "t2l.capo.no");
    var opz = [];
    if (!m.flag("serveRegolo")) opz.push({ testo: "t2l.dlg.bozze", valore: "lezione" });
    opz.push({ testo: "t2l.dlg.chi", valore: "chi" }, { testo: "t2l.dlg.uguale", valore: "uguale" }, { testo: "t2l.dlg.segni", valore: "segni" }, { testo: "t2l.dlg.ciao", valore: "ciao" });
    var v = await m.scegli(opz);
    if (v === "lezione") return lezione(m);
    if (v === "chi") { await m.dice("recorde", "t2l.dlg.chi.r1"); }
    if (v === "uguale") { await m.dice("recorde", "t2l.dlg.uguale.r1"); await m.dice("recorde", "t2l.dlg.uguale.r2"); }
    if (v === "segni") { await m.dice("recorde", "t2l.dlg.segni.r1"); await m.dice("penna", "t2l.dlg.segni.r2"); }
    if (v === "ciao") await m.dice("recorde", "t2l.dlg.ciao.r");
  }

  var finestraParolona = '<svg viewBox="-150 -720 300 330" style="overflow:hidden"><use href="#parolona" x="-150" y="-700" width="300" height="715"/></svg>';

  Motore.stanza("londra", {
    sfondo: "londra",
    pavimento: { xMin: 180, xMax: 1340, yMin: 720, yMax: 880 },
    scala: { lontano: { y: 720, s: 0.86 }, vicino: { y: 880, s: 1 } },
    attori: [
      { id: "zara", simbolo: "zara-fronte", viste: { fronte: "zara-fronte", profilo: "zara-profilo", schiena: "zara-schiena" },
        vista: [-110, -600, 230, 615], piedi: [5, 0], altezza: 440, x: 260, y: 850, dir: 1 },
      { id: "recorde", simbolo: "recorde", vista: [-110, -600, 230, 615], piedi: [0, 0], altezza: 450, x: 1460, y: 800, dir: -1, fisso: true }
    ],
    elementi: [
      { id: "parolona-fin", classe: "", x: 800, y: 128, larghezza: 160, altezza: 160, svg: finestraParolona,
        visibile: function (m) { return !m.flag("parolonaVia"); } },
      { id: "grembiule", classe: "", x: 286, y: 380, larghezza: 70, altezza: 90,
        svg: '<svg viewBox="0 0 140 140"><use href="#ogg-grembiule"/></svg>',
        visibile: function (m) { return !m.flag("grembiulePreso"); } },
      { id: "uguale-cassa", classe: "", x: 1150, y: 418, larghezza: 44, altezza: 40,
        svg: '<svg viewBox="0 0 44 40"><rect x="4" y="10" width="36" height="7" fill="#ffd860" stroke="#1d1428" stroke-width="2"/><rect x="4" y="24" width="36" height="7" fill="#ffd860" stroke="#1d1428" stroke-width="2"/></svg>',
        visibile: function (m) { return m.flag("ugualeTornato"); } },
      { id: "penna", classe: "penna-el", personaggio: "penna", x: 560, y: 600, larghezza: 80, altezza: 128,
        svg: '<svg viewBox="-70 -230 150 240" overflow="visible"><use href="#penna" x="-70" y="-230" width="150" height="240"/></svg>',
        visibile: function (m) { return !m.flag("travestita"); } }
    ],
    entrata: async function (m) {
      if (m.flag("travestita")) vestiZara(m);
      if (m.flag("londraArrivo")) {
        if (m.ha("righello") && !m.flag("ugualeTornato")) await m.dice("penna", "t2l.ritorno");
        return;
      }
      m.flag("londraArrivo", true);
      await m.cartello("t2l.titolo", "t2l.sottotitolo", 3000);
      await m.dice("narratore", "t2l.arrivo.1");
      await m.dice("parolona", "t2l.arrivo.2");
      await m.dice("parolona", "t2l.arrivo.3");
      await m.dice("penna", "t2l.arrivo.4");
      await m.dice("capo", "t2l.arrivo.5");
    },
    hotspot: [
      { id: "parolona", nome: "t2l.hs.parolona", forma: "M790 120 H980 V290 H790 Z", arrivo: [880, 740], vista: "schiena",
        presente: function (m) { return !m.flag("parolonaVia"); },
        guarda: "t2l.par.guarda", usa: "t2l.par.usa",
        parla: async function (m) { await m.dice("parolona", "t2l.par.parla.1"); await m.dice("parolona", "t2l.par.parla.2"); await m.dice("penna", "t2l.par.parla.3"); } },
      { id: "finestra", nome: "t2l.hs.finestra", forma: "M770 110 H990 V290 H770 Z", arrivo: [880, 740], vista: "schiena",
        presente: function (m) { return m.flag("parolonaVia"); },
        guarda: "t2l.fin.guarda", usa: "t2l.fin.usa", parla: "t2l.fin.parla" },
      { id: "fogli", nome: "t2l.hs.fogli", forma: "M60 110 H720 V230 H60 Z M1060 110 H1550 V226 H1060 Z", arrivo: [600, 740], vista: "schiena",
        guarda: "t2l.fogli.guarda", usa: "t2l.fogli.usa", parla: "t2l.fogli.parla" },
      { id: "torchio", nome: "t2l.hs.torchio", forma: "M380 236 H760 V690 H380 Z", arrivo: [560, 750], vista: "schiena",
        guarda: "t2l.torchio.guarda", usa: "t2l.torchio.usa", parla: "t2l.torchio.parla", con: { righello: "t2l.torchio.righello" }, conAltro: "t2l.torchio.altro" },
      { id: "grembiule", nome: "t2l.hs.grembiule", forma: "M280 376 H360 V476 H280 Z", arrivo: [320, 740], vista: "schiena",
        presente: function (m) { return !m.flag("grembiulePreso"); },
        guarda: "t2l.gremb.guarda",
        usa: async function (m) { m.flag("grembiulePreso", true); m.prendi("grembiule"); await m.pensa("t2l.gremb.prendi"); },
        parla: "t2l.gremb.parla" },
      { id: "cesto", nome: "t2l.hs.cesto", forma: "M140 650 H340 V780 H140 Z", arrivo: [360, 800], verso: -1,
        guarda: "t2l.cesto.guarda",
        usa: async function (m) {
          if (m.flag("berrettoPreso")) return m.pensa("t2l.cesto.vuoto");
          m.flag("berrettoPreso", true); m.prendi("berretto"); await m.pensa("t2l.cesto.berretto");
        },
        parla: "t2l.cesto.parla" },
      { id: "capo", nome: "t2l.hs.capo", forma: "M836 300 H930 V700 H836 Z", arrivo: [760, 780], verso: 1,
        guarda: function (m) { return m.flag("travestita") ? "t2l.capo.guarda2" : "t2l.capo.guarda"; },
        usa: "t2l.capo.usa",
        parla: async function (m) { await m.dice("capo", m.flag("travestita") ? "t2l.capo.parla2" : "t2l.capo.no"); },
        con: { travestimento: passaCapo, grembiule: "t2l.capo.mezzo", berretto: "t2l.capo.mezzo" }, conAltro: "t2l.capo.altro" },
      { id: "cassa", nome: "t2l.hs.cassa", forma: "M1040 360 H1320 V540 H1040 Z", arrivo: [1180, 740], vista: "schiena",
        guarda: function (m) { return m.flag("ugualeTornato") ? "t2l.cassa.guarda2" : "t2l.cassa.guarda"; }, usa: "t2l.cassa.usa", parla: "t2l.cassa.parla" },
      { id: "recorde", nome: "t2l.hs.recorde", forma: "M1380 330 H1550 V800 H1380 Z", arrivo: [1320, 820], verso: 1,
        guarda: "t2l.rec.guarda", usa: "t2l.rec.usa", parla: dialogoRecorde,
        con: { righello: async function (m) {
          if (!m.flag("travestita")) return m.dice("capo", "t2l.capo.no");
          if (!m.flag("serveRegolo")) return m.dice("recorde", "t2l.rec.righelloPresto");
          return ugualeTorna(m);
        }, tavoletta: "t2l.rec.tavoletta", disegno: "t2l.rec.disegno", travestimento: "t2l.rec.trav" },
        conAltro: "t2l.rec.altro" },
      { id: "bozze", nome: "t2l.hs.bozze", forma: "M1390 500 H1600 V610 H1390 Z", arrivo: [1320, 780], verso: 1,
        guarda: "t2l.bozze.guarda", usa: function (m) { return m.flag("travestita") ? lezione(m) : m.dice("capo", "t2l.capo.no"); }, parla: "t2l.bozze.parla" },
      { id: "penna", nome: "t2a.hs.penna", forma: "M550 560 H650 V704 H550 Z", arrivo: [540, 760], vista: "schiena",
        presente: function (m) { return !m.flag("travestita"); },
        guarda: function (m) { return m.flag("travestita") ? "t2l.penna.guarda2" : "t2l.penna.guarda"; }, usa: "t2a.penna.usa", parla: "t2l.penna.parla", conAltro: "t2a.penna.altro" },
      { id: "treno", nome: "t2t.hs.treno", forma: "M-10 160 H40 V720 H-10 Z M0 720 H150 V900 H0 Z", arrivo: [200, 840], verso: -1,
        guarda: "t2l.treno.guarda", usa: Alg3.sali, parla: "t2a.treno.parla" }
    ]
  });

  /* ---------- aiuti a gradini ---------- */
  Alg3.aiutiStanze.londra = function (m) {
    if (!m.flag("travestita")) {
      if (m.ha("travestimento")) return { id: "lo-passa", chi: "penna", chiavi: ["t2l.aiuto.passa1", "t2l.aiuto.passa2"] };
      if (!m.ha("grembiule") && !m.flag("grembiulePreso")) return { id: "lo-gremb", chi: "penna", chiavi: ["t2l.aiuto.capo1", "t2l.aiuto.gremb1", "t2l.aiuto.gremb2"] };
      if (!m.flag("berrettoPreso")) return { id: "lo-berr", chi: "penna", chiavi: ["t2l.aiuto.berr1", "t2l.aiuto.berr2", "t2l.aiuto.berr3"] };
      return { id: "lo-comb", chi: "zara", chiavi: ["t2l.aiuto.comb1", "t2l.aiuto.comb2"] };
    }
    if (!m.flag("serveRegolo")) return { id: "lo-lez", chi: "penna", chiavi: ["t2l.aiuto.lez1"] };
    if (!m.flag("ugualeTornato")) {
      if (m.ha("righello")) return { id: "lo-dai", chi: "penna", chiavi: ["t2l.aiuto.dai1", "t2l.aiuto.dai2"] };
      return { id: "lo-baghdad", chi: "penna", chiavi: ["t2l.aiuto.bag1", "t2l.aiuto.bag2", "t2l.aiuto.bag3"] };
    }
    return { id: "lo-tours", chi: "penna", chiavi: ["t2l.aiuto.tours1", "t2l.aiuto.tours2"] };
  };
})();
