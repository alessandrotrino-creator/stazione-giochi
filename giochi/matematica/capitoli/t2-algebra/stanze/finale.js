/* =====================================================================
   Matematica · terze · Capitolo 2 · Stanza: IL FINALE — l'atrio della Stazione dei giochi, oggi (Lez. 5 e 6)
   Madama Parolona rifà il pavimento sostenendo che (a + b)² = a² + b²: nel riquadro restano due buchi.
   DECIFRARE CON UN DISEGNO: il disegno del quadrato completato di al-Khwarizmi (oggetto «disegno», da Baghdad)
   usato sul riquadro mostra i due rettangoli ab (ricordo di Euclide, Elementi II, 4) → BIVIO DI CLASSE sul
   quadrato di un binomio (scelta, numeri a caso) → rettangolo (a + p)(a + q): quante strisce a × 1 (TASTIERINO)
   → somma per differenza (scelta) → cubo con gli 8 blocchi: quanti blocchi a·a·b (TASTIERINO)
   → l'ultima pagina del diario, tutta nei simboli di Madama Parolona, da leggere (scelta) → si commuove;
   nel diario il biglietto con il timbro del Barone; manca ancora la x (CLIFFHANGER) → ripasso,
   «Vero o inventato?», fine.
   Fatti verificati: CAPITOLI.md (Euclide, Elementi II, 4; al-Khwarizmi e il quadrato completato).
   ===================================================================== */
