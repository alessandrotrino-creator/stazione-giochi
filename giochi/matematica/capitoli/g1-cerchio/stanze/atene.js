/* =====================================================================
   Matematica · terze · Livello G1 · Stanza: ATENE, circa 440 a.C. — le lunule di Ippocrate di Chio (Lez. 4)
   METTERE IN EQUILIBRIO UNA BILANCIA (catena lunga): Ippocrate vuole mostrare che una lunula (figura tutta
   curva) ha la stessa area di un triangolo, pesando due ritagli. Le tavolette di cera non si ritagliano:
   serve il FOGLIO DI PAPIRO di Eratostene (da Siene). La bilancia è senza pesetti (presi da Madama Parolona):
   si TORNA A SIRACUSA a farseli prestare dalla fruttivendola → pesetti sulla bilancia: lunula = 3 pesetti,
   triangolo = 3 pesetti → MOMENTO WOW → area del settore con l'angolo (valore esatto) → area del settore
   con l'altra formula, arco × raggio : 2 (valore esatto) → segmento circolare = settore − triangolo
   (valore approssimato, calcolatrice) → spicchio 4, figurina, si accende Londra.
   Fatti verificati (MacTutor): Ippocrate di Chio (circa 470 - circa 410 a.C.), nato a Chio, insegnò ad Atene
   (circa 450-430 a.C.); dimostrò che una lunula è uguale a un triangolo; era stato mercante e aveva perso
   tutto per colpa dei pirati (versione di Heath; Aristotele parla di doganieri a Bisanzio).
   ===================================================================== */
