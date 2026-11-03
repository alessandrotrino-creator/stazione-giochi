/* =====================================================================
   Capitolo 1 · Stanza: L'ATRIO DEL MUSEO
   Puzzle 0 (tutorial): la lanterna sveglia Gamberto nella fontana.
   Puzzle 1 "La porta delle tre forme": vertebrati / invertebrati e simmetria.
   Personaggi storici: Aristotele e Lamarck (ritratti che si animano).
   ===================================================================== */
(function () {
  var C = Cap1;

  /* ---------- le casse di Etichetti e cosa contengono ---------- */
  var CASSE = [
    { id: "c1", ogg: "stella", x: 918, y: 560, etichetta: "cassa.et.stella", rot: -6 },
    { id: "c2", ogg: "farfalla", x: 1030, y: 566, etichetta: "cassa.et.ali", rot: 4 },
    { id: "c3", ogg: "passero", x: 972, y: 478, etichetta: "cassa.et.ali2", rot: -3 },
    { id: "c4", ogg: "spugna", x: 1086, y: 486, etichetta: "cassa.et.buchi", rot: 5 },
    { id: "c5", ogg: "pesce", x: 1140, y: 572, etichetta: "cassa.et.strisce", rot: -4 }
  ];
  var VERTEBRATI = { passero: true, pesce: true };
  var INCAVI = [
    { id: "raggiata", x: 708, y: 414, ogg: "stella" },
    { id: "bilaterale", x: 772, y: 414, ogg: "farfalla" },
    { id: "nessuna", x: 836, y: 414, ogg: "spugna" }
  ];

  function forma(id) {
    var b = 'stroke="#1d1428" stroke-width="3" stroke-linejoin="round"';
    if (id === "raggiata") return '<polygon points="30,6 35.6,22.3 52.8,22.6 39,33 44,49.4 30,39.5 16,49.4 21,33 7.2,22.6 24.4,22.3" fill="#1d1a2c" ' + b + "/>";
    if (id === "bilaterale") return '<path d="M30 18 C20 6 6 8 8 22 C9 32 22 32 30 28 Z M30 18 C40 6 54 8 52 22 C51 32 38 32 30 28 Z M30 30 C22 38 12 46 18 52 C24 56 30 44 30 34 Z M30 30 C38 38 48 46 42 52 C36 56 30 44 30 34 Z" fill="#1d1a2c" ' + b + '/><path d="M30 6 L30 56" stroke="#ffd36b" stroke-width="1.5" stroke-dasharray="3 3"/>';
    return '<path d="M14 22 Q10 10 24 12 Q30 4 40 12 Q54 12 50 26 Q58 38 44 44 Q40 56 26 50 Q10 52 12 38 Q4 30 14 22 Z" fill="#1d1a2c" ' + b + "/>";
  }
  function incavoSvg(inc, m) {
    var pieno = m.flag("incavo-" + inc.id);
    return '<svg viewBox="0 0 60 60"><rect x="1" y="1" width="58" height="58" rx="8" fill="#3a3850" stroke="#1d1428" stroke-width="2"/>' +
      forma(inc.id) + (pieno ? '<g transform="translate(-2 -2) scale(.457)"><use href="#ogg-' + inc.ogg + '"/></g>' : "") + "</svg>";
  }

  /* ---------- vista "ai raggi X" (inventata per il gioco: lo diremo in «Vero o inventato?») ---------- */
  function raggiX(ogg) {
    var w = 'fill="none" stroke="#bfe6ff" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"';
    var o = 'fill="none" stroke="#ffffff" stroke-width="6" stroke-linecap="round"';
    var art = {
      stella: '<polygon points="210,40 236,118 318,120 252,168 276,248 210,200 144,248 168,168 102,120 184,118" ' + w + '/>' +
        '<g fill="#bfe6ff" opacity=".7"><circle cx="210" cy="90" r="4"/><circle cx="210" cy="120" r="4"/><circle cx="262" cy="134" r="4"/><circle cx="242" cy="190" r="4"/><circle cx="178" cy="190" r="4"/><circle cx="158" cy="134" r="4"/><circle cx="210" cy="150" r="6"/></g>',
      farfalla: '<path d="M210 140 C170 60 90 60 94 120 C98 170 170 170 210 150 Z M210 140 C250 60 330 60 326 120 C322 170 250 170 210 150 Z M210 156 C178 184 130 220 150 244 C172 262 204 214 210 176 Z M210 156 C242 184 290 220 270 244 C248 262 216 214 210 176 Z M210 110 L210 230" ' + w + "/>",
      spugna: '<path d="M140 120 Q120 60 180 66 Q210 40 240 66 Q300 60 290 120 Q320 170 280 210 Q280 260 220 250 Q160 270 150 220 Q100 190 140 120 Z" ' + w + '/>' +
        '<g stroke="#bfe6ff" stroke-width="2" opacity=".7"><path d="M170 110 l8 4 M200 150 l6 -6 M240 120 l-6 8 M220 200 l8 2 M180 190 l-4 8 M260 170 l6 4 M190 230 l6 -2"/></g>',
      passero: '<path d="M90 170 Q86 110 170 100 Q250 92 280 140 Q300 190 236 214 Q160 226 120 206 Z M90 170 L40 186 L84 150 Z M276 110 m-36 0 a36 36 0 1 0 72 0 a36 36 0 1 0 -72 0" ' + w + '/>' +
        '<path d="M110 176 Q180 150 262 136" ' + o + '/><g fill="#fff"><circle cx="130" cy="170" r="5"/><circle cx="150" cy="164" r="5"/><circle cx="170" cy="158" r="5"/><circle cx="190" cy="152" r="5"/><circle cx="210" cy="148" r="5"/><circle cx="230" cy="143" r="5"/><circle cx="250" cy="139" r="5"/></g>' +
        '<path d="M176 158 Q170 190 182 206 M196 152 Q192 190 204 208 M216 148 Q214 186 226 206" fill="none" stroke="#fff" stroke-width="3"/><circle cx="276" cy="110" r="22" fill="none" stroke="#fff" stroke-width="5"/><path d="M180 212 L176 260 M210 214 L214 262" ' + o + "/>",
      pesce: '<path d="M80 160 Q140 80 250 100 Q320 116 330 160 Q320 204 250 220 Q140 240 80 160 Z M80 160 L36 116 L46 160 L36 204 Z" ' + w + '/>' +
        '<path d="M70 160 L290 160" ' + o + '/><path d="M120 160 L104 124 M140 160 L126 116 M160 160 L148 110 M180 160 L172 106 M200 160 L196 104 M220 160 L220 106 M120 160 L104 196 M140 160 L126 204 M160 160 L148 210 M180 160 L172 214 M200 160 L196 216 M220 160 L220 214" fill="none" stroke="#fff" stroke-width="3"/>' +
        '<circle cx="292" cy="146" r="22" fill="none" stroke="#fff" stroke-width="5"/>'
    };
    return '<svg class="raggi-x" viewBox="0 0 420 320">' + art[ogg] + "</svg>";
  }

  /* ---------- scenette e dialoghi ---------- */
  async function svegliaGamberto(m) {
    if (C.svegli(m)) return "fontana.lanterna.dopo";
    await m.pensa("sc1.n1");
    var luce = m.effetto("luce-acquario", 1395, 640);
    m.suono("magia");
    await m.aspetta(1000);
    var g = m.attore("gamberto");
    g.corpo.classList.add("salta");
    await m.aspetta(700);
    m.flag("gambertoSveglio", true);
    await m.dice("gamberto", "sc1.g1");
    g.corpo.classList.remove("salta");
    await m.pensa("sc1.n2");
    await m.dice("gamberto", "sc1.g2");
    await m.pensa("sc1.n3");
    await m.dice("gamberto", "sc1.g3");
    await m.dice("gamberto", "cap1.g.portami");
    await m.pensa("cap1.n.barattolo");
    luce.classList.add("spegni");
    setTimeout(function () { luce.remove(); }, 900);
    m.flag("gambertoConMe", true);
    m.prendi("gamberto");
    m.annota("q.gamberto");
    await m.dice("gamberto", "cap1.g.albero");
  }

  async function bisticcio(m) {
    await m.dice("lamarck", "a1.bisticcio.1");
    await m.dice("aristotele", "a1.bisticcio.2");
    await m.dice("lamarck", "a1.bisticcio.3");
    await m.pensa("a1.bisticcio.4");
  }

  async function svegliaAristotele(m) {
    if (m.flag("aristoteleSveglio")) return "ritratto.giaSveglio";
    m.effetto("luce-ritratto", 575, 262, 1600);
    m.suono("magia");
    await m.aspetta(800);
    m.flag("aristoteleSveglio", true);
    await m.dice("aristotele", "a1.aristotele.1");
    await m.dice("aristotele", "a1.aristotele.2");
    await m.dice("aristotele", "a1.aristotele.3");
    m.figurina("aristotele");
    m.annota("q1.aristotele");
    if (m.flag("lamarckSveglio")) await bisticcio(m);
  }

  async function svegliaLamarck(m) {
    if (m.flag("lamarckSveglio")) return "ritratto.giaSveglio";
    m.effetto("luce-ritratto", 1025, 262, 1600);
    m.suono("magia");
    await m.aspetta(800);
    m.flag("lamarckSveglio", true);
    await m.dice("lamarck", "a1.lamarck.1");
    await m.dice("lamarck", "a1.lamarck.2");
    m.figurina("lamarck");
    m.annota("q1.invertebrati");
    if (m.flag("aristoteleSveglio")) await bisticcio(m);
    await m.dice("lamarck", "a1.regola.1");
    if (m.flag("aristoteleSveglio")) await m.dice("aristotele", "a1.regola.2");
    else await m.dice("lamarck", "a1.regola.2b");
    m.annota("q1.simmetria");
    await m.dice("lamarck", "a1.lente.1");
    m.prendi("lente");
    await m.pensa("a1.lente.2");
  }

  async function parlaAristotele(m) {
    if (!m.flag("aristoteleSveglio")) return "ritratto.aristotele.dorme";
    for (;;) {
      var v = await m.scegli([
        { testo: "dlg.a.gruppi", valore: "gruppi" },
        { testo: "dlg.a.simmetria", valore: "simmetria" },
        { testo: "dlg.a.ciao", valore: "ciao" }
      ]);
      await m.pensa("dlg.a." + v);
      if (v === "gruppi") { await m.dice("aristotele", "dlg.a.gruppi.r1"); await m.dice("aristotele", "dlg.a.gruppi.r2"); }
      if (v === "simmetria") { await m.dice("aristotele", "dlg.a.simmetria.r1"); await m.dice("aristotele", "dlg.a.simmetria.r2"); await m.dice("aristotele", "dlg.a.simmetria.r3"); m.annota("q1.simmetria"); }
      if (v === "ciao") { await m.dice("aristotele", "dlg.a.ciao.r"); return; }
    }
  }

  async function parlaLamarck(m) {
    if (!m.flag("lamarckSveglio")) return "ritratto.lamarck.dorme";
    for (;;) {
      var v = await m.scegli([
        { testo: "dlg.l.nome", valore: "nome" },
        { testo: "dlg.l.quanti", valore: "quanti" },
        { testo: "dlg.l.ciao", valore: "ciao" }
      ]);
      await m.pensa("dlg.l." + v);
      if (v === "nome") { await m.dice("lamarck", "dlg.l.nome.r1"); await m.dice("lamarck", "dlg.l.nome.r2"); }
      if (v === "quanti") { await m.dice("lamarck", "dlg.l.quanti.r1"); }
      if (v === "ciao") { await m.dice("lamarck", "dlg.l.ciao.r"); return; }
    }
  }

  /* un esemplare messo nella porta: la classe sceglie l'incavo */
  async function mettiNellaPorta(m, ogg) {
    var v = await m.scegli([
      { testo: "porta.incavo.raggiata", valore: "raggiata" },
      { testo: "porta.incavo.bilaterale", valore: "bilaterale" },
      { testo: "porta.incavo.nessuna", valore: "nessuna" }
    ], "porta.bivio");
    if (VERTEBRATI[ogg]) {
      m.suono("errore"); m.errore("p1-vertebrato");
      await m.pensa("porta.rifiuta");
      return m.dice(C.chi(m), "porta.vertebrato." + ogg);
    }
    var giusto = INCAVI.filter(function (i) { return i.ogg === ogg; })[0];
    if (giusto.id !== v) {
      m.suono("errore"); m.errore("p1-simmetria");
      await m.pensa("porta.nonEntra");
      return m.dice(C.chi(m), "porta.simmetria." + ogg);
    }
    if (m.flag("incavo-" + v)) return "porta.giaPieno";
    m.togli(ogg);
    m.flag("incavo-" + v, true);
    m.suono("prendi");
    C.scintille(m, giusto.x + 28, giusto.y + 28);
    await m.pensa("porta.entra." + ogg);
    if (INCAVI.every(function (i) { return m.flag("incavo-" + i.id); })) await apriPorta(m);
  }

  async function apriPorta(m) {
    m.suono("magia");
    await m.aspetta(600);
    m.flag("portaAperta", true);
    C.scintille(m, 800, 440);
    await m.pensa("porta.aperta.1");
    m.flag("ombraInCorso", true);
    var ombra = m.elemento("ombra-etichetti");
    if (ombra) ombra.classList.add("ombra-etichetti");
    await m.aspetta(2400);
    m.flag("ombraInCorso", false);
    await m.dice("gamberto", "porta.aperta.2");
    await m.pensa("porta.aperta.3");
    await m.dice("lamarck", "porta.aperta.4");
    m.annota("q1.ombra");
  }

  /* ---------- aiuti a gradini in questa stanza ---------- */
  C.aiutiStanze.atrio = function (m) {
    var chi = C.chi(m);
    if (m.flag("portaAperta")) return { id: "a-fine", chi: chi, chiavi: ["aiuto1.portaAperta"] };
    if (!m.ha("lanterna") && !m.ha("lanterna-lente")) return { id: "a-luce", chi: "nina", chiavi: ["aiuto.a1", "aiuto1.a2", "aiuto1.a3"] };
    if (!C.svegli(m)) return { id: "a-gamb", chi: "nina", chiavi: ["aiuto1.b1", "aiuto1.b2"] };
    if (!m.flag("lamarckSveglio")) return { id: "a-ritr", chi: chi, chiavi: ["aiuto1.r1", "aiuto1.r2", "aiuto1.r3"] };
    if (m.ha("lente")) return { id: "a-lente", chi: chi, chiavi: ["aiuto1.l1", "aiuto1.l2"] };
    return { id: "a-porta", chi: chi, chiavi: ["aiuto1.p1", "aiuto1.p2", "aiuto1.p3", "aiuto1.p4"] };
  };

  /* ---------- la stanza ---------- */
  var elementi = [
    { id: "lanterna-fontana", x: 1488, y: 588, larghezza: 66, altezza: 66, svg: Grafica.icona("ogg-lanterna"),
      visibile: function (m) { return !m.flag("lanternaPresa"); } },
    { id: "ritratto-aristotele", classe: "ritratto", personaggio: "aristotele", x: 500, y: 170, larghezza: 150, altezza: 183, svg: RitrattiCap1.aristotele,
      stato: function (m) { return m.flag("aristoteleSveglio") ? "sveglio" : ""; } },
    { id: "ritratto-lamarck", classe: "ritratto", personaggio: "lamarck", x: 950, y: 170, larghezza: 150, altezza: 183, svg: RitrattiCap1.lamarck,
      stato: function (m) { return m.flag("lamarckSveglio") ? "sveglio" : ""; } },
    { id: "targa-aristotele", classe: "etichetta targa", testo: "targa.aristotele", x: 528, y: 360 },
    { id: "targa-lamarck", classe: "etichetta targa", testo: "targa.lamarck", x: 966, y: 360 },
    /* targhette dell'Albero della Vita */
    { id: "t-piante", classe: "etichetta targa", testo: "albero.piante", x: 196, y: 182 },
    { id: "t-funghi", classe: "etichetta targa", testo: "albero.funghi", x: 62, y: 396 },
    { id: "t-animali", classe: "etichetta targa", testo: "albero.animali", x: 352, y: 262 },
    { id: "t-vertebrati", classe: "etichetta targa", testo: "albero.vertebrati", x: 440, y: 102 },
    { id: "t-inutile", classe: "etichetta rosa piccola", testo: "albero.inutile", x: 404, y: 318, rotazione: 8 },
    /* la porta aperta e l'ombra che passa */
    { id: "porta-aperta", x: 690, y: 270, larghezza: 220, altezza: 340,
      svg: '<svg viewBox="0 0 220 340"><path d="M0 340 L0 30 Q0 0 30 0 L190 0 Q220 0 220 30 L220 340 Z" fill="#0a0d1c" stroke="#1d1428" stroke-width="5"/><path d="M20 340 L60 60 L160 60 L200 340 Z" fill="#2a3a6e" opacity=".5"/><circle cx="110" cy="150" r="80" fill="#ffd36b" opacity=".12"/></svg>',
      visibile: function (m) { return m.flag("portaAperta"); } },
    { id: "ombra-etichetti", x: 740, y: 300, larghezza: 90, altezza: 300,
      svg: '<svg viewBox="-100 -700 220 715"><use href="#etichetti" x="-100" y="-700" width="220" height="715" style="filter:brightness(0)"/></svg>',
      visibile: function (m) { return m.flag("ombraInCorso"); } }
  ];
  INCAVI.forEach(function (inc) {
    elementi.push({ id: "incavo-" + inc.id, classe: "incavo", x: inc.x, y: inc.y, larghezza: 56, altezza: 56,
      svg: "", visibile: function (m) { return !m.flag("portaAperta"); }, _incavo: inc });
  });
  CASSE.forEach(function (c) {
    elementi.push({ id: "cassa-" + c.id, classe: "cassa", x: c.x, y: c.y, larghezza: 112, altezza: 91,
      svg: "", _cassa: c });
    elementi.push({ id: "et-" + c.id, classe: "etichetta rosa piccola", testo: c.etichetta, x: c.x + 4, y: c.y + 46, rotazione: c.rot,
      visibile: function (m) { return !m.flag("aperta-" + c.id); } });
  });

  var hotspot = [
    { id: "lunetta", nome: "hs.lunetta", forma: "M680 250 A120 120 0 0 1 920 250 Z", arrivo: [800, 720], guarda: "lunetta.guarda", usa: "lunetta.usa", parla: "lunetta.parla" },
    { id: "lampadario", nome: "hs.lampadario", forma: "M736 100 L864 100 L864 192 L736 192 Z", arrivo: [800, 720], guarda: "lampadario.guarda", usa: "lampadario.usa" },
    { id: "albero", nome: "hs.albero", forma: "M60 90 L560 90 L560 640 L470 700 L140 700 L60 640 Z", arrivo: [330, 760],
      guarda: function (m) { m.annota("q1.albero"); return "albero.guarda"; }, usa: "albero.usa", parla: "albero.parla",
      con: { gamberto: function (m) { return m.dice("gamberto", "albero.gamberto"); }, lanterna: "albero.lanterna" } },
    { id: "ritratto-aristotele", nome: "hs.aristotele", forma: "M500 170 L650 170 L650 380 L500 380 Z", arrivo: [575, 720],
      guarda: function (m) { return m.flag("aristoteleSveglio") ? "aristotele.guarda.sveglio" : "aristotele.guarda"; },
      usa: "ritratto.usa", parla: parlaAristotele,
      con: { lanterna: svegliaAristotele, "lanterna-lente": svegliaAristotele, gamberto: function (m) { return m.dice("gamberto", "ritratto.gamberto"); } } },
    { id: "ritratto-lamarck", nome: "hs.lamarck", forma: "M950 170 L1100 170 L1100 380 L950 380 Z", arrivo: [1025, 720],
      guarda: function (m) { return m.flag("lamarckSveglio") ? "lamarck.guarda.sveglio" : "lamarck.guarda"; },
      usa: "ritratto.usa", parla: parlaLamarck,
      con: { lanterna: svegliaLamarck, "lanterna-lente": svegliaLamarck, gamberto: function (m) { return m.dice("gamberto", "ritratto.gamberto"); } } },
    { id: "porta", nome: "hs.porta", forma: "M690 270 L910 270 L910 610 L690 610 Z", arrivo: [800, 700],
      presente: function (m) { return !m.flag("portaAperta"); },
      guarda: function (m) { m.annota("q1.porta"); return "porta.guarda"; },
      usa: "porta.usa", parla: "porta.parla",
      con: {
        stella: function (m) { return mettiNellaPorta(m, "stella"); },
        farfalla: function (m) { return mettiNellaPorta(m, "farfalla"); },
        spugna: function (m) { return mettiNellaPorta(m, "spugna"); },
        passero: function (m) { return mettiNellaPorta(m, "passero"); },
        pesce: function (m) { return mettiNellaPorta(m, "pesce"); },
        gamberto: function (m) { return m.dice("gamberto", "porta.gamberto"); },
        lanterna: "porta.lanterna"
      } },
    { id: "porta-aperta", nome: "hs.portaAperta", forma: "M690 270 L910 270 L910 610 L690 610 Z", arrivo: [800, 690],
      presente: function (m) { return m.flag("portaAperta"); },
      uscita: { stanza: "sala", arrivo: [800, 840, 1, "schiena"],
        se: function () { return !!Motore._haStanza && Motore._haStanza("sala"); }, chiusa: "porta.prossimaTappa" } },
    { id: "fontana", nome: "hs.fontana", forma: "M1210 380 L1570 380 L1570 720 L1210 720 Z", arrivo: [1250, 770], verso: 1,
      guarda: function (m) { return m.flag("gambertoConMe") ? "fontana.guarda.vuota" : "fontana.guarda"; },
      usa: "fontana.usa",
      parla: function (m) { return m.flag("gambertoConMe") ? "fontana.parla.vuota" : "fontana.parla"; },
      con: { lanterna: svegliaGamberto, "lanterna-lente": svegliaGamberto, gamberto: function (m) { return m.dice("gamberto", "fontana.gamberto"); } } },
    { id: "lanterna", nome: "hs.lanterna", forma: "M1480 580 L1564 580 L1564 658 L1480 658 Z", arrivo: [1470, 780], verso: 1,
      presente: function (m) { return !m.flag("lanternaPresa"); },
      guarda: "lanterna.guarda", parla: "lanterna.parla",
      usa: function (m) { m.flag("lanternaPresa", true); m.prendi("lanterna"); m.annota("q.lanterna"); return "lanterna.usa"; } },
    { id: "cordone", nome: "hs.cordone", forma: "M18 676 L84 676 L84 900 L18 900 Z", arrivo: [150, 830], verso: -1,
      guarda: "cordone.guarda", usa: "cordone.usa", parla: "cordone.parla" }
  ];
  CASSE.forEach(function (c) {
    hotspot.push({ id: "cassa-" + c.id, nome: "hs.cassa", forma: "M" + c.x + " " + c.y + " l112 0 l0 91 l-112 0 Z", arrivo: [c.x + 56, 720],
      presente: function (m) { return !m.flag("aperta-" + c.id); },
      guarda: function (m) { return m.pensa("cassa.guarda", { et: Lingue.semplice(c.etichetta) }); },
      usa: async function (m) {
        m.flag("aperta-" + c.id, true); m.prendi(c.ogg);
        await m.pensa("cassa.apri." + c.ogg);
      },
      parla: "cassa.parla",
      con: {
        lanterna: "cassa.lanterna",
        "lanterna-lente": async function (m) {
          m.suono("magia");
          await m.pannello(function (p, chiudi) {
            p.innerHTML = raggiX(c.ogg) + '<p style="text-align:center">' + Lingue.html("xr." + c.ogg) + "</p>";
            var b = document.createElement("button"); b.className = "pn-tasto principale"; b.innerHTML = Lingue.html("ui.chiudi");
            b.addEventListener("click", chiudi); p.appendChild(b);
          }, { chiudibile: false });
          await m.dice(C.chi(m), "xr.domanda");
        },
        gamberto: function (m) { return m.dice("gamberto", "cassa.gamberto"); }
      } });
  });

  Motore.stanza("atrio", {
    sfondo: "atrio",
    pavimento: { xMin: 120, xMax: 1500, yMin: 690, yMax: 860 },
    scala: { lontano: { y: 690, s: 0.84 }, vicino: { y: 860, s: 1 } },
    attori: [
      { id: "nina", simbolo: "nina", viste: { fronte: "nina", profilo: "nina-profilo", schiena: "nina-schiena" },
        vista: [-110, -600, 230, 615], piedi: [5, 0], altezza: 520, x: 640, y: 800, dir: 1, alone: true,
        aggiorna: function (a, m) {
          var ha = m.ha("lanterna") || m.ha("lanterna-lente");
          a.corpo.style.setProperty("--lanterna", ha ? 1 : 0);
          a.alone.style.opacity = ha ? 1 : 0;
        } },
      { id: "gamberto", simbolo: "gamberto", vista: [-80, -110, 170, 120], piedi: [0, 0], altezza: 70, x: 1400, y: 652, fisso: true,
        visibile: function (m) { return !m.flag("gambertoConMe"); } }
    ],
    elementi: elementi,
    hotspot: hotspot
  });

  /* gli incavi e le casse cambiano aspetto: il loro disegno si calcola ogni volta */
  var originale = elementi.slice();
  originale.forEach(function (e) {
    if (e._incavo) Object.defineProperty(e, "svg", { get: function () { return incavoSvg(e._incavo, Motore._api()); } });
    if (e._cassa) Object.defineProperty(e, "svg", { get: function () {
      var aperta = Motore._api().flag("aperta-" + e._cassa.id);
      return '<svg viewBox="0 0 160 130"><use href="#' + (aperta ? "cassa-aperta" : "cassa") + '"/></svg>';
    } });
  });
})();
