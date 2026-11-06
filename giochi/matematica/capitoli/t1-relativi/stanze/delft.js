/* =====================================================================
   Matematica · terze · Capitolo 1 · Stanza: DELFT, ANNO 1676 — la bottega di Antoni van Leeuwenhoek (Lez. 6)
   Catena (con oggetti e informazioni da ALTRE EPOCHE):
   la "pittrice" ha chiuso le lenti nel cassetto con la combinazione «tanti quanti i problemi di un vecchio libro
   cinese» → 246 (imparato nello studio di Liu Hui; si può tornare in Cina a rileggerlo) → lente nel microscopio
   → goccia d'acqua limpida: il VASETTO di Chuquet riempito alla vasca indiana → gli animaletti si muovono (wow)
   → bivio di classe: un milione = 10 alla…? → il filo viola trovato vicino al cavalletto, guardato al microscopio,
   è una fibra di pergamena: la pittrice è smascherata (carta-parola «SIMBOLI») → il quaderno delle misure:
   vetrini dal più grande al più piccolo e notazione scientifica con il tastierino.
   Fatti verificati: CAPITOLI.md (Leeuwenhoek 1632-1723, Delft, mercante di stoffe, microscopi a una lente,
   lettera del 9 ottobre 1676 alla Royal Society; più di un milione di esseri in una goccia d'acqua pepata).
   Le misure dei vetrini sono valori INDICATIVI moderni («circa»), non dati storici.
   ===================================================================== */