(function () {
  Motore.aggiungi("personaggi", {
    ippocrate: { nome: "nome.ippocrate", colore: "#a8f0c8", voce: { altezza: 165, timbro: "triangle", passo: 0.09, volume: 0.04 } }
  });
  Motore.aggiungi("oggetti", {
    argilla: { icona: "ogg-argilla", nome: "ogg.argilla", descrizione: "ogg.argilla.d", suAltro: "argilla.altro" },
    anfora: { icona: "ogg-anfora", nome: "ogg.anfora", descrizione: "ogg.anfora.d", suAltro: "anfora.altro" },
    anforaPiena: { icona: "ogg-anfora-piena", nome: "ogg.anforaPiena", descrizione: "ogg.anforaPiena.d", suAltro: "anforaPiena.altro" }
  });
  Motore.aggiungi("figurine", {
    ippocrate: { nome: "fig.ippocrate.nome", anni: "fig.ippocrate.anni", paese: "fig.ippocrate.paese", testo: "fig.ippocrate.testo", ritratto: "ippocrate" }
  });

  var LUNULA = '<path d="M10 80 A60 60 0 0 1 130 80 A80 80 0 0 0 10 80 Z" fill="url(#ce-papiro)" stroke="#1d1428" stroke-width="3"/>';
  var TRIANGOLO = '<path d="M14 84 L70 28 L126 84 Z" fill="url(#ce-papiro)" stroke="#1d1428" stroke-width="3"/>';
  function pesata() {
    function piatto(x, cosa) {
      return '<g transform="translate(' + x + ' 0)"><path d="M0 60 L-60 180 M0 60 L60 180" stroke="#1d1428" stroke-width="3"/>' +
        '<path d="M-80 180 Q0 220 80 180 Z" fill="url(#at-bronzo)" stroke="#1d1428" stroke-width="3"/>' +
        '<g transform="translate(-70 100) scale(1)">' + cosa + "</g></g>";
    }
    function pesi(x) {
      return '<g transform="translate(' + x + ' 0)"><path d="M0 60 L-60 180 M0 60 L60 180" stroke="#1d1428" stroke-width="3"/>' +
        '<path d="M-80 180 Q0 220 80 180 Z" fill="url(#at-bronzo)" stroke="#1d1428" stroke-width="3"/>' +
        '<use href="#ogg-pesi-bronzo" x="-60" y="96" width="120" height="120"/></g>';
    }
    var trave = '<path d="M60 60 H380" stroke="#1d1428" stroke-width="10"/><path d="M60 60 H380" stroke="#c88a3a" stroke-width="5"/><path d="M220 60 V20" stroke="#1d1428" stroke-width="6"/><circle cx="220" cy="60" r="10" fill="#f3c45a" stroke="#1d1428" stroke-width="3"/>';
    return '<svg viewBox="0 0 900 260"><g>' + trave + piatto(60, LUNULA) + pesi(380) + "</g>" +
      '<g transform="translate(460 0)">' + trave + piatto(60, TRIANGOLO) + pesi(380) + "</g>" +
      '<text x="220" y="250" text-anchor="middle" font-size="24" fill="#9fffb0">' + Lingue.semplice("g1a.pes.lunula") + "</text>" +
      '<text x="680" y="250" text-anchor="middle" font-size="24" fill="#9fffb0">' + Lingue.semplice("g1a.pes.triangolo") + "</text></svg>";
  }
  /* settore e segmento circolare, per i pannelli */
  function segmento(r) {
    return '<svg viewBox="0 0 320 300">' +
      '<path d="M40 260 L40 40 A220 220 0 0 1 260 260 Z" fill="#f2d26a" stroke="#1d1428" stroke-width="4"/>' +
      '<path d="M40 40 A220 220 0 0 1 260 260 Z" fill="#c8402f" stroke="#1d1428" stroke-width="4"/>' +
      '<path d="M40 40 L260 260" stroke="#1d1428" stroke-width="3" stroke-dasharray="8 6"/>' +
      '<text x="70" y="200" font-size="24" fill="#1d1428">' + Lingue.semplice("g1a.seg.triangolo") + '</text><text x="168" y="118" font-size="24" fill="#fff8e0">' + Lingue.semplice("g1a.seg.segmento") + "</text>" +
      '<text x="12" y="160" font-size="24" fill="#ffd36b">r</text><text x="140" y="284" font-size="24" fill="#ffd36b">r = ' + r + " cm</text></svg>";
  }

  var elementi = [
    { id: "vagone", classe: "", x: 0, y: 300, larghezza: 170, altezza: 560,
      svg: '<svg viewBox="0 0 170 560" overflow="visible"><use href="#ce-vagone" width="170" height="560"/></svg>' },
    { id: "bilancia", classe: "", x: 1080, y: 440, larghezza: 240, altezza: 290,
      svg: '<svg viewBox="0 0 240 290"><ellipse cx="120" cy="282" rx="70" ry="8" fill="#000" opacity=".3"/>' +
        '<g stroke="#1d1428" stroke-width="3" stroke-linejoin="round"><path d="M120 280 V40" stroke-width="10"/><path d="M120 280 V40" stroke="#7a4a24" stroke-width="6"/>' +
        '<path d="M80 280 H160" stroke-width="10"/><path d="M80 280 H160" stroke="#7a4a24" stroke-width="6"/>' +
        '<path d="M20 50 H220" stroke-width="8"/><path d="M20 50 H220" stroke="#c88a3a" stroke-width="4"/><circle cx="120" cy="50" r="9" fill="#f3c45a"/>' +
        '<path d="M20 50 L4 150 M20 50 L36 150 M220 50 L204 150 M220 50 L236 150" stroke-width="2"/>' +
        '<path d="M-6 150 Q20 168 46 150 Z M194 150 Q220 168 246 150 Z" fill="url(#at-bronzo)"/></g></svg>' },
    { id: "ritagli", classe: "", x: 420, y: 596, larghezza: 140, altezza: 50,
      svg: '<svg viewBox="0 0 280 100"><g transform="scale(.9)">' + LUNULA + '</g><g transform="translate(140 0) scale(.9)">' + TRIANGOLO + "</g></svg>",
      visibile: function (m) { return m.flag("ritagliFatti") && !m.flag("pesataFatta"); } },
    /* la ruota del vasaio (il vasaio è al porto) e il secchio d'argilla */
    { id: "ruota-vasaio", classe: "", x: 1350, y: 600, larghezza: 190, altezza: 200,
      svg: '<svg viewBox="0 0 190 200"><ellipse cx="95" cy="192" rx="86" ry="8" fill="#000" opacity=".3"/><g stroke="#1d1428" stroke-width="3" stroke-linejoin="round">' +
        '<path d="M30 70 L22 186 M160 70 L168 186 M30 70 H160" stroke-width="8"/><path d="M30 70 L22 186 M160 70 L168 186 M30 70 H160" stroke="#8a5a2a" stroke-width="4"/>' +
        '<path d="M95 64 V160" stroke-width="9"/><path d="M95 64 V160" stroke="#c8c8d0" stroke-width="4"/>' +
        '<path d="M14 158 V168 Q95 196 176 168 V158" fill="#6a4020"/><ellipse cx="95" cy="158" rx="81" ry="20" fill="url(#ce-legno)"/>' +
        '<path d="M44 152 Q95 172 146 152" fill="none" stroke="#7a4a24" stroke-width="2"/>' +
        '<path d="M48 56 V64 Q95 80 142 64 V56" fill="#6a4020"/><ellipse cx="95" cy="56" rx="47" ry="12" fill="url(#ce-legno)"/></g>' +
        '<path d="M86 52 Q95 40 104 52" fill="#b8683a" stroke="#1d1428" stroke-width="2"/>' +
        '<circle cx="138" cy="58" r="4" fill="#8a8478" stroke="#1d1428" stroke-width="1.5"/></svg>' },
    { id: "secchio-argilla", classe: "", x: 1528, y: 720, larghezza: 66, altezza: 76,
      svg: '<svg viewBox="0 0 66 76"><ellipse cx="33" cy="72" rx="30" ry="4" fill="#000" opacity=".3"/><g stroke="#1d1428" stroke-width="2.5" stroke-linejoin="round">' +
        '<path d="M6 18 L12 70 H54 L60 18 Z" fill="#8a6a4a"/><ellipse cx="33" cy="18" rx="27" ry="7" fill="#b8683a"/><path d="M8 18 Q33 -14 58 18" fill="none" stroke-width="3"/></g>' +
        '<path d="M10 40 H56 M12 56 H54" stroke="#5a4a3a" stroke-width="2"/></svg>' },
    { id: "penna", classe: "penna-el", personaggio: "penna", x: 880, y: 300, larghezza: 80, altezza: 128,
      svg: '<svg viewBox="-70 -230 150 240" overflow="visible"><use href="#penna" x="-70" y="-230" width="150" height="240"/></svg>' }
  ];

  Motore.stanza("atene", {
    sfondo: "atene",
    pavimento: { xMin: 190, xMax: 1460, yMin: 780, yMax: 880 },
    scala: { lontano: { y: 780, s: 0.92 }, vicino: { y: 880, s: 1 } },
    attori: [
      { id: "zara", simbolo: "zara-fronte", viste: { fronte: "zara-fronte", profilo: "zara-profilo", schiena: "zara-schiena" },
        vista: [-110, -600, 230, 615], piedi: [5, 0], altezza: 460, x: 240, y: 850, dir: 1 },
      { id: "ippocrate", simbolo: "ippocrate", vista: [-110, -600, 230, 615], piedi: [0, 0], altezza: 450, x: 780, y: 790, dir: -1, fisso: true }
    ],
    elementi: elementi,
    entrata: async function (m) {
      if (m.flag("ateneArrivo")) {
        if (m.ha("pesetti") && !m.flag("pesataFatta")) await m.dice("penna", "g1a.ritorno");
        return;
      }
      m.flag("ateneArrivo", true);
      await m.cartello("g1a.titolo", "g1a.sottotitolo", 3000);
      await m.dice("narratore", "g1a.arrivo.1");
      await m.dice("ippocrate", "g1a.arrivo.2");
      await m.dice("ippocrate", "g1a.arrivo.3");
      await m.dice("ippocrate", "g1a.arrivo.4");
      await m.dice("penna", "g1a.arrivo.5");
    },
    hotspot: [
      { id: "ippocrate", nome: "g1a.hs.ippocrate", forma: "M710 330 H880 V790 H710 Z", arrivo: [660, 830], verso: 1,
        guarda: "g1a.ipp.guarda", usa: "g1a.ipp.usa", parla: parlaIppocrate,
        con: { papiro: ritaglia, pesetti: "g1a.ipp.pesetti", compasso: "g1a.ipp.compasso", spicchio: "g1a.ipp.spicchio", metro: "g1a.ipp.metro" },
        conAltro: "g1a.ipp.altro" },
      { id: "tavolo", nome: "g1a.hs.tavolo", forma: "M300 620 H590 V760 H300 Z", arrivo: [440, 800], vista: "schiena",
        guarda: function (m) { return m.flag("ritagliFatti") ? "g1a.tav.guarda2" : "g1a.tav.guarda"; },
        usa: "g1a.tav.usa", parla: "g1a.tav.parla", con: { papiro: ritaglia }, conAltro: "g1a.tav.altro" },
      { id: "bilancia", nome: "g1a.hs.bilancia", forma: "M1080 440 H1320 V730 H1080 Z", arrivo: [1150, 800], vista: "schiena",
        guarda: function (m) { return m.flag("pesataFatta") ? "g1a.bil.guarda2" : "g1a.bil.guarda"; },
        usa: usaBilancia, parla: "g1a.bil.parla",
        con: { pesetti: pesa, papiro: "g1a.bil.papiro", spicchio: "g1a.bil.spicchio" }, conAltro: "g1a.bil.altro" },
      { id: "vasi", nome: "g1a.hs.vasi", forma: "M660 410 H930 V630 H660 Z", arrivo: [800, 800], vista: "schiena",
        guarda: "g1a.vasi.guarda", usa: "g1a.vasi.usa", parla: "g1a.vasi.parla" },
      { id: "colline", nome: "g1a.hs.colline", forma: "M1010 300 H1330 V420 H1010 Z", arrivo: [1150, 800], vista: "schiena",
        guarda: "g1a.col.guarda", usa: "g1a.col.usa", parla: "g1a.col.parla" },
      { id: "ulivo", nome: "g1a.hs.ulivo", forma: "M1380 350 H1600 V640 H1380 Z", arrivo: [1420, 800], vista: "schiena",
        guarda: "g1a.uli.guarda", usa: "g1a.uli.usa", parla: "g1a.uli.parla" },
      { id: "ruota-vasaio", nome: "g1a.hs.ruota", forma: "M1356 604 H1536 V796 H1356 Z", arrivo: [1400, 830], verso: 1,
        guarda: "g1a.ruota.guarda", usa: function (m) { return m.flag("anforaFatta") ? m.pensa("g1a.ruota.fatta") : m.pensa(m.ha("argilla") ? "g1a.ruota.usa2" : "g1a.ruota.usa"); },
        parla: "g1a.ruota.parla", con: { argilla: vasaio }, conAltro: "g1a.ruota.altro" },
      { id: "secchio", nome: "g1a.hs.secchio", forma: "M1526 716 H1596 V798 H1526 Z", arrivo: [1460, 830], verso: 1,
        guarda: "g1a.secchio.guarda", usa: prendiArgilla, parla: "g1a.secchio.parla" },
      { id: "colonne", nome: "g1a.hs.colonne", forma: "M240 210 H290 V630 H240 Z M590 210 H640 V630 H590 Z", arrivo: [440, 800], vista: "schiena",
        guarda: "g1a.colo.guarda", usa: "g1a.colo.usa", parla: "g1a.colo.parla", con: { metro: "g1a.colo.metro" } },
      { id: "penna", nome: "g1.hs.penna", forma: "M860 280 H970 V430 H860 Z", arrivo: [900, 830], vista: "schiena",
        guarda: "g1a.penna.guarda", usa: "g1.penna.usa", parla: "g1a.penna.parla", conAltro: "g1.penna.altro" },
      { id: "treno", nome: "g1.hs.treno", forma: "M0 300 H170 V870 H0 Z", arrivo: [230, 840], verso: -1,
        guarda: "g1.treno.guarda", usa: Cer3.sali, parla: "g1.treno.parla" }
    ]
  });

  /* ---------- i ritagli e la bilancia ---------- */
  async function ritaglia(m) {
    if (m.flag("ritagliFatti")) return m.pensa("g1a.rit.gia");
    m.togli("papiro");
    m.flag("ritagliFatti", true);
    m.suono("magia");
    await m.dice("ippocrate", "g1a.rit.1");
    await m.dice("ippocrate", "g1a.rit.2");
    if (!m.ha("pesetti")) {
      m.flag("serveBilancia", true);
      await m.dice("ippocrate", "g1a.rit.3");
      await m.dice("penna", "g1a.rit.4");
    } else await m.dice("ippocrate", "g1a.rit.5");
  }
  async function usaBilancia(m) {
    if (m.flag("pesataFatta")) return lezione(m);
    if (!m.flag("ritagliFatti")) return m.pensa("g1a.bil.usa0");
    if (!m.ha("pesetti")) { m.flag("serveBilancia", true); await m.pensa("g1a.bil.usa1"); return m.dice("penna", "g1a.rit.4"); }
    return m.pensa("g1a.bil.usa2");
  }
  async function pesa(m) {
    if (m.flag("pesataFatta")) return m.pensa("g1a.pes.gia");
    if (!m.flag("ritagliFatti")) return m.pensa("g1a.bil.usa0");
    m.togli("pesetti");
    m.flag("pesataFatta", true);
    m.suono("magia");
    await m.pensa("g1a.pes.1");
    await Cer3.pannelloFigura(m, "g1a.pes.titolo", pesata(), "g1a.pes.guida");
    await m.dice("ippocrate", "g1a.pes.2");
    await m.dice("ippocrate", "g1a.pes.3");
    await m.dice("penna", "g1a.pes.4");
    m.annota("g1a.q.lunula");
    return lezione(m);
  }

  /* ---------- la ruota del vasaio: il bordo fa più strada del centro (2π(R − r) a ogni giro) ---------- */
  async function prendiArgilla(m) {
    if (m.ha("argilla") || m.flag("anforaFatta")) return m.pensa("g1a.secchio.basta");
    m.prendi("argilla");
    await m.pensa("g1a.secchio.prendi");
  }
  async function vasaio(m) {
    var q = m.stato.flag.aVas;
    if (!q) { var R = Cer3.scegliUno([20, 25, 30]), r = Cer3.scegliUno([4, 5, 6, 8, 10]); q = { R: R, r: r }; m.flag("aVas", q); }
    var diff = q.R - q.r, par = { R: String(q.R), r: String(q.r), diff: String(diff), k: Cer3.kpi(2 * diff), kR: Cer3.kpi(2 * q.R), kr: Cer3.kpi(2 * q.r) };
    await m.pensa("g1a.vas.1");
    await m.dice("ippocrate", "g1a.vas.2");
    await m.dice("ippocrate", "g1a.vas.3", par);
    m.aiutoQui({ id: "h-vas", chi: "penna", chiavi: ["g1a.h.vas.1", "g1a.h.vas.2", "g1a.h.vas.3"], param: par });
    var ok = await Cer3.rispostaPi(m, {
      titolo: "g1a.vas.domanda", param: par, k: 2 * diff, esatto: true, annullabile: true, promemoria: "g1a.vas.promemoria",
      trappole: [
        { k: diff, err: "g1-circ-senza-2", chiave: "g1a.vas.err.senza2" },
        { k: 2 * q.R, err: "g1-vasaio-solo-bordo", chiave: "g1a.vas.err.bordo" },
        { k: q.R * q.R - q.r * q.r, err: "g1-vasaio-area", chiave: "g1a.vas.err.area" },
        { k: 2 * q.R + 2 * q.r, err: "g1-vasaio-somma", chiave: "g1a.vas.err.somma" }
      ], errAltro: "g1-vasaio-calcolo"
    });
    m.aiutoQui(null);
    if (!ok) return;
    m.togli("argilla");
    m.flag("anforaFatta", true);
    m.suono("magia");
    await m.dice("ippocrate", "g1a.vas.ok", par);
    await m.pensa("g1a.vas.4");
    await m.dice("ippocrate", "g1a.vas.5");
    m.prendi("anfora");
    await m.pensa("g1a.vas.6");
    m.annota("g1a.q.vasaio");
  }

  async function parlaIppocrate(m) {
    if (m.flag("pesataFatta") && !m.flag("aFatto")) return lezione(m);
    var v = await m.scegli([
      { testo: "g1a.dlg.chi", valore: "chi" },
      { testo: "g1a.dlg.lunula", valore: "lunula" },
      { testo: "g1a.dlg.mercante", valore: "mercante" },
      { testo: "g1a.dlg.ciao", valore: "ciao" }
    ]);
    if (v === "chi") { await m.dice("ippocrate", "g1a.dlg.chi.r1"); await m.dice("ippocrate", "g1a.dlg.chi.r2"); }
    if (v === "lunula") { await m.dice("ippocrate", "g1a.dlg.lunula.r1"); await m.dice("ippocrate", "g1a.dlg.lunula.r2"); }
    if (v === "mercante") { await m.dice("ippocrate", "g1a.dlg.mercante.r1"); await m.dice("ippocrate", "g1a.dlg.mercante.r2"); await m.pensa("g1a.dlg.mercante.r3"); }
    if (v === "ciao") await m.dice("ippocrate", m.flag("aFatto") ? "g1a.dlg.ciao.r2" : "g1a.dlg.ciao.r1");
  }

  async function lezione(m) {
    if (!m.flag("pesataFatta")) return m.pensa("g1a.bil.usa0");
    if (!m.flag("aSettore")) { if (!(await settore(m))) return; }
    if (!m.flag("aAltra")) { if (!(await altraFormula(m))) return; }
    if (!m.flag("aSegmento")) { if (!(await segmentoDom(m))) return; }
    if (!m.flag("aFatto")) return fine(m);
  }

  /* 1. area del settore con l'angolo, valore esatto */
  async function settore(m) {
    var q = m.stato.flag.aSet;
    if (!q) {
      var r = Cer3.scegliUno([6, 9, 12]);
      var alfa = Cer3.scegliUno([30, 40, 60, 90, 120, 150].filter(function (a) { return (r * r * a) % 360 === 0; }));
      q = { r: r, alfa: alfa, k: r * r * alfa / 360 };
      m.flag("aSet", q);
    }
    var par = { r: String(q.r), alfa: String(q.alfa), r2: String(q.r * q.r), tot: Cer3.kpi(q.r * q.r), frazione: Cer3.frazione(q.alfa, 360), k: Cer3.kpi(q.k) };
    await m.dice("ippocrate", "g1a.set.intro", par);
    m.aiutoQui({ id: "h-set", chi: "penna", chiavi: ["g1a.h.set.1", "g1a.h.set.2", "g1a.h.set.3"], param: par });
    var ok = await Cer3.rispostaPi(m, {
      titolo: "g1a.set.domanda", param: par, k: q.k, esatto: true, annullabile: true, promemoria: "g1a.set.promemoria",
      trappole: [
        { k: q.r * q.r, err: "g1-settore-senza-360", chiave: "g1a.set.err.tutto" },
        { k: 2 * q.r * q.alfa / 360, err: "g1-settore-arco", chiave: "g1a.set.err.arco" },
        { k: q.r * q.r * q.alfa / 180, err: "g1-settore-180", chiave: "g1a.set.err.180" }
      ], errAltro: "g1-settore-calcolo"
    });
    m.aiutoQui(null);
    if (!ok) return false;
    m.flag("aSettore", true);
    await m.dice("ippocrate", "g1a.set.ok", par);
    m.annota("g1a.q.settore");
    return true;
  }
  /* 2. l'altra formula: area del settore = arco × raggio : 2 */
  async function altraFormula(m) {
    var q = m.stato.flag.aAlt;
    if (!q) { q = { r: Cer3.scegliUno([4, 6, 8, 10]), l: Cer3.scegliUno([3, 5, 7, 9]) }; m.flag("aAlt", q); }
    var k = q.l * q.r / 2, par = { r: String(q.r), l: Cer3.kpi(q.l), lr: Cer3.kpi(q.l * q.r), k: Cer3.kpi(k) };
    await m.dice("ippocrate", "g1a.alt.intro", par);
    m.aiutoQui({ id: "h-alt", chi: "penna", chiavi: ["g1a.h.alt.1", "g1a.h.alt.2", "g1a.h.alt.3"], param: par });
    var ok = await Cer3.rispostaPi(m, {
      titolo: "g1a.alt.domanda", param: par, k: k, esatto: true, annullabile: true, promemoria: "g1a.alt.promemoria",
      trappole: [
        { k: q.l * q.r, err: "g1-altra-senza-2", chiave: "g1a.alt.err.senza2" },
        { k: q.l / 2, err: "g1-altra-senza-r", chiave: "g1a.alt.err.senzar" },
        { k: q.l * q.r * q.r / 2, err: "g1-altra-r2", chiave: "g1a.alt.err.r2" }
      ], errAltro: "g1-altra-calcolo"
    });
    m.aiutoQui(null);
    if (!ok) return false;
    m.flag("aAltra", true);
    await m.dice("ippocrate", "g1a.alt.ok", par);
    m.annota("g1a.q.altra");
    return true;
  }
  /* 3. segmento circolare di 90° = settore − triangolo, valore approssimato (calcolatrice) */
  async function segmentoDom(m) {
    var r = m.stato.flag.aSegR || Cer3.scegliUno([4, 6, 8, 10, 12]);
    m.flag("aSegR", r);
    var set = Math.round(r * r * 3.14 / 4 * 100) / 100, tri = r * r / 2, giusta = Math.round((set - tri) * 100) / 100;
    var par = { r: String(r), r2: String(r * r), set: Cer3.v(set), tri: Cer3.v(tri), seg: Cer3.v(giusta), kset: Cer3.kpi(r * r / 4) };
    await m.dice("ippocrate", "g1a.seg.intro", par);
    await Cer3.pannelloFigura(m, "g1a.seg.titolo", segmento(r), "g1a.seg.guida", par);
    m.aiutoQui({ id: "h-seg", chi: "penna", chiavi: ["g1a.h.seg.1", "g1a.h.seg.2", "g1a.h.seg.3"], param: par });
    var ok = await Cer3.finoAlGiusto(m, "g1a.seg.domanda", par, { virgola: true, max: 6, annullabile: true, calcolatrice: true, promemoria: "g1a.seg.promemoria" }, giusta, async function (n) {
      if (Cer3.uguale(n, Math.round((set + tri) * 100) / 100)) { m.errore("g1-segmento-somma"); await m.dice("penna", "g1a.seg.err.somma", par); }
      else if (Cer3.uguale(n, set)) { m.errore("g1-segmento-solo-settore"); await m.dice("penna", "g1a.seg.err.settore", par); }
      else if (Cer3.uguale(n, tri)) { m.errore("g1-segmento-solo-triangolo"); await m.dice("penna", "g1a.seg.err.triangolo", par); }
      else if (Cer3.uguale(n, Math.round((set - r * r) * 100) / 100) || Cer3.uguale(n, Math.round((r * r - set) * 100) / 100)) { m.errore("g1-segmento-triangolo-intero"); await m.dice("penna", "g1a.seg.err.tri2", par); }
      else { m.errore("g1-segmento-calcolo"); await m.dice("penna", "g1a.seg.err.altro", { n: Cer3.v(n || 0), set: par.set, tri: par.tri }); }
    });
    m.aiutoQui(null);
    if (!ok) return false;
    m.flag("aSegmento", true);
    await m.dice("ippocrate", "g1a.seg.ok", par);
    m.annota("g1a.q.segmento");
    return true;
  }
  async function fine(m) {
    m.flag("aFatto", true);
    await m.dice("ippocrate", "g1a.fine.1");
    await Cer3.prendiSpicchio(m, "atene");
    m.figurina("ippocrate");
    await m.dice("ippocrate", "g1a.fine.2");
    await Cer3.sblocca(m, "londra");
    await m.dice("penna", "g1a.fine.3");
  }

  /* ---------- aiuti a gradini ---------- */
  Cer3.aiutiStanze.atene = function (m) {
    if (!m.flag("ritagliFatti")) return { id: "a-rit", chi: "penna", chiavi: ["g1a.aiuto.rit1", "g1a.aiuto.rit2", "g1a.aiuto.rit3"] };
    if (!m.flag("pesataFatta") && !m.ha("pesetti") && !m.flag("anforaFatta") && (m.flag("ventoVisto") || m.flag("serveBilancia")))
      return { id: "a-vas", chi: "penna", chiavi: ["g1a.aiuto.vas1", "g1a.aiuto.vas2", "g1a.aiuto.vas3"] };
    if (!m.flag("pesataFatta") && !m.ha("pesetti")) return { id: "a-pes", chi: "penna", chiavi: ["g1a.aiuto.pes1", "g1a.aiuto.pes2", "g1a.aiuto.pes3"] };
    if (!m.flag("pesataFatta")) return { id: "a-bil", chi: "penna", chiavi: ["g1a.aiuto.bil1", "g1a.aiuto.bil2"] };
    if (!m.flag("aFatto")) return { id: "a-lez", chi: "penna", chiavi: ["g1a.aiuto.lez1", "g1a.aiuto.lez2"] };
    return { id: "a-fine", chi: "penna", chiavi: ["g1a.aiuto.fine1", "g1a.aiuto.fine2"] };
  };
})();
