/* =====================================================================
   Matematica · Capitolo 1 · Stanza: OLANDA, intorno al 1600 — la spiaggia (puzzle 4)
   Frazione generatrice di decimali limitati e periodici (regola usata in classe:
   numeratore = numero senza virgola − parte non periodica; denominatore = tanti 9 quante
   cifre del periodo, poi tanti 0 quante cifre dell'antiperiodo; limitati: 1 e tanti 0 quante cifre decimali).
   Personaggio storico: Simon Stevin (Stevino), il suo carro a vela e la notazione a cerchietti.
   Oggetti: setaccio → occhiali di Stevino → taccuino; aringa → il gabbiano lascia la corda della vela.
   Pannello degli ingranaggi: si monta numeratore e denominatore. I numeri cambiano a ogni partita.
   ===================================================================== */
(function () {
  var M = Mat1;
  var LIM = [["0", "25"], ["1", "4"], ["0", "75"], ["2", "5"], ["0", "125"], ["3", "2"]];
  var SEMP = [["0", "", "3"], ["1", "", "6"], ["0", "", "27"], ["2", "", "3"], ["0", "", "4"], ["1", "", "81"]];
  var MISTO = [["2", "1", "6"], ["0", "1", "6"], ["0", "8", "3"], ["1", "2", "5"], ["0", "0", "5"], ["0", "3", "18"]];
  var CERCHI = "⓪①②③④⑤";

  /* un decimale: { tipo, intero, anti, periodo } (per i limitati: anti = cifre decimali, periodo = "") */
  function decimali(m) {
    var d = m.stato.flag.decimaliStevino;
    if (!d) {
      var l = M.a_caso(LIM), s = M.a_caso(SEMP), x = M.a_caso(MISTO);
      d = [{ tipo: "limitato", intero: l[0], anti: l[1], periodo: "" },
           { tipo: "semplice", intero: s[0], anti: "", periodo: s[2] },
           { tipo: "misto", intero: x[0], anti: x[1], periodo: x[2] }];
      m.flag("decimaliStevino", d);
    }
    return d;
  }
  function scrittura(d) { return d.intero + "," + d.anti + (d.periodo ? "{per:" + d.periodo + "}" : ""); }
  function generatrice(d) {
    var senza = parseInt(d.intero + d.anti + d.periodo, 10);
    if (!d.periodo) return { n: senza, d: Math.pow(10, d.anti.length), senza: senza };
    var nonPer = parseInt(d.intero + d.anti, 10);
    return { n: senza - nonPer, d: parseInt(new Array(d.periodo.length + 1).join("9") + new Array(d.anti.length + 1).join("0"), 10), senza: senza, nonPer: nonPer };
  }
  function stevino(d) {          // 0,25 → 0⓪2①5②
    var s = d.intero + CERCHI[0];
    d.anti.split("").forEach(function (c, i) { s += c + CERCHI[i + 1]; });
    return s;
  }
  function montati(m) { return m.stato.flag.ingranaggi || 0; }
  function carroPronto(m) { return montati(m) >= 3 && m.flag("velaLibera"); }

  Grafica.definizioni(`
    <symbol id="ogg-setaccio" viewBox="0 0 140 140"><g stroke="#1d1428" stroke-width="3"><ellipse cx="70" cy="74" rx="52" ry="40" fill="#b8905a"/>
      <ellipse cx="70" cy="74" rx="42" ry="31" fill="#e8dcc0"/><path d="M34 62 L106 62 M30 74 L110 74 M34 86 L106 86 M50 46 L50 102 M70 44 L70 104 M90 46 L90 102" stroke="#8a7a5a" stroke-width="2"/></g></symbol>
    <symbol id="ogg-occhiali" viewBox="0 0 140 140"><g stroke="#1d1428" stroke-width="5" fill="#cfe4f0" fill-opacity=".6"><circle cx="44" cy="72" r="24"/><circle cx="96" cy="72" r="24"/>
      <path d="M68 70 Q70 62 72 70" fill="none"/><path d="M20 66 L6 54 M120 66 L134 54" fill="none"/></g></symbol>
    <symbol id="ogg-taccuino" viewBox="0 0 140 140"><g stroke="#1d1428" stroke-width="3"><rect x="28" y="20" width="84" height="104" rx="6" fill="#5a3a2a"/>
      <rect x="36" y="26" width="70" height="92" rx="3" fill="#f3e8cc"/><path d="M44 46 L98 46 M44 62 L98 62 M44 78 L84 78" stroke="#6a4424" stroke-width="2.5"/>
      <circle cx="92" cy="94" r="8" fill="none" stroke="#6a4424" stroke-width="2.5"/></g></symbol>
    <symbol id="ogg-aringa" viewBox="0 0 140 140"><g stroke="#1d1428" stroke-width="3" stroke-linejoin="round">
      <path d="M20 70 Q60 40 104 66 L126 50 L120 70 L126 90 L104 74 Q60 100 20 70 Z" fill="#a8b8c4"/><circle cx="36" cy="66" r="3.5" fill="#1d1428"/>
      <path d="M52 62 Q70 70 88 62" fill="none" stroke="#6a7a88" stroke-width="2"/></g></symbol>
  `);

  var elementi = [
    { id: "carro", visibile: function (m) { return !m.flag("carroPartito"); }, x: 600, y: 300, larghezza: 560, altezza: 460,
      get svg() { var m = Motore._api(); return CarroAVela(m.flag("velaLibera"), montati(m)); } },
    /* il gabbiano sta in piedi sul pennone (in cima all'albero) e tiene in becco la corda che scende alla vela */
    { id: "gabbiano", x: 790, y: 279, larghezza: 100, altezza: 70,
      svg: '<svg viewBox="0 0 80 56" overflow="visible"><path d="M72 24 Q84 60 66 110" fill="none" stroke="#8a6a3a" stroke-width="3"/><g stroke="#1d1428" stroke-width="2.5" stroke-linejoin="round"><path d="M10 34 Q30 16 54 24 L74 20 L60 32 Q40 46 10 34 Z" fill="#f6f2ea"/>' +
        '<path d="M26 28 Q40 6 54 24" fill="#c8ccd0"/><path d="M68 22 L80 24 L68 27" fill="#e8a020"/><circle cx="64" cy="22" r="2" fill="#1d1428"/>' +
        '<path d="M36 38 L34 52 M44 38 L46 52" stroke="#e8a020" stroke-width="3"/></g></svg>',
      visibile: function (m) { return !m.flag("velaLibera"); } },
    { id: "stevino", visibile: function (m) { return !m.flag("carroPartito"); }, classe: "figura", personaggio: "stevino", x: 1190, y: 380, larghezza: 150, altezza: 330,
      get svg() { return FiguraStevino(Motore._api().flag("occhialiResi")); } },
    { id: "setaccio", x: 1380, y: 528, larghezza: 64, altezza: 46,
      svg: Grafica.icona("ogg-setaccio"), visibile: function (m) { return !m.flag("setaccioPreso"); } },
    { id: "cesta", x: 1440, y: 590, larghezza: 110, altezza: 80,
      svg: '<svg viewBox="0 0 110 80"><g stroke="#1d1428" stroke-width="3" stroke-linejoin="round"><path d="M8 30 L102 30 L92 76 L18 76 Z" fill="#b8905a"/>' +
        '<path d="M14 44 L96 44 M16 58 L94 58" stroke="#8a6a3a" stroke-width="2"/><path d="M20 30 Q40 6 60 26 Q76 8 94 30 Z" fill="#a8b8c4"/></g></svg>' },
    { id: "occhiali-sabbia", x: 548, y: 790, larghezza: 50, altezza: 26,
      svg: '<svg viewBox="0 0 50 26"><g stroke="#1d1428" stroke-width="2.5" fill="#cfe4f0" fill-opacity=".7"><circle cx="14" cy="13" r="9"/><circle cx="36" cy="13" r="9"/><path d="M23 12 L27 12"/></g></svg>',
      visibile: function (m) { return m.flag("occhialiTrovati") && !m.flag("occhialiPresi"); } }
  ];

  Motore.stanza("spiaggia", {
    sfondo: "spiaggia",
    pavimento: { xMin: 140, xMax: 1500, yMin: 640, yMax: 870 },
    scala: { lontano: { y: 640, s: 0.66 }, vicino: { y: 870, s: 0.9 } },
    attori: [
      { id: "leo", simbolo: "leo-fronte", viste: { fronte: "leo-fronte", profilo: "leo-profilo", schiena: "leo-schiena" },
        vista: [-110, -600, 230, 615], piedi: [5, 0], altezza: 560, x: 320, y: 790, dir: 1 }
    ],
    elementi: elementi,
    hotspot: [
      { id: "carro", presente: function (m) { return !m.flag("carroPartito"); }, nome: "hs.carro", forma: "M640 560 L1160 560 L1160 760 L640 760 Z", arrivo: [900, 800], vista: "schiena",
        guarda: function (m) { return montati(m) >= 3 ? "spi.carro.guardaPronto" : "spi.carro.guarda"; },
        usa: function (m) { return ingranaggi(m); },
        parla: "spi.carro.parla",
        con: { taccuino: function (m) { return ingranaggi(m); } } },
      { id: "gabbiano", nome: "hs.gabbiano", forma: "M780 260 L900 260 L900 360 L780 360 Z", arrivo: [900, 760], vista: "schiena",
        presente: function (m) { return !m.flag("velaLibera"); },
        guarda: "spi.gabbiano.guarda", usa: "spi.gabbiano.usa", parla: "spi.gabbiano.parla",
        con: { aringa: async function (m) {
          m.togli("aringa");
          await m.pensa("spi.gabbiano.aringa.1");
          m.suono("magia");
          m.flag("velaLibera", true);
          await m.pensa("spi.gabbiano.aringa.2");
          await m.dice("stevino", "spi.gabbiano.aringa.3");
          if (carroPronto(m)) await partenza(m);
        }, setaccio: "spi.gabbiano.setaccio" } },
      { id: "vela", presente: function (m) { return !m.flag("carroPartito"); }, nome: "hs.vela", forma: "M860 340 L920 340 L920 620 L860 620 Z", arrivo: [900, 760], vista: "schiena",
        guarda: function (m) { return m.flag("velaLibera") ? "spi.vela.guardaLibera" : "spi.vela.guarda"; },
        usa: function (m) { return m.flag("velaLibera") ? "spi.vela.usaLibera" : "spi.vela.usa"; },
        parla: "spi.vela.parla" },
      { id: "stevino", presente: function (m) { return !m.flag("carroPartito"); }, nome: "hs.stevino", forma: "M1200 380 L1330 380 L1330 710 L1200 710 Z", arrivo: [1160, 790], verso: 1,
        guarda: function (m) { return m.flag("occhialiResi") ? "spi.stevino.guardaOcchiali" : "spi.stevino.guarda"; },
        usa: "spi.stevino.usa",
        parla: async function (m) {
          m.figurina("stevino");
          var v = await m.scegli([
            { testo: "spi.dlg.chi", valore: "chi" },
            { testo: "spi.dlg.carro", valore: "carro" },
            { testo: "spi.dlg.cerchi", valore: "cerchi" },
            { testo: "spi.dlg.ciao", valore: "ciao" }
          ]);
          if (v === "chi") { await m.dice("stevino", "spi.dlg.chi.r1"); await m.dice("stevino", "spi.dlg.chi.r2"); }
          if (v === "carro") { await m.dice("stevino", "spi.dlg.carro.r1"); await m.dice("stevino", "spi.dlg.carro.r2"); await m.pensa("spi.dlg.carro.r3"); }
          if (v === "cerchi") { await m.dice("stevino", "spi.dlg.cerchi.r1"); await m.dice("stevino", "spi.dlg.cerchi.r2"); }
          if (v === "ciao") await m.dice("stevino", m.flag("occhialiResi") ? "spi.dlg.ciao.r" : "spi.dlg.ciao.senza");
        },
        con: { occhiali: async function (m) {
          m.togli("occhiali"); m.flag("occhialiResi", true);
          await m.dice("stevino", "spi.occhiali.resi.1");
          await m.dice("stevino", "spi.occhiali.resi.2");
          m.prendi("taccuino");
          await leggiTaccuino(m);
        }, aringa: "spi.stevino.aringa", setaccio: "spi.stevino.setaccio" } },
      { id: "setaccio", nome: "hs.setaccio", forma: "M1370 516 L1456 516 L1456 580 L1370 580 Z", arrivo: [1380, 700], vista: "schiena",
        presente: function (m) { return !m.flag("setaccioPreso"); },
        guarda: "spi.setaccio.guarda",
        usa: async function (m) { m.flag("setaccioPreso", true); m.prendi("setaccio"); await m.pensa("spi.setaccio.prendi"); },
        parla: "spi.setaccio.parla" },
      { id: "cesta", nome: "hs.cesta", forma: "M1440 586 L1552 586 L1552 672 L1440 672 Z", arrivo: [1420, 720], verso: 1,
        guarda: "spi.cesta.guarda",
        usa: async function (m) {
          if (m.ha("aringa") || m.flag("velaLibera")) return "spi.cesta.basta";
          await m.pensa("spi.cesta.chiedi");
          await m.dice("stevino", "spi.cesta.ok");
          m.prendi("aringa");
        },
        parla: "spi.cesta.parla" },
      { id: "sabbia", nome: "hs.sabbia", forma: "M470 760 L640 760 L640 850 L470 850 Z", arrivo: [560, 870], vista: "schiena",
        guarda: function (m) { return m.flag("occhialiTrovati") ? "spi.sabbia.guardaDopo" : "spi.sabbia.guarda"; },
        usa: function (m) {
          if (m.flag("occhialiTrovati") && !m.flag("occhialiPresi")) return prendiOcchiali(m);
          return m.flag("occhialiTrovati") ? "spi.sabbia.usaDopo" : "spi.sabbia.usa";
        },
        parla: "spi.sabbia.parla",
        con: { setaccio: async function (m) {
          if (m.flag("occhialiTrovati")) return "spi.sabbia.usaDopo";
          m.vista("schiena");
          await m.pensa("spi.sabbia.setaccio.1");
          m.flag("occhialiTrovati", true);
          m.togli("setaccio");
          await m.pensa("spi.sabbia.setaccio.2");
          await prendiOcchiali(m);
        } } },
      { id: "mare", nome: "hs.mare", forma: "M0 380 L1600 380 L1600 520 L0 520 Z", arrivo: [700, 660], vista: "schiena",
        guarda: "spi.mare.guarda", usa: "spi.mare.usa", parla: "spi.mare.parla" },
      { id: "mulino", nome: "hs.mulino", forma: "M370 260 L500 260 L500 420 L370 420 Z", arrivo: [430, 680], vista: "schiena",
        guarda: "spi.mulino.guarda", usa: "spi.mulino.usa", parla: "spi.mulino.parla" },
      { id: "ottone-sp", nome: "hs.ottone", forma: "M40 450 L240 450 L240 742 L40 742 Z", arrivo: [280, 790], verso: -1,
        guarda: "spi.ottone.guarda",
        usa: async function (m) {
          if (!m.flag("carroPartito")) return "spi.ottone.nonAncora";
          await m.dice("ottone", "spi.ottone.parti");
          m.suono("magia");
          await m.vaiStanza("mercato", [300, 800, 1, "profilo"]);
        },
        parla: function (m) { return m.flag("carroPartito") ? "spi.ottone.parlaFatto" : "spi.ottone.parla"; } }
    ]
  });

  async function prendiOcchiali(m) {
    m.flag("occhialiPresi", true);
    m.prendi("occhiali");
    await m.pensa("spi.occhiali.presi");
  }

  /* il taccuino di Stevino: i numeri sono scritti con i suoi cerchietti */
  async function leggiTaccuino(m) {
    var d = decimali(m)[0], giusta = d.intero + "," + d.anti, param = { s: stevino(d) };
    await m.dice("stevino", "spi.taccuino.1", param);
    var opz = [[giusta, "giusta"], [d.intero + d.anti, "cerchi"], [M.sposta(giusta, -1), "cerchi"], [M.sposta(giusta, 1), "cerchi"], [M.sposta(M.sposta(giusta, -1), -1), "cerchi"]];
    var visti = {}; opz = opz.filter(function (o) { if (visti[o[0]]) return false; visti[o[0]] = true; return true; });
    M.mescola(opz);
    await M.finoAlGiusto(m, "spi.taccuino.domanda", param, opz, function () { return m.dice("stevino", "spi.taccuino.errore", param); }, "m4-cerchi");
    await m.dice("stevino", "spi.taccuino.giusto", { s: param.s, x: giusta });
    m.annota("m1.stevino");
  }

  /* ---------- il pannello degli ingranaggi: numeratore sopra, denominatore sotto ---------- */
  function opzioniNumeratore(d, g) {
    var c = [g.n];
    if (d.periodo) {
      c.push(g.senza);                                   // dimenticata la sottrazione
      if (d.anti) c.push(g.senza - parseInt(d.intero, 10)); // tolta solo la parte intera
      c.push(parseInt(d.periodo, 10));                   // solo il periodo
      c.push(parseInt(d.intero + d.anti + d.periodo + d.periodo, 10) - g.nonPer); // periodo scritto due volte
      c.push(g.n * 10);
    } else {
      c.push(parseInt(d.anti, 10));                      // solo le cifre dopo la virgola
      c.push(g.senza * 10);
    }
    return unici(c);
  }
  function opzioniDenominatore(d, g) {
    var nove = function (k) { return new Array(k + 1).join("9"); }, zeri = function (k) { return new Array(k + 1).join("0"); };
    var c = [g.d];
    if (!d.periodo) { var k = d.anti.length; c.push(Math.pow(10, k + 1), Math.pow(10, Math.max(1, k - 1)), parseInt(nove(k), 10)); }
    else {
      var p = d.periodo.length, a = d.anti.length;
      c.push(parseInt(nove(p) + zeri(a + 1), 10), parseInt(nove(p + Math.max(a, 1)), 10), parseInt("1" + zeri(p), 10));
      if (a) c.push(parseInt(nove(p), 10));
    }
    return unici(c);
  }
  function unici(l) { var v = {}; return l.filter(function (x) { if (x <= 0 || v[x]) return false; v[x] = true; return true; }); }
  function ingranaggioSvg(n, scelto) {
    var d = "";
    for (var k = 0; k < 12; k++) {
      var a = k * Math.PI / 6, b = a + Math.PI / 12;
      d += (k ? "L" : "M") + (50 + 44 * Math.cos(a)).toFixed(1) + " " + (50 + 44 * Math.sin(a)).toFixed(1) + "L" + (50 + 36 * Math.cos(b)).toFixed(1) + " " + (50 + 36 * Math.sin(b)).toFixed(1);
    }
    return '<svg viewBox="0 0 100 100"><path d="' + d + 'Z" fill="' + (scelto ? "#ffd36b" : "#8a8a96") + '" stroke="#1d1428" stroke-width="4"/>' +
      '<circle cx="50" cy="50" r="27" fill="#2a2438" stroke="#1d1428" stroke-width="3"/>' +
      '<text x="50" y="57" text-anchor="middle" font-size="' + (String(n).length > 3 ? 17 : 22) + '" font-weight="800" fill="#fff8e6">' + n + "</text></svg>";
  }

  function pannelloIngranaggio(m, d, i) {
    var g = generatrice(d), nums = M.mescola(opzioniNumeratore(d, g)), dens = M.mescola(opzioniDenominatore(d, g));
    var scelta = { n: null, d: null };
    var param = { x: scrittura(d), np: d.periodo.length, na: d.anti.length, k: d.anti.length, senza: g.senza, non: g.nonPer, n: g.n, d: g.d };
    return m.pannello(function (p, chiudi) {
      function disegna(msg) {
        p.innerHTML = "";
        var h = document.createElement("h2"); h.innerHTML = Lingue.html("spi.ing.titolo", { i: String(i + 1) }); p.appendChild(h);
        var q = document.createElement("p"); q.className = "ing-numero"; q.innerHTML = Lingue.html("spi.ing.numero", param); p.appendChild(q);
        [["n", nums, "spi.ing.sopra"], ["d", dens, "spi.ing.sotto"]].forEach(function (riga) {
          var t = document.createElement("div"); t.className = "ing-etichetta"; t.innerHTML = Lingue.html(riga[2]); p.appendChild(t);
          var r = document.createElement("div"); r.className = "ing-riga";
          riga[1].forEach(function (v) {
            var b = document.createElement("button"); b.className = "ing-tasto" + (scelta[riga[0]] === v ? " scelto" : "");
            b.innerHTML = ingranaggioSvg(v, scelta[riga[0]] === v);
            b.addEventListener("click", function () { scelta[riga[0]] = v; Suoni.effetto("pagina"); disegna(); });
            r.appendChild(b);
          });
          p.appendChild(r);
        });
        if (msg) { var e = document.createElement("div"); e.className = "pn-losapevi"; e.innerHTML = msg; p.appendChild(e); }
        var monta = document.createElement("button"); monta.className = "pn-tasto principale"; monta.innerHTML = Lingue.html("spi.ing.monta");
        monta.disabled = scelta.n === null || scelta.d === null;
        monta.addEventListener("click", function () {
          if (scelta.n * g.d === g.n * scelta.d) { Suoni.effetto("magia"); chiudi(); return; }
          Suoni.effetto("errore");
          var k;
          if (scelta.n !== g.n && scelta.n * g.d !== g.n * scelta.d) {
            m.errore("m4-" + d.tipo + "-num");
            k = !d.periodo ? (scelta.n === parseInt(d.anti, 10) ? "spi.ing.err.lim.dec" : "spi.ing.err.lim.num")
              : scelta.n === g.senza ? "spi.ing.err.dimenticato" : scelta.n === parseInt(d.periodo, 10) ? "spi.ing.err.periodo"
              : d.anti && scelta.n === g.senza - parseInt(d.intero, 10) ? "spi.ing.err.intero" : "spi.ing.err.num";
          }
          if (!k || scelta.d !== g.d) {
            if (scelta.d !== g.d) { m.errore("m4-" + d.tipo + "-den"); k = (k ? k + "+" : "") + (d.periodo ? "spi.ing.err.den" : "spi.ing.err.lim.den"); }
          }
          disegna(k.split("+").map(function (c) { return Lingue.html(c, param); }).join("<br>"));
        });
        p.appendChild(monta);
      }
      disegna();
    }, { chiudibile: false });
  }

  async function ingranaggi(m) {
    if (montati(m) >= 3) return m.flag("velaLibera") ? "spi.carro.giaPronto" : "spi.carro.vela";
    if (!m.ha("taccuino")) return m.flag("occhialiResi") ? "spi.carro.serveTaccuino" : "spi.carro.senzaOcchiali";
    var lista = decimali(m);
    if (montati(m) === 0) await m.dice("stevino", "spi.ing.inizio");
    for (var i = montati(m); i < 3; i++) {
      await pannelloIngranaggio(m, lista[i], i);
      m.flag("ingranaggi", i + 1);
      var g = generatrice(lista[i]);
      await m.dice("stevino", "spi.ing.giusto." + lista[i].tipo, { x: scrittura(lista[i]), n: g.n, d: g.d, senza: g.senza, non: g.nonPer });
    }
    m.togli("taccuino");
    m.annota("m1.generatrice");
    await m.dice("stevino", "spi.ing.fine");
    if (carroPronto(m)) await partenza(m);
    else await m.pensa("spi.ing.manca.vela");
  }

  async function partenza(m) {
    m.flag("carroPartito", true);
    await m.dice("stevino", "spi.parte.1");
    m.suono("magia");
    await m.pensa("spi.parte.2");
    await m.dice("stevino", "spi.parte.borsellino");
    m.prendi("borsellino");
    await m.dice("nonna", "spi.radio.1");
    await m.dice("ottone", "spi.parte.3");
  }

  Motore.aggiungi("oggetti", {
    setaccio: { icona: "ogg-setaccio", nome: "ogg.setaccio", descrizione: "ogg.setaccio.d", suAltro: "setaccio.altro" },
    occhiali: { icona: "ogg-occhiali", nome: "ogg.occhiali", descrizione: "ogg.occhiali.d", suAltro: "occhiali.altro" },
    taccuino: { icona: "ogg-taccuino", nome: "ogg.taccuino", descrizione: "ogg.taccuino.d", loSapevi: "ogg.taccuino.ls", suAltro: "taccuino.altro" },
    aringa: { icona: "ogg-aringa", nome: "ogg.aringa", descrizione: "ogg.aringa.d", suAltro: "aringa.altro" }
  });

  Mat1.aiutiStanze.spiaggia = function (m) {
    if (!m.flag("occhialiResi")) {
      if (m.ha("occhiali")) return { id: "p-dai", chi: "ottone", chiavi: ["aiuto4.o3"] };
      return { id: "p-occhiali", chi: "ottone", chiavi: ["aiuto4.o1", "aiuto4.o2", "aiuto4.o3"] };
    }
    if (montati(m) < 3) return { id: "p-ing-" + montati(m), chi: "ottone", chiavi: ["aiuto4.i1", "aiuto4.i2", "aiuto4.i3"] };
    if (!m.flag("velaLibera")) return { id: "p-vela", chi: "ottone", chiavi: ["aiuto4.v1", "aiuto4.v2", "aiuto4.v3"] };
    return { id: "p-fine", chi: "ottone", chiavi: ["aiuto4.fine"] };
  };

  Motore.stanzaDef("spiaggia").entrata = async function (m) {
    decimali(m);
    if (m.flag("spiaggiaVista")) return;
    m.flag("spiaggiaVista", true);
    await m.cartello("spi.cartello", "spi.cartello.sotto", 3000);
    await m.dice("ottone", "spi.arrivo.1");
    await m.pensa("spi.arrivo.2");
    await m.dice("stevino", "spi.arrivo.3");
    await m.dice("stevino", "spi.arrivo.4");
    await m.pensa("spi.arrivo.5");
  };
})();