(function () {
  Motore.aggiungi("oggetti", {
    lente: { icona: "ogg-lente", nome: "ogg.lente", descrizione: "ogg.lente.d", suAltro: "lente.altro" },
    filo: { icona: "ogg-filo", nome: "ogg.filo", descrizione: "ogg.filo.d", suAltro: "filo.altro" },
    carta5: { icona: "ogg-cartaparola", nome: "ogg.carta5", descrizione: "ogg.carta5.d", suAltro: "carta.altro" }
  });
  Motore.aggiungi("personaggi", {
    leeuwenhoek: { nome: "nome.leeuwenhoek", colore: "#b8e0ff", voce: { altezza: 175, timbro: "triangle", passo: 0.09, volume: 0.04 } },
    pittrice: { nome: "nome.pittrice", colore: "#d89aff", voce: { altezza: 220, timbro: "sawtooth", passo: 0.1, volume: 0.025 } }
  });
  Motore.aggiungi("figurine", {
    leeuwenhoek: { nome: "fig.leeuwenhoek.nome", anni: "fig.leeuwenhoek.anni", paese: "fig.leeuwenhoek.paese", testo: "fig.leeuwenhoek.testo", ritratto: "leeuwenhoek" }
  });

  (function () {
    var s = document.createElement("style");
    s.textContent =
      ".mc-vista { position: relative; width: 420px; height: 420px; margin: 6px auto 14px; border-radius: 50%; overflow: hidden; border: 14px solid #b8922e; box-shadow: 0 0 0 4px #1d1428, inset 0 0 40px #0006; background: radial-gradient(circle at 45% 40%, #eefaf4, #a8d8c8 70%, #6aa898); }" +
      ".mc-a { position: absolute; border-radius: 50%; border: 2px solid #2a6a5a; background: #c8f0e0aa; animation: mc-nuota 4s ease-in-out infinite alternate; }" +
      ".mc-b { position: absolute; width: 10px; height: 4px; border-radius: 2px; background: #3a7a6a; animation: mc-nuota 2.4s linear infinite alternate; }" +
      "@keyframes mc-nuota { 0% { transform: translate(0,0) rotate(0deg); } 50% { transform: translate(30px,-20px) rotate(40deg); } 100% { transform: translate(-20px,24px) rotate(-30deg); } }" +
      ".mc-fibra { position: absolute; left: 20%; top: 46%; width: 60%; height: 18px; border-radius: 9px; background: repeating-linear-gradient(90deg, #f0e2c0 0 14px, #e0cc98 14px 18px); border: 3px solid #1d1428; }" +
      ".mc-inchiostro { position: absolute; left: 30%; top: 40%; width: 40%; height: 34px; border-radius: 50%; background: #9a48a8; opacity: .55; }" +
      ".vt-vetrini { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; direction: ltr; }" +
      ".vt-vetrino { font-family: inherit; cursor: pointer; width: 190px; padding: 12px 8px; border-radius: 10px; border: 4px solid #1d1428; box-shadow: 0 5px 0 #1d1428; background: #e8f4f8; color: #1d1428; }" +
      ".vt-vetrino b { display: block; font-size: 22px; } .vt-vetrino span { display: block; font-size: 26px; font-weight: 800; margin-top: 4px; }" +
      ".vt-vetrino.usato { visibility: hidden; }" +
      ".vt-fila { display: flex; gap: 10px; justify-content: center; align-items: center; min-height: 60px; margin: 10px 0; padding: 8px; border-radius: 12px; background: #2a2448; direction: ltr; color: #f6ecd8; font-weight: 800; font-size: 22px; }";
    document.head.appendChild(s);
  })();

  /* ---------- la vista nel microscopio (animaletti che nuotano, oppure la fibra viola) ---------- */
  function vistaMicroscopio(m, cosa) {
    return m.pannello(function (p, chiudi) {
      p.innerHTML = "";
      var h = document.createElement("h2"); h.innerHTML = Lingue.html(cosa === "acqua" ? "t1d.mc.titolo" : "t1d.mc.titoloFilo"); p.appendChild(h);
      var v = document.createElement("div"); v.className = "mc-vista";
      if (cosa === "acqua") {
        var s = "";
        for (var i = 0; i < 9; i++) s += '<span class="mc-a" style="left:' + (10 + (i * 37) % 75) + "%;top:" + (12 + (i * 53) % 70) + "%;width:" + (22 + (i % 3) * 12) + "px;height:" + (14 + (i % 2) * 8) + "px;animation-delay:-" + i * 0.7 + 's"></span>';
        for (var j = 0; j < 26; j++) s += '<span class="mc-b" style="left:' + (5 + (j * 29) % 88) + "%;top:" + (6 + (j * 41) % 86) + "%;animation-delay:-" + j * 0.3 + 's"></span>';
        v.innerHTML = s;
      } else v.innerHTML = '<span class="mc-fibra"></span><span class="mc-inchiostro"></span>';
      p.appendChild(v);
      var t = document.createElement("p"); t.innerHTML = Lingue.html(cosa === "acqua" ? "t1d.mc.testo" : "t1d.mc.testoFilo"); p.appendChild(t);
      var b = document.createElement("button"); b.className = "pn-tasto principale"; b.innerHTML = Lingue.html("t1d.mc.alza");
      b.addEventListener("click", function (e) { e.stopPropagation(); chiudi(); });
      p.appendChild(b);
    }, { chiudibile: false, aiuto: false });
  }

  /* ---------- il cassetto a numeri: la combinazione viene da un'altra epoca (Liu Hui) ---------- */
  async function cassetto(m) {
    if (m.flag("cassettoAperto")) return "t1d.cass.vuoto";
    await m.pensa("t1d.cass.intro");
    m.aiutoQui({ id: "h-cassetto", chi: "penna", chiavi: ["t1d.h.cass.1", "t1d.h.cass.2", "t1d.h.cass.3"] });
    var ok = await Rel3.finoAlGiusto(m, "t1d.cass.domanda", null, { max: 3, annullabile: true }, 246, async function (n) {
      await m.dice("penna", "t1d.cass.sbagliato", { x: String(n) });
    });
    m.aiutoQui(null);
    if (!ok) return;
    m.flag("cassettoAperto", true);
    m.prendi("lente");
    await m.pensa("t1d.cass.aperto");
    await m.dice("penna", "t1d.cass.penna");
  }

  /* ---------- il microscopio: lente, poi la goccia d'acqua dall'India ---------- */
  async function microscopio(m, ogg) {
    if (ogg === "lente") {
      m.togli("lente"); m.flag("lenteMessa", true);
      await m.dice("leeuwenhoek", "t1d.mic.lente.1");
      await m.dice("leeuwenhoek", "t1d.mic.lente.2");
      return;
    }
    if (ogg === "vasettoAcqua") {
      if (!m.flag("lenteMessa")) return "t1d.mic.senzaLente";
      m.togli("vasettoAcqua"); m.flag("gocciaVista", true);
      await m.dice("leeuwenhoek", "t1d.mic.goccia.1");
      await vistaMicroscopio(m, "acqua");
      await m.dice("leeuwenhoek", "t1d.mic.goccia.2");
      await m.dice("leeuwenhoek", "t1d.mic.goccia.3");
      await bivioMilione(m);
      return;
    }
    if (ogg === "filo") {
      if (!m.flag("gocciaVista")) return "t1d.mic.prima";
      m.togli("filo");
      await vistaMicroscopio(m, "filo");
      await smaschera(m);
      return;
    }
    return "t1d.mic.altro";
  }

  async function bivioMilione(m) {
    var p = {};
    m.aiutoQui({ id: "h-milione", chi: "penna", chiavi: ["t1d.h.mil.1", "t1d.h.mil.2", "t1d.h.mil.3"] });
    for (;;) {
      var v = await m.scegli(Rel3.mescola([
        { testo: "t1d.mil.giusta", valore: "giusta" },
        { testo: "t1d.mil.cifre", valore: "cifre" },
        { testo: "t1d.mil.meno", valore: "meno" },
        { testo: "t1d.mil.cinque", valore: "cinque" }
      ]), "t1d.mil.bivio", p);
      if (v === "giusta") break;
      m.suono("errore"); m.errore("t1d-milione-" + v);
      await m.dice("penna", "t1d.mil.err." + v);
    }
    m.aiutoQui(null);
    m.suono("prendi");
    await m.dice("leeuwenhoek", "t1d.mil.ok");
    m.annota("t1d.q.grandi");
    m.flag("milioneFatto", true);
  }

  async function smaschera(m) {
    await m.pensa("t1d.sm.1");
    await m.dice("penna", "t1d.sm.2");
    await m.dice("pittrice", "t1d.sm.3");
    m.suono("magia");
    m.effetto("lampo-meno", 1180, 450, 1200);
    m.flag("smascherata", true);
    await m.dice("parolona", "t1d.sm.4");
    await m.dice("narratore", "t1d.sm.5");
    m.prendi("carta5");
    m.annota("t1d.q.carta");
    await m.pensa("t1d.sm.6");
    await m.dice("penna", "t1d.sm.7");
  }

  /* ---------- il quaderno delle misure: vetrini in ordine e notazione scientifica ---------- */
  function nuoveMisure() {
    // valori indicativi (in millimetri), con una cifra significativa: cambiano a ogni partita
    return Rel3.mescola([
      { id: "sabbia", c: Rel3.a_caso(1, 5), e: -1 },
      { id: "capello", c: Rel3.a_caso(5, 9), e: -2 },
      { id: "animaletto", c: Rel3.a_caso(1, 4), e: -2 },
      { id: "batterio", c: Rel3.a_caso(1, 5), e: -3 }
    ]);
  }
  function decimale(c, e) { return "0," + new Array(-e).join("0") + c; }   // c · 10^e con e negativo
  function valore(x) { return x.c * Math.pow(10, x.e); }

  function ordinaVetrini(m) {
    var misure = m.stato.flag.misure, messi = [], messaggio = null;
    m.aiutoQui({ id: "h-vetrini", chi: "penna", chiavi: ["t1d.h.vet.1", "t1d.h.vet.2", "t1d.h.vet.3"],
      param: { ordine: misure.slice().sort(function (a, b) { return valore(b) - valore(a); }).map(function (x) { return Lingue.semplice("t1d.v." + x.id); }).join(" → ") } });
    return m.pannello(function (p, chiudi) {
      function disegna() {
        p.innerHTML = "";
        var h = document.createElement("h2"); h.innerHTML = Lingue.html("t1d.vet.titolo"); p.appendChild(h);
        var f = document.createElement("div"); f.className = "vt-fila";
        f.innerHTML = messi.map(function (x) { return Lingue.html("t1d.v." + x.id); }).join(" → ") || "&nbsp;";
        p.appendChild(f);
        var box = document.createElement("div"); box.className = "vt-vetrini";
        misure.forEach(function (x) {
          var b = document.createElement("button");
          b.className = "vt-vetrino" + (messi.indexOf(x) >= 0 ? " usato" : "");
          b.innerHTML = "<b>" + Lingue.html("t1d.v." + x.id) + '</b><span class="num">' + decimale(x.c, x.e) + " mm</span>";
          b.addEventListener("click", function (ev) { ev.stopPropagation(); scegli(x); });
          box.appendChild(b);
        });
        p.appendChild(box);
        var msg = document.createElement("p"); msg.className = "pn-losapevi";
        msg.innerHTML = messaggio || Lingue.html("t1d.vet.istruzioni");
        p.appendChild(msg);
      }
      function scegli(x) {
        var restanti = misure.filter(function (y) { return messi.indexOf(y) < 0; });
        var giusto = restanti.reduce(function (a, b) { return valore(b) > valore(a) ? b : a; });
        if (x === giusto) {
          messi.push(x); messaggio = null; Suoni.effetto("clic");
          if (messi.length === misure.length) { Suoni.effetto("prendi"); chiudi(); return; }
        } else {
          Suoni.effetto("errore"); m.errore("t1d-vetrini");
          messaggio = Lingue.html("t1d.vet.err", { a: Lingue.semplice("t1d.v." + x.id), b: Lingue.semplice("t1d.v." + giusto.id), va: decimale(x.c, x.e), vb: decimale(giusto.c, giusto.e) });
        }
        disegna();
      }
      disegna();
    }, { chiudibile: false });
  }

  async function quaderno(m) {
    if (m.flag("delftFatta")) return "t1d.quad.fatto";
    if (!m.flag("smascherata")) return "t1d.quad.prima";
    if (!m.stato.flag.misure) m.flag("misure", nuoveMisure());
    await m.dice("leeuwenhoek", "t1d.quad.intro.1");
    await m.dice("leeuwenhoek", "t1d.quad.intro.2");
    await ordinaVetrini(m);
    m.aiutoQui(null);
    m.annota("t1d.q.ordini");
    await m.dice("leeuwenhoek", "t1d.quad.ordinati");
    // notazione scientifica: due misure da scrivere come c · 10 alla…
    var misure = m.stato.flag.misure.slice().sort(function (a, b) { return valore(b) - valore(a); });
    var da = [misure[1], misure[3]];
    for (var i = (m.stato.flag.notazioniFatte || 0); i < da.length; i++) {
      var x = da[i], p = { cosa: Lingue.semplice("t1d.v." + x.id), dec: decimale(x.c, x.e), c: String(x.c), e: Rel3.scrivi(x.e), zeri: String(-x.e) };
      m.aiutoQui({ id: "h-not" + i, chi: "penna", chiavi: ["t1d.h.not.1", "t1d.h.not.2", "t1d.h.not.3"], param: p });
      await Rel3.finoAlGiusto(m, "t1d.not.domanda", p, { segno: true, max: 2 }, x.e, async function (n) {
        var tipo = n === -x.e ? "segno" : (n === x.e - 1 || n === x.e + 1 ? "uno" : "calcolo");
        m.errore("t1d-notazione-" + tipo);
        await m.dice("penna", "t1d.not.err." + tipo, p);
      });
      m.aiutoQui(null);
      m.flag("notazioniFatte", i + 1);
      await m.dice("leeuwenhoek", "t1d.not.ok", p);
    }
    m.annota("t1d.q.notazione");
    m.flag("delftFatta", true);
    await m.dice("leeuwenhoek", "t1d.fine.1");
    m.figurina("leeuwenhoek");
    await m.dice("penna", "t1d.fine.2");
    await m.pensa("t1d.fine.3");
    await Rel3.sblocca(m, "stazione");
  }

  async function dialogoLeeuwenhoek(m) {
    var v = await m.scegli([
      { testo: "t1d.dlg.chi", valore: "chi" },
      { testo: "t1d.dlg.lettera", valore: "lettera" },
      { testo: "t1d.dlg.lenti", valore: "lenti" },
      { testo: "t1d.dlg.ciao", valore: "ciao" }
    ]);
    if (v === "chi") { await m.dice("leeuwenhoek", "t1d.dlg.chi.r1"); await m.dice("leeuwenhoek", "t1d.dlg.chi.r2"); }
    if (v === "lettera") { await m.dice("leeuwenhoek", "t1d.dlg.lettera.r1"); await m.dice("leeuwenhoek", "t1d.dlg.lettera.r2"); }
    if (v === "lenti") { await m.dice("leeuwenhoek", "t1d.dlg.lenti.r1"); await m.dice("leeuwenhoek", m.flag("lenteMessa") ? "t1d.dlg.lenti.r3" : "t1d.dlg.lenti.r2"); }
    if (v === "ciao") await m.dice("leeuwenhoek", "t1d.dlg.ciao.r");
  }

  Motore.stanza("delft", {
    sfondo: "delft",
    pavimento: { xMin: 170, xMax: 1250, yMin: 780, yMax: 880 },
    scala: { lontano: { y: 780, s: 0.95 }, vicino: { y: 880, s: 1 } },
    attori: [
      { id: "zara", simbolo: "zara-fronte", viste: { fronte: "zara-fronte", profilo: "zara-profilo", schiena: "zara-schiena" },
        vista: [-110, -600, 230, 615], piedi: [5, 0], altezza: 480, x: 240, y: 850, dir: 1 },
      { id: "leeuwenhoek", simbolo: "leeuwenhoek", vista: [-110, -600, 230, 615], piedi: [0, 0], altezza: 500, x: 680, y: 810, dir: -1, fisso: true },
      { id: "pittrice", simbolo: "parolona-pittrice", vista: [-150, -720, 300, 735], piedi: [0, 0], altezza: 540, x: 1180, y: 840, dir: 1, fisso: true,
        visibile: function (m) { return !m.flag("smascherata"); } }
    ],
    elementi: [
      { id: "penna", classe: "penna-el", personaggio: "penna", x: 130, y: 380, larghezza: 80, altezza: 128,
        svg: '<svg viewBox="-70 -230 150 240"><use href="#penna" x="-70" y="-230" width="150" height="240"/></svg>' },
      { id: "filo", classe: "", x: 1250, y: 800, larghezza: 60, altezza: 60,
        svg: '<svg viewBox="0 0 140 140"><use href="#ogg-filo"/></svg>',
        visibile: function (m) { return !m.flag("filoPreso"); } },
      { id: "lente-messa", classe: "compare", x: 252, y: 492, larghezza: 22, altezza: 22,
        svg: '<svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="8" fill="#dff4ff" stroke="#ffd36b" stroke-width="3"/></svg>',
        visibile: function (m) { return m.flag("lenteMessa"); } }
    ],
    entrata: async function (m) {
      if (m.flag("delftArrivo")) return;
      m.flag("delftArrivo", true);
      await m.cartello("t1d.titolo", "t1d.sottotitolo", 3000);
      await m.dice("narratore", "t1d.arrivo.1");
      await m.dice("leeuwenhoek", "t1d.arrivo.2");
      await m.dice("pittrice", "t1d.arrivo.3");
      await m.dice("pittrice", "t1d.arrivo.4");
      await m.dice("penna", "t1d.arrivo.5");
    },
    hotspot: [
      { id: "leeuwenhoek", nome: "t1d.hs.leeuwenhoek", forma: "M590 300 H780 V810 H590 Z", arrivo: [540, 850], verso: 1,
        guarda: "t1d.lw.guarda", usa: "t1d.lw.usa", parla: dialogoLeeuwenhoek,
        con: { lente: function (m) { return microscopio(m, "lente"); }, vasettoAcqua: function (m) { return microscopio(m, "vasettoAcqua"); },
          vasetto: "t1d.lw.vasettoVuoto", filo: function (m) { return microscopio(m, "filo"); }, carta5: "t1d.lw.carta" },
        conAltro: "t1d.lw.altro" },
      { id: "microscopio", nome: "t1d.hs.microscopio", forma: "M230 470 H350 V570 H230 Z", arrivo: [300, 840], vista: "schiena",
        guarda: function (m) { return m.flag("lenteMessa") ? "t1d.mic.guarda2" : "t1d.mic.guarda"; },
        usa: function (m) { if (m.flag("gocciaVista") && !m.flag("milioneFatto")) return bivioMilione(m); return m.flag("lenteMessa") ? (m.flag("gocciaVista") ? "t1d.mic.usa3" : "t1d.mic.usa2") : "t1d.mic.usa"; },
        parla: "t1d.mic.parla",
        con: { lente: function (m) { return microscopio(m, "lente"); }, vasettoAcqua: function (m) { return microscopio(m, "vasettoAcqua"); },
          vasetto: "t1d.mic.vasettoVuoto", filo: function (m) { return microscopio(m, "filo"); } },
        conAltro: "t1d.mic.altro" },
      { id: "cassetto", nome: "t1d.hs.cassetto", forma: "M980 600 H1180 V790 H980 Z", arrivo: [1000, 850], vista: "schiena",
        guarda: function (m) { return m.flag("cassettoAperto") ? "t1d.cass.guarda2" : "t1d.cass.guarda"; },
        usa: cassetto, parla: "t1d.cass.parla" },
      { id: "pittrice", nome: "t1d.hs.pittrice", forma: "M1060 250 H1300 V840 H1060 Z", arrivo: [1000, 850], verso: 1,
        presente: function (m) { return !m.flag("smascherata"); },
        guarda: "t1d.pit.guarda", usa: "t1d.pit.usa",
        parla: async function (m) { await m.dice("pittrice", "t1d.pit.parla.1"); await m.dice("penna", "t1d.pit.parla.2"); },
        conAltro: "t1d.pit.altro" },
      { id: "filo", nome: "t1d.hs.filo", forma: "M1240 790 H1320 V870 H1240 Z", arrivo: [1180, 860], verso: 1,
        presente: function (m) { return !m.flag("filoPreso"); },
        guarda: "t1d.filo.guarda",
        usa: async function (m) { m.flag("filoPreso", true); m.prendi("filo"); await m.pensa("t1d.filo.prendi"); },
        parla: "t1d.filo.parla" },
      { id: "quaderno", nome: "t1d.hs.quaderno", forma: "M336 526 H412 V566 H336 Z", arrivo: [380, 850], vista: "schiena",
        guarda: "t1d.quad.guarda", usa: quaderno, parla: "t1d.quad.parla" },
      { id: "stoffe", nome: "t1d.hs.stoffe", forma: "M1250 160 H1550 V560 H1250 Z", arrivo: [1180, 840], vista: "schiena",
        guarda: "t1d.stoffe.guarda", usa: "t1d.stoffe.usa", parla: "t1d.stoffe.parla" },
      { id: "cavalletto", nome: "t1d.hs.cavalletto", forma: "M1286 556 H1456 V840 H1286 Z", arrivo: [1200, 860], verso: 1,
        guarda: "t1d.cav.guarda", usa: "t1d.cav.usa", parla: "t1d.cav.parla" },
      { id: "finestra", nome: "t1d.hs.finestra", forma: "M620 170 H960 V470 H620 Z", arrivo: [800, 840], vista: "schiena",
        guarda: "t1d.fin.guarda", usa: "t1d.fin.usa", parla: "t1d.fin.parla" },
      { id: "treno", nome: "t1c.hs.treno", forma: "M-10 300 H130 V750 H-10 Z", arrivo: [200, 860], verso: -1,
        guarda: "t1c.treno.guarda", usa: Rel3.sali, parla: "t1c.treno.parla" }
    ]
  });

  Rel3.aiutiStanze.delft = function (m) {
    if (!m.flag("cassettoAperto") && !m.flag("lenteMessa")) return { id: "d-cass", chi: "penna", chiavi: ["t1d.aiuto.cass1", "t1d.aiuto.cass2", "t1d.aiuto.cass3"] };
    if (!m.flag("lenteMessa")) return { id: "d-lente", chi: "penna", chiavi: ["t1d.aiuto.lente1", "t1d.aiuto.lente2"] };
    if (!m.flag("gocciaVista")) {
      if (m.ha("vasettoAcqua")) return { id: "d-goccia", chi: "penna", chiavi: ["t1d.aiuto.goccia1", "t1d.aiuto.goccia2"] };
      if (m.ha("vasetto")) return { id: "d-riempi", chi: "penna", chiavi: ["t1d.aiuto.riempi1", "t1d.aiuto.riempi2"] };
      return { id: "d-vasetto", chi: "penna", chiavi: ["t1d.aiuto.vas1", "t1d.aiuto.vas2", "t1d.aiuto.vas3"] };
    }
    if (!m.flag("smascherata")) return { id: "d-filo", chi: "penna", chiavi: m.ha("filo") ? ["t1d.aiuto.filo2", "t1d.aiuto.filo3"] : ["t1d.aiuto.filo1", "t1d.aiuto.filo2", "t1d.aiuto.filo3"] };
    if (!m.flag("delftFatta")) return { id: "d-quad", chi: "penna", chiavi: ["t1d.aiuto.quad1", "t1d.aiuto.quad2"] };
    return { id: "d-treno", chi: "penna", chiavi: ["t1d.aiuto.treno1"] };
  };
})();
