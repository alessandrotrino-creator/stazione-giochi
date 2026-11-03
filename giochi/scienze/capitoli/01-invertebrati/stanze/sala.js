/* =====================================================================
   Capitolo 1 · Stanza: LA SALA DEGLI INVERTEBRATI
   Puzzle 2 "La spugna non è un vegetale": poriferi e cnidari (etichette da
   correggere, ciclo vitale della medusa, la medusa "immortale" Turri).
   Puzzle 4 "La conchiglia contesa": le classi dei molluschi, gli echinodermi
   (la stella marina apre la cozza). Personaggio storico: Jeanne Villepreux-Power.
   ===================================================================== */
(function () {
  var C = Cap1;

  /* ---------- puzzle 2: tre etichette sbagliate nella vetrina ---------- */
  var VETRINA = {
    corallo: [["fix.corallo.pietra", "pietra"], ["fix.corallo.pianta", "pianta"], ["fix.corallo.giusta", "giusta"]],
    spugna: [["fix.spugna.vegetale", "vegetale"], ["fix.spugna.giusta", "giusta"], ["fix.spugna.fungo", "fungo"]],
    medusa: [["fix.medusa.giusta", "giusta"], ["fix.medusa.pesce", "pesce"], ["fix.medusa.plastica", "plastica"]]
  };

  async function correggiVetrina(m) {
    if (!m.ha("matita")) return "sala.serveMatita";
    var restanti = Object.keys(VETRINA).filter(function (x) { return !m.flag("fix-" + x); });
    if (!restanti.length) return "sala.vetrinaFatta";
    var quale = restanti.length === 1 ? restanti[0]
      : await m.scegli(restanti.map(function (x) { return { testo: "quale." + x, valore: x }; }), "quale.titolo");
    await m.pensa("fix." + quale + ".domanda");
    await C.finoAlGiusto(m, "fix.bivio", VETRINA[quale], function (v) { return "fix." + quale + "." + v + ".spiega"; }, "p2-" + quale);
    m.flag("fix-" + quale, true);
    C.scintille(m, { corallo: 770, spugna: 850, medusa: 930 }[quale], { corallo: 560, spugna: 480, medusa: 320 }[quale]);
    await m.pensa("fix." + quale + ".ok");
    if (quale === "spugna") { C.carta(m, "poriferi"); m.annota("q1.poriferi"); }
    if (m.flag("fix-corallo") && m.flag("fix-medusa") && !m.flag("carta-cnidari")) { C.carta(m, "cnidari"); m.annota("q1.cnidari"); }
    if (!Object.keys(VETRINA).some(function (x) { return !m.flag("fix-" + x); })) await m.dice("turri", "turri.vetrina");
  }

  /* ---------- puzzle 2: la ruota del ciclo vitale della medusa ---------- */
  var CICLO = [
    [["ciclo.1.ok", "giusta"], ["ciclo.1.larva", "larva"], ["ciclo.1.pesce", "pesce"]],
    [["ciclo.2.polipo", "polipo"], ["ciclo.2.ok", "giusta"], ["ciclo.2.spugna", "spugna"]],
    [["ciclo.3.medusa", "medusa"], ["ciclo.3.stella", "stella"], ["ciclo.3.ok", "giusta"]]
  ];
  async function cicloMedusa(m) {
    if (m.flag("cicloFatto")) return "ruota.fatta";
    await m.pensa("ciclo.intro");
    for (var i = 0; i < CICLO.length; i++) {
      var n = i + 1;
      await C.finoAlGiusto(m, "ciclo." + n + ".titolo", CICLO[i], function (v) { return "ciclo." + n + "." + v + ".spiega"; }, "p2-ciclo");
      m.flag("ciclo-" + n, true);
      await m.pensa("ciclo." + n + ".giusto");
    }
    m.flag("cicloFatto", true);
    m.suono("magia");
    C.scintille(m, 640, 500);
    await m.pensa("ciclo.fine");
    m.prendi("chiave-serra");
    m.annota("q1.ciclo");
    await m.dice("turri", "turri.ciclo");
  }

  async function parlaTurri(m) {
    for (;;) {
      var v = await m.scegli([
        { testo: "dlg.t.chi", valore: "chi" },
        { testo: "dlg.t.immortale", valore: "immortale" },
        { testo: "dlg.t.ciao", valore: "ciao" }
      ]);
      await m.pensa("dlg.t." + v);
      if (v === "chi") { await m.dice("turri", "dlg.t.chi.r1"); await m.dice("gamberto", "dlg.t.chi.r2"); }
      if (v === "immortale") { await m.dice("turri", "dlg.t.immortale.r1"); await m.dice("turri", "dlg.t.immortale.r2"); m.annota("q1.turri"); }
      if (v === "ciao") { await m.dice("turri", "dlg.t.ciao.r"); return; }
    }
  }

  /* ---------- puzzle 4: Jeanne Villepreux-Power e i molluschi ---------- */
  async function svegliaVillepreux(m) {
    if (m.flag("villepreuxSveglia")) return "ritratto.giaSveglio";
    m.effetto("luce-ritratto", 545, 262, 1600);
    m.suono("magia");
    await m.aspetta(800);
    m.flag("villepreuxSveglia", true);
    await m.dice("villepreux", "vp.1");
    await m.dice("villepreux", "vp.2");
    await m.dice("gamberto", "vp.3");
    await m.dice("villepreux", "vp.4");
    m.figurina("villepreux");
    m.annota("q1.argonauta");
    await m.dice("villepreux", "vp.5");
    m.flag("fix-argonauta", true);
    C.scintille(m, 1110, 540);
    await m.dice("villepreux", "vp.6");
  }

  async function parlaVillepreux(m) {
    if (!m.flag("villepreuxSveglia")) return "vp.dorme";
    for (;;) {
      var v = await m.scegli([
        { testo: "dlg.v.acquario", valore: "acquario" },
        { testo: "dlg.v.classi", valore: "classi" },
        { testo: "dlg.v.ciao", valore: "ciao" }
      ]);
      await m.pensa("dlg.v." + v);
      if (v === "acquario") { await m.dice("villepreux", "dlg.v.acquario.r1"); await m.dice("villepreux", "dlg.v.acquario.r2"); }
      if (v === "classi") { await m.dice("villepreux", "dlg.v.classi.r1"); await m.dice("villepreux", "dlg.v.classi.r2"); m.annota("q1.molluschi"); }
      if (v === "ciao") { await m.dice("villepreux", "dlg.v.ciao.r"); return; }
    }
  }

  var GRUPPI = [["gr.gasteropodi", "gasteropodi"], ["gr.bivalvi", "bivalvi"], ["gr.cefalopodi", "cefalopodi"], ["gr.echinodermi", "echinodermi"], ["gr.anellidi", "anellidi"]];
  var BARATTOLI = { verme: "anellidi", polpo: "cefalopodi", riccio: "echinodermi", chiocciola: "gasteropodi" };

  async function rietichettaBarattoli(m) {
    if (!m.ha("cartellini") || !m.ha("matita")) return "barattoli.serveCartellini";
    var restanti = Object.keys(BARATTOLI).filter(function (x) { return !m.flag("bar-" + x); });
    if (!restanti.length) return "barattoli.fatti";
    var quale = restanti.length === 1 ? restanti[0]
      : await m.scegli(restanti.map(function (x) { return { testo: "barattolo." + x, valore: x }; }), "barattoli.quale");
    var opz = GRUPPI.map(function (g) { return [g[0], g[1] === BARATTOLI[quale] ? "giusta" : g[1]]; });
    await C.finoAlGiusto(m, "barattoli.bivio." + quale, opz, function () { return "bar." + quale + ".spiega"; }, "p4-" + quale);
    m.flag("bar-" + quale, true);
    C.scintille(m, { verme: 927, polpo: 1007, riccio: 1087, chiocciola: 1167 }[quale], 270);
    await m.pensa("bar." + quale + ".ok");
    if (!Object.keys(BARATTOLI).some(function (x) { return !m.flag("bar-" + x); })) {
      m.flag("molluschiFatti", true);
      C.carta(m, "molluschi");
      m.annota("q1.molluschi");
      if (m.flag("villepreuxSveglia")) await m.dice("villepreux", "vp.brava");
      else await m.dice("gamberto", "vp.brava.g");
    }
  }

  async function apriCozza(m) {
    await m.pensa("cozza.1");
    m.togli("stella-viva");
    m.flag("stellaNellaVasca", true);
    await m.aspetta(900);
    await m.dice("gamberto", "cozza.2");
    m.suono("magia");
    m.flag("cozzaAperta", true);
    C.scintille(m, 1520, 440);
    await m.pensa("cozza.3");
    C.carta(m, "echinodermi");
    m.annota("q1.echinodermi");
    await m.dice("gamberto", "cozza.4");
  }

  /* ---------- aiuti a gradini ---------- */
  C.aiutiStanze.sala = function (m) {
    var chi = C.chi(m);
    var vetrina = m.flag("fix-corallo") && m.flag("fix-spugna") && m.flag("fix-medusa");
    if (!m.ha("cartellini") && !vetrina) return { id: "s-cart", chi: chi, chiavi: ["aiuto2.c1", "aiuto2.c2"] };
    if (!m.ha("matita") && !vetrina) return { id: "s-mat", chi: chi, chiavi: ["aiuto2.m1", "aiuto2.m2"] };
    if (!vetrina) return { id: "s-vetr", chi: chi, chiavi: ["aiuto2.v1", "aiuto2.v2", "aiuto2.v3"] };
    if (!m.flag("cicloFatto")) return { id: "s-ciclo", chi: chi, chiavi: ["aiuto2.r1", "aiuto2.r2", "aiuto2.r3"] };
    if (!m.flag("villepreuxSveglia")) return { id: "s-vp", chi: chi, chiavi: ["aiuto4.v1", "aiuto4.v2"] };
    if (!m.flag("molluschiFatti")) return { id: "s-bar", chi: chi, chiavi: ["aiuto4.b1", "aiuto4.b2", "aiuto4.b3"] };
    if (!m.flag("cozzaAperta")) return { id: "s-cozza", chi: chi, chiavi: ["aiuto4.c1", "aiuto4.c2", "aiuto4.c3"] };
    if (!m.flag("vermiFatti")) return { id: "s-serra", chi: chi, chiavi: ["aiuto2.serra"] };
    return { id: "s-insetti", chi: chi, chiavi: ["aiuto2.insetti"] };
  };

  /* ---------- la stanza ---------- */
  function etichetta(id, testoSbagliato, testoGiusto, flag, x, y, rot, piccola) {
    return [
      { id: id + "-rosa", classe: "etichetta rosa" + (piccola ? " piccola" : ""), testo: testoSbagliato, x: x, y: y, rotazione: rot,
        visibile: function (m) { return !m.flag(flag); } },
      { id: id + "-giusta", classe: "etichetta bianca" + (piccola ? " piccola" : ""), testo: testoGiusto, x: x - 6, y: y + 2, rotazione: rot / 2,
        visibile: function (m) { return m.flag(flag); } }
    ];
  }
  var elementi = [].concat(
    etichetta("et-corallo", "scena.etichettaRosa", "scena.etichettaGiusta", "fix-corallo", 696, 546, -6),
    etichetta("et-spugna", "sala.et.spugna", "sala.et.spugnaGiusta", "fix-spugna", 806, 470, 4, true),
    etichetta("et-medusa", "sala.et.medusa", "sala.et.medusaGiusta", "fix-medusa", 880, 296, -3, true),
    etichetta("et-argonauta", "scena.etichettaArgonauta", "sala.et.argonautaGiusta", "fix-argonauta", 1018, 526, 4),
    etichetta("et-farfalle", "scena.etichettaFarfalle", "sala.et.farfalleGiusta", "fix-farfalle", 688, 284, -4, true),
    etichetta("et-verme", "sala.et.senzaGuscio", "sala.et.anellidi", "bar-verme", 892, 264, -3, true),
    etichetta("et-polpo", "sala.et.senzaGuscio", "sala.et.cefalopodi", "bar-polpo", 972, 264, 3, true),
    etichetta("et-riccio", "sala.et.conGuscio", "sala.et.echinodermi", "bar-riccio", 1052, 264, -2, true),
    etichetta("et-chiocciola", "sala.et.conGuscio", "sala.et.gasteropodi", "bar-chiocciola", 1132, 264, 3, true),
    [
      { id: "ritratto-villepreux", classe: "ritratto", personaggio: "villepreux", x: 438, y: 128, larghezza: 214, altezza: 262, rotazione: -2,
        svg: RitrattiCap1.villepreux, stato: function (m) { return m.flag("villepreuxSveglia") ? "sveglio" : ""; } },
      { id: "targa-villepreux", classe: "etichetta targa", testo: "targa.villepreux", x: 468, y: 398 },
      { id: "ruota", classe: "ruota", x: 590, y: 430, larghezza: 96, altezza: 170, svg: "" },
      { id: "turri", classe: "turri", personaggio: "turri", x: 1424, y: 316, larghezza: 56, altezza: 78,
        svg: '<svg viewBox="-40 -60 80 110"><use href="#turri" x="-40" y="-60" width="80" height="110"/><ellipse class="bocca" cx="0" cy="-16" rx="3" ry="1" fill="#7a2a4a"/></svg>' },
      { id: "stella-vasca", x: 1318, y: 404, larghezza: 54, altezza: 54, svg: Grafica.icona("stella-viva"),
        visibile: function (m) { return !m.ha("stella-viva") && !m.flag("stellaNellaVasca"); } },
      { id: "cozza", x: 1470, y: 414, larghezza: 92, altezza: 59,
        svg: "", _cozza: true },
      { id: "stella-su-cozza", x: 1490, y: 392, larghezza: 54, altezza: 54, svg: Grafica.icona("stella-viva"),
        visibile: function (m) { return m.flag("stellaNellaVasca"); } },
      /* cartelli delle uscite */
      { id: "u-serra-chiusa", classe: "etichetta cartello-uscita chiusa", testo: "uscita.serra.chiusa", x: 20, y: 600, visibile: function (m) { return !m.flag("cicloFatto"); } },
      { id: "u-serra", classe: "etichetta cartello-uscita", testo: "uscita.serra", x: 20, y: 600, visibile: function (m) { return m.flag("cicloFatto"); } },
      { id: "u-insetti-chiusa", classe: "etichetta cartello-uscita chiusa", testo: "uscita.insetti.chiusa", x: 1290, y: 600, visibile: function (m) { return !m.flag("vermiFatti"); } },
      { id: "u-insetti", classe: "etichetta cartello-uscita", testo: "uscita.insetti", x: 1290, y: 600, visibile: function (m) { return m.flag("vermiFatti"); } },
      { id: "u-atrio", classe: "etichetta cartello-uscita", testo: "uscita.atrio", x: 720, y: 846 }
    ]
  );
  elementi.forEach(function (e) {
    if (e.id === "ruota") Object.defineProperty(e, "svg", { get: function () {
      var m = Motore._api(), f = function (n) { return m.flag("ciclo-" + n) ? "#ffd36b" : "#3a3850"; };
      return '<svg viewBox="0 0 96 170"><rect x="40" y="96" width="16" height="70" fill="url(#g-legno)" stroke="#1d1428" stroke-width="3"/>' +
        '<circle cx="48" cy="52" r="46" fill="url(#g-oro)" stroke="#1d1428" stroke-width="3"/><circle cx="48" cy="52" r="38" fill="#24384a" stroke="#1d1428" stroke-width="2"/>' +
        '<path d="M48 52 L48 14 A38 38 0 0 1 81 71 Z" fill="' + f(1) + '" opacity=".55"/><path d="M48 52 L81 71 A38 38 0 0 1 15 71 Z" fill="' + f(2) + '" opacity=".55"/><path d="M48 52 L15 71 A38 38 0 0 1 48 14 Z" fill="' + f(3) + '" opacity=".55"/>' +
        '<g stroke="#1d1428" stroke-width="1.5"><path d="M44 40 q4 -14 8 0 Z" fill="#f6efe0"/><path d="M58 60 q8 -10 16 0 q-8 -2 -16 0 Z" fill="#c9b8ff"/><ellipse cx="30" cy="62" rx="5" ry="3" fill="#ffd0b0"/></g>' +
        '<circle cx="48" cy="52" r="5" fill="url(#g-oro)" stroke="#1d1428" stroke-width="2"/></svg>';
    } });
    if (e._cozza) Object.defineProperty(e, "svg", { get: function () {
      return '<svg viewBox="0 0 140 90"><use href="#' + (Motore._api().flag("cozzaAperta") ? "cozza-aperta" : "cozza") + '"/></svg>';
    } });
  });

  var hotspot = [
    { id: "finestra", nome: "hs.finestra", forma: "M100 470 L100 210 Q200 80 300 210 L300 470 Z", arrivo: [300, 700],
      guarda: "finestra.guarda", usa: "finestra.usa", parla: "finestra.parla" },
    { id: "ritratto", nome: "hs.villepreux", forma: "M438 128 L652 128 L652 392 L438 392 Z", arrivo: [545, 700],
      guarda: function (m) { return m.flag("villepreuxSveglia") ? "vp.guarda.sveglia" : "vp.guarda"; },
      usa: "ritratto.usa", parla: parlaVillepreux,
      con: { lanterna: svegliaVillepreux, "lanterna-lente": svegliaVillepreux, gamberto: function (m) { return m.dice("gamberto", "vp.gamberto"); } } },
    { id: "farfalle", nome: "hs.farfalle", forma: "M680 168 L830 168 L830 278 L680 278 Z", arrivo: [755, 700],
      guarda: "farfalle.guarda", usa: "farfalle.usa", parla: "farfalle.parla",
      con: { cartellini: async function (m) {
        if (!m.ha("matita")) return "sala.serveMatita";
        if (m.flag("fix-farfalle")) return "farfalle.fatto";
        m.flag("fix-farfalle", true); C.scintille(m, 755, 290); return "farfalle.corrette";
      } } },
    { id: "barattoli", nome: "hs.barattoli", forma: "M880 140 L1200 140 L1200 280 L880 280 Z", arrivo: [1040, 700],
      guarda: function (m) { return m.flag("molluschiFatti") ? "barattoli.guarda.dopo" : "barattoli.guarda"; },
      usa: rietichettaBarattoli, parla: "barattoli.parla",
      con: { cartellini: rietichettaBarattoli, matita: rietichettaBarattoli, lanterna: "barattoli.lanterna", gamberto: function (m) { return m.dice("gamberto", "barattoli.gamberto"); } } },
    { id: "ruota", nome: "hs.ruota", forma: "M590 430 L686 430 L686 600 L590 600 Z", arrivo: [640, 700],
      guarda: function (m) { return m.flag("cicloFatto") ? "ruota.guarda.dopo" : "ruota.guarda"; },
      usa: cicloMedusa, parla: "ruota.parla",
      con: { gamberto: function (m) { return m.dice("gamberto", "ruota.gamberto"); } } },
    { id: "teca", nome: "hs.teca", forma: "M690 284 L990 284 L990 604 L690 604 Z", arrivo: [840, 700],
      guarda: function (m) {
        var tutte = m.flag("fix-corallo") && m.flag("fix-spugna") && m.flag("fix-medusa");
        return tutte ? "teca.guarda.dopo1" : "teca.guarda.prima1";
      },
      usa: function (m) {
        if (m.ha("cartellini") || m.flag("cartelliniPresi")) return "teca.usa.vuoto";
        m.flag("cartelliniPresi", true); m.prendi("cartellini"); return "teca.usa.prendi1";
      },
      parla: "teca.parla",
      con: { cartellini: correggiVetrina, matita: correggiVetrina, lanterna: "teca.lanterna",
        gamberto: function (m) { return m.dice("gamberto", "teca.gamberto"); } } },
    { id: "campana", nome: "hs.campana", forma: "M1040 300 L1180 300 L1180 604 L1040 604 Z", arrivo: [1110, 700],
      guarda: function (m) { return m.flag("fix-argonauta") ? "campana.guarda.dopo" : "campana.guarda"; },
      usa: "campana.usa", parla: "campana.parla",
      con: { cartellini: function (m) { return m.flag("fix-argonauta") ? "campana.fatto" : "campana.chiediVP"; }, lanterna: "campana.lanterna" } },
    { id: "calamaro", nome: "hs.calamaro", forma: "M1110 108 L1262 108 L1262 300 L1250 400 L1120 400 L1110 300 Z", arrivo: [1180, 700],
      guarda: "calamaro.guarda", usa: "calamaro.usa", parla: "calamaro.parla", con: { lanterna: "calamaro.lanterna" } },
    { id: "acquario", nome: "hs.acquario", forma: "M1286 280 L1576 280 L1576 604 L1286 604 Z", arrivo: [1400, 700], verso: 1,
      guarda: function (m) { return m.flag("cozzaAperta") ? "acquario1.guarda.dopo" : "acquario1.guarda"; },
      usa: function (m) {
        if (!m.flag("molluschiFatti")) return "acquario1.usa";
        if (m.ha("stella-viva") || m.flag("stellaNellaVasca")) return "acquario1.usa.gia";
        m.prendi("stella-viva"); return "acquario1.usa.stella";
      },
      parla: parlaTurri,
      con: { "stella-viva": apriCozza, lanterna: "acquario1.lanterna", gamberto: function (m) { return m.dice("gamberto", "acquario1.gamberto"); } } },
    { id: "felce", nome: "hs.felce", forma: "M-10 640 L210 640 L210 900 L110 900 L110 860 L-10 860 Z", arrivo: [230, 830], verso: -1,
      guarda: "felce.guarda", parla: "felce.parla",
      usa: function (m) {
        if (m.flag("matitaPresa")) return "felce.usa.ragno";
        m.flag("matitaPresa", true); m.prendi("matita"); return "felce.usa.prendi";
      } },
    { id: "transenna", nome: "hs.transenna", forma: "M1326 700 L1488 700 L1488 900 L1326 900 Z", arrivo: [1290, 830], verso: 1,
      guarda: "transenna.guarda", usa: "transenna.usa", parla: "transenna.parla" },
    { id: "u-serra", nome: "hs.uscitaSerra", forma: "M0 560 L110 560 L110 860 L0 860 Z", arrivo: [130, 780],
      uscita: { stanza: "serra", arrivo: [1380, 780, -1, "profilo"], se: function (m) { return m.flag("cicloFatto") && Motore._haStanza("serra"); },
        chiusa: function (m) { return m.flag("cicloFatto") ? "porta.prossimaTappa" : "uscita.serra.no"; } } },
    { id: "u-insetti", nome: "hs.uscitaInsetti", forma: "M1490 600 L1600 600 L1600 880 L1490 880 Z", arrivo: [1470, 780],
      uscita: { stanza: "insetti", arrivo: [160, 780, 1, "profilo"], se: function (m) { return m.flag("vermiFatti") && Motore._haStanza("insetti"); },
        chiusa: function (m) { return m.flag("vermiFatti") ? "porta.prossimaTappa" : "uscita.insetti.no"; } } },
    { id: "u-atrio", nome: "hs.uscitaAtrio", forma: "M640 846 L960 846 L960 900 L640 900 Z", arrivo: [800, 850],
      uscita: { stanza: "atrio", arrivo: [800, 720, 1, "fronte"] } }
  ];

  Motore.stanza("sala", {
    sfondo: "sala-invertebrati",
    pavimento: { xMin: 120, xMax: 1480, yMin: 680, yMax: 860 },
    scala: { lontano: { y: 680, s: 0.82 }, vicino: { y: 860, s: 1 } },
    attori: [C.nina(800, 840, 1)],
    elementi: elementi,
    hotspot: hotspot,
    entrata: async function (m) {
      if (m.flag("salaVista")) return;
      m.flag("salaVista", true);
      await m.pensa("sala.entrata.1");
      await m.dice("gamberto", "sala.entrata.2");
      await m.pensa("sala.entrata.3");
    }
  });
})();
