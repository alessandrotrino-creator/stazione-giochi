/* =====================================================================
   Matematica · terze · Capitolo 1 · Stanza: BHILLAMALA, ANNO 628 — il cortile di Brahmagupta (Lez. 4)
   Catena: Brahmagupta ha la tavola delle regole vuota → smascherare lo "scrivano" (bivio di classe
   sul prodotto di due debiti) → lui fugge: carta-parola «NESSUNO» e cesto con tre tessere; la quarta
   l.ha presa un pappagallo → gli occhialoni finti caduti allo scrivano, dati al pappagallo (scambio) = tessera → ABBINARE le regole a parole di Brahmagupta
   ai simboli moderni (tessere in ordine casuale, mai nell'ordine degli incavi) → conti del tesoriere
   con il tastierino: prodotto di più fattori, divisione, prodotto per zero.
   Fatti storici verificati: CAPITOLI.md (nato nel 598, libro del 628 a circa trent'anni, beni e debiti, lo zero).
   Il titolo del libro contiene il nome di una divinità: nel gioco si dice solo «il mio grande libro».
   ===================================================================== */
(function () {
  Motore.aggiungi("oggetti", {
    tessere: { icona: "ogg-tessere", nome: "ogg.tessere", descrizione: "ogg.tessere.d", suAltro: "tessere.altro" },
    tessera: { icona: "ogg-tessera", nome: "ogg.tessera", descrizione: "ogg.tessera.d", suAltro: "tessere.altro" },
    occhiali: { icona: "ogg-occhiali", nome: "ogg.occhiali", descrizione: "ogg.occhiali.d", suAltro: "occhiali.altro" },
    carta3: { icona: "ogg-cartaparola", nome: "ogg.carta3", descrizione: "ogg.carta3.d", suAltro: "carta.altro" },
    vasettoAcqua: { icona: "ogg-vasetto-acqua", nome: "ogg.vasettoAcqua", descrizione: "ogg.vasettoAcqua.d", suAltro: "vasettoAcqua.altro" }
  });
  Motore.aggiungi("personaggi", {
    brahmagupta: { nome: "nome.brahmagupta", colore: "#ffd08a", voce: { altezza: 160, timbro: "triangle", passo: 0.09, volume: 0.04 } },
    scrivano: { nome: "nome.scrivano", colore: "#d89aff", voce: { altezza: 200, timbro: "sawtooth", passo: 0.1, volume: 0.025 } }
  });
  Motore.aggiungi("figurine", {
    brahmagupta: { nome: "fig.brahmagupta.nome", anni: "fig.brahmagupta.anni", paese: "fig.brahmagupta.paese", testo: "fig.brahmagupta.testo", ritratto: "brahmagupta" }
  });
  Motore.aggiungi("combinazioni", [
    { a: "tessere", b: "tessera", fai: async function (m) {
      m.togli("tessera");
      m.flag("tessereUnite", true);
      await m.pensa("t1i.unisci");
    } }
  ]);

  (function () {
    var s = document.createElement("style");
    s.textContent =
      ".ab-incavi { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin: 8px 0 16px; }" +
      ".ab-incavo { min-height: 150px; border-radius: 12px; background: #8a5a32; border: 4px solid #1d1428; padding: 10px; display: flex; flex-direction: column; justify-content: space-between; cursor: pointer; }" +
      ".ab-incavo p { margin: 0; color: #fff6e0; font-size: 20px !important; line-height: 1.25 !important; }" +
      ".ab-incavo .posto { margin-top: 8px; min-height: 52px; border-radius: 8px; background: #4a2414; display: grid; place-items: center; }" +
      ".ab-tessere { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; direction: ltr; }" +
      ".ab-tessera { font-family: inherit; cursor: pointer; padding: 10px 16px; border-radius: 10px; border: 4px solid #1d1428; box-shadow: 0 5px 0 #1d1428; background: #f6ecd8; color: #1d1428; font-size: 28px; font-weight: 800; }" +
      ".ab-tessera.scelta { background: #ffd36b; transform: translateY(-4px); }" +
      ".ab-tessera.messa { box-shadow: none; font-size: 24px; padding: 6px 10px; cursor: default; }";
    document.head.appendChild(s);
  })();

  var REGOLE = ["pp", "pm", "mp", "mm"];
  var SIMBOLI = { pp: "(+) · (+) = +", pm: "(+) · (−) = −", mp: "(−) · (+) = −", mm: "(−) · (−) = +" };

  /* ordine casuale delle tessere, mai uguale all'ordine degli incavi (nessuna tessera sotto il suo incavo) */
  function ordineTessere() {
    for (;;) {
      var o = Rel3.mescola(REGOLE.slice());
      if (o.every(function (t, i) { return t !== REGOLE[i]; })) return o;
    }
  }

  function abbina(m) {
    if (!m.stato.flag.ordineTessere) m.flag("ordineTessere", ordineTessere());
    var ordine = m.stato.flag.ordineTessere, messe = {}, scelta = null, messaggio = null;
    return m.pannello(function (p, chiudi) {
      function disegna() {
        p.innerHTML = "";
        var h = document.createElement("h2"); h.innerHTML = Lingue.html("t1i.ab.titolo"); p.appendChild(h);
        var g = document.createElement("div"); g.className = "ab-incavi";
        REGOLE.forEach(function (r, i) {
          var c = document.createElement("div"); c.className = "ab-incavo";
          c.innerHTML = "<p>" + Lingue.html("t1i.ab.regola." + r) + '</p><div class="posto">' +
            (messe[i] ? '<span class="ab-tessera messa num">' + SIMBOLI[messe[i]] + "</span>" : "") + "</div>";
          c.addEventListener("click", function (e) { e.stopPropagation(); metti(i); });
          g.appendChild(c);
        });
        p.appendChild(g);
        var t = document.createElement("div"); t.className = "ab-tessere";
        ordine.forEach(function (r) {
          var usata = Object.keys(messe).some(function (k) { return messe[k] === r; });
          if (usata) return;
          var b = document.createElement("button");
          b.className = "ab-tessera num" + (scelta === r ? " scelta" : "");
          b.textContent = SIMBOLI[r];
          b.addEventListener("click", function (e) { e.stopPropagation(); scelta = r; Suoni.effetto("clic"); disegna(); });
          t.appendChild(b);
        });
        p.appendChild(t);
        var msg = document.createElement("p"); msg.className = "pn-losapevi";
        msg.innerHTML = messaggio || Lingue.html("t1i.ab.istruzioni");
        p.appendChild(msg);
      }
      function metti(i) {
        if (!scelta || messe[i]) return;
        var giusta = REGOLE[i], scambio = (giusta === "pm" && scelta === "mp") || (giusta === "mp" && scelta === "pm");
        if (scelta === giusta || scambio) {
          messe[i] = scelta; Suoni.effetto("prendi");
          messaggio = scambio ? Lingue.html("t1i.ab.scambio") : null;
          scelta = null;
          if (Object.keys(messe).length === 4) { disegna(); setTimeout(chiudi, 900); return; }
        } else {
          Suoni.effetto("errore");
          var tipo = (giusta === "mm" && (scelta === "pm" || scelta === "mp")) ? "debiti" : (giusta === "pp" ? "beni" : "segni");
          m.errore("t1i-abbina-" + tipo);
          messaggio = Lingue.html("t1i.ab.err." + tipo);
          scelta = null;
        }
        disegna();
      }
      disegna();
    }, { chiudibile: false });
  }

  /* ---------- i conti del tesoriere: numeri diversi a ogni partita ---------- */
  function nuoviConti() {
    var f; do { f = [0, 1, 2, 3].map(function () { return Rel3.a_caso(1, 5) * (Math.random() < 0.5 ? -1 : 1); }); }
    while (f.filter(function (x) { return Math.abs(x) === 1; }).length > 1 || f.filter(function (x) { return x < 0; }).length === 0);
    var q = Rel3.a_caso(3, 9), d = Rel3.a_caso(2, 9), segniDiv = Rel3.mescola([[-1, 1], [1, -1], [-1, -1]])[0];
    var z = Rel3.a_caso(3, 9);
    return [
      { tipo: "fattori", fattori: f },
      { tipo: "divisione", a: segniDiv[0] * q * d, b: segniDiv[1] * d },
      { tipo: "zero", a: -z }
    ];
  }
  function tra(n) { return "(" + Rel3.scrivi(n) + ")"; }
  function espr(c) {
    if (c.tipo === "fattori") return c.fattori.map(tra).join(" · ");
    if (c.tipo === "divisione") return tra(c.a) + " : " + tra(c.b);
    return tra(c.a) + " · 0";
  }
  function valore(c) {
    if (c.tipo === "fattori") return c.fattori.reduce(function (x, y) { return x * y; }, 1);
    if (c.tipo === "divisione") return c.a / c.b;
    return 0;
  }

  async function contiTesoriere(m) {
    if (!m.stato.flag.contiIndia) m.flag("contiIndia", nuoviConti());
    var conti = m.stato.flag.contiIndia, fatti = m.stato.flag.contiIndiaFatti || 0;
    for (var i = fatti; i < conti.length; i++) {
      var c = conti[i], e = espr(c), giusta = valore(c);
      var negativi = c.tipo === "fattori" ? c.fattori.filter(function (x) { return x < 0; }).length : 0;
      await m.dice("brahmagupta", "t1i.conto." + c.tipo, { espr: e });
      m.aiutoQui({ id: "h-tes" + i, chi: "penna", chiavi: ["t1i.h." + c.tipo, "t1i.h." + c.tipo + ".2", "t1i.h.sol"], param: { espr: e, g: Rel3.scrivi(giusta), neg: String(negativi) } });
      await Rel3.finoAlGiusto(m, "t1i.conto.domanda", { espr: e }, { segno: true, max: 4 }, giusta, async function (n) {
        var tipo = n === -giusta && giusta !== 0 ? "segno" : (c.tipo === "zero" && Math.abs(n) === Math.abs(c.a) ? "zero" : "calcolo");
        m.errore("t1i-" + c.tipo + "-" + tipo);
        await m.dice("penna", "t1i.err." + c.tipo + "." + tipo, { espr: e, x: Rel3.scrivi(n), neg: String(negativi) });
      });
      m.aiutoQui(null);
      m.flag("contiIndiaFatti", i + 1);
      await m.dice("brahmagupta", "t1i.giusto." + c.tipo, { espr: e, g: Rel3.scrivi(giusta), neg: String(negativi) });
    }
    m.annota("t1i.q.fattori");
    m.annota("t1i.q.divisione");
    m.flag("indiaFatta", true);
    await m.dice("brahmagupta", "t1i.fine.1");
    m.figurina("brahmagupta");
    await m.dice("brahmagupta", "t1i.fine.2");
    await m.dice("penna", m.flag("carta3Presa") ? "t1i.fine.3b" : "t1i.fine.3");
    await Rel3.sblocca(m, "lione");
  }

  async function tavolaRegole(m) {
    if (m.flag("regoleFatte")) { if (m.flag("indiaFatta")) return "t1i.tav.usa2"; await contiTesoriere(m); return; }
    if (!m.ha("tessere")) return m.flag("smascherato") ? "t1i.tav.senzaTessere" : "t1i.tav.usa";
    if (!m.flag("tessereUnite")) return m.ha("tessera") ? "t1i.tav.unisci" : "t1i.tav.manca";
    await m.dice("penna", "t1i.ab.intro");
    m.aiutoQui({ id: "h-abbina", chi: "penna", chiavi: ["t1i.h.ab.1", "t1i.h.ab.2", "t1i.h.ab.3"] });
    await abbina(m);
    m.aiutoQui(null);
    m.togli("tessere");
    m.flag("regoleFatte", true);
    m.annota("t1i.q.segni");
    await m.dice("brahmagupta", "t1i.ab.fatto.1");
    await m.dice("brahmagupta", "t1i.ab.fatto.2");
    m.annota("t1i.q.zero");
    await contiTesoriere(m);
  }

  /* ---------- lo scrivano: la regola sbagliata da smascherare (bivio di classe) ---------- */
  async function smaschera(m) {
    var a = Rel3.a_caso(2, 6), b = Rel3.a_caso(2, 6);
    var p = { a: String(a), b: String(b), giusta: Rel3.scrivi(a * b), suo: Rel3.scrivi(-a * b), somma: Rel3.scrivi(-(a + b)), piu: Rel3.scrivi(a + b) };
    await m.dice("scrivano", "t1i.scr.regola", p);
    m.aiutoQui({ id: "h-scr", chi: "penna", chiavi: ["t1i.h.scr.1", "t1i.h.scr.2", "t1i.h.scr.3"], param: p });
    for (;;) {
      var v = await m.scegli(Rel3.mescola([
        { testo: "t1i.scr.op.giusta", valore: "giusta", param: p },
        { testo: "t1i.scr.op.suo", valore: "suo", param: p },
        { testo: "t1i.scr.op.somma", valore: "somma", param: p },
        { testo: "t1i.scr.op.piu", valore: "piu", param: p }
      ]), "t1i.scr.bivio", p);
      if (v === "giusta") break;
      m.suono("errore"); m.errore("t1i-scrivano-" + v);
      await m.dice("penna", "t1i.scr.err." + v, p);
    }
    m.suono("prendi");
    m.aiutoQui(null);
    await m.pensa("t1i.scr.giusta", p);
    await m.dice("scrivano", "t1i.scr.smascherato.1");
    m.suono("magia");
    m.effetto("lampo-meno", 1440, 480, 1200);
    m.flag("smascherato", true);
    await m.dice("parolona", "t1i.scr.smascherato.2");
    await m.dice("narratore", "t1i.scr.smascherato.3");
    await m.dice("penna", "t1i.scr.smascherato.4");
  }

  async function dialogoBrahmagupta(m) {
    var v = await m.scegli([
      { testo: "t1i.dlg.chi", valore: "chi" },
      { testo: "t1i.dlg.beni", valore: "beni" },
      { testo: "t1i.dlg.asta", valore: "asta" },
      { testo: "t1i.dlg.ciao", valore: "ciao" }
    ]);
    if (v === "chi") { await m.dice("brahmagupta", "t1i.dlg.chi.r1"); await m.dice("brahmagupta", "t1i.dlg.chi.r2"); }
    if (v === "beni") { await m.dice("brahmagupta", "t1i.dlg.beni.r1"); await m.dice("brahmagupta", "t1i.dlg.beni.r2"); }
    if (v === "asta") { await m.dice("brahmagupta", "t1i.dlg.asta.r1"); await m.pensa("t1i.dlg.asta.r2"); }
    if (v === "ciao") await m.dice("brahmagupta", "t1i.dlg.ciao.r");
  }

  Motore.stanza("india", {
    sfondo: "india",
    pavimento: { xMin: 180, xMax: 1240, yMin: 790, yMax: 880 },
    scala: { lontano: { y: 790, s: 0.96 }, vicino: { y: 880, s: 1 } },
    attori: [
      { id: "zara", simbolo: "zara-fronte", viste: { fronte: "zara-fronte", profilo: "zara-profilo", schiena: "zara-schiena" },
        vista: [-110, -600, 230, 615], piedi: [5, 0], altezza: 480, x: 240, y: 850, dir: 1 },
      { id: "brahmagupta", simbolo: "brahmagupta", vista: [-110, -600, 230, 615], piedi: [0, 0], altezza: 500, x: 1010, y: 820, dir: -1, fisso: true },
      { id: "scrivano", simbolo: "parolona-scrivano", vista: [-150, -720, 300, 735], piedi: [0, 0], altezza: 540, x: 1440, y: 830, dir: -1, fisso: true,
        visibile: function (m) { return !m.flag("smascherato"); } }
    ],
    elementi: [
      { id: "penna", classe: "penna-el", personaggio: "penna", x: 140, y: 380, larghezza: 80, altezza: 128,
        svg: '<svg viewBox="-70 -230 150 240"><use href="#penna" x="-70" y="-230" width="150" height="240"/></svg>' },
      { id: "cesto", classe: "compare", x: 1400, y: 650, larghezza: 90, altezza: 90,
        svg: '<svg viewBox="0 0 140 140"><use href="#ogg-tessere"/></svg>',
        visibile: function (m) { return m.flag("smascherato") && !m.flag("tesserePrese"); } },
      { id: "carta3", classe: "compare", x: 1270, y: 800, larghezza: 74, altezza: 74,
        svg: '<svg viewBox="0 0 140 140"><use href="#ogg-cartaparola"/></svg>',
        visibile: function (m) { return m.flag("smascherato") && !m.flag("carta3Presa"); } },
      /* il pappagallo sull'arco di destra: tiene nel becco la quarta tessera finché non riceve qualcosa che luccica */
      { id: "pappagallo", classe: "", x: 1240, y: 214, larghezza: 200, altezza: 267,
        svg: '<svg viewBox="0 0 120 160"><use href="#papp-tessera"/></svg>',
        visibile: function (m) { return !m.flag("tesseraPresa"); } },
      { id: "pappagallo2", classe: "compare", x: 1240, y: 214, larghezza: 200, altezza: 267,
        svg: '<svg viewBox="0 0 120 160"><use href="#papp-occhiali"/></svg>',
        visibile: function (m) { return m.flag("tesseraPresa"); } },
      { id: "occhiali", classe: "compare", x: 1350, y: 790, larghezza: 70, altezza: 70,
        svg: '<svg viewBox="0 0 140 140"><use href="#ogg-occhiali"/></svg>',
        visibile: function (m) { return m.flag("smascherato") && !m.flag("occhialiPresi"); } },
      { id: "regole-fatte", classe: "compare", x: 592, y: 452, larghezza: 426, altezza: 96,
        svg: '<svg viewBox="0 0 426 96"><g stroke="#1d1428" stroke-width="3" font-family="Atkinson Hyperlegible, Arial" font-weight="800" font-size="20" text-anchor="middle">' +
          '<rect x="2" y="2" width="92" height="92" rx="6" fill="#f6ecd8"/><rect x="112" y="2" width="92" height="92" rx="6" fill="#f6ecd8"/><rect x="222" y="2" width="92" height="92" rx="6" fill="#f6ecd8"/><rect x="332" y="2" width="92" height="92" rx="6" fill="#f6ecd8"/>' +
          '<text x="48" y="56" fill="#1d1428" stroke="none">+·+=+</text><text x="158" y="56" fill="#1d1428" stroke="none">+·−=−</text><text x="268" y="56" fill="#1d1428" stroke="none">−·+=−</text><text x="378" y="56" fill="#1d1428" stroke="none">−·−=+</text></g></svg>',
        visibile: function (m) { return m.flag("regoleFatte"); } }
    ],
    entrata: async function (m) {
      if (m.flag("indiaArrivo")) return;
      m.flag("indiaArrivo", true);
      await m.cartello("t1i.titolo", "t1i.sottotitolo", 3000);
      await m.dice("narratore", "t1i.arrivo.1");
      await m.dice("brahmagupta", "t1i.arrivo.2");
      await m.dice("brahmagupta", "t1i.arrivo.3");
      await m.pensa("t1i.arrivo.4");
      await m.dice("penna", "t1i.arrivo.5");
    },
    hotspot: [
      { id: "brahmagupta", nome: "t1i.hs.brahmagupta", forma: "M920 300 H1100 V820 H920 Z", arrivo: [880, 860], verso: 1,
        guarda: "t1i.br.guarda", usa: "t1i.br.usa", parla: dialogoBrahmagupta,
        con: { tessere: "t1i.br.tessere", tessera: "t1i.br.tessere", occhiali: "t1i.br.occhiali", carta3: "t1i.br.carta" },
        conAltro: "t1i.br.altro" },
      { id: "scrivano", nome: "t1i.hs.scrivano", forma: "M1320 250 H1590 V830 H1320 Z", arrivo: [1240, 860], verso: 1,
        presente: function (m) { return !m.flag("smascherato"); },
        guarda: "t1i.scr.guarda", usa: "t1i.scr.usa",
        parla: async function (m) {
          await m.dice("scrivano", "t1i.scr.parla.1");
          await m.dice("penna", "t1i.scr.parla.2");
          await smaschera(m);
        },
        conAltro: "t1i.scr.altro" },
      { id: "scrittoio", nome: "t1i.hs.scrittoio", forma: "M1340 640 H1540 V820 H1340 Z", arrivo: [1240, 860], verso: 1,
        presente: function (m) { return m.flag("smascherato"); },
        guarda: function (m) { return m.flag("tesserePrese") ? "t1i.scritt.guarda2" : "t1i.scritt.guarda"; },
        usa: async function (m) {
          if (m.flag("tesserePrese")) return "t1i.scritt.usa2";
          m.flag("tesserePrese", true); m.prendi("tessere");
          await m.pensa("t1i.tessere.prendi");
        },
        parla: "t1i.scritt.parla" },
      { id: "carta3", nome: "t1i.hs.carta", forma: "M1262 790 H1352 V880 H1262 Z", arrivo: [1200, 860], verso: 1,
        presente: function (m) { return m.flag("smascherato") && !m.flag("carta3Presa"); },
        guarda: "t1i.carta.guarda",
        usa: async function (m) {
          m.flag("carta3Presa", true); m.prendi("carta3");
          await m.pensa("t1i.carta.prendi");
          await m.dice("penna", "t1i.carta.penna");
          m.annota("t1i.q.carta");
        },
        parla: "t1i.carta.parla" },
      { id: "vasca", nome: "t1i.hs.vasca", forma: "M220 690 H580 V820 H220 Z", arrivo: [400, 850], vista: "schiena",
        guarda: "t1i.vasca.guarda", usa: "t1i.vasca.usa", parla: "t1i.vasca.parla",
        con: { vasetto: async function (m) {
          m.togli("vasetto"); m.prendi("vasettoAcqua");
          await m.pensa("t1i.vasca.riempi");
          await m.dice("penna", "t1i.vasca.riempi.penna");
        }, vasettoAcqua: "t1i.vasca.giaPieno" } },
      { id: "pappagallo", nome: "t1i.hs.pappagallo", forma: "M1240 200 H1450 V470 H1240 Z", arrivo: [1230, 860], vista: "schiena",
        guarda: function (m) { return m.flag("tesseraPresa") ? "t1i.papp.guarda2" : (m.flag("smascherato") ? "t1i.papp.guarda" : "t1i.papp.guarda0"); },
        usa: function (m) { return m.flag("tesseraPresa") ? "t1i.papp.usa2" : "t1i.papp.usa"; },
        parla: async function (m) {
          if (m.flag("tesseraPresa")) return "t1i.papp.parla2";
          await m.pensa("t1i.papp.parla.1");
          await m.dice("penna", "t1i.papp.parla.2");
        },
        con: {
          occhiali: async function (m) {
            m.togli("occhiali");
            m.flag("tesseraPresa", true);
            m.prendi("tessera");
            await m.pensa("t1i.papp.scambio.1");
            await m.dice("penna", "t1i.papp.scambio.2");
          },
          carta3: "t1i.papp.carta", tessere: "t1i.papp.tessere"
        },
        conAltro: "t1i.papp.altro" },
      { id: "occhiali", nome: "t1i.hs.occhiali", forma: "M1340 780 H1430 V870 H1340 Z", arrivo: [1250, 860], verso: 1,
        presente: function (m) { return m.flag("smascherato") && !m.flag("occhialiPresi"); },
        guarda: "t1i.occ.guarda",
        usa: async function (m) { m.flag("occhialiPresi", true); m.prendi("occhiali"); await m.pensa("t1i.occ.prendi"); },
        parla: "t1i.occ.parla" },
      { id: "giara", nome: "t1i.hs.giara", forma: "M40 620 H160 V770 H40 Z", arrivo: [200, 850], verso: -1,
        guarda: "t1i.giara.guarda", usa: "t1i.giara.usa", parla: "t1i.giara.parla" },
      { id: "tavola", nome: "t1i.hs.tavola", forma: "M560 370 H990 V580 H560 Z", arrivo: [740, 860], vista: "schiena",
        guarda: function (m) { return m.flag("regoleFatte") ? "t1i.tav.guarda2" : "t1i.tav.guarda"; },
        usa: tavolaRegole, parla: "t1i.tav.parla",
        con: { tessere: tavolaRegole, tessera: "t1i.tav.unisci" } },
      { id: "gnomone", nome: "t1i.hs.gnomone", forma: "M1100 550 H1320 V800 H1100 Z", arrivo: [1080, 860], verso: 1,
        guarda: "t1i.gno.guarda", usa: "t1i.gno.usa", parla: "t1i.gno.parla" },
      { id: "treno", nome: "t1c.hs.treno", forma: "M-10 300 H150 V750 H-10 Z", arrivo: [200, 860], verso: -1,
        guarda: "t1c.treno.guarda",
        usa: Rel3.sali,
        parla: "t1c.treno.parla" }
    ]
  });

  Rel3.aiutiStanze.india = function (m) {
    if (!m.flag("smascherato")) return { id: "i-scr", chi: "penna", chiavi: ["t1i.aiuto.scr1", "t1i.aiuto.scr2", "t1i.aiuto.scr3"] };
    if (!m.flag("tesserePrese")) return { id: "i-cesto", chi: "penna", chiavi: ["t1i.aiuto.cesto1", "t1i.aiuto.cesto2"] };
    if (!m.flag("tesseraPresa")) return { id: "i-papp", chi: "penna", chiavi: m.flag("occhialiPresi") ? ["t1i.aiuto.papp2", "t1i.aiuto.papp3"] : ["t1i.aiuto.papp1", "t1i.aiuto.papp2", "t1i.aiuto.papp3"] };
    if (!m.flag("tessereUnite") && !m.flag("regoleFatte")) return { id: "i-unisci", chi: "penna", chiavi: ["t1i.aiuto.unisci1", "t1i.aiuto.unisci2"] };
    if (!m.flag("indiaFatta")) return { id: "i-tavola", chi: "penna", chiavi: ["t1i.aiuto.tav1", "t1i.aiuto.tav2", "t1i.aiuto.tav3"] };
    if (!m.flag("carta3Presa")) return { id: "i-carta", chi: "penna", chiavi: ["t1i.aiuto.carta1"] };
    return { id: "i-treno", chi: "penna", chiavi: ["t1c.aiuto.treno1"] };
  };
})();
