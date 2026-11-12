/* =====================================================================
   Matematica · terze · Livello G1 · Stanza: SIENE (Egitto), circa 240 a.C. — Eratostene (Lez. 2)
   COSTRUIRE UNO STRUMENTO: per controllare che a mezzogiorno il sole non fa ombra, l'asta deve essere
   perfettamente verticale, ma è storta (Madama Parolona ci si è appoggiata). Sasso forato vicino al pozzo
   + gomitolo (dal vagone) = FILO A PIOMBO → usato sull'asta: dritta, niente ombra → MOMENTO WOW:
   Eratostene misura la Terra (7°12' = 1/50 di giro) → BIVIO DI CLASSE: angolo doppio, arco…
   → lunghezza di un arco, valore esatto → angolo al centro da un arco (tastierino) → la Terra: 50 × 5000 stadi
   → spicchio 2, foglio di papiro (servirà ad Atene), figurina, si accende la Cina.
   Fatti verificati: MacTutor (276-194 a.C.; ombra a mezzogiorno d'estate tra Siene e Alessandria; 7°12';
   250 000 stadi) e Wikipedia (circa 5000 stadi tra le due città; il pozzo illuminato fino in fondo).
   ===================================================================== */
(function () {
  Motore.aggiungi("oggetti", {
    sasso: { icona: "ogg-sasso", nome: "ogg.sasso", descrizione: "ogg.sasso.d", suAltro: "sasso.altro" },
    filopiombo: { icona: "ogg-filopiombo", nome: "ogg.filopiombo", descrizione: "ogg.filopiombo.d", loSapevi: "ogg.filopiombo.ls", suAltro: "filopiombo.altro" },
    papiro: { icona: "ogg-papiro", nome: "ogg.papiro", descrizione: "ogg.papiro.d", suAltro: "papiro.altro" }
  });
  Motore.aggiungi("personaggi", {
    eratostene: { nome: "nome.eratostene", colore: "#ffb08a", voce: { altezza: 175, timbro: "triangle", passo: 0.09, volume: 0.04 } }
  });
  Motore.aggiungi("figurine", {
    eratostene: { nome: "fig.eratostene.nome", anni: "fig.eratostene.anni", paese: "fig.eratostene.paese", testo: "fig.eratostene.testo", ritratto: "eratostene" }
  });
  Motore.aggiungi("combinazioni", [
    { a: "gomitolo", b: "sasso", fai: faiFilo }
  ]);

  /* la Terra di Eratostene: raggi del sole paralleli, Siene senza ombra, Alessandria con l'ombra */
  function terra() {
    return '<svg viewBox="0 0 640 340">' +
      '<g stroke="#f3c45a" stroke-width="4" stroke-dasharray="14 8"><path d="M20 70 H600"/><path d="M20 30 H600"/></g>' +
      '<circle cx="230" cy="190" r="140" fill="#3a7ab8" stroke="#1d1428" stroke-width="4"/>' +
      '<path d="M140 90 Q200 140 170 200 Q210 260 300 250 Q340 200 330 120 Q280 80 230 50" fill="#6a9a4a" stroke="#1d1428" stroke-width="2.5"/>' +
      '<path d="M230 190 L370 190" stroke="#1d1428" stroke-width="3"/><path d="M230 190 L368.6 172.8" stroke="#1d1428" stroke-width="3"/>' +
      '<path d="M300 190 A70 70 0 0 0 299.5 181.3" fill="none" stroke="#c8402f" stroke-width="5"/>' +
      '<circle cx="370" cy="190" r="7" fill="#f3c45a" stroke="#1d1428" stroke-width="2"/><circle cx="368.6" cy="172.8" r="7" fill="#f3c45a" stroke="#1d1428" stroke-width="2"/>' +
      '<path d="M368.6 172.8 L392 169.9" stroke="#1d1428" stroke-width="5"/><path d="M392 169.9 L420 172" stroke="#5a5a6a" stroke-width="3"/>' +
      '<text x="384" y="214" font-size="22" fill="#f6e7b8">' + Lingue.semplice("g1n.terra.siene") + "</text>" +
      '<text x="380" y="150" font-size="22" fill="#f6e7b8">' + Lingue.semplice("g1n.terra.alessandria") + "</text>" +
      '<text x="250" y="232" font-size="24" fill="#ffd36b">7°12\'</text>' +
      '<text x="450" y="290" font-size="21" fill="#9fffb0">' + Lingue.semplice("g1n.terra.cinquanta") + "</text></svg>";
  }

  var elementi = [
    { id: "vagone", classe: "", x: 0, y: 300, larghezza: 170, altezza: 560,
      svg: '<svg viewBox="0 0 170 560" overflow="visible"><use href="#ce-vagone" width="170" height="560"/></svg>' },
    { id: "asta-storta", classe: "", x: 760, y: 410, larghezza: 120, altezza: 340,
      svg: '<svg viewBox="0 0 120 340" overflow="visible"><use href="#se-asta-storta" width="120" height="340"/></svg>',
      visibile: function (m) { return !m.flag("astaDritta"); } },
    { id: "asta-dritta", classe: "", x: 760, y: 410, larghezza: 120, altezza: 340,
      svg: '<svg viewBox="0 0 120 340" overflow="visible"><use href="#se-asta-dritta" width="120" height="340"/></svg>',
      visibile: function (m) { return m.flag("astaDritta"); } },
    { id: "filo-su-asta", classe: "", x: 800, y: 420, larghezza: 44, altezza: 200,
      svg: '<svg viewBox="0 0 44 200"><path d="M22 0 V170" stroke="#a8884a" stroke-width="3"/><ellipse cx="22" cy="180" rx="14" ry="12" fill="url(#ce-sasso)" stroke="#1d1428" stroke-width="2.5"/></svg>',
      visibile: function (m) { return m.flag("astaDritta"); } },
    /* il coperchio di legno del pozzo: sopra il pozzo, poi appoggiato alla palma; e il sole sul fondo */
    { id: "coperchio-pozzo", classe: "", x: 436, y: 572, larghezza: 208, altezza: 72,
      svg: '<svg viewBox="0 0 208 72"><g stroke="#1d1428" stroke-width="3" stroke-linejoin="round">' +
        '<path d="M2 34 V44 Q104 82 206 44 V34" fill="#6a4020"/><ellipse cx="104" cy="34" rx="102" ry="28" fill="url(#ce-legno)"/></g>' +
        '<g stroke="#7a4a24" stroke-width="2.5"><path d="M40 12 Q36 34 40 58 M72 7 Q68 34 72 62 M104 6 V62 M136 7 Q140 34 136 62 M168 12 Q172 34 168 58"/></g>' +
        '<path d="M24 34 H184" stroke="url(#ce-ferro)" stroke-width="7"/><path d="M24 34 H184" stroke="#1d1428" stroke-width="1.5" fill="none"/>' +
        '<ellipse cx="104" cy="28" rx="14" ry="6" fill="none" stroke="#1d1428" stroke-width="5"/><ellipse cx="104" cy="28" rx="14" ry="6" fill="none" stroke="#c8c8d0" stroke-width="2.5"/></svg>',
      visibile: function (m) { return !m.flag("pozzoAperto"); } },
    { id: "coperchio-palma", classe: "", x: 324, y: 486, larghezza: 110, altezza: 130,
      svg: '<svg viewBox="0 0 110 130"><ellipse cx="58" cy="124" rx="44" ry="6" fill="#000" opacity=".25"/><g stroke="#1d1428" stroke-width="3" stroke-linejoin="round">' +
        '<ellipse cx="62" cy="64" rx="38" ry="60" fill="#6a4020"/><ellipse cx="54" cy="64" rx="38" ry="60" fill="url(#ce-legno)"/></g>' +
        '<g stroke="#7a4a24" stroke-width="2.5" fill="none"><path d="M30 20 Q24 64 30 108 M54 6 V122 M78 20 Q84 64 78 108"/></g>' +
        '<path d="M54 14 V114" stroke="url(#ce-ferro)" stroke-width="6"/></svg>',
      visibile: function (m) { return m.flag("pozzoAperto"); } },
    { id: "sole-pozzo", classe: "sole-pozzo", x: 470, y: 586, larghezza: 140, altezza: 50,
      svg: '<svg viewBox="0 0 140 50"><ellipse cx="70" cy="26" rx="34" ry="10" fill="#fffbe0" opacity=".95"/><ellipse cx="70" cy="26" rx="58" ry="17" fill="#fff4a0" opacity=".35"/>' +
        '<g stroke="#fffbe0" stroke-width="3" stroke-linecap="round" opacity=".9"><path d="M70 2 V10 M70 42 V48 M18 26 H28 M112 26 H122 M40 12 l6 5 M100 12 l-6 5"/></g></svg>',
      visibile: function (m) { return m.flag("pozzoAperto"); } },
    { id: "sasso", classe: "", x: 650, y: 700, larghezza: 60, altezza: 54,
      svg: '<svg viewBox="20 30 100 90"><use href="#ogg-sasso" width="140" height="140"/></svg>',
      visibile: function (m) { return !m.flag("sassoPreso"); } },
    { id: "penna", classe: "penna-el", personaggio: "penna", x: 640, y: 300, larghezza: 80, altezza: 128,
      svg: '<svg viewBox="-70 -230 150 240" overflow="visible"><use href="#penna" x="-70" y="-230" width="150" height="240"/></svg>' }
  ];

  Motore.stanza("siene", {
    sfondo: "siene",
    pavimento: { xMin: 190, xMax: 1460, yMin: 770, yMax: 880 },
    scala: { lontano: { y: 770, s: 0.92 }, vicino: { y: 880, s: 1 } },
    attori: [
      { id: "zara", simbolo: "zara-fronte", viste: { fronte: "zara-fronte", profilo: "zara-profilo", schiena: "zara-schiena" },
        vista: [-110, -600, 230, 615], piedi: [5, 0], altezza: 460, x: 240, y: 850, dir: 1 },
      { id: "eratostene", simbolo: "eratostene", vista: [-110, -600, 230, 615], piedi: [0, 0], altezza: 450, x: 1060, y: 790, dir: -1, fisso: true }
    ],
    elementi: elementi,
    entrata: async function (m) {
      if (m.flag("sieneArrivo")) return;
      m.flag("sieneArrivo", true);
      await m.cartello("g1n.titolo", "g1n.sottotitolo", 3000);
      await m.dice("narratore", "g1n.arrivo.1");
      await m.dice("eratostene", "g1n.arrivo.2");
      await m.dice("eratostene", "g1n.arrivo.3");
      await m.pensa("g1n.arrivo.4");
    },
    hotspot: [
      { id: "eratostene", nome: "g1n.hs.eratostene", forma: "M990 330 H1150 V790 H990 Z", arrivo: [930, 820], verso: 1,
        guarda: "g1n.era.guarda", usa: "g1n.era.usa", parla: parlaEratostene,
        con: { filopiombo: "g1n.era.filo", gomitolo: "g1n.era.gomitolo", sasso: "g1n.era.sasso", metro: "g1n.era.metro", spicchio: "g1n.era.spicchio" },
        conAltro: "g1n.era.altro" },
      { id: "asta", nome: "g1n.hs.asta", forma: "M785 405 H855 V765 H785 Z", arrivo: [780, 800], vista: "schiena",
        guarda: function (m) { return m.flag("astaDritta") ? "g1n.asta.guarda2" : "g1n.asta.guarda"; },
        usa: function (m) { return m.flag("astaDritta") ? lezione(m) : m.pensa("g1n.asta.usa"); },
        parla: "g1n.asta.parla",
        con: { filopiombo: raddrizza, gomitolo: "g1n.asta.gomitolo", sasso: "g1n.asta.sasso", metro: "g1n.asta.metro" }, conAltro: "g1n.asta.altro" },
      { id: "pozzo", nome: "g1n.hs.pozzo", forma: "M436 510 H644 V740 H436 Z", arrivo: [540, 790], vista: "schiena",
        guarda: function (m) { return m.flag("pozzoAperto") ? "g1n.pozzo.guarda2" : "g1n.pozzo.guarda"; },
        usa: function (m) { return m.flag("pozzoAperto") ? m.pensa("g1n.pozzo.usa2") : rotola(m); },
        parla: "g1n.pozzo.parla", con: { gomitolo: "g1n.pozzo.gomitolo", metro: misuraCoperchio }, conAltro: "g1n.pozzo.altro" },
      { id: "sasso", nome: "g1n.hs.sasso", forma: "M640 690 H720 V760 H640 Z", arrivo: [660, 800], vista: "schiena",
        presente: function (m) { return !m.flag("sassoPreso"); },
        guarda: "g1n.sasso.guarda", usa: prendiSasso, parla: "g1n.sasso.parla" },
      { id: "tavolo", nome: "g1n.hs.tavolo", forma: "M1120 570 H1420 V760 H1120 Z", arrivo: [1250, 800], vista: "schiena",
        guarda: "g1n.tav.guarda", usa: "g1n.tav.usa", parla: "g1n.tav.parla" },
      { id: "nilo", nome: "g1n.hs.nilo", forma: "M180 440 H1600 V556 H180 Z", arrivo: [900, 790], vista: "schiena",
        guarda: "g1n.nilo.guarda", usa: "g1n.nilo.usa", parla: "g1n.nilo.parla" },
      { id: "rocce", nome: "g1n.hs.rocce", forma: "M1080 330 H1350 V440 H1080 Z", arrivo: [1200, 790], vista: "schiena",
        guarda: "g1n.rocce.guarda", usa: "g1n.rocce.usa", parla: "g1n.rocce.parla" },
      { id: "sole", nome: "g1n.hs.sole", forma: "M720 0 H880 V120 H720 Z", arrivo: [800, 790], vista: "schiena",
        guarda: "g1n.sole.guarda", usa: "g1n.sole.usa", parla: "g1n.sole.parla" },
      { id: "penna", nome: "g1.hs.penna", forma: "M620 280 H730 V430 H620 Z", arrivo: [660, 800], vista: "schiena",
        guarda: "g1n.penna.guarda", usa: "g1.penna.usa", parla: "g1n.penna.parla", conAltro: "g1.penna.altro" },
      { id: "treno", nome: "g1.hs.treno", forma: "M0 300 H170 V870 H0 Z", arrivo: [230, 840], verso: -1,
        guarda: "g1.treno.guarda", usa: Cer3.sali, parla: "g1.treno.parla" }
    ]
  });

  /* ---------- il filo a piombo ---------- */
  async function prendiSasso(m) {
    m.flag("sassoPreso", true);
    m.prendi("sasso");
    await m.pensa("g1n.sasso.prendi");
  }
  async function faiFilo(m) {
    m.togli("sasso"); m.togli("gomitolo"); m.prendi("filopiombo");
    m.suono("magia");
    await m.pensa("g1n.filo.1");
    await m.dice("penna", "g1n.filo.2");
  }
  async function raddrizza(m) {
    m.togli("filopiombo");
    m.flag("astaDritta", true);
    m.suono("magia");
    await m.pensa("g1n.radd.1");
    await m.dice("eratostene", "g1n.radd.2");
    if (!m.flag("pozzoAperto")) { await m.dice("eratostene", "g1n.pozzo.serve.1"); return m.dice("eratostene", "g1n.pozzo.serve.2"); }
    return lezione(m);
  }
  /* il momento wow: asta senza ombra + sole in fondo al pozzo → la misura della Terra */
  async function misuraTerra(m) {
    m.flag("nTerraVista", true);
    await m.dice("eratostene", "g1n.radd.3");
    await Cer3.pannelloFigura(m, "g1n.terra.titolo", terra(), "g1n.terra.guida");
    await m.dice("eratostene", "g1n.radd.4");
    await m.dice("penna", "g1n.radd.5");
    m.annota("g1n.q.eratostene");
  }

  /* ---------- il coperchio del pozzo: si fa rotolare fino alla palma (giri = strada : circonferenza) ---------- */
  function datiCoperchio(m) {
    var q = m.stato.flag.nCop;
    if (!q) {
      var d = Cer3.scegliUno([40, 50, 60, 70, 80]), n = Cer3.a_caso(3, 7);
      q = { d: d, n: n, Ccm: Math.round(d * 314) / 100, Lcm: Math.round(n * d * 314) / 100 };
      m.flag("nCop", q);
    }
    return q;
  }
  function metri(cm) { return String(Math.round(cm * 10) / 1000).replace(".", ","); }
  async function misuraCoperchio(m) {
    if (m.flag("pozzoAperto")) return m.pensa("g1n.pozzo.usa2");
    var q = datiCoperchio(m);
    await m.pensa("g1n.cop.metro", { d: String(q.d) });
  }
  async function rotola(m) {
    var q = datiCoperchio(m);
    var par = { d: String(q.d), C: Cer3.v(q.Ccm), L: metri(q.Lcm), Lcm: Cer3.v(q.Lcm), n: String(q.n) };
    if (!m.flag("copVisto")) {
      m.flag("copVisto", true);
      await m.pensa("g1n.cop.1");
      await m.dice("eratostene", "g1n.cop.2");
      await m.dice("eratostene", "g1n.cop.3", par);
      await m.dice("penna", "g1n.cop.4");
    }
    m.aiutoQui({ id: "h-cop", chi: "penna", chiavi: ["g1n.h.cop.1", "g1n.h.cop.2", "g1n.h.cop.3"], param: par });
    var ok = await Cer3.finoAlGiusto(m, "g1n.cop.domanda", par, { max: 5, virgola: true, annullabile: true, calcolatrice: true, promemoria: "g1n.cop.promemoria" }, q.n, async function (n) {
      if (n !== null && Math.abs(n - q.n * 3.14) < 0.01) { m.errore("g1-giri-senza-pi"); await m.dice("penna", "g1n.cop.err.senzapi", par); }
      else if (Cer3.uguale(n, 2 * q.n)) { m.errore("g1-giri-raggio"); await m.dice("penna", "g1n.cop.err.raggio", par); }
      else if (n !== null && Math.abs(n - q.n / 100) < 0.0001) { m.errore("g1-giri-unita"); await m.dice("penna", "g1n.cop.err.unita", par); }
      else { m.errore("g1-giri-calcolo"); await m.dice("penna", "g1n.cop.err.altro", { n: Cer3.v(n || 0), L: par.L, d: par.d }); }
    });
    m.aiutoQui(null);
    if (!ok) return;
    m.flag("pozzoAperto", true);
    m.suono("magia");
    await m.pensa("g1n.cop.ok", par);
    await m.dice("narratore", "g1n.rifl.1");
    await m.dice("eratostene", "g1n.rifl.2");
    await m.dice("eratostene", "g1n.rifl.3");
    m.annota("g1n.q.giri");
    if (m.flag("astaDritta")) return lezione(m);
    await m.dice("eratostene", "g1n.rifl.4");
  }

  /* ---------- Eratostene ---------- */
  async function parlaEratostene(m) {
    if (m.flag("astaDritta") && m.flag("pozzoAperto") && !m.flag("nFatto")) return lezione(m);
    var v = await m.scegli([
      { testo: "g1n.dlg.chi", valore: "chi" },
      { testo: "g1n.dlg.asta", valore: "asta" },
      { testo: "g1n.dlg.pozzo", valore: "pozzo" },
      { testo: "g1n.dlg.ciao", valore: "ciao" }
    ]);
    if (v === "chi") { await m.dice("eratostene", "g1n.dlg.chi.r1"); await m.dice("eratostene", "g1n.dlg.chi.r2"); }
    if (v === "asta") { await m.dice("eratostene", m.flag("astaDritta") ? "g1n.dlg.asta.r2" : "g1n.dlg.asta.r1"); }
    if (v === "pozzo") { await m.dice("eratostene", "g1n.dlg.pozzo.r1"); await m.dice("eratostene", "g1n.dlg.pozzo.r2"); }
    if (v === "ciao") await m.dice("eratostene", m.flag("nFatto") ? "g1n.dlg.ciao.r2" : "g1n.dlg.ciao.r1");
  }

  async function lezione(m) {
    if (!m.flag("astaDritta")) return m.pensa("g1n.asta.usa");
    if (!m.flag("pozzoAperto")) return m.dice("eratostene", "g1n.pozzo.serve.2");
    if (!m.flag("nTerraVista")) await misuraTerra(m);
    if (!m.flag("nBivio")) await bivio(m);
    if (!m.flag("nArco")) { if (!(await arco(m))) return; }
    if (!m.flag("nAngolo")) { if (!(await angolo(m))) return; }
    if (!m.flag("nTerra")) { if (!(await terraStadi(m))) return; }
    if (!m.flag("nFatto")) return fine(m);
  }

  /* 1. bivio di classe: angolo doppio → arco doppio */
  async function bivio(m) {
    await m.dice("eratostene", "g1n.biv.intro");
    m.aiutoQui({ id: "h-biv-n", chi: "penna", chiavi: ["g1n.h.biv.1", "g1n.h.biv.2", "g1n.h.biv.3"] });
    await Cer3.sceltaFinoAlGiusto(m, "g1n.biv.domanda", null, [
      { testo: "g1n.biv.giusta", valore: "giusta" },
      { testo: "g1n.biv.quadruplo", valore: "quadruplo" },
      { testo: "g1n.biv.uguale", valore: "uguale" },
      { testo: "g1n.biv.meta", valore: "meta" }
    ], "g1-bivio-arco", "g1n.biv.err");
    m.aiutoQui(null);
    m.flag("nBivio", true);
    await m.dice("eratostene", "g1n.biv.ok");
    m.annota("g1n.q.proporzionali");
  }
  /* 2. lunghezza di un arco, valore esatto */
  async function arco(m) {
    var q = m.stato.flag.nArcoDati;
    if (!q) {
      var alfa = Cer3.scegliUno([40, 45, 60, 72, 120, 135, 150]);
      var rr = [3, 4, 5, 6, 8, 9, 10, 12, 15, 18].filter(function (r) { return (r * alfa) % 180 === 0; });
      var r = Cer3.scegliUno(rr);
      q = { alfa: alfa, r: r, k: r * alfa / 180 };
      m.flag("nArcoDati", q);
    }
    var par = { alfa: String(q.alfa), r: String(q.r), giro: Cer3.kpi(2 * q.r), k: Cer3.kpi(q.k), frazione: Cer3.frazione(q.alfa, 360), d: String(2 * q.r) };
    await m.dice("eratostene", "g1n.arco.intro", par);
    m.aiutoQui({ id: "h-arco-n", chi: "penna", chiavi: ["g1n.h.arco.1", "g1n.h.arco.2", "g1n.h.arco.3"], param: par });
    var ok = await Cer3.rispostaPi(m, {
      titolo: "g1n.arco.domanda", param: par, k: q.k, esatto: true, annullabile: true, promemoria: "g1n.arco.promemoria",
      trappole: [
        { k: 2 * q.r, err: "g1-arco-giro-intero", chiave: "g1.arco.err.giro" },
        { k: q.r * q.alfa / 360, err: "g1-arco-senza-2", chiave: "g1.arco.err.senza2" },
        { k: q.r * q.r * q.alfa / 360, err: "g1-arco-area", chiave: "g1.arco.err.area" },
        { k: 2 * q.k, err: "g1-arco-diametro", chiave: "g1.arco.err.diametro" }
      ], errAltro: "g1-arco-calcolo"
    });
    m.aiutoQui(null);
    if (!ok) return false;
    m.flag("nArco", true);
    await m.dice("eratostene", "g1n.arco.ok", par);
    m.annota("g1n.q.arco");
    return true;
  }
  /* 3. l'angolo al centro da un arco (tastierino) */
  async function angolo(m) {
    var q = m.stato.flag.nAngDati;
    if (!q) {
      var C = Cer3.scegliUno([24, 36, 40, 60, 72]);
      var possibili = [30, 45, 60, 90, 120, 150, 36, 72].filter(function (a) { return (C * a) % 360 === 0 && C * a / 360 > 1; });
      var a = Cer3.scegliUno(possibili);
      q = { C: C, alfa: a, l: C * a / 360 };
      m.flag("nAngDati", q);
    }
    var par = { C: Cer3.kpi(q.C), l: Cer3.kpi(q.l), alfa: String(q.alfa), frazione: Cer3.frazione(q.l, q.C) };
    await m.dice("eratostene", "g1n.ang.intro", par);
    m.aiutoQui({ id: "h-ang-n", chi: "penna", chiavi: ["g1n.h.ang.1", "g1n.h.ang.2", "g1n.h.ang.3"], param: par });
    var ok = await Cer3.finoAlGiusto(m, "g1n.ang.domanda", par, { max: 5, virgola: true, annullabile: true }, q.alfa, async function (n) {
      if (n !== null && Math.abs(n - q.l / q.C) < 0.01) { m.errore("g1-angolo-senza-360"); await m.dice("penna", "g1n.ang.err.senza360", par); }
      else if (n !== null && Math.abs(n - q.C / q.l) < 0.01) { m.errore("g1-angolo-rovescio"); await m.dice("penna", "g1n.ang.err.rovescio", par); }
      else if (Cer3.uguale(n, q.alfa / 2) || Cer3.uguale(n, q.alfa * 2)) { m.errore("g1-angolo-180"); await m.dice("penna", "g1n.ang.err.180", par); }
      else { m.errore("g1-angolo-calcolo"); await m.dice("penna", "g1n.ang.err.altro", { n: Cer3.v(n || 0), l: par.l, C: par.C }); }
    });
    m.aiutoQui(null);
    if (!ok) return false;
    m.flag("nAngolo", true);
    await m.dice("eratostene", "g1n.ang.ok", par);
    m.annota("g1n.q.angolo");
    return true;
  }
  /* 4. la circonferenza della Terra: 50 × 5000 stadi */
  async function terraStadi(m) {
    await m.dice("eratostene", "g1n.ter.intro");
    m.aiutoQui({ id: "h-ter", chi: "penna", chiavi: ["g1n.h.ter.1", "g1n.h.ter.2", "g1n.h.ter.3"] });
    var ok = await Cer3.finoAlGiusto(m, "g1n.ter.domanda", null, { max: 8, annullabile: true }, 250000, async function (n) {
      if (Cer3.uguale(n, 100)) { m.errore("g1-terra-divide"); await m.dice("penna", "g1n.ter.err.divide"); }
      else if (Cer3.uguale(n, 36000)) { m.errore("g1-terra-gradi"); await m.dice("penna", "g1n.ter.err.gradi"); }
      else if (Cer3.uguale(n, 1800000)) { m.errore("g1-terra-360"); await m.dice("penna", "g1n.ter.err.360"); }
      else { m.errore("g1-terra-calcolo"); await m.dice("penna", "g1n.ter.err.altro", { n: Cer3.v(n || 0) }); }
    });
    m.aiutoQui(null);
    if (!ok) return false;
    m.flag("nTerra", true);
    await m.dice("eratostene", "g1n.ter.ok");
    await m.dice("penna", "g1n.ter.penna");
    return true;
  }
  async function fine(m) {
    m.flag("nFatto", true);
    await m.dice("eratostene", "g1n.fine.1");
    await Cer3.prendiSpicchio(m, "siene");
    await m.dice("eratostene", "g1n.fine.2");
    m.prendi("papiro");
    await m.pensa("g1n.fine.3");
    m.figurina("eratostene");
    await Cer3.sblocca(m, "cina");
    await m.dice("penna", "g1n.fine.4");
  }

  /* ---------- aiuti a gradini ---------- */
  Cer3.aiutiStanze.siene = function (m) {
    if (!m.flag("astaDritta") && !m.ha("filopiombo") && !m.flag("sassoPreso")) return { id: "n-sasso", chi: "penna", chiavi: ["g1n.aiuto.sasso1", "g1n.aiuto.sasso2", "g1n.aiuto.sasso3"] };
    if (!m.flag("astaDritta") && !m.ha("filopiombo")) return { id: "n-filo", chi: "penna", chiavi: ["g1n.aiuto.filo1", "g1n.aiuto.filo2", "g1n.aiuto.filo3"] };
    if (!m.flag("astaDritta")) return { id: "n-asta", chi: "penna", chiavi: ["g1n.aiuto.asta1", "g1n.aiuto.asta2"] };
    if (!m.flag("pozzoAperto")) return { id: "n-pozzo", chi: "penna", chiavi: ["g1n.aiuto.pozzo1", "g1n.aiuto.pozzo2", "g1n.aiuto.pozzo3"] };
    if (!m.flag("nFatto")) return { id: "n-lez", chi: "penna", chiavi: ["g1n.aiuto.lez1", "g1n.aiuto.lez2"] };
    return { id: "n-fine", chi: "penna", chiavi: ["g1n.aiuto.fine1", "g1n.aiuto.fine2"] };
  };
})();
