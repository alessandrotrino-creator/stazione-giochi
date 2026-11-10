/* =====================================================================
   Matematica · terze · Capitolo 2 · Stanza: TOURS, 1591 — lo studio di François Viète (Lez. 3 e 5)
   All'arrivo la FERMATA INTERMEDIA (Penna riassume). Poi la catena: sulla scrivania un biglietto di Madama
   Parolona scritto al contrario → lo specchietto sul davanzale → leggere allo specchio: le lettere sono chiuse
   nella macchina del cifrario, che si apre «con il segno di un vecchio greco» → la tavoletta di Diofanto
   (flag tavolettaData) sulla macchina → cade la pagina 4 del diario (il fiocco = «per», con domanda a·a)
   → LA MACCHINA: prodotto di monomi (scelta), esponente di un prodotto (TASTIERINO), potenza di un monomio
   (scelta) → l'ultima riga si blocca: manca l'uguale (Viète scrive «aequatur») → si va a Londra.
   AL RITORNO con il carattere dell'uguale: divisione di monomi (TASTIERINO) e di un polinomio per un monomio
   (scelta) → le lettere tornano; figurina; si sblocca la stazione (il finale).
   Fatti storici verificati: CAPITOLI.md (Viète avvocato; codice spagnolo del 1590; Isagoge stampata a Tours nel
   1591; vocali per le incognite, consonanti per i dati; «aequatur»). La macchina del cifrario è inventata.
   ===================================================================== */
