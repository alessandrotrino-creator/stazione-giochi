/* =====================================================================
   Matematica · terze · Capitolo 2 · Stanza: IL VAGONE DEL BINARIO 8 (tutorial, Lez. 1)
   Catena: l'inchiostro di Penna è seccato → prendere il thermos del tè sul sedile e versarlo
   nel calamaio (sciogliere) → Penna scrive i cartellini → incollarli sui pulsanti-frase del
   selettore (tradurre frasi in espressioni: 4 frasi a caso, cartellini in ordine casuale con 2
   trappole) → raccogliere la pagina del diario di Madama Parolona (la stellina vuol dire «più»)
   → primo viaggio: il selettore vuole il VALORE di un'espressione con la x (tastierino).
   ===================================================================== */
(function () {
  /* le frasi del selettore: la traduzione giusta e le trappole (errori tipici) */
  var FRASI = [
    { id: "doppio", giusta: "2n + 3", trappole: { "2(n + 3)": "parentesi-in-piu", "2 + 3n": "ordine" } },
    { id: "triplo", giusta: "3(n + 1)", trappole: { "3n + 1": "parentesi-manca" } },
    { id: "quadrato", giusta: "n² − 5", trappole: { "(n − 5)²": "quadrato-tutto", "2n − 5": "quadrato-doppio" } },
    { id: "suo", giusta: "n + n²", trappole: { "2n²": "somma-prodotto", "n + 2n": "quadrato-doppio" } },
    { id: "somma2", giusta: "(n + 4)²", trappole: { "n² + 4": "parentesi-manca", "n² + 4²": "quadrato-somma" } },
    { id: "meta", giusta: "n : 2 − 1", trappole: { "(n − 1) : 2": "parentesi-in-piu" } },
    { id: "succ", giusta: "n(n + 1)", trappole: { "n · n + 1": "parentesi-manca", "n + 1": "successivo" } }
  ];
  function trovaFrase(id) { return FRASI.filter(function (f) { return f.id === id; })[0]; }

  /* quattro frasi a caso e sei cartellini: le quattro traduzioni giuste e due trappole, mescolati */
  function nuovoSelettore() {
    var scelte = Alg3.mescola(FRASI.slice()).slice(0, 4);
    var trappole = [];
    scelte.forEach(function (f) { Object.keys(f.trappole).forEach(function (t) { trappole.push({ testo: t, frase: f.id }); }); });
    trappole = Alg3.mescola(trappole).filter(function (t) {
      return !scelte.some(function (f) { return f.giusta === t.testo; });
    }).slice(0, 2);
    var cartellini = scelte.map(function (f) { return { testo: f.giusta, frase: f.id, giusta: true }; }).concat(trappole);
    return { frasi: scelte.map(function (f) { return f.id; }), cartellini: Alg3.mescola(cartellini) };
  }

  var elementi = [
    { id: "parolona-fuori", classe: "", x: 966, y: 241, larghezza: 190, altezza: 203,
      svg: '<svg viewBox="-150 -720 300 320" style="overflow:hidden"><use href="#parolona" x="-150" y="-700" width="300" height="715"/></svg>',
      visibile: function (m) { return m.flag("parolonaAlFinestrino"); } },
    { id: "thermos", classe: "", x: 92, y: 538, larghezza: 84, altezza: 96,
      svg: '<svg viewBox="20 0 100 140"><use href="#ogg-thermos" width="140" height="140"/></svg>',
      visibile: function (m) { return !m.flag("thermosPreso"); } },
    { id: "quaderno", classe: "", x: 236, y: 576, larghezza: 104, altezza: 78,
      svg: '<svg viewBox="10 20 120 100"><use href="#ogg-quaderno" width="140" height="140"/></svg>' },
    { id: "penna", classe: "penna-el", personaggio: "penna", x: 1073, y: 443, larghezza: 80, altezza: 128,
      svg: '<svg viewBox="-70 -230 150 240"><use href="#penna" x="-70" y="-230" width="150" height="240"/></svg>',
      stato: function (m) { return m.flag("pennaScrive") ? "" : "secca"; } },
    { id: "display", classe: "display-epoche", x: 1272, y: 318, testo: "t2.sel.display",
      param: function (m) { return { anno: m.stato.flag.trenoAnno ? String(m.stato.flag.trenoAnno) : "· · ·" }; } },
    { id: "pagina-pavimento", classe: "", x: 520, y: 680, larghezza: 78, altezza: 78,
      svg: '<svg viewBox="0 0 140 140"><use href="#ogg-diario"/></svg>',
      visibile: function (m) { return m.flag("paginaATerra") && !m.flag("paginaPresa"); } }
  ];

  Motore.stanza("treno", {
    sfondo: "treno8",
    pavimento: { xMin: 140, xMax: 1320, yMin: 700, yMax: 870 },
    scala: { lontano: { y: 700, s: 0.9 }, vicino: { y: 870, s: 1 } },
    attori: [
      { id: "zara", simbolo: "zara-fronte", viste: { fronte: "zara-fronte", profilo: "zara-profilo", schiena: "zara-schiena" },
        vista: [-110, -600, 230, 615], piedi: [5, 0], altezza: 500, x: 620, y: 800, dir: 1 }
    ],
    elementi: elementi,
    hotspot: [
      { id: "thermos", nome: "t2.hs.thermos", forma: "M88 536 H180 V636 H88 Z", arrivo: [260, 730], vista: "schiena",
        presente: function (m) { return !m.flag("thermosPreso"); },
        guarda: "t2.thermos.guarda",
        usa: async function (m) { m.flag("thermosPreso", true); m.prendi("thermos"); await m.pensa("t2.thermos.prendi"); },
        parla: "t2.thermos.parla" },
      { id: "quaderno", nome: "t2.hs.quaderno", forma: "M230 570 H344 V656 H230 Z", arrivo: [300, 730], vista: "schiena",
        guarda: async function (m) {
          await m.pensa("t2.quad.guarda");
          if (m.flag("pennaScrive")) await m.dice("penna", "t2.quad.penna");
        },
        usa: "t2.quad.usa", parla: "t2.quad.parla" },
      { id: "sedile", nome: "t2.hs.sedile", forma: "M30 390 H430 V530 H30 Z M30 640 H470 V700 H30 Z", arrivo: [320, 730], vista: "schiena",
        guarda: "t2.sedile.guarda", usa: "t2.sedile.usa", parla: "t2.sedile.parla" },
      { id: "penna", nome: "t2.hs.penna", forma: "M1050 420 H1180 V560 H1050 Z", arrivo: [1080, 730], vista: "schiena",
        guarda: function (m) { return m.flag("pennaScrive") ? "t2.penna.guarda2" : "t2.penna.guarda"; },
        usa: function (m) { return m.flag("pennaScrive") ? "t2.penna.usa2" : "t2.penna.usa"; },
        parla: function (m) { return m.flag("pennaScrive") ? dialogoPenna(m) : pennaSecca(m); },
        con: { thermos: versaTe, pagina1: "t2.penna.pagina" },
        conAltro: "t2.penna.altro" },
      { id: "calamaio", nome: "t2.hs.calamaio", forma: "M1074 560 H1146 V604 H1074 Z", arrivo: [1100, 730], vista: "schiena",
        guarda: function (m) { return m.flag("pennaScrive") ? "t2.cal.guarda2" : "t2.cal.guarda"; },
        usa: function (m) { return m.flag("pennaScrive") ? "t2.cal.usa2" : "t2.cal.usa"; },
        parla: "t2.cal.parla",
        con: { thermos: versaTe }, conAltro: "t2.cal.altro" },
      { id: "scrittoio", nome: "t2.hs.scrittoio", forma: "M984 604 H1236 V700 H984 Z", arrivo: [1100, 730], vista: "schiena",
        guarda: "t2.scritt.guarda", usa: "t2.scritt.usa", parla: "t2.scritt.parla" },
      { id: "pagina", nome: "t2.hs.pagina", forma: "M510 670 H610 V760 H510 Z", arrivo: [470, 760], verso: 1,
        presente: function (m) { return m.flag("paginaATerra") && !m.flag("paginaPresa"); },
        guarda: "t2.pag.guarda",
        usa: prendiPagina,
        parla: "t2.pag.parla" },
      { id: "finestrini", nome: "t2.hs.finestrini", forma: "M226 226 H614 V458 H226 Z M866 226 H1254 V458 H866 Z", arrivo: [620, 720], vista: "schiena",
        guarda: "t2.fin.guarda", usa: "t2.fin.usa", parla: "t2.fin.parla" },
      { id: "portabagagli", nome: "t2.hs.portabagagli", forma: "M170 140 H1310 V215 H170 Z", arrivo: [740, 720], vista: "schiena",
        guarda: "t2.rack.guarda", usa: "t2.rack.usa", parla: "t2.rack.parla" },
      { id: "selettore", nome: "t2.hs.selettore", forma: "M1258 296 H1346 V494 H1258 Z", arrivo: [1250, 740], vista: "schiena",
        guarda: function (m) { return m.flag("cartelliniFatti") ? "t2.sel.guarda2" : "t2.sel.guarda"; },
        usa: usaSelettore,
        parla: "t2.sel.parla" },
      { id: "porta", nome: "t2.hs.porta", forma: "M1350 160 H1570 V640 H1350 Z", arrivo: [1310, 770], verso: 1,
        guarda: "t2.porta.guarda", usa: function (m) { return m.flag("partito") ? Alg3.viaggio(m) : "t2.porta.usa"; }, parla: "t2.porta.parla" },
      { id: "freno", nome: "t2.hs.freno", forma: "M1276 128 H1324 V204 H1276 Z", arrivo: [1250, 720], vista: "schiena",
        guarda: "t2.freno.guarda", usa: "t2.freno.usa", parla: "t2.freno.parla" },
      { id: "lampade", nome: "t2.hs.lampade", forma: "M396 88 H464 V130 H396 Z M1096 88 H1164 V130 H1096 Z", arrivo: [740, 720], vista: "schiena",
        guarda: "t2.lampade.guarda", usa: "t2.lampade.usa", parla: "t2.lampade.parla" }
    ]
  });

  /* ---------- Penna, prima e dopo il tè ---------- */
  async function pennaSecca(m) {
    await m.dice("penna", "t2.penna.secca.1");
    await m.dice("penna", "t2.penna.secca.3");
  }
  async function versaTe(m) {
    if (m.flag("pennaScrive")) return "t2.te.gia";
    await m.pensa("t2.te.1");
    m.suono("magia");
    m.effetto("vapore-te", 1110, 560, 1600);
    m.togli("thermos");
    m.flag("pennaScrive", true);
    await m.dice("penna", "t2.te.2");
    await m.dice("penna", "t2.te.3");
    await m.dice("penna", "t2.te.5");
    m.annota("t2.q.lettere");
  }
  async function dialogoPenna(m) {
    var v = await m.scegli([
      { testo: "t2.dlg.lettere", valore: "lettere" },
      { testo: "t2.dlg.parolona", valore: "parolona" },
      { testo: "t2.dlg.algebra", valore: "algebra" },
      { testo: "t2.dlg.ciao", valore: "ciao" }
    ]);
    if (v === "lettere") { await m.dice("penna", "t2.dlg.lettere.r1"); await m.dice("penna", "t2.dlg.lettere.r2"); }
    if (v === "parolona") { await m.dice("penna", "t2.dlg.parolona.r1"); await m.pensa("t2.dlg.parolona.r2"); await m.dice("penna", "t2.dlg.parolona.r3"); }
    if (v === "algebra") { await m.dice("penna", "t2.dlg.algebra.r1"); await m.dice("penna", "t2.dlg.algebra.r2"); }
    if (v === "ciao") await m.dice("penna", "t2.dlg.ciao.r");
  }

  /* ---------- il selettore: prima i cartellini, poi il viaggio ---------- */
  async function usaSelettore(m) {
    if (m.flag("partito")) return Alg3.viaggio(m);
    if (!m.flag("pennaScrive")) return "t2.sel.usa";
    if (!m.flag("cartelliniFatti")) return cartellini(m);
    if (!m.flag("paginaPresa")) return m.dice("penna", "t2.sel.primaPagina");
    return primoViaggio(m);
  }

  function cartellini(m) {
    if (!m.stato.flag.selettore) {
      m.flag("selettore", nuovoSelettore());
      return m.dice("penna", "t2.cart.intro.1").then(function () { return m.dice("penna", "t2.cart.intro.2"); }).then(function () { return pannelloCartellini(m); });
    }
    return pannelloCartellini(m);
  }

  function pannelloCartellini(m) {
    var sel = m.stato.flag.selettore, fatte = {}, scelta = null, messaggio = null;
    var soluzioni = sel.frasi.map(function (id) { return Lingue.semplice("t2.frase." + id) + " → " + trovaFrase(id).giusta; }).join(" · ");
    m.aiutoQui({ id: "h-cart", chi: "penna", chiavi: ["t2.h.cart.1", "t2.h.cart.2", "t2.h.cart.3"], param: { soluzioni: soluzioni } });
    return m.pannello(function (p, chiudi) {
      function disegna() {
        p.innerHTML = "";
        var h = document.createElement("h2"); h.innerHTML = Lingue.html("t2.cart.titolo"); p.appendChild(h);
        var g = document.createElement("p"); g.className = "pn-guida"; g.innerHTML = Lingue.html(scelta ? "t2.cart.guida2" : "t2.cart.guida"); p.appendChild(g);
        var box = document.createElement("div"); box.className = "pn-trad";
        var colF = document.createElement("div"); colF.className = "pn-frasi";
        sel.frasi.forEach(function (id) {
          var b = document.createElement("button");
          b.className = "pn-frase" + (fatte[id] ? " fatta" : "") + (scelta === id ? " scelta" : "");
          b.innerHTML = "<span>" + Lingue.html("t2.frase." + id) + "</span>" + (fatte[id] ? '<span class="incollato num">' + trovaFrase(id).giusta + "</span>" : "");
          b.addEventListener("click", function (e) { e.stopPropagation(); if (fatte[id]) return; scelta = id; messaggio = null; Suoni.effetto("clic"); disegna(); });
          colF.appendChild(b);
        });
        var colC = document.createElement("div"); colC.className = "pn-cartellini";
        sel.cartellini.forEach(function (c, i) {
          var b = document.createElement("button");
          b.className = "pn-cartellino num" + (c.giusta && fatte[c.frase] ? " usato" : "");
          b.style.setProperty("--r", ((i * 7) % 5 - 2) * 1.5 + "deg");
          b.textContent = c.testo;
          b.addEventListener("click", function (e) { e.stopPropagation(); incolla(c); });
          colC.appendChild(b);
        });
        box.appendChild(colF); box.appendChild(colC); p.appendChild(box);
        if (messaggio) { var msg = document.createElement("p"); msg.className = "pn-losapevi"; msg.innerHTML = messaggio; p.appendChild(msg); }
      }
      function incolla(c) {
        if (!scelta) { messaggio = Lingue.html("t2.cart.primaFrase"); disegna(); return; }
        var f = trovaFrase(scelta);
        if (c.testo === f.giusta) {
          fatte[scelta] = true; scelta = null; messaggio = null; Suoni.effetto("prendi");
          if (Object.keys(fatte).length === sel.frasi.length) { chiudi(); return; }
        } else {
          Suoni.effetto("errore");
          var tipo = f.trappole[c.testo];
          if (tipo) {
            m.errore("t2-trad-" + tipo);
            messaggio = Lingue.html("t2.cart.err." + tipo, { c: c.testo, frase: Lingue.semplice("t2.frase." + f.id) });
          } else if (c.giusta) {
            m.errore("t2-trad-altra");
            messaggio = Lingue.html("t2.cart.err.altra", { c: c.testo, altra: Lingue.semplice("t2.frase." + c.frase) });
          } else {
            m.errore("t2-trad-trappola");
            var t2 = trovaFrase(c.frase).trappole[c.testo];
            messaggio = Lingue.html("t2.cart.err.trappola", { c: c.testo }) + " " + Lingue.html("t2.cart.err." + t2 + ".breve");
          }
        }
        disegna();
      }
      disegna();
    }, { chiudibile: true }).then(async function () {
      m.aiutoQui(null);
      if (Object.keys(fatte).length < sel.frasi.length) return;
      m.flag("cartelliniFatti", true);
      m.suono("magia");
      await m.dice("penna", "t2.cart.fatto.1");
      m.annota("t2.q.tradurre");
      await m.dice("penna", "t2.cart.fatto.2");
      if (!m.flag("paginaPresa")) await m.dice("penna", "t2.sel.primaPagina");
    });
  }

  /* ---------- la pagina del diario: la stellina ---------- */
  async function prendiPagina(m) {
    m.flag("paginaPresa", true);
    m.prendi("pagina1");
    await m.pensa("t2.pag.prendi");
    await leggiPagina1(m);
  }
  function leggiPagina1(m) {
    var a = Alg3.a_caso(2, 4), b = Alg3.a_caso(2, 4), mele = function (n) { return '<span class="mele">' + new Array(n + 1).join("●") + "</span>"; };
    return m.pannello(function (p, chiudi) {
      p.innerHTML = "<h2>" + Lingue.html("t2.pag1.titolo") + "</h2>" +
        '<div class="pn-diario"><div>' + Lingue.html("t2.pag1.testo") + "</div>" +
        '<div class="riga">' + mele(a) + Alg3.simbolo("stella") + mele(b) + "<span>→</span>" + mele(a + b) + "</div>" +
        '<div class="riga num">' + a + Alg3.simbolo("stella") + b + " → " + (a + b) + "</div>" +
        '<div class="firma">' + Lingue.html("t2.pag1.firma") + "</div></div>";
      var b2 = document.createElement("button"); b2.className = "pn-tasto principale"; b2.innerHTML = Lingue.html("t2.pag1.capito");
      b2.addEventListener("click", function (e) { e.stopPropagation(); chiudi(); });
      p.appendChild(b2);
    }, { chiudibile: false }).then(async function () {
      var param = { a: String(a), b: String(b), s: String(a + b), p: String(a * b) };
      m.aiutoQui({ id: "h-stella", chi: "penna", chiavi: ["t2.h.stella.1", "t2.h.stella.2", "t2.h.stella.3"], param: param });
      for (;;) {
        var v = await m.scegli(Alg3.mescola([
          { testo: "t2.stella.piu", valore: "piu" },
          { testo: "t2.stella.per", valore: "per", param: param },
          { testo: "t2.stella.meno", valore: "meno" }
        ]), "t2.stella.domanda", param);
        if (v === "piu") { m.suono("prendi"); break; }
        m.suono("errore"); m.errore("t2-diario-stella");
        await m.dice("penna", "t2.stella.err." + v, param);
      }
      m.aiutoQui(null);
      m.flag("stellaCapita", true);
      await m.dice("penna", "t2.stella.giusta");
      await m.pensa("t2.stella.mistero");
      m.annota("t2.q.diario");
      if (m.flag("cartelliniFatti")) await m.dice("penna", "t2.stella.vai");
    });
  }

  /* ---------- il primo viaggio: il valore di un'espressione ---------- */
  async function primoViaggio(m) {
    var meta = Alg3.METE.filter(function (x) { return x.id === "baghdad"; })[0];
    await m.dice("penna", "t2.primo.1");
    await m.dice("penna", "t2.primo.2");
    var ok = await Alg3.calcolaAnno(m, meta);
    if (!ok) return;
    m.flag("partito", true);
    m.flag("trenoAnno", meta.anno);
    m.flag("mete", ["baghdad"]);
    m.annota("t2.q.valore");
    m.suono("magia");
    await m.dice("penna", "t2.primo.ok");
    if (!Motore._haStanza(meta.stanza)) { await m.dice("penna", "t2.viaggio.costruzione", { meta: Lingue.semplice("t2.meta.baghdad") }); return; }
    await m.vaiStanza(meta.stanza, meta.arrivo);
  }

  /* ---------- aiuti a gradini ---------- */
  Alg3.aiutiStanze.treno = function (m) {
    if (!m.flag("thermosPreso")) return { id: "t-thermos", chi: "zara", chiavi: ["t2.aiuto.te1", "t2.aiuto.te2", "t2.aiuto.te3"] };
    if (!m.flag("pennaScrive")) return { id: "t-versa", chi: "zara", chiavi: ["t2.aiuto.versa1", "t2.aiuto.versa2"] };
    if (!m.flag("cartelliniFatti")) return { id: "t-cart", chi: "penna", chiavi: ["t2.aiuto.cart1", "t2.aiuto.cart2"] };
    if (!m.flag("paginaPresa")) return { id: "t-pag", chi: "penna", chiavi: ["t2.aiuto.pag1", "t2.aiuto.pag2"] };
    if (!m.flag("partito")) return { id: "t-sel", chi: "penna", chiavi: ["t2.aiuto.sel1", "t2.aiuto.sel2"] };
    return { id: "t-base", chi: "penna", chiavi: ["t2.aiuto.base1", "t2.aiuto.base2"] };
  };
})();
