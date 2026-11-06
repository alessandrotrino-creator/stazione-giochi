/* =====================================================================
   Matematica · terze · Capitolo 1 · Stanza: LIONE, ANNO 1484 — la stanza di Nicolas Chuquet (Lez. 5)
   Catena: la "cuoca" si è chiusa in cantina con il manoscritto di Chuquet (si sente solo la sua voce)
   → la cantina è buia e la cuoca ha nascosto le candele: bisogna TORNARE IN CINA a farsi dare la lampada
     di bronzo di Liu Hui, poi accenderla al fuoco del camino (enigma «accendere», legame tra epoche)
   → SCALA DELLE POTENZE: a ogni gradino si divide per la base (b³, b², b¹, b⁰, b⁻¹, b⁻², b⁻³),
   si sceglie il valore giusto (trappole: b⁰ = 0, b⁻¹ = −b) → in fondo l'ombra delle piume smaschera
   Madama Parolona, che fugge lasciando manoscritto e carta-parola «I» → manoscritto a Chuquet
   → bivio di classe (−a)² e −a² → proprietà delle potenze con il tastierino (esponenti con il segno).
   Fatti verificati: CAPITOLI.md (parigino, baccelliere in medicina, Triparty finito a Lione nel 1484,
   esponenti chiamati «denominazioni», esponenti negativi, pubblicato solo nel 1880). Nessuna data di nascita o morte.
   ===================================================================== */
