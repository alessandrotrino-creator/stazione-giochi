/* =====================================================================
   Matematica · terze · Livello G1 · Stanza: CINA, circa 460 — il cortile di Zu Chongzhi (Lez. 3)
   MONTARE UN CONGEGNO A PEZZI: la macina di pietra è smontata e il perno è stato spostato da Madama
   Parolona: la mola gira storta. Con il COMPASSO DI ARCHIMEDE (da Siracusa) si trova il centro esatto
   della base → Zu Geng rimonta la macina → MOMENTO WOW: 355/113 e 3,1415926 < π < 3,1415927 (dopo Liu Hui)
   → area del cerchio dal raggio (esatto) → area dal diametro (esatto) → RAGGIO SAPENDO L'AREA, esatto e
   approssimato con la calcolatrice (richiesta della docente) → corona circolare della mola (esatto)
   → BIVIO DI CLASSE: raggio doppio, area… → spicchio 3, figurina, si accende Atene.
   Fatti verificati (MacTutor): Zu Chongzhi (429-501), 355/113, 3,1415926 < π < 3,1415927, il figlio Zu Geng;
   Liu Hui (263): 3,14 con 96 lati e 3,14159 con 3072 lati. 355/113 = «milü» (Wikipedia).
   ===================================================================== */
(function () {
  Motore.aggiungi("personaggi", {
    zuchongzhi: { nome: "nome.zuchongzhi", colore: "#9ad8ff", voce: { altezza: 160, timbro: "triangle", passo: 0.1, volume: 0.04 } },
    zugeng: { nome: "nome.zugeng", colore: "#b8f08a", voce: { altezza: 220, timbro: "triangle", passo: 0.08, volume: 0.04 } }
  });
  Motore.aggiungi("figurine", {
    zuchongzhi: { nome: "fig.zuchongzhi.nome", anni: "fig.zuchongzhi.anni", paese: "fig.zuchongzhi.paese", testo: "fig.zuchongzhi.testo", ritratto: "zuchongzhi" }
  });

  /* la mola vista dall'alto: corona circolare con R e r */
  function corona(R, r) {
    var s = 150 / R, Rp = R * s, rp = r * s;
    return '<svg viewBox="0 0 420 340">' +
      '<circle cx="190" cy="170" r="' + Rp + '" fill="#b8b4ac" stroke="#1d1428" stroke-width="4"/>' +
      '<circle cx="190" cy="170" r="' + rp + '" fill="#2a2440" stroke="#1d1428" stroke-width="4"/>' +
      '<path d="M190 170 L' + (190 + Rp) + ' 170" stroke="#c8402f" stroke-width="4"/><path d="M190 170 L' + (190 - rp * 0.7).toFixed(1) + " " + (170 + rp * 0.7).toFixed(1) + '" stroke="#3a7ab8" stroke-width="4"/>' +
      '<circle cx="190" cy="170" r="5" fill="#f3c45a"/>' +
      '<text x="' + (200 + Rp / 2) + '" y="160" font-size="26" fill="#ffd36b">R = ' + R + " dm</text>" +
      '<text x="' + (196 - rp) + '" y="' + (200 + rp) + '" font-size="26" fill="#9fd8ff">r = ' + r + " dm</text></svg>";
  }

  /* le due mole in giardino, oltre la porta a luna: la nostra (passa) e quella del vicino (troppo grande).
     G = diametro della porta; il colore di quella che passa e i diametri cambiano a ogni partita. */
  function moleDati(m) {
    var q = m.stato.flag.cMole;
    if (!q) {
      var G = Cer3.scegliUno([150, 160, 170, 180, 190]), passa = Cer3.scegliUno(["grigia", "rossa"]);
      var dSi = G - Cer3.scegliUno([10, 20, 30]), dNo = G + Cer3.scegliUno([10, 20, 30]);
      q = { G: G, passa: passa, d: {} };
      q.d[passa] = dSi; q.d[passa === "grigia" ? "rossa" : "grigia"] = dNo;
      m.stato.flag.cMole = q;   /* senza ridisegnare: lo chiamano anche i disegni */
    }
    return q;
  }
  function disegnoMola(colore, grande) {
    var r = grande ? 44 : 34, f = colore === "grigia" ? "#a8a49c" : "#b8645a", s = colore === "grigia" ? "#6a6660" : "#7a3a30";
    return '<svg viewBox="-50 -50 100 100" overflow="visible"><ellipse cx="0" cy="' + (r - 2) + '" rx="' + (r + 4) + '" ry="5" fill="#000" opacity=".3"/>' +
      '<g stroke="#1d1428" stroke-width="2.5"><ellipse cx="5" cy="0" rx="' + r + '" ry="' + r + '" fill="' + s + '"/><circle cx="0" cy="0" r="' + r + '" fill="' + f + '"/>' +
      '<circle cx="0" cy="0" r="' + Math.round(r * 0.3) + '" fill="#2a2440"/></g>' +
      '<path d="M' + (-r * 0.6).toFixed(0) + " " + (-r * 0.5).toFixed(0) + " Q0 " + (-r * 0.9).toFixed(0) + " " + (r * 0.6).toFixed(0) + " " + (-r * 0.5).toFixed(0) + '" fill="none" stroke="#fff" stroke-width="3" opacity=".35"/></svg>';
  }
  var POSTO_MOLA = { grigia: 740, rossa: 868 };

  var elementi = [
    { id: "vagone", classe: "", x: 0, y: 300, larghezza: 170, altezza: 560,
      svg: '<svg viewBox="0 0 170 560" overflow="visible"><use href="#ce-vagone" width="170" height="560"/></svg>' },
    { id: "base", classe: "", x: 520, y: 690, larghezza: 260, altezza: 90,
      svg: '<svg viewBox="0 0 260 90"><use href="#cz-base" width="260" height="90"/></svg>' },
    { id: "mola-terra", classe: "", x: 820, y: 742, larghezza: 220, altezza: 80,
      svg: '<svg viewBox="0 0 220 80"><g transform="rotate(-6 110 40)"><use href="#cz-mola" width="220" height="80"/></g></svg>',
      visibile: function (m) { return m.flag("molaDentro") && !m.flag("macinaMontata"); } },
    { id: "mola-su", classe: "", x: 540, y: 676, larghezza: 220, altezza: 80,
      svg: '<svg viewBox="0 0 220 80"><use href="#cz-mola" width="220" height="80"/></svg>',
      visibile: function (m) { return m.flag("macinaMontata"); } },
    { id: "perno", classe: "", x: 690, y: 690, larghezza: 24, altezza: 40,
      svg: '<svg viewBox="0 0 24 40"><rect x="7" y="2" width="10" height="34" rx="3" fill="#6a4020" stroke="#1d1428" stroke-width="2.5"/></svg>',
      visibile: function (m) { return !m.flag("macinaMontata"); } },
    { id: "penna", classe: "penna-el", personaggio: "penna", x: 610, y: 470, larghezza: 80, altezza: 128,
      svg: '<svg viewBox="-70 -230 150 240" overflow="visible"><use href="#penna" x="-70" y="-230" width="150" height="240"/></svg>' }
  ];

  /* le mole in giardino: quella che passa è un po' più piccola; la nostra sparisce quando entra */
  ["grigia", "rossa"].forEach(function (c) {
    [false, true].forEach(function (grande) {
      elementi.push({ id: "mola-" + c + (grande ? "-g" : "-p"), classe: "", x: POSTO_MOLA[c] - 50, y: 470, larghezza: 100, altezza: 100,
        svg: disegnoMola(c, grande),
        visibile: function (m) { var q = moleDati(m); return (q.passa !== c) === grande && !(m.flag("molaDentro") && q.passa === c); } });
    });
  });

  Motore.stanza("cina", {
    sfondo: "cinazu",
    pavimento: { xMin: 190, xMax: 1460, yMin: 790, yMax: 880 },
    scala: { lontano: { y: 790, s: 0.93 }, vicino: { y: 880, s: 1 } },
    attori: [
      { id: "zara", simbolo: "zara-fronte", viste: { fronte: "zara-fronte", profilo: "zara-profilo", schiena: "zara-schiena" },
        vista: [-110, -600, 230, 615], piedi: [5, 0], altezza: 460, x: 240, y: 850, dir: 1 },
      { id: "zugeng", simbolo: "zugeng", vista: [-110, -600, 230, 615], piedi: [0, 0], altezza: 420, x: 440, y: 780, dir: 1, fisso: true },
      { id: "zuchongzhi", simbolo: "zuchongzhi", vista: [-110, -600, 230, 615], piedi: [0, 0], altezza: 450, x: 1090, y: 790, dir: -1, fisso: true }
    ],
    elementi: elementi,
    entrata: async function (m) {
      if (m.flag("cinaArrivo")) return;
      m.flag("cinaArrivo", true);
      await m.cartello("g1c.titolo", "g1c.sottotitolo", 3000);
      await m.dice("narratore", "g1c.arrivo.1");
      await m.dice("zugeng", "g1c.arrivo.2");
      await m.dice("zuchongzhi", "g1c.arrivo.3");
      await m.dice("zuchongzhi", "g1c.arrivo.4");
      await m.dice("penna", "g1c.arrivo.5");
    },
    hotspot: [
      { id: "zuchongzhi", nome: "g1c.hs.zuchongzhi", forma: "M1020 330 H1170 V790 H1020 Z", arrivo: [960, 830], verso: 1,
        guarda: "g1c.zu.guarda", usa: "g1c.zu.usa", parla: parlaZu,
        con: { compasso: "g1c.zu.compasso", spicchio: "g1c.zu.spicchio", metro: "g1c.zu.metro", papiro: "g1c.zu.papiro" }, conAltro: "g1c.zu.altro" },
      { id: "zugeng", nome: "g1c.hs.zugeng", forma: "M380 220 H540 V780 H380 Z", arrivo: [470, 830], verso: -1,
        guarda: "g1c.geng.guarda", usa: "g1c.geng.usa", parla: parlaGeng,
        con: { compasso: "g1c.geng.compasso" }, conAltro: "g1c.geng.altro" },
      { id: "macina", nome: "g1c.hs.macina", forma: function (m) { return m.flag("molaDentro") && !m.flag("macinaMontata") ? "M520 670 H780 V780 H520 Z M820 740 H1040 V822 H820 Z" : "M520 670 H780 V780 H520 Z"; }, arrivo: [680, 830], vista: "schiena",
        guarda: function (m) { return m.flag("macinaMontata") ? "g1c.mac.guarda2" : m.flag("molaDentro") ? "g1c.mac.guarda" : "g1c.mac.guarda0"; },
        usa: function (m) { return m.flag("macinaMontata") ? lezione(m) : m.pensa("g1c.mac.usa"); },
        parla: "g1c.mac.parla", con: { compasso: centra, metro: "g1c.mac.metro" }, conAltro: "g1c.mac.altro" },
      { id: "porta-luna", nome: "g1c.hs.luna", forma: "M630 240 H970 V580 H630 Z", arrivo: [800, 800], vista: "schiena",
        guarda: "g1c.luna.guarda", usa: function (m) { return m.flag("molaDentro") ? m.pensa("g1c.luna.usa") : introMole(m, true); },
        parla: "g1c.luna.parla", con: { metro: "g1c.luna.metro" } },
      { id: "mola-grigia", nome: "g1c.hs.molaGrigia", forma: "M694 466 H786 V572 H694 Z", arrivo: [760, 800], vista: "schiena",
        presente: function (m) { return !(m.flag("molaDentro") && moleDati(m).passa === "grigia"); },
        guarda: function (m) { return guardaMola(m, "grigia"); }, usa: function (m) { return provaMola(m, "grigia"); },
        parla: "g1c.mola.parla", con: { metro: "g1c.mola.metro" }, conAltro: "g1c.mola.altro" },
      { id: "mola-rossa", nome: "g1c.hs.molaRossa", forma: "M822 466 H914 V572 H822 Z", arrivo: [860, 800], vista: "schiena",
        presente: function (m) { return !(m.flag("molaDentro") && moleDati(m).passa === "rossa"); },
        guarda: function (m) { return guardaMola(m, "rossa"); }, usa: function (m) { return provaMola(m, "rossa"); },
        parla: "g1c.mola.parla", con: { metro: "g1c.mola.metro" }, conAltro: "g1c.mola.altro" },
      { id: "stuoia", nome: "g1c.hs.stuoia", forma: "M1180 716 H1424 V762 H1180 Z", arrivo: [1300, 800], vista: "schiena",
        guarda: "g1c.stu.guarda", usa: "g1c.stu.usa", parla: "g1c.stu.parla" },
      { id: "lanterne", nome: "g1c.hs.lanterne", forma: "M350 260 H410 V336 H350 Z M1190 260 H1250 V336 H1190 Z", arrivo: [800, 800], vista: "schiena",
        guarda: "g1c.lan.guarda", usa: "g1c.lan.usa", parla: "g1c.lan.parla" },
      { id: "pruno", nome: "g1c.hs.pruno", forma: "M1350 370 H1600 V650 H1350 Z", arrivo: [1400, 800], vista: "schiena",
        guarda: "g1c.pru.guarda", usa: "g1c.pru.usa", parla: "g1c.pru.parla" },
      { id: "sacchi", nome: "g1c.hs.sacchi", forma: "M1456 590 H1590 V712 H1456 Z", arrivo: [1440, 800], vista: "schiena",
        guarda: "g1c.sac.guarda", usa: "g1c.sac.usa", parla: "g1c.sac.parla" },
      { id: "penna", nome: "g1.hs.penna", forma: "M590 450 H700 V600 H590 Z", arrivo: [640, 830], vista: "schiena",
        guarda: "g1c.penna.guarda", usa: "g1.penna.usa", parla: "g1c.penna.parla", conAltro: "g1.penna.altro" },
      { id: "treno", nome: "g1.hs.treno", forma: "M0 300 H170 V870 H0 Z", arrivo: [230, 840], verso: -1,
        guarda: "g1.treno.guarda", usa: Cer3.sali, parla: "g1.treno.parla" }
    ]
  });

  /* ---------- la macina: il centro con il compasso ---------- */
  async function centra(m) {
    if (m.flag("macinaMontata")) return m.pensa("g1c.mac.gia");
    if (!m.flag("molaDentro")) { await m.pensa("g1c.cen.0"); return m.dice("zugeng", "g1c.mac.senzamola"); }
    m.flag("macinaMontata", true);
    m.suono("magia");
    await m.pensa("g1c.cen.1");
    await m.dice("zugeng", "g1c.cen.2");
    await m.dice("zugeng", "g1c.cen.3");
    await m.dice("zuchongzhi", "g1c.cen.4");
    await m.dice("zuchongzhi", "g1c.cen.5");
    await m.dice("zuchongzhi", "g1c.cen.6");
    await m.dice("penna", "g1c.cen.7");
    m.annota("g1c.q.zu");
    return lezione(m);
  }

  /* ---------- le due mole: quale passa dalla porta a luna? (diametro = giro : 3,14) ---------- */
  async function introMole(m, sempre) {
    var q = moleDati(m), par = { G: String(q.G) };
    if (m.flag("moleIntro")) { if (sempre) await m.dice("zuchongzhi", "g1c.mole.ricorda", par); return; }
    m.flag("moleIntro", true);
    await m.dice("zugeng", "g1c.mole.1");
    await m.dice("zugeng", "g1c.mole.2");
    await m.dice("zuchongzhi", "g1c.mole.3");
    await m.dice("zuchongzhi", "g1c.mole.4", par);
    await m.pensa("g1c.mole.5");
  }
  function guardaMola(m, c) {
    var q = moleDati(m);
    return m.pensa("g1c.mola.guarda." + c, { C: Cer3.v(q.d[c] * 3.14) });
  }
  async function provaMola(m, c) {
    var q = moleDati(m), d = q.d[c], C = Math.round(d * 314) / 100;
    var par = { C: Cer3.v(C), G: String(q.G), d: String(d), colore: Lingue.semplice("g1c.mola." + c), r: Cer3.v(d / 2) };
    await introMole(m, false);
    var provate = m.stato.flag.moleProvate || {};
    if (!provate[c]) {
      m.aiutoQui({ id: "h-mola", chi: "penna", chiavi: ["g1c.h.mola.1", "g1c.h.mola.2", "g1c.h.mola.3"], param: par });
      var ok = await Cer3.finoAlGiusto(m, "g1c.mola.domanda", par, { max: 6, virgola: true, annullabile: true, calcolatrice: true, promemoria: "g1c.mola.promemoria" }, d, async function (n) {
        if (Cer3.uguale(n, d / 2)) { m.errore("g1-diam-raggio"); await m.dice("penna", "g1c.mola.err.raggio", par); }
        else if (n !== null && Math.abs(n - C / 2) < 0.01) { m.errore("g1-diam-meta-giro"); await m.dice("penna", "g1c.mola.err.meta", par); }
        else if (n !== null && Math.abs(n - C * 3.14) < 0.1) { m.errore("g1-diam-moltiplica"); await m.dice("penna", "g1c.mola.err.moltiplica", par); }
        else if (n !== null && Math.abs(n - C / 3) < 0.01) { m.errore("g1-diam-tre"); await m.dice("penna", "g1c.mola.err.tre", par); }
        else { m.errore("g1-diam-calcolo"); await m.dice("penna", "g1c.mola.err.altro", { n: Cer3.v(n || 0), C: par.C }); }
      });
      m.aiutoQui(null);
      if (!ok) return;
      provate[c] = true;
      m.stato.flag.moleProvate = provate;
    }
    if (d > q.G) {
      await m.pensa("g1c.mola.no.1", par);
      await m.dice("zugeng", "g1c.mola.no.2");
      return;
    }
    m.flag("molaDentro", true);
    m.suono("magia");
    await m.pensa("g1c.mola.si.1", par);
    await m.dice("zugeng", "g1c.mola.si.2");
    await m.dice("zuchongzhi", "g1c.mola.si.3");
    m.annota("g1c.q.mola");
  }

  async function parlaZu(m) {
    if (m.flag("macinaMontata") && !m.flag("cFatto")) return lezione(m);
    var v = await m.scegli([
      { testo: "g1c.dlg.chi", valore: "chi" },
      { testo: "g1c.dlg.liuhui", valore: "liuhui" },
      { testo: "g1c.dlg.macina", valore: "macina" },
      { testo: "g1c.dlg.ciao", valore: "ciao" }
    ]);
    if (v === "chi") { await m.dice("zuchongzhi", "g1c.dlg.chi.r1"); await m.dice("zuchongzhi", "g1c.dlg.chi.r2"); }
    if (v === "liuhui") { await m.dice("zuchongzhi", "g1c.dlg.liuhui.r1"); await m.dice("zuchongzhi", "g1c.dlg.liuhui.r2"); }
    if (v === "macina") await m.dice("zuchongzhi", m.flag("macinaMontata") ? "g1c.dlg.macina.r2" : "g1c.dlg.macina.r1");
    if (v === "ciao") await m.dice("zuchongzhi", m.flag("cFatto") ? "g1c.dlg.ciao.r2" : "g1c.dlg.ciao.r1");
  }
  async function parlaGeng(m) {
    if (!m.flag("molaDentro")) return introMole(m, true);
    if (!m.flag("macinaMontata")) { await m.dice("zugeng", "g1c.geng.1"); return m.dice("zugeng", "g1c.geng.2"); }
    return m.dice("zugeng", m.flag("cFatto") ? "g1c.geng.4" : "g1c.geng.3");
  }

  async function lezione(m) {
    if (!m.flag("macinaMontata")) return m.pensa("g1c.mac.usa");
    if (!m.flag("cArea")) { if (!(await area(m))) return; }
    if (!m.flag("cDiam")) { if (!(await areaDiametro(m))) return; }
    if (!m.flag("cRaggio")) { if (!(await raggioEsatto(m))) return; }
    if (!m.flag("cRaggioAp")) { if (!(await raggioApprox(m))) return; }
    if (!m.flag("cCorona")) { if (!(await coronaDom(m))) return; }
    if (!m.flag("cBivio")) await bivio(m);
    if (!m.flag("cFatto")) return fine(m);
  }

  /* 1. area dal raggio, valore esatto */
  async function area(m) {
    var r = m.stato.flag.cR || Cer3.scegliUno([3, 4, 5, 6, 7, 8, 9, 11]);
    m.flag("cR", r);
    var par = { r: String(r), k: Cer3.kpi(r * r), r2: String(r * r) };
    await m.dice("zuchongzhi", "g1c.area.intro", par);
    m.aiutoQui({ id: "h-area", chi: "penna", chiavi: ["g1c.h.area.1", "g1c.h.area.2", "g1c.h.area.3"], param: par });
    var ok = await Cer3.rispostaPi(m, {
      titolo: "g1c.area.domanda", param: par, k: r * r, esatto: true, annullabile: true,
      trappole: [
        { k: 2 * r, err: "g1-area-circonferenza", chiave: "g1c.area.err.circ" },
        { k: 4 * r * r, err: "g1-area-diametro", chiave: "g1c.area.err.diam" },
        { k: r, err: "g1-area-senza-quadrato", chiave: "g1c.area.err.r" }
      ], errAltro: "g1-area-calcolo"
    });
    m.aiutoQui(null);
    if (!ok) return false;
    m.flag("cArea", true);
    await m.dice("zuchongzhi", "g1c.area.ok", par);
    m.annota("g1c.q.area");
    return true;
  }
  /* 2. area dal diametro, valore esatto */
  async function areaDiametro(m) {
    var d = m.stato.flag.cD || Cer3.scegliUno([10, 12, 14, 16, 18, 20]);
    m.flag("cD", d);
    var par = { d: String(d), r: String(d / 2), k: Cer3.kpi(d * d / 4) };
    await m.dice("zugeng", "g1c.ad.intro", par);
    m.aiutoQui({ id: "h-ad", chi: "penna", chiavi: ["g1c.h.ad.1", "g1c.h.ad.2", "g1c.h.ad.3"], param: par });
    var ok = await Cer3.rispostaPi(m, {
      titolo: "g1c.ad.domanda", param: par, k: d * d / 4, esatto: true, annullabile: true,
      trappole: [
        { k: d * d, err: "g1-area-diametro", chiave: "g1c.ad.err.d2" },
        { k: d, err: "g1-area-circonferenza", chiave: "g1c.ad.err.circ" },
        { k: d * d / 2, err: "g1-area-meta", chiave: "g1c.ad.err.meta" }
      ], errAltro: "g1-area-calcolo"
    });
    m.aiutoQui(null);
    if (!ok) return false;
    m.flag("cDiam", true);
    await m.dice("zuchongzhi", "g1c.ad.ok", par);
    return true;
  }
  /* 3. raggio sapendo l'area, valore esatto (A = kπ, k quadrato perfetto) */
  async function raggioEsatto(m) {
    var r = m.stato.flag.cRE || Cer3.scegliUno([5, 6, 7, 8, 9, 10, 12]);
    m.flag("cRE", r);
    var par = { A: Cer3.kpi(r * r), a: String(r * r), r: String(r), d: String(2 * r) };
    await m.dice("zuchongzhi", "g1c.re.intro", par);
    m.aiutoQui({ id: "h-re", chi: "penna", chiavi: ["g1c.h.re.1", "g1c.h.re.2", "g1c.h.re.3"], param: par });
    var ok = await Cer3.finoAlGiusto(m, "g1c.re.domanda", par, { virgola: true, max: 5, annullabile: true, calcolatrice: true }, r, async function (n) {
      if (Cer3.uguale(n, r * r)) { m.errore("g1-raggio-senza-radice"); await m.dice("penna", "g1c.re.err.radice", par); }
      else if (Cer3.uguale(n, r * r / 2)) { m.errore("g1-raggio-diviso2"); await m.dice("penna", "g1c.re.err.diviso2", par); }
      else if (Cer3.uguale(n, 2 * r)) { m.errore("g1-raggio-diametro"); await m.dice("penna", "g1c.re.err.diametro", par); }
      else { m.errore("g1-raggio-calcolo"); await m.dice("penna", "g1c.re.err.altro", { n: Cer3.v(n || 0), A: par.A }); }
    });
    m.aiutoQui(null);
    if (!ok) return false;
    m.flag("cRaggio", true);
    await m.dice("zuchongzhi", "g1c.re.ok", par);
    m.annota("g1c.q.raggio");
    return true;
  }
  /* 4. raggio sapendo l'area, valore approssimato (con la calcolatrice: A : 3,14, poi √) */
  async function raggioApprox(m) {
    var r = m.stato.flag.cRA || Cer3.scegliUno([3, 4, 6, 7, 9, 11, 13]);
    m.flag("cRA", r);
    var A = Math.round(r * r * 314) / 100;
    var par = { A: Cer3.v(A), r2: String(r * r), r: String(r) };
    await m.dice("zugeng", "g1c.ra.intro", par);
    m.aiutoQui({ id: "h-ra", chi: "penna", chiavi: ["g1c.h.ra.1", "g1c.h.ra.2", "g1c.h.ra.3"], param: par });
    var ok = await Cer3.finoAlGiusto(m, "g1c.ra.domanda", par, { virgola: true, max: 6, annullabile: true, calcolatrice: true }, r, async function (n) {
      if (Cer3.uguale(n, r * r)) { m.errore("g1-raggio-senza-radice"); await m.dice("penna", "g1c.ra.err.radice", par); }
      else if (n !== null && Math.abs(n - Math.sqrt(A)) < 0.01) { m.errore("g1-raggio-senza-pi"); await m.dice("penna", "g1c.ra.err.senzapi", par); }
      else if (n !== null && Math.abs(n - A / 3.14 / 2) < 0.01) { m.errore("g1-raggio-diviso2"); await m.dice("penna", "g1c.ra.err.diviso2", par); }
      else { m.errore("g1-raggio-calcolo"); await m.dice("penna", "g1c.ra.err.altro", { n: Cer3.v(n || 0), A: par.A }); }
    });
    m.aiutoQui(null);
    if (!ok) return false;
    m.flag("cRaggioAp", true);
    await m.dice("zugeng", "g1c.ra.ok", par);
    return true;
  }
  /* 5. corona circolare della mola, valore esatto */
  async function coronaDom(m) {
    var c = m.stato.flag.cCor;
    if (!c) { var R = Cer3.scegliUno([7, 8, 9, 10, 12]); c = { R: R, r: Cer3.a_caso(2, R - 3) }; m.flag("cCor", c); }
    var par = { R: String(c.R), r: String(c.r), R2: String(c.R * c.R), r2: String(c.r * c.r), k: Cer3.kpi(c.R * c.R - c.r * c.r) };
    await m.dice("zuchongzhi", "g1c.cor.intro", par);
    await Cer3.pannelloFigura(m, "g1c.cor.titolo", corona(c.R, c.r), "g1c.cor.guida", par);
    m.aiutoQui({ id: "h-cor", chi: "penna", chiavi: ["g1c.h.cor.1", "g1c.h.cor.2", "g1c.h.cor.3"], param: par });
    var ok = await Cer3.rispostaPi(m, {
      titolo: "g1c.cor.domanda", param: par, k: c.R * c.R - c.r * c.r, esatto: true, annullabile: true, promemoria: "g1c.cor.promemoria",
      trappole: [
        { k: (c.R - c.r) * (c.R - c.r), err: "g1-corona-differenza-quadrato", chiave: "g1c.cor.err.diff" },
        { k: c.R * c.R + c.r * c.r, err: "g1-corona-somma", chiave: "g1c.cor.err.somma" },
        { k: c.R * c.R, err: "g1-corona-solo-esterno", chiave: "g1c.cor.err.esterno" },
        { k: 2 * c.R - 2 * c.r, err: "g1-corona-circonferenze", chiave: "g1c.cor.err.circ" }
      ], errAltro: "g1-corona-calcolo"
    });
    m.aiutoQui(null);
    if (!ok) return false;
    m.flag("cCorona", true);
    await m.dice("zuchongzhi", "g1c.cor.ok", par);
    m.annota("g1c.q.corona");
    return true;
  }
  /* 6. bivio di classe: raggio doppio → area quadrupla */
  async function bivio(m) {
    await m.dice("zuchongzhi", "g1c.biv.intro");
    m.aiutoQui({ id: "h-biv-c", chi: "penna", chiavi: ["g1c.h.biv.1", "g1c.h.biv.2", "g1c.h.biv.3"] });
    await Cer3.sceltaFinoAlGiusto(m, "g1c.biv.domanda", null, [
      { testo: "g1c.biv.giusta", valore: "giusta" },
      { testo: "g1c.biv.doppia", valore: "doppia" },
      { testo: "g1c.biv.uguale", valore: "uguale" },
      { testo: "g1c.biv.otto", valore: "otto" }
    ], "g1-bivio-area", "g1c.biv.err");
    m.aiutoQui(null);
    m.flag("cBivio", true);
    await m.dice("zuchongzhi", "g1c.biv.ok");
  }
  async function fine(m) {
    m.flag("cFatto", true);
    await m.dice("zugeng", "g1c.fine.1");
    await Cer3.prendiSpicchio(m, "cina");
    m.figurina("zuchongzhi");
    await m.dice("zuchongzhi", "g1c.fine.2");
    await Cer3.sblocca(m, "atene");
    await m.dice("penna", "g1c.fine.3");
  }

  /* ---------- aiuti a gradini ---------- */
  Cer3.aiutiStanze.cina = function (m) {
    if (!m.flag("molaDentro")) return { id: "c-mole", chi: "penna", chiavi: ["g1c.aiuto.mole1", "g1c.aiuto.mole2", "g1c.aiuto.mole3"] };
    if (!m.flag("macinaMontata")) return { id: "c-cen", chi: "penna", chiavi: ["g1c.aiuto.cen1", "g1c.aiuto.cen2", "g1c.aiuto.cen3"] };
    if (!m.flag("cFatto")) return { id: "c-lez", chi: "penna", chiavi: ["g1c.aiuto.lez1", "g1c.aiuto.lez2"] };
    return { id: "c-fine", chi: "penna", chiavi: ["g1c.aiuto.fine1", "g1c.aiuto.fine2"] };
  };
})();
