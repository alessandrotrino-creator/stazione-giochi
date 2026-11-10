/* =====================================================================
   Matematica · Capitolo 1 · Stanza: DAMASCO, circa 952 (puzzle 1, riscaldamento)
   Frazioni decimali e numeri decimali; frazioni non decimali con la divisione.
   Il Conte ha rimesso alle pezze del mercante cartellini con frazioni e ha lanciato
   la sua asta graduata sul tetto della bancarella. Personaggio storico: Al-Uqlidisi,
   che senza il suo calamo (la penna) non può mostrare la divisione su carta.
   Oggetti: scopa → asta; pepe → il gatto scappa → calamo → Al-Uqlidisi.
   I numeri cambiano a ogni partita (si scelgono la prima volta e restano nel salvataggio).
   ===================================================================== */
(function () {
  var M = Mat1;

  /* frazioni possibili: una "facile" con 10 o 100, una con gli zeri insidiosi, una NON decimale (si divide) */
  var FACILI = [[3, 10], [7, 10], [9, 10], [23, 100], [47, 100], [81, 100]];
  var ZERI = [[9, 100], [7, 100], [45, 1000], [125, 1000], [3, 1000], [105, 100]];
  var DIVISIONE = [[3, 4], [1, 4], [1, 8], [3, 5], [7, 20], [2, 25], [1, 2], [3, 8]];
  var PEZZE = [
    { id: "p1", x: 690, y: 470, colore: "#c0392b" },
    { id: "p2", x: 830, y: 486, colore: "#2f62c0" },
    { id: "p3", x: 760, y: 410, colore: "#2f9a4e" }
  ];
  var UQLIDISI = { posa: "seduto", leggio: true, abito: "#2f7a8a", bordo: "#f3c77a", pelle: "#c8956a", barba: "#e8e2d4", berretto: "#f3e2b8" };

  function frazioni(m) {
    var f = m.stato.flag.frazioni;
    if (!f) {
      f = [M.a_caso(FACILI), M.a_caso(ZERI), M.a_caso(DIVISIONE)];
      m.flag("frazioni", f);
    }
    return f;
  }
  function tutteFatte(m) { return PEZZE.every(function (p) { return m.flag("pezza-" + p.id); }); }

  Grafica.definizioni(`
    <symbol id="ogg-foglio" viewBox="0 0 140 140">
      <ellipse cx="70" cy="124" rx="42" ry="6" fill="#000" opacity=".25"/>
      <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round">
        <path d="M30 18 L104 14 L112 112 L36 118 Z" fill="#f3e2b8"/>
        <path d="M44 38 L96 35 M46 56 L98 53 M48 74 L82 72" stroke="#6a4424" stroke-width="2.5"/>
        <path d="M84 84 L118 50 L124 56 L90 90 Z" fill="#3a2416"/>
      </g>
    </symbol>
    <symbol id="ogg-asta" viewBox="0 0 140 140">
      <g stroke="#1d1428" stroke-width="3" transform="rotate(-35 70 70)">
        <rect x="6" y="60" width="128" height="20" rx="3" fill="#e8c88a"/>
        <path d="M19 60 v8 M32 60 v8 M45 60 v8 M58 60 v8 M70 60 v14 M83 60 v8 M96 60 v8 M109 60 v8 M122 60 v8" stroke-width="2"/>
      </g>
    </symbol>
    <symbol id="ogg-scopa" viewBox="0 0 140 140">
      <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round" transform="rotate(30 70 70)">
        <path d="M68 6 L72 6 L74 88 L66 88 Z" fill="#8a5a32"/>
        <path d="M54 86 L86 86 L98 134 L42 134 Z" fill="#d8b860"/>
        <path d="M52 100 L88 100 M58 86 L50 134 M70 86 L70 134 M82 86 L90 134" stroke="#8a6a24" stroke-width="2"/>
      </g>
    </symbol>
    <symbol id="ogg-pepe" viewBox="0 0 140 140">
      <ellipse cx="70" cy="118" rx="40" ry="6" fill="#000" opacity=".25"/>
      <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round">
        <path d="M34 66 Q70 40 106 66 L98 112 Q70 122 42 112 Z" fill="#e8dcc0"/>
        <path d="M38 70 Q70 54 102 70 Q70 84 38 70 Z" fill="#3a2a22"/>
        <path d="M56 46 Q70 30 84 46" fill="none" stroke-width="4"/>
      </g>
    </symbol>
    <symbol id="ogg-calamo" viewBox="0 0 140 140">
      <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round" transform="rotate(-40 70 70)">
        <path d="M14 64 L112 64 L130 70 L112 76 L14 76 Z" fill="#c8a060"/>
        <path d="M112 64 L130 70 L112 76 Z" fill="#3a2416"/>
        <path d="M30 64 L30 76 M50 64 L50 76" stroke="#8a6a24" stroke-width="2"/>
      </g>
    </symbol>
  `);

  function pezzaSvg(p) {
    return '<svg viewBox="0 0 220 120" style="--stoffa:' + p.colore + '"><use href="#dam-pezza"/></svg>';
  }
  function cartellino(p, i) {
    return {
      id: "cart-" + p.id, classe: "etichetta rosa", x: p.x + 40, y: p.y - 14,
      get testo() { return Motore._api().flag("pezza-" + p.id) ? "dam.cartellino.fatto" : "dam.cartellino"; },
      param: function (m) { var f = frazioni(m)[i]; return { n: f[0], d: f[1], x: M.decimale(f[0], f[1]) }; }
    };
  }

  var elementi = [];
  PEZZE.forEach(function (p) { elementi.push({ id: "pezza-" + p.id, x: p.x, y: p.y, larghezza: 200, altezza: 110, svg: pezzaSvg(p) }); });
  PEZZE.forEach(function (p, i) { elementi.push(cartellino(p, i)); });
  elementi.push(
    /* l'asta graduata, lanciata dal Conte sul tetto della bancarella */
    { id: "asta-tetto", x: 700, y: 300, larghezza: 260, altezza: 40, rotazione: -6,
      svg: '<svg viewBox="0 0 260 40"><g stroke="#1d1428" stroke-width="3"><rect x="4" y="10" width="252" height="22" rx="4" fill="#e8c88a"/>' +
        '<path d="M29 10 v10 M54 10 v10 M79 10 v10 M104 10 v10 M130 10 v16 M155 10 v10 M180 10 v10 M205 10 v10 M230 10 v10" stroke-width="2.5"/></g></svg>',
      visibile: function (m) { return !m.flag("astaPresa"); } },
    { id: "scopa", x: 1000, y: 560, larghezza: 60, altezza: 180, rotazione: 8,
      svg: '<svg viewBox="0 0 60 180"><g stroke="#1d1428" stroke-width="3" stroke-linejoin="round"><path d="M27 4 L33 4 L34 120 L26 120 Z" fill="#8a5a32"/>' +
        '<path d="M14 118 L46 118 L56 176 L4 176 Z" fill="#d8b860"/><path d="M12 134 L48 134 M20 118 L12 176 M30 118 L30 176 M40 118 L48 176" stroke="#8a6a24" stroke-width="2"/></g></svg>',
      visibile: function (m) { return !m.flag("scopaPresa"); } },
    { id: "gatto", x: 1160, y: 712, larghezza: 110, altezza: 50,
      svg: '<svg viewBox="0 0 110 50" overflow="visible"><g stroke="#1d1428" stroke-width="3" stroke-linejoin="round">' +
        '<path d="M8 44 Q14 18 46 18 Q78 18 82 40 Q60 50 30 48 Z" fill="#8a7a6a"/><path d="M78 30 Q96 24 96 40 Q86 50 76 42 Z" fill="#8a7a6a"/>' +
        '<path d="M82 24 L80 12 L90 22 M92 26 L98 14 L100 28" fill="#8a7a6a"/><path d="M84 36 L90 36" stroke-width="2"/>' +
        '<path d="M10 44 Q-6 46 -4 30" fill="none" stroke="#8a7a6a" stroke-width="7"/>' +
        '<path d="M30 26 Q40 22 50 26 M36 34 Q46 30 56 34" fill="none" stroke="#5a4a3a" stroke-width="2"/></g>' +
        '<text x="98" y="8" font-size="13" font-weight="800" fill="#fff8e6">z</text></svg>',
      visibile: function (m) { return !m.flag("gattoScappato"); } },
    { id: "calamo", x: 1170, y: 738, larghezza: 70, altezza: 24,
      svg: '<svg viewBox="0 0 70 24"><g stroke="#1d1428" stroke-width="2.5"><path d="M4 9 L56 9 L68 12 L56 15 L4 15 Z" fill="#c8a060"/><path d="M56 9 L68 12 L56 15 Z" fill="#3a2416"/></g></svg>',
      visibile: function (m) { return m.flag("gattoScappato") && !m.flag("calamoPreso"); } },
    { id: "mercante", classe: "figura", personaggio: "mercante", x: 1150, y: 384, larghezza: 140, altezza: 308,
      svg: FiguraDamasco({ posa: "in piedi", abito: "#a04a2a", bordo: "#e9b45a", pelle: "#b07a52", barba: "#3a2416", berretto: "#e9b45a" }) },
    { id: "uqlidisi", classe: "figura", personaggio: "uqlidisi", x: 1300, y: 470, larghezza: 240, altezza: 277,
      get svg() {
        var conPenna = Motore._api().flag("calamoReso");
        return FiguraDamasco(Object.assign({}, UQLIDISI, { extra: conPenna ? '<path d="M152 228 L178 200" stroke="#3a2416" stroke-width="5"/>' : "" }));
      } }
  );

  Motore.stanza("damasco", {
    sfondo: "damasco",
    pavimento: { xMin: 140, xMax: 1460, yMin: 690, yMax: 860 },
    scala: { lontano: { y: 690, s: 0.84 }, vicino: { y: 860, s: 1 } },
    attori: [
      { id: "leo", simbolo: "leo-fronte", viste: { fronte: "leo-fronte", profilo: "leo-profilo", schiena: "leo-schiena" },
        vista: [-110, -600, 230, 615], piedi: [5, 0], altezza: 560, x: 420, y: 780, dir: 1 }
    ],
    elementi: elementi,
    hotspot: PEZZE.map(function (p, i) {
      return { id: "pezza-" + p.id, nome: "hs.pezza", forma: "M" + p.x + " " + (p.y - 20) + " l210 0 l0 130 l-210 0 Z", arrivo: [p.x + 100, 720], vista: "schiena",
        guarda: function (m) { return m.flag("pezza-" + p.id) ? "dam.pezza.guardaFatta" : "dam.pezza.guarda"; },
        usa: function (m) { return misura(m, p, i); },
        parla: "dam.pezza.parla",
        con: { asta: function (m) { return misura(m, p, i); } } };
    }).concat([
      { id: "asta-tetto", nome: "hs.astaTetto", forma: "M690 280 L970 280 L970 352 L690 352 Z", arrivo: [820, 720], vista: "schiena",
        presente: function (m) { return !m.flag("astaPresa"); },
        guarda: "dam.tetto.guarda", usa: "dam.tetto.usa", parla: "dam.tetto.parla",
        con: { scopa: async function (m) {
          m.vista("schiena");
          await m.pensa("dam.tetto.scopa.1");
          m.suono("pagina");
          m.flag("astaPresa", true);
          m.prendi("asta");
          await m.dice("mercante", "dam.tetto.scopa.2");
          await m.pensa("dam.tetto.scopa.3");
        } } },
      { id: "scopa", nome: "hs.scopa", forma: "M990 550 L1070 550 L1070 750 L990 750 Z", arrivo: [990, 770], verso: 1,
        presente: function (m) { return !m.flag("scopaPresa"); },
        guarda: "dam.scopa.guarda",
        usa: async function (m) { m.flag("scopaPresa", true); m.prendi("scopa"); await m.pensa("dam.scopa.prendi"); },
        parla: "dam.scopa.parla" },
      { id: "spezie", nome: "hs.spezie", forma: "M380 640 L640 640 L640 740 L380 740 Z", arrivo: [510, 790], vista: "schiena",
        guarda: "dam.spezie.guarda",
        usa: async function (m) {
          if (m.ha("pepe") || m.flag("pepeUsato")) return "dam.spezie.basta";
          await m.pensa("dam.spezie.chiedi");
          await m.dice("mercante", "dam.spezie.ok");
          m.prendi("pepe");
        },
        parla: "dam.spezie.parla" },
      { id: "gatto", nome: "hs.gatto", forma: "M1150 700 L1280 700 L1280 770 L1150 770 Z", arrivo: [1120, 790], verso: 1,
        presente: function (m) { return !m.flag("gattoScappato"); },
        guarda: "dam.gatto.guarda", usa: "dam.gatto.usa", parla: "dam.gatto.parla",
        con: {
          pepe: async function (m) {
            m.togli("pepe"); m.flag("pepeUsato", true);
            await m.pensa("dam.gatto.pepe.1");
            m.suono("errore");
            m.flag("gattoScappato", true);
            await m.pensa("dam.gatto.pepe.2");
          },
          scopa: "dam.gatto.scopa", asta: "dam.gatto.scopa"
        } },
      { id: "calamo", nome: "hs.calamo", forma: "M1160 726 L1250 726 L1250 770 L1160 770 Z", arrivo: [1120, 790], verso: 1,
        presente: function (m) { return m.flag("gattoScappato") && !m.flag("calamoPreso"); },
        guarda: "dam.calamo.guarda",
        usa: async function (m) { m.flag("calamoPreso", true); m.prendi("calamo"); await m.pensa("dam.calamo.prendi"); },
        parla: "dam.calamo.parla" },
      { id: "tappeto", nome: "hs.tappeto", forma: "M640 700 L1000 700 L1050 790 L590 790 Z", arrivo: [820, 830],
        guarda: "dam.tappeto.guarda", usa: "dam.tappeto.usa", parla: "dam.tappeto.parla" },
      { id: "anfore", nome: "hs.anfore", forma: "M1040 630 L1150 630 L1150 745 L1040 745 Z", arrivo: [1060, 790], verso: 1,
        guarda: "dam.anfore.guarda", usa: "dam.anfore.usa", parla: "dam.anfore.parla" },
      { id: "mercante", nome: "hs.mercante", forma: "M1160 384 L1290 384 L1290 690 L1160 690 Z", arrivo: [1110, 770], verso: 1,
        guarda: "dam.mercante.guarda", usa: "dam.mercante.usa",
        parla: async function (m) {
          if (tutteFatte(m)) return "dam.mercante.grazie";
          await m.dice("mercante", "dam.mercante.p1");
          await m.dice("mercante", m.flag("astaPresa") ? "dam.mercante.p2" : "dam.mercante.asta");
        },
        con: { asta: "dam.mercante.conAsta", pepe: "dam.mercante.conPepe" } },
      { id: "uqlidisi", nome: "hs.uqlidisi", forma: "M1310 470 L1540 470 L1540 747 L1310 747 Z", arrivo: [1270, 790], verso: 1,
        guarda: function (m) { return m.flag("calamoReso") ? "dam.uqlidisi.guardaPenna" : "dam.uqlidisi.guarda"; },
        usa: "dam.uqlidisi.usa",
        parla: async function (m) {
          m.figurina("uqlidisi");
          var v = await m.scegli([
            { testo: "dam.dlg.chi", valore: "chi" },
            { testo: "dam.dlg.carta", valore: "carta" },
            { testo: "dam.dlg.decimali", valore: "decimali" },
            { testo: "dam.dlg.ciao", valore: "ciao" }
          ]);
          if (v === "chi") { await m.dice("uqlidisi", "dam.dlg.chi.r1"); await m.dice("uqlidisi", "dam.dlg.chi.r2"); }
          if (v === "carta") {
            await m.dice("uqlidisi", "dam.dlg.carta.r1"); await m.pensa("dam.dlg.carta.r2"); await m.dice("uqlidisi", "dam.dlg.carta.r3");
            if (!m.flag("calamoReso")) await m.dice("uqlidisi", "dam.dlg.carta.r4");
          }
          if (v === "decimali") {
            if (!m.flag("calamoReso")) { await m.dice("uqlidisi", "dam.dlg.decimali.senza"); return; }
            await m.dice("uqlidisi", "dam.dlg.decimali.r1"); await m.dice("uqlidisi", "dam.dlg.decimali.r2");
          }
          if (v === "ciao") await m.dice("uqlidisi", "dam.dlg.ciao.r");
        },
        con: {
          calamo: async function (m) {
            m.togli("calamo"); m.flag("calamoReso", true);
            await m.dice("uqlidisi", "dam.calamo.reso.1");
            await m.dice("uqlidisi", "dam.calamo.reso.2");
            m.annota("m1.calamo");
          },
          asta: "dam.uqlidisi.conAsta", pepe: "dam.uqlidisi.conPepe"
        } },
      { id: "ottone-dam", nome: "hs.ottone", forma: "M80 400 L300 400 L300 740 L80 740 Z", arrivo: [330, 760], verso: -1,
        guarda: "dam.ottone.guarda",
        usa: async function (m) {
          if (!tutteFatte(m)) return "dam.ottone.nonAncora";
          await m.dice("ottone", "dam.ottone.parti");
          m.suono("magia");
          await m.vaiStanza("samarcanda", [380, 780, 1, "profilo"]);
        },
        parla: function (m) { return tutteFatte(m) ? "dam.ottone.parlaFatto" : "dam.ottone.parla"; } }
    ])
  });

  /* il cartellino di ogni pezza: si sceglie il numero decimale da segnare sull'asta */
  async function misura(m, p, i) {
    if (m.flag("pezza-" + p.id)) return "dam.pezza.giaFatta";
    if (!m.ha("asta")) return "dam.pezza.serveAsta";
    var f = frazioni(m)[i], n = f[0], d = f[1], giusta = M.decimale(n, d), decimale = /^10+$/.test(String(d));
    var param = { n: n, d: d };
    if (!decimale) {
      await m.dice("mercante", "dam.nonDecimale.1", param);
      if (!m.flag("calamoReso")) { await m.dice("uqlidisi", "dam.nonDecimale.senzaCalamo", param); return; }
      if (!m.flag("divisioneSpiegata")) { m.flag("divisioneSpiegata", true); await m.dice("uqlidisi", "dam.nonDecimale.2", param); }
    }
    var opzioni = M.distrattori(n, d, giusta, decimale).map(function (o) { return [o[0], o[1]]; });
    opzioni.push([giusta, "giusta"]);
    M.mescola(opzioni);
    await M.finoAlGiusto(m, decimale ? "dam.domanda" : "dam.bivio", param, opzioni, function (tipo) {
      var chi = tipo === "rovescio" || tipo === "dentro" ? "uqlidisi" : "ottone";
      return m.dice(chi, "dam.errore." + tipo + (decimale ? "" : ".div"), { n: n, d: d, x: giusta });
    }, "m1-" + (decimale ? (i === 0 ? "facile" : "zeri") : "divisione"),
      { id: "dam-" + i, chiavi: ["hq.dam.indizio", "m1.foglio", "hq.dam.sol"], param: { n: n, d: d, x: giusta } });
    m.flag("pezza-" + p.id, true);
    m.suono("magia");
    await m.dice("mercante", "dam.giusto." + (i + 1), { n: n, d: d, x: giusta });
    if (tutteFatte(m)) await fine(m);
  }

  async function fine(m) {
    m.togli("asta"); m.togli("scopa");   // asta e scopa tornano al mercante
    await m.dice("mercante", "dam.fine.1");
    await m.dice("uqlidisi", "dam.fine.2");
    m.prendi("foglio");
    m.annota("m1.foglio");
    await m.pensa("dam.fine.3");
    await m.dice("nonna", "dam.radio.1");
    await m.dice("nonna", "dam.radio.2");
    await m.dice("ottone", "dam.fine.4");
    m.annota("m1.radio");
  }

  Motore.aggiungi("oggetti", {
    asta: { icona: "ogg-asta", nome: "ogg.asta", descrizione: "ogg.asta.d", suAltro: "asta.altro" },
    scopa: { icona: "ogg-scopa", nome: "ogg.scopa", descrizione: "ogg.scopa.d", suAltro: "scopa.altro" },
    pepe: { icona: "ogg-pepe", nome: "ogg.pepe", descrizione: "ogg.pepe.d", loSapevi: "ogg.pepe.ls", suAltro: "pepe.altro" },
    calamo: { icona: "ogg-calamo", nome: "ogg.calamo", descrizione: "ogg.calamo.d", loSapevi: "ogg.calamo.ls", suAltro: "calamo.altro" }
  });

  Mat1.aiutiStanze.damasco = function (m) {
    if (!m.ha("asta") && !tutteFatte(m)) return { id: "d-asta", chi: "ottone", chiavi: m.ha("scopa") ? ["aiuto1.a2", "aiuto1.a3"] : ["aiuto1.a1", "aiuto1.a2", "aiuto1.a3"] };
    if (!m.flag("pezza-p1") || !m.flag("pezza-p2")) return { id: "d-pezze", chi: "ottone", chiavi: ["aiuto1.f1", "aiuto1.f2", "aiuto1.f3"] };
    if (!m.flag("calamoReso")) return { id: "d-calamo", chi: "ottone", chiavi: ["aiuto1.c1", "aiuto1.c2", "aiuto1.c3"] };
    if (!tutteFatte(m)) return { id: "d-divisione", chi: "ottone", chiavi: ["aiuto1.f2", "aiuto1.f3"] };
    return { id: "d-fine", chi: "ottone", chiavi: ["aiuto1.fine"] };
  };

  /* la prima volta a Damasco: arrivo e presentazioni */
  Motore.stanzaDef("damasco").entrata = async function (m) {
    frazioni(m);
    if (m.flag("damascoVisto")) return;
    m.flag("damascoVisto", true);
    await m.cartello("dam.cartello", "dam.cartello.sotto", 3000);
    await m.dice("ottone", "dam.arrivo.1");
    await m.pensa("dam.arrivo.2");
    await m.dice("mercante", "dam.arrivo.3");
    await m.dice("mercante", "dam.arrivo.4");
    await m.pensa("dam.arrivo.5");
  };
})();
