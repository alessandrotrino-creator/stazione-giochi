/* =====================================================================
   Capitolo 1 · Stanza: LA SALA DEGLI INSETTI (e degli altri artropodi)
   Puzzle 5 "La festa delle zampe": metamorfosi (tavola di Maria Sibylla Merian)
   e i quattro gruppi di artropodi (cassaforte a zampe).
   Puzzle 6 (facoltativo) "La strada delle formiche": Al-Jahiz e la vita sociale
   delle formiche; si trova un indizio sul vero ladro del ramo.
   ===================================================================== */
(function () {
  var C = Cap1;

  var METAMORFOSI = [
    [["meta.1.bruco", "bruco"], ["meta.1.ok", "giusta"], ["meta.1.farfalla", "farfalla"]],
    [["meta.2.ok", "giusta"], ["meta.2.crisalide", "crisalide"], ["meta.2.farfalla", "farfalla"]],
    [["meta.3.verme", "verme"], ["meta.3.vola", "vola"], ["meta.3.ok", "giusta"]],
    [["meta.4.bruco", "bruco"], ["meta.4.ok", "giusta"], ["meta.4.ragno", "ragno"]]
  ];
  var MODELLI = {
    formica: { x: 1046, gruppo: "insetti" },
    ragno: { x: 1150, gruppo: "aracnidi" },
    granchio: { x: 1254, gruppo: "crostacei" },
    millepiedi: { x: 1358, gruppo: "miriapodi" }
  };
  var GRUPPI_A = [["art.insetti", "insetti"], ["art.aracnidi", "aracnidi"], ["art.crostacei", "crostacei"], ["art.miriapodi", "miriapodi"]];

  async function tavolaMetamorfosi(m) {
    if (m.flag("metaFatta")) return "tavola.fatta";
    await m.pensa("meta.intro");
    for (var i = 0; i < METAMORFOSI.length; i++) {
      var n = i + 1;
      await C.finoAlGiusto(m, "meta." + n + ".titolo", METAMORFOSI[i], function (v) { return "meta." + n + "." + v + ".spiega"; }, "p5-metamorfosi",
        { id: "meta-" + n, chiavi: ["hq.meta.indizio", "q1.metamorfosi", "hq.meta.n" + n] });
      m.flag("meta-" + n, true);
      await m.pensa("meta." + n + ".giusto");
    }
    m.flag("metaFatta", true);
    m.suono("magia");
    C.scintille(m, 250, 440);
    m.annota("q1.metamorfosi");
    if (m.flag("merianSveglia")) await m.dice("merian", "meta.merian");
    await m.pensa("meta.biglietto");
    m.annota("q1.zampe");
  }

  async function cassaforte(m) {
    if (m.flag("cassaAperta")) return "cassa5.aperta";
    if (!m.flag("metaFatta")) return "cassa5.chiusa";
    await m.pensa("cassa5.intro");
    var nomi = Object.keys(MODELLI);
    for (var i = 0; i < nomi.length; i++) {
      var a = nomi[i];
      if (m.flag("art-" + a)) continue;
      var opz = GRUPPI_A.map(function (g) { return [g[0], g[1] === MODELLI[a].gruppo ? "giusta" : g[1]]; });
      await C.finoAlGiusto(m, "cassa5.bivio." + a, opz, function () { return "art." + a + ".spiega"; }, "p5-" + a,
        { id: "art-" + a, chiavi: ["hq.art.indizio", "q1.artropodi", "hq.art." + a] });
      m.flag("art-" + a, true);
      C.scintille(m, MODELLI[a].x + 50, 500);
      await m.pensa("art." + a + ".ok");
      if (a === "granchio") await m.dice("gamberto", "art.granchio.muta");
    }
    m.flag("cassaAperta", true);
    m.suono("magia");
    C.scintille(m, 800, 520);
    await m.pensa("cassa5.apre");
    C.carta(m, "artropodi");
    m.annota("q1.artropodi");
    await m.dice("gamberto", "cassa5.gamberto");
  }

  async function svegliaMerian(m) {
    if (m.flag("merianSveglia")) return "ritratto.giaSveglio";
    m.effetto("luce-ritratto", 305, 232, 1600);
    m.suono("magia");
    await m.aspetta(800);
    m.flag("merianSveglia", true);
    await m.dice("merian", "mer.1");
    await m.dice("merian", "mer.2");
    await m.dice("merian", "mer.3");
    m.figurina("merian");
    m.annota("q1.merian");
  }
  async function parlaMerian(m) {
    if (!m.flag("merianSveglia")) return "mer.dorme";
    for (;;) {
      var v = await m.scegli([
        { testo: "dlg.m.bruchi", valore: "bruchi" },
        { testo: "dlg.m.suriname", valore: "suriname" },
        { testo: "dlg.m.ciao", valore: "ciao" }
      ]);
      await m.pensa("dlg.m." + v);
      if (v === "bruchi") { await m.dice("merian", "dlg.m.bruchi.r1"); await m.dice("merian", "dlg.m.bruchi.r2"); }
      if (v === "suriname") { await m.dice("merian", "dlg.m.suriname.r1"); await m.dice("merian", "dlg.m.suriname.r2"); }
      if (v === "ciao") { await m.dice("merian", "dlg.m.ciao.r"); return; }
    }
  }

  async function svegliaAljahiz(m) {
    if (m.flag("aljahizSveglio")) return "ritratto.giaSveglio";
    m.effetto("luce-ritratto", 1285, 232, 1600);
    m.suono("magia");
    await m.aspetta(800);
    m.flag("aljahizSveglio", true);
    await m.dice("aljahiz", "alj.1");
    await m.dice("aljahiz", "alj.2");
    await m.dice("aljahiz", "alj.3");
    m.figurina("aljahiz");
    m.annota("q1.aljahiz");
  }
  async function parlaAljahiz(m) {
    if (!m.flag("aljahizSveglio")) return "alj.dorme";
    for (;;) {
      var v = await m.scegli([
        { testo: "dlg.j.libro", valore: "libro" },
        { testo: "dlg.j.formiche", valore: "formiche" },
        { testo: "dlg.j.ciao", valore: "ciao" }
      ]);
      await m.pensa("dlg.j." + v);
      if (v === "libro") { await m.dice("aljahiz", "dlg.j.libro.r1"); await m.dice("aljahiz", "dlg.j.libro.r2"); }
      if (v === "formiche") { await m.dice("aljahiz", "dlg.j.formiche.r1"); await m.dice("aljahiz", "dlg.j.formiche.r2"); m.annota("q1.formiche"); }
      if (v === "ciao") { await m.dice("aljahiz", "dlg.j.ciao.r"); return; }
    }
  }

  async function stradaFormiche(m) {
    if (m.flag("formicheFatte")) return "formiche.fatto";
    await m.pensa("formiche.1");
    var chi = m.flag("aljahizSveglio") ? "aljahiz" : C.chi(m);
    C.domanda(m, "formiche", ["hq.formiche.indizio", "q1.formiche"]);
    for (;;) {
      var v = await m.scegli([
        { testo: "formiche.vista", valore: "vista" },
        { testo: "formiche.odore", valore: "giusta" },
        { testo: "formiche.caso", valore: "caso" }
      ], "formiche.bivio");
      if (v === "giusta") break;
      m.suono("errore"); m.errore("p6-" + v);
      await m.dice(chi, "formiche." + v + ".spiega");
    }
    C.domanda(m, null);
    m.suono("prendi");
    await m.dice(chi, "formiche.giusto");
    await m.dice("gamberto", "formiche.puntura");
    m.flag("formicheFatte", true);
    await m.pensa("formiche.2");
    m.prendi("frammento");
    m.annota("q1.frammento");
    await m.dice("gamberto", "formiche.3");
  }

  C.aiutiStanze.insetti = function (m) {
    var chi = C.chi(m);
    if (!m.flag("merianSveglia") && !m.flag("metaFatta")) return { id: "i-mer", chi: chi, chiavi: ["aiuto5.m1", "aiuto5.m2"] };
    if (!m.flag("metaFatta")) return { id: "i-meta", chi: chi, chiavi: ["aiuto5.t1", "aiuto5.t2", "aiuto5.t3"] };
    if (!m.flag("cassaAperta")) return { id: "i-cassa", chi: chi, chiavi: ["aiuto5.c1", "aiuto5.c2", "aiuto5.c3"] };
    if (!m.flag("formicheFatte")) return { id: "i-form", chi: chi, chiavi: ["aiuto6.f1", "aiuto6.f2", "aiuto6.f3"] };
    return { id: "i-fine", chi: chi, chiavi: ["aiuto5.fine"] };
  };

  Motore.aggiungi("oggetti", {
    frammento: { icona: "ogg-frammento", nome: "ogg.frammento", descrizione: "ogg.frammento.d", suAltro: "frammento.altro" }
  });
  Grafica.definizioni(`
    <symbol id="ogg-frammento" viewBox="0 0 140 140">
      <ellipse cx="70" cy="122" rx="40" ry="5" fill="#000" opacity=".25"/>
      <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round" transform="rotate(-10 70 70)">
        <path d="M24 44 L106 36 L112 62 L100 70 L114 92 L30 100 L36 80 L22 70 Z" fill="#ff8fc0"/>
        ${Casa.attiva()
          /* a casa l'impronta sul frammento è mezza cancellata: i particolari veri si vedono solo nel finale */
          ? '<g fill="#3a2a3a" stroke="none" opacity=".55"><ellipse cx="62" cy="70" rx="12" ry="8"/><ellipse cx="60" cy="55" rx="14" ry="4"/></g>'
          : '<g fill="#3a2a3a" stroke="none"><ellipse cx="62" cy="70" rx="10" ry="7"/><circle cx="48" cy="58" r="4"/><circle cx="56" cy="52" r="4"/><circle cx="68" cy="52" r="4"/><circle cx="76" cy="58" r="4"/><circle cx="82" cy="68" r="3"/></g>'}
      </g>
    </symbol>
  `);

  /* ---------- elementi ---------- */
  function tavolaSvg(m) {
    var f = function (n, disegno) {
      return '<g transform="translate(' + (6 + (n - 1) * 92) + ' 8)"><rect width="84" height="100" rx="4" fill="#f6efe0" stroke="#5e3f12" stroke-width="4"/>' +
        (m.flag("meta-" + n) || (n === 1 && m.flag("meta-1")) ? disegno : '<text x="42" y="60" text-anchor="middle" font-size="40" font-weight="800" fill="#c8bfa8">?</text>') + "</g>";
    };
    return '<svg viewBox="0 0 380 116"><rect x="0" y="0" width="380" height="116" rx="6" fill="url(#g-legno)" stroke="#1d1428" stroke-width="4"/>' +
      f(1, '<g stroke="#1d1428" stroke-width="2"><path d="M20 70 Q42 50 64 70 Z" fill="#5aa84a"/><circle cx="36" cy="64" r="5" fill="#f6efe0"/><circle cx="46" cy="62" r="5" fill="#f6efe0"/></g>') +
      f(2, '<path d="M14 64 q8 -10 16 0 q8 -10 16 0 q8 -10 16 0 q6 -8 12 0" fill="#7ac84a" stroke="#1d1428" stroke-width="2.5"/><circle cx="74" cy="60" r="5" fill="#7ac84a" stroke="#1d1428" stroke-width="2"/>') +
      f(3, '<path d="M42 20 L42 30" stroke="#1d1428" stroke-width="2"/><path d="M30 30 Q42 26 54 30 Q60 60 42 86 Q24 60 30 30 Z" fill="#b8a86a" stroke="#1d1428" stroke-width="2.5"/>') +
      f(4, '<use href="#ogg-farfalla" x="-4" y="6" width="92" height="92"/>') + "</svg>";
  }

  var elementi = [
    { id: "ritratto-merian", classe: "ritratto", personaggio: "merian", x: 230, y: 140, larghezza: 150, altezza: 183, svg: RitrattiCap1.merian,
      stato: function (m) { return m.flag("merianSveglia") ? "sveglio" : ""; } },
    { id: "targa-merian", classe: "etichetta targa", testo: "targa.merian", x: 244, y: 330 },
    { id: "ritratto-aljahiz", classe: "ritratto", personaggio: "aljahiz", x: 1210, y: 140, larghezza: 150, altezza: 183, svg: RitrattiCap1.aljahiz,
      stato: function (m) { return m.flag("aljahizSveglio") ? "sveglio" : ""; } },
    { id: "targa-aljahiz", classe: "etichetta targa", testo: "targa.aljahiz", x: 1244, y: 330 },
    { id: "tavola", x: 60, y: 372, larghezza: 380, altezza: 116, svg: "", _tavola: true },
    { id: "cassaforte", x: 724, y: 438, larghezza: 160, altezza: 151, svg: '<svg viewBox="0 0 180 170"><use href="#cassaforte"/></svg>' },
    { id: "cassaforte-aperta", x: 724, y: 438, larghezza: 160, altezza: 151,
      svg: '<svg viewBox="0 0 180 170"><rect x="8" y="8" width="164" height="150" rx="10" fill="#1a2430" stroke="#1d1428" stroke-width="4"/><rect x="150" y="8" width="26" height="150" rx="6" fill="#4a5a6a" stroke="#1d1428" stroke-width="4"/><circle cx="90" cy="84" r="40" fill="#ffd36b" opacity=".2"/></svg>',
      visibile: function (m) { return m.flag("cassaAperta"); } },
    { id: "formicaio", x: 120, y: 448, larghezza: 240, altezza: 150, svg: '<svg viewBox="0 0 240 150"><use href="#formicaio"/></svg>' },
    { id: "pista", classe: "pista-formiche", x: 330, y: 560, larghezza: 260, altezza: 90,
      svg: '<svg viewBox="0 0 260 90"><path d="M4 30 Q80 80 160 50 T256 70" fill="none" stroke="#2a1a1a" stroke-width="5" stroke-dasharray="3 9" stroke-linecap="round"/></svg>' },
    { id: "u-sala", classe: "etichetta cartello-uscita", testo: "uscita.salaSx", x: 20, y: 620 }
  ];
  Object.keys(MODELLI).forEach(function (a) {
    elementi.push({ id: "mod-" + a, x: MODELLI[a].x, y: 474, larghezza: 100, altezza: 67, svg: '<svg viewBox="0 0 120 80"><use href="#mod-' + a + '"/></svg>' });
    elementi.push({ id: "et5-" + a, classe: "etichetta rosa piccola", testo: "ins.et." + a, x: MODELLI[a].x + 4, y: 548, rotazione: -3,
      visibile: function (m) { return !m.flag("art-" + a); } });
    elementi.push({ id: "et5g-" + a, classe: "etichetta bianca piccola", testo: "ins.etg." + a, x: MODELLI[a].x + 2, y: 548,
      visibile: function (m) { return m.flag("art-" + a); } });
  });
  elementi.forEach(function (e) {
    if (e._tavola) Object.defineProperty(e, "svg", { get: function () { return tavolaSvg(Motore._api()); } });
  });

  var hotspot = [
    { id: "cassetti", nome: "hs.cassetti", forma: "M460 110 L1140 110 L1140 410 L460 410 Z", arrivo: [800, 720],
      guarda: "cassetti.guarda", usa: "cassetti.usa", parla: "cassetti.parla" },
    { id: "libellula", nome: "hs.libellula", forma: "M630 84 L970 84 L970 240 L630 240 Z", arrivo: [800, 720], guarda: "libellula.guarda", usa: "libellula.usa" },
    { id: "merian", nome: "hs.merian", forma: "M230 140 L380 140 L380 330 L230 330 Z", arrivo: [305, 720],
      guarda: function (m) { return m.flag("merianSveglia") ? "mer.guarda.sveglia" : "mer.guarda"; }, usa: "ritratto.usa", parla: parlaMerian,
      con: { lanterna: svegliaMerian, "lanterna-lente": svegliaMerian, gamberto: function (m) { return m.dice("gamberto", "mer.gamberto"); } } },
    { id: "aljahiz", nome: "hs.aljahiz", forma: "M1210 140 L1360 140 L1360 330 L1210 330 Z", arrivo: [1285, 720],
      guarda: function (m) { return m.flag("aljahizSveglio") ? "alj.guarda.sveglio" : "alj.guarda"; }, usa: "ritratto.usa", parla: parlaAljahiz,
      con: { lanterna: svegliaAljahiz, "lanterna-lente": svegliaAljahiz, gamberto: function (m) { return m.dice("gamberto", "alj.gamberto"); } } },
    { id: "tavola", nome: "hs.tavola", forma: "M60 372 L440 372 L440 488 L60 488 Z", arrivo: [250, 720],
      guarda: function (m) { return m.flag("metaFatta") ? "tavola.guarda.dopo" : "tavola.guarda"; }, usa: tavolaMetamorfosi, parla: "tavola.parla" },
    { id: "cassaforte", nome: "hs.cassaforte", forma: "M724 438 L884 438 L884 590 L724 590 Z", arrivo: [800, 720],
      guarda: function (m) { return m.flag("cassaAperta") ? "cassa5.guarda.dopo" : "cassa5.guarda"; }, usa: cassaforte, parla: "cassa5.parla",
      con: { gamberto: function (m) { return m.dice("gamberto", "cassa5.gamberto2"); } } },
    { id: "formicaio", nome: "hs.formicaio", forma: "M120 448 L360 448 L360 600 L120 600 Z M330 560 L590 560 L590 650 L330 650 Z", arrivo: [360, 740],
      guarda: function (m) { return m.flag("formicheFatte") ? "formicaio.guarda.dopo" : "formicaio.guarda"; }, usa: stradaFormiche, parla: "formicaio.parla",
      con: { lanterna: "formicaio.lanterna", gamberto: function (m) { return m.dice("gamberto", "formicaio.gamberto"); } } },
    { id: "u-sala", nome: "hs.uscitaSala", forma: "M0 560 L110 560 L110 880 L0 880 Z", arrivo: [130, 780],
      uscita: { stanza: "sala", arrivo: [1430, 780, -1, "profilo"] } }
  ];
  Object.keys(MODELLI).forEach(function (a) {
    hotspot.push({ id: "mod-" + a, nome: "hs.mod." + a, forma: "M" + MODELLI[a].x + " 468 l100 0 l0 100 l-100 0 Z", arrivo: [MODELLI[a].x + 50, 720],
      guarda: "mod." + a + ".guarda", usa: "mod.usa", parla: "mod." + a + ".parla",
      con: { gamberto: function (m) { return m.dice("gamberto", a === "granchio" ? "mod.granchio.gamberto" : "mod.gamberto"); } } });
  });

  Motore.stanza("insetti", {
    sfondo: "sala-insetti",
    pavimento: { xMin: 140, xMax: 1480, yMin: 700, yMax: 860 },
    scala: { lontano: { y: 700, s: 0.84 }, vicino: { y: 860, s: 1 } },
    attori: [C.nina(170, 780, 1)],
    elementi: elementi,
    hotspot: hotspot,
    entrata: async function (m) {
      if (m.flag("insettiVista")) return;
      m.flag("insettiVista", true);
      m.togli("chiave-insetti");
      await m.pensa("ins.entrata.1");
      await m.dice("gamberto", "ins.entrata.2");
    }
  });
})();
