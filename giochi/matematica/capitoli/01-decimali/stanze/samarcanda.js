/* =====================================================================
   Matematica · Capitolo 1 · Stanza: SAMARCANDA, circa 1427 (puzzle 2, ragionamento)
   Che tipo di decimale genera una frazione? Si guarda il denominatore (dopo aver semplificato):
   solo 2 e 5 → limitato; né 2 né 5 → periodico semplice; 2 o 5 con altri fattori → periodico misto.
   Quattro chiavi-frazione per tre porte; l'ultima è la trappola: va semplificata prima.
   Personaggio storico: Al-Kashi (cameo di Ulugh Beg nel dialogo). I numeri cambiano a ogni partita.
   ===================================================================== */
(function () {
  var M = Mat1;
  var TIPI = ["limitato", "semplice", "misto"];
  var POOL = {
    limitato: [[3, 8], [7, 20], [9, 25], [3, 16], [11, 40], [13, 50]],
    semplice: [[5, 9], [4, 11], [2, 3], [5, 7], [7, 33], [8, 27]],
    misto: [[5, 6], [7, 12], [1, 15], [11, 30], [7, 45], [5, 18]],
    trappola: [[6, 15], [9, 12], [14, 42], [21, 28], [10, 35], [12, 30]]
  };
  var PORTE = [
    { tipo: "limitato", x: 350 },
    { tipo: "semplice", x: 690 },
    { tipo: "misto", x: 1030 }
  ];

  function mcd(a, b) { return b ? mcd(b, a % b) : a; }
  function fattori(d) {
    var f = [], p = 2;
    while (d > 1) { if (d % p === 0) { f.push(p); d /= p; } else p++; }
    return f;
  }
  function tipo(n, d) {
    var r = d / mcd(n, d), f = fattori(r);
    var con25 = f.some(function (x) { return x === 2 || x === 5; }), altri = f.some(function (x) { return x !== 2 && x !== 5; });
    return !altri ? "limitato" : !con25 ? "semplice" : "misto";
  }
  function chiavi(m) {
    var c = m.stato.flag.chiavi;
    if (!c) {
      // le prime tre in ordine casuale: la prima chiave non deve andare sempre nella prima porta
      c = M.mescola([M.a_caso(POOL.limitato), M.a_caso(POOL.semplice), M.a_caso(POOL.misto)]).concat([M.a_caso(POOL.trappola)]);
      m.flag("chiavi", c);
    }
    return c;
  }
  function fatte(m) { return m.stato.flag.chiaviFatte || 0; }

  function porta(p) {
    return { id: "porta-" + p.tipo, x: p.x, y: 340, larghezza: 220, altezza: 300,
      get svg() { return PortaSamarcanda(Motore._api().flag("aperta-" + p.tipo)); } };
  }

  var elementi = PORTE.map(porta).concat(PORTE.map(function (p) {
    return { id: "scritta-" + p.tipo, classe: "etichetta bianca piccola", testo: "sam.scritta." + p.tipo, x: p.x + 30, y: 300 };
  })).concat([
    { id: "alkashi", classe: "figura", personaggio: "alkashi", x: 1320, y: 462, larghezza: 230, altezza: 265,
      svg: FiguraDamasco({ posa: "seduto", leggio: true, abito: "#3a3a8a", bordo: "#e8b84a", pelle: "#c89a70", barba: "#4a3a30", berretto: "#e8e2d4" }) },
    /* le chiavi luccicano sul fondo della vasca */
    { id: "chiavi-vasca", x: 772, y: 656, larghezza: 56, altezza: 24,
      svg: '<svg viewBox="0 0 56 24"><g stroke="#1d1428" stroke-width="2" fill="#e8b84a" opacity=".85"><circle cx="12" cy="12" r="7" fill="none" stroke="#e8b84a" stroke-width="3"/>' +
        '<path d="M18 12 L50 12 L50 17 L46 17 L46 14 L40 14 L40 18 L36 18 L36 14 L18 14 Z"/></g><circle cx="44" cy="6" r="2" fill="#fff"/></svg>',
      visibile: function (m) { return !m.flag("chiaviPescate"); } },
    { id: "conte", classe: "figura", personaggio: "conte", x: 1250, y: 100, larghezza: 160, altezza: 200,
      svg: FiguraConte(), visibile: function (m) { return m.flag("conteQui"); } },
    { id: "astrolabio-alto", x: 1372, y: 262, larghezza: 46, altezza: 46,
      svg: Grafica.icona("ogg-astrolabio"), visibile: function (m) { return m.flag("conteFuggito") && !m.flag("astrolabioPreso"); } },
    /* un palo sciolto appoggiato alle impalcature, e un gancio di ricambio sul palo della lanterna */
    { id: "palo", x: 1446, y: 380, larghezza: 26, altezza: 262, rotazione: -6,
      svg: '<svg viewBox="0 0 26 262"><rect x="7" y="2" width="12" height="258" rx="5" fill="#8a5a2a" stroke="#1d1428" stroke-width="3"/></svg>',
      visibile: function (m) { return !m.flag("paloPreso"); } },
    { id: "gancio", x: 640, y: 586, larghezza: 24, altezza: 34,
      svg: '<svg viewBox="0 0 24 34"><path d="M12 2 L12 20 Q12 30 4 28 Q-1 26 3 20" fill="none" stroke="#1d1428" stroke-width="6" stroke-linecap="round"/>' +
        '<path d="M12 2 L12 20 Q12 30 4 28 Q-1 26 3 20" fill="none" stroke="#c8a04a" stroke-width="3" stroke-linecap="round"/></svg>',
      visibile: function (m) { return !m.flag("gancioPreso"); } }
  ]);

  Motore.stanza("samarcanda", {
    sfondo: "samarcanda",
    pavimento: { xMin: 140, xMax: 1460, yMin: 690, yMax: 860 },
    scala: { lontano: { y: 690, s: 0.84 }, vicino: { y: 860, s: 1 } },
    attori: [
      { id: "leo", simbolo: "leo-fronte", viste: { fronte: "leo-fronte", profilo: "leo-profilo", schiena: "leo-schiena" },
        vista: [-110, -600, 230, 615], piedi: [5, 0], altezza: 560, x: 380, y: 780, dir: 1 }
    ],
    elementi: elementi,
    hotspot: PORTE.map(function (p) {
      return { id: "porta-" + p.tipo, nome: "hs.porta." + p.tipo, forma: "M" + p.x + " 330 l220 0 l0 310 l-220 0 Z", arrivo: [p.x + 110, 720], vista: "schiena",
        guarda: "sam.porta.guarda." + p.tipo,
        usa: function (m) { return m.flag("aperta-" + p.tipo) && fatte(m) >= 4 ? "sam.porta.aperta" : m.ha("chiavi") ? prova(m) : "sam.porta.usa"; },
        parla: "sam.porta.parla",
        con: { chiavi: function (m) { return prova(m); } } };
    }).concat([
      { id: "vasca", nome: "hs.vasca", forma: "M660 640 L940 640 L940 700 L660 700 Z", arrivo: [800, 730], vista: "schiena",
        guarda: function (m) { return m.flag("chiaviPescate") ? "sam.vasca.guardaVuota" : "sam.vasca.guarda"; },
        usa: function (m) { return m.flag("chiaviPescate") ? "sam.vasca.usaVuota" : "sam.vasca.usa"; },
        parla: "sam.vasca.parla",
        con: {
          palo: "sam.vasca.soloPalo", gancio: "sam.vasca.soloGancio",
          "palo-gancio": async function (m) {
            if (m.flag("chiaviPescate")) return "sam.vasca.usaVuota";
            m.vista("schiena");
            await m.pensa("sam.vasca.pesca.1");
            m.suono("prendi");
            m.flag("chiaviPescate", true);
            m.prendi("chiavi");
            await m.dice("alkashi", "sam.vasca.pesca.2");
            await m.dice("ottone", "sam.vasca.pesca.3");
          }
        } },
      { id: "palo", nome: "hs.palo", forma: "M1430 370 L1490 370 L1490 650 L1430 650 Z", arrivo: [1400, 740], verso: 1,
        presente: function (m) { return !m.flag("paloPreso"); },
        guarda: "sam.palo.guarda",
        usa: async function (m) { m.flag("paloPreso", true); m.prendi("palo"); await m.pensa("sam.palo.prendi"); },
        parla: "sam.palo.parla" },
      { id: "lanterna", nome: "hs.lanterna", forma: "M600 500 L670 500 L670 640 L600 640 Z", arrivo: [640, 720], vista: "schiena",
        guarda: function (m) { return m.flag("gancioPreso") ? "sam.lanterna.guardaSenza" : "sam.lanterna.guarda"; },
        usa: async function (m) {
          if (m.flag("gancioPreso")) return "sam.lanterna.usaSenza";
          m.flag("gancioPreso", true); m.prendi("gancio"); await m.pensa("sam.lanterna.prendi");
        },
        parla: "sam.lanterna.parla" },
      { id: "alkashi", nome: "hs.alkashi", forma: "M1330 450 L1530 450 L1530 690 L1330 690 Z", arrivo: [1250, 780], verso: 1,
        guarda: "sam.alkashi.guarda", usa: "sam.alkashi.usa",
        parla: async function (m) {
          m.figurina("alkashi");
          var v = await m.scegli([
            { testo: "sam.dlg.chi", valore: "chi" },
            { testo: "sam.dlg.chiave", valore: "chiave" },
            { testo: "sam.dlg.regola", valore: "regola" },
            { testo: "sam.dlg.ciao", valore: "ciao" }
          ]);
          if (v === "chi") { await m.dice("alkashi", "sam.dlg.chi.r1"); await m.dice("alkashi", "sam.dlg.chi.r2"); }
          if (v === "chiave") { await m.dice("alkashi", "sam.dlg.chiave.r1"); await m.dice("alkashi", "sam.dlg.chiave.r2"); await m.pensa("sam.dlg.chiave.r3"); }
          if (v === "regola") { await m.dice("alkashi", "sam.dlg.regola.r1"); await m.dice("alkashi", "sam.dlg.regola.r2"); await m.dice("alkashi", "sam.dlg.regola.r3"); }
          if (v === "ciao") await m.dice("alkashi", "sam.dlg.ciao.r");
        } },
      { id: "astrolabio-alto", nome: "hs.astrolabio", forma: "M1356 246 L1432 246 L1432 316 L1356 316 Z", arrivo: [1380, 740], verso: 1,
        presente: function (m) { return m.flag("conteFuggito") && !m.flag("astrolabioPreso"); },
        guarda: "sam.astrolabio.guarda", usa: "sam.astrolabio.usa", parla: "sam.astrolabio.parla",
        con: { "palo-gancio": prendiAstrolabio, palo: "sam.astrolabio.soloPalo" } },
      { id: "impalcature", nome: "hs.impalcature", forma: "M1240 190 L1450 190 L1450 330 L1240 330 Z", arrivo: [1250, 740],
        guarda: "sam.impalcature.guarda", usa: "sam.impalcature.usa", parla: "sam.impalcature.parla",
        con: { "palo-gancio": function (m) { return m.flag("conteFuggito") && !m.flag("astrolabioPreso") ? prendiAstrolabio(m) : "sam.impalcature.palo"; } } },
      { id: "ottone-sam", nome: "hs.ottone", forma: "M40 410 L250 410 L250 750 L40 750 Z", arrivo: [290, 780], verso: -1,
        guarda: "sam.ottone.guarda",
        usa: async function (m) {
          if (fatte(m) < 4) return "sam.ottone.nonAncora";
          if (!m.flag("coordinateFatte")) return m.ha("astrolabio") ? "sam.ottone.conAstrolabio" : "sam.ottone.serveAstrolabio";
          await m.dice("ottone", "sam.ottone.parti");
          m.suono("magia");
          await m.vaiStanza("spiaggia", [320, 790, 1, "profilo"]);
        },
        parla: function (m) { return fatte(m) < 4 ? "sam.ottone.parla" : m.flag("coordinateFatte") ? "sam.ottone.parlaFatto" : "sam.ottone.serveAstrolabio"; },
        con: { astrolabio: function (m) { return coordinate(m); } } }
    ])
  });

  /* una chiave dal mazzo: in quale porta va? */
  async function prova(m) {
    var i = fatte(m);
    if (i >= 4) return "sam.mazzo.vuoto";
    if (!m.ha("chiavi")) return "sam.porta.usa";
    var k = chiavi(m)[i], n = k[0], d = k[1], giusta = tipo(n, d), g = mcd(n, d), trappola = i === 3;
    var param = { n: n, d: d, f: fattori(d / g).join(" × "), n2: n / g, d2: d / g, fd: fattori(d).join(" × ") };
    await m.pensa(trappola ? "sam.chiave.ultima" : "sam.chiave.prendi", param);
    for (;;) {
      var v = await m.scegli(TIPI.map(function (t) { return { testo: "sam.opzione." + t, valore: t }; }), trappola ? "sam.bivio" : "sam.domanda", param);
      if (v === giusta) break;
      m.suono("errore");
      // la trappola: chi non semplifica sceglie la porta del denominatore "grezzo"
      var grezzo = (function () { var f = fattori(d), c = f.some(function (x) { return x === 2 || x === 5; }), a = f.some(function (x) { return x !== 2 && x !== 5; }); return !a ? "limitato" : !c ? "semplice" : "misto"; })();
      if (trappola && v === grezzo) { m.errore("m2-trappola"); await m.dice("alkashi", "sam.errore.trappola", param); }
      else { m.errore("m2-" + giusta + "-" + v); await m.dice("alkashi", "sam.errore." + giusta, param); }
    }
    m.suono("magia");
    m.flag("aperta-" + giusta, true);
    m.flag("chiaviFatte", i + 1);
    if (i + 1 === 4) m.togli("chiavi");
    await m.dice("alkashi", trappola ? "sam.giusto.trappola" : "sam.giusto." + giusta, param);
    if (i + 1 === 4) await fine(m);
  }

  async function fine(m) {
    await m.dice("alkashi", "sam.fine.1");
    await m.dice("alkashi", "sam.fine.2");
    m.annota("m1.razionali");
    m.figurina("alkashi");
    await m.pensa("sam.fine.3");
    await m.dice("nonna", "sam.radio.1");
    await m.dice("ottone", "sam.fine.4");
    await scenaConte(m);
  }

  /* ---------- il Conte arrotonda π, e anche le coordinate di Ottone ---------- */
  async function scenaConte(m) {
    m.suono("errore");
    m.flag("conteQui", true);
    await m.dice("conte", "conte.1");
    await m.dice("alkashi", "conte.2");
    await m.dice("conte", "conte.3");
    await m.pensa("conte.4");
    await m.dice("conte", "conte.5");
    m.flag("conteQui", false); m.flag("conteFuggito", true);
    m.suono("magia");
    await m.dice("ottone", "conte.6");
    await m.dice("alkashi", "conte.7");
    m.annota("m1.conte");
  }
  async function prendiAstrolabio(m) {
    m.vista("schiena");
    await m.pensa("sam.astrolabio.prendi.1");
    m.flag("astrolabioPreso", true);
    m.togli("palo-gancio");
    m.prendi("astrolabio");
    await m.dice("alkashi", "sam.astrolabio.prendi.2");
  }

  /* numeri scritti come stringhe ("3,14159265"): troncare e arrotondare alla k-esima cifra decimale */
  function tronca(s, k) { var p = s.split(","); return p[0] + "," + p[1].slice(0, k); }
  function arrotonda(s, k) {
    var p = s.split(","), cifre = (p[0] + p[1].slice(0, k)).split("").map(Number);
    if (+p[1][k] >= 5) {
      for (var i = cifre.length - 1; i >= 0; i--) { if (cifre[i] < 9) { cifre[i]++; break; } cifre[i] = 0; if (i === 0) cifre.unshift(1); }
    }
    var t = cifre.join(""), int = t.slice(0, t.length - k);
    return int + "," + t.slice(t.length - k);
  }
  function numeroACaso(intMin, intMax, k) {
    // quattro cifre decimali; quella subito dopo la k-esima è 5 o più, così troncare e arrotondare danno risultati diversi
    var dec = "";
    for (var i = 0; i < 4; i++) dec += i === k ? String(5 + Math.floor(Math.random() * 5)) : String(Math.floor(Math.random() * 10));
    if (dec[k - 1] === "9") dec = dec.slice(0, k - 1) + "4" + dec.slice(k);
    return (intMin + Math.floor(Math.random() * (intMax - intMin + 1))) + "," + dec;
  }
  function giri(m) {
    var g = m.stato.flag.giriCoordinate;
    if (!g) {
      var k1 = M.a_caso([3, 4]), k2 = M.a_caso([1, 2]), k3 = 3 - k2;
      g = [
        { cosa: "pi", x: "3,14159265", modo: "tronca", k: k1 },
        { cosa: "latitudine", x: numeroACaso(36, 42, k2), modo: "arrotonda", k: k2 },
        { cosa: "longitudine", x: numeroACaso(64, 68, k3), modo: "tronca", k: k3 }
      ];
      m.flag("giriCoordinate", g);
    }
    return g;
  }
  async function coordinate(m) {
    if (m.flag("coordinateFatte")) return "sam.ottone.giaRegolato";
    var g = giri(m);
    await m.dice("ottone", "coord.inizio");
    for (var i = m.stato.flag.giroFatto || 0; i < g.length; i++) {
      var r = g[i], fai = r.modo === "tronca" ? tronca : arrotonda, altro = r.modo === "tronca" ? arrotonda : tronca;
      var giusta = fai(r.x, r.k), cand = [[altro(r.x, r.k), "modo"], [fai(r.x, r.k + 1), "cifra"], [fai(r.x, r.k - 1), "cifra"], [altro(r.x, r.k + 1), "cifra"]];
      var opz = [[giusta, "giusta"]], visti = {}; visti[giusta] = true;
      cand.forEach(function (c) { if (opz.length < 4 && !visti[c[0]] && !/,$/.test(c[0])) { visti[c[0]] = true; opz.push(c); } });
      M.mescola(opz);
      var param = { x: r.x, cosa: Lingue.semplice("coord.cosa." + r.cosa), modo: Lingue.semplice("coord.modo." + r.modo), pos: Lingue.semplice("coord.pos." + r.k), k: r.k, c: r.x.split(",")[1][r.k], g: giusta };
      await M.finoAlGiusto(m, "coord.domanda", param, opz, function (tipo) {
        return m.dice("ottone", tipo === "modo" ? "coord.errore.modo." + r.modo : "coord.errore.cifra", param);
      }, "m3-" + r.modo);
      m.flag("giroFatto", i + 1);
      m.suono("magia");
      await m.dice("ottone", "coord.giusto." + r.modo, param);
    }
    m.flag("coordinateFatte", true);
    m.togli("astrolabio");
    m.annota("m1.arrotonda");
    await m.dice("ottone", "coord.fine.1");
    await m.dice("alkashi", "coord.fine.2");
    await m.cartello("fermata.titolo", "fermata.sotto", 3400);
    await m.dice("ottone", "fermata.1");
    await m.pensa("fermata.2");
  }

  Motore.aggiungi("oggetti", {
    palo: { icona: "ogg-palo", nome: "ogg.palo", descrizione: "ogg.palo.d", suAltro: "palo.altro" },
    gancio: { icona: "ogg-gancio", nome: "ogg.gancio", descrizione: "ogg.gancio.d", suAltro: "gancio.altro" },
    "palo-gancio": { icona: "ogg-palo-gancio", nome: "ogg.paloGancio", descrizione: "ogg.paloGancio.d", suAltro: "paloGancio.altro" },
    astrolabio: { icona: "ogg-astrolabio", nome: "ogg.astrolabio", descrizione: "ogg.astrolabio.d", loSapevi: "ogg.astrolabio.ls", suAltro: "astrolabio.altro" },
    chiavi: { icona: "ogg-chiavi", nome: "ogg.chiavi", descrizione: "ogg.chiavi.d", suAltro: "chiavi.altro" }
  });
  Motore.aggiungi("combinazioni", [
    { a: "palo", b: "gancio", fai: async function (m) {
      m.togli("palo"); m.togli("gancio"); m.prendi("palo-gancio");
      await m.pensa("comb.paloGancio");
    } }
  ]);
  Grafica.definizioni(`
    <symbol id="ogg-palo" viewBox="0 0 140 140"><rect x="64" y="6" width="12" height="128" rx="5" fill="#8a5a2a" stroke="#1d1428" stroke-width="3" transform="rotate(40 70 70)"/></symbol>
    <symbol id="ogg-gancio" viewBox="0 0 140 140"><g transform="translate(46 22) scale(2)"><path d="M12 2 L12 20 Q12 30 4 28 Q-1 26 3 20" fill="none" stroke="#1d1428" stroke-width="6" stroke-linecap="round"/>
      <path d="M12 2 L12 20 Q12 30 4 28 Q-1 26 3 20" fill="none" stroke="#c8a04a" stroke-width="3" stroke-linecap="round"/></g></symbol>
    <symbol id="ogg-palo-gancio" viewBox="0 0 140 140"><g transform="rotate(40 70 70)"><rect x="64" y="20" width="12" height="114" rx="5" fill="#8a5a2a" stroke="#1d1428" stroke-width="3"/>
      <path d="M70 22 L70 8 Q70 -2 60 0" fill="none" stroke="#1d1428" stroke-width="7" stroke-linecap="round"/><path d="M70 22 L70 8 Q70 -2 60 0" fill="none" stroke="#c8a04a" stroke-width="3.5" stroke-linecap="round"/></g></symbol>
    <symbol id="ogg-chiavi" viewBox="0 0 140 140"><g stroke="#1d1428" stroke-width="3" fill="#e8b84a"><circle cx="46" cy="46" r="20" fill="none" stroke="#e8b84a" stroke-width="7"/>
      <path d="M58 58 L118 98 L112 108 L104 102 L98 110 L88 104 L50 68 Z"/><path d="M36 64 L28 120 L42 122 L46 70 Z"/><path d="M58 40 L122 30 L124 42 L116 44 L118 54 L106 54 L60 52 Z"/></g></symbol>
  `);

  Mat1.aiutiStanze.samarcanda = function (m) {
    if (!m.flag("chiaviPescate")) {
      if (m.ha("palo-gancio")) return { id: "s-pesca", chi: "ottone", chiavi: ["aiuto2.p3"] };
      return { id: "s-attrezzo", chi: "ottone", chiavi: ["aiuto2.p1", "aiuto2.p2", "aiuto2.p3"] };
    }
    if (fatte(m) < 4) return { id: "s-chiavi-" + fatte(m), chi: "ottone", chiavi: ["aiuto2.c1", "aiuto2.c2", "aiuto2.c3"] };
    if (!m.flag("astrolabioPreso")) return { id: "s-astrolabio", chi: "ottone", chiavi: ["aiuto3.a1", "aiuto3.a2", "aiuto3.a3"] };
    if (!m.flag("coordinateFatte")) return { id: "s-coord", chi: "ottone", chiavi: ["aiuto3.c1", "aiuto3.c2", "aiuto3.c3"] };
    return { id: "s-fine", chi: "ottone", chiavi: ["aiuto2.fine"] };
  };

  Motore.stanzaDef("samarcanda").entrata = async function (m) {
    chiavi(m);
    if (m.flag("samarcandaVista")) return;
    m.flag("samarcandaVista", true);
    await m.cartello("sam.cartello", "sam.cartello.sotto", 3000);
    await m.dice("ottone", "sam.arrivo.1");
    await m.pensa("sam.arrivo.2");
    await m.dice("alkashi", "sam.arrivo.3");
    await m.dice("alkashi", "sam.arrivo.4");
    await m.pensa("sam.arrivo.5");
  };
})();