(function () {
  Motore.aggiungi("oggetti", {
    pagina6: { icona: "ogg-diario", nome: "ogg.pagina6", descrizione: "ogg.pagina6.d", suAltro: "pagina.altro" }
  });
  var EUCLIDE = '<svg viewBox="0 0 140 160"><g stroke="#1d1428" stroke-width="3" stroke-linejoin="round">' +
    '<path d="M20 160 C24 120 40 104 70 102 C100 104 116 120 120 160 Z" fill="#e8e0c8"/>' +
    '<path d="M20 160 C30 128 46 112 66 110 L54 160 Z" fill="#7a5a9a"/>' +
    '<path d="M60 92 L58 106 H82 L80 92 Z" fill="#e8b890"/>' +
    '<ellipse cx="70" cy="64" rx="28" ry="34" fill="#e8b890"/>' +
    '<path d="M42 70 C40 96 56 112 70 112 C84 112 100 96 98 70 C92 84 82 86 70 84 C58 86 48 84 42 70 Z" fill="#9a9088"/>' +
    '<path d="M42 56 C42 30 98 28 98 56 C92 44 80 40 70 40 C58 40 48 44 42 56 Z" fill="#9a9088"/>' +
    '<ellipse cx="60" cy="62" rx="3" ry="4" fill="#1d1428"/><ellipse cx="80" cy="62" rx="3" ry="4" fill="#1d1428"/>' +
    '<path d="M62 84 Q70 88 78 84" fill="none" stroke="#6a2a26"/>' +
    '<rect x="96" y="118" width="34" height="34" fill="#f6ecd0"/><path d="M96 118 L130 152 M113 118 V152 M96 135 H130" stroke="#5a3a6a" stroke-width="2"/></g></svg>';
  Motore.aggiungi("figurine", {
    euclide: { nome: "fig.euclide.nome", anni: "fig.euclide.anni", paese: "fig.euclide.paese", testo: "fig.euclide.testo", ritratto: EUCLIDE }
  });

  (function () {
    var s = document.createElement("style");
    s.textContent =
      ".fi-figura { display: flex; justify-content: center; margin: 4px 0 12px; direction: ltr; }" +
      ".fi-figura svg { max-height: 300px; width: auto; }" +
      ".fi-figura text { font: 700 22px Georgia, serif; fill: #1d1428; }" +
      ".fi-diario .riga { font-size: 34px; gap: 8px; flex-wrap: wrap; }" +
      ".fi-diario .parola { font-family: Georgia, serif; font-style: italic; font-size: 30px; }";
    document.head.appendChild(s);
  })();

  /* ---------- figure in SVG, per i pannelli ---------- */
  function quadrato(completo) {
    var a = 180, b = 90, g = "";
    g += '<rect x="20" y="20" width="' + a + '" height="' + a + '" fill="#e88a6a" stroke="#1d1428" stroke-width="4"/>';
    g += '<rect x="' + (20 + a) + '" y="' + (20 + a) + '" width="' + b + '" height="' + b + '" fill="#6ab0d8" stroke="#1d1428" stroke-width="4"/>';
    var r = completo ? 'fill="#f2d26a"' : 'fill="#2a2440" stroke-dasharray="10 8"';
    g += '<rect x="' + (20 + a) + '" y="20" width="' + b + '" height="' + a + '" ' + r + ' stroke="#1d1428" stroke-width="4"/>';
    g += '<rect x="20" y="' + (20 + a) + '" width="' + a + '" height="' + b + '" ' + r + ' stroke="#1d1428" stroke-width="4"/>';
    g += '<text x="' + (20 + a / 2 - 14) + '" y="' + (20 + a / 2 + 8) + '">a²</text><text x="' + (20 + a + b / 2 - 14) + '" y="' + (20 + a + b / 2 + 8) + '">b²</text>';
    if (completo) g += '<text x="' + (20 + a + b / 2 - 16) + '" y="' + (20 + a / 2 + 8) + '">ab</text><text x="' + (20 + a / 2 - 16) + '" y="' + (20 + a + b / 2 + 8) + '">ab</text>';
    else g += '<text x="' + (20 + a + b / 2 - 8) + '" y="' + (20 + a / 2 + 8) + '" style="fill:#ffd36b">?</text><text x="' + (20 + a / 2 - 8) + '" y="' + (20 + a + b / 2 + 8) + '" style="fill:#ffd36b">?</text>';
    g += '<text x="' + (20 + a / 2 - 6) + '" y="16">a</text><text x="' + (20 + a + b / 2 - 6) + '" y="16">b</text>';
    return '<svg viewBox="0 -10 320 330">' + g + "</svg>";
  }
  function rettangolo(p, q) {
    var A = 150, u = 30, g = "", x0 = 20, y0 = 30;
    g += '<rect x="' + x0 + '" y="' + y0 + '" width="' + A + '" height="' + A + '" fill="#e88a6a" stroke="#1d1428" stroke-width="3"/><text x="' + (x0 + A / 2 - 14) + '" y="' + (y0 + A / 2 + 8) + '">a²</text>';
    for (var i = 0; i < q; i++) g += '<rect x="' + (x0 + A + i * u) + '" y="' + y0 + '" width="' + u + '" height="' + A + '" fill="#f2d26a" stroke="#1d1428" stroke-width="3"/>';
    for (var j = 0; j < p; j++) g += '<rect x="' + x0 + '" y="' + (y0 + A + j * u) + '" width="' + A + '" height="' + u + '" fill="#f2d26a" stroke="#1d1428" stroke-width="3"/>';
    for (i = 0; i < q; i++) for (j = 0; j < p; j++) g += '<rect x="' + (x0 + A + i * u) + '" y="' + (y0 + A + j * u) + '" width="' + u + '" height="' + u + '" fill="#6ab0d8" stroke="#1d1428" stroke-width="3"/>';
    g += '<text x="' + (x0 + A / 2 - 6) + '" y="' + (y0 - 8) + '">a</text><text x="' + (x0 + A + q * u / 2 - 6) + '" y="' + (y0 - 8) + '">' + q + "</text>";
    return '<svg viewBox="0 0 ' + (x0 + A + q * u + 20) + " " + (y0 + A + p * u + 20) + '">' + g + "</svg>";
  }
  function cubo() {
    // otto blocchi di un cubo (a + b)³ smontato: 1 grande, 3 «a·a·b», 3 «a·b·b», 1 piccolo
    function blocco(x, y, w, h, d, c) {
      return '<g stroke="#1d1428" stroke-width="2.5" stroke-linejoin="round">' +
        '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>' +
        '<path d="M' + x + " " + y + " l" + d + " " + (-d) + " h" + w + " l" + (-d) + " " + d + ' Z" fill="#fff" fill-opacity=".45"/>' +
        '<path d="M' + (x + w) + " " + y + " l" + d + " " + (-d) + " v" + h + " l" + (-d) + " " + d + ' Z" fill="#000" fill-opacity=".18"/></g>';
    }
    var g = blocco(20, 70, 110, 110, 40, "#e88a6a");
    g += blocco(190, 70, 110, 110, 18, "#f2d26a") + blocco(330, 112, 110, 50, 40, "#f2d26a") + blocco(470, 70, 50, 110, 40, "#f2d26a");
    g += blocco(190, 250, 50, 50, 40, "#9ad88a") + blocco(280, 230, 110, 50, 18, "#9ad88a") + blocco(430, 250, 50, 110, 18, "#9ad88a");
    g += blocco(540, 260, 50, 50, 18, "#6ab0d8");
    return '<svg viewBox="0 0 620 380">' + g + "</svg>";
  }

  function pannelloFigura(m, titolo, figura, testo, param) {
    return m.pannello(function (p, chiudi) {
      p.innerHTML = "<h2>" + Lingue.html(titolo, param) + '</h2><div class="fi-figura">' + figura + "</div>" + (testo ? '<p class="pn-guida">' + Lingue.html(testo, param) + "</p>" : "");
      var t = document.createElement("button"); t.className = "pn-tasto principale"; t.innerHTML = Lingue.html("t2.pag1.capito");
      t.addEventListener("click", function (e) { e.stopPropagation(); chiudi(); });
      p.appendChild(t);
    }, { chiudibile: false });
  }

  /* ---------- il disegno di al-Khwarizmi sul riquadro ---------- */
  async function usaDisegno(m) {
    m.flag("disegnoUsato", true);
    m.suono("magia");
    await m.pensa("t2f.dis.1");
    await pannelloFigura(m, "t2f.dis.titolo", quadrato(false), "t2f.dis.guida");
    await m.dice("penna", "t2f.dis.2");
    m.figurina("euclide");
    await m.dice("parolona", "t2f.dis.4");
    return lezione(m);
  }

  /* ---------- 1. bivio di classe: il quadrato di un binomio ---------- */
  async function bivio(m) {
    var k = Alg3.a_caso(3, 7);
    var par = { k: String(k), k2: String(k * k), d: String(2 * k), g: "x² + " + 2 * k + "x + " + k * k };
    await m.dice("parolona", "t2f.biv.intro", par);
    m.aiutoQui({ id: "h-bivio-fi", chi: "penna", chiavi: ["t2f.h.biv.1", "t2f.h.biv.2", "t2f.h.biv.3"], param: par });
    for (;;) {
      var v = await m.scegli(Alg3.mescola([
        { testo: "t2t.op", valore: "giusta", param: { t: par.g } },
        { testo: "t2t.op", valore: "dimentica", param: { t: "x² + " + k * k } },
        { testo: "t2t.op", valore: "uno", param: { t: "x² + " + k + "x + " + k * k } },
        { testo: "t2t.op", valore: "doppio", param: { t: "x² + " + 2 * k + "x + " + 2 * k } }
      ]), "t2f.biv.domanda", par);
      if (v === "giusta") break;
      m.suono("errore"); m.errore("t2-quadrato-" + v);
      await m.dice("penna", "t2f.biv.err." + v, par);
    }
    m.suono("prendi"); m.aiutoQui(null);
    m.flag("fBivio", true);
    m.flag("pavimentoFatto", true);
    await pannelloFigura(m, "t2f.dis.titolo2", quadrato(true), "t2f.biv.regola");
    await m.dice("parolona", "t2f.biv.ok");
    m.annota("t2f.q.quadrato");
  }

  /* ---------- 2. il rettangolo (a + p)(a + q), con il tastierino ---------- */
  async function rett(m) {
    var p, q; do { p = Alg3.a_caso(2, 4); q = Alg3.a_caso(2, 5); } while (p === q || p + q === p * q);
    var par = { p: String(p), q: String(q), s: String(p + q), pq: String(p * q), g: "a² + " + (p + q) + "a + " + p * q };
    await m.dice("parolona", "t2f.ret.intro", par);
    await pannelloFigura(m, "t2f.ret.titolo", rettangolo(p, q), "t2f.ret.guida", par);
    m.aiutoQui({ id: "h-ret", chi: "penna", chiavi: ["t2f.h.ret.1", "t2f.h.ret.2", "t2f.h.ret.3"], param: par });
    await Alg3.finoAlGiusto(m, "t2f.ret.domanda", par, { max: 2, promemoria: "t2f.ret.prom" }, p + q, async function (n) {
      var tipo = n === p * q ? "prodotto" : (n === p || n === q ? "meta" : "calcolo");
      m.errore("t2-rettangolo-" + tipo);
      await m.dice("penna", "t2f.ret.err." + tipo, Object.assign({ n: String(n) }, par));
    });
    m.aiutoQui(null);
    m.flag("fRett", true);
    await m.dice("penna", "t2f.ret.ok", par);
    m.annota("t2f.q.prodotto");
  }

  /* ---------- 3. somma per differenza (scelta) ---------- */
  async function differenza(m) {
    var k = Alg3.a_caso(3, 9);
    var par = { k: String(k), k2: String(k * k), espr: "(x + " + k + ")(x − " + k + ")", g: "x² − " + k * k };
    await m.dice("parolona", "t2f.dif.intro", par);
    m.aiutoQui({ id: "h-dif", chi: "penna", chiavi: ["t2f.h.dif.1", "t2f.h.dif.2", "t2f.h.dif.3"], param: par });
    for (;;) {
      var v = await m.scegli(Alg3.mescola([
        { testo: "t2t.op", valore: "giusta", param: { t: par.g } },
        { testo: "t2t.op", valore: "segno", param: { t: "x² + " + k * k } },
        { testo: "t2t.op", valore: "quadrato", param: { t: "x² − " + 2 * k + "x − " + k * k } },
        { testo: "t2t.op", valore: "noquad", param: { t: "x² − " + k } }
      ]), "t2f.dif.domanda", par);
      if (v === "giusta") break;
      m.suono("errore"); m.errore("t2-differenza-" + v);
      await m.dice("penna", "t2f.dif.err." + v, par);
    }
    m.suono("prendi"); m.aiutoQui(null);
    m.flag("fDiff", true);
    await m.dice("penna", "t2f.dif.ok", par);
    m.annota("t2f.q.differenza");
  }

  /* ---------- 4. il cubo con gli 8 blocchi (tastierino) ---------- */
  async function cuboBin(m) {
    await m.dice("parolona", "t2f.cubo.intro");
    await pannelloFigura(m, "t2f.cubo.titolo", cubo(), "t2f.cubo.guida");
    m.aiutoQui({ id: "h-cubo", chi: "penna", chiavi: ["t2f.h.cubo.1", "t2f.h.cubo.2", "t2f.h.cubo.3"] });
    await Alg3.finoAlGiusto(m, "t2f.cubo.domanda", {}, { max: 1, promemoria: "t2f.cubo.prom" }, 3, async function (n) {
      var tipo = n === 1 ? "uno" : (n === 2 ? "due" : "calcolo");
      m.errore("t2-cubo-" + tipo);
      await m.dice("penna", "t2f.cubo.err." + tipo, { n: String(n) });
    });
    m.aiutoQui(null);
    m.flag("fCubo", true);
    await m.dice("penna", "t2f.cubo.ok");
    m.annota("t2f.q.cubo");
  }

  /* ---------- l'ultima pagina del diario, tutta in simboli ---------- */
  async function ultimaPagina(m) {
    var S = Alg3.simbolo;
    await m.dice("parolona", "t2f.diario.1");
    m.prendi("pagina6");
    await m.pannello(function (p, chiudi) {
      p.innerHTML = "<h2>" + Lingue.html("t2f.diario.titolo") + "</h2>" +
        '<div class="pn-diario fi-diario">' +
        '<div class="riga num">(a' + S("stella") + "b)" + S("corona") + S("ricciolo") + "a" + S("corona") + S("stella") + "2" + S("fiocco") + "a" + S("fiocco") + "b" + S("stella") + "b" + S("corona") + "</div>" +
        '<div class="riga"><span class="parola">' + Lingue.html("t2f.diario.io") + "</span>" + S("stella") + '<span class="parola">' + Lingue.html("t2f.diario.voi") + "</span>" + S("ricciolo") + '<span class="parola">' + Lingue.html("t2f.diario.amici") + "</span></div>" +
        '<div class="firma">' + Lingue.html("t2a.pag3.firma") + "</div></div>";
      var t = document.createElement("button"); t.className = "pn-tasto principale"; t.innerHTML = Lingue.html("t2.pag1.capito");
      t.addEventListener("click", function (e) { e.stopPropagation(); chiudi(); });
      p.appendChild(t);
    }, { chiudibile: false });
    m.aiutoQui({ id: "h-diario6", chi: "penna", chiavi: ["t2f.h.dia.1", "t2f.h.dia.2", "t2f.h.dia.3"] });
    for (;;) {
      var v = await m.scegli(Alg3.mescola([
        { testo: "t2f.dia.giusta", valore: "giusta" },
        { testo: "t2f.dia.meno", valore: "meno" },
        { testo: "t2f.dia.per", valore: "per" },
        { testo: "t2f.dia.quadrato", valore: "quadrato" }
      ]), "t2f.dia.domanda");
      if (v === "giusta") break;
      m.suono("errore"); m.errore("t2-diario-ultima-" + v);
      await m.dice("penna", "t2f.dia.err." + v);
    }
    m.suono("prendi"); m.aiutoQui(null);
    m.flag("diarioLetto", true);
  }

  /* ---------- finale e cliffhanger ---------- */
  async function finale(m) {
    await m.dice("parolona", "t2f.fine.1");
    await m.pensa("t2f.fine.3");
    await m.dice("parolona", "t2f.fine.4");
    await m.dice("parolona", "t2f.fine.5");
    m.suono("magia");
    m.effetto("lampo-lettere", 800, 420, 1200);
    m.flag("simboliTornati", true);
    await m.dice("penna", "t2f.fine.7");
    await m.dice("parolona", "t2f.fine.8");
    await m.pensa("t2f.fine.9");
    m.flag("finaleFatto", true);
    m.annota("t2f.q.diario");
    await m.cartello("t2f.continua", "t2f.continua.sotto", 4200);
    await ripasso(m);
    await veroInventato(m);
    m.fine("t2f.fine.titolo", "t2f.fine.testo");
  }

  async function lezione(m) {
    if (!m.flag("disegnoUsato")) return m.dice("parolona", "t2f.pav.prima");
    if (!m.flag("fBivio")) await bivio(m);
    if (!m.flag("fRett")) await rett(m);
    if (!m.flag("fDiff")) await differenza(m);
    if (!m.flag("fCubo")) await cuboBin(m);
    if (!m.flag("diarioLetto")) await ultimaPagina(m);
    if (!m.flag("finaleFatto")) return finale(m);
  }

  /* ---------- ripasso e «Vero o inventato?» ---------- */
  function crea(tag, html) { var e = document.createElement(tag); e.innerHTML = html; return e; }
  function bottone(html, fai) { var b = crea("button", html); b.className = "pn-tasto principale"; b.addEventListener("click", function (e) { e.stopPropagation(); fai(); }); return b; }
  async function ripasso(m) {
    await m.pannello(function (p, chiudi) {
      p.appendChild(crea("h2", Lingue.html("t2f.rip.titolo")));
      var l = crea("ul", ""); l.className = "pn-elenco";
      for (var i = 1; i <= 8; i++) l.appendChild(crea("li", Lingue.html("t2f.rip." + i)));
      p.appendChild(l);
      p.appendChild(bottone(Lingue.html("t2f.avanti"), chiudi));
    }, { chiudibile: false, aiuto: false });
  }
  var VERO_INVENTATO = [["t2f.vi.1", true], ["t2f.vi.2", false], ["t2f.vi.3", true], ["t2f.vi.4", true], ["t2f.vi.5", false], ["t2f.vi.6", false], ["t2f.vi.7", false]];
  async function veroInventato(m) {
    var indice = 0, giuste = 0;
    await m.pannello(function (p, chiudi) {
      function disegna() {
        p.innerHTML = "";
        p.appendChild(crea("h2", Lingue.html("t2f.vi.titolo") + ' <small style="color:#c8c4dc">' + Math.min(indice + 1, VERO_INVENTATO.length) + "/" + VERO_INVENTATO.length + "</small>"));
        if (indice >= VERO_INVENTATO.length) {
          p.appendChild(crea("p", Lingue.html("t2f.vi.fine", { giuste: String(giuste), totale: String(VERO_INVENTATO.length) })));
          p.appendChild(bottone(Lingue.html("t2f.avanti"), chiudi));
          return;
        }
        var d = VERO_INVENTATO[indice];
        p.appendChild(crea("p", '<b style="font-size:1.2em">' + Lingue.html(d[0]) + "</b>"));
        var riga = crea("div", ""); riga.style.display = "flex"; riga.style.gap = "16px";
        [[true, "t2f.vi.vero"], [false, "t2f.vi.inventato"]].forEach(function (s) {
          riga.appendChild(bottone(Lingue.html(s[1]), function () {
            var ok = s[0] === d[1];
            if (ok) giuste++;
            Suoni.effetto(ok ? "prendi" : "errore");
            p.querySelectorAll("button").forEach(function (b) { b.disabled = true; });
            var e = crea("div", Lingue.html(ok ? "t2f.vi.ok" : "t2f.vi.no") + " " + Lingue.html(d[0] + ".spiega"));
            e.className = "pn-losapevi";
            p.appendChild(e);
            p.appendChild(bottone(Lingue.html("t2f.avanti"), function () { indice++; disegna(); }));
          }));
        });
        p.appendChild(riga);
      }
      disegna();
    }, { chiudibile: false, aiuto: false });
  }

  /* il riquadro del pavimento: le piastrelle a² e b² già posate, due buchi (o tutto completo) */
  function riquadro(completo) {
    var r = completo ? '<use href="#at-rettangolo" x="200" y="20" width="100" height="180"/><use href="#at-rettangolo" x="20" y="200" width="180" height="100"/>'
      : '<rect x="200" y="20" width="100" height="180" fill="#2a2440" stroke="#1d1428" stroke-width="4"/><rect x="20" y="200" width="180" height="100" fill="#2a2440" stroke="#1d1428" stroke-width="4"/>';
    return '<svg viewBox="0 0 320 320" preserveAspectRatio="none"><rect x="10" y="10" width="300" height="300" fill="#3a2a50"/>' +
      '<use href="#at-quadrato-a" x="20" y="20" width="180" height="180"/><use href="#at-quadrato-b" x="200" y="200" width="100" height="100"/>' + r + "</svg>";
  }

  Motore.stanza("finale", {
    sfondo: "atrio2",
    pavimento: { xMin: 160, xMax: 1180, yMin: 720, yMax: 880 },
    scala: { lontano: { y: 720, s: 0.88 }, vicino: { y: 880, s: 1 } },
    attori: [
      { id: "zara", simbolo: "zara-fronte", viste: { fronte: "zara-fronte", profilo: "zara-profilo", schiena: "zara-schiena" },
        vista: [-110, -600, 230, 615], piedi: [5, 0], altezza: 440, x: 220, y: 850, dir: 1 },
      { id: "parolona", simbolo: "parolona", vista: [-150, -700, 300, 715], piedi: [0, 0], altezza: 480, x: 1300, y: 800, dir: -1, fisso: true }
    ],
    elementi: [
      { id: "riquadro-buchi", classe: "", x: 660, y: 690, larghezza: 300, altezza: 110, svg: riquadro(false),
        visibile: function (m) { return !m.flag("pavimentoFatto"); } },
      { id: "riquadro-pieno", classe: "", x: 660, y: 690, larghezza: 300, altezza: 110, svg: riquadro(true),
        visibile: function (m) { return m.flag("pavimentoFatto"); } },
      { id: "tabellone-8", classe: "", x: 650, y: 222, larghezza: 440, altezza: 28,
        svg: '<svg viewBox="0 0 440 28"><text x="0" y="22" fill="#9fffb0" font-family="monospace" font-weight="700" font-size="24">STAZIONE · IN ARRIVO</text></svg>' },
      { id: "penna", classe: "penna-el", personaggio: "penna", x: 480, y: 360, larghezza: 80, altezza: 128,
        svg: '<svg viewBox="-70 -230 150 240" overflow="visible"><use href="#penna" x="-70" y="-230" width="150" height="240"/></svg>' }
    ],
    entrata: async function (m) {
      if (m.flag("finaleArrivo")) return;
      m.flag("finaleArrivo", true);
      await m.cartello("t2f.titolo", "t2f.sottotitolo", 3000);
      await m.dice("narratore", "t2f.arrivo.1");
      await m.dice("parolona", "t2f.arrivo.2");
      await m.dice("penna", "t2f.arrivo.4");
      await m.pensa("t2f.arrivo.5");
    },
    hotspot: [
      { id: "riquadro", nome: "t2f.hs.riquadro", forma: "M640 680 H980 V810 H640 Z", arrivo: [600, 830], verso: 1,
        guarda: function (m) { return m.flag("pavimentoFatto") ? "t2f.riq.guarda2" : "t2f.riq.guarda"; },
        usa: function (m) { return m.flag("disegnoUsato") ? lezione(m) : m.pensa("t2f.riq.usa"); },
        parla: "t2f.riq.parla", con: { disegno: usaDisegno }, conAltro: "t2f.riq.altro" },
      { id: "parolona", nome: "t2f.hs.parolona", forma: "M1220 280 H1400 V800 H1220 Z", arrivo: [1160, 820], verso: 1,
        guarda: "t2f.par.guarda", usa: "t2f.par.usa",
        parla: function (m) { return m.flag("disegnoUsato") ? lezione(m) : m.dice("parolona", "t2f.pav.prima"); },
        con: { disegno: "t2f.par.disegno" }, conAltro: "t2f.par.altro" },
      { id: "tabellone", nome: "t2f.hs.tabellone", forma: "M480 120 H1120 V320 H480 Z", arrivo: [800, 740], vista: "schiena",
        guarda: "t2f.tab.guarda", usa: "t2f.tab.usa", parla: "t2f.tab.parla" },
      { id: "orologio", nome: "t2f.hs.orologio", forma: "M748 338 H852 V442 H748 Z", arrivo: [800, 740], vista: "schiena",
        guarda: "t2f.oro.guarda", usa: "t2f.oro.usa", parla: "t2f.oro.parla" },
      { id: "cantiere", nome: "t2f.hs.cantiere", forma: "M430 560 H640 V650 H430 Z M1060 580 H1160 V645 H1060 Z", arrivo: [540, 740], vista: "schiena",
        guarda: "t2f.can.guarda", usa: "t2f.can.usa", parla: "t2f.can.parla" },
      { id: "penna", nome: "t2a.hs.penna", forma: "M470 320 H570 V464 H470 Z", arrivo: [470, 760], vista: "schiena",
        guarda: "t2f.penna.guarda", usa: "t2a.penna.usa", parla: "t2f.penna.parla", conAltro: "t2a.penna.altro" },
      { id: "treno", nome: "t2f.hs.treno", forma: "M0 300 H60 V640 H0 Z M0 640 H140 V900 H0 Z", arrivo: [190, 840], verso: -1,
        guarda: "t2f.treno.guarda", usa: function (m) { return m.flag("finaleFatto") ? Alg3.sali(m) : m.pensa("t2f.treno.no"); }, parla: "t2a.treno.parla" }
    ]
  });

  /* ---------- aiuti a gradini ---------- */
  Alg3.aiutiStanze.finale = function (m) {
    if (!m.flag("disegnoUsato")) return { id: "fi-dis", chi: "penna", chiavi: ["t2f.aiuto.dis1", "t2f.aiuto.dis2", "t2f.aiuto.dis3"] };
    if (!m.flag("finaleFatto")) return { id: "fi-lez", chi: "penna", chiavi: ["t2f.aiuto.lez1"] };
    return { id: "fi-fine", chi: "penna", chiavi: ["t2f.aiuto.fine1"] };
  };
})();
