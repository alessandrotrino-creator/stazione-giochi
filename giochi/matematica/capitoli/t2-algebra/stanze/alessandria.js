/* =====================================================================
   Matematica · terze · Capitolo 2 · Stanza: ALESSANDRIA D'EGITTO, III SECOLO — il porto delle anfore (Lez. 2 e 3)
   Madama Parolona (travestita da mercante d'olio) ha rubato i COEFFICIENTI e la manovella della gru.
   Catena di oggetti LUNGA, con una deduzione (richiesta della docente: ogni tanto enigmi più articolati):
   le impronte dei tacchi nella farina finiscono sulle pietre → prendere il setaccio del fornaio → riempirlo
   al sacco rovesciato → spargere la farina sul molo: si attacca alle suole UNTE D'OLIO e la pista ricompare
   fino alla catasta → spargerla sulle tre anfore: le ditate unte indicano quella giusta (a caso a ogni partita)
   → aprirla: manovella + pagina 3 del diario (la goccia = «meno») → rimettere la manovella sull'argano.
   LA LEZIONE (più difficile di Baghdad): la gru aggancia solo anfore SIMILI (con trappole), carico totale con il
   TASTIERINO e i segni; coppie uguali / opposte / simili / non simili sulla barca; BIVIO DI CLASSE pa² + qa;
   addizione algebrica di quattro monomi simili (anche yx e un coefficiente 1 non scritto) con il tastierino.
   In dono la tavoletta con il segno di Diofanto per l'incognita (servirà a Tours).
   Fatti storici verificati: CAPITOLI.md (Diofanto, Arithmetica, abbreviazioni, una sola incognita).
   ===================================================================== */
