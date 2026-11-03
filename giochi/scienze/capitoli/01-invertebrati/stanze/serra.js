/* =====================================================================
   Capitolo 1 · Stanza: LA SERRA
   Puzzle 3 "Vermi al lavoro": platelminti, nematodi, anellidi; il lombrico
   rende fertile il terreno. Personaggio storico: Charles Darwin (ricorrente).
   Dopo il puzzle: FERMATA INTERMEDIA (punto sicuro per fermarsi).
   ===================================================================== */
(function () {
  var C = Cap1;

  Grafica.definizioni(`
    <symbol id="ogg-planaria" viewBox="0 0 140 140">
      <ellipse cx="70" cy="118" rx="44" ry="5" fill="#000" opacity=".25"/>
      <path d="M22 80 Q30 56 70 58 Q112 60 122 74 Q110 92 70 92 Q34 94 22 80 Z" fill="#8a6a5a" stroke="#1d1428" stroke-width="3"/>
      <path d="M110 66 L118 58 L120 70 Z" fill="#8a6a5a" stroke="#1d1428" stroke-width="2"/>
      <circle cx="106" cy="70" r="3" fill="#fff"/><circle cx="106" cy="70" r="1.5" fill="#1d1428"/>
      <circle cx="98" cy="70" r="3" fill="#fff"/><circle cx="98" cy="70" r="1.5" fill="#1d1428"/>
      <path d="M30 76 Q70 70 112 74" fill="none" stroke="#b89a8a" stroke-width="2"/>
    </symbol>
    <symbol id="ogg-ascaride" viewBox="0 0 140 140">
      <ellipse cx="70" cy="118" rx="44" ry="5" fill="#000" opacity=".25"/>
      <path d="M16 90 Q40 40 72 70 Q100 98 124 52" fill="none" stroke="#1d1428" stroke-width="14" stroke-linecap="round"/>
      <path d="M16 90 Q40 40 72 70 Q100 98 124 52" fill="none" stroke="#f0e6d0" stroke-width="9" stroke-linecap="round"/>
      <path d="M22 84 Q40 50 70 74" fill="none" stroke="#fff" stroke-width="2" opacity=".8"/>
    </symbol>
    <symbol id="ogg-lombrico" viewBox="0 0 140 140">
      <ellipse cx="70" cy="118" rx="44" ry="5" fill="#000" opacity=".25"/>
      <path d="M16 90 Q40 40 72 70 Q100 98 124 52" fill="none" stroke="#1d1428" stroke-width="16" stroke-linecap="round"/>
      <path d="M16 90 Q40 40 72 70 Q100 98 124 52" fill="none" stroke="#d87a7a" stroke-width="11" stroke-linecap="round"/>
      <g stroke="#7a3a3a" stroke-width="2"><path d="M24 76 l8 4 M32 64 l8 6 M44 56 l4 8 M56 60 l2 8 M66 66 l-2 8 M78 76 l-4 6 M90 84 l-2 8 M102 80 l4 6 M112 68 l6 4"/></g>
      <path d="M52 56 l8 10" stroke="#f0a8a8" stroke-width="5"/>
    </symbol>
  `);

  var VERMI = {
    planaria: { x: 960, giusto: false, errore: "p3-platelminta" },
    ascaride: { x: 1048, giusto: false, errore: "p3-nematode" },
    lombrico: { x: 1136, giusto: true }
  };

  function barattoloSvg(verme, pieno) {
    var dentro = pieno ? '<g transform="translate(4 20) scale(.37)"><use href="#ogg-' + verme + '"/></g>' : "";
    return '<svg viewBox="0 0 60 80"><rect x="6" y="12" width="48" height="64" rx="9" fill="#d8d06a" fill-opacity=".5" stroke="#1d1428" stroke-width="3"/>' +
      dentro + '<rect x="9" y="4" width="42" height="11" rx="3" fill="url(#g-ottone)" stroke="#1d1428" stroke-width="2.5"/>' +
      '<path d="M14 20 L14 66" stroke="#fff" stroke-width="3" opacity=".4"/></svg>';
  }
  function vasoSvg(m) {
    var umido = m.flag("vermiFatti");
    return '<svg viewBox="0 0 200 160"><ellipse cx="100" cy="152" rx="90" ry="8" fill="#000" opacity=".35"/>' +
      '<path d="M30 150 L16 40 L184 40 L170 150 Z" fill="url(#g-cotto)" stroke="#1d1428" stroke-width="4"/>' +
      '<path d="M8 28 L192 28 L186 46 L14 46 Z" fill="#a04a2a" stroke="#1d1428" stroke-width="4"/>' +
      (umido
        ? '<ellipse cx="100" cy="36" rx="84" ry="10" fill="#3a2414"/><path d="M60 36 q10 -6 20 0 M110 34 q8 -8 18 0" fill="none" stroke="#1d1008" stroke-width="3"/>' +
          '<path d="M92 34 Q90 12 98 2 M98 2 Q84 6 80 14 M98 2 Q112 4 116 12" fill="none" stroke="#3fa05a" stroke-width="5" stroke-linecap="round"/>'
        : '<ellipse cx="100" cy="36" rx="84" ry="10" fill="#a8988a"/><path d="M40 36 L70 32 L84 38 L110 33 L130 38 L160 34" fill="none" stroke="#6a5a4a" stroke-width="2.5"/>' +
          '<circle cx="128" cy="36" r="4" fill="#ffd36b" opacity="' + (m.flag("chiaveVista") ? ".9" : ".5") + '"/>') +
      "</svg>";
  }

  async function svegliaDarwin(m) {
    if (m.flag("darwinSveglio")) return "ritratto.giaSveglio";
    m.effetto("luce-ritratto", 620, 290, 1600);
    m.suono("magia");
    await m.aspetta(800);
    m.flag("darwinSveglio", true);
    await m.dice("darwin", "d.1");
    await m.dice("darwin", "d.2");
    await m.dice("darwin", "d.3");
    await m.dice("darwin", "d.4");
    m.figurina("darwin");
    m.annota("q1.darwin");
  }

  async function parlaDarwin(m) {
    if (!m.flag("darwinSveglio")) return "d.dorme";
    for (;;) {
      var v = await m.scegli([
        { testo: "dlg.d.vermi", valore: "vermi" },
        { testo: "dlg.d.lombrico", valore: "lombrico" },
        { testo: "dlg.d.cirripedi", valore: "cirripedi" },
        { testo: "dlg.d.ciao", valore: "ciao" }
      ]);
      await m.pensa("dlg.d." + v);
      if (v === "vermi") { await m.dice("darwin", "dlg.d.vermi.r1"); await m.dice("darwin", "dlg.d.vermi.r2"); await m.dice("darwin", "dlg.d.vermi.r3"); m.annota("q1.vermi"); }
      if (v === "lombrico") { await m.dice("darwin", "dlg.d.lombrico.r1"); await m.dice("darwin", "dlg.d.lombrico.r2"); m.annota("q1.lombrico"); }
      if (v === "cirripedi") { await m.dice("darwin", "dlg.d.cirripedi.r1"); await m.dice("darwin", "dlg.d.cirripedi.r2"); }
      if (v === "ciao") { await m.dice("darwin", "dlg.d.ciao.r"); return; }
    }
  }

  async function vermeNelVaso(m, verme) {
    if (m.flag("vermiFatti")) return "vaso.fatto";
    var chi = m.flag("darwinSveglio") ? "darwin" : C.chi(m);
    if (!VERMI[verme].giusto) {
      m.suono("errore"); m.errore(VERMI[verme].errore);
      await m.pensa("vaso.prova");
      await m.dice(chi, "vaso.no." + verme);
      m.togli(verme);
      return "vaso.rimetto";
    }
    m.togli("lombrico");
    await m.pensa("vaso.lombrico.1");
    m.effetto("luce-acquario", 390, 620, 2200);
    await m.aspetta(1200);
    m.flag("vermiFatti", true);
    m.suono("magia");
    C.scintille(m, 390, 600);
    await m.dice(chi, "vaso.lombrico.2");
    await m.pensa("vaso.lombrico.3");
    m.prendi("chiave-insetti");
    C.carta(m, "vermi");
    m.annota("q1.lombrico");
    await m.dice("gamberto", "vaso.lombrico.4");
    /* fermata intermedia: metà capitolo, punto sicuro per fermarsi */
    await m.cartello("fermata.titolo", "fermata.sotto", 3600);
    await m.pensa("fermata.nina");
  }

  C.aiutiStanze.serra = function (m) {
    var chi = C.chi(m);
    if (m.flag("vermiFatti")) return { id: "se-fine", chi: chi, chiavi: ["aiuto3.fine"] };
    if (!m.flag("darwinSveglio")) return { id: "se-d", chi: chi, chiavi: ["aiuto3.d1", "aiuto3.d2"] };
    return { id: "se-v", chi: chi, chiavi: ["aiuto3.v1", "aiuto3.v2", "aiuto3.v3", "aiuto3.v4"] };
  };

  Motore.aggiungi("oggetti", {
    planaria: { icona: "ogg-planaria", nome: "ogg.planaria", descrizione: "ogg.planaria.d", suAltro: "verme.altro" },
    ascaride: { icona: "ogg-ascaride", nome: "ogg.ascaride", descrizione: "ogg.ascaride.d", suAltro: "verme.altro" },
    lombrico: { icona: "ogg-lombrico", nome: "ogg.lombrico", descrizione: "ogg.lombrico.d", loSapevi: "ogg.lombrico.ls", suAltro: "verme.altro" },
    annaffiatoio: { icona: "ogg-annaffiatoio", nome: "ogg.annaffiatoio", descrizione: "ogg.annaffiatoio.d", suAltro: "annaffiatoio.altro" }
  });

  var elementi = [
    { id: "ritratto-darwin", classe: "ritratto", personaggio: "darwin", x: 545, y: 196, larghezza: 150, altezza: 183, svg: RitrattiCap1.darwin,
      stato: function (m) { return m.flag("darwinSveglio") ? "sveglio" : ""; } },
    { id: "targa-darwin", classe: "etichetta targa", testo: "targa.darwin", x: 566, y: 384 },
    { id: "vaso", x: 290, y: 540, larghezza: 200, altezza: 160, svg: "", _vaso: true },
    { id: "u-sala", classe: "etichetta cartello-uscita", testo: "uscita.sala", x: 1400, y: 610 }
  ];
  Object.keys(VERMI).forEach(function (v) {
    elementi.push({ id: "bar-" + v, x: VERMI[v].x, y: 486, larghezza: 60, altezza: 80, svg: "", _verme: v });
    elementi.push({ id: "et-" + v, classe: "etichetta rosa piccola", testo: "serra.et.spaghetti", x: VERMI[v].x - 8, y: 544, rotazione: (v === "ascaride" ? 3 : -4) });
  });
  elementi.forEach(function (e) {
    if (e._vaso) Object.defineProperty(e, "svg", { get: function () { return vasoSvg(Motore._api()); } });
    if (e._verme) Object.defineProperty(e, "svg", { get: function () {
      var m = Motore._api(), v = e._verme;
      var pieno = !m.ha(v) && !(v === "lombrico" && m.flag("vermiFatti"));
      return barattoloSvg(v, pieno);
    } });
  });

  var hotspot = [
    { id: "cielo", nome: "hs.vetrate", forma: "M0 0 L1600 0 L1600 300 L0 300 Z", arrivo: [800, 720], guarda: "serra.cielo.guarda", usa: "serra.cielo.usa", parla: "serra.cielo.parla" },
    { id: "palma", nome: "hs.palma", forma: "M210 150 L520 150 L520 610 L210 610 Z", arrivo: [360, 720], guarda: "serra.palma.guarda", usa: "serra.palma.usa", parla: "serra.palma.parla" },
    { id: "ritratto", nome: "hs.darwin", forma: "M545 196 L695 196 L695 400 L545 400 Z", arrivo: [620, 720],
      guarda: function (m) { return m.flag("darwinSveglio") ? "d.guarda.sveglio" : "d.guarda"; },
      usa: "ritratto.usa", parla: parlaDarwin,
      con: { lanterna: svegliaDarwin, "lanterna-lente": svegliaDarwin, gamberto: function (m) { return m.dice("gamberto", "d.gamberto"); } } },
    { id: "vaso", nome: "hs.vaso", forma: "M290 540 L490 540 L490 700 L290 700 Z", arrivo: [390, 760],
      guarda: function (m) { if (m.flag("vermiFatti")) return "vaso.guarda.dopo"; m.flag("chiaveVista", true); return "vaso.guarda"; },
      usa: function (m) { return m.flag("vermiFatti") ? "vaso.fatto" : "vaso.usa"; },
      parla: "vaso.parla",
      con: {
        planaria: function (m) { return vermeNelVaso(m, "planaria"); },
        ascaride: function (m) { return vermeNelVaso(m, "ascaride"); },
        lombrico: function (m) { return vermeNelVaso(m, "lombrico"); },
        annaffiatoio: "vaso.annaffia",
        gamberto: function (m) { return m.dice("gamberto", "vaso.gamberto"); }
      } },
    { id: "annaffiatoio", nome: "hs.annaffiatoio", forma: "M1290 650 L1376 650 L1376 712 L1290 712 Z", arrivo: [1320, 760],
      presente: function (m) { return !m.flag("annaffiatoioPreso"); },
      guarda: "annaffiatoio.guarda", parla: "annaffiatoio.parla",
      usa: function (m) { m.flag("annaffiatoioPreso", true); m.prendi("annaffiatoio"); return "annaffiatoio.usa"; } },
    { id: "u-sala", nome: "hs.uscitaSala", forma: "M1490 560 L1600 560 L1600 880 L1490 880 Z", arrivo: [1470, 780],
      uscita: { stanza: "sala", arrivo: [170, 780, 1, "profilo"] } }
  ];
  Object.keys(VERMI).forEach(function (v) {
    hotspot.push({ id: "bar-" + v, nome: "hs.barattoloVermi", forma: "M" + VERMI[v].x + " 480 l60 0 l0 90 l-60 0 Z", arrivo: [VERMI[v].x + 30, 720],
      guarda: function (m) { return m.ha(v) ? "barv.vuoto" : "barv.guarda." + v; },
      usa: function (m) {
        if (m.flag("vermiFatti")) return "barv.basta";
        if (m.ha(v)) return "barv.vuoto";
        ["planaria", "ascaride", "lombrico"].forEach(function (x) { if (x !== v) m.togli(x); });   // un verme alla volta
        m.prendi(v); return "barv.prendi." + v;
      },
      parla: "barv.parla",
      con: { lanterna: "barv.lanterna", "lanterna-lente": "barv.lanterna", gamberto: function (m) { return m.dice("gamberto", "barv.gamberto"); } } });
  });

  /* l'annaffiatoio, icona */
  Grafica.definizioni(`
    <symbol id="ogg-annaffiatoio" viewBox="0 0 140 140">
      <ellipse cx="70" cy="124" rx="44" ry="5" fill="#000" opacity=".25"/>
      <g stroke="#1d1428" stroke-width="3.5" stroke-linejoin="round">
        <path d="M34 116 L30 60 L94 60 L90 116 Z" fill="#3a8a6a"/>
        <path d="M92 76 L128 44 L134 52 L98 88 Z" fill="#3a8a6a"/>
        <ellipse cx="131" cy="48" rx="7" ry="9" fill="#2a6a4a" transform="rotate(40 131 48)"/>
        <path d="M44 60 Q62 24 82 60" fill="none" stroke-width="7"/>
        <path d="M36 70 L88 70" stroke="#7ad0aa" stroke-width="3"/>
      </g>
    </symbol>
  `);
  elementi.push({ id: "annaffiatoio", x: 1290, y: 640, larghezza: 86, altezza: 86, svg: Grafica.icona("ogg-annaffiatoio"),
    visibile: function (m) { return !m.flag("annaffiatoioPreso"); } });

  Motore.stanza("serra", {
    sfondo: "serra",
    pavimento: { xMin: 140, xMax: 1480, yMin: 700, yMax: 860 },
    scala: { lontano: { y: 700, s: 0.84 }, vicino: { y: 860, s: 1 } },
    attori: [C.nina(1380, 780, -1)],
    elementi: elementi,
    hotspot: hotspot,
    entrata: async function (m) {
      if (m.flag("serraVista")) return;
      m.flag("serraVista", true);
      m.togli("chiave-serra");   // la chiave è servita: esce dallo zaino
      await m.pensa("serra.entrata.1");
      await m.dice("gamberto", "serra.entrata.2");
    }
  });
})();
