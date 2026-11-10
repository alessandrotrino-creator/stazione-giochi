/* =====================================================================
   Matematica · Capitolo 1 · Stanza: IL MERCATO, in una città olandese intorno al 1600 (puzzle 5)
   Operazioni con i decimali limitati: moltiplicazione (prezzo), sottrazione (resto),
   addizione (pesetti sulla bilancia), potenza (area della piastrella).
   Per gioco, "oggi al mercato si prova la proposta di Stevino": prezzi in decimi di fiorino
   (è un'invenzione del gioco: Stevino lo propose, ma allora non si fece; lo dirà «Vero o inventato?»).
   Oggetti: borsellino → forma di formaggio tonda → il Conte si distrae → pesetti → bilancia.
   ===================================================================== */
(function () {
  var M = Mat1;
  var FORMAGGI = [[24, 15], [18, 25], [32, 15], [26, 5], [12, 25], [34, 5]];   // prezzo al chilo e peso, in decimi
  var CHILI_GRANDE = [2, 3, 4];                                                  // la forma grande del cartello: il prezzo al chilo si trova dividendo
  var PESI = [100, 100, 50, 25, 20, 10, 5, 5];                                 // in centesimi di chilo
  var BERSAGLI = [235, 185, 270, 145, 315];
  var LATI = [5, 3, 4, 6];        // lati minori di 1: il testo dice che l'area viene più piccola del lato

  function dati(m) {
    var d = m.stato.flag.datiMercato;
    if (!d || !d.k) { d = { f: M.a_caso(FORMAGGI), k: M.a_caso(CHILI_GRANDE), t: M.a_caso(BERSAGLI), l: M.a_caso(LATI) }; m.flag("datiMercato", d); }
    return d;
  }
  function kg(c) { return M.scrivi(c, 2); }
  /* il cartello della forma grande: k chili costano (prezzo al chilo × k) */
  function cartello(d) { return { k: d.k, g: M.scrivi(d.f[0] * d.k, 1), w: M.scrivi(d.f[1], 1) }; }

  var elementi = [
    { id: "formaggiaia", classe: "figura", personaggio: "formaggiaia", x: 330, y: 330, larghezza: 150, altezza: 330,
      svg: FiguraOlandese({ gonna: "#2f5a8a", corpetto: "#8a2a2a", pelle: "#f0c8a8", capelli: "#c89a4a" }) },
    { id: "banco-formaggi", x: 250, y: 520, larghezza: 320, altezza: 190,
      svg: '<svg viewBox="0 0 320 190"><g stroke="#1d1428" stroke-width="3" stroke-linejoin="round">' +
        '<path d="M10 60 L310 60 L300 186 L20 186 Z" fill="#7a4a2a"/><path d="M14 76 L306 76" stroke="#c89a5a" stroke-width="3"/>' +
        '<ellipse cx="70" cy="50" rx="44" ry="16" fill="#e8b830"/><path d="M26 50 L26 64 Q70 80 114 64 L114 50" fill="#d8a020"/>' +
        '<circle cx="170" cy="42" r="24" fill="#d8392b"/><circle cx="228" cy="44" r="22" fill="#d8392b"/><circle cx="274" cy="46" r="20" fill="#e8b830"/>' +
        '<path d="M150 30 Q160 22 170 20" fill="none" stroke="#ff8a7a" stroke-width="4"/></g></svg>' },
    { id: "stevino-m", classe: "figura", personaggio: "stevino", x: 1036, y: 360, larghezza: 140, altezza: 310, svg: FiguraStevino(true) },
    { id: "bilancia", x: 690, y: 300, larghezza: 360, altezza: 360,
      get svg() { var m = Motore._api(); return Bilancia(m.flag("bilanciaFatta") ? 0 : 1); } },
    { id: "conte-m", classe: "figura", personaggio: "conte", x: 1260, y: 330, larghezza: 160, altezza: 200,
      visibile: function (m) { return !m.flag("conteScappatoMercato"); }, svg: FiguraConte() },
    { id: "banco-conte", x: 1190, y: 480, larghezza: 300, altezza: 220,
      svg: '<svg viewBox="0 0 300 220"><g stroke="#1d1428" stroke-width="3" stroke-linejoin="round">' +
        '<path d="M10 70 L290 70 L280 216 L20 216 Z" fill="#d8392b"/><g fill="#fff" stroke="none"><circle cx="50" cy="110" r="9"/><circle cx="110" cy="150" r="9"/><circle cx="170" cy="104" r="9"/><circle cx="230" cy="150" r="9"/><circle cx="260" cy="100" r="7"/><circle cx="70" cy="180" r="7"/></g>' +
        '<path d="M0 70 L300 70 L290 54 L10 54 Z" fill="#1f2a6a"/></g></svg>' },
    { id: "cartello-conte", classe: "etichetta rosa", testo: "mer.cartello.conte", x: 1250, y: 600 },
    { id: "pesetti", x: 1410, y: 448, larghezza: 70, altezza: 60, svg: Grafica.icona("ogg-pesetti"),
      visibile: function (m) { return !m.flag("pesettiPresi"); } },
    { id: "edam-conte", x: 1236, y: 300, larghezza: 70, altezza: 70, svg: Grafica.icona("ogg-edam"),
      visibile: function (m) { return m.flag("conteDistratto") && !m.flag("conteScappatoMercato"); } },
    { id: "piastrella", x: 820, y: 690, larghezza: 140, altezza: 46,
      svg: '<svg viewBox="0 0 140 46"><path d="M30 2 L110 2 L138 44 L2 44 Z" fill="#d8c8a8" stroke="#1d1428" stroke-width="3"/><path d="M40 10 L100 10 L118 36 L22 36 Z" fill="none" stroke="#8a6a44" stroke-width="2" stroke-dasharray="6 4"/></svg>' }
  ];

  Motore.stanza("mercato", {
    sfondo: "mercato",
    pavimento: { xMin: 140, xMax: 1440, yMin: 660, yMax: 870 },
    scala: { lontano: { y: 660, s: 0.74 }, vicino: { y: 870, s: 0.94 } },
    attori: [
      { id: "leo", simbolo: "leo-fronte", viste: { fronte: "leo-fronte", profilo: "leo-profilo", schiena: "leo-schiena" },
        vista: [-110, -600, 230, 615], piedi: [5, 0], altezza: 560, x: 300, y: 800, dir: 1 }
    ],
    elementi: elementi,
    hotspot: [
      { id: "formaggiaia", nome: "hs.formaggiaia", forma: "M340 330 L470 330 L470 520 L340 520 Z", arrivo: [420, 780], vista: "schiena",
        guarda: "mer.formaggiaia.guarda", usa: "mer.formaggiaia.usa",
        parla: async function (m) {
          var d = dati(m);
          await m.dice("formaggiaia", "mer.formaggiaia.p1");
          await m.dice("formaggiaia", m.ha("edam") || m.flag("conteDistratto") ? "mer.formaggiaia.p3" : "mer.formaggiaia.p2", cartello(d));
        },
        con: { borsellino: function (m) { return compra(m); } } },
      { id: "banco-formaggi", nome: "hs.bancoFormaggi", forma: "M250 560 L570 560 L570 710 L250 710 Z", arrivo: [420, 790], vista: "schiena",
        guarda: function (m) { var d = dati(m); return m.flag("formaggioComprato") ? "mer.banco.guardaDopo" : m.pensa("mer.banco.guarda", cartello(d)); },
        usa: function (m) { return compra(m); }, parla: "mer.banco.parla",
        con: { borsellino: function (m) { return compra(m); } } },
      { id: "bilancia", nome: "hs.bilancia", forma: "M700 300 L1040 300 L1040 650 L700 650 Z", arrivo: [870, 760], vista: "schiena",
        guarda: function (m) { return m.flag("bilanciaFatta") ? "mer.bilancia.guardaDopo" : "mer.bilancia.guarda"; },
        usa: function (m) { return m.ha("pesetti") ? pesa(m) : m.flag("bilanciaFatta") ? "mer.bilancia.giaFatta" : "mer.bilancia.usa"; },
        parla: "mer.bilancia.parla",
        con: { pesetti: function (m) { return pesa(m); } } },
      { id: "stevino-m", nome: "hs.stevino", forma: "M1046 360 L1166 360 L1166 670 L1046 670 Z", arrivo: [1020, 790], verso: 1,
        guarda: "mer.stevino.guarda", usa: "mer.stevino.usa",
        parla: async function (m) {
          if (m.flag("piastrellaFatta")) return "mer.stevino.grazie";
          await m.dice("stevino", "mer.stevino.p1");
          await m.dice("stevino", "mer.stevino.p2");
        } },
      { id: "conte-m", nome: "hs.conte", forma: "M1250 330 L1430 330 L1430 700 L1250 700 Z", arrivo: [1200, 790], verso: 1,
        presente: function (m) { return !m.flag("conteScappatoMercato"); },
        guarda: function (m) { return m.flag("conteDistratto") ? "mer.conte.guardaDistratto" : "mer.conte.guarda"; },
        usa: "mer.conte.usa",
        parla: async function (m) {
          if (m.flag("conteDistratto")) return m.dice("conte", "mer.conte.distratto");
          await m.dice("conte", "mer.conte.p1");
          await m.pensa("mer.conte.p2");
          await m.dice("conte", "mer.conte.p3");
        },
        con: { edam: async function (m) {
          m.togli("edam");
          await m.pensa("mer.conte.edam.1");
          await m.dice("conte", "mer.conte.edam.2");
          m.flag("conteDistratto", true);
          await m.dice("conte", "mer.conte.edam.3");
          await m.pensa("mer.conte.edam.4");
        }, borsellino: "mer.conte.borsellino" } },
      { id: "pesetti", nome: "hs.pesetti", forma: "M1400 436 L1490 436 L1490 512 L1400 512 Z", arrivo: [1380, 760], verso: 1,
        presente: function (m) { return !m.flag("pesettiPresi"); },
        guarda: "mer.pesetti.guarda",
        usa: async function (m) {
          if (!m.flag("conteDistratto")) { await m.dice("conte", "mer.pesetti.no"); return; }
          m.flag("pesettiPresi", true); m.prendi("pesetti");
          await m.pensa("mer.pesetti.presi");
        },
        parla: "mer.pesetti.parla" },
      { id: "piastrella", nome: "hs.piastrella", forma: "M800 680 L980 680 L980 744 L800 744 Z", arrivo: [890, 800], vista: "schiena",
        guarda: "mer.piastrella.guarda",
        usa: function (m) { return m.flag("bilanciaFatta") ? piastrella(m) : "mer.piastrella.prima"; },
        parla: "mer.piastrella.parla" },
      { id: "canale", nome: "hs.canale", forma: "M1470 570 L1600 570 L1600 900 L1460 900 Z", arrivo: [1420, 800], verso: 1,
        guarda: "mer.canale.guarda", usa: "mer.canale.usa", parla: "mer.canale.parla" },
      { id: "case", nome: "hs.case", forma: "M0 120 L400 120 L400 540 L0 540 Z", arrivo: [300, 700], vista: "schiena",
        guarda: "mer.case.guarda", usa: "mer.case.usa", parla: "mer.case.parla" },
      { id: "ottone-me", nome: "hs.ottone", forma: "M30 460 L230 460 L230 752 L30 752 Z", arrivo: [270, 800], verso: -1,
        guarda: "mer.ottone.guarda",
        usa: async function (m) {
          if (!m.flag("conteScappatoMercato")) return "mer.ottone.nonAncora";
          await m.dice("ottone", "mer.ottone.parti");
          m.suono("magia");
          await m.vaiStanza("condominio", [420, 800, 1, "profilo"]);
        },
        parla: function (m) { return m.flag("conteScappatoMercato") ? "mer.ottone.parlaFatto" : "mer.ottone.parla"; } }
    ]
  });

  /* ---------- 1. comprare la forma di formaggio tonda: prezzo (×) e resto (−) ---------- */
  async function compra(m) {
    if (m.flag("formaggioComprato")) return "mer.banco.giaComprato";
    if (!m.ha("borsellino")) return "mer.banco.senzaSoldi";
    var d = dati(m), p = d.f[0], w = d.f[1], tot = p * w, giusta = kg(tot);
    var param = { p: M.scrivi(p, 1), w: M.scrivi(w, 1), x: giusta }, pc = cartello(d);
    await m.dice("formaggiaia", "mer.compra.1", pc);
    /* divisione: il prezzo di un chilo */
    var pk = M.scrivi(p, 1), paramD = { k: d.k, g: pc.g, p: pk };
    var opzD = scegliQuattro([[pk, "giusta"], [M.sposta(pk, 1), "virgola"], [M.sposta(pk, -1), "virgola"], [M.scrivi(p * d.k - d.k * 10, 1), "sottrazione"], [M.scrivi(p * d.k * d.k, 1), "moltiplicazione"]]);
    await M.finoAlGiusto(m, "mer.dividi.domanda", paramD, opzD, function (t) { return m.dice("stevino", "mer.errore.dividi." + t, paramD); }, "m5-divisione",
      { id: "mer-dividi", chiavi: ["hq.mer.dividi.indizio", "hq.mer.dividi.regola", "hq.mer.dividi.sol"] });
    await m.dice("formaggiaia", "mer.dividi.giusto", paramD);
    var opz = [[giusta, "giusta"], [M.sposta(giusta, 1), "virgola"], [M.sposta(giusta, -1), "virgola"], [M.scrivi(p + w, 1), "somma"],
      [M.scrivi(Math.floor(p / 10) * Math.floor(w / 10) * 10 + (p % 10) * (w % 10), 1), "pezzi"]];
    opz = scegliQuattro(opz);
    await M.finoAlGiusto(m, "mer.compra.domanda", param, opz, function (t) { return m.dice("stevino", "mer.errore.prezzo." + t, param); }, "m5-prezzo",
      { id: "mer-compra", chiavi: ["hq.mer.compra.indizio", "m1.operazioni", "hq.mer.compra.sol"] });
    var resto = 500 - tot, r = kg(resto), conte = String(5 - Math.round(tot / 100));
    var inte = Math.floor(500 / 100) - Math.floor(tot / 100), dec = Math.abs(0 - tot % 100);
    var opzR = scegliQuattro([[r, "giusta"], [conte, "conte"], [M.scrivi(inte * 100 + dec, 2), "prestito"], [giusta, "totale"], [M.sposta(r, 1), "virgola"]]);
    var paramR = { x: giusta, r: r };
    await M.finoAlGiusto(m, "mer.resto.domanda", paramR, opzR, function (t) { return m.dice("stevino", "mer.errore.resto." + t, paramR); }, "m5-resto",
      { id: "mer-resto", chiavi: ["hq.mer.resto.indizio", "m1.operazioni", "hq.mer.resto.sol"] });
    m.flag("formaggioComprato", true); m.togli("borsellino");
    m.prendi("edam");
    await m.dice("formaggiaia", "mer.compra.fatto", paramR);
    await m.pensa("mer.compra.pensa");
  }
  function scegliQuattro(l) {
    var visti = {}, r = [];
    l.forEach(function (o) { if (r.length < 4 && !visti[o[0]] && !/,$/.test(o[0])) { visti[o[0]] = true; r.push(o); } });
    return M.mescola(r);
  }

  /* ---------- 2. la bilancia: pesetti sul piatto finché l'ago sta dritto (addizione di decimali) ---------- */
  function pesa(m) {
    if (m.flag("bilanciaFatta")) return "mer.bilancia.giaFatta";
    var d = dati(m), messi = PESI.map(function () { return false; });
    // per l'ultimo gradino dell'aiuto: una scelta di pesetti che fa giusto (la più corta), cercata tra tutte
    var migliore = null;
    for (var c = 1; c < (1 << PESI.length); c++) {
      var s = 0, l = [];
      PESI.forEach(function (v, i) { if (c & (1 << i)) { s += v; l.push(v); } });
      if (s === d.t && (!migliore || l.length < migliore.length)) migliore = l;
    }
    M.domanda(m, "mer-bilancia", ["hq.mer.bilancia.indizio", "m1.operazioni", "hq.mer.bilancia.sol"],
      { t: kg(d.t), somma: (migliore || []).map(function (v) { return kg(v); }).join(" + ") });
    return m.dice("formaggiaia", "mer.bilancia.inizio", { t: kg(d.t) }).then(function () {
      return m.pannello(function (p, chiudi) {
        function somma() { return PESI.reduce(function (s, v, i) { return s + (messi[i] ? v : 0); }, 0); }
        function disegna(msg) {
          p.innerHTML = "";
          var h = document.createElement("h2"); h.innerHTML = Lingue.html("mer.bil.titolo", { t: kg(d.t) }); p.appendChild(h);
          var s = somma(), pend = s === d.t ? 0 : s < d.t ? 1 : -1;
          var b = document.createElement("div"); b.className = "bil-disegno"; b.innerHTML = Bilancia(pend); p.appendChild(b);
          var st = document.createElement("p"); st.className = "bil-stato";
          st.innerHTML = Lingue.html(pend === 0 ? "mer.bil.pari" : pend > 0 ? "mer.bil.poco" : "mer.bil.troppo"); p.appendChild(st);
          var r = document.createElement("div"); r.className = "bil-pesi";
          PESI.forEach(function (v, i) {
            var t = document.createElement("button"); t.className = "bil-peso" + (messi[i] ? " messo" : "");
            t.innerHTML = '<span class="bil-n">' + kg(v) + "</span><small>kg</small>";
            t.addEventListener("click", function () { messi[i] = !messi[i]; Suoni.effetto("pagina"); disegna(); });
            r.appendChild(t);
          });
          p.appendChild(r);
          if (msg) { var e = document.createElement("div"); e.className = "pn-losapevi"; e.innerHTML = msg; p.appendChild(e); }
          var ok = document.createElement("button"); ok.className = "pn-tasto principale"; ok.innerHTML = Lingue.html("mer.bil.ok");
          ok.addEventListener("click", function () {
            if (somma() === d.t) { Suoni.effetto("magia"); chiudi(); return; }
            Suoni.effetto("errore"); m.errore("m5-bilancia");
            disegna(Lingue.html("mer.bil.errore", { s: kg(somma()), t: kg(d.t) }));
          });
          p.appendChild(ok);
        }
        disegna();
      }, { chiudibile: false });
    }).then(async function () {
      M.domanda(m, null);
      m.flag("bilanciaFatta", true);
      m.togli("pesetti");
      await m.dice("formaggiaia", "mer.bilancia.fatto", { t: kg(d.t) });
      await m.dice("stevino", "mer.bilancia.stevino");
    });
  }

  /* ---------- 3. la piastrella nuova della pesa: area del quadrato (potenza) ---------- */
  async function piastrella(m) {
    if (m.flag("piastrellaFatta")) return "mer.piastrella.fatta";
    var l = dati(m).l, a = l * l, giusta = M.scrivi(a, 2), param = { l: M.scrivi(l, 1), x: giusta };
    await m.dice("stevino", "mer.piastrella.1", param);
    var opz = scegliQuattro([[giusta, "giusta"], [M.scrivi(2 * l, 1), "doppio"], [M.scrivi(a, 1), "virgola"], [M.scrivi(a, 3), "virgola"]]);
    await M.finoAlGiusto(m, "mer.piastrella.domanda", param, opz, function (t) { return m.dice("stevino", "mer.errore.area." + t, param); }, "m5-potenza",
      { id: "mer-piastrella", chiavi: ["hq.mer.piastrella.indizio", "m1.operazioni", "hq.mer.piastrella.sol"] });
    m.flag("piastrellaFatta", true);
    m.suono("magia");
    await m.dice("stevino", "mer.piastrella.giusto", param);
    m.annota("m1.operazioni");
    await fuga(m);
  }

  /* il Conte si accorge di tutto e scappa nel presente */
  async function fuga(m) {
    await m.dice("conte", "mer.fuga.1");
    await m.dice("conte", "mer.fuga.2");
    m.flag("conteScappatoMercato", true);
    m.suono("magia");
    await m.dice("ottone", "mer.fuga.3");
    await m.pensa("mer.fuga.4");
  }

  Motore.aggiungi("oggetti", {
    borsellino: { icona: "ogg-borsellino", nome: "ogg.borsellino", descrizione: "ogg.borsellino.d", suAltro: "borsellino.altro" },
    edam: { icona: "ogg-edam", nome: "ogg.edam", descrizione: "ogg.edam.d", suAltro: "edam.altro" },
    pesetti: { icona: "ogg-pesetti", nome: "ogg.pesetti", descrizione: "ogg.pesetti.d", suAltro: "pesetti.altro" }
  });

  Mat1.aiutiStanze.mercato = function (m) {
    if (!m.flag("formaggioComprato")) return { id: "me-compra", chi: "ottone", chiavi: ["aiuto5.c1", "aiuto5.c2", "aiuto5.c3"] };
    if (!m.flag("conteDistratto")) return { id: "me-conte", chi: "ottone", chiavi: ["aiuto5.d1", "aiuto5.d2"] };
    if (!m.flag("bilanciaFatta")) return { id: "me-bil", chi: "ottone", chiavi: m.ha("pesetti") ? ["aiuto5.b2", "aiuto5.b3"] : ["aiuto5.b1", "aiuto5.b2", "aiuto5.b3"] };
    if (!m.flag("piastrellaFatta")) return { id: "me-pia", chi: "ottone", chiavi: ["aiuto5.p1", "aiuto5.p2"] };
    return { id: "me-fine", chi: "ottone", chiavi: ["aiuto5.fine"] };
  };

  Motore.stanzaDef("mercato").entrata = async function (m) {
    dati(m);
    if (m.flag("mercatoVisto")) return;
    m.flag("mercatoVisto", true);
    await m.cartello("mer.cartello", "mer.cartello.sotto", 3000);
    await m.dice("stevino", "mer.arrivo.1");
    await m.dice("conte", "mer.arrivo.2");
    await m.pensa("mer.arrivo.3");
  };
})();
