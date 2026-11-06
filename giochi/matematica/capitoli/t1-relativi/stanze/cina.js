/* =====================================================================
   Matematica · terze · Capitolo 1 · Stanza: REGNO DI WEI, ANNO 263 — lo studio di Liu Hui (Lez. 2 e 3)
   Catena: parlare con Liu Hui (i bastoncini neri sono spariti) → smascherare la "mercante di seta"
   con un bivio di classe sul suo conto sbagliato → lei fugge: carta-parola «MIEI» e sacchetto annodato
   → coltellino dallo scaffale + sacchetto = bastoncini neri → darli a Liu Hui → TAVOLO DEI BASTONCINI:
   quattro conti del granaio (concordi, discordi, sottrazione con le due regole, addizione algebrica),
   rossi = positivi, neri = negativi, le coppie rosso-nero si annullano; risultato con il tastierino.
   Fatti storici verificati: CAPITOLI.md (Liu Hui, commento del 263; rossi positivi e neri negativi nel suo testo).
   ===================================================================== */
(function () {
  Motore.aggiungi("oggetti", {
    sacchetto: { icona: "ogg-sacchetto", nome: "ogg.sacchetto", descrizione: "ogg.sacchetto.d", suAltro: "sacchetto.altro" },
    coltellino: { icona: "ogg-coltellino", nome: "ogg.coltellino", descrizione: "ogg.coltellino.d", suAltro: "coltellino.altro" },
    bastoncini: { icona: "ogg-bastoncini-neri", nome: "ogg.bastoncini", descrizione: "ogg.bastoncini.d", suAltro: "bastoncini.altro" },
    carta2: { icona: "ogg-cartaparola", nome: "ogg.carta2", descrizione: "ogg.carta2.d", suAltro: "carta.altro" },
    lampada: { icona: "ogg-lampada", nome: "ogg.lampada", descrizione: "ogg.lampada.d", suAltro: "lampada.altro" }
  });
  Motore.aggiungi("personaggi", {
    liuhui: { nome: "nome.liuhui", colore: "#9fd0ff", voce: { altezza: 150, timbro: "triangle", passo: 0.1, volume: 0.04 } },
    mercante: { nome: "nome.mercante", colore: "#d89aff", voce: { altezza: 210, timbro: "sawtooth", passo: 0.1, volume: 0.025 } }
  });
  Motore.aggiungi("figurine", {
    liuhui: { nome: "fig.liuhui.nome", anni: "fig.liuhui.anni", paese: "fig.liuhui.paese", testo: "fig.liuhui.testo", ritratto: "liuhui" }
  });
  Motore.aggiungi("combinazioni", [
    { a: "coltellino", b: "sacchetto", fai: async function (m) {
      m.togli("sacchetto");
      m.prendi("bastoncini");
      await m.pensa("t1c.taglia");
      await m.dice("penna", "t1c.taglia.penna");
    } }
  ]);

  /* ---------- stili del tavolo dei bastoncini ---------- */
  (function () {
    var s = document.createElement("style");
    s.textContent =
      ".tv-espr { text-align: center; font-size: 46px; font-weight: 800; color: #f6ecd8; margin: 4px 0 10px; direction: ltr; }" +
      ".tv-gruppi { display: flex; justify-content: center; align-items: flex-end; gap: 30px; flex-wrap: wrap; min-height: 120px; padding: 16px; border-radius: 14px; background: #e8d0a0; direction: ltr; }" +
      ".tv-gruppo { display: flex; flex-direction: column; align-items: center; gap: 6px; }" +
      ".tv-bastoni { display: flex; gap: 6px; flex-wrap: wrap; max-width: 330px; justify-content: center; }" +
      ".tv-b { width: 12px; height: 70px; border-radius: 3px; border: 2px solid #1d1428; }" +
      ".tv-b.rosso { background: #c8302a; } .tv-b.nero { background: #1a1a1a; }" +
      ".tv-b.via { animation: tv-via .7s ease-out forwards; }" +
      "@keyframes tv-via { 0% { box-shadow: 0 0 0 0 #fff6a0; } 40% { box-shadow: 0 0 18px 8px #fff6a0; background: #fff6a0; } 100% { opacity: 0; transform: scale(.2) translateY(-30px); } }" +
      ".tv-etich { font-weight: 800; color: #4a2414; font-size: 22px; }" +
      ".tv-regola { margin: 12px 0 0; padding: 12px 16px; border-radius: 12px; background: #24384a; border-inline-start: 8px solid #7fe3c4; font-size: 22px !important; }" +
      ".tv-tasti { display: flex; justify-content: center; gap: 10px; flex-wrap: wrap; }";
    document.head.appendChild(s);
  })();

  /* ---------- i conti del granaio: numeri diversi a ogni partita ---------- */
  function cifra(min, max) { return Rel3.a_caso(min, max); }
  function nuoviConti() {
    var a = cifra(2, 6), b = cifra(2, 6);
    var p = cifra(2, 9), q; do { q = cifra(2, 9); } while (q === p);
    var segnoP = Math.random() < 0.5 ? 1 : -1;
    var s = cifra(2, 6), t = cifra(s + 2, 9);
    var alg; do { alg = [0, 1, 2, 3].map(function (i) { return cifra(1, 8) * (i % 2 ? 1 : -1) * (Math.random() < 0.25 ? -1 : 1); }); }
    while (alg.reduce(function (x, y) { return x + y; }, 0) === 0);
    return [
      { tipo: "concordi", termini: [-a, -b] },
      { tipo: "discordi", termini: [segnoP * p, -segnoP * q] },
      { tipo: "sottrazione", termini: [-s, -t], sottrai: true },
      { tipo: "algebrica", termini: alg }
    ];
  }
  function tra(n) { return "(" + Rel3.scrivi(n) + ")"; }
  /* l'espressione come si scrive sul quaderno */
  function espressione(c) {
    if (c.tipo === "algebrica") {
      return c.termini.map(function (n, i) { return (i === 0 ? (n < 0 ? "−" : "") : (n < 0 ? " − " : " + ")) + Math.abs(n); }).join("");
    }
    return tra(c.termini[0]) + (c.sottrai ? " − " : " + ") + tra(c.termini[1]);
  }
  function risultato(c) {
    if (c.sottrai) return c.termini[0] - c.termini[1];
    return c.termini.reduce(function (x, y) { return x + y; }, 0);
  }

  /* il pannello con la tavola: i bastoncini, il pulsante per girarli (sottrazione) e per annullare le coppie */
  function tavolo(m, c, numero) {
    var termini = c.termini.slice(), girato = !c.sottrai, annullato = false;
    var rossi = function () { return termini.reduce(function (s, n) { return s + (n > 0 ? n : 0); }, 0); };
    var neri = function () { return termini.reduce(function (s, n) { return s + (n < 0 ? -n : 0); }, 0); };
    return m.pannello(function (p, chiudi) {
      function disegna(animaVia) {
        p.innerHTML = "";
        var h = document.createElement("h2");
        h.innerHTML = Lingue.html("t1c.tv.titolo", { n: String(numero) });
        p.appendChild(h);
        var e = document.createElement("div"); e.className = "tv-espr num";
        e.textContent = girato && c.sottrai ? tra(termini[0]) + " + " + tra(termini[1]) : espressione(c);
        p.appendChild(e);
        var g = document.createElement("div"); g.className = "tv-gruppi";
        var daAnnullare = animaVia ? Math.min(rossi(), neri()) : 0, tolti = { r: 0, n: 0 };
        termini.forEach(function (n, i) {
          var gr = document.createElement("div"); gr.className = "tv-gruppo";
          var b = document.createElement("div"); b.className = "tv-bastoni";
          for (var k = 0; k < Math.abs(n); k++) {
            var r = document.createElement("span"), col = n > 0 ? "r" : "n";
            r.className = "tv-b " + (n > 0 ? "rosso" : "nero");
            if (tolti[col] < daAnnullare) { r.className += " via"; tolti[col]++; }
            b.appendChild(r);
          }
          gr.appendChild(b);
          var et = document.createElement("div"); et.className = "tv-etich num";
          et.textContent = c.sottrai && i === 1 && !girato ? "−(" + Rel3.scrivi(n) + ")" : Rel3.scrivi(n);
          gr.appendChild(et);
          g.appendChild(gr);
        });
        p.appendChild(g);
        var t = document.createElement("div"); t.className = "tv-tasti";
        function tasto(chiave, fai, principale) {
          var b = document.createElement("button");
          b.className = "pn-tasto" + (principale ? " principale" : "");
          b.innerHTML = Lingue.html(chiave);
          b.addEventListener("click", function (ev) { ev.stopPropagation(); fai(); });
          t.appendChild(b);
        }
        if (!girato) tasto("t1c.tv.gira", function () {
          termini[1] = -termini[1]; girato = true; Suoni.effetto("magia"); disegna();
        }, true);
        else if (!annullato && rossi() > 0 && neri() > 0) tasto("t1c.tv.annulla", function () {
          annullato = true; Suoni.effetto("magia"); disegna(true);
          setTimeout(function () {
            var x = Math.min(rossi(), neri());
            // dopo il lampo restano solo i bastoncini di un colore
            var restoR = rossi() - x, restoN = neri() - x;
            termini = restoR ? [restoR] : (restoN ? [-restoN] : []);
            disegna();
          }, 750);
        }, true);
        else tasto("t1c.tv.scrivi", chiudi, true);
        p.appendChild(t);
        var regola = document.createElement("p"); regola.className = "tv-regola";
        regola.innerHTML = Lingue.html(!girato ? "t1c.tv.regola.gira" : (annullato || !(rossi() && neri()) ? "t1c.tv.regola.conta" : "t1c.tv.regola.annulla"),
          { s: Rel3.scrivi(c.termini[1]), o: Rel3.scrivi(-c.termini[1]) });
        p.appendChild(regola);
      }
      disegna();
    }, { chiudibile: false });
  }

  /* un conto: tavolo, poi la risposta scritta; ogni errore tipico ha la sua spiegazione */
  async function unConto(m, c, numero) {
    var giusta = risultato(c), espr = espressione(c);
    await m.dice("liuhui", "t1c.conto." + c.tipo, { espr: espr });
    m.aiutoQui({ id: "h-conto" + numero, chi: "penna", chiavi: ["t1c.h." + c.tipo, "t1c.h.conta", "t1c.h.sol"], param: { espr: espr, g: Rel3.scrivi(giusta) } });
    await tavolo(m, c, numero);
    await Rel3.finoAlGiusto(m, "t1c.conto.domanda", { espr: espr }, { segno: true, max: 3 }, giusta, async function (n) {
      var assoluti = c.termini.reduce(function (s, x) { return s + Math.abs(x); }, 0);
      var tipo;
      if (n === -giusta) tipo = "segno";
      else if (c.sottrai && n === c.termini[0] + c.termini[1]) tipo = "sottrazione";
      else if (c.tipo !== "concordi" && Math.abs(n) === assoluti) tipo = "assoluti";
      else tipo = "calcolo";
      m.errore("t1c-" + c.tipo + "-" + tipo);
      await m.dice("penna", "t1c.err." + tipo, { x: Rel3.scrivi(n), g: Rel3.scrivi(giusta), espr: espr });
    });
    m.aiutoQui(null);
    await m.dice("liuhui", "t1c.giusto." + c.tipo, { espr: espr, g: Rel3.scrivi(giusta) });
  }

  async function contiDelGranaio(m) {
    if (!m.stato.flag.conti) m.flag("conti", nuoviConti());
    var conti = m.stato.flag.conti, fatti = m.stato.flag.contiFatti || 0;
    for (var i = fatti; i < conti.length; i++) {
      await unConto(m, conti[i], i + 1);
      m.flag("contiFatti", i + 1);
      if (i === 0) m.annota("t1c.q.concordi");
      if (i === 1) m.annota("t1c.q.discordi");
      if (i === 2) m.annota("t1c.q.sottrazione");
      if (i === 3) m.annota("t1c.q.algebrica");
    }
    m.flag("granaioFatto", true);
    await m.dice("liuhui", "t1c.fine.1");
    await m.dice("liuhui", "t1c.fine.2");
    m.figurina("liuhui");
    await m.dice("penna", m.flag("carta2Presa") ? "t1c.fine.3b" : "t1c.fine.3");
    await m.pensa("t1c.fine.4");
    await Rel3.sblocca(m, "india");
  }

  /* ---------- la mercante: un conto sbagliato da smascherare (bivio di classe) ---------- */
  async function smaschera(m) {
    var a = Rel3.a_caso(2, 5), b = Rel3.a_caso(a + 2, 9);
    var p = { a: String(a), b: String(b), giusta: Rel3.scrivi(a - b), suo: Rel3.scrivi(a + b), meno: Rel3.scrivi(-(a + b)), rov: Rel3.scrivi(b - a) };
    await m.dice("mercante", "t1c.merc.vanto", p);
    m.aiutoQui({ id: "h-merc", chi: "penna", chiavi: ["t1c.h.merc.1", "t1c.h.merc.2", "t1c.h.merc.3"], param: p });
    for (;;) {
      var v = await m.scegli(Rel3.mescola([
        { testo: "t1c.merc.op.giusta", valore: "giusta", param: p },
        { testo: "t1c.merc.op.suo", valore: "suo", param: p },
        { testo: "t1c.merc.op.meno", valore: "meno", param: p },
        { testo: "t1c.merc.op.rov", valore: "rov", param: p }
      ]), "t1c.merc.bivio", p);
      if (v === "giusta") break;
      m.suono("errore"); m.errore("t1c-mercante-" + v);
      await m.dice("penna", "t1c.merc.err." + v, p);
    }
    m.suono("prendi");
    m.aiutoQui(null);
    await m.pensa("t1c.merc.giusta", p);
    await m.dice("mercante", "t1c.merc.smascherata.1");
    m.suono("magia");
    m.effetto("lampo-meno", 1310, 450, 1200);
    m.flag("smascherata", true);
    await m.dice("parolona", "t1c.merc.smascherata.2");
    await m.dice("narratore", "t1c.merc.smascherata.3");
    await m.dice("penna", "t1c.merc.smascherata.4");
  }

  async function dialogoLiu(m) {
    var opz = [
      { testo: "t1c.dlg.chi", valore: "chi" },
      { testo: "t1c.dlg.bastoncini", valore: "bastoncini" },
      { testo: "t1c.dlg.libro", valore: "libro" }
    ];
    if (m.flag("granaioFatto")) opz.push({ testo: "t1c.dlg.cerchio", valore: "cerchio" });
    if (m.flag("lioneArrivo") && !m.flag("lampadaData")) opz.push({ testo: "t1c.dlg.lampada", valore: "lampada" });
    opz.push({ testo: "t1c.dlg.ciao", valore: "ciao" });
    var v = await m.scegli(opz);
    if (v === "chi") { await m.dice("liuhui", "t1c.dlg.chi.r1"); await m.dice("liuhui", "t1c.dlg.chi.r2"); }
    if (v === "bastoncini") {
      await m.dice("liuhui", "t1c.dlg.bastoncini.r1");
      await m.dice("liuhui", m.flag("bastonciniDati") ? "t1c.dlg.bastoncini.r3" : "t1c.dlg.bastoncini.r2");
    }
    if (v === "libro") { await m.dice("liuhui", "t1c.dlg.libro.r1"); await m.dice("liuhui", "t1c.dlg.libro.r2"); }
    if (v === "cerchio") { await m.dice("liuhui", "t1c.dlg.cerchio.r1"); await m.dice("penna", "t1c.dlg.cerchio.r2"); }
    if (v === "lampada") {
      await m.dice("liuhui", "t1c.lamp.dono.1");
      m.flag("lampadaData", true); m.prendi("lampada");
      await m.dice("liuhui", "t1c.lamp.dono.2");
      await m.dice("penna", "t1c.lamp.dono.3");
    }
    if (v === "ciao") await m.dice("liuhui", "t1c.dlg.ciao.r");
  }

  async function rendiColtellino(m) {
    if (m.ha("sacchetto")) return "t1c.liu.coltellino";
    m.togli("coltellino");
    await m.dice("liuhui", "t1c.liu.coltellinoReso");
  }

  async function dareBastoncini(m) {
    m.togli("bastoncini");
    m.flag("bastonciniDati", true);
    await m.dice("liuhui", "t1c.dati.1");
    await m.dice("liuhui", "t1c.dati.2");
    m.annota("t1c.q.colori");
    await m.dice("penna", "t1c.dati.3");
  }

  Motore.stanza("cina", {
    sfondo: "cina",
    pavimento: { xMin: 200, xMax: 1150, yMin: 760, yMax: 880 },
    scala: { lontano: { y: 760, s: 0.94 }, vicino: { y: 880, s: 1 } },
    attori: [
      { id: "zara", simbolo: "zara-fronte", viste: { fronte: "zara-fronte", profilo: "zara-profilo", schiena: "zara-schiena" },
        vista: [-110, -600, 230, 615], piedi: [5, 0], altezza: 480, x: 300, y: 830, dir: 1 },
      { id: "liuhui", simbolo: "liuhui", vista: [-110, -600, 230, 615], piedi: [0, 0], altezza: 500, x: 520, y: 790, dir: 1, fisso: true },
      { id: "mercante", simbolo: "parolona-mercante", vista: [-150, -720, 300, 735], piedi: [0, 0], altezza: 540, x: 1320, y: 800, dir: -1, fisso: true,
        visibile: function (m) { return !m.flag("smascherata"); } }
    ],
    elementi: [
      { id: "penna", classe: "penna-el", personaggio: "penna", x: 130, y: 330, larghezza: 80, altezza: 128,
        svg: '<svg viewBox="-70 -230 150 240"><use href="#penna" x="-70" y="-230" width="150" height="240"/></svg>' },
      { id: "rossi-vaso", classe: "", x: 606, y: 596, larghezza: 46, altezza: 50,
        svg: '<svg viewBox="0 0 46 50"><g stroke="#1d1428" stroke-width="2"><rect x="8" y="4" width="5" height="46" fill="#c8302a" transform="rotate(-10 10 27)"/><rect x="20" y="0" width="5" height="50" fill="#c8302a"/><rect x="32" y="4" width="5" height="46" fill="#c8302a" transform="rotate(10 34 27)"/></g></svg>' },
      { id: "neri-vaso", classe: "compare", x: 970, y: 596, larghezza: 46, altezza: 50,
        svg: '<svg viewBox="0 0 46 50"><g stroke="#1d1428" stroke-width="2"><rect x="8" y="4" width="5" height="46" fill="#1a1a1a" transform="rotate(-10 10 27)"/><rect x="20" y="0" width="5" height="50" fill="#1a1a1a"/><rect x="32" y="4" width="5" height="46" fill="#1a1a1a" transform="rotate(10 34 27)"/></g></svg>',
        visibile: function (m) { return m.flag("bastonciniDati"); } },
      { id: "coltellino", classe: "", x: 446, y: 446, larghezza: 70, altezza: 70,
        svg: '<svg viewBox="0 0 140 140"><use href="#ogg-coltellino"/></svg>',
        visibile: function (m) { return !m.flag("coltellinoPreso"); } },
      { id: "sacchetto", classe: "compare", x: 1286, y: 500, larghezza: 80, altezza: 80,
        svg: '<svg viewBox="0 0 140 140"><use href="#ogg-sacchetto"/></svg>',
        visibile: function (m) { return m.flag("smascherata") && !m.flag("sacchettoPreso"); } },
      { id: "carta2", classe: "compare", x: 1200, y: 790, larghezza: 74, altezza: 74,
        svg: '<svg viewBox="0 0 140 140"><use href="#ogg-cartaparola"/></svg>',
        visibile: function (m) { return m.flag("smascherata") && !m.flag("carta2Presa"); } }
    ],
    entrata: async function (m) {
      if (m.flag("cinaArrivo")) return;
      m.flag("cinaArrivo", true);
      await m.cartello("t1c.titolo", "t1c.sottotitolo", 3000);
      await m.dice("narratore", "t1c.arrivo.1");
      await m.dice("liuhui", "t1c.arrivo.2");
      await m.dice("liuhui", "t1c.arrivo.3");
      await m.pensa("t1c.arrivo.4");
      await m.dice("penna", "t1c.arrivo.5");
    },
    hotspot: [
      { id: "liuhui", nome: "t1c.hs.liuhui", forma: "M430 290 H610 V790 H430 Z", arrivo: [660, 820], verso: -1,
        guarda: "t1c.liu.guarda", usa: "t1c.liu.usa", parla: dialogoLiu,
        con: { bastoncini: dareBastoncini, sacchetto: "t1c.liu.sacchetto", coltellino: rendiColtellino, carta2: "t1c.liu.carta" },
        conAltro: "t1c.liu.altro" },
      { id: "mercante", nome: "t1c.hs.mercante", forma: "M1190 230 H1450 V800 H1190 Z", arrivo: [1130, 830], verso: 1,
        presente: function (m) { return !m.flag("smascherata"); },
        guarda: "t1c.merc.guarda",
        usa: "t1c.merc.usa",
        parla: async function (m) {
          await m.dice("mercante", "t1c.merc.parla.1");
          await m.dice("penna", "t1c.merc.parla.2");
          await smaschera(m);
        },
        conAltro: "t1c.merc.altro" },
      { id: "carretto", nome: "t1c.hs.carretto", forma: "M1176 500 H1436 V752 H1176 Z", arrivo: [1130, 830], verso: 1,
        presente: function (m) { return m.flag("smascherata"); },
        guarda: function (m) { return m.flag("sacchettoPreso") ? "t1c.carr.guarda2" : "t1c.carr.guarda"; },
        usa: async function (m) {
          if (m.flag("sacchettoPreso")) return "t1c.carr.usa2";
          m.flag("sacchettoPreso", true); m.prendi("sacchetto");
          await m.pensa("t1c.sacchetto.prendi");
        },
        parla: "t1c.carr.parla" },
      { id: "carta2", nome: "t1c.hs.carta", forma: "M1190 780 H1284 V870 H1190 Z", arrivo: [1120, 840], verso: 1,
        presente: function (m) { return m.flag("smascherata") && !m.flag("carta2Presa"); },
        guarda: "t1c.carta.guarda",
        usa: async function (m) {
          m.flag("carta2Presa", true); m.prendi("carta2");
          await m.pensa("t1c.carta.prendi");
          await m.dice("penna", "t1c.carta.penna");
          m.annota("t1c.q.carta");
        },
        parla: "t1c.carta.parla" },
      { id: "scaffale", nome: "t1c.hs.scaffale", forma: "M250 220 H530 V600 H250 Z", arrivo: [390, 800], vista: "schiena",
        guarda: function (m) { m.annota("t1c.q.problemi"); return "t1c.scaff.guarda"; }, usa: "t1c.scaff.usa", parla: "t1c.scaff.parla" },
      { id: "coltellino", nome: "t1c.hs.coltellino", forma: "M440 450 H520 V510 H440 Z", arrivo: [470, 800], vista: "schiena",
        presente: function (m) { return !m.flag("coltellinoPreso"); },
        guarda: "t1c.colt.guarda",
        usa: async function (m) {
          m.flag("coltellinoPreso", true); m.prendi("coltellino");
          await m.pensa("t1c.colt.prendi");
          await m.dice("liuhui", "t1c.colt.liu");
        },
        parla: "t1c.colt.parla" },
      { id: "tavolo", nome: "t1c.hs.tavolo", forma: "M590 600 H1030 V770 H590 Z", arrivo: [800, 850], vista: "schiena",
        guarda: function (m) { return m.flag("bastonciniDati") ? "t1c.tav.guarda2" : "t1c.tav.guarda"; },
        usa: async function (m) {
          if (!m.flag("bastonciniDati")) return "t1c.tav.usa";
          if (m.flag("granaioFatto")) return "t1c.tav.usa2";
          await contiDelGranaio(m);
        },
        parla: "t1c.tav.parla",
        con: { bastoncini: "t1c.tav.bastoncini" } },
      { id: "finestra", nome: "t1c.hs.finestra", forma: "M600 190 H1000 V480 H600 Z", arrivo: [800, 790], vista: "schiena",
        guarda: "t1c.fin.guarda", usa: "t1c.fin.usa", parla: "t1c.fin.parla" },
      { id: "lampada", nome: "t1c.hs.lampada", forma: "M1070 400 H1150 V760 H1070 Z", arrivo: [1060, 830], verso: 1,
        guarda: "t1c.lamp.guarda", parla: "t1c.lamp.parla",
        usa: async function (m) {
          if (m.flag("lampadaData")) return "t1c.lamp.usa2";
          if (!m.flag("lioneArrivo")) return "t1c.lamp.usa";
          await m.pensa("t1c.lamp.chiedi");
          await m.dice("liuhui", "t1c.lamp.dono.1");
          m.flag("lampadaData", true); m.prendi("lampada");
          await m.dice("liuhui", "t1c.lamp.dono.2");
          await m.dice("penna", "t1c.lamp.dono.3");
        } },
      { id: "treno", nome: "t1c.hs.treno", forma: "M-10 170 H150 V690 H-10 Z", arrivo: [220, 830], verso: -1,
        guarda: "t1c.treno.guarda",
        usa: Rel3.sali,
        parla: "t1c.treno.parla" }
    ]
  });

  /* ---------- aiuti a gradini ---------- */
  Rel3.aiutiStanze.cina = function (m) {
    if (!m.flag("smascherata")) return { id: "c-merc", chi: "penna", chiavi: ["t1c.aiuto.merc1", "t1c.aiuto.merc2", "t1c.aiuto.merc3"] };
    if (!m.flag("bastonciniDati") && !m.ha("bastoncini")) {
      if (!m.flag("sacchettoPreso")) return { id: "c-sacco", chi: "penna", chiavi: ["t1c.aiuto.sacco1", "t1c.aiuto.sacco2"] };
      return { id: "c-nodo", chi: "penna", chiavi: m.flag("coltellinoPreso") ? ["t1c.aiuto.nodo2", "t1c.aiuto.nodo3"] : ["t1c.aiuto.nodo1", "t1c.aiuto.nodo2", "t1c.aiuto.nodo3"] };
    }
    if (!m.flag("bastonciniDati")) return { id: "c-dai", chi: "penna", chiavi: ["t1c.aiuto.dai1", "t1c.aiuto.dai2"] };
    if (!m.flag("granaioFatto")) return { id: "c-conti", chi: "penna", chiavi: ["t1c.aiuto.conti1", "t1c.aiuto.conti2", "t1c.aiuto.conti3"] };
    if (!m.flag("carta2Presa")) return { id: "c-carta", chi: "penna", chiavi: ["t1c.aiuto.carta1"] };
    if (m.flag("lioneArrivo") && !m.flag("lampadaData")) return { id: "c-lampada", chi: "penna", chiavi: ["t1c.aiuto.lamp1", "t1c.aiuto.lamp2"] };
    return { id: "c-treno", chi: "penna", chiavi: ["t1c.aiuto.treno1"] };
  };
})();