(function () {
  Motore.aggiungi("oggetti", {
    vasetto: { icona: "ogg-vasetto", nome: "ogg.vasetto", descrizione: "ogg.vasetto.d", suAltro: "vasetto.altro" },
    lampadaAccesa: { icona: "ogg-lampada-accesa", nome: "ogg.lampadaAccesa", descrizione: "ogg.lampadaAccesa.d", suAltro: "lampadaAccesa.altro" },
    manoscritto: { icona: "ogg-manoscritto", nome: "ogg.manoscritto", descrizione: "ogg.manoscritto.d", suAltro: "manoscritto.altro" },
    carta4: { icona: "ogg-cartaparola", nome: "ogg.carta4", descrizione: "ogg.carta4.d", suAltro: "carta.altro" }
  });
  Motore.aggiungi("personaggi", {
    chuquet: { nome: "nome.chuquet", colore: "#ffb0a0", voce: { altezza: 170, timbro: "triangle", passo: 0.09, volume: 0.04 } },
    cuoca: { nome: "nome.cuoca", colore: "#d89aff", voce: { altezza: 230, timbro: "sawtooth", passo: 0.1, volume: 0.025 } }
  });
  Motore.aggiungi("figurine", {
    chuquet: { nome: "fig.chuquet.nome", anni: "fig.chuquet.anni", paese: "fig.chuquet.paese", testo: "fig.chuquet.testo", ritratto: "chuquet" }
  });

  (function () {
    var s = document.createElement("style");
    s.textContent =
      ".sc-scala { display: flex; flex-direction: column; gap: 6px; margin: 6px 0 12px; direction: ltr; }" +
      ".sc-gradino { display: flex; align-items: center; gap: 16px; padding: 8px 14px; border-radius: 10px; background: #5a3a22; border: 3px solid #1d1428; color: #f6ecd8; font-size: 30px; font-weight: 800; }" +
      ".sc-gradino.buio { background: #140c10; color: #3a2a30; }" +
      ".sc-gradino.ora { background: #8a5a32; box-shadow: 0 0 22px #ffcf3a; }" +
      ".sc-gradino .pot { min-width: 90px; }" +
      ".sc-gradino .op { display: flex; gap: 10px; }" +
      ".sc-gradino .op button { font-family: inherit; font-size: 26px; font-weight: 800; padding: 4px 16px; border-radius: 10px; border: 3px solid #1d1428; background: #f6ecd8; cursor: pointer; }" +
      ".sc-gradino .op button:hover { background: #ffd36b; }" +
      ".sc-gradino .div { margin-inline-start: auto; font-size: 20px; color: #ffd36b; }";
    document.head.appendChild(s);
  })();

  var SUP = { "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴", "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹", "-": "⁻", "−": "⁻" };
  function pot(b, e) { return b + String(e).replace(/./g, function (c) { return SUP[c] || c; }); }
  /* il valore di b^e come testo: intero, oppure frazione in colonna 1/b^k */
  function valore(b, e) { return e >= 0 ? String(Math.pow(b, e)) : "{fr:1/" + Math.pow(b, -e) + "}"; }

  /* ---------- la scala delle potenze (si scende nel buio con la lampada) ---------- */
  function scala(m) {
    if (!m.stato.flag.baseScala) m.flag("baseScala", Rel3.a_caso(0, 1) ? 3 : 2);
    var b = m.stato.flag.baseScala, esponenti = [3, 2, 1, 0, -1, -2, -3], primo = 3, i = primo, messaggio = null;
    function opzioni(e) {
      var k = -e, o;
      if (e === 0) o = [["1", "giusta"], ["0", "zero"], [String(b), "nondiviso"]];
      else o = [[valore(b, e), "giusta"], ["−" + Math.pow(b, k), "negativo"], ["−{fr:1/" + Math.pow(b, k) + "}", "frazneg"]];
      return Rel3.mescola(o);
    }
    var opz = opzioni(esponenti[i]);
    return m.pannello(function (p, chiudi) {
      function disegna() {
        p.innerHTML = "";
        var h = document.createElement("h2"); h.innerHTML = Lingue.html("t1l.sc.titolo"); p.appendChild(h);
        var sc = document.createElement("div"); sc.className = "sc-scala";
        esponenti.forEach(function (e, j) {
          var g = document.createElement("div");
          g.className = "sc-gradino" + (j > i ? " buio" : "") + (j === i ? " ora" : "");
          var testo = '<span class="pot num">' + pot(b, e) + "</span>";
          if (j < i) testo += '<span class="num">= ' + Lingue.html("t1l.val", { v: valore(b, e) }) + "</span>";
          if (j > 0 && j <= i) testo += '<span class="div">' + Lingue.html("t1l.sc.dividi", { b: String(b) }) + "</span>";
          g.innerHTML = testo;
          if (j === i) {
            var o = document.createElement("span"); o.className = "op";
            opz.forEach(function (x) {
              var bt = document.createElement("button"); bt.className = "num";
              bt.innerHTML = Lingue.html("t1l.val", { v: x[0] });
              bt.addEventListener("click", function (ev) { ev.stopPropagation(); scegli(x[1], e); });
              o.appendChild(bt);
            });
            g.insertBefore(o, g.lastChild && j > 0 ? g.lastChild : null);
          }
          sc.appendChild(g);
        });
        p.appendChild(sc);
        var msg = document.createElement("p"); msg.className = "pn-losapevi";
        msg.innerHTML = messaggio || Lingue.html("t1l.sc.istruzioni", { b: String(b) });
        p.appendChild(msg);
      }
      function scegli(tipo, e) {
        if (tipo === "giusta") {
          Suoni.effetto("clic"); messaggio = null; i++;
          if (i >= esponenti.length) { Suoni.effetto("prendi"); chiudi(); return; }
          opz = opzioni(esponenti[i]);
        } else {
          Suoni.effetto("errore"); m.errore("t1l-scala-" + tipo);
          messaggio = Lingue.html("t1l.sc.err." + tipo, { b: String(b), p: pot(b, e), sopra: valore(b, e + 1), k: String(-e), bk: String(Math.pow(b, Math.abs(e))) });
        }
        disegna();
      }
      disegna();
    }, { chiudibile: false });
  }

  async function scendi(m) {
    if (m.flag("cantinaFatta")) return "t1l.botola.usa2";
    if (m.ha("lampada")) return "t1l.botola.spenta";
    if (!m.ha("lampadaAccesa")) return "t1l.botola.buio";
    await m.pensa("t1l.scendi.1");
    await m.dice("penna", "t1l.scendi.2");
    var bs = m.stato.flag.baseScala || 2;
    m.aiutoQui({ id: "h-scala", chi: "penna", chiavi: ["t1l.h.scala.1", "t1l.h.scala.2", "t1l.h.scala.3"],
      param: { b: String(bs), b2: String(bs * bs), b3: String(bs * bs * bs) } });
    await scala(m);
    m.aiutoQui(null);
    m.annota("t1l.q.scala");
    m.flag("cantinaFatta", true);
    await m.dice("narratore", "t1l.ombra.1");
    await m.dice("penna", "t1l.ombra.2");
    await m.dice("cuoca", "t1l.ombra.3");
    m.suono("magia");
    m.effetto("lampo-meno", 1260, 760, 1200);
    await m.dice("parolona", "t1l.ombra.4");
    await m.dice("narratore", "t1l.ombra.5");
    m.prendi("manoscritto");
    m.prendi("carta4");
    m.annota("t1l.q.carta");
    await m.pensa("t1l.ombra.6");
    await m.dice("penna", "t1l.ombra.7");
  }

  /* ---------- bivio di classe: (−a)² e −a² ---------- */
  async function bivioQuadrato(m) {
    var a = Rel3.a_caso(2, 5), q = a * a;
    var p = { a: String(a), q: String(q), pq: Rel3.scrivi(q), mq: Rel3.scrivi(-q), base: "(−" + a + ")²", meno: "−" + a + "²" };
    await m.dice("chuquet", "t1l.bivio.intro", p);
    m.aiutoQui({ id: "h-quadrato", chi: "penna", chiavi: ["t1l.h.quad.1", "t1l.h.quad.2", "t1l.h.quad.3"], param: p });
    for (;;) {
      var v = await m.scegli(Rel3.mescola([
        { testo: "t1l.bivio.giusta", valore: "giusta", param: p },
        { testo: "t1l.bivio.piu", valore: "piu", param: p },
        { testo: "t1l.bivio.meno", valore: "meno", param: p },
        { testo: "t1l.bivio.rov", valore: "rov", param: p }
      ]), "t1l.bivio", p);
      if (v === "giusta") break;
      m.suono("errore"); m.errore("t1l-quadrato-" + v);
      await m.dice("penna", "t1l.bivio.err." + v, p);
    }
    m.suono("prendi");
    m.aiutoQui(null);
    await m.dice("chuquet", "t1l.bivio.ok", p);
    m.annota("t1l.q.quadrato");
  }

  /* ---------- le proprietà delle potenze: l'esponente da scrivere con il tastierino ---------- */
  function nuoveProprieta() {
    var basi = [2, 3, 5, 7], b1 = basi[Rel3.a_caso(0, 3)], b2 = basi[Rel3.a_caso(0, 3)], b3 = basi[Rel3.a_caso(0, 3)];
    var m1 = Rel3.a_caso(2, 6), n1 = -Rel3.a_caso(1, 8);
    var m2 = Rel3.a_caso(1, 4), n2; do { n2 = Rel3.a_caso(2, 8); } while (n2 === m2);
    var m3 = -Rel3.a_caso(2, 4), n3 = Rel3.a_caso(2, 3);
    return [
      { tipo: "prodotto", b: b1, m: m1, n: n1, giusta: m1 + n1 },
      { tipo: "quoziente", b: b2, m: m2, n: n2, giusta: m2 - n2 },
      { tipo: "potenza", b: b3, m: m3, n: n3, giusta: m3 * n3 }
    ];
  }
  function espr(c) {
    if (c.tipo === "prodotto") return pot(c.b, c.m) + " · " + pot(c.b, c.n);
    if (c.tipo === "quoziente") return pot(c.b, c.m) + " : " + pot(c.b, c.n);
    return "(" + pot(c.b, c.m) + ")" + pot("", c.n);
  }
  async function proprieta(m) {
    if (!m.stato.flag.proprieta) m.flag("proprieta", nuoveProprieta());
    var conti = m.stato.flag.proprieta, fatti = m.stato.flag.proprietaFatte || 0;
    for (var i = fatti; i < conti.length; i++) {
      var c = conti[i], e = espr(c);
      var p = { espr: e, b: String(c.b), m: Rel3.scrivi(c.m), n: Rel3.scrivi(c.n) };
      await m.dice("chuquet", "t1l.pr." + c.tipo, p);
      m.aiutoQui({ id: "h-pr" + i, chi: "penna", chiavi: ["t1l.h." + c.tipo, "t1l.h." + c.tipo + ".2", "t1l.h.sol"], param: { espr: e, m: p.m, n: p.n, g: Rel3.scrivi(c.giusta) } });
      await Rel3.finoAlGiusto(m, "t1l.pr.domanda", p, { segno: true, max: 2 }, c.giusta, async function (x) {
        var tipo;
        if (x === -c.giusta) tipo = "segno";
        else if (c.tipo === "prodotto" && x === c.m * c.n) tipo = "moltiplicati";
        else if (c.tipo === "quoziente" && x === c.m + c.n) tipo = "sommati";
        else if (c.tipo === "quoziente" && x === c.n - c.m) tipo = "ordine";
        else if (c.tipo === "potenza" && x === c.m + c.n) tipo = "sommati";
        else tipo = "calcolo";
        m.errore("t1l-" + c.tipo + "-" + tipo);
        await m.dice("penna", "t1l.pr.err." + c.tipo + "." + tipo, p);
      });
      m.aiutoQui(null);
      m.flag("proprietaFatte", i + 1);
      await m.dice("chuquet", "t1l.pr.ok." + c.tipo, { espr: e, r: pot(c.b, c.giusta) });
    }
    m.annota("t1l.q.proprieta");
  }

  async function dareManoscritto(m) {
    m.togli("manoscritto");
    m.flag("manoscrittoReso", true);
    await m.dice("chuquet", "t1l.reso.1");
    await m.dice("chuquet", "t1l.reso.2");
    await completaManoscritto(m);
  }
  /* riprendibile: se si chiude il gioco a metà, toccando di nuovo Chuquet si continua da dove si era */
  async function completaManoscritto(m) {
    if (!m.flag("quadratoFatto")) { await bivioQuadrato(m); m.flag("quadratoFatto", true); }
    await proprieta(m);
    m.flag("lioneFatta", true);
    await m.dice("chuquet", "t1l.fine.1");
    m.figurina("chuquet");
    await m.dice("penna", "t1l.fine.2");
    await m.pensa("t1l.fine.3");
    await Rel3.sblocca(m, "delft");
  }

  async function dialogoChuquet(m) {
    var v = await m.scegli([
      { testo: "t1l.dlg.chi", valore: "chi" },
      { testo: "t1l.dlg.libro", valore: "libro" },
      { testo: "t1l.dlg.cuoca", valore: "cuoca" },
      { testo: "t1l.dlg.ciao", valore: "ciao" }
    ]);
    if (v === "chi") { await m.dice("chuquet", "t1l.dlg.chi.r1"); await m.dice("chuquet", "t1l.dlg.chi.r2"); }
    if (v === "libro") { await m.dice("chuquet", "t1l.dlg.libro.r1"); await m.dice("chuquet", "t1l.dlg.libro.r2"); await m.dice("penna", "t1l.dlg.libro.r3"); }
    if (v === "cuoca") { await m.dice("chuquet", m.flag("cantinaFatta") ? "t1l.dlg.cuoca.r2" : "t1l.dlg.cuoca.r1"); }
    if (v === "ciao") await m.dice("chuquet", "t1l.dlg.ciao.r");
  }

  Motore.stanza("lione", {
    sfondo: "lione",
    pavimento: { xMin: 160, xMax: 1060, yMin: 780, yMax: 880 },
    scala: { lontano: { y: 780, s: 0.95 }, vicino: { y: 880, s: 1 } },
    attori: [
      { id: "zara", simbolo: "zara-fronte", viste: { fronte: "zara-fronte", profilo: "zara-profilo", schiena: "zara-schiena" },
        vista: [-110, -600, 230, 615], piedi: [5, 0], altezza: 480, x: 200, y: 850, dir: 1 },
      { id: "chuquet", simbolo: "chuquet", vista: [-110, -600, 230, 615], piedi: [0, 0], altezza: 500, x: 580, y: 800, dir: -1, fisso: true }
    ],
    elementi: [
      { id: "penna", classe: "penna-el", personaggio: "penna", x: 110, y: 380, larghezza: 80, altezza: 128,
        svg: '<svg viewBox="-70 -230 150 240"><use href="#penna" x="-70" y="-230" width="150" height="240"/></svg>' },
      { id: "luce-botola", classe: "", x: 1150, y: 700, larghezza: 230, altezza: 110,
        svg: '<svg viewBox="0 0 230 110"><ellipse cx="115" cy="60" rx="110" ry="46" fill="#ffd27a" opacity=".22"/></svg>',
        visibile: function (m) { return m.flag("cantinaFatta"); } }
    ],
    entrata: async function (m) {
      if (m.flag("lioneArrivo")) return;
      m.flag("lioneArrivo", true);
      await m.cartello("t1l.titolo", "t1l.sottotitolo", 3000);
      await m.dice("narratore", "t1l.arrivo.1");
      await m.dice("chuquet", "t1l.arrivo.2");
      await m.dice("cuoca", "t1l.arrivo.3");
      await m.dice("chuquet", "t1l.arrivo.4");
      await m.dice("penna", "t1l.arrivo.5");
      await m.dice("chuquet", "t1l.arrivo.6");
      await m.dice("penna", "t1l.arrivo.7");
    },
    hotspot: [
      { id: "chuquet", nome: "t1l.hs.chuquet", forma: "M495 290 H670 V800 H495 Z", arrivo: [700, 850], verso: -1,
        guarda: "t1l.ch.guarda", parla: dialogoChuquet,
        usa: function (m) { return m.flag("manoscrittoReso") && !m.flag("lioneFatta") ? completaManoscritto(m) : "t1l.ch.usa"; },
        con: { manoscritto: dareManoscritto, lampada: "t1l.ch.lampada", lampadaAccesa: "t1l.ch.lampadaAccesa", carta4: "t1l.ch.carta" },
        conAltro: "t1l.ch.altro" },
      { id: "camino", nome: "t1l.hs.camino", forma: "M120 190 H570 V650 H120 Z", arrivo: [340, 820], vista: "schiena",
        guarda: "t1l.cam.guarda", usa: "t1l.cam.usa", parla: "t1l.cam.parla",
        con: {
          lampada: async function (m) {
            m.togli("lampada"); m.prendi("lampadaAccesa");
            m.suono("magia");
            await m.pensa("t1l.cam.accendi");
            await m.dice("penna", "t1l.cam.accendi.penna");
          },
          lampadaAccesa: "t1l.cam.giaAccesa", manoscritto: "t1l.cam.manoscritto", carta4: "t1l.cam.carta"
        } },
      { id: "botola", nome: "t1l.hs.botola", forma: "M1060 650 H1460 V830 H1060 Z", arrivo: [1040, 850], verso: 1,
        guarda: function (m) { return m.flag("cantinaFatta") ? "t1l.botola.guarda2" : "t1l.botola.guarda"; },
        usa: scendi,
        parla: async function (m) {
          if (m.flag("cantinaFatta")) return "t1l.botola.parla2";
          await m.pensa("t1l.botola.parla.1");
          await m.dice("cuoca", "t1l.botola.parla.2");
          await m.dice("penna", "t1l.botola.parla.3");
        },
        con: { lampadaAccesa: scendi, lampada: "t1l.botola.spenta" } },
      { id: "finestra", nome: "t1l.hs.finestra", forma: "M1080 220 H1300 V470 H1080 Z", arrivo: [1000, 840], vista: "schiena",
        guarda: "t1l.fin.guarda", usa: "t1l.fin.usa", parla: "t1l.fin.parla" },
      { id: "scaffale", nome: "t1l.hs.scaffale", forma: "M1370 200 H1570 V650 H1370 Z", arrivo: [1060, 850], verso: 1,
        guarda: "t1l.scaff.guarda", parla: "t1l.scaff.parla",
        usa: async function (m) {
          if (m.flag("vasettoPreso")) return "t1l.scaff.usa";
          await m.pensa("t1l.vas.chiedi");
          await m.dice("chuquet", "t1l.vas.si");
          m.flag("vasettoPreso", true); m.prendi("vasetto");
        } },
      { id: "erbe", nome: "t1l.hs.erbe", forma: "M1278 170 H1324 V256 H1278 Z", arrivo: [1040, 840], verso: 1,
        guarda: "t1l.erbe.guarda", usa: "t1l.erbe.usa", parla: "t1l.erbe.parla" },
      { id: "paiolo", nome: "t1l.hs.paiolo", forma: "M262 440 H418 V556 H262 Z", arrivo: [340, 820], vista: "schiena",
        guarda: "t1l.paiolo.guarda", usa: "t1l.paiolo.usa", parla: "t1l.paiolo.parla" },
      { id: "calamaio", nome: "t1l.hs.calamaio", forma: "M870 480 H940 V566 H870 Z", arrivo: [900, 850], vista: "schiena",
        guarda: "t1l.cal.guarda", usa: "t1l.cal.usa", parla: "t1l.cal.parla" },
      { id: "treno", nome: "t1c.hs.treno", forma: "M-10 300 H110 V750 H-10 Z", arrivo: [180, 860], verso: -1,
        guarda: "t1c.treno.guarda",
        usa: Rel3.sali,
        parla: "t1c.treno.parla" }
    ]
  });

  Rel3.aiutiStanze.lione = function (m) {
    if (!m.flag("cantinaFatta")) {
      if (!m.ha("lampada") && !m.ha("lampadaAccesa")) return { id: "l-luce", chi: "penna", chiavi: ["t1l.aiuto.luce1", "t1l.aiuto.luce2", "t1l.aiuto.luce3"] };
      if (m.ha("lampada")) return { id: "l-accendi", chi: "penna", chiavi: ["t1l.aiuto.acc1", "t1l.aiuto.acc2"] };
      return { id: "l-scala", chi: "penna", chiavi: ["t1l.aiuto.scala1", "t1l.aiuto.scala2", "t1l.aiuto.scala3"] };
    }
    if (!m.flag("lioneFatta")) return { id: "l-mano", chi: "penna", chiavi: m.flag("manoscrittoReso") ? ["t1l.aiuto.pr1", "t1l.aiuto.pr2", "t1l.aiuto.pr3"] : ["t1l.aiuto.mano1", "t1l.aiuto.mano2"] };
    return { id: "l-treno", chi: "penna", chiavi: ["t1c.aiuto.treno1"] };
  };
})();
