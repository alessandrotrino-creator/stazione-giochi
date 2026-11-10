/* =====================================================================
   Matematica · terze · Capitolo 2 · Stanza: BAGHDAD, CIRCA 830 — la Casa della Sapienza (Lez. 1 e 2)
   Catena: Madama Parolona ha spaccato le tessere della lezione di al-Khwarizmi e rubato gli ESPONENTI;
   sulla cassetta delle tessere dorme il gatto Dattero → prendere lo spago sul tavolo del rilegatore →
   legarci Penna (è una piuma!) → il gatto la insegue per la sala e si addormenta sul cuscino (distrarre
   un animale con un personaggio) → prendere la cassetta e darla ad al-Khwarizmi → pagina 2 del diario
   (la coroncina = «al quadrato») → LA LEZIONE: tessere da ricomporre (frasi a parole → coefficiente e
   parte letterale), due falsi monomi da scartare, una forma normale, BIVIO DI CLASSE sul grado,
   grado rispetto a una lettera con il TASTIERINO → gli esponenti tornano; in dono il disegno del
   quadrato completato (servirà nel finale). Il righello sullo scrittoio servirà a Londra: si tornerà qui.
   Fatti storici verificati: CAPITOLI.md (al-Khwarizmi; «cosa», «censo», dirham; al-jabr; x² + 10x = 39).
   ===================================================================== */
