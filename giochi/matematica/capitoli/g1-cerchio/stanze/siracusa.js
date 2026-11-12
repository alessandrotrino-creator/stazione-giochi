/* =====================================================================
   Matematica · terze · Livello G1 · Stanza: SIRACUSA, circa 250 a.C. — la casa di Archimede (Lez. 1)
   RICOMPORRE UN OGGETTO ROTTO: il compasso di Archimede è senza vite (gambe che ballano, cerchi storti).
   La vite è finita nel cesto dei fichi: la fruttivendola la dà in cambio di un aiuto → il nastro per il
   bordo del suo tavolo rotondo (VALORE APPROSSIMATO, con la calcolatrice) → vite + compasso rotto =
   compasso → dato ad Archimede: i poligoni da 6 a 96 lati che «diventano» un cerchio (momento wow)
   → circonferenza dal raggio (VALORE ESATTO) → la stessa con 3,14 (calcolatrice) → diametro dalla
   circonferenza (tastierino) → BIVIO DI CLASSE: 22/7 è π? → spicchio 1, figurina, si accende Siene.
   I PESETTI della bancarella servono ad Atene: la fruttivendola li presta solo quando servono (si torna).
   Fatti verificati (MacTutor): Archimede di Siracusa (287-212 a.C.); 223/71 < π < 22/7 con poligoni di 96 lati.
   ===================================================================== */