(function () {
  Motore.aggiungi("oggetti", {
    setaccio: { icona: "ogg-setaccio", nome: "ogg.setaccio", descrizione: "ogg.setaccio.d", suAltro: "setaccio.altro" },
    setaccioPieno: { icona: "ogg-setaccio-pieno", nome: "ogg.setaccioPieno", descrizione: "ogg.setaccioPieno.d", suAltro: "setaccioPieno.altro" },
    manovella: { icona: "ogg-manovella", nome: "ogg.manovella", descrizione: "ogg.manovella.d", suAltro: "manovella.altro" },
    pagina3: { icona: "ogg-diario", nome: "ogg.pagina3", descrizione: "ogg.pagina3.d", suAltro: "pagina.altro" },
    tavoletta: { icona: "ogg-tavoletta", nome: "ogg.tavoletta", descrizione: "ogg.tavoletta.d", loSapevi: "ogg.tavoletta.ls", suAltro: "tavoletta.altro" }
  });
  Motore.aggiungi("personaggi", {
    diofanto: { nome: "nome.diofanto", colore: "#a8c8ff", voce: { altezza: 160, timbro: "triangle", passo: 0.09, volume: 0.04 } }
  });
  Motore.aggiungi("figurine", {
    diofanto: { nome: "fig.diofanto.nome", anni: "fig.diofanto.anni", paese: "fig.diofanto.paese", testo: "fig.diofanto.testo", ritratto: "diofanto" }
  });

  /* ---------- stili ---------- */
  (function () {
    var s = document.createElement("style");
    s.textContent =
      ".elemento.barca-al svg { overflow: visible; }" +
      ".elemento.barca-al svg > :not(.acqua) { animation: al-dondola 4s ease-in-out infinite; transform-origin: 210px 120px; }" +
      "@keyframes al-dondola { 50% { transform: rotate(-1deg) translateY(3px); } }" +
      ".elemento.barca-al.storta svg > :not(.acqua) { animation: al-storta 3s ease-in-out infinite; }" +
      "@keyframes al-storta { 0%, 100% { transform: rotate(6deg) translateY(6px); } 50% { transform: rotate(7.5deg) translateY(9px); } }" +
      ".elemento.barca-parolona svg { animation: al-fuga 14s linear infinite alternate; }" +
      "@keyframes al-fuga { from { transform: translateX(0); } to { transform: translateX(-220px); } }" +
      ".effetto.spolvero { width: 260px; height: 140px; margin: -70px 0 0 -130px; border-radius: 50%; background: radial-gradient(ellipse, rgba(255,255,255,.95), rgba(255,255,255,0) 70%); animation: al-spolvero 1.4s ease-out forwards; pointer-events: none; }" +
      "@keyframes al-spolvero { from { transform: scale(.3); opacity: 1; } to { transform: scale(1.6) translateY(-20px); opacity: 0; } }" +
      ".an-appesa { display: flex; align-items: center; justify-content: center; gap: 18px; margin: 0 0 8px; font-size: 22px; direction: ltr; }" +
      ".an-fila { display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; direction: ltr; }" +
      ".an-anfora { font-family: inherit; cursor: pointer; position: relative; width: 112px; height: 150px; border: none; background: none; padding: 0; }" +
      ".an-anfora svg { width: 100%; height: 100%; }" +
      ".an-anfora .et { position: absolute; left: 50%; top: 56%; transform: translate(-50%, -50%); min-width: 76px; padding: 3px 6px; border-radius: 6px; background: #f6ecd0; border: 2px solid #1d1428; color: #1d1428; font-size: 22px; font-weight: 800; white-space: nowrap; }" +
      ".an-anfora.presa { opacity: .25; cursor: default; }" +
      ".an-anfora.grande { width: 96px; height: 128px; cursor: default; }" +
      ".cp-righe { display: grid; grid-template-columns: 1.2fr 1fr; gap: 22px; align-items: start; direction: ltr; }" +
      ".cp-coppia { font-family: inherit; cursor: pointer; padding: 12px 16px; border-radius: 12px; border: 3px solid #1d1428; background: #c89a5a; color: #1d1428; font-size: 28px; font-weight: 800; box-shadow: 0 5px 0 #1d1428; display: flex; justify-content: space-between; align-items: center; gap: 12px; }" +
      ".cp-coppia.scelta { outline: 5px solid #ffd860; }" +
      ".cp-coppia.fatta { background: #3a6a4a; color: #f6ecd0; cursor: default; }" +
      ".cp-coppia .tipo { font-size: 17px; font-weight: 700; padding: 2px 8px; border-radius: 8px; background: #f6ecd0; color: #1d1428; }" +
      ".cp-categorie { display: flex; flex-direction: column; gap: 10px; }" +
      ".cp-cat { font-family: inherit; cursor: pointer; padding: 12px 14px; border-radius: 12px; border: 3px solid #1d1428; background: #f6ecd0; color: #1d1428; font-size: 21px; font-weight: 700; box-shadow: 0 5px 0 #1d1428; }" +
      ".pn-diario .pallini-meno span { display: inline-block; width: 15px; height: 15px; margin: 0 2px; border-radius: 50%; background: #c8402f; vertical-align: middle; }" +
      ".pn-diario .pallini-meno span.via { background: none; border: 2px dashed #c8402f; width: 11px; height: 11px; }";
    document.head.appendChild(s);
  })();

  var ESP = { 0: "⁰", 1: "¹", 2: "²", 3: "³", 4: "⁴", 5: "⁵", 6: "⁶", 7: "⁷", 8: "⁸", 9: "⁹" };
  /* un monomio scritto bene: coefficiente 1 e −1 senza il numero */
  function mono(c, lett) {
    if (c === 1) return lett;
    if (c === -1) return "−" + lett;
    return (c < 0 ? "−" : "") + Math.abs(c) + lett;
  }
  /* una somma di monomi: «7xy − 3yx + xy» */
  function somma(termini) {
    return termini.map(function (t, i) {
      var s = mono(Math.abs(t.c), t.l);
      return i === 0 ? (t.c < 0 ? "−" : "") + s : (t.c < 0 ? " − " : " + ") + s;
    }).join("");
  }
  function anforaHTML(etichetta, classe) {
    return '<svg viewBox="0 0 60 120"><use href="#al-anfora"/></svg><span class="et num">' + etichetta + "</span>";
  }
  var POSIZIONI = ["sinistra", "centro", "destra"];

  /* ---------- la catena: setaccio, farina, impronte, ditate, anfora ---------- */
  async function riempiSetaccio(m) {
    m.togli("setaccio");
    m.prendi("setaccioPieno");
    m.suono("prendi");
    await m.pensa("t2a.setaccio.riempi");
  }
  async function spolveraMolo(m) {
    if (m.flag("impronteViste")) return m.pensa("t2a.molo.gia");
    await m.pensa("t2a.molo.1");
    m.effetto("spolvero", 900, 690, 1400);
    m.suono("magia");
    m.flag("impronteViste", true);
    await m.dice("narratore", "t2a.molo.2");
    await m.dice("penna", "t2a.molo.3");
    await m.dice("parolona", "t2a.molo.4");
    await m.pensa("t2a.molo.5");
  }
  async function spolveraAnfora(m) {
    if (!m.flag("impronteViste")) return m.pensa("t2a.anfora.primaPista");
    if (m.flag("ditateViste")) return m.pensa("t2a.anfora.giaDitate");
    m.effetto("spolvero", 1440, 640, 1400);
    m.suono("magia");
    m.flag("ditateViste", true);
    await m.pensa("t2a.anfora.ditate", { pos: Lingue.semplice("t2a.pos." + POSIZIONI[m.stato.flag.anforaGiusta]) });
    m.togli("setaccioPieno");
    m.flag("setaccioReso", true);
    await m.pensa("t2a.setaccio.riporta");
  }
  function usaAnfora(i) {
    return async function (m) {
      if (m.flag("anforaAperta")) return m.pensa("t2a.anfora.vuota");
      if (!m.flag("ditateViste")) return m.pensa(m.flag("impronteViste") ? "t2a.anfora.quale" : "t2a.anfora.sigillata");
      if (i !== m.stato.flag.anforaGiusta) { m.suono("errore"); return m.pensa("t2a.anfora.noDitate"); }
      m.flag("anforaAperta", true);
      m.suono("prendi");
      await m.pensa("t2a.anfora.apri");
      m.prendi("manovella");
      m.prendi("pagina3");
      await m.dice("penna", "t2a.anfora.penna");
      await leggiPagina3(m);
      await m.dice("diofanto", "t2a.anfora.diofanto");
    };
  }
  async function mettiManovella(m) {
    m.togli("manovella");
    m.flag("manovellaMessa", true);
    m.suono("magia");
    await m.dice("diofanto", "t2a.manov.1");
    await m.dice("diofanto", "t2a.manov.2");
    await lezione(m);
  }

  /* ---------- la pagina 3 del diario: la goccia ---------- */
  function leggiPagina3(m) {
    var a, b;
    do { a = Alg3.a_caso(6, 9); b = Alg3.a_caso(2, a - 2); } while (a % b === 0 && a / b === a - b);
    var c = Alg3.a_caso(5, 9), d; do { d = Alg3.a_caso(1, c - 1); } while (d === b);
    var pallini = function (n, via) { var s = ""; for (var i = 0; i < n; i++) s += '<span class="' + (i >= n - via ? "via" : "") + '"></span>'; return '<span class="pallini-meno">' + s + "</span>"; };
    return m.pannello(function (p, chiudi) {
      p.innerHTML = "<h2>" + Lingue.html("t2a.pag3.titolo") + "</h2>" +
        '<div class="pn-diario"><div>' + Lingue.html("t2a.pag3.testo") + "</div>" +
        '<div class="riga num">' + a + Alg3.simbolo("goccia") + b + "<span>→</span>" + pallini(a, b) + "<span>→</span>" + (a - b) + "</div>" +
        '<div class="riga num">' + c + Alg3.simbolo("goccia") + d + " → " + (c - d) + "</div>" +
        '<div class="firma">' + Lingue.html("t2a.pag3.firma") + "</div></div>";
      var b2 = document.createElement("button"); b2.className = "pn-tasto principale"; b2.innerHTML = Lingue.html("t2.pag1.capito");
      b2.addEventListener("click", function (e) { e.stopPropagation(); chiudi(); });
      p.appendChild(b2);
    }, { chiudibile: false }).then(async function () {
      var par = { a: String(a), b: String(b), r: String(a - b), s: String(a + b) };
      m.aiutoQui({ id: "h-goccia", chi: "penna", chiavi: ["t2a.h.goccia.1", "t2a.h.goccia.2", "t2a.h.goccia.3"], param: par });
      for (;;) {
        var v = await m.scegli(Alg3.mescola([
          { testo: "t2a.goccia.meno", valore: "meno" },
          { testo: "t2a.goccia.diviso", valore: "diviso" },
          { testo: "t2a.goccia.piu", valore: "piu" }
        ]), "t2a.goccia.domanda", par);
        if (v === "meno") { m.suono("prendi"); break; }
        m.suono("errore"); m.errore("t2-diario-goccia");
        await m.dice("penna", "t2a.goccia.err." + v, par);
      }
      m.aiutoQui(null);
      m.flag("gocciaCapita", true);
      await m.dice("penna", "t2a.goccia.giusta", par);
      await m.pensa("t2a.goccia.mistero");
      m.annota("t2a.q.diario3");
    });
  }

  /* ---------- 1. la gru: solo anfore simili a quella appesa ---------- */
  var LETTERE = [["a²b", "ab²", "a²b²", "a²"], ["xy²", "x²y", "x²y²", "y²"], ["ab³", "a³b", "a³b³", "b³"]];
  function nuovaGru() {
    var L = LETTERE[Alg3.a_caso(0, 2)], c0 = Alg3.a_caso(2, 6), k1, k2, S;
    do { k1 = Alg3.a_caso(2, 9); k2 = Alg3.a_caso(2, 9); S = k1 + 1 - k2; } while (k1 === c0 || k2 === c0 || k1 === k2 || Math.abs(S) < 2);
    var simili = [{ c: -c0, simile: true }, { c: k1, simile: true }, { c: 1, simile: true }, { c: -k2, simile: true }].map(function (x) { x.t = mono(x.c, L[0]); return x; });
    var trappole = [{ t: mono(c0, L[1]), tipo: "scambiati" }, { t: mono(c0, L[2]), tipo: "esponente" }, { t: mono(k1, L[3]), tipo: "lettera" }];
    return { L: L[0], c0: c0, S: S, anfore: Alg3.mescola(simili.concat(trappole)) };
  }
  function gru(m) {
    if (!m.stato.flag.gru) m.flag("gru", nuovaGru());
    var G = m.stato.flag.gru, prese = {}, messaggio = null;
    var simili = G.anfore.filter(function (x) { return x.simile; }).map(function (x) { return x.t; }).join(", ");
    m.aiutoQui({ id: "h-gru", chi: "penna", chiavi: ["t2a.h.gru.1", "t2a.h.gru.2", "t2a.h.gru.3"], param: { L: G.L, simili: simili } });
    return m.pannello(function (p, chiudi) {
      function disegna() {
        p.innerHTML = "";
        var h = document.createElement("h2"); h.innerHTML = Lingue.html("t2a.gru.titolo"); p.appendChild(h);
        var ap = document.createElement("div"); ap.className = "an-appesa";
        ap.innerHTML = "<span>" + Lingue.html("t2a.gru.appesa") + '</span><span class="an-anfora grande">' + anforaHTML(mono(G.c0, G.L)) + "</span>";
        p.appendChild(ap);
        var g = document.createElement("p"); g.className = "pn-guida"; g.innerHTML = Lingue.html("t2a.gru.guida"); p.appendChild(g);
        var f = document.createElement("div"); f.className = "an-fila";
        G.anfore.forEach(function (x, i) {
          var b = document.createElement("button");
          b.className = "an-anfora" + (prese[i] ? " presa" : "");
          b.innerHTML = anforaHTML(x.t);
          b.addEventListener("click", function (e) {
            e.stopPropagation(); if (prese[i]) return;
            if (x.simile) {
              prese[i] = true; Suoni.effetto("prendi"); messaggio = Lingue.html("t2a.gru.presa", { t: x.t });
              if (G.anfore.filter(function (y, j) { return y.simile && !prese[j]; }).length === 0) { chiudi(); return; }
            } else {
              Suoni.effetto("errore"); m.errore("t2-gru-" + x.tipo);
              messaggio = Lingue.html("t2a.gru.err." + x.tipo, { t: x.t, L: G.L });
            }
            disegna();
          });
          f.appendChild(b);
        });
        p.appendChild(f);
        if (messaggio) { var msg = document.createElement("p"); msg.className = "pn-losapevi"; msg.innerHTML = messaggio; p.appendChild(msg); }
      }
      disegna();
    }, { chiudibile: true }).then(function () {
      m.aiutoQui(null);
      var tutte = G.anfore.every(function (y, j) { return !y.simile || prese[j]; });
      if (tutte) m.flag("gruFatta", true);
      return tutte;
    });
  }

  /* ---------- 2. il carico totale, con il tastierino ---------- */
  async function carico(m) {
    var G = m.stato.flag.gru, S = G.S;
    var termini = [{ c: G.c0, l: G.L }].concat(G.anfore.filter(function (x) { return x.simile; }).map(function (x) { return { c: x.c, l: G.L }; }));
    var par = { espr: somma(termini), L: G.L, g: mono(S, G.L), c0: String(G.c0), S: String(S).replace("-", "−") };
    var assoluti = termini.reduce(function (s, t) { return s + Math.abs(t.c); }, 0);
    await m.dice("diofanto", "t2a.carico.intro", par);
    m.aiutoQui({ id: "h-carico", chi: "penna", chiavi: ["t2a.h.carico.1", "t2a.h.carico.2", "t2a.h.carico.3"], param: par });
    await Alg3.finoAlGiusto(m, "t2a.carico.domanda", par, { max: 3, segno: true, promemoria: "t2a.carico.prom" }, S, async function (n) {
      var tipo = n === -S ? "segno" : (n === assoluti ? "assoluti" : (n === S - 1 ? "uno" : (n === S - G.c0 ? "appesa" : "calcolo")));
      m.errore("t2-carico-" + tipo);
      await m.dice("penna", "t2a.carico.err." + tipo, Object.assign({ n: String(n).replace("-", "−") }, par));
    });
    m.aiutoQui(null);
    m.flag("caricoFatto", true);
    await m.dice("penna", "t2a.carico.giusta", par);
    m.annota("t2a.q.simili");
  }

  /* ---------- 3. le coppie sulla barca ---------- */
  function nuoveCoppie() {
    var u = Alg3.a_caso(2, 9), o = Alg3.a_caso(2, 9), s1 = Alg3.a_caso(2, 9), s2, n = Alg3.a_caso(2, 9);
    do { s2 = Alg3.a_caso(2, 9); } while (s2 === s1);
    return Alg3.mescola([
      { tipo: "uguali", a: u + "a²b", b: u + "ba²" },
      { tipo: "opposti", a: "−" + o + "x²y", b: o + "x²y" },
      { tipo: "simili", a: s1 + "y³", b: "−" + s2 + "y³" },
      { tipo: "nonsimili", a: n + "ab²", b: n + "a²b" }
    ]);
  }
  var CATEGORIE = ["uguali", "opposti", "simili", "nonsimili"];
  function coppie(m) {
    if (!m.stato.flag.coppie) m.flag("coppie", nuoveCoppie());
    var C = m.stato.flag.coppie, fatte = {}, scelta = null, messaggio = null;
    m.aiutoQui({ id: "h-coppie", chi: "penna", chiavi: ["t2a.h.coppie.1", "t2a.h.coppie.2", "t2a.h.coppie.3"] });
    return m.pannello(function (p, chiudi) {
      function disegna() {
        p.innerHTML = "";
        var h = document.createElement("h2"); h.innerHTML = Lingue.html("t2a.coppie.titolo"); p.appendChild(h);
        var g = document.createElement("p"); g.className = "pn-guida"; g.innerHTML = Lingue.html(scelta === null ? "t2a.coppie.guida" : "t2a.coppie.guida2"); p.appendChild(g);
        var box = document.createElement("div"); box.className = "cp-righe";
        var col = document.createElement("div"); col.className = "cp-categorie";
        C.forEach(function (x, i) {
          var b = document.createElement("button");
          b.className = "cp-coppia num" + (fatte[i] ? " fatta" : "") + (scelta === i ? " scelta" : "");
          b.innerHTML = "<span>" + x.a + "   e   " + x.b + "</span>" + (fatte[i] ? '<span class="tipo">' + Lingue.html("t2a.coppie.cat." + x.tipo) + "</span>" : "");
          b.addEventListener("click", function (e) { e.stopPropagation(); if (fatte[i]) return; scelta = i; messaggio = null; Suoni.effetto("clic"); disegna(); });
          col.appendChild(b);
        });
        var cats = document.createElement("div"); cats.className = "cp-categorie";
        CATEGORIE.forEach(function (k) {
          var b = document.createElement("button"); b.className = "cp-cat"; b.innerHTML = Lingue.html("t2a.coppie.cat." + k);
          b.addEventListener("click", function (e) {
            e.stopPropagation();
            if (scelta === null) { messaggio = Lingue.html("t2a.coppie.primaCoppia"); disegna(); return; }
            var x = C[scelta];
            if (k === x.tipo) {
              fatte[scelta] = true; scelta = null; messaggio = null; Suoni.effetto("prendi");
              if (Object.keys(fatte).length === C.length) { chiudi(); return; }
            } else {
              Suoni.effetto("errore"); m.errore("t2-coppia-" + x.tipo);
              messaggio = Lingue.html("t2a.coppie.err." + x.tipo, { a: x.a, b: x.b });
            }
            disegna();
          });
          cats.appendChild(b);
        });
        box.appendChild(col); box.appendChild(cats); p.appendChild(box);
        if (messaggio) { var msg = document.createElement("p"); msg.className = "pn-losapevi"; msg.innerHTML = messaggio; p.appendChild(msg); }
      }
      disegna();
    }, { chiudibile: true }).then(async function () {
      m.aiutoQui(null);
      if (Object.keys(fatte).length < C.length) return false;
      m.flag("coppieFatte", true);
      m.suono("magia");
      await m.dice("narratore", "t2a.coppie.fatto.1");
      await m.dice("penna", "t2a.coppie.fatto.2");
      m.annota("t2a.q.coppie");
      return true;
    });
  }

  /* ---------- 4. bivio di classe: pa² + qa ---------- */
  async function bivio(m) {
    var p, q; do { p = Alg3.a_caso(2, 6); q = Alg3.a_caso(2, 6); } while (p === q || p * q === p + q);
    var par = { espr: p + "a² + " + q + "a", p: String(p), q: String(q), s: String(p + q), pr: String(p * q) };
    await m.dice("diofanto", "t2a.bivio.intro", par);
    m.aiutoQui({ id: "h-bivio-al", chi: "penna", chiavi: ["t2a.h.bivio.1", "t2a.h.bivio.2", "t2a.h.bivio.3"], param: par });
    for (;;) {
      var v = await m.scegli(Alg3.mescola([
        { testo: "t2a.bivio.op.giusta", valore: "giusta", param: par },
        { testo: "t2a.bivio.op.cubo", valore: "cubo", param: par },
        { testo: "t2a.bivio.op.quadrato", valore: "quadrato", param: par },
        { testo: "t2a.bivio.op.prodotto", valore: "prodotto", param: par }
      ]), "t2a.bivio", par);
      if (v === "giusta") break;
      m.suono("errore"); m.errore("t2-somma-" + v);
      await m.dice("penna", "t2a.bivio.err." + v, par);
    }
    m.suono("prendi"); m.aiutoQui(null);
    m.flag("bivioAlFatto", true);
    await m.dice("diofanto", "t2a.bivio.giusta", par);
    m.annota("t2a.q.nonsimili");
  }

  /* ---------- 5. addizione algebrica di quattro monomi simili, con il tastierino ---------- */
  async function sommaAlgebrica(m) {
    var t1, t2, t4, S;
    do { t1 = Alg3.a_caso(5, 9); t2 = -Alg3.a_caso(2, 6); t4 = -Alg3.a_caso(6, 12); S = t1 + t2 + 1 + t4; }
    while (S === 0 || Math.abs(S) === 1 || S - t2 === -S || S - 1 === -S);
    var termini = [{ c: t1, l: "xy" }, { c: t2, l: "yx" }, { c: 1, l: "xy" }, { c: t4, l: "xy" }];
    var par = { espr: somma(termini), g: mono(S, "xy"), S: String(S).replace("-", "−") };
    var assoluti = Math.abs(t1) + Math.abs(t2) + 1 + Math.abs(t4);
    await m.dice("diofanto", "t2a.somma.intro", par);
    m.aiutoQui({ id: "h-somma-al", chi: "penna", chiavi: ["t2a.h.somma.1", "t2a.h.somma.2", "t2a.h.somma.3"], param: par });
    await Alg3.finoAlGiusto(m, "t2a.somma.domanda", par, { max: 3, segno: true, promemoria: "t2a.somma.prom" }, S, async function (n) {
      var tipo = n === -S ? "segno" : (n === S - t2 ? "ordine" : (n === S - 1 ? "uno" : (n === assoluti ? "assoluti" : "calcolo")));
      m.errore("t2-algebrica-" + tipo);
      await m.dice("penna", "t2a.somma.err." + tipo, Object.assign({ n: String(n).replace("-", "−") }, par));
    });
    m.aiutoQui(null);
    m.flag("sommaFatta", true);
    await m.dice("penna", "t2a.somma.giusta", par);
    m.annota("t2a.q.algebrica");
  }

  /* ---------- i coefficienti tornano: i doni di Diofanto ---------- */
  async function fine(m) {
    m.suono("magia");
    m.effetto("lampo-lettere", 760, 420, 1200);
    m.flag("coefficientiTornati", true);
    await m.dice("penna", "t2a.fine.1");
    await m.dice("diofanto", "t2a.fine.3");
    m.prendi("tavoletta");
    m.flag("tavolettaData", true);
    await m.dice("diofanto", "t2a.fine.4");
    await m.dice("penna", "t2a.fine.5");
    m.figurina("diofanto");
    m.annota("t2a.q.diofanto");
    await Alg3.sblocca(m, "tours");
    await m.dice("penna", "t2a.fine.6");
  }

  async function lezione(m) {
    if (!m.flag("gruFatta")) {
      await m.dice("diofanto", "t2a.gru.intro");
      if (!(await gru(m))) return m.dice("diofanto", "t2a.lez.pausa");
    }
    if (!m.flag("caricoFatto")) await carico(m);
    if (!m.flag("coppieFatte")) {
      await m.dice("diofanto", "t2a.coppie.intro.1");
      await m.dice("diofanto", "t2a.coppie.intro.2");
      if (!(await coppie(m))) return m.dice("diofanto", "t2a.lez.pausa");
    }
    if (!m.flag("bivioAlFatto")) await bivio(m);
    if (!m.flag("sommaFatta")) await sommaAlgebrica(m);
    if (!m.flag("coefficientiTornati")) await fine(m);
  }

  async function dialogoDiofanto(m) {
    var opz = [];
    if (m.flag("manovellaMessa") && !m.flag("coefficientiTornati")) opz.push({ testo: "t2a.dlg.lezione", valore: "lezione" });
    opz.push({ testo: "t2a.dlg.chi", valore: "chi" }, { testo: "t2a.dlg.abbrev", valore: "abbrev" }, { testo: "t2a.dlg.mercante", valore: "mercante" });
    if (m.flag("coefficientiTornati")) opz.push({ testo: "t2a.dlg.incognita", valore: "incognita" });
    opz.push({ testo: "t2a.dlg.ciao", valore: "ciao" });
    var v = await m.scegli(opz);
    if (v === "lezione") return lezione(m);
    if (v === "chi") { await m.dice("diofanto", "t2a.dlg.chi.r1"); await m.dice("diofanto", "t2a.dlg.chi.r2"); }
    if (v === "abbrev") { await m.dice("diofanto", "t2a.dlg.abbrev.r1"); await m.dice("penna", "t2a.dlg.abbrev.r2"); }
    if (v === "mercante") { await m.dice("diofanto", "t2a.dlg.mercante.r1"); await m.dice("penna", "t2a.dlg.mercante.r2"); }
    if (v === "incognita") { await m.dice("diofanto", "t2a.dlg.incognita.r1"); await m.dice("penna", "t2a.dlg.incognita.r2"); }
    if (v === "ciao") await m.dice("diofanto", "t2a.dlg.ciao.r");
  }
  async function dialogoPenna(m) {
    var v = await m.scegli([
      { testo: "t2a.pdlg.dove", valore: "dove" },
      { testo: "t2a.pdlg.rubato", valore: "rubato" },
      { testo: "t2a.pdlg.ciao", valore: "ciao" }
    ]);
    if (v === "dove") { await m.dice("penna", "t2a.pdlg.dove.r1"); await m.dice("penna", "t2a.pdlg.dove.r2"); }
    if (v === "rubato") await m.dice("penna", m.flag("coefficientiTornati") ? "t2a.pdlg.rubato.r2" : "t2a.pdlg.rubato.r1");
    if (v === "ciao") await m.dice("penna", "t2a.pdlg.ciao.r");
  }

  /* la pista delle impronte, dalla farina alla catasta delle anfore */
  var orme = "";
  for (var i = 0; i < 12; i++) {
    var t = i / 11, x = 20 + t * 640, y = 30 + t * 110 + Math.sin(t * 6) * 10, dx = (i % 2 ? 10 : -10);
    orme += '<g><ellipse cx="' + (x + dx * 0.4) + '" cy="' + (y + dx) + '" rx="8" ry="4.5" transform="rotate(18 ' + (x + dx * 0.4) + " " + (y + dx) + ')"/>' +
      '<circle cx="' + (x - 12) + '" cy="' + (y + dx - 3) + '" r="2.5"/></g>';
  }
  var ditate = '<svg viewBox="0 0 40 40"><g fill="#f2e6d0" opacity=".42" transform="translate(6 6) scale(.7)"><ellipse cx="10" cy="12" rx="4" ry="6"/><ellipse cx="19" cy="9" rx="4" ry="6"/><ellipse cx="28" cy="11" rx="4" ry="6"/><ellipse cx="34" cy="20" rx="3.5" ry="5" transform="rotate(30 34 20)"/><ellipse cx="18" cy="28" rx="10" ry="7"/></g></svg>';
  var barca = '<svg viewBox="0 0 420 150" overflow="visible"><g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">' +
    '<path d="M10 70 Q20 140 120 140 L320 140 Q400 140 412 60 L380 78 L40 78 Z" fill="url(#al-legno-v)"/>' +
    '<path d="M24 96 H398 M40 118 H380" stroke="#3a2010" stroke-width="2.5"/>' +
    '<path d="M200 76 V-60" stroke-width="7"/><path d="M200 -50 L330 -20 L200 0 Z" fill="#f2ead6" stroke-width="3"/>' +
    '<circle cx="380" cy="94" r="8" fill="#e8f0ff" stroke-width="2.5"/></g>' +
    '<use href="#al-anfora" x="60" y="0" width="40" height="80"/><use href="#al-anfora" x="100" y="4" width="40" height="76"/><use href="#al-anfora" x="140" y="0" width="40" height="80"/>' +
    '<use href="#al-anfora" x="240" y="2" width="40" height="78"/><use href="#al-anfora" x="280" y="0" width="40" height="80"/><use href="#al-anfora" x="320" y="4" width="40" height="76"/>' +
    '<g class="acqua"><defs><linearGradient id="al-acqua-barca" gradientUnits="userSpaceOnUse" x1="0" y1="104" x2="0" y2="150">' +
    '<stop offset="0" stop-color="#256a8e"/><stop offset="1" stop-color="#1c527a"/></linearGradient></defs>' +
    '<path d="M-20 112 q15 -8 30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 V150 H-20 Z" fill="url(#al-acqua-barca)"/>' +
    '<path d="M10 112 q15 -8 30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0" fill="none" stroke="#e8f8ff" stroke-width="3" stroke-linecap="round" opacity=".7"/></g></svg>';
  var CENTRI = [1350, 1440, 1530];

  Motore.stanza("alessandria", {
    sfondo: "alessandria",
    pavimento: { xMin: 180, xMax: 1280, yMin: 720, yMax: 880 },
    scala: { lontano: { y: 720, s: 0.88 }, vicino: { y: 880, s: 1 } },
    attori: [
      { id: "zara", simbolo: "zara-fronte", viste: { fronte: "zara-fronte", profilo: "zara-profilo", schiena: "zara-schiena" },
        vista: [-110, -600, 230, 615], piedi: [5, 0], altezza: 440, x: 260, y: 850, dir: 1 },
      { id: "diofanto", simbolo: "diofanto", vista: [-110, -600, 230, 615], piedi: [0, 0], altezza: 450, x: 620, y: 790, dir: -1, fisso: true }
    ],
    elementi: [
      { id: "barca-parolona", classe: "barca-parolona", x: 300, y: 380, larghezza: 90, altezza: 80,
        svg: '<svg viewBox="0 0 90 80"><g stroke="#2a1a3a" stroke-width="2"><path d="M8 62 Q45 76 82 62 L76 70 Q45 80 14 70 Z" fill="#4a2a5a"/><path d="M44 62 V8"/><path d="M46 10 L78 32 L72 58 L46 58 Z" fill="#9a48a8"/></g></svg>',
        visibile: function (m) { return m.flag("impronteViste") && !m.flag("coefficientiTornati"); } },
      { id: "barca", classe: "barca-al", x: 950, y: 426, larghezza: 420, altezza: 150, svg: barca,
        stato: function (m) { return m.flag("coppieFatte") ? "" : "storta"; } },
      { id: "penna", classe: "penna-el", personaggio: "penna", x: 540, y: 270, larghezza: 80, altezza: 128,
        svg: '<svg viewBox="-70 -230 150 240" overflow="visible"><use href="#penna" x="-70" y="-230" width="150" height="240"/></svg>' },
      { id: "setaccio", classe: "", x: 282, y: 498, larghezza: 70, altezza: 70,
        svg: '<svg viewBox="0 0 140 140"><use href="#ogg-setaccio"/></svg>',
        visibile: function (m) { return !m.flag("setaccioPreso") || m.flag("setaccioReso"); } },
      { id: "impronte", classe: "impronte", x: 640, y: 640, larghezza: 700, altezza: 170,
        svg: '<svg viewBox="0 0 700 170"><g fill="#f6f0e0" opacity=".5">' + orme + "</g></svg>",
        visibile: function (m) { return m.flag("impronteViste"); } },
      { id: "ditate-0", classe: "", x: CENTRI[0] - 22, y: 630, larghezza: 44, altezza: 44, svg: ditate,
        visibile: function (m) { return m.flag("ditateViste") && m.stato.flag.anforaGiusta === 0; } },
      { id: "ditate-1", classe: "", x: CENTRI[1] - 22, y: 624, larghezza: 44, altezza: 44, svg: ditate,
        visibile: function (m) { return m.flag("ditateViste") && m.stato.flag.anforaGiusta === 1; } },
      { id: "ditate-2", classe: "", x: CENTRI[2] - 22, y: 630, larghezza: 44, altezza: 44, svg: ditate,
        visibile: function (m) { return m.flag("ditateViste") && m.stato.flag.anforaGiusta === 2; } },
      { id: "manovella", classe: "", x: 764, y: 528, larghezza: 64, altezza: 64,
        svg: '<svg viewBox="0 0 140 140"><use href="#ogg-manovella"/></svg>',
        visibile: function (m) { return m.flag("manovellaMessa"); } }
    ],
    entrata: async function (m) {
      if (m.stato.flag.anforaGiusta === undefined) m.flag("anforaGiusta", Alg3.a_caso(0, 2));
      if (m.flag("alessandriaArrivo")) return;
      m.flag("alessandriaArrivo", true);
      await m.cartello("t2a.titolo", "t2a.sottotitolo", 3000);
      await m.dice("narratore", "t2a.arrivo.1");
      await m.dice("diofanto", "t2a.arrivo.2");
      await m.dice("penna", "t2a.arrivo.4");
      await m.pensa("t2a.arrivo.5");
    },
    hotspot: [
      { id: "mare", nome: "t2a.hs.mare", forma: "M600 392 H1600 V570 H600 Z", arrivo: [900, 740], vista: "schiena",
        guarda: "t2a.mare.guarda", usa: "t2a.mare.usa", parla: "t2a.mare.parla" },
      { id: "citta", nome: "t2a.hs.citta", forma: "M150 300 H600 V396 H150 Z", arrivo: [420, 740], vista: "schiena",
        guarda: "t2a.citta.guarda", usa: "t2a.citta.usa", parla: "t2a.citta.parla" },
      { id: "faro", nome: "t2a.hs.faro", forma: "M1160 140 H1250 V400 H1160 Z", arrivo: [1180, 740], vista: "schiena",
        guarda: "t2a.faro.guarda", usa: "t2a.faro.usa", parla: "t2a.faro.parla" },
      { id: "barca-parolona", nome: "t2a.hs.barcaParolona", forma: "M290 376 H400 V464 H290 Z", arrivo: [420, 740], vista: "schiena",
        presente: function (m) { return m.flag("impronteViste") && !m.flag("coefficientiTornati"); },
        guarda: "t2a.bp.guarda", usa: "t2a.bp.usa", parla: "t2a.bp.parla" },
      { id: "gru", nome: "t2a.hs.gru", forma: "M700 140 H1080 V530 H700 Z", arrivo: [800, 740], vista: "schiena",
        guarda: function (m) { return m.flag("manovellaMessa") ? "t2a.gru.guarda2" : "t2a.gru.guarda"; },
        usa: function (m) { return m.flag("manovellaMessa") ? (m.flag("coefficientiTornati") ? "t2a.gru.usa3" : lezione(m)) : "t2a.gru.usa"; },
        parla: "t2a.gru.parla",
        con: { manovella: mettiManovella }, conAltro: "t2a.gru.altro" },
      { id: "barca", nome: "t2a.hs.barca", forma: "M950 450 H1370 V600 H950 Z", arrivo: [1120, 740], vista: "schiena",
        guarda: function (m) { return m.flag("coppieFatte") ? "t2a.barca.guarda2" : "t2a.barca.guarda"; },
        usa: function (m) { return m.flag("manovellaMessa") && !m.flag("coefficientiTornati") ? lezione(m) : "t2a.barca.usa"; },
        parla: "t2a.barca.parla" },
      { id: "argano", nome: "t2a.hs.argano", forma: "M716 528 H830 V600 H716 Z", arrivo: [780, 740], vista: "schiena",
        guarda: function (m) { return m.flag("manovellaMessa") ? "t2a.arg.guarda2" : "t2a.arg.guarda"; },
        usa: function (m) { return m.flag("manovellaMessa") ? (m.flag("coefficientiTornati") ? "t2a.gru.usa3" : lezione(m)) : "t2a.arg.usa"; },
        parla: "t2a.arg.parla",
        con: { manovella: mettiManovella }, conAltro: "t2a.gru.altro" },
      { id: "bitta", nome: "t2a.hs.bitta", forma: "M868 596 H932 V666 H868 Z", arrivo: [900, 740], vista: "schiena",
        guarda: "t2a.bitta.guarda", usa: "t2a.bitta.usa", parla: "t2a.bitta.parla" },
      { id: "gabbiano", nome: "t2a.hs.gabbiano", forma: "M1014 114 H1074 V146 H1014 Z", arrivo: [1000, 740], vista: "schiena",
        guarda: "t2a.gab.guarda", usa: "t2a.gab.usa", parla: "t2a.gab.parla" },
      { id: "fornaio", nome: "t2a.hs.fornaio", forma: "M150 400 H470 V650 H150 Z", arrivo: [320, 750], vista: "schiena",
        guarda: function (m) { return m.flag("setaccioPreso") && !m.flag("setaccioReso") ? "t2a.forn.guarda2" : "t2a.forn.guarda"; }, usa: "t2a.forn.usa", parla: "t2a.forn.parla" },
      { id: "setaccio", nome: "t2a.hs.setaccio", forma: "M276 496 H356 V568 H276 Z", arrivo: [320, 750], vista: "schiena",
        presente: function (m) { return !m.flag("setaccioPreso") || m.flag("setaccioReso"); },
        guarda: "t2a.setaccio.guarda",
        usa: async function (m) {
          if (m.flag("setaccioReso")) return m.pensa("t2a.setaccio.reso");
          m.flag("setaccioPreso", true); m.prendi("setaccio"); await m.pensa("t2a.setaccio.prendi");
        },
        parla: "t2a.setaccio.parla" },
      { id: "sacco", nome: "t2a.hs.sacco", forma: "M430 590 H700 V716 H430 Z", arrivo: [560, 740], vista: "schiena",
        guarda: "t2a.sacco.guarda", usa: "t2a.sacco.usa", parla: "t2a.sacco.parla",
        con: { setaccio: riempiSetaccio, setaccioPieno: "t2a.sacco.pieno" }, conAltro: "t2a.sacco.altro" },
      { id: "molo", nome: "t2a.hs.molo", forma: "M700 668 H1290 V722 H700 Z", arrivo: [980, 750], vista: "schiena",
        guarda: function (m) { return m.flag("impronteViste") ? "t2a.molo.guarda2" : "t2a.molo.guarda"; }, usa: "t2a.molo.usa", parla: "t2a.molo.parla",
        con: { setaccioPieno: spolveraMolo, setaccio: "t2a.molo.vuoto" }, conAltro: "t2a.molo.altro" },
      { id: "cesta", nome: "t2a.hs.cesta", forma: "M214 748 H372 V816 H214 Z", arrivo: [400, 820], verso: -1,
        guarda: "t2a.cesta.guarda", usa: "t2a.cesta.usa", parla: "t2a.cesta.parla" },
      { id: "anfora-0", nome: "t2a.hs.anfora", forma: "M1302 556 H1398 V760 H1302 Z", arrivo: [1250, 800], verso: 1,
        guarda: "t2a.anfora.guarda", usa: usaAnfora(0), parla: "t2a.anfora.parla", con: { setaccioPieno: spolveraAnfora, setaccio: "t2a.molo.vuoto" }, conAltro: "t2a.anfora.altro" },
      { id: "anfora-1", nome: "t2a.hs.anfora", forma: "M1398 546 H1484 V760 H1398 Z", arrivo: [1260, 800], verso: 1,
        guarda: "t2a.anfora.guarda", usa: usaAnfora(1), parla: "t2a.anfora.parla", con: { setaccioPieno: spolveraAnfora, setaccio: "t2a.molo.vuoto" }, conAltro: "t2a.anfora.altro" },
      { id: "anfora-2", nome: "t2a.hs.anfora", forma: "M1484 556 H1580 V760 H1484 Z", arrivo: [1270, 800], verso: 1,
        guarda: "t2a.anfora.guarda", usa: usaAnfora(2), parla: "t2a.anfora.parla", con: { setaccioPieno: spolveraAnfora, setaccio: "t2a.molo.vuoto" }, conAltro: "t2a.anfora.altro" },
      { id: "diofanto", nome: "t2a.hs.diofanto", forma: "M548 300 H700 V790 H548 Z", arrivo: [470, 820], verso: 1,
        guarda: "t2a.dio.guarda", usa: "t2a.dio.usa", parla: dialogoDiofanto,
        con: { manovella: "t2a.dio.manovella", setaccio: "t2a.dio.setaccio", setaccioPieno: "t2a.dio.setaccio", pagina3: "t2a.dio.pagina", disegno: "t2a.dio.disegno" },
        conAltro: "t2a.dio.altro" },
      { id: "penna", nome: "t2a.hs.penna", forma: "M530 260 H630 V404 H530 Z", arrivo: [520, 760], vista: "schiena",
        guarda: "t2a.penna.guarda", usa: "t2a.penna.usa", parla: dialogoPenna, conAltro: "t2a.penna.altro" },
      { id: "treno", nome: "t2a.hs.treno", forma: "M-10 170 H150 V690 H-10 Z", arrivo: [220, 830], verso: -1,
        guarda: "t2a.treno.guarda", usa: Alg3.sali, parla: "t2a.treno.parla" }
    ]
  });

  /* ---------- aiuti a gradini: ogni passaggio della catena arriva fino alla soluzione ---------- */
  Alg3.aiutiStanze.alessandria = function (m) {
    if (!m.flag("impronteViste")) {
      if (m.ha("setaccioPieno")) return { id: "a-spargi", chi: "penna", chiavi: ["t2a.aiuto.spargi1", "t2a.aiuto.spargi2", "t2a.aiuto.spargi3"] };
      if (m.ha("setaccio")) return { id: "a-riempi", chi: "penna", chiavi: ["t2a.aiuto.riempi1", "t2a.aiuto.riempi2"] };
      return { id: "a-pista", chi: "penna", chiavi: ["t2a.aiuto.pista1", "t2a.aiuto.pista2", "t2a.aiuto.pista3", "t2a.aiuto.pista4"] };
    }
    if (!m.flag("ditateViste")) return { id: "a-ditate", chi: "penna", chiavi: ["t2a.aiuto.ditate1", "t2a.aiuto.ditate2", "t2a.aiuto.ditate3"] };
    if (!m.flag("anforaAperta")) return { id: "a-apri", chi: "penna", chiavi: ["t2a.aiuto.apri1", "t2a.aiuto.apri2"],
      param: { pos: Lingue.semplice("t2a.pos." + POSIZIONI[m.stato.flag.anforaGiusta]) } };
    if (!m.flag("manovellaMessa")) return { id: "a-manov", chi: "penna", chiavi: ["t2a.aiuto.manov1", "t2a.aiuto.manov2"] };
    if (!m.flag("coefficientiTornati")) return { id: "a-lez", chi: "penna", chiavi: ["t2a.aiuto.lez1"] };
    return { id: "a-treno", chi: "penna", chiavi: ["t2a.aiuto.treno1", "t2a.aiuto.treno2"] };
  };
})();