(function () {
  Motore.aggiungi("oggetti", {
    biglietto: { icona: "ogg-biglietto-rov", nome: "ogg.biglietto", descrizione: "ogg.biglietto.d", suAltro: "biglietto.altro" },
    specchietto: { icona: "ogg-specchietto", nome: "ogg.specchietto", descrizione: "ogg.specchietto.d", suAltro: "specchietto.altro" },
    pagina4: { icona: "ogg-diario", nome: "ogg.pagina4", descrizione: "ogg.pagina4.d", suAltro: "pagina.altro" }
  });
  Motore.aggiungi("personaggi", {
    viete: { nome: "nome.viete", colore: "#b8d8a8", voce: { altezza: 170, timbro: "triangle", passo: 0.08, volume: 0.04 } }
  });
  Motore.aggiungi("figurine", {
    viete: { nome: "fig.viete.nome", anni: "fig.viete.anni", paese: "fig.viete.paese", testo: "fig.viete.testo", ritratto: "viete" }
  });
  Motore.aggiungi("combinazioni", [
    { a: "specchietto", b: "biglietto", fai: leggiAlloSpecchio }
  ]);

  (function () {
    var s = document.createElement("style");
    s.textContent =
      ".to-biglietto { margin: 10px auto 16px; max-width: 700px; padding: 22px 30px; border-radius: 6px; background: linear-gradient(#f6ecd0, #e2d0a8); color: #5a2a6a; font-size: 28px; line-height: 1.45; font-family: Georgia, serif; font-style: italic; box-shadow: 0 8px 0 rgba(0,0,0,.35); transform: scaleX(-1); transition: transform 1.2s ease-in-out; direction: ltr; }" +
      ".to-biglietto.dritto { transform: scaleX(1); }" +
      ".elemento.luci-macchina { border-radius: 4px; background: #2a2418; color: #9fffb0; font-weight: 800; font-size: 22px; display: grid; place-items: center; letter-spacing: 6px; }" +
      ".elemento.luci-macchina.accesa { background: #1a3a22; box-shadow: 0 0 18px #9fffb0; }" +
      ".elemento.luci-macchina.bloccata { background: #4a1a1a; color: #ff9a8a; box-shadow: 0 0 18px #ff6a5a; }";
    document.head.appendChild(s);
  })();

  /* numeri con esponente: 1 non si scrive */
  var APICI = "⁰¹²³⁴⁵⁶⁷⁸⁹";
  function sup(n) { return n === 1 ? "" : String(n).split("").map(function (c) { return APICI[+c]; }).join(""); }
  function M(c, lettere) {   // lettere: [["a", 3], ["b", 1]]
    var s = c === 1 ? "" : (c === -1 ? "−" : String(c).replace("-", "−"));
    return s + lettere.map(function (l) { return l[0] + sup(l[1]); }).join("");
  }

  /* ---------- il biglietto letto allo specchio ---------- */
  async function leggiAlloSpecchio(m) {
    await m.pannello(function (p, chiudi) {
      p.innerHTML = "<h2>" + Lingue.html("t2t.bigl.titolo") + "</h2>";
      var b = document.createElement("div"); b.className = "to-biglietto"; b.innerHTML = Lingue.html("t2t.bigl.testo");
      p.appendChild(b);
      setTimeout(function () { b.classList.add("dritto"); }, 700);
      var t = document.createElement("button"); t.className = "pn-tasto principale"; t.innerHTML = Lingue.html("t2.pag1.capito");
      t.addEventListener("click", function (e) { e.stopPropagation(); chiudi(); });
      p.appendChild(t);
    }, { chiudibile: false });
    m.flag("bigliettoLetto", true);
    m.togli("biglietto"); m.togli("specchietto");
    await m.pensa("t2t.bigl.1");
    await m.dice("penna", "t2t.bigl.2");
  }

  /* ---------- la tavoletta di Diofanto sulla macchina ---------- */
  async function impostaMacchina(m) {
    if (!m.flag("bigliettoLetto")) return m.dice("viete", "t2t.macc.prima");
    m.togli("tavoletta");
    m.suono("magia");
    m.flag("macchinaImpostata", true);
    await m.pensa("t2t.macc.1");
    await m.dice("viete", "t2t.macc.2");
    m.flag("pagina4ATerra", true);
    await m.dice("penna", "t2t.macc.3");
  }
  async function prendiPagina4(m) {
    m.flag("pagina4ATerra", false);
    m.flag("pagina4Presa", true);
    m.prendi("pagina4");
    await leggiPagina4(m);
  }

  /* ---------- la pagina 4 del diario: il fiocco ---------- */
  async function leggiPagina4(m) {
    var a = Alg3.a_caso(3, 6), b = Alg3.a_caso(2, 5);
    await m.pannello(function (p, chiudi) {
      p.innerHTML = "<h2>" + Lingue.html("t2t.pag4.titolo") + "</h2>" +
        '<div class="pn-diario"><div>' + Lingue.html("t2t.pag4.testo") + "</div>" +
        '<div class="riga num">' + a + Alg3.simbolo("fiocco") + b + " → " + (a * b) + "</div>" +
        '<div class="riga num">' + b + Alg3.simbolo("fiocco") + b + " → " + b + Alg3.simbolo("corona") + "</div>" +
        '<div class="firma">' + Lingue.html("t2a.pag3.firma") + "</div></div>";
      var t = document.createElement("button"); t.className = "pn-tasto principale"; t.innerHTML = Lingue.html("t2.pag1.capito");
      t.addEventListener("click", function (e) { e.stopPropagation(); chiudi(); });
      p.appendChild(t);
    }, { chiudibile: false });
    if (m.flag("fioccoCapito")) return;
    m.aiutoQui({ id: "h-fiocco", chi: "penna", chiavi: ["t2t.h.fiocco.1", "t2t.h.fiocco.2", "t2t.h.fiocco.3"] });
    for (;;) {
      var v = await m.scegli(Alg3.mescola([
        { testo: "t2t.fiocco.giusta", valore: "giusta" },
        { testo: "t2t.fiocco.doppio", valore: "doppio" },
        { testo: "t2t.fiocco.somma", valore: "somma" }
      ]), "t2t.fiocco.domanda");
      if (v === "giusta") break;
      m.suono("errore"); m.errore("t2-diario-fiocco-" + v);
      await m.dice("penna", "t2t.fiocco.err." + v);
    }
    m.suono("prendi"); m.aiutoQui(null);
    m.flag("fioccoCapito", true);
    await m.dice("penna", "t2t.fiocco.ok");
    m.annota("t2t.q.diario4");
  }

  /* ---------- 1. prodotto di due monomi (scelta) ---------- */
  async function prodotto(m) {
    var p, q, e1, e2, f2;
    do { p = Alg3.a_caso(2, 5); q = Alg3.a_caso(2, 6); e1 = Alg3.a_caso(2, 4); e2 = Alg3.a_caso(2, 3); f2 = Alg3.a_caso(2, 3); }
    while (p + q === p * q || e1 * e2 === e1 + e2 || f2 === 2 && e2 === 2 && e1 === 2);
    var A = M(p, [["a", e1], ["b", 1]]), B = M(q, [["a", e2], ["b", f2]]);
    var par = { A: A, B: B, p: String(p), q: String(q), pq: String(p * q), e1: String(e1), e2: String(e2), es: String(e1 + e2), f: String(1 + f2),
      g: M(p * q, [["a", e1 + e2], ["b", 1 + f2]]) };
    await m.dice("viete", "t2t.prod.intro", par);
    m.aiutoQui({ id: "h-prod", chi: "penna", chiavi: ["t2t.h.prod.1", "t2t.h.prod.2", "t2t.h.prod.3"], param: par });
    for (;;) {
      var v = await m.scegli(Alg3.mescola([
        { testo: "t2t.op", valore: "giusta", param: { t: par.g } },
        { testo: "t2t.op", valore: "esponenti", param: { t: M(p * q, [["a", e1 * e2], ["b", f2]]) } },
        { testo: "t2t.op", valore: "coefficienti", param: { t: M(p + q, [["a", e1 + e2], ["b", 1 + f2]]) } },
        { testo: "t2t.op", valore: "b", param: { t: M(p * q, [["a", e1 + e2], ["b", f2]]) } }
      ]), "t2t.prod.domanda", par);
      if (v === "giusta") break;
      m.suono("errore"); m.errore("t2-prodotto-" + v);
      await m.dice("penna", "t2t.prod.err." + v, par);
    }
    m.suono("prendi"); m.aiutoQui(null);
    m.flag("tProdotto", true);
    await m.dice("viete", "t2t.prod.ok", par);
    m.annota("t2t.q.prodotto");
  }

  /* ---------- 2. l'esponente di un prodotto, con il tastierino ---------- */
  async function esponente(m) {
    var a, b, c1, c2;
    do { a = Alg3.a_caso(3, 7); b = Alg3.a_caso(2, 5); } while (a * b === a + b + 1 || a === b);
    c1 = Alg3.a_caso(2, 5); c2 = Alg3.a_caso(2, 4);
    var par = { espr: M(c1, [["x", a]]) + " · " + M(c2, [["x", b]]) + " · x", c: String(c1 * c2), a: String(a), b: String(b), g: String(a + b + 1) };
    await m.dice("viete", "t2t.esp.intro", par);
    m.aiutoQui({ id: "h-esp", chi: "penna", chiavi: ["t2t.h.esp.1", "t2t.h.esp.2", "t2t.h.esp.3"], param: par });
    await Alg3.finoAlGiusto(m, "t2t.esp.domanda", par, { max: 2, promemoria: "t2t.esp.prom" }, a + b + 1, async function (n) {
      var tipo = n === a + b ? "uno" : (n === a * b ? "moltiplicati" : "calcolo");
      m.errore("t2-esponente-" + tipo);
      await m.dice("penna", "t2t.esp.err." + tipo, Object.assign({ n: String(n) }, par));
    });
    m.aiutoQui(null);
    m.flag("tEsponente", true);
    await m.dice("viete", "t2t.esp.ok", par);
  }

  /* ---------- 3. potenza di un monomio (scelta) ---------- */
  async function potenza(m) {
    var k, e, n;
    do { k = Alg3.a_caso(2, 3); e = Alg3.a_caso(2, 4); n = Alg3.a_caso(2, 3); } while (Math.pow(k, n) === k * n || e * n === e + n);
    var par = { base: "(" + M(k, [["a", e]]) + ")" + sup(n), k: String(k), e: String(e), n: String(n), kn: String(Math.pow(k, n)), en: String(e * n),
      g: M(Math.pow(k, n), [["a", e * n]]) };
    await m.dice("viete", "t2t.pot.intro", par);
    m.aiutoQui({ id: "h-pot", chi: "penna", chiavi: ["t2t.h.pot.1", "t2t.h.pot.2", "t2t.h.pot.3"], param: par });
    for (;;) {
      var v = await m.scegli(Alg3.mescola([
        { testo: "t2t.op", valore: "giusta", param: { t: par.g } },
        { testo: "t2t.op", valore: "coeff", param: { t: M(k, [["a", e * n]]) } },
        { testo: "t2t.op", valore: "per", param: { t: M(k * n, [["a", e * n]]) } },
        { testo: "t2t.op", valore: "somma", param: { t: M(Math.pow(k, n), [["a", e + n]]) } }
      ]), "t2t.pot.domanda", par);
      if (v === "giusta") break;
      m.suono("errore"); m.errore("t2-potenza-" + v);
      await m.dice("penna", "t2t.pot.err." + v, par);
    }
    m.suono("prendi"); m.aiutoQui(null);
    m.flag("tPotenza", true);
    await m.dice("viete", "t2t.pot.ok", par);
    m.annota("t2t.q.potenza");
  }

  /* ---------- l'ultima riga si blocca: manca l'uguale ---------- */
  async function blocco(m) {
    m.suono("errore");
    m.flag("toursBloccata", true);
    await m.dice("viete", "t2t.blocco.1");
    await m.dice("viete", "t2t.blocco.2");
    await m.dice("penna", "t2t.blocco.3");
    await Alg3.sblocca(m, "londra");
    await m.dice("penna", "t2t.blocco.5");
  }

  /* ---------- al ritorno: divisione di monomi (tastierino) ---------- */
  async function divisioneMonomi(m) {
    var e2, k, c2, q;
    e2 = Alg3.a_caso(3, 4); k = Alg3.a_caso(2, 3); c2 = Alg3.a_caso(2, 5); q = Alg3.a_caso(2, 4);
    var e1 = e2 * k;
    var par = { espr: M(c2 * q, [["a", e1]]) + " : " + M(c2, [["a", e2]]), q: String(q), e1: String(e1), e2: String(e2), g: String(e1 - e2) };
    await m.dice("viete", "t2t.div.intro", par);
    m.aiutoQui({ id: "h-div", chi: "penna", chiavi: ["t2t.h.div.1", "t2t.h.div.2", "t2t.h.div.3"], param: par });
    await Alg3.finoAlGiusto(m, "t2t.div.domanda", par, { max: 2, promemoria: "t2t.div.prom" }, e1 - e2, async function (n) {
      var tipo = n === e1 / e2 ? "diviso" : (n === e1 + e2 ? "somma" : "calcolo");
      m.errore("t2-divisione-" + tipo);
      await m.dice("penna", "t2t.div.err." + tipo, Object.assign({ n: String(n) }, par));
    });
    m.aiutoQui(null);
    m.flag("tDivisione", true);
    await m.dice("viete", "t2t.div.ok", par);
  }

  /* ---------- al ritorno: un polinomio diviso un monomio (scelta) ---------- */
  async function divisionePolinomio(m) {
    var k, p, q;
    do { k = Alg3.a_caso(2, 4); p = Alg3.a_caso(2, 5); q = Alg3.a_caso(2, 5); } while (p === q);
    var par = { espr: "(" + M(p * k, [["a", 3]]) + " + " + M(q * k, [["a", 2]]) + " − " + M(k, [["a", 1]]) + ") : " + M(k, [["a", 1]]), k: String(k),
      g: M(p, [["a", 2]]) + " + " + M(q, [["a", 1]]) + " − 1" };
    await m.dice("viete", "t2t.pol.intro", par);
    m.aiutoQui({ id: "h-pol", chi: "penna", chiavi: ["t2t.h.pol.1", "t2t.h.pol.2", "t2t.h.pol.3"], param: par });
    for (;;) {
      var v = await m.scegli(Alg3.mescola([
        { testo: "t2t.op", valore: "giusta", param: { t: par.g } },
        { testo: "t2t.op", valore: "zero", param: { t: M(p, [["a", 2]]) + " + " + M(q, [["a", 1]]) } },
        { testo: "t2t.op", valore: "coeff", param: { t: M(p, [["a", 3]]) + " + " + M(q, [["a", 2]]) + " − a" } },
        { testo: "t2t.op", valore: "ultimo", param: { t: M(p, [["a", 2]]) + " + " + M(q, [["a", 1]]) + " − a" } }
      ]), "t2t.pol.domanda", par);
      if (v === "giusta") break;
      m.suono("errore"); m.errore("t2-divpol-" + v);
      await m.dice("penna", "t2t.pol.err." + v, par);
    }
    m.suono("prendi"); m.aiutoQui(null);
    m.flag("tPolinomio", true);
    await m.dice("viete", "t2t.pol.ok", par);
    m.annota("t2t.q.divisione");
  }

  /* ---------- le lettere tornano ---------- */
  async function fine(m) {
    m.suono("magia");
    m.effetto("lampo-lettere", 1060, 380, 1200);
    m.flag("lettereTornate", true);
    await m.dice("penna", "t2t.fine.1");
    await m.dice("viete", "t2t.fine.2");
    m.figurina("viete");
    m.annota("t2t.q.viete");
    await m.pensa("t2t.fine.4");
    await Alg3.sblocca(m, "stazione");
    await m.dice("penna", "t2t.fine.5");
  }

  async function usaUguale(m) {
    if (!m.flag("toursBloccata")) return m.pensa("t2t.uguale.presto");
    m.togli("uguale");
    m.flag("ugualeMesso", true);
    m.suono("magia");
    await m.dice("viete", "t2t.uguale.1");
    await m.dice("penna", "t2t.uguale.2");
    return lezione(m);
  }

  async function lezione(m) {
    if (!m.flag("macchinaImpostata")) return m.pensa(m.flag("bigliettoLetto") ? "t2t.macc.chiusa2" : "t2t.macc.chiusa");
    if (m.flag("pagina4ATerra")) return m.dice("penna", "t2t.macc.3");
    if (!m.flag("fioccoCapito")) return leggiPagina4(m);
    if (!m.flag("tProdotto")) await prodotto(m);
    if (!m.flag("tEsponente")) await esponente(m);
    if (!m.flag("tPotenza")) await potenza(m);
    if (!m.flag("toursBloccata")) return blocco(m);
    if (!m.flag("ugualeMesso")) return m.dice("penna", m.ha("uguale") ? "t2t.uguale.usa" : "t2t.blocco.ancora");
    if (!m.flag("tDivisione")) await divisioneMonomi(m);
    if (!m.flag("tPolinomio")) await divisionePolinomio(m);
    if (!m.flag("lettereTornate")) return fine(m);
    return m.pensa("t2t.macc.finita");
  }

  async function dialogoViete(m) {
    var opz = [];
    if (m.flag("macchinaImpostata") && !m.flag("lettereTornate") && (!m.flag("toursBloccata") || m.flag("ugualeMesso"))) opz.push({ testo: "t2t.dlg.lezione", valore: "lezione" });
    opz.push({ testo: "t2t.dlg.chi", valore: "chi" }, { testo: "t2t.dlg.codici", valore: "codici" }, { testo: "t2t.dlg.lettere", valore: "lettere" });
    if (!m.flag("bigliettoLetto")) opz.push({ testo: "t2t.dlg.biglietto", valore: "biglietto" });
    opz.push({ testo: "t2t.dlg.ciao", valore: "ciao" });
    var v = await m.scegli(opz);
    if (v === "lezione") return lezione(m);
    if (v === "chi") { await m.dice("viete", "t2t.dlg.chi.r1"); }
    if (v === "codici") { await m.dice("viete", "t2t.dlg.codici.r1"); await m.dice("penna", "t2t.dlg.codici.r2"); }
    if (v === "lettere") { await m.dice("viete", "t2t.dlg.lettere.r1"); await m.dice("viete", "t2t.dlg.lettere.r2"); await m.dice("penna", "t2t.dlg.lettere.r3"); }
    if (v === "biglietto") await m.dice("viete", "t2t.dlg.biglietto.r");
    if (v === "ciao") await m.dice("viete", "t2t.dlg.ciao.r");
  }

  Motore.stanza("tours", {
    sfondo: "tours",
    pavimento: { xMin: 170, xMax: 1240, yMin: 720, yMax: 880 },
    scala: { lontano: { y: 720, s: 0.86 }, vicino: { y: 880, s: 1 } },
    attori: [
      { id: "zara", simbolo: "zara-fronte", viste: { fronte: "zara-fronte", profilo: "zara-profilo", schiena: "zara-schiena" },
        vista: [-110, -600, 230, 615], piedi: [5, 0], altezza: 440, x: 260, y: 850, dir: 1 },
      { id: "viete", simbolo: "viete", vista: [-110, -600, 230, 615], piedi: [0, 0], altezza: 450, x: 1340, y: 800, dir: -1, fisso: true }
    ],
    elementi: [
      { id: "biglietto", classe: "", x: 440, y: 586, larghezza: 54, altezza: 54, rotazione: 10,
        svg: '<svg viewBox="0 0 140 140"><use href="#ogg-biglietto-rov"/></svg>',
        visibile: function (m) { return !m.flag("bigliettoPreso"); } },
      { id: "specchietto", classe: "", x: 690, y: 412, larghezza: 46, altezza: 46, rotazione: -14,
        svg: '<svg viewBox="0 0 140 140"><use href="#ogg-specchietto"/></svg>',
        visibile: function (m) { return !m.flag("specchiettoPreso"); } },
      { id: "riflesso", classe: "", x: 640, y: 60, larghezza: 60, altezza: 30,
        svg: '<svg viewBox="0 0 60 30"><ellipse cx="30" cy="15" rx="28" ry="12" fill="#fff6c0" opacity=".55"/></svg>',
        visibile: function (m) { return !m.flag("specchiettoPreso"); } },
      { id: "luci", classe: "luci-macchina", x: 950, y: 350, larghezza: 220, altezza: 40, svg: "<span></span>",
        stato: function (m) { return m.flag("lettereTornate") || (m.flag("macchinaImpostata") && !m.flag("toursBloccata")) || m.flag("ugualeMesso") ? "accesa" : (m.flag("toursBloccata") ? "bloccata" : ""); } },
      { id: "luci-lettere", classe: "luci-macchina accesa", x: 950, y: 350, larghezza: 220, altezza: 40, testo: "t2t.luci.lettere",
        visibile: function (m) { return m.flag("lettereTornate"); } },
      { id: "luci-blocco", classe: "luci-macchina bloccata", x: 950, y: 350, larghezza: 220, altezza: 40, testo: "t2t.luci.blocco",
        visibile: function (m) { return m.flag("toursBloccata") && !m.flag("ugualeMesso"); } },
      { id: "pagina4", classe: "", x: 1000, y: 690, larghezza: 56, altezza: 56, rotazione: 18,
        svg: '<svg viewBox="0 0 140 140"><use href="#ogg-diario"/></svg>',
        visibile: function (m) { return m.flag("pagina4ATerra"); } },
      { id: "penna", classe: "penna-el", personaggio: "penna", x: 560, y: 300, larghezza: 80, altezza: 128,
        svg: '<svg viewBox="-70 -230 150 240" overflow="visible"><use href="#penna" x="-70" y="-230" width="150" height="240"/></svg>' }
    ],
    entrata: async function (m) {
      if (m.flag("toursArrivo")) {
        if (m.ha("uguale") && !m.flag("ugualeMesso")) await m.dice("penna", "t2t.ritorno");
        return;
      }
      m.flag("toursArrivo", true);
      /* fermata intermedia: metà capitolo, punto sicuro per fermarsi */
      await m.cartello("t2t.fermata.titolo", "t2t.fermata.sotto", 3600);
      await m.dice("penna", "t2t.fermata.1");
      await m.dice("penna", "t2t.fermata.2");
      await m.cartello("t2t.titolo", "t2t.sottotitolo", 3000);
      await m.dice("narratore", "t2t.arrivo.1");
      await m.dice("viete", "t2t.arrivo.2");
      await m.dice("penna", "t2t.arrivo.4");
    },
    hotspot: [
      { id: "finestra", nome: "t2t.hs.finestra", forma: "M420 110 H780 V440 H420 Z", arrivo: [600, 740], vista: "schiena",
        guarda: "t2t.finestra.guarda", usa: "t2t.finestra.usa", parla: "t2t.finestra.parla" },
      { id: "specchietto", nome: "t2t.hs.specchietto", forma: "M664 400 H716 V450 H664 Z", arrivo: [690, 740], vista: "schiena",
        presente: function (m) { return !m.flag("specchiettoPreso"); },
        guarda: "t2t.specchietto.guarda",
        usa: async function (m) { m.flag("specchiettoPreso", true); m.prendi("specchietto"); await m.pensa("t2t.specchietto.prendi"); },
        parla: "t2t.specchietto.parla" },
      { id: "libreria", nome: "t2t.hs.libreria", forma: "M40 120 H340 V720 H40 Z", arrivo: [300, 760], vista: "schiena",
        guarda: "t2t.libreria.guarda", usa: "t2t.libreria.usa", parla: "t2t.libreria.parla" },
      { id: "mappamondo", nome: "t2t.hs.mappamondo", forma: "M126 390 H214 V480 H126 Z", arrivo: [260, 760], vista: "schiena",
        guarda: "t2t.mappa.guarda", usa: "t2t.mappa.usa", parla: "t2t.mappa.parla" },
      { id: "biglietto", nome: "t2t.hs.biglietto", forma: "M410 576 H474 V630 H410 Z", arrivo: [450, 740], vista: "schiena",
        presente: function (m) { return !m.flag("bigliettoPreso"); },
        guarda: "t2t.bigl.guarda",
        usa: async function (m) { m.flag("bigliettoPreso", true); m.prendi("biglietto"); await m.pensa("t2t.bigl.prendi"); },
        parla: "t2t.bigl.parla" },
      { id: "scrivania", nome: "t2t.hs.scrivania", forma: "M340 600 H880 V760 H340 Z", arrivo: [620, 770], vista: "schiena",
        guarda: "t2t.scriv.guarda", usa: "t2t.scriv.usa", parla: "t2t.scriv.parla", con: { biglietto: "t2t.scriv.biglietto" }, conAltro: "t2t.scriv.altro" },
      { id: "candela", nome: "t2t.hs.candela", forma: "M796 480 H846 V606 H796 Z", arrivo: [800, 740], vista: "schiena",
        guarda: "t2t.candela.guarda", usa: "t2t.candela.usa", parla: "t2t.candela.parla", con: { biglietto: "t2t.candela.biglietto" }, conAltro: "t2t.candela.altro" },
      { id: "macchina", nome: "t2t.hs.macchina", forma: "M900 330 H1240 V640 H900 Z", arrivo: [1060, 740], vista: "schiena",
        guarda: function (m) { return m.flag("lettereTornate") ? "t2t.macc.guarda3" : (m.flag("macchinaImpostata") ? "t2t.macc.guarda2" : "t2t.macc.guarda"); },
        usa: lezione, parla: "t2t.macc.parla",
        con: { tavoletta: impostaMacchina, uguale: usaUguale, biglietto: "t2t.macc.biglietto" }, conAltro: "t2t.macc.altro" },
      { id: "pagina4", nome: "t2t.hs.pagina4", forma: "M990 680 H1066 V746 H990 Z", arrivo: [1020, 770], vista: "schiena",
        presente: function (m) { return m.flag("pagina4ATerra"); },
        guarda: "t2t.pag4.guarda", usa: prendiPagina4, parla: "t2t.pag4.parla" },
      { id: "camino", nome: "t2t.hs.camino", forma: "M1260 200 H1290 V640 H1260 Z M1530 200 H1560 V640 H1530 Z M1260 200 H1560 V250 H1260 Z", arrivo: [1200, 760], vista: "schiena",
        guarda: "t2t.camino.guarda", usa: "t2t.camino.usa", parla: "t2t.camino.parla", con: { biglietto: "t2t.camino.biglietto" }, conAltro: "t2t.camino.altro" },
      { id: "viete", nome: "t2t.hs.viete", forma: "M1270 330 H1430 V800 H1270 Z", arrivo: [1200, 820], verso: 1,
        guarda: "t2t.viete.guarda", usa: "t2t.viete.usa", parla: dialogoViete,
        con: { biglietto: "t2t.viete.biglietto", specchietto: "t2t.viete.specchietto", tavoletta: "t2t.viete.tavoletta", uguale: "t2t.viete.uguale", disegno: "t2t.viete.disegno" },
        conAltro: "t2t.viete.altro" },
      { id: "penna", nome: "t2a.hs.penna", forma: "M550 260 H650 V404 H550 Z", arrivo: [540, 760], vista: "schiena",
        guarda: "t2t.penna.guarda", usa: "t2a.penna.usa", parla: "t2t.penna.parla", conAltro: "t2a.penna.altro" },
      { id: "treno", nome: "t2t.hs.treno", forma: "M-10 160 H40 V720 H-10 Z M0 720 H170 V900 H0 Z", arrivo: [200, 840], verso: -1,
        guarda: "t2t.treno.guarda", usa: Alg3.sali, parla: "t2a.treno.parla" }
    ]
  });

  /* ---------- aiuti a gradini ---------- */
  Alg3.aiutiStanze.tours = function (m) {
    if (!m.flag("bigliettoLetto")) {
      if (!m.ha("biglietto")) return { id: "to-bigl", chi: "penna", chiavi: ["t2t.aiuto.bigl1", "t2t.aiuto.bigl2"] };
      if (!m.ha("specchietto")) return { id: "to-spec", chi: "penna", chiavi: ["t2t.aiuto.spec1", "t2t.aiuto.spec2", "t2t.aiuto.spec3"] };
      return { id: "to-leggi", chi: "zara", chiavi: ["t2t.aiuto.leggi1", "t2t.aiuto.leggi2"] };
    }
    if (!m.flag("macchinaImpostata")) return { id: "to-tav", chi: "penna", chiavi: ["t2t.aiuto.tav1", "t2t.aiuto.tav2", "t2t.aiuto.tav3"] };
    if (m.flag("pagina4ATerra")) return { id: "to-pag", chi: "penna", chiavi: ["t2t.aiuto.pag1"] };
    if (!m.flag("toursBloccata")) return { id: "to-lez", chi: "penna", chiavi: ["t2t.aiuto.lez1"] };
    if (!m.flag("ugualeMesso")) {
      if (m.ha("uguale")) return { id: "to-ug", chi: "penna", chiavi: ["t2t.aiuto.ug1", "t2t.aiuto.ug2"] };
      return { id: "to-londra", chi: "penna", chiavi: ["t2t.aiuto.londra1", "t2t.aiuto.londra2"] };
    }
    if (!m.flag("lettereTornate")) return { id: "to-lez2", chi: "penna", chiavi: ["t2t.aiuto.lez1"] };
    return { id: "to-fine", chi: "penna", chiavi: ["t2t.aiuto.fine1", "t2t.aiuto.fine2"] };
  };
})();