(function () {
  Motore.aggiungi("oggetti", {
    compassoRotto: { icona: "ogg-compasso-rotto", nome: "ogg.compassoRotto", descrizione: "ogg.compassoRotto.d", suAltro: "compasso.altro" },
    vite: { icona: "ogg-vite", nome: "ogg.vite", descrizione: "ogg.vite.d", suAltro: "vite.altro" },
    compasso: { icona: "ogg-compasso", nome: "ogg.compasso", descrizione: "ogg.compasso.d", loSapevi: "ogg.compasso.ls", suAltro: "compasso.altro" },
    pesetti: { icona: "ogg-pesi-bronzo", nome: "ogg.pesetti", descrizione: "ogg.pesetti.d", suAltro: "pesetti.altro" }
  });
  Motore.aggiungi("personaggi", {
    archimede: { nome: "nome.archimede", colore: "#9ab8ff", voce: { altezza: 150, timbro: "triangle", passo: 0.1, volume: 0.04 } },
    fruttivendola: { nome: "nome.fruttivendola", colore: "#ffc87a", voce: { altezza: 300, timbro: "triangle", passo: 0.08, volume: 0.04 } }
  });
  Motore.aggiungi("figurine", {
    archimede: { nome: "fig.archimede.nome", anni: "fig.archimede.anni", paese: "fig.archimede.paese", testo: "fig.archimede.testo", ritratto: "archimede" }
  });
  Motore.aggiungi("combinazioni", [
    { a: "vite", b: "compassoRotto", fai: aggiustaCompasso }
  ]);

  /* i poligoni di Archimede: perimetro del poligono inscritto in un cerchio di diametro 1 */
  function poligoni() {
    var lati = [6, 12, 24, 48, 96], g = "", w = 170;
    lati.forEach(function (n, k) {
      var cx = 90 + k * w, cy = 110, r = 70, pts = [];
      for (var i = 0; i < n; i++) { var a = -Math.PI / 2 + i * 2 * Math.PI / n; pts.push((cx + r * Math.cos(a)).toFixed(1) + "," + (cy + r * Math.sin(a)).toFixed(1)); }
      var per = n * Math.sin(Math.PI / n);
      g += '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="#f6e2a8" stroke="#a8884a" stroke-width="3"/>' +
        '<polygon points="' + pts.join(" ") + '" fill="none" stroke="#c8402f" stroke-width="3"/>' +
        '<text x="' + cx + '" y="' + (cy + 106) + '" text-anchor="middle" font-size="22" fill="#f6e7b8">' + n + " " + Lingue.semplice("g1s.pol.lati") + "</text>" +
        '<text x="' + cx + '" y="' + (cy + 134) + '" text-anchor="middle" font-size="22" fill="#9fffb0">' + String(per.toFixed(4)).replace(".", ",") + "</text>";
    });
    return '<svg viewBox="0 0 860 260">' + g + "</svg>";
  }

  var elementi = [
    { id: "vagone", classe: "", x: 0, y: 300, larghezza: 170, altezza: 560,
      svg: '<svg viewBox="0 0 170 560" overflow="visible"><use href="#ce-vagone" width="170" height="560"/></svg>' },
    { id: "tavola", classe: "", x: 420, y: 690, larghezza: 340, altezza: 80,
      svg: '<svg viewBox="0 0 340 80"><use href="#sr-tavola-sabbia" width="340" height="80"/></svg>' },
    /* la sabbia della tavola: spazzata dal vento (al ritorno da Atene), poi bagnata con l'acqua di mare */
    { id: "sabbia-vento", classe: "", x: 420, y: 690, larghezza: 340, altezza: 80,
      svg: '<svg viewBox="0 0 340 80"><path d="M22 64 L48 16 H292 L318 64 Z" fill="url(#sr-sabbia)" stroke="#1d1428" stroke-width="2"/>' +
        '<g fill="none" stroke="#c8a870" stroke-width="2.5" stroke-linecap="round"><path d="M60 26 q20 -6 40 0 t40 0 M120 40 q24 -8 48 0 t48 0 M70 52 q20 -6 40 0 t40 0 M200 26 q16 -5 32 0 t32 0 M230 52 q14 -5 28 0"/></g>' +
        '<path d="M150 34 q6 -4 10 0 M100 46 q5 -3 9 0" stroke="#a8884a" stroke-width="2" fill="none"/></svg>',
      visibile: function (m) { return m.flag("ventoVisto") && !m.flag("sabbiaBagnata"); } },
    { id: "sabbia-bagnata", classe: "", x: 420, y: 690, larghezza: 340, altezza: 80,
      svg: '<svg viewBox="0 0 340 80"><path d="M22 64 L48 16 H292 L318 64 Z" fill="#a8885a" stroke="#1d1428" stroke-width="2"/>' +
        '<ellipse cx="170" cy="40" rx="64" ry="20" fill="none" stroke="#5a3a1a" stroke-width="3"/>' +
        '<path d="M106 40 L138 22 H202 L234 40 L202 58 H138 Z" fill="none" stroke="#c8402f" stroke-width="3"/>' +
        '<path d="M170 40 L234 40" stroke="#3a7ab8" stroke-width="2.5"/><g fill="#d8c8a0" opacity=".7"><circle cx="70" cy="50" r="2"/><circle cx="270" cy="30" r="2"/><circle cx="290" cy="54" r="2"/></g></svg>',
      visibile: function (m) { return m.flag("sabbiaBagnata"); } },
    { id: "sgabello", classe: "", x: 300, y: 590, larghezza: 100, altezza: 110,
      svg: '<svg viewBox="0 0 100 110"><ellipse cx="50" cy="104" rx="44" ry="6" fill="#000" opacity=".3"/><g stroke="#1d1428" stroke-width="3" stroke-linejoin="round">' +
        '<path d="M14 40 L8 104 M86 40 L92 104 M30 44 L28 100 M70 44 L72 100" stroke-width="6"/><path d="M14 40 L8 104 M86 40 L92 104" stroke="#8a5a2a" stroke-width="3"/>' +
        '<ellipse cx="50" cy="38" rx="44" ry="12" fill="url(#sr-legno)"/></g></svg>' },
    { id: "compasso-sgabello", classe: "", x: 312, y: 560, larghezza: 76, altezza: 76,
      svg: '<svg viewBox="0 0 140 140"><use href="#ogg-compasso-rotto"/></svg>',
      visibile: function (m) { return !m.flag("compassoPreso"); } },
    { id: "tavolo", classe: "", x: 990, y: 690, larghezza: 170, altezza: 100,
      svg: '<svg viewBox="0 0 170 100"><ellipse cx="85" cy="94" rx="70" ry="7" fill="#000" opacity=".3"/><g stroke="#1d1428" stroke-width="3" stroke-linejoin="round">' +
        '<path d="M80 30 V90 M90 30 V90" stroke-width="8"/><path d="M85 30 V90" stroke="#8a5a2a" stroke-width="6"/><path d="M50 92 H120" stroke-width="6"/>' +
        '<ellipse cx="85" cy="28" rx="80" ry="22" fill="url(#sr-legno)"/><ellipse cx="85" cy="24" rx="72" ry="17" fill="#c8945a"/></g>' +
        '<g fill="#6a2a5a" stroke="#1d1428" stroke-width="2"><circle cx="60" cy="20" r="9"/><circle cx="76" cy="16" r="9"/><circle cx="68" cy="28" r="9"/></g>' +
        '<g fill="#5a7a2a" stroke="#1d1428" stroke-width="2"><circle cx="112" cy="22" r="8"/><circle cx="124" cy="18" r="8"/></g></svg>' },
    { id: "nastro", classe: "", x: 990, y: 690, larghezza: 170, altezza: 60,
      svg: '<svg viewBox="0 0 170 60"><ellipse cx="85" cy="28" rx="81" ry="23" fill="none" stroke="#c8402f" stroke-width="6"/></svg>',
      visibile: function (m) { return m.flag("nastroFatto"); } },
    { id: "cesto", classe: "", x: 1300, y: 476, larghezza: 120, altezza: 70,
      svg: '<svg viewBox="0 0 120 70"><g stroke="#1d1428" stroke-width="3" stroke-linejoin="round"><path d="M6 30 H114 L104 66 H16 Z" fill="#c89a4a"/><path d="M10 44 H110 M14 56 H106" stroke="#8a6a2a" stroke-width="2"/></g>' +
        '<g fill="#6a2a5a" stroke="#1d1428" stroke-width="2"><path d="M24 30 C14 28 14 12 26 10 C36 10 38 26 30 30 Z"/><path d="M46 28 C36 26 36 10 48 8 C58 8 60 24 52 28 Z"/><path d="M70 30 C60 28 60 12 72 10 C82 10 84 26 76 30 Z"/><path d="M92 28 C82 26 82 10 94 8 C104 8 106 24 98 28 Z"/><path d="M58 18 C48 16 48 0 60 -2 C70 -2 72 14 64 18 Z"/></g></svg>' },
    { id: "pesetti", classe: "", x: 1250, y: 500, larghezza: 70, altezza: 50,
      svg: '<svg viewBox="0 20 140 110"><use href="#ogg-pesi-bronzo" width="140" height="140"/></svg>',
      visibile: function (m) { return !m.flag("pesettiPresi"); } },
    { id: "penna", classe: "penna-el", personaggio: "penna", x: 560, y: 330, larghezza: 80, altezza: 128,
      svg: '<svg viewBox="-70 -230 150 240" overflow="visible"><use href="#penna" x="-70" y="-230" width="150" height="240"/></svg>' }
  ];

  Motore.stanza("siracusa", {
    sfondo: "siracusa",
    pavimento: { xMin: 190, xMax: 1460, yMin: 780, yMax: 880 },
    scala: { lontano: { y: 780, s: 0.92 }, vicino: { y: 880, s: 1 } },
    attori: [
      { id: "zara", simbolo: "zara-fronte", viste: { fronte: "zara-fronte", profilo: "zara-profilo", schiena: "zara-schiena" },
        vista: [-110, -600, 230, 615], piedi: [5, 0], altezza: 460, x: 240, y: 850, dir: 1 },
      { id: "archimede", simbolo: "archimede", vista: [-110, -600, 230, 615], piedi: [0, 0], altezza: 450, x: 840, y: 778, dir: -1, fisso: true },
      { id: "fruttivendola", simbolo: "fruttivendola", vista: [-110, -600, 230, 615], piedi: [0, 0], altezza: 430, x: 1210, y: 770, dir: -1, fisso: true }
    ],
    elementi: elementi,
    entrata: async function (m) {
      if (m.flag("siracusaArrivo")) {
        if (m.flag("serveBilancia") && !m.flag("ventoVisto")) return vento(m);
        return;
      }
      m.flag("siracusaArrivo", true);
      await m.cartello("g1s.titolo", "g1s.sottotitolo", 3000);
      await m.dice("narratore", "g1s.arrivo.1");
      await m.dice("archimede", "g1s.arrivo.2");
      await m.dice("archimede", "g1s.arrivo.3");
      await m.pensa("g1s.arrivo.4");
      await m.dice("penna", "g1s.arrivo.5");
    },
    hotspot: [
      { id: "archimede", nome: "g1s.hs.archimede", forma: "M770 330 H920 V780 H770 Z", arrivo: [700, 820], verso: 1,
        guarda: "g1s.arch.guarda", usa: "g1s.arch.usa", parla: parlaArchimede,
        con: { compasso: daiCompasso, compassoRotto: "g1s.arch.rotto", vite: "g1s.arch.vite", metro: "g1s.arch.metro", spicchio: "g1s.arch.spicchio",
          anfora: "g1s.arch.anfora", anforaPiena: "g1s.arch.anforaPiena" },
        conAltro: "g1s.arch.altro" },
      { id: "tavola", nome: "g1s.hs.tavola", forma: "M420 690 H760 V770 H420 Z", arrivo: [590, 800], vista: "schiena",
        guarda: function (m) { return m.flag("ventoVisto") && !m.flag("sabbiaBagnata") ? "g1s.tav.guarda3" : m.flag("sLezione") || m.flag("sabbiaBagnata") ? "g1s.tav.guarda2" : "g1s.tav.guarda"; },
        usa: function (m) { return m.flag("ventoVisto") && !m.flag("sabbiaBagnata") ? m.pensa("g1s.tav.usa3") : m.flag("compassoDato") ? lezione(m) : m.pensa("g1s.tav.usa"); },
        parla: "g1s.tav.parla", con: { compasso: "g1s.tav.compasso", compassoRotto: "g1s.tav.rotto", anfora: "g1s.tav.anfora", anforaPiena: bagnaSabbia }, conAltro: "g1s.tav.altro" },
      { id: "anfora-crepata", nome: "g1s.hs.anfora", forma: "M352 516 H432 V598 H352 Z", arrivo: [330, 800], vista: "schiena",
        guarda: "g1s.anf.guarda", usa: "g1s.anf.usa", parla: "g1s.anf.parla" },
      { id: "compasso", nome: "g1s.hs.compasso", forma: "M300 556 H400 V700 H300 Z", arrivo: [360, 800], vista: "schiena",
        presente: function (m) { return !m.flag("compassoPreso"); },
        guarda: "g1s.comp.guarda", usa: prendiCompasso, parla: "g1s.comp.parla" },
      { id: "fruttivendola", nome: "g1s.hs.fruttivendola", forma: "M1150 340 H1280 V770 H1150 Z", arrivo: [1100, 820], verso: 1,
        guarda: "g1s.frutt.guarda", usa: "g1s.frutt.usa", parla: parlaFruttivendola,
        con: { metro: "g1s.frutt.metro", compassoRotto: "g1s.frutt.rotto", spicchio: "g1s.frutt.spicchio" }, conAltro: "g1s.frutt.altro" },
      { id: "tavolo", nome: "g1s.hs.tavolo", forma: "M990 680 H1160 V790 H990 Z", arrivo: [1070, 820], vista: "schiena",
        guarda: function (m) { return m.flag("nastroFatto") ? "g1s.tavolo.guarda2" : "g1s.tavolo.guarda"; },
        usa: "g1s.tavolo.usa", parla: "g1s.tavolo.parla", con: { metro: "g1s.tavolo.metro" }, conAltro: "g1s.tavolo.altro" },
      { id: "cesto", nome: "g1s.hs.cesto", forma: "M1300 460 H1420 V546 H1300 Z", arrivo: [1340, 800], vista: "schiena",
        guarda: function (m) { return m.flag("viteData") ? "g1s.cesto.guarda2" : "g1s.cesto.guarda"; },
        usa: "g1s.cesto.usa", parla: "g1s.cesto.parla" },
      { id: "pesetti", nome: "g1s.hs.pesetti", forma: "M1246 494 H1324 V552 H1246 Z", arrivo: [1290, 800], vista: "schiena",
        presente: function (m) { return !m.flag("pesettiPresi"); },
        guarda: "g1s.pes.guarda", usa: function (m) { return m.flag("serveBilancia") ? chiediPesetti(m) : m.dice("fruttivendola", "g1s.pes.no"); },
        parla: "g1s.pes.parla" },
      { id: "bilancia", nome: "g1s.hs.bilancia", forma: "M1310 356 H1474 V460 H1310 Z", arrivo: [1380, 800], vista: "schiena",
        guarda: "g1s.bil.guarda", usa: "g1s.bil.usa", parla: "g1s.bil.parla" },
      { id: "porta", nome: "g1s.hs.porta", forma: "M196 296 H334 V604 H196 Z", arrivo: [270, 790], vista: "schiena",
        guarda: "g1s.porta.guarda", usa: "g1s.porta.usa", parla: "g1s.porta.parla" },
      { id: "porto", nome: "g1s.hs.porto", forma: "M700 380 H1600 V556 H700 Z", arrivo: [900, 790], vista: "schiena",
        guarda: "g1s.porto.guarda", usa: "g1s.porto.usa", parla: "g1s.porto.parla",
        con: { anfora: riempiAnfora, anforaPiena: "g1s.porto.piena" }, conAltro: "g1s.porto.altro" },
      { id: "vite-muro", nome: "g1s.hs.viteMuro", forma: "M560 520 H900 V580 H560 Z", arrivo: [720, 790], vista: "schiena",
        guarda: "g1s.vm.guarda", usa: "g1s.vm.usa", parla: "g1s.vm.parla" },
      { id: "penna", nome: "g1.hs.penna", forma: "M540 310 H650 V460 H540 Z", arrivo: [560, 800], vista: "schiena",
        guarda: "g1s.penna.guarda", usa: "g1.penna.usa", parla: "g1s.penna.parla", conAltro: "g1.penna.altro" },
      { id: "treno", nome: "g1.hs.treno", forma: "M0 300 H170 V870 H0 Z", arrivo: [230, 840], verso: -1,
        guarda: "g1.treno.guarda", usa: Cer3.sali, parla: "g1.treno.parla" }
    ]
  });

  /* ---------- il compasso rotto ---------- */
  async function prendiCompasso(m) {
    m.flag("compassoPreso", true);
    m.prendi("compassoRotto");
    await m.pensa("g1s.comp.prendi");
    await m.dice("archimede", "g1s.comp.arch");
  }
  async function aggiustaCompasso(m) {
    m.togli("vite"); m.togli("compassoRotto"); m.prendi("compasso");
    m.suono("magia");
    await m.pensa("g1s.comp.fatto");
    await m.dice("penna", "g1s.comp.penna");
  }

  /* ---------- la fruttivendola: il nastro per il tavolo rotondo ---------- */
  async function parlaFruttivendola(m) {
    if (m.flag("serveBilancia") && !m.flag("pesettiPresi")) return chiediPesetti(m);
    if (m.flag("viteData")) return m.dice("fruttivendola", m.flag("compassoDato") ? "g1s.frutt.dopo2" : "g1s.frutt.dopo");
    if (!m.flag("fruttParlato")) {
      m.flag("fruttParlato", true);
      await m.dice("fruttivendola", "g1s.frutt.1");
      await m.pensa("g1s.frutt.2");
      await m.dice("fruttivendola", "g1s.frutt.3");
    }
    if (!m.flag("compassoPreso")) return m.dice("fruttivendola", "g1s.frutt.vite0");
    await m.dice("fruttivendola", "g1s.frutt.4");
    await m.dice("fruttivendola", "g1s.frutt.5");
    return nastro(m);
  }
  async function nastro(m) {
    var D = m.stato.flag.diamTavolo || Cer3.scegliUno([60, 70, 80, 90, 100, 120]);
    m.flag("diamTavolo", D);
    var par = { D: String(D), r: String(D / 2), k: Cer3.kpi(D), ap: Cer3.v(D * 3.14) };
    m.aiutoQui({ id: "h-nastro", chi: "penna", chiavi: ["g1s.h.nas.1", "g1s.h.nas.2", "g1s.h.nas.3"], param: par });
    var ok = await Cer3.rispostaPi(m, {
      titolo: "g1s.nas.domanda", param: par, k: D, esatto: false, promemoria: "g1s.nas.promemoria",
      trappole: [
        { k: D / 2, err: "g1-circ-raggio-dimezzato", chiave: "g1s.nas.err.raggio" },
        { k: 2 * D, err: "g1-circ-diametro-come-raggio", chiave: "g1s.nas.err.doppio" },
        { k: D * D / 4, err: "g1-circ-area", chiave: "g1s.nas.err.area" }
      ], errAltro: "g1-circ-calcolo"
    });
    m.aiutoQui(null);
    if (!ok) return;
    m.flag("nastroFatto", true);
    m.flag("viteData", true);
    m.prendi("vite");
    await m.dice("fruttivendola", "g1s.nas.ok", par);
    await m.pensa("g1s.nas.vite");
    m.annota("g1s.q.approx");
  }
  async function chiediPesetti(m) {
    await m.pensa("g1s.pes.chiedi");
    if (!m.flag("sabbiaBagnata")) {
      if (!m.flag("ventoVisto")) await vento(m);
      await m.dice("fruttivendola", "g1s.pes.prima.1");
      await m.dice("fruttivendola", "g1s.pes.prima.2");
      return;
    }
    await m.dice("fruttivendola", "g1s.pes.si.1");
    await m.dice("fruttivendola", "g1s.pes.si.2");
    m.flag("pesettiPresi", true);
    m.prendi("pesetti");
    m.suono("prendi");
    await m.pensa("g1s.pes.presi");
  }

  /* ---------- il ritorno da Atene: il vento cancella i disegni; acqua di mare per bagnare la sabbia ---------- */
  async function vento(m) {
    m.flag("ventoVisto", true);
    m.suono("magia");
    await m.dice("narratore", "g1s.vento.1");
    await m.dice("archimede", "g1s.vento.2");
    await m.dice("archimede", "g1s.vento.3");
    await m.dice("penna", "g1s.vento.4");
  }
  async function riempiAnfora(m) {
    m.togli("anfora"); m.prendi("anforaPiena");
    m.suono("prendi");
    await m.pensa("g1s.anf.riempi");
  }
  async function bagnaSabbia(m) {
    if (m.flag("sabbiaBagnata")) return m.pensa("g1s.tav.bagnata");
    if (!m.flag("ventoVisto")) return m.dice("archimede", "g1s.arch.nonbagnare");
    m.togli("anforaPiena");
    m.flag("sabbiaBagnata", true);
    m.suono("magia");
    await m.pensa("g1s.bagna.1");
    await m.dice("archimede", "g1s.bagna.2");
    /* l'esagono inscritto: perimetro = 6 × r (tre diametri), un po' meno della circonferenza */
    var r = m.stato.flag.sEsa || Cer3.scegliUno([5, 6, 7, 8, 9, 11, 12]);
    m.flag("sEsa", r);
    var par = { r: String(r), p: String(6 * r), d: String(2 * r), circ: Cer3.v(2 * r * 3.14) };
    await m.dice("archimede", "g1s.esa.intro", par);
    m.aiutoQui({ id: "h-esa", chi: "penna", chiavi: ["g1s.h.esa.1", "g1s.h.esa.2", "g1s.h.esa.3"], param: par });
    await Cer3.finoAlGiusto(m, "g1s.esa.domanda", par, { max: 4, virgola: true }, 6 * r, async function (n) {
      if (Cer3.uguale(n, 3 * r)) { m.errore("g1-esagono-meta"); await m.dice("penna", "g1s.esa.err.meta", par); }
      else if (Cer3.uguale(n, 12 * r)) { m.errore("g1-esagono-diametro"); await m.dice("penna", "g1s.esa.err.diametro", par); }
      else if (n !== null && Math.abs(n - 2 * r * 3.14) < 0.02) { m.errore("g1-esagono-circonferenza"); await m.dice("penna", "g1s.esa.err.circ", par); }
      else { m.errore("g1-esagono-calcolo"); await m.dice("penna", "g1s.esa.err.altro", { n: Cer3.v(n || 0), r: par.r }); }
    });
    m.aiutoQui(null);
    await m.dice("archimede", "g1s.esa.ok", par);
    m.annota("g1s.q.esagono");
    await m.dice("fruttivendola", "g1s.esa.frutt");
  }

  /* ---------- Archimede ---------- */
  async function parlaArchimede(m) {
    if (m.flag("compassoDato") && !m.flag("sFatto")) return lezione(m);
    if (m.flag("ventoVisto") && !m.flag("sabbiaBagnata")) { await m.dice("archimede", "g1s.vento.3"); return m.dice("archimede", "g1s.vento.5"); }
    var opz = [
      { testo: "g1s.dlg.chi", valore: "chi" },
      { testo: "g1s.dlg.sabbia", valore: "sabbia" },
      { testo: "g1s.dlg.parolona", valore: "parolona" },
      { testo: "g1s.dlg.ciao", valore: "ciao" }
    ];
    var v = await m.scegli(opz);
    if (v === "chi") { await m.dice("archimede", "g1s.dlg.chi.r1"); await m.dice("archimede", "g1s.dlg.chi.r2"); }
    if (v === "sabbia") { await m.dice("archimede", "g1s.dlg.sabbia.r1"); await m.dice("archimede", m.flag("sFatto") ? "g1s.dlg.sabbia.r3" : "g1s.dlg.sabbia.r2"); }
    if (v === "parolona") { await m.dice("archimede", "g1s.dlg.parolona.r1"); await m.dice("penna", "g1s.dlg.parolona.r2"); }
    if (v === "ciao") await m.dice("archimede", m.flag("sFatto") ? "g1s.dlg.ciao.r2" : "g1s.dlg.ciao.r1");
  }
  async function daiCompasso(m) {
    m.togli("compasso");
    m.flag("compassoDato", true);
    m.suono("magia");
    await m.dice("archimede", "g1s.dai.1");
    await m.dice("archimede", "g1s.dai.2");
    await Cer3.pannelloFigura(m, "g1s.pol.titolo", poligoni(), "g1s.pol.guida");
    await m.dice("archimede", "g1s.dai.3");
    await m.dice("penna", "g1s.dai.4");
    m.annota("g1s.q.archimede");
    return lezione(m);
  }

  async function lezione(m) {
    if (!m.flag("compassoDato")) return m.pensa("g1s.tav.usa");
    if (!m.flag("sCirc")) { if (!(await circonferenza(m))) return; }
    if (!m.flag("sApprox")) { if (!(await approssimato(m))) return; }
    if (!m.flag("sDiam")) { if (!(await diametro(m))) return; }
    if (!m.flag("sBivio")) await bivio(m);
    if (!m.flag("sFatto")) return fine(m);
  }

  /* 1. circonferenza dal raggio, valore esatto */
  async function circonferenza(m) {
    var r = m.stato.flag.sRaggio || Cer3.scegliUno([4, 5, 6, 7, 8, 9, 11, 12, 13]);
    m.flag("sRaggio", r);
    var par = { r: String(r), d: String(2 * r), k: Cer3.kpi(2 * r) };
    await m.dice("archimede", "g1s.circ.intro", par);
    m.aiutoQui({ id: "h-circ", chi: "penna", chiavi: ["g1s.h.circ.1", "g1s.h.circ.2", "g1s.h.circ.3"], param: par });
    var ok = await Cer3.rispostaPi(m, {
      titolo: "g1s.circ.domanda", param: par, k: 2 * r, esatto: true, annullabile: true,
      trappole: [
        { k: r, err: "g1-circ-senza-2", chiave: "g1s.circ.err.senza2" },
        { k: r * r, err: "g1-circ-area", chiave: "g1s.circ.err.area" },
        { k: 4 * r, err: "g1-circ-diametro-come-raggio", chiave: "g1s.circ.err.doppio" }
      ], errAltro: "g1-circ-calcolo"
    });
    m.aiutoQui(null);
    if (!ok) return false;
    m.flag("sCirc", true);
    await m.dice("archimede", "g1s.circ.ok", par);
    m.annota("g1s.q.circ");
    return true;
  }
  /* 2. la stessa, valore approssimato (calcolatrice) */
  async function approssimato(m) {
    var r = m.stato.flag.sRaggio, par = { r: String(r), k: Cer3.kpi(2 * r), ap: Cer3.v(2 * r * 3.14) };
    await m.dice("penna", "g1s.ap.intro", par);
    m.aiutoQui({ id: "h-ap", chi: "penna", chiavi: ["g1s.h.ap.1", "g1s.h.ap.2", "g1s.h.ap.3"], param: par });
    var ok = await Cer3.rispostaPi(m, { titolo: "g1s.ap.domanda", param: par, k: 2 * r, esatto: false, annullabile: true,
      trappole: [{ k: r, err: "g1-circ-senza-2", chiave: "g1s.circ.err.senza2" }], errAltro: "g1-circ-calcolo" });
    m.aiutoQui(null);
    if (!ok) return false;
    m.flag("sApprox", true);
    await m.dice("archimede", "g1s.ap.ok", par);
    return true;
  }
  /* 3. dalla circonferenza al diametro (tastierino) */
  async function diametro(m) {
    var k = m.stato.flag.sCirconf || Cer3.scegliUno([14, 18, 22, 26, 30, 34]);
    m.flag("sCirconf", k);
    var par = { c: Cer3.kpi(k), d: String(k), r: String(k / 2) };
    await m.dice("archimede", "g1s.diam.intro", par);
    m.aiutoQui({ id: "h-diam", chi: "penna", chiavi: ["g1s.h.diam.1", "g1s.h.diam.2", "g1s.h.diam.3"], param: par });
    var ok = await Cer3.finoAlGiusto(m, "g1s.diam.domanda", par, { virgola: true, max: 5, annullabile: true }, k, async function (n) {
      if (Cer3.uguale(n, k / 2)) { m.errore("g1-diam-raggio"); await m.dice("penna", "g1s.diam.err.raggio", par); }
      else if (Cer3.uguale(n, 2 * k)) { m.errore("g1-diam-doppio"); await m.dice("penna", "g1s.diam.err.doppio", par); }
      else if (n !== null && Math.abs(n - k * 3.14) < 0.01) { m.errore("g1-diam-moltiplica"); await m.dice("penna", "g1s.diam.err.moltiplica", par); }
      else { m.errore("g1-diam-calcolo"); await m.dice("penna", "g1s.diam.err.altro", { n: Cer3.v(n || 0), c: par.c }); }
    });
    m.aiutoQui(null);
    if (!ok) return false;
    m.flag("sDiam", true);
    await m.dice("archimede", "g1s.diam.ok", par);
    m.annota("g1s.q.diam");
    return true;
  }
  /* 4. bivio di classe: 22/7 è π? */
  async function bivio(m) {
    await m.dice("archimede", "g1s.biv.intro");
    m.aiutoQui({ id: "h-biv-s", chi: "penna", chiavi: ["g1s.h.biv.1", "g1s.h.biv.2", "g1s.h.biv.3"] });
    await Cer3.sceltaFinoAlGiusto(m, "g1s.biv.domanda", null, [
      { testo: "g1s.biv.giusta", valore: "giusta" },
      { testo: "g1s.biv.esatto", valore: "esatto" },
      { testo: "g1s.biv.tre", valore: "tre" },
      { testo: "g1s.biv.grandi", valore: "grandi" }
    ], "g1-bivio-227", "g1s.biv.err");
    m.aiutoQui(null);
    m.flag("sBivio", true);
    await m.dice("archimede", "g1s.biv.ok");
  }
  async function fine(m) {
    m.flag("sFatto", true);
    await m.dice("archimede", "g1s.fine.1");
    await m.pensa("g1s.fine.2");
    await Cer3.prendiSpicchio(m, "siracusa");
    m.figurina("archimede");
    await m.dice("archimede", "g1s.fine.comp");
    m.prendi("compasso");
    await m.pensa("g1s.fine.comp2");
    await m.dice("archimede", "g1s.fine.3");
    await Cer3.sblocca(m, "siene");
    await m.dice("penna", "g1s.fine.4");
  }

  /* ---------- aiuti a gradini ---------- */
  Cer3.aiutiStanze.siracusa = function (m) {
    if (!m.flag("compassoPreso")) return { id: "s-comp", chi: "penna", chiavi: ["g1s.aiuto.comp1", "g1s.aiuto.comp2", "g1s.aiuto.comp3"] };
    if (!m.flag("viteData")) return { id: "s-vite", chi: "penna", chiavi: ["g1s.aiuto.vite1", "g1s.aiuto.vite2", "g1s.aiuto.vite3"] };
    if (!m.flag("compassoDato") && m.ha("vite")) return { id: "s-comb", chi: "penna", chiavi: ["g1s.aiuto.comb1", "g1s.aiuto.comb2"] };
    if (!m.flag("compassoDato")) return { id: "s-dai", chi: "penna", chiavi: ["g1s.aiuto.dai1", "g1s.aiuto.dai2"] };
    if (!m.flag("sFatto")) return { id: "s-lez", chi: "penna", chiavi: ["g1s.aiuto.lez1", "g1s.aiuto.lez2"] };
    if (m.flag("serveBilancia") && !m.flag("pesettiPresi") && !m.flag("sabbiaBagnata")) {
      if (!m.flag("ventoVisto")) return { id: "s-pes0", chi: "penna", chiavi: ["g1s.aiuto.pes1", "g1s.aiuto.pes2"] };
      if (m.ha("anforaPiena")) return { id: "s-bagna", chi: "penna", chiavi: ["g1s.aiuto.bagna1", "g1s.aiuto.bagna2"] };
      if (m.ha("anfora")) return { id: "s-riempi", chi: "penna", chiavi: ["g1s.aiuto.riempi1", "g1s.aiuto.riempi2"] };
      return { id: "s-vaso", chi: "penna", chiavi: ["g1s.aiuto.vaso1", "g1s.aiuto.vaso2", "g1s.aiuto.vaso3"] };
    }
    if (m.flag("serveBilancia") && !m.flag("pesettiPresi")) return { id: "s-pes", chi: "penna", chiavi: ["g1s.aiuto.pes1", "g1s.aiuto.pes2"] };
    return { id: "s-fine", chi: "penna", chiavi: ["g1s.aiuto.fine1", "g1s.aiuto.fine2"] };
  };
})();
