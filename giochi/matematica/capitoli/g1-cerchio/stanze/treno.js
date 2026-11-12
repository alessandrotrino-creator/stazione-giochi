/* =====================================================================
   Matematica · terze · Livello G1 · Stanza: IL VAGONE DEL BINARIO 8 (tutorial, Lez. 1)
   Catena: il cestino da cucito della nonna → metro da sarta (e gomitolo) → MISURARE CON UN NASTRO
   FLESSIBILE tre oggetti rotondi dello scrittoio (con un righello dritto il giro non si misura: gag)
   → circonferenza : diametro con il TASTIERINO (misure diverse a ogni partita, viene sempre 3,14)
   → scheda del quaderno: VALORE ESATTO (con π) e VALORE APPROSSIMATO (con 3,14), regola della docente
   → domanda di controllo → primo viaggio: il quadrante vuole la LUNGHEZZA DELL'ARCO (mezzo giro),
   con il valore esatto (tasto π). Quando si torna con due spicchi: FERMATA INTERMEDIA.
   ===================================================================== */
(function () {
  /* i tre oggetti rotondi: diametro a caso, circonferenza = 3,14 × diametro (il metro misura al millimetro) */
  var OGGETTI = ["piatto", "coperchio", "tappo"];
  function nuoveMisure() {
    var diametri = { piatto: Cer3.scegliUno([20, 22, 24, 25, 26, 28]), coperchio: Cer3.scegliUno([12, 14, 15, 16, 18]), tappo: Cer3.scegliUno([5, 6, 7, 8]) };
    var l = {};
    OGGETTI.forEach(function (o) { l[o] = { d: diametri[o], c: Math.round(diametri[o] * 314) / 100 }; });
    return l;
  }
  function iconaOggetto(o) {
    if (o === "piatto") return '<svg viewBox="0 0 140 140"><ellipse cx="70" cy="74" rx="60" ry="56" fill="#f6fbff" stroke="#1d1428" stroke-width="4"/><ellipse cx="70" cy="74" rx="40" ry="37" fill="none" stroke="#5a8ac8" stroke-width="4"/><path d="M70 18 V130" stroke="#c8402f" stroke-width="3" stroke-dasharray="6 5"/></svg>';
    if (o === "coperchio") return '<svg viewBox="0 0 140 140"><ellipse cx="70" cy="74" rx="52" ry="50" fill="#c8402f" stroke="#1d1428" stroke-width="4"/><ellipse cx="70" cy="74" rx="40" ry="38" fill="none" stroke="#f3c45a" stroke-width="4"/><circle cx="70" cy="74" r="10" fill="#f3c45a" stroke="#1d1428" stroke-width="3"/><path d="M18 74 H122" stroke="#1d1428" stroke-width="3" stroke-dasharray="6 5"/></svg>';
    return '<svg viewBox="0 0 140 140"><ellipse cx="70" cy="74" rx="34" ry="32" fill="url(#ce-ferro)" stroke="#1d1428" stroke-width="4"/><ellipse cx="70" cy="74" rx="24" ry="22" fill="none" stroke="#1d1428" stroke-width="2"/><path d="M36 74 H104" stroke="#c8402f" stroke-width="3" stroke-dasharray="5 4"/></svg>';
  }

  Motore.aggiungi("oggetti", {
    manopola: { icona: "ogg-manopola", nome: "ogg.manopola", descrizione: "ogg.manopola.d", suAltro: "manopola.altro" }
  });

  /* la cappelliera della nonna, legata sul portabagagli: chiusa (lucchetto a tre cifre) o aperta */
  var CAPPELLIERA = '<ellipse cx="60" cy="60" rx="56" ry="6" fill="#000" opacity=".3"/><g stroke="#1d1428" stroke-width="3" stroke-linejoin="round">' +
    '<path d="M6 22 V56 Q60 70 114 56 V22" fill="#3a6a9a"/><path d="M6 36 Q60 50 114 36" fill="none" stroke="#f3c45a" stroke-width="4"/>' +
    '<path d="M30 30 Q24 48 30 62 M90 30 Q96 48 90 62" fill="none" stroke="#c8a860" stroke-width="2.5"/>';
  var LUCCHETTO = '<rect x="50" y="36" width="20" height="18" rx="3" fill="url(#ce-bronzo)" stroke="#1d1428" stroke-width="2"/><path d="M54 36 V30 Q60 22 66 30 V36" fill="none" stroke="#1d1428" stroke-width="3"/>' +
    '<g fill="#1d1428"><rect x="53" y="42" width="4" height="7"/><rect x="58" y="42" width="4" height="7"/><rect x="63" y="42" width="4" height="7"/></g>';

  var elementi = [
    { id: "cappelliera", classe: "", x: 520, y: 126, larghezza: 120, altezza: 66,
      svg: '<svg viewBox="0 0 120 66">' + CAPPELLIERA + '<ellipse cx="60" cy="22" rx="54" ry="13" fill="#4a7aaa"/></g>' + LUCCHETTO + "</svg>",
      visibile: function (m) { return !m.flag("cappellieraAperta"); } },
    { id: "cappelliera-aperta", classe: "", x: 520, y: 100, larghezza: 120, altezza: 92,
      svg: '<svg viewBox="0 -26 120 92">' + CAPPELLIERA + '<ellipse cx="60" cy="22" rx="54" ry="13" fill="#1d1428"/>' +
        '<path d="M28 20 Q60 -6 92 20" fill="#e8c86a"/><circle cx="74" cy="10" r="5" fill="#c8402f"/><circle cx="82" cy="14" r="4" fill="#f6fbff"/>' +
        '<g transform="rotate(-28 8 22)"><ellipse cx="62" cy="12" rx="54" ry="13" fill="#4a7aaa"/></g></g></svg>',
      visibile: function (m) { return m.flag("cappellieraAperta"); } },
    /* il quadrante senza manopola: si vede il perno nudo */
    { id: "senza-manopola", classe: "", x: 1278, y: 380, larghezza: 48, altezza: 48,
      svg: '<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="23" fill="#0d0b12" stroke="#1d1428" stroke-width="2"/><rect x="20" y="20" width="8" height="8" fill="url(#ce-ferro)" stroke="#1d1428" stroke-width="1.5"/></svg>',
      visibile: function (m) { return !m.flag("manopolaMessa"); } },
    { id: "parolona-fuori", classe: "", x: 966, y: 241, larghezza: 190, altezza: 203,
      svg: '<svg viewBox="-150 -720 300 320" style="overflow:hidden"><use href="#parolona" x="-150" y="-700" width="300" height="715"/></svg>',
      visibile: function (m) { return m.flag("parolonaAlFinestrino"); } },
    { id: "cestino", classe: "", x: 70, y: 530, larghezza: 120, altezza: 100,
      svg: '<svg viewBox="0 0 160 130"><ellipse cx="80" cy="122" rx="70" ry="7" fill="#000" opacity=".3"/>' +
        '<g stroke="#1d1428" stroke-width="3" stroke-linejoin="round"><path d="M14 56 H146 L134 118 H26 Z" fill="#b8862e"/>' +
        '<path d="M22 72 H138 M26 90 H134 M30 106 H130" stroke="#7a5418" stroke-width="2"/><path d="M40 56 Q80 2 120 56" fill="none" stroke-width="5"/>' +
        '<path d="M40 56 Q80 2 120 56" fill="none" stroke="#d8a84a" stroke-width="2"/></g>' +
        '<circle cx="62" cy="50" r="18" fill="#d8c08a" stroke="#1d1428" stroke-width="3"/><circle cx="100" cy="50" r="15" fill="#f2d26a" stroke="#1d1428" stroke-width="3"/><circle cx="100" cy="50" r="6" fill="#c8402f"/>' +
        '<path d="M28 44 l10 -16 l6 4 z" fill="#e8f0ff" stroke="#1d1428" stroke-width="2"/></svg>',
      visibile: function (m) { return !m.flag("metroPreso"); } },
    { id: "cestino-vuoto", classe: "", x: 70, y: 530, larghezza: 120, altezza: 100,
      svg: '<svg viewBox="0 0 160 130"><ellipse cx="80" cy="122" rx="70" ry="7" fill="#000" opacity=".3"/>' +
        '<g stroke="#1d1428" stroke-width="3" stroke-linejoin="round"><path d="M14 56 H146 L134 118 H26 Z" fill="#b8862e"/>' +
        '<path d="M22 72 H138 M26 90 H134 M30 106 H130" stroke="#7a5418" stroke-width="2"/><path d="M40 56 Q80 2 120 56" fill="none" stroke-width="5"/></g>' +
        '<path d="M28 44 l10 -16 l6 4 z" fill="#e8f0ff" stroke="#1d1428" stroke-width="2"/></svg>',
      visibile: function (m) { return m.flag("metroPreso"); } },
    { id: "piatto", classe: "", x: 1000, y: 588, larghezza: 74, altezza: 26,
      svg: '<svg viewBox="0 0 120 40"><ellipse cx="60" cy="22" rx="56" ry="16" fill="#f6fbff" stroke="#1d1428" stroke-width="3"/><ellipse cx="60" cy="21" rx="36" ry="9" fill="none" stroke="#5a8ac8" stroke-width="3"/></svg>' },
    { id: "biscottiera", classe: "", x: 1180, y: 560, larghezza: 56, altezza: 48,
      svg: '<svg viewBox="0 0 90 80"><ellipse cx="45" cy="74" rx="40" ry="5" fill="#000" opacity=".3"/><g stroke="#1d1428" stroke-width="3"><rect x="8" y="22" width="74" height="50" rx="6" fill="#2c6a4a"/><ellipse cx="45" cy="22" rx="38" ry="10" fill="#c8402f"/></g><path d="M12 46 H78" stroke="#f3c45a" stroke-width="3"/><circle cx="45" cy="20" r="5" fill="#f3c45a" stroke="#1d1428" stroke-width="2"/></svg>' },
    { id: "penna", classe: "penna-el", personaggio: "penna", x: 1073, y: 443, larghezza: 80, altezza: 128,
      svg: '<svg viewBox="-70 -230 150 240"><use href="#penna" x="-70" y="-230" width="150" height="240"/></svg>' },
    { id: "display", classe: "display-epoche", x: 1272, y: 318, testo: "g1.sel.display",
      param: function (m) { return { qui: Lingue.semplice("g1.meta.corto." + (m.stato.flag.trenoQui || "stazione")) }; } },
    /* la ruota di legno sul sedile di fronte: il mozzo e gli spicchi già recuperati */
    { id: "ruota-mozzo", classe: "", x: 290, y: 520, larghezza: 112, altezza: 112,
      svg: '<svg viewBox="-110 -110 220 220"><use href="#ce-ruota-vuota" x="-110" y="-110" width="220" height="220"/></svg>',
      visibile: function (m) { return m.flag("ruotaRotta"); } }
  ];
  [0, 1, 2, 3].forEach(function (i) {
    elementi.push({ id: "ruota-sp" + i, classe: "", x: 290, y: 520, larghezza: 112, altezza: 112,
      svg: '<svg viewBox="-110 -110 220 220" overflow="visible"><g transform="rotate(' + (i * 90) + ')"><use href="#ce-spicchio-ruota" x="-110" y="-110" width="220" height="220"/></g></svg>',
      visibile: function (m) { return m.flag("ruotaRotta") && Cer3.spicchi(m) > i && !m.flag("spicchiInRuota"); } });
  });

  Motore.stanza("treno", {
    sfondo: "treno8",
    pavimento: { xMin: 140, xMax: 1320, yMin: 700, yMax: 870 },
    scala: { lontano: { y: 700, s: 0.9 }, vicino: { y: 870, s: 1 } },
    attori: [
      { id: "zara", simbolo: "zara-fronte", viste: { fronte: "zara-fronte", profilo: "zara-profilo", schiena: "zara-schiena" },
        vista: [-110, -600, 230, 615], piedi: [5, 0], altezza: 500, x: 820, y: 800, dir: -1 }
    ],
    elementi: elementi,
    entrata: async function (m) {
      /* fermata intermedia: si torna sul vagone con due spicchi */
      if (Cer3.spicchi(m) >= 2 && !m.flag("fermataFatta")) await fermata(m);
    },
    hotspot: [
      { id: "cestino", nome: "g1.hs.cestino", forma: "M66 520 H196 V636 H66 Z", arrivo: [250, 730], vista: "schiena",
        guarda: function (m) { return m.flag("metroPreso") ? "g1.cest.guarda2" : "g1.cest.guarda"; },
        usa: prendiMetro, parla: "g1.cest.parla" },
      { id: "ruota", nome: "g1.hs.ruota", forma: "M286 516 H406 V636 H286 Z", arrivo: [360, 730], vista: "schiena",
        guarda: function (m) { return "g1.ruota.guarda" + Math.min(Cer3.spicchi(m), 3); },
        usa: "g1.ruota.usa", parla: "g1.ruota.parla",
        con: { spicchio: "g1.ruota.spicchio", metro: "g1.ruota.metro" }, conAltro: "g1.ruota.altro" },
      { id: "piatto", nome: "g1.hs.piatto", forma: "M960 572 H1040 V608 H960 Z", arrivo: [1000, 730], vista: "schiena",
        guarda: "g1.piatto.guarda", usa: misuraSenzaMetro, parla: "g1.piatto.parla",
        con: { metro: misura }, conAltro: "g1.piatto.altro" },
      { id: "biscottiera", nome: "g1.hs.biscottiera", forma: "M1150 532 H1210 V588 H1150 Z", arrivo: [1150, 730], vista: "schiena",
        guarda: "g1.bisc.guarda", usa: misuraSenzaMetro, parla: "g1.bisc.parla",
        con: { metro: misura }, conAltro: "g1.piatto.altro" },
      { id: "sedile", nome: "g1.hs.sedile", forma: "M30 390 H430 V510 H30 Z M210 640 H470 V700 H210 Z", arrivo: [320, 730], vista: "schiena",
        guarda: "g1.sedile.guarda", usa: "g1.sedile.usa", parla: "g1.sedile.parla" },
      { id: "penna", nome: "g1.hs.penna", forma: "M1050 420 H1180 V560 H1050 Z", arrivo: [1080, 730], vista: "schiena",
        guarda: "g1.penna.guarda", usa: "g1.penna.usa", parla: dialogoPenna,
        con: { metro: "g1.penna.metro", spicchio: "g1.penna.spicchio", manopola: "g1.penna.manopola" }, conAltro: "g1.penna.altro" },
      { id: "cappelliera", nome: "g1.hs.cappelliera", forma: "M516 104 H644 V194 H516 Z", arrivo: [580, 720], vista: "schiena",
        guarda: function (m) { return m.flag("cappellieraAperta") ? "g1.capp.guarda2" : "g1.capp.guarda"; },
        usa: cappelliera, parla: "g1.capp.parla", con: { metro: misuraCappelliera }, conAltro: "g1.capp.altro" },
      { id: "scrittoio", nome: "g1.hs.scrittoio", forma: "M984 610 H1236 V700 H984 Z", arrivo: [1100, 730], vista: "schiena",
        guarda: "g1.scritt.guarda", usa: "g1.scritt.usa", parla: "g1.scritt.parla", con: { metro: misura } },
      { id: "finestrini", nome: "g1.hs.finestrini", forma: "M226 226 H614 V458 H226 Z M866 226 H1254 V458 H866 Z", arrivo: [620, 720], vista: "schiena",
        guarda: "g1.fin.guarda", usa: "g1.fin.usa", parla: "g1.fin.parla" },
      { id: "portabagagli", nome: "g1.hs.portabagagli", forma: "M170 140 H1310 V215 H170 Z", arrivo: [740, 720], vista: "schiena",
        guarda: "g1.rack.guarda", usa: "g1.rack.usa", parla: "g1.rack.parla" },
      { id: "selettore", nome: "g1.hs.selettore", forma: "M1258 296 H1346 V494 H1258 Z", arrivo: [1250, 740], vista: "schiena",
        guarda: function (m) { return m.flag("partito") ? "g1.sel.guarda2" : m.flag("manopolaMessa") ? "g1.sel.guarda" : "g1.sel.guarda0"; },
        usa: usaSelettore, parla: "g1.sel.parla", con: { manopola: mettiManopola }, conAltro: "g1.sel.altro" },
      { id: "porta", nome: "g1.hs.porta", forma: "M1350 160 H1570 V640 H1350 Z", arrivo: [1310, 770], verso: 1,
        guarda: "g1.porta.guarda", usa: function (m) { return m.flag("partito") ? Cer3.viaggio(m) : "g1.porta.usa"; }, parla: "g1.porta.parla" },
      { id: "lampade", nome: "g1.hs.lampade", forma: "M396 88 H464 V130 H396 Z M1096 88 H1164 V130 H1096 Z", arrivo: [740, 720], vista: "schiena",
        guarda: "g1.lampade.guarda", usa: "g1.lampade.usa", parla: "g1.lampade.parla" }
    ]
  });

  /* ---------- il cestino della nonna ---------- */
  async function prendiMetro(m) {
    if (m.flag("metroPreso")) return m.pensa("g1.cest.vuoto");
    m.flag("metroPreso", true);
    m.prendi("metro"); m.prendi("gomitolo");
    await m.pensa("g1.cest.prendi");
    await m.dice("penna", "g1.cest.penna");
  }
  async function misuraSenzaMetro(m) {
    if (m.flag("misureFatte")) return m.pensa("g1.misure.gia");
    await m.pensa("g1.righello.1");
    await m.dice("penna", "g1.righello.2");
  }

  /* ---------- le misure: circonferenza : diametro ---------- */
  async function misura(m) {
    if (m.flag("misureFatte")) return m.pensa("g1.misure.gia");
    if (!m.stato.flag.misure) m.flag("misure", nuoveMisure());
    var mis = m.stato.flag.misure, primo = mis.piatto;
    await m.pensa("g1.mis.1");
    await m.pannello(function (p, chiudi) {
      p.innerHTML = "<h2>" + Lingue.html("g1.mis.titolo") + '</h2><p class="pn-guida">' + Lingue.html("g1.mis.guida") + '</p><div class="ce-misure">' +
        OGGETTI.map(function (o) {
          return '<div class="ce-misura">' + iconaOggetto(o) + "<b>" + Lingue.html("g1.ogg." + o) + "</b><br>" +
            Lingue.html("g1.mis.riga", { c: Cer3.v(mis[o].c) }) + "<br>" + Lingue.html("g1.mis.riga2", { d: String(mis[o].d) }) + "</div>";
        }).join("") + "</div>";
      var b = document.createElement("button"); b.className = "pn-tasto principale"; b.innerHTML = Lingue.html("g1.mis.calcola");
      b.addEventListener("click", function (e) { e.stopPropagation(); chiudi(); });
      p.appendChild(b);
    }, { chiudibile: false });
    var par = { c: Cer3.v(primo.c), d: String(primo.d), inv: Cer3.v(primo.d / primo.c), diff: Cer3.v(primo.c - primo.d) };
    m.aiutoQui({ id: "h-rapporto", chi: "penna", chiavi: ["g1.h.rap.1", "g1.h.rap.2", "g1.h.rap.3"], param: par });
    await Cer3.finoAlGiusto(m, "g1.mis.domanda", par, { virgola: true, max: 6, calcolatrice: true }, 3.14, async function (n) {
      if (n !== null && Math.abs(n - primo.d / primo.c) < 0.006) { m.errore("g1-rapporto-rovescio"); await m.dice("penna", "g1.mis.err.rovescio", par); }
      else if (Cer3.uguale(n, primo.c - primo.d)) { m.errore("g1-rapporto-differenza"); await m.dice("penna", "g1.mis.err.differenza", par); }
      else if (Cer3.uguale(n, 3)) { m.errore("g1-rapporto-tre"); await m.dice("penna", "g1.mis.err.tre", par); }
      else { m.errore("g1-rapporto-calcolo"); await m.dice("penna", "g1.mis.err.altro", { n: Cer3.v(n || 0), c: par.c, d: par.d }); }
    });
    m.aiutoQui(null);
    /* le altre due misure: viene sempre lo stesso numero */
    await m.pannello(function (p, chiudi) {
      p.innerHTML = "<h2>" + Lingue.html("g1.mis.titolo2") + '</h2><div class="ce-misure">' +
        OGGETTI.map(function (o) {
          return '<div class="ce-misura">' + iconaOggetto(o) + "<b>" + Lingue.html("g1.ogg." + o) + "</b><br>" +
            Lingue.html("g1.mis.riga", { c: Cer3.v(mis[o].c) }) + "<br>" + Lingue.html("g1.mis.riga2", { d: String(mis[o].d) }) + '<div class="rapporto num">' + Cer3.v(mis[o].c) + " : " + mis[o].d + " = 3,14</div></div>";
        }).join("") + '</div><p class="pn-guida">' + Lingue.html("g1.mis.sempre") + "</p>";
      var b = document.createElement("button"); b.className = "pn-tasto principale"; b.innerHTML = Lingue.html("g1.capito");
      b.addEventListener("click", function (e) { e.stopPropagation(); chiudi(); });
      p.appendChild(b);
    }, { chiudibile: false });
    m.flag("misureFatte", true);
    await m.dice("penna", "g1.mis.pi.1");
    await m.pensa("g1.mis.pi.2");
    await m.dice("penna", "g1.mis.pi.3");
    m.annota("g1.q.rapporto");
    await scheda(m);
  }

  /* ---------- la scheda del quaderno: valore esatto e valore approssimato ---------- */
  async function scheda(m) {
    var d = Cer3.scegliUno([10, 20, 30, 40]);
    var par = { d: String(d), es: Cer3.kpi(d), ap: Cer3.v(d * 3.14) };
    await m.pannello(function (p, chiudi) {
      p.innerHTML = "<h2>" + Lingue.html("g1.sch.titolo") + '</h2><p class="pn-guida">' + Lingue.html("g1.sch.guida", par) + "</p>" +
        '<div class="ce-scheda"><div class="esatto"><h3>' + Lingue.html("g1.sch.esatto") + '</h3><div class="num">C = ' + par.es + " cm</div>" + Lingue.html("g1.sch.esatto.d") + "</div>" +
        '<div class="approx"><h3>' + Lingue.html("g1.sch.approx") + '</h3><div class="num">C = ' + par.ap + " cm</div>" + Lingue.html("g1.sch.approx.d") + "</div></div>" +
        '<p class="pn-guida">' + Lingue.html("g1.sch.tasto") + "</p>";
      var b = document.createElement("button"); b.className = "pn-tasto principale"; b.innerHTML = Lingue.html("g1.capito");
      b.addEventListener("click", function (e) { e.stopPropagation(); chiudi(); });
      p.appendChild(b);
    }, { chiudibile: false });
    m.annota("g1.q.esatto");
    /* domanda di controllo, con altri numeri */
    var d2 = Cer3.scegliUno([6, 8, 12, 14, 16].filter(function (x) { return x !== d; }));
    var p2 = { d: String(d2), es: Cer3.kpi(d2), ap: Cer3.v(d2 * 3.14), doppio: Cer3.v(d2 * 3.14) + "π", tre: String(d2 * 3) };
    m.aiutoQui({ id: "h-esatto", chi: "penna", chiavi: ["g1.h.es.1", "g1.h.es.2", "g1.h.es.3"], param: p2 });
    await Cer3.sceltaFinoAlGiusto(m, "g1.es.domanda", p2, [
      { testo: "g1.op.cm", valore: "giusta", param: { t: p2.es } },
      { testo: "g1.op.cm", valore: "approx", param: { t: p2.ap } },
      { testo: "g1.op.cm", valore: "doppio", param: { t: p2.doppio } },
      { testo: "g1.op.cm", valore: "tre", param: { t: p2.tre } }
    ], "g1-esatto", "g1.es.err");
    m.aiutoQui(null);
    m.flag("schedaFatta", true);
    await m.dice("penna", "g1.es.giusta", p2);
    await m.dice("penna", "g1.es.vai");
  }

  /* ---------- Penna ---------- */
  async function dialogoPenna(m) {
    var v = await m.scegli([
      { testo: "g1.dlg.pi", valore: "pi" },
      { testo: "g1.dlg.parolona", valore: "parolona" },
      { testo: "g1.dlg.ruota", valore: "ruota" },
      { testo: "g1.dlg.ciao", valore: "ciao" }
    ]);
    if (v === "pi") { await m.dice("penna", "g1.dlg.pi.r1"); await m.dice("penna", "g1.dlg.pi.r2"); }
    if (v === "parolona") { await m.dice("penna", "g1.dlg.parolona.r1"); await m.pensa("g1.dlg.parolona.r2"); }
    if (v === "ruota") { await m.dice("penna", "g1.dlg.ruota.r1"); await m.dice("penna", "g1.dlg.ruota.r2"); }
    if (v === "ciao") await m.dice("penna", "g1.dlg.ciao.r");
  }

  /* ---------- il quadrante delle epoche ---------- */
  async function usaSelettore(m) {
    if (m.flag("partito")) return Cer3.viaggio(m);
    if (!m.flag("schedaFatta")) return m.dice("penna", "g1.sel.prima");
    if (!m.flag("manopolaMessa")) {
      if (m.ha("manopola")) return m.pensa("g1.sel.mettila");
      await m.pensa("g1.sel.manopola.1");
      await m.dice("penna", "g1.sel.manopola.2");
      return m.dice("penna", "g1.sel.manopola.3");
    }
    await m.dice("penna", "g1.primo.1");
    await m.dice("penna", "g1.primo.2");
    var ok = await Cer3.calcolaArco(m, Cer3.meta("stazione"), Cer3.meta("siracusa"));
    if (!ok) return;
    m.flag("partito", true);
    m.flag("trenoQui", "siracusa");
    m.flag("mete", ["siracusa"]);
    m.flag("meteViste", ["siracusa"]);
    m.annota("g1.q.arco");
    m.suono("magia");
    await m.dice("penna", "g1.primo.ok");
    if (!Motore._haStanza("siracusa")) { await m.dice("penna", "g1.viaggio.costruzione", { meta: Lingue.semplice("g1.meta.siracusa") }); return; }
    await m.vaiStanza("siracusa", Cer3.meta("siracusa").arrivo);
  }

  /* ---------- la cappelliera della nonna: il lucchetto vuole il giro in millimetri ---------- */
  async function misuraCappelliera(m) {
    if (m.flag("cappellieraAperta")) return m.pensa("g1.capp.vuota");
    if (!m.flag("misureFatte")) return m.pensa("g1.capp.prima");
    if (!m.stato.flag.dCapp) m.flag("dCapp", Cer3.scegliUno([15, 20, 25, 30]));
    await m.pensa("g1.capp.misura.1");
    await m.pensa("g1.capp.misura.2", { d: String(m.stato.flag.dCapp) });
    return lucchetto(m);
  }
  async function cappelliera(m) {
    if (m.flag("cappellieraAperta")) return m.pensa("g1.capp.vuota");
    if (!m.stato.flag.dCapp) { await m.pensa("g1.capp.usa.1"); return m.dice("penna", m.flag("misureFatte") ? "g1.capp.usa.2" : "g1.capp.usa.0"); }
    return lucchetto(m);
  }
  async function lucchetto(m) {
    var d = m.stato.flag.dCapp, codice = Math.round(d * 31.4);
    var par = { d: String(d), dmm: String(d * 10), ccm: Cer3.v(d * 3.14), codice: String(codice) };
    m.aiutoQui({ id: "h-capp", chi: "penna", chiavi: ["g1.h.capp.1", "g1.h.capp.2", "g1.h.capp.3"], param: par });
    var ok = await Cer3.finoAlGiusto(m, "g1.capp.domanda", par, { max: 5, virgola: true, annullabile: true, calcolatrice: true, promemoria: "g1.capp.promemoria" }, codice, async function (n) {
      if (Cer3.uguale(n, d * 3.14)) { m.errore("g1-lucchetto-cm"); await m.dice("penna", "g1.capp.err.cm", par); }
      else if (Cer3.uguale(n, d * 30) || Cer3.uguale(n, d * 3)) { m.errore("g1-lucchetto-tre"); await m.dice("penna", "g1.capp.err.tre", par); }
      else if (n !== null && (Math.abs(n - d * 15.7) < 0.06 || Math.abs(n - d * 1.57) < 0.006)) { m.errore("g1-lucchetto-raggio"); await m.dice("penna", "g1.capp.err.raggio", par); }
      else if (Cer3.uguale(n, d * 10) || Cer3.uguale(n, d)) { m.errore("g1-lucchetto-diametro"); await m.dice("penna", "g1.capp.err.diametro", par); }
      else { m.errore("g1-lucchetto-calcolo"); await m.dice("penna", "g1.capp.err.altro", { n: Cer3.v(n || 0), d: par.d }); }
    });
    m.aiutoQui(null);
    if (!ok) return;
    m.flag("cappellieraAperta", true);
    m.suono("magia");
    m.prendi("manopola");
    await m.pensa("g1.capp.aperta.1", par);
    await m.dice("penna", "g1.capp.aperta.2");
    await m.pensa("g1.capp.aperta.3");
  }
  async function mettiManopola(m) {
    m.togli("manopola");
    m.flag("manopolaMessa", true);
    m.suono("prendi");
    await m.pensa("g1.sel.messa");
    if (m.flag("schedaFatta")) return usaSelettore(m);
  }

  /* ---------- la fermata intermedia ---------- */
  async function fermata(m) {
    m.flag("fermataFatta", true);
    await m.cartello("g1.ferm.titolo", "g1.ferm.sotto", 2800);
    await m.dice("penna", "g1.ferm.1");
    await m.pannello(function (p, chiudi) {
      p.innerHTML = "<h2>" + Lingue.html("g1.ferm.titolo") + '</h2><ul class="pn-elenco">' +
        [1, 2, 3, 4].map(function (i) { return "<li>" + Lingue.html("g1.ferm.r" + i) + "</li>"; }).join("") + "</ul>";
      var b = document.createElement("button"); b.className = "pn-tasto principale"; b.innerHTML = Lingue.html("g1.capito");
      b.addEventListener("click", function (e) { e.stopPropagation(); chiudi(); });
      p.appendChild(b);
    }, { chiudibile: false });
    await m.pensa("g1.ferm.2");
  }

  /* ---------- aiuti a gradini ---------- */
  Cer3.aiutiStanze.treno = function (m) {
    if (!m.flag("metroPreso")) return { id: "t-cest", chi: "penna", chiavi: ["g1.aiuto.cest1", "g1.aiuto.cest2", "g1.aiuto.cest3"] };
    if (!m.flag("misureFatte")) return { id: "t-mis", chi: "penna", chiavi: ["g1.aiuto.mis1", "g1.aiuto.mis2", "g1.aiuto.mis3"] };
    if (!m.flag("manopolaMessa") && !m.ha("manopola") && !m.stato.flag.dCapp) return { id: "t-capp", chi: "penna", chiavi: ["g1.aiuto.capp1", "g1.aiuto.capp2", "g1.aiuto.capp3"] };
    if (!m.flag("manopolaMessa") && !m.ha("manopola")) return { id: "t-lucc", chi: "penna", chiavi: ["g1.aiuto.lucc1", "g1.aiuto.lucc2"] };
    if (!m.flag("manopolaMessa")) return { id: "t-man", chi: "penna", chiavi: ["g1.aiuto.man1", "g1.aiuto.man2"] };
    if (!m.flag("partito")) return { id: "t-sel", chi: "penna", chiavi: ["g1.aiuto.sel1", "g1.aiuto.sel2"] };
    return { id: "t-base", chi: "penna", chiavi: ["g1.aiuto.base1", "g1.aiuto.base2"] };
  };
})();