(function () {
  Motore.aggiungi("oggetti", {
    spago: { icona: "ogg-spago", nome: "ogg.spago", descrizione: "ogg.spago.d", suAltro: "spago.altro" },
    cassetta: { icona: "ogg-cassetta", nome: "ogg.cassetta", descrizione: "ogg.cassetta.d", suAltro: "cassetta.altro" },
    pagina2: { icona: "ogg-diario", nome: "ogg.pagina2", descrizione: "ogg.pagina2.d", suAltro: "pagina.altro" },
    disegno: { icona: "ogg-disegno", nome: "ogg.disegno", descrizione: "ogg.disegno.d", loSapevi: "ogg.disegno.ls", suAltro: "disegno.altro" },
    righello: { icona: "ogg-righello", nome: "ogg.righello", descrizione: "ogg.righello.d", suAltro: "righello.altro" }
  });
  Motore.aggiungi("personaggi", {
    alkhwarizmi: { nome: "nome.alkhwarizmi", colore: "#8fe0d0", voce: { altezza: 140, timbro: "triangle", passo: 0.1, volume: 0.04 } }
  });
  Motore.aggiungi("figurine", {
    alkhwarizmi: { nome: "fig.alkhwarizmi.nome", anni: "fig.alkhwarizmi.anni", paese: "fig.alkhwarizmi.paese", testo: "fig.alkhwarizmi.testo", ritratto: "alkhwarizmi" }
  });

  /* ---------- stili: il gatto che insegue Penna, le tessere spaccate ---------- */
  (function () {
    var s = document.createElement("style");
    s.textContent =
      ".elemento.gatto-bg .corre { display: none; }" +
      ".elemento.gatto-bg.insegue .dorme { display: none; }" +
      ".elemento.gatto-bg.insegue .corre { display: block; }" +
      ".elemento.gatto-bg.insegue { animation: bg-gatto 3.4s ease-in-out forwards; }" +
      "@keyframes bg-gatto { 0% { transform: translate(0,0) scaleX(-1); } 14% { transform: translate(20px,-40px) scaleX(-1); } 26% { transform: translate(30px,84px) scaleX(-1); }" +
      " 36% { transform: translate(50px,-6px) scaleX(-1); } 46% { transform: translate(34px,84px) scaleX(-1); } 56% { transform: translate(64px,-16px) scaleX(-1); }" +
      " 66% { transform: translate(50px,84px) scaleX(-1); } 100% { transform: translate(316px,104px) scaleX(-1); } }" +
      ".elemento.penna-spago svg.pendolo { transform-origin: 60px 0; animation: bg-dondola .45s ease-in-out infinite alternate; overflow: visible; }" +
      "@keyframes bg-dondola { from { transform: rotate(4deg); } to { transform: rotate(46deg); } }" +
      ".elemento.gatto-cuscino svg { animation: bg-ronfa 2.4s ease-in-out infinite; transform-origin: 50% 100%; }" +
      "@keyframes bg-ronfa { 50% { transform: scaleY(1.04); } }" +
      ".tx-righe { display: grid; grid-template-columns: 1fr 1.3fr; gap: 22px; align-items: start; direction: ltr; }" +
      ".tx-pezzi { display: flex; flex-direction: column; gap: 10px; }" +
      ".tx-fila { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; padding: 10px; border-radius: 12px; background: rgba(0,0,0,.18); }" +
      ".tx-etich { font-size: 18px; opacity: .85; text-align: center; margin: 2px 0 0; }" +
      ".tx-pezzo { font-family: inherit; cursor: pointer; min-width: 78px; min-height: 64px; padding: 8px 14px; border: 3px solid #1d1428; background: #f2e4c0; color: #1d1428; font-size: 30px; font-weight: 800; box-shadow: 0 5px 0 #1d1428; }" +
      ".tx-pezzo.coeff { border-radius: 10px 2px 2px 10px; clip-path: polygon(0 0, 100% 0, 88% 22%, 100% 44%, 86% 66%, 100% 100%, 0 100%); padding-inline-end: 22px; background: #e8d0f8; }" +
      ".tx-pezzo.lett { border-radius: 2px 10px 10px 2px; clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 12% 78%, 0 56%, 14% 34%, 0 12%); padding-inline-start: 22px; background: #d0f0e0; }" +
      ".tx-pezzo.vuoto { font-size: 15px; font-weight: 700; }" +
      ".tx-pezzo.scelto { outline: 5px solid #ffd860; transform: translateY(-4px); }" +
      ".tx-pezzo.usato { visibility: hidden; }" +
      ".tx-tessera { font-family: inherit; cursor: pointer; min-width: 150px; padding: 16px 18px; border-radius: 12px; border: 3px solid #1d1428; background: #f2e4c0; color: #1d1428; font-size: 32px; font-weight: 800; box-shadow: 0 6px 0 #1d1428; }" +
      ".tx-tessera.via { visibility: hidden; }" +
      ".tx-tessere { display: flex; flex-wrap: wrap; gap: 16px; justify-content: center; margin: 8px 0; direction: ltr; }" +
      ".pn-diario .quadrato-pallini { display: inline-grid; gap: 4px; vertical-align: middle; margin: 0 10px; }" +
      ".pn-diario .quadrato-pallini span { width: 14px; height: 14px; border-radius: 50%; background: #c8402f; }";
    document.head.appendChild(s);
  })();

  var ESP = { 0: "⁰", 1: "¹", 2: "²", 3: "³", 4: "⁴", 5: "⁵", 6: "⁶", 7: "⁷", 8: "⁸", 9: "⁹" };
  function sup(n) { return String(n).split("").map(function (c) { return ESP[c]; }).join(""); }
  function html(t) { return Lingue.html("t2.raw", { t: t }); }

  /* ---------- le tessere spaccate: numeri diversi a ogni partita ---------- */
  function nuoveTessere() {
    var nC = Alg3.a_caso(2, 4), nK, m = [10, 21, 39][Alg3.a_caso(0, 2)];
    do { nK = Alg3.a_caso(3, 9); } while (nK === nC || nK === 2 * nC);
    var frasi = [
      { id: "censi", n: nC, coeff: String(nC), lett: "a²" },
      { id: "cose", n: nK, coeff: String(nK), lett: "a" },
      { id: "meta", coeff: "{fr:1/2}", lett: "a²" },
      { id: "dirham", n: m, coeff: String(m), lett: "" }
    ];
    var coeff = [String(nC), String(nK), "{fr:1/2}", String(m), String(2 * nC)];
    if (nC !== 2) coeff.push("2");
    var lett = ["a²", "a", "a²", "", "a" + sup(nK)];
    return { frasi: Alg3.mescola(frasi), coeff: Alg3.mescola(coeff), lett: Alg3.mescola(lett), nK: nK };
  }
  function testoFrase(f) {
    return Lingue.semplice("t2b.tess." + f.id, f.n ? { nn: Lingue.semplice("t2b.num." + f.n) } : {});
  }
  function scriviTessera(coeff, lett) { return coeff + lett; }

  function tessere(m) {
    if (!m.stato.flag.tessere) m.flag("tessere", nuoveTessere());
    var T = m.stato.flag.tessere, fatte = {}, usatiC = {}, usatiL = {}, scelta = null, sc = null, sl = null, messaggio = null;
    var soluzioni = T.frasi.map(function (f) { return testoFrase(f) + " → " + scriviTessera(f.coeff, f.lett || ""); }).join(" · ");
    m.aiutoQui({ id: "h-tess", chi: "penna", chiavi: ["t2b.h.tess.1", "t2b.h.tess.2", "t2b.h.tess.3"], param: { soluzioni: soluzioni } });
    return m.pannello(function (p, chiudi) {
      function disegna() {
        p.innerHTML = "";
        var h = document.createElement("h2"); h.innerHTML = Lingue.html("t2b.tess.titolo"); p.appendChild(h);
        var g = document.createElement("p"); g.className = "pn-guida"; g.innerHTML = Lingue.html(scelta ? "t2b.tess.guida2" : "t2b.tess.guida"); p.appendChild(g);
        var box = document.createElement("div"); box.className = "tx-righe";
        var colF = document.createElement("div"); colF.className = "pn-frasi";
        T.frasi.forEach(function (f) {
          var b = document.createElement("button");
          b.className = "pn-frase" + (fatte[f.id] ? " fatta" : "") + (scelta === f.id ? " scelta" : "");
          b.innerHTML = "<span>«" + testoFrase(f) + "»</span>" + (fatte[f.id] ? '<span class="incollato num">' + html(scriviTessera(f.coeff, f.lett)) + "</span>" : "");
          b.addEventListener("click", function (e) { e.stopPropagation(); if (fatte[f.id]) return; scelta = f.id; messaggio = null; Suoni.effetto("clic"); disegna(); });
          colF.appendChild(b);
        });
        var colP = document.createElement("div"); colP.className = "tx-pezzi";
        function fila(etichetta, lista, usati, tipo, selez, sceglie) {
          var et = document.createElement("p"); et.className = "tx-etich"; et.innerHTML = Lingue.html(etichetta); colP.appendChild(et);
          var r = document.createElement("div"); r.className = "tx-fila";
          lista.forEach(function (t, i) {
            var b = document.createElement("button");
            b.className = "tx-pezzo num " + tipo + (t === "" ? " vuoto" : "") + (usati[i] ? " usato" : "") + (selez === i ? " scelto" : "");
            b.innerHTML = t === "" ? Lingue.html("t2b.tess.vuoto") : html(t);
            b.addEventListener("click", function (e) { e.stopPropagation(); if (usati[i]) return; sceglie(i); });
            r.appendChild(b);
          });
          colP.appendChild(r);
        }
        fila("t2b.tess.coeff", T.coeff, usatiC, "coeff", sc, function (i) { sc = i; Suoni.effetto("clic"); prova(); });
        fila("t2b.tess.lett", T.lett, usatiL, "lett", sl, function (i) { sl = i; Suoni.effetto("clic"); prova(); });
        box.appendChild(colF); box.appendChild(colP); p.appendChild(box);
        if (messaggio) { var msg = document.createElement("p"); msg.className = "pn-losapevi"; msg.innerHTML = messaggio; p.appendChild(msg); }
      }
      function prova() {
        if (!scelta) { sc = null; sl = null; messaggio = Lingue.html("t2b.tess.primaFrase"); disegna(); return; }
        if (sc === null || sl === null) { messaggio = null; disegna(); return; }
        var f = T.frasi.filter(function (x) { return x.id === scelta; })[0], c = T.coeff[sc], l = T.lett[sl];
        var okC = c === f.coeff, okL = l === f.lett, msg = [];
        var par = { frase: testoFrase(f), c: c, l: l === "" ? Lingue.semplice("t2b.tess.vuoto") : l, n: String(f.n || ""), giusto: f.coeff };
        if (!okC) {
          var tc = f.id === "censi" && c === String(2 * f.n) ? "doppio" : (f.id === "meta" ? "meta" : "coeff");
          m.errore("t2-tess-" + tc); msg.push(Lingue.html("t2b.tess.err." + tc, par));
        }
        if (!okL) {
          var tl;
          if (/[⁰¹²³⁴⁵⁶⁷⁸⁹]/.test(l) && l !== "a²") tl = f.id === "cose" ? "numesp" : "lett";
          else if (f.id === "dirham") tl = "dirham";
          else if (l === "") tl = "vuoto";
          else if (l === "a" && f.lett === "a²") tl = "esponente";
          else if (l === "a²" && f.lett === "a") tl = "cosacenso";
          else tl = "lett";
          m.errore("t2-tess-" + tl); msg.push(Lingue.html("t2b.tess.err." + tl, par));
        }
        if (okC && okL) {
          fatte[f.id] = true; usatiC[sc] = true; usatiL[sl] = true; scelta = null; messaggio = null; Suoni.effetto("prendi");
          sc = null; sl = null;
          if (Object.keys(fatte).length === T.frasi.length) { chiudi(); return; }
        } else {
          Suoni.effetto("errore");
          if (!okC) sc = null;
          if (!okL) sl = null;
          messaggio = msg.join(" ");
        }
        disegna();
      }
      disegna();
    }, { chiudibile: true }).then(function () {
      m.aiutoQui(null);
      if (Object.keys(fatte).length < T.frasi.length) return false;
      m.flag("tessereFatte", true);
      return true;
    });
  }

  /* ---------- i falsi monomi: due intrusi tra sei tessere ---------- */
  function falsi(m) {
    if (!m.stato.flag.falsi) {
      var k = Alg3.a_caso(2, 9), d = Alg3.a_caso(5, 19), q = Alg3.a_caso(2, 5), t = Alg3.a_caso(2, 9);
      m.flag("falsi", Alg3.mescola([
        { t: "−" + k + "ab²", tipo: "negativo" }, { t: String(d), tipo: "numero" }, { t: "{fr:1/" + q + "}a³", tipo: "frazione" },
        { t: "a²b", tipo: "altro" }, { t: "a + b", falso: true }, { t: t + " : a", falso: true }
      ]));
    }
    var L = m.stato.flag.falsi, via = {}, messaggio = null;
    var intrusi = L.filter(function (x) { return x.falso; }).map(function (x) { return x.t; }).join("  e  ");
    m.aiutoQui({ id: "h-falsi", chi: "penna", chiavi: ["t2b.h.falsi.1", "t2b.h.falsi.2", "t2b.h.falsi.3"], param: { intrusi: intrusi } });
    return m.pannello(function (p, chiudi) {
      function disegna() {
        p.innerHTML = "";
        var h = document.createElement("h2"); h.innerHTML = Lingue.html("t2b.falsi.titolo"); p.appendChild(h);
        var g = document.createElement("p"); g.className = "pn-guida"; g.innerHTML = Lingue.html("t2b.falsi.guida"); p.appendChild(g);
        var box = document.createElement("div"); box.className = "tx-tessere";
        L.forEach(function (x, i) {
          var b = document.createElement("button");
          b.className = "tx-tessera num" + (via[i] ? " via" : "");
          b.innerHTML = html(x.t);
          b.addEventListener("click", function (e) {
            e.stopPropagation(); if (via[i]) return;
            if (x.falso) {
              via[i] = true; Suoni.effetto("prendi"); messaggio = Lingue.html("t2b.falsi.via", { t: x.t });
              if (Object.keys(via).length === 2) { chiudi(); return; }
            } else {
              Suoni.effetto("errore"); m.errore("t2-falso-" + x.tipo);
              messaggio = Lingue.html("t2b.falsi.err." + x.tipo, { t: x.t });
            }
            disegna();
          });
          box.appendChild(b);
        });
        p.appendChild(box);
        if (messaggio) { var msg = document.createElement("p"); msg.className = "pn-losapevi"; msg.innerHTML = messaggio; p.appendChild(msg); }
      }
      disegna();
    }, { chiudibile: true }).then(async function () {
      m.aiutoQui(null);
      if (Object.keys(via).length < 2) return false;
      m.flag("falsiFatti", true);
      var t = L.filter(function (x) { return x.falso && x.t !== "a + b"; })[0].t;
      await m.dice("alkhwarizmi", "t2b.falsi.fatto.1", { t: t });
      await m.dice("penna", "t2b.falsi.fatto.2");
      m.annota("t2b.q.monomio");
      return true;
    });
  }

  /* ---------- la forma normale ---------- */
  async function formaNormale(m) {
    var p = Alg3.a_caso(2, 5), q; do { q = Alg3.a_caso(2, 5); } while (q === p);
    var c = p * q, par = { espr: p + "a · " + q + "b · a", p: String(p), q: String(q), c: String(c), s: String(p + q) };
    await m.dice("alkhwarizmi", "t2b.norm.intro", par);
    m.aiutoQui({ id: "h-norm", chi: "penna", chiavi: ["t2b.h.norm.1", "t2b.h.norm.2", "t2b.h.norm.3"], param: par });
    for (;;) {
      var v = await m.scegli(Alg3.mescola([
        { testo: "t2.raw", valore: "giusta", param: { t: c + "a²b" } },
        { testo: "t2.raw", valore: "somma", param: { t: (p + q) + "a²b" } },
        { testo: "t2.raw", valore: "lettere", param: { t: c + "ab" } },
        { testo: "t2.raw", valore: "attaccati", param: { t: String(p) + String(q) + "a²b" } }
      ]), "t2b.norm.domanda", par);
      if (v === "giusta") break;
      m.suono("errore"); m.errore("t2-normale-" + v);
      await m.dice("penna", "t2b.norm.err." + v, par);
    }
    m.suono("prendi"); m.aiutoQui(null);
    m.flag("normale", { c: c });
    m.flag("normaleFatta", true);
    await m.dice("penna", "t2b.norm.giusta", par);
    m.annota("t2b.q.forma");
  }

  /* ---------- bivio di classe: il grado ---------- */
  async function bivioGrado(m) {
    var c = (m.stato.flag.normale || { c: 6 }).c, par = { mono: c + "a²b", c: String(c), c3: String(c + 3) };
    await m.dice("penna", "t2b.grado.intro.1", par);
    await m.dice("alkhwarizmi", "t2b.grado.intro.2", par);
    m.aiutoQui({ id: "h-grado", chi: "penna", chiavi: ["t2b.h.grado.1", "t2b.h.grado.2", "t2b.h.grado.3"], param: par });
    for (;;) {
      var v = await m.scegli(Alg3.mescola([
        { testo: "t2.raw", valore: "giusta", param: { t: "3" } },
        { testo: "t2.raw", valore: "coeff", param: { t: String(c) } },
        { testo: "t2.raw", valore: "una", param: { t: "2" } },
        { testo: "t2.raw", valore: "coeffsomma", param: { t: String(c + 3) } }
      ]), "t2b.grado.bivio", par);
      if (v === "giusta") break;
      m.suono("errore"); m.errore("t2-grado-" + v);
      await m.dice("penna", "t2b.grado.err." + v, par);
    }
    m.suono("prendi"); m.aiutoQui(null);
    m.flag("bivioFatto", true);
    await m.dice("penna", "t2b.grado.giusta", par);
    m.annota("t2b.q.grado");
  }

  /* ---------- il grado rispetto a una lettera, con il tastierino ---------- */
  async function gradoA(m) {
    var k, e1 = Alg3.a_caso(2, 6), e2;
    do { e2 = Alg3.a_caso(2, 5); } while (e2 === e1);
    do { k = Alg3.a_caso(2, 9); } while (k === e1 || k === e2 || k === e1 + e2);
    var par = { mono: k + "a" + sup(e1) + "b" + sup(e2), e1: String(e1), e2: String(e2), k: String(k), tot: String(e1 + e2) };
    await m.dice("penna", "t2b.gradoA.intro", par);
    m.aiutoQui({ id: "h-gradoA", chi: "penna", chiavi: ["t2b.h.gradoA.1", "t2b.h.gradoA.2", "t2b.h.gradoA.3"], param: par });
    await Alg3.finoAlGiusto(m, "t2b.gradoA.domanda", par, { max: 2, promemoria: "t2b.gradoA.prom" }, e1, async function (n) {
      var tipo = n === e1 + e2 ? "totale" : (n === k ? "coeff" : (n === e2 ? "altra" : "calcolo"));
      m.errore("t2-gradoA-" + tipo);
      await m.dice("penna", "t2b.gradoA.err." + tipo, Object.assign({ n: String(n) }, par));
    });
    m.aiutoQui(null);
    m.flag("gradoAFatto", true);
    await m.dice("penna", "t2b.gradoA.giusta", par);
  }

  /* ---------- gli esponenti tornano: i doni di al-Khwarizmi ---------- */
  async function fineLezione(m) {
    m.suono("magia");
    m.effetto("lampo-lettere", 800, 420, 1200);
    m.flag("esponentiTornati", true);
    await m.dice("penna", "t2b.fine.1");
    await m.dice("alkhwarizmi", "t2b.fine.3");
    m.flag("disegnoDato", true);
    m.prendi("disegno");
    await m.dice("penna", "t2b.fine.4");
    m.annota("t2b.q.disegno");
    m.figurina("alkhwarizmi");
    await m.dice("penna", "t2b.fine.5");
    await m.pensa("t2b.fine.6");
    await Alg3.sblocca(m, "alessandria");
    await m.dice("penna", "t2b.fine.7");
  }

  /* la lezione riprende dal punto in cui si era fermata (i pannelli si possono chiudere) */
  async function lezione(m) {
    if (!m.flag("tessereFatte")) {
      if (!m.flag("tessereIntro")) {
        m.flag("tessereIntro", true);
        await m.dice("alkhwarizmi", "t2b.tess.intro.1");
        await m.dice("penna", "t2b.tess.intro.2");
      }
      if (!(await tessere(m))) return m.dice("alkhwarizmi", "t2b.lez.pausa");
      await m.dice("alkhwarizmi", "t2b.tess.fatto.1");
      await m.dice("penna", "t2b.tess.fatto.2");
      m.annota("t2b.q.tessere");
    }
    if (!m.flag("falsiFatti")) {
      await m.dice("alkhwarizmi", "t2b.falsi.intro.1");
      await m.dice("penna", "t2b.falsi.intro.2");
      if (!(await falsi(m))) return m.dice("alkhwarizmi", "t2b.lez.pausa");
    }
    if (!m.flag("normaleFatta")) await formaNormale(m);
    if (!m.flag("bivioFatto")) await bivioGrado(m);
    if (!m.flag("gradoAFatto")) await gradoA(m);
    if (!m.flag("esponentiTornati")) await fineLezione(m);
  }

  /* ---------- la pagina 2 del diario: la coroncina ---------- */
  function leggiPagina2(m) {
    var a = Alg3.a_caso(4, 7), b; do { b = Alg3.a_caso(4, 9); } while (b === a || b === 2 * a);
    var pallini = function (n) {
      return '<span class="quadrato-pallini" style="grid-template-columns: repeat(' + n + ', 14px)">' + new Array(n * n + 1).join("<span></span>") + "</span>";
    };
    return m.pannello(function (p, chiudi) {
      p.innerHTML = "<h2>" + Lingue.html("t2b.pag2.titolo") + "</h2>" +
        '<div class="pn-diario"><div>' + Lingue.html("t2b.pag2.testo") + "</div>" +
        '<div class="riga num">' + a + Alg3.simbolo("corona") + "<span>→</span>" + pallini(a) + "<span>→</span>" + (a * a) + "</div>" +
        '<div class="riga num">' + b + Alg3.simbolo("corona") + " → " + (b * b) + "</div>" +
        '<div class="firma">' + Lingue.html("t2b.pag2.firma") + "</div></div>";
      var b2 = document.createElement("button"); b2.className = "pn-tasto principale"; b2.innerHTML = Lingue.html("t2.pag1.capito");
      b2.addEventListener("click", function (e) { e.stopPropagation(); chiudi(); });
      p.appendChild(b2);
    }, { chiudibile: false }).then(async function () {
      var par = { a: String(a), b: String(b), q: String(a * a), d: String(2 * a), aa: String(a) + String(a) };
      m.aiutoQui({ id: "h-corona", chi: "penna", chiavi: ["t2b.h.corona.1", "t2b.h.corona.2", "t2b.h.corona.3"], param: par });
      for (;;) {
        var v = await m.scegli(Alg3.mescola([
          { testo: "t2b.corona.quadrato", valore: "quadrato" },
          { testo: "t2b.corona.doppio", valore: "doppio" },
          { testo: "t2b.corona.attaccato", valore: "attaccato" }
        ]), "t2b.corona.domanda", par);
        if (v === "quadrato") { m.suono("prendi"); break; }
        m.suono("errore"); m.errore("t2-diario-corona");
        await m.dice("penna", "t2b.corona.err." + v, par);
      }
      m.aiutoQui(null);
      m.flag("coronaCapita", true);
      await m.dice("penna", "t2b.corona.giusta", par);
      await m.pensa("t2b.corona.mistero");
      m.annota("t2b.q.diario2");
    });
  }

  /* ---------- il gatto, lo spago e Penna ---------- */
  async function legaPenna(m) {
    await m.pensa("t2b.lega.1");
    await m.dice("penna", "t2b.lega.2");
    await m.pensa("t2b.lega.3");
    await m.dice("penna", "t2b.lega.4");
    await m.cammina(POSTO[0], POSTO[1]);
    m.guarda(-1); m.vista("fronte");
    m.togli("spago");
    m.suono("magia");
    m.flag("inseguimento", true);
    await m.aspetta(3500);
    m.flag("gattoSpostato", true);
    m.flag("inseguimento", false);
    await m.dice("alkhwarizmi", "t2b.lega.5");
    await m.pensa("t2b.lega.cade");
    await m.dice("penna", "t2b.lega.6");
    await m.pensa("t2b.lega.7");
  }

  async function prendiCassetta(m) {
    if (!m.flag("gattoSpostato")) { m.suono("errore"); return m.pensa("t2b.cass.gatto"); }
    m.flag("cassettaPresa", true);
    m.prendi("cassetta");
    await m.pensa("t2b.cass.prendi");
  }
  async function dareCassetta(m) {
    m.togli("cassetta");
    m.flag("cassettaData", true);
    await m.dice("alkhwarizmi", "t2b.cass.1");
    await m.dice("narratore", "t2b.cass.2");
    m.prendi("pagina2");
    await m.pensa("t2b.cass.3");
    await leggiPagina2(m);
    await lezione(m);
  }

  async function dialogoAlk(m) {
    var opz = [
      { testo: "t2b.dlg.chi", valore: "chi" },
      { testo: "t2b.dlg.aljabr", valore: "aljabr" },
      { testo: "t2b.dlg.cosa", valore: "cosa" },
      { testo: "t2b.dlg.parole", valore: "parole" }
    ];
    if (m.flag("cassettaData") && !m.flag("esponentiTornati")) opz.unshift({ testo: "t2b.dlg.lezione", valore: "lezione" });
    if (!m.flag("gattoSpostato")) opz.push({ testo: "t2b.dlg.gatto", valore: "gatto" });
    if (m.flag("serveRegolo") && !m.flag("righelloPreso")) opz.unshift({ testo: "t2b.dlg.righello", valore: "righello" });
    opz.push({ testo: "t2b.dlg.ciao", valore: "ciao" });
    var v = await m.scegli(opz);
    if (v === "lezione") return lezione(m);
    if (v === "righello") return donaRighello(m);
    if (v === "chi") { await m.dice("alkhwarizmi", "t2b.dlg.chi.r1"); await m.dice("alkhwarizmi", "t2b.dlg.chi.r2"); }
    if (v === "aljabr") { await m.dice("alkhwarizmi", "t2b.dlg.aljabr.r1"); await m.dice("penna", "t2b.dlg.aljabr.r2"); }
    if (v === "cosa") { await m.dice("alkhwarizmi", "t2b.dlg.cosa.r1"); await m.dice("penna", "t2b.dlg.cosa.r2"); }
    if (v === "parole") { await m.dice("alkhwarizmi", "t2b.dlg.parole.r1"); await m.dice("penna", "t2b.dlg.parole.r2"); }
    if (v === "gatto") { await m.dice("alkhwarizmi", "t2b.dlg.gatto.r1"); await m.pensa("t2b.dlg.gatto.r2"); }
    if (v === "ciao") await m.dice("alkhwarizmi", "t2b.dlg.ciao.r");
  }

  /* il righello: si potrà avere solo quando a Londra si scopre che serve (flag serveRegolo) */
  async function donaRighello(m) {
    await m.dice("alkhwarizmi", "t2b.regolo.dono");
    m.flag("righelloPreso", true);
    m.prendi("righello");
    await m.dice("penna", "t2b.regolo.penna");
  }
  function usaRighello(m) {
    if (m.flag("serveRegolo")) return donaRighello(m);
    return m.dice("alkhwarizmi", "t2b.regolo.no");
  }

  async function dialogoPenna(m) {
    var v = await m.scegli([
      { testo: "t2b.pdlg.dove", valore: "dove" },
      { testo: "t2b.pdlg.rubato", valore: "rubato" },
      { testo: "t2b.pdlg.ciao", valore: "ciao" }
    ]);
    if (v === "dove") { await m.dice("penna", "t2b.pdlg.dove.r1"); await m.dice("penna", "t2b.pdlg.dove.r2"); }
    if (v === "rubato") await m.dice("penna", m.flag("esponentiTornati") ? "t2b.pdlg.rubato.r2" : "t2b.pdlg.rubato.r1");
    if (v === "ciao") await m.dice("penna", "t2b.pdlg.ciao.r");
  }

  var penna = '<svg viewBox="-70 -230 150 240" overflow="visible"><use href="#penna" x="-70" y="-230" width="150" height="240"/></svg>';
  /* durante la corsa Zara sta qui, di fronte e girata verso la cassetta, e tiene lo spago con la mano */
  var POSTO = [1210, 800], MANO = [1160, 606];

  Motore.stanza("baghdad", {
    sfondo: "baghdad",
    pavimento: { xMin: 180, xMax: 1460, yMin: 740, yMax: 880 },
    scala: { lontano: { y: 740, s: 0.86 }, vicino: { y: 880, s: 1 } },
    attori: [
      { id: "zara", simbolo: "zara-fronte", viste: { fronte: "zara-fronte", profilo: "zara-profilo", schiena: "zara-schiena" },
        vista: [-110, -600, 230, 615], piedi: [5, 0], altezza: 440, x: 260, y: 850, dir: 1 },
      { id: "alkhwarizmi", simbolo: "alkhwarizmi", vista: [-110, -600, 230, 615], piedi: [0, 0], altezza: 450, x: 560, y: 772, dir: -1, fisso: true }
    ],
    elementi: [
      { id: "penna", classe: "penna-el", personaggio: "penna", x: 330, y: 300, larghezza: 80, altezza: 128, svg: penna,
        visibile: function (m) { return !m.flag("inseguimento"); } },
      { id: "penna-spago", classe: "penna-spago", x: MANO[0] - 60, y: MANO[1], larghezza: 120, altezza: 200,
        svg: '<svg class="pendolo" viewBox="0 0 120 200"><path d="M60 0 V58" stroke="#8a6a3a" stroke-width="5" stroke-linecap="round"/>' +
          '<svg x="8" y="54" width="104" height="166" viewBox="-70 -230 150 240" overflow="visible"><use href="#penna" x="-70" y="-230" width="150" height="240"/></svg></svg>',
        visibile: function (m) { return m.flag("inseguimento"); } },
      { id: "cassetta", classe: "", x: 990, y: 700, larghezza: 130, altezza: 104,
        svg: '<svg viewBox="10 34 120 96"><use href="#ogg-cassetta" width="140" height="140"/></svg>',
        visibile: function (m) { return !m.flag("cassettaPresa"); } },
      { id: "gatto", classe: "gatto-bg", x: 1000, y: 642, larghezza: 130, altezza: 82,
        svg: '<svg viewBox="0 0 160 100" overflow="visible"><g class="dorme"><use href="#bg-gatto-dorme"/></g><g class="corre"><use href="#bg-gatto-corre"/></g></svg>',
        stato: function (m) { return m.flag("inseguimento") ? "insegue" : ""; },
        visibile: function (m) { return !m.flag("gattoSpostato"); } },
      { id: "gatto-cuscino", classe: "gatto-cuscino", x: 1316, y: 746, larghezza: 130, altezza: 82,
        svg: '<svg viewBox="0 0 160 100" overflow="visible"><use href="#bg-gatto-dorme"/>' +
          '<path d="M20 60 Q80 30 140 70 M30 80 Q70 50 120 84 M60 44 Q90 80 50 88" fill="none" stroke="#d8b884" stroke-width="3"/></svg>',
        visibile: function (m) { return m.flag("gattoSpostato"); } },
      { id: "spago", classe: "", x: 1350, y: 570, larghezza: 54, altezza: 54,
        svg: '<svg viewBox="0 0 140 140"><use href="#ogg-spago"/></svg>',
        visibile: function (m) { return !m.flag("spagoPreso"); } },
      { id: "disegno", classe: "", x: 724, y: 584, larghezza: 62, altezza: 62, rotazione: -8,
        svg: '<svg viewBox="0 0 140 140"><use href="#ogg-disegno"/></svg>',
        visibile: function (m) { return !m.flag("disegnoDato"); } },
      { id: "righello", classe: "", x: 760, y: 610, larghezza: 96, altezza: 40,
        svg: '<svg viewBox="0 44 140 56"><use href="#ogg-righello" width="140" height="140"/></svg>',
        visibile: function (m) { return !m.flag("righelloPreso"); } }
    ],
    entrata: async function (m) {
      if (m.flag("baghdadArrivo")) return;
      m.flag("baghdadArrivo", true);
      await m.cartello("t2b.titolo", "t2b.sottotitolo", 3000);
      await m.dice("narratore", "t2b.arrivo.1");
      await m.dice("alkhwarizmi", "t2b.arrivo.2");
      await m.dice("alkhwarizmi", "t2b.arrivo.3");
      await m.dice("penna", "t2b.arrivo.4");
      await m.dice("penna", "t2b.arrivo.5");
      await m.dice("penna", "t2b.arrivo.7");
    },
    hotspot: [
      { id: "scaffale", nome: "t2b.hs.scaffale", forma: "M160 150 H560 V610 H160 Z", arrivo: [360, 790], vista: "schiena",
        guarda: "t2b.scaff.guarda", usa: "t2b.scaff.usa", parla: "t2b.scaff.parla" },
      { id: "giara", nome: "t2b.hs.giara", forma: "M262 578 H390 V808 H262 Z", arrivo: [430, 820], verso: -1,
        guarda: "t2b.giara.guarda", usa: "t2b.giara.usa", parla: "t2b.giara.parla" },
      { id: "lanterne", nome: "t2b.hs.lanterne", forma: "M366 190 H434 V302 H366 Z M1186 90 H1254 V172 H1186 Z", arrivo: [700, 760], vista: "schiena",
        guarda: "t2b.lant.guarda", usa: "t2b.lant.usa", parla: "t2b.lant.parla" },
      { id: "finestra", nome: "t2b.hs.finestra", forma: "M620 160 H980 V556 H620 Z", arrivo: [800, 750], vista: "schiena",
        guarda: "t2b.fin.guarda", usa: "t2b.fin.usa", parla: "t2b.fin.parla" },
      { id: "corridoio", nome: "t2b.hs.corridoio", forma: "M1090 210 H1350 V600 H1090 Z", arrivo: [1220, 760], vista: "schiena",
        guarda: "t2b.corr.guarda", usa: "t2b.corr.usa", parla: "t2b.corr.parla" },
      { id: "astrolabio", nome: "t2b.hs.astrolabio", forma: "M1420 180 H1560 V380 H1420 Z", arrivo: [1420, 760], vista: "schiena",
        guarda: "t2b.astro.guarda", usa: "t2b.astro.usa", parla: "t2b.astro.parla" },
      { id: "limone", nome: "t2b.hs.limone", forma: "M1470 384 H1600 V670 H1470 Z", arrivo: [1440, 800], verso: 1,
        guarda: "t2b.lim.guarda", usa: "t2b.lim.usa", parla: "t2b.lim.parla" },
      { id: "rilegatore", nome: "t2b.hs.rilegatore", forma: "M1130 590 H1440 V732 H1130 Z", arrivo: [1270, 770], vista: "schiena",
        guarda: function (m) { return m.flag("spagoPreso") ? "t2b.ril.guarda2" : "t2b.ril.guarda"; }, usa: "t2b.ril.usa", parla: "t2b.ril.parla" },
      { id: "spago", nome: "t2b.hs.spago", forma: "M1344 566 H1410 V626 H1344 Z", arrivo: [1330, 770], vista: "schiena",
        presente: function (m) { return !m.flag("spagoPreso"); },
        guarda: "t2b.spago.guarda",
        usa: async function (m) { m.flag("spagoPreso", true); m.prendi("spago"); await m.pensa("t2b.spago.prendi"); },
        parla: "t2b.spago.parla" },
      { id: "cuscino", nome: "t2b.hs.cuscino", forma: "M1290 786 H1470 V852 H1290 Z", arrivo: [1250, 840], verso: 1,
        presente: function (m) { return !m.flag("gattoSpostato"); },
        guarda: "t2b.cusc.guarda", usa: "t2b.cusc.usa", parla: "t2b.cusc.parla" },
      { id: "gatto-cuscino", nome: "t2b.hs.gatto", forma: "M1300 744 H1450 V840 H1300 Z", arrivo: [1250, 840], verso: 1,
        presente: function (m) { return m.flag("gattoSpostato"); },
        guarda: "t2b.gattoc.guarda", usa: "t2b.gattoc.usa", parla: "t2b.gattoc.parla" },
      { id: "scrittoio", nome: "t2b.hs.scrittoio", forma: "M628 600 H972 V710 H628 Z", arrivo: [800, 760], vista: "schiena",
        guarda: "t2b.scritt.guarda",
        usa: function (m) { return m.flag("cassettaData") && !m.flag("esponentiTornati") ? lezione(m) : "t2b.scritt.usa"; },
        parla: "t2b.scritt.parla",
        con: { cassetta: dareCassetta }, conAltro: "t2b.scritt.altro" },
      { id: "datteri", nome: "t2b.hs.datteri", forma: "M654 594 H724 V644 H654 Z", arrivo: [720, 760], vista: "schiena",
        guarda: "t2b.datt.guarda", usa: "t2b.datt.usa", parla: "t2b.datt.parla" },
      { id: "disegno", nome: "t2b.hs.disegno", forma: "M722 582 H790 V646 H722 Z", arrivo: [760, 760], vista: "schiena",
        presente: function (m) { return !m.flag("disegnoDato"); },
        guarda: "t2b.dis.guarda", usa: "t2b.dis.usa", parla: "t2b.dis.parla" },
      { id: "righello", nome: "t2b.hs.righello", forma: "M792 606 H860 V648 H792 Z", arrivo: [820, 760], vista: "schiena",
        presente: function (m) { return !m.flag("righelloPreso"); },
        guarda: "t2b.regolo.guarda", usa: usaRighello, parla: "t2b.regolo.parla" },
      { id: "cassetta", nome: "t2b.hs.cassetta", forma: "M990 716 H1130 V806 H990 Z", arrivo: [940, 820], verso: 1,
        presente: function (m) { return !m.flag("cassettaPresa"); },
        guarda: function (m) { return m.flag("gattoSpostato") ? "t2b.cass.guarda2" : "t2b.cass.guarda"; },
        usa: prendiCassetta, parla: "t2b.cass.parla" },
      { id: "gatto", nome: "t2b.hs.gatto", forma: "M996 640 H1134 V716 H996 Z", arrivo: [950, 800], verso: 1,
        presente: function (m) { return !m.flag("gattoSpostato"); },
        guarda: "t2b.gatto.guarda", usa: "t2b.gatto.usa", parla: "t2b.gatto.parla",
        con: { spago: "t2b.gatto.spago" }, conAltro: "t2b.gatto.altro" },
      { id: "alkhwarizmi", nome: "t2b.hs.alkhwarizmi", forma: "M492 300 H632 V772 H492 Z", arrivo: [690, 790], verso: -1,
        guarda: "t2b.alk.guarda",
        usa: "t2b.alk.usa",
        parla: dialogoAlk,
        con: { cassetta: dareCassetta, spago: "t2b.alk.spago", pagina1: "t2b.alk.pagina", pagina2: "t2b.alk.pagina", disegno: "t2b.alk.disegno" },
        conAltro: "t2b.alk.altro" },
      { id: "penna", nome: "t2b.hs.penna", forma: "M320 288 H420 V436 H320 Z", arrivo: [420, 800], vista: "schiena",
        guarda: "t2b.penna.guarda", usa: "t2b.penna.usa", parla: dialogoPenna,
        con: { spago: legaPenna }, conAltro: "t2b.penna.altro" },
      { id: "treno", nome: "t2b.hs.treno", forma: "M-10 170 H150 V690 H-10 Z", arrivo: [220, 830], verso: -1,
        guarda: "t2b.treno.guarda", usa: Alg3.sali, parla: "t2b.treno.parla" }
    ]
  });

  /* ---------- aiuti a gradini ---------- */
  Alg3.aiutiStanze.baghdad = function (m) {
    if (!m.flag("gattoSpostato")) {
      if (!m.flag("spagoPreso")) return { id: "b-spago", chi: "penna", chiavi: ["t2b.aiuto.gatto1", "t2b.aiuto.gatto2", "t2b.aiuto.gatto3"] };
      return { id: "b-lega", chi: "zara", chiavi: ["t2b.aiuto.lega1", "t2b.aiuto.lega2", "t2b.aiuto.lega3"] };
    }
    if (!m.flag("cassettaPresa")) return { id: "b-cass", chi: "penna", chiavi: ["t2b.aiuto.cass1"] };
    if (!m.flag("cassettaData")) return { id: "b-dai", chi: "penna", chiavi: ["t2b.aiuto.dai1", "t2b.aiuto.dai2"] };
    if (!m.flag("esponentiTornati")) return { id: "b-lez", chi: "penna", chiavi: ["t2b.aiuto.lez1"] };
    if (m.flag("serveRegolo") && !m.flag("righelloPreso")) return { id: "b-regolo", chi: "penna", chiavi: ["t2b.aiuto.regolo1", "t2b.aiuto.regolo2"] };
    return { id: "b-treno", chi: "penna", chiavi: ["t2b.aiuto.treno1", "t2b.aiuto.treno2"] };
  };
})();
