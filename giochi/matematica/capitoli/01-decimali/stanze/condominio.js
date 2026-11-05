/* =====================================================================
   Matematica · Capitolo 1 · Stanza: L'ATRIO DEL CONDOMINIO (tutorial)
   Si imparano i comandi: i prezzi hanno perso la virgola, nella cassetta
   della posta c'è la lettera della nonna, e con la lettera Ottone parte per Damasco.
   ===================================================================== */
(function () {
  Grafica.definizioni(`
    <symbol id="ogg-lettera" viewBox="0 0 140 140">
      <ellipse cx="70" cy="124" rx="44" ry="6" fill="#000" opacity=".25"/>
      <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round">
        <rect x="22" y="34" width="96" height="70" rx="4" fill="#f3ead2" transform="rotate(-6 70 70)"/>
        <path d="M24 40 L70 76 L116 34" fill="none" transform="rotate(-6 70 70)"/>
        <circle cx="70" cy="80" r="11" fill="#b8322c" transform="rotate(-6 70 70)"/>
        <path d="M66 80 L74 80 M70 76 L70 84" stroke="#f3c77a" stroke-width="2.5" transform="rotate(-6 70 70)"/>
      </g>
    </symbol>
  `);

  Motore.stanza("condominio", {
    sfondo: "condominio",
    pavimento: { xMin: 140, xMax: 1460, yMin: 680, yMax: 860 },
    scala: { lontano: { y: 680, s: 0.84 }, vicino: { y: 860, s: 1 } },
    attori: [
      { id: "leo", simbolo: "leo-fronte", viste: { fronte: "leo-fronte", profilo: "leo-profilo", schiena: "leo-schiena" },
        vista: [-110, -600, 230, 615], piedi: [5, 0], altezza: 560, x: 420, y: 800, dir: 1 }
    ],
    elementi: [
      /* la bacheca: il prezzo ha perso la virgola */
      { id: "bacheca-titolo", classe: "etichetta bianca piccola", testo: "cond.bacheca.titolo", x: 372, y: 128 },
      { id: "bacheca-prezzo", classe: "etichetta bianca", testo: "cond.bacheca.prezzo", x: 380, y: 166 }
    ],
    hotspot: [
      { id: "bacheca", nome: "hs.bacheca", forma: "M340 100 L500 100 L500 240 L340 240 Z", arrivo: [430, 720], vista: "schiena",
        guarda: "cond.bacheca.guarda", usa: "cond.bacheca.usa", parla: "cond.bacheca.parla" },
      { id: "cassette", nome: "hs.cassette", forma: "M70 230 L280 230 L280 360 L70 360 Z", arrivo: [240, 720], vista: "schiena",
        guarda: function (m) { return m.flag("letteraPresa") ? "cond.cassette.vuote" : "cond.cassette.guarda"; },
        usa: async function (m) {
          if (m.flag("letteraPresa")) return "cond.cassette.vuote";
          m.flag("letteraPresa", true);
          m.prendi("lettera");
          await m.pensa("cond.cassette.prendi");
          await m.dice("ottone", "cond.cassette.ottone");
          m.annota("m1.lettera");
        },
        parla: "cond.cassette.parla" },
      { id: "ottone", nome: "hs.ottone", forma: "M620 90 L1010 90 L1010 640 L620 640 Z", arrivo: [800, 700], vista: "schiena",
        guarda: "cond.ottone.guarda",
        usa: function (m) { return m.flag("letteraPresa") ? "cond.ottone.usaLettera" : "cond.ottone.usa"; },
        parla: async function (m) {
          var v = await m.scegli([
            { testo: "cond.dlg.chi", valore: "chi" },
            { testo: "cond.dlg.virgola", valore: "virgola" },
            { testo: "cond.dlg.nonna", valore: "nonna" },
            { testo: "cond.dlg.ciao", valore: "ciao" }
          ]);
          if (v === "chi") { await m.dice("ottone", "cond.dlg.chi.r1"); await m.dice("ottone", "cond.dlg.chi.r2"); }
          if (v === "virgola") { await m.dice("ottone", "cond.dlg.virgola.r1"); await m.pensa("cond.dlg.virgola.r2"); await m.dice("ottone", "cond.dlg.virgola.r3"); }
          if (v === "nonna") { await m.dice("ottone", "cond.dlg.nonna.r1"); await m.dice("ottone", "cond.dlg.nonna.r2"); }
          if (v === "ciao") await m.dice("ottone", "cond.dlg.ciao.r");
        },
        con: { lettera: parti } },
      { id: "pulsantiera", nome: "hs.pulsantiera", forma: "M1030 310 L1100 310 L1100 440 L1030 440 Z", arrivo: [1010, 720], vista: "schiena",
        guarda: "cond.pulsantiera.guarda",
        usa: function (m) { return m.flag("letteraPresa") ? "cond.ottone.usaLettera" : "cond.pulsantiera.usa"; },
        parla: "cond.pulsantiera.parla",
        con: { lettera: parti } },
      { id: "palma", nome: "hs.palma", forma: "M990 390 L1180 390 L1180 630 L990 630 Z", arrivo: [1100, 700],
        guarda: "cond.palma.guarda", usa: "cond.palma.usa", parla: "cond.palma.parla" },
      { id: "scala", nome: "hs.scala", forma: "M1200 360 L1600 360 L1600 660 L1200 660 Z", arrivo: [1380, 720], vista: "schiena",
        guarda: "cond.scala.guarda", usa: "cond.scala.usa", parla: "cond.scala.parla" },
      { id: "ombrelli", nome: "hs.ombrelli", forma: "M1430 590 L1600 590 L1600 900 L1430 900 Z", arrivo: [1380, 820], verso: 1,
        guarda: "cond.ombrelli.guarda", usa: "cond.ombrelli.usa", parla: "cond.ombrelli.parla" }
    ]
  });

  /* la lettera della nonna su Ottone: si parte per Damasco, anno 952 */
  async function parti(m) {
    m.vista("schiena");
    await m.dice("ottone", "cond.parti.1");
    await m.pensa("cond.parti.2");
    await m.dice("ottone", "cond.parti.3");
    m.suono("magia");
    m.togli("lettera");
    m.annota("m1.damasco");
    await m.vaiStanza("damasco", [420, 780, 1, "profilo"]);
  }

  Mat1.aiutiStanze.condominio = function (m) {
    if (!m.flag("letteraPresa")) return { id: "c-lettera", chi: "ottone", chiavi: ["aiuto0.l1", "aiuto0.l2", "aiuto0.l3"] };
    return { id: "c-parti", chi: "ottone", chiavi: ["aiuto0.p1", "aiuto0.p2"] };
  };
})();
