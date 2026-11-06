/* =====================================================================
   Matematica · terze · Capitolo 1 · Stanza: IL VAGONE DEL BINARIO 8 (tutorial, Lez. 1 e 2)
   Catena: svegliare Penna → prendere il termometro e darlo a Penna (rimette i meno: numeri relativi)
   → bivio di classe (confronto) → appendere le valigie in ordine sul portabagagli-retta
   (numeri diversi a ogni partita, errori tipici spiegati) → dalla valigia più grande, il biglietto
   → raccogliere la carta-parola → biglietto sul selettore: salto nel tempo da scrivere con il tastierino (−).
   ===================================================================== */
(function () {
  var COLORI_VALIGIE = ["#c8402f", "#2c7a6a", "#e8a23a", "#5a6ab8", "#8a4a8a"];
  var TAVOLOZZA = { "#c8402f": "#f6c8b8", "#2c7a6a": "#bfe8d8", "#e8a23a": "#fbe2b0", "#5a6ab8": "#cfd6ff", "#8a4a8a": "#ecc8ec" };

  /* cinque numeri: due negativi (uno più lontano dallo zero), l'opposto di uno dei due, lo zero o un altro positivo, un positivo più grande */
  function nuoveValigie() {
    for (;;) {
      var a = Rel3.a_caso(5, 9), b = Rel3.a_caso(1, a - 2), d = Rel3.a_caso(b + 1, 9);
      var x = Math.random() < 0.5 ? 0 : Rel3.a_caso(1, 9);
      var l = [-a, -b, b, x, d];
      if (l.filter(function (n, i) { return l.indexOf(n) === i; }).length === 5) return Rel3.mescola(l);
    }
  }
  function svgValigia(colore, chiara) {
    return '<svg viewBox="0 0 120 80"><g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">' +
      '<path d="M44 14 Q44 4 54 4 H66 Q76 4 76 14" fill="none" stroke-width="6"/>' +
      '<rect x="6" y="14" width="108" height="62" rx="10" fill="' + colore + '"/>' +
      '<path d="M6 34 H114" stroke="' + chiara + '" stroke-width="4"/><rect x="52" y="28" width="16" height="12" rx="2" fill="#f3c45a"/>' +
      '<path d="M26 14 V76 M94 14 V76" stroke-width="3" opacity=".6"/></g></svg>';
  }
  function pilaValigie() {
    return '<svg viewBox="0 0 330 170"><g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">' +
      '<rect x="10" y="80" width="150" height="86" rx="12" fill="#c8402f"/><rect x="150" y="96" width="170" height="70" rx="12" fill="#2c7a6a"/>' +
      '<rect x="40" y="26" width="120" height="60" rx="10" fill="#e8a23a" transform="rotate(-6 100 56)"/>' +
      '<rect x="170" y="40" width="120" height="60" rx="10" fill="#5a6ab8" transform="rotate(5 230 70)"/>' +
      '<rect x="110" y="0" width="90" height="44" rx="8" fill="#8a4a8a"/>' +
      '<g fill="#f6e7b8" stroke-width="3"><rect x="60" y="120" width="34" height="20" rx="4"/><rect x="220" y="122" width="34" height="20" rx="4"/>' +
      '<rect x="80" y="44" width="30" height="18" rx="4" transform="rotate(-6 95 53)"/><rect x="214" y="58" width="30" height="18" rx="4"/><rect x="140" y="14" width="28" height="16" rx="4"/></g>' +
      '</g></svg>';
  }

  /* gli elementi che cambiano: Parolona al finestrino, termometro, valigie, Penna, display, carta */
  var elementi = [
    { id: "parolona-fuori", classe: "", x: 966, y: 241, larghezza: 190, altezza: 203,
      svg: '<svg viewBox="-150 -720 300 320" style="overflow:hidden"><use href="#parolona" x="-150" y="-700" width="300" height="715"/></svg>',
      visibile: function (m) { return m.flag("parolonaAlFinestrino"); } },
    { id: "termometro-muro", classe: "", x: 708, y: 222, larghezza: 64, altezza: 214,
      svg: '<svg viewBox="44 6 52 124"><use href="#ogg-termometro" width="140" height="140"/></svg>',
      visibile: function (m) { return !m.flag("termometroPreso"); } },
    { id: "termometro-lettura", classe: "termometro-lettura", x: 740, y: 444, testo: "t1.term.lettura",
      param: function (m) { var t = m.stato.flag.temp || -5; return { t: m.flag("termometroGiusto") ? Rel3.scrivi(t) : String(Math.abs(t)) }; },
      visibile: function (m) { return !m.flag("termometroPreso"); } },
    { id: "pila-valigie", classe: "", x: 70, y: 470, larghezza: 330, altezza: 170, svg: pilaValigie(),
      visibile: function (m) { return !m.flag("valigieOrdinate"); } },
    { id: "penna", classe: "penna-el", personaggio: "penna", x: 1073, y: 443, larghezza: 80, altezza: 128,
      svg: '<svg viewBox="-70 -230 150 240"><use href="#penna" x="-70" y="-230" width="150" height="240"/></svg>',
      stato: function (m) { return m.flag("pennaSveglia") ? "" : "dorme"; } },
    { id: "display", classe: "display-epoche", x: 1272, y: 318, testo: "t1.sel.display",
      param: function (m) { return { x: m.stato.flag.salto || "0" }; } },
    { id: "carta-pavimento", classe: "", x: 1380, y: 650, larghezza: 74, altezza: 74,
      svg: '<svg viewBox="0 0 140 140"><use href="#ogg-cartaparola"/></svg>',
      visibile: function (m) { return m.flag("cartaSottoPorta") && !m.flag("cartaPresa"); } }
  ];
  // le cinque valigie appese, con il cartellino del numero (compaiono dopo l'ordinamento)
  [0, 1, 2, 3, 4].forEach(function (i) {
    var x = 250 + i * 225;
    elementi.push({ id: "valigia-" + i, classe: "", x: x - 60, y: 126, larghezza: 120, altezza: 66,
      svg: svgValigia(COLORI_VALIGIE[i], TAVOLOZZA[COLORI_VALIGIE[i]]),
      visibile: function (m) { return m.flag("valigieOrdinate"); } });
    elementi.push({ id: "cartellino-" + i, classe: "valigia-cartellino", x: x, y: 208, testo: "t1.num",
      param: function (m) { var o = m.stato.flag.ordine || []; return { x: o.length ? Rel3.scrivi(o[i]) : "" }; },
      visibile: function (m) { return m.flag("valigieOrdinate"); } });
  });

  Motore.stanza("treno", {
    sfondo: "treno8",
    pavimento: { xMin: 140, xMax: 1320, yMin: 700, yMax: 870 },
    scala: { lontano: { y: 700, s: 0.9 }, vicino: { y: 870, s: 1 } },
    attori: [
      { id: "zara", simbolo: "zara-fronte", viste: { fronte: "zara-fronte", profilo: "zara-profilo", schiena: "zara-schiena" },
        vista: [-110, -600, 230, 615], piedi: [5, 0], altezza: 500, x: 620, y: 800, dir: 1 }
    ],
    elementi: elementi,
    hotspot: [
      { id: "finestrini", nome: "t1.hs.finestrini", forma: "M226 226 H614 V458 H226 Z M866 226 H1254 V458 H866 Z", arrivo: [620, 720], vista: "schiena",
        guarda: function (m) { return m.flag("termometroGiusto") ? "t1.fin.guarda2" : "t1.fin.guarda"; },
        usa: "t1.fin.usa", parla: "t1.fin.parla" },
      { id: "termometro", nome: "t1.hs.termometro", forma: "M704 216 H776 V470 H704 Z", arrivo: [740, 720], vista: "schiena",
        presente: function (m) { return !m.flag("termometroPreso"); },
        guarda: function (m) {
          if (m.flag("termometroGiusto")) return m.pensa("t1.term.guarda2", { t: Rel3.scrivi(m.stato.flag.temp) });
          return m.pensa("t1.term.guarda", { t: String(Math.abs(m.stato.flag.temp)) });
        },
        usa: async function (m) {
          if (m.flag("termometroGiusto")) return "t1.term.usa2";
          m.flag("termometroPreso", true);
          m.prendi("termometro");
          await m.pensa("t1.term.prendi");
        },
        parla: "t1.term.parla" },
      { id: "penna", nome: "t1.hs.penna", forma: "M1050 420 H1180 V610 H1050 Z", arrivo: [1080, 730], vista: "schiena",
        guarda: function (m) { return m.flag("pennaSveglia") ? "t1.penna.guarda2" : "t1.penna.guarda"; },
        usa: async function (m) { if (!m.flag("pennaSveglia")) return sveglia(m); return "t1.penna.usa2"; },
        parla: async function (m) { if (!m.flag("pennaSveglia")) return sveglia(m); return dialogoPenna(m); },
        con: { termometro: dareTermometro, biglietto8: "t1.penna.biglietto", carta1: "t1.penna.carta" },
        conAltro: "t1.penna.altro" },
      { id: "valigie", nome: "t1.hs.valigie", forma: "M60 460 H410 V640 H60 Z", arrivo: [320, 730], vista: "schiena",
        presente: function (m) { return !m.flag("valigieOrdinate"); },
        guarda: "t1.val.guarda",
        usa: async function (m) {
          if (!m.flag("termometroGiusto")) return "t1.val.prima";
          if (!m.flag("bivioFreddoFatto")) await bivioFreddo(m);
          return ordinaValigie(m);
        },
        parla: "t1.val.parla" },
      { id: "sedile", nome: "t1.hs.sedile", forma: "M30 390 H430 V700 H30 Z", arrivo: [320, 730], vista: "schiena",
        presente: function (m) { return m.flag("valigieOrdinate"); },
        guarda: "t1.sedile.guarda", usa: "t1.sedile.usa", parla: "t1.sedile.parla" },
      { id: "portabagagli", nome: "t1.hs.portabagagli", forma: "M170 120 H1310 V230 H170 Z", arrivo: [740, 720], vista: "schiena",
        guarda: function (m) { return m.flag("valigieOrdinate") ? "t1.rack.guarda2" : "t1.rack.guarda"; },
        usa: function (m) { return m.flag("valigieOrdinate") ? "t1.rack.usa2" : "t1.rack.usa"; },
        parla: "t1.rack.parla" },
      { id: "selettore", nome: "t1.hs.selettore", forma: "M1258 296 H1346 V494 H1258 Z", arrivo: [1250, 740], vista: "schiena",
        guarda: function (m) { return m.flag("partito") ? "t1.sel.guarda2" : "t1.sel.guarda"; },
        usa: function (m) { return m.flag("partito") ? Rel3.viaggio(m) : (m.ha("biglietto8") ? "t1.sel.usaBiglietto" : "t1.sel.usa"); },
        parla: "t1.sel.parla",
        con: { biglietto8: impostaSalto } },
      { id: "porta", nome: "t1.hs.porta", forma: "M1350 160 H1570 V640 H1350 Z", arrivo: [1310, 770], verso: 1,
        guarda: "t1.porta.guarda", usa: function (m) { return m.flag("partito") ? Rel3.viaggio(m) : "t1.porta.usa"; }, parla: "t1.porta.parla" },
      { id: "carta", nome: "t1.hs.carta", forma: "M1366 640 H1466 V740 H1366 Z", arrivo: [1310, 790], verso: 1,
        presente: function (m) { return m.flag("cartaSottoPorta") && !m.flag("cartaPresa"); },
        guarda: "t1.carta.guarda",
        usa: async function (m) {
          m.flag("cartaPresa", true);
          m.prendi("carta1");
          await m.pensa("t1.carta.prendi");
          if (m.flag("pennaSveglia")) await m.dice("penna", "t1.carta.penna");
          m.annota("t1.q.carta");
        },
        parla: "t1.carta.parla" },
      { id: "freno", nome: "t1.hs.freno", forma: "M1276 128 H1324 V204 H1276 Z", arrivo: [1250, 720], vista: "schiena",
        guarda: "t1.freno.guarda", usa: "t1.freno.usa", parla: "t1.freno.parla" },
      { id: "lampade", nome: "t1.hs.lampade", forma: "M396 88 H464 V130 H396 Z M1096 88 H1164 V130 H1096 Z", arrivo: [740, 720], vista: "schiena",
        guarda: "t1.lampade.guarda", usa: "t1.lampade.usa", parla: "t1.lampade.parla" }
    ]
  });

  /* ---------- Penna ---------- */
  async function sveglia(m) {
    await m.pensa("t1.penna.sveglia.1");
    await m.dice("penna", "t1.penna.sveglia.2");
    m.flag("pennaSveglia", true);
    m.suono("magia");
    await m.dice("penna", "t1.penna.sveglia.3");
    await m.pensa("t1.penna.sveglia.4");
    await m.dice("penna", "t1.penna.sveglia.5");
    await m.dice("penna", "t1.penna.sveglia.6");
  }
  async function dialogoPenna(m) {
    var v = await m.scegli([
      { testo: "t1.dlg.chi", valore: "chi" },
      { testo: "t1.dlg.meno", valore: "meno" },
      { testo: "t1.dlg.parolona", valore: "parolona" },
      { testo: "t1.dlg.ciao", valore: "ciao" }
    ]);
    if (v === "chi") { await m.dice("penna", "t1.dlg.chi.r1"); await m.dice("penna", "t1.dlg.chi.r2"); }
    if (v === "meno") { await m.dice("penna", "t1.dlg.meno.r1"); await m.pensa("t1.dlg.meno.r2"); await m.dice("penna", "t1.dlg.meno.r3"); }
    if (v === "parolona") { await m.dice("penna", "t1.dlg.parolona.r1"); await m.dice("penna", "t1.dlg.parolona.r2"); }
    if (v === "ciao") await m.dice("penna", "t1.dlg.ciao.r");
  }

  /* ---------- il termometro dato a Penna: tornano i segni meno; poi il bivio di classe ---------- */
  async function dareTermometro(m) {
    if (!m.flag("pennaSveglia")) return "t1.penna.dorme";
    var t = m.stato.flag.temp;
    await m.dice("penna", "t1.term.penna.1", { t: String(Math.abs(t)) });
    m.suono("magia");
    m.togli("termometro");
    m.flag("termometroPreso", false);
    m.flag("termometroGiusto", true);
    await m.dice("penna", "t1.term.penna.2", { t: Rel3.scrivi(t) });
    await m.dice("penna", "t1.term.penna.3");
    m.annota("t1.q.relativi");
    await bivioFreddo(m);
  }

  async function bivioFreddo(m) {
    var ora = m.stato.flag.temp, ieri = ora - Rel3.a_caso(2, 5);
    var p = { ieri: Rel3.scrivi(ieri), ora: Rel3.scrivi(ora), ieriA: String(Math.abs(ieri)), oraA: String(Math.abs(ora)) };
    await m.dice("penna", "t1.bivio.intro", p);
    m.aiutoQui({ id: "h-bivio", chi: "penna", chiavi: ["t1.h.bivio.1", "t1.h.bivio.2", "t1.h.bivio.3"], param: p });
    for (;;) {
      var v = await m.scegli(Rel3.mescola([
        { testo: "t1.bivio.ieri", valore: "giusta", param: p },
        { testo: "t1.bivio.ora", valore: "ora", param: p },
        { testo: "t1.bivio.uguale", valore: "uguale", param: p }
      ]), "t1.bivio", p);
      if (v === "giusta") { m.suono("prendi"); await m.dice("penna", "t1.bivio.giusta", p); break; }
      m.suono("errore"); m.errore("t1-confronto-" + v);
      await m.dice("penna", "t1.bivio.err." + v, p);
    }
    m.aiutoQui(null);
    m.annota("t1.q.confronto");
    m.flag("bivioFreddoFatto", true);
    await m.dice("penna", "t1.bivio.dopo");
  }

  /* ---------- le valigie da appendere in ordine sul portabagagli ---------- */
  function ordinaValigie(m) {
    if (!m.stato.flag.valigie) m.flag("valigie", nuoveValigie());
    var numeri = m.stato.flag.valigie.slice(), messi = [], messaggio = null;
    var colori = {};
    numeri.forEach(function (n, i) { colori[n] = COLORI_VALIGIE[i]; });
    m.aiutoQui({ id: "h-val", chi: "penna", chiavi: ["t1.h.val.1", "t1.h.val.2", "t1.h.val.3"],
      param: { ordine: numeri.slice().sort(function (a, b) { return a - b; }).map(Rel3.scrivi).join("  ") } });
    return m.pannello(function (p, chiudi) {
      function disegna() {
        p.innerHTML = "";
        var h = document.createElement("h2"); h.innerHTML = Lingue.html("t1.val.titolo"); p.appendChild(h);
        var r = document.createElement("div"); r.className = "pn-retta";
        r.innerHTML = messi.map(function (n) { return '<span class="num">' + Rel3.scrivi(n) + "</span>"; }).join("") + '<span class="freccia">→</span>';
        p.appendChild(r);
        var box = document.createElement("div"); box.className = "pn-valigie";
        numeri.forEach(function (n) {
          var b = document.createElement("button");
          b.className = "pn-valigia num" + (messi.indexOf(n) >= 0 ? " usata" : "");
          b.style.background = colori[n];
          b.style.color = n < 0 ? "#fff" : "#1d1428";
          b.textContent = Rel3.scrivi(n);
          b.addEventListener("click", function (e) { e.stopPropagation(); scelta(n); });
          box.appendChild(b);
        });
        p.appendChild(box);
        if (messaggio) {
          var msg = document.createElement("p"); msg.className = "pn-losapevi"; msg.innerHTML = messaggio; p.appendChild(msg);
        }
      }
      function scelta(n) {
        var restanti = numeri.filter(function (x) { return messi.indexOf(x) < 0; });
        var giusta = Math.min.apply(null, restanti);
        if (n === giusta) {
          messi.push(n); messaggio = null; Suoni.effetto("clic");
          if (messi.length === numeri.length) { Suoni.effetto("prendi"); m.flag("ordine", messi.slice()); chiudi(); return; }
        } else {
          Suoni.effetto("errore");
          var tipo = n < 0 && giusta < 0 ? "negativi" : (giusta < 0 ? "segno" : (giusta === 0 ? "zero" : "positivi"));
          m.errore("t1-ordine-" + tipo);
          messaggio = Lingue.html("t1.val.err." + tipo, { n: Rel3.scrivi(n), g: Rel3.scrivi(giusta), na: String(Math.abs(n)), ga: String(Math.abs(giusta)) });
        }
        disegna();
      }
      disegna();
    }, { chiudibile: false }).then(async function () {
      m.aiutoQui(null);
      m.flag("valigieOrdinate", true);
      await m.dice("penna", "t1.val.fatto.1");
      await m.dice("penna", "t1.val.fatto.2");
      m.annota("t1.q.retta");
      await m.pensa("t1.val.fatto.3");
      m.prendi("biglietto8");
      await m.pensa("t1.val.fatto.4");
    });
  }

  /* ---------- il biglietto sul selettore: il salto nel tempo si scrive con il segno ---------- */
  async function impostaSalto(m) {
    if (!m.flag("cartaPresa")) {
      await m.dice("penna", "t1.sel.primaCarta");
      return;
    }
    var oggi = new Date().getFullYear(), meta = 263, giusta = meta - oggi;
    var p = { oggi: String(oggi), meta: String(meta) };
    await m.dice("penna", "t1.sel.intro.1", p);
    await m.dice("penna", "t1.sel.intro.2");
    m.aiutoQui({ id: "h-salto0", chi: "penna", chiavi: ["t1.h.salto.1", "t1.h.salto.2", "t1.h.salto.3"], param: { oggi: p.oggi, meta: p.meta, g: Rel3.scrivi(giusta) } });
    var ok = await Rel3.finoAlGiusto(m, "t1.sel.domanda", p, { segno: true, max: 5, promemoria: "t1.sel.promemoria", annullabile: true }, giusta, async function (n) {
      if (n === -giusta) { m.errore("t1-salto-segno"); await m.dice("penna", "t1.sel.err.segno", { x: Rel3.scrivi(n), anno: String(oggi + n) }); }
      else if (n === -(oggi + meta)) { m.errore("t1-salto-somma"); await m.dice("penna", "t1.sel.err.somma", p); }
      else { m.errore("t1-salto-calcolo"); await m.dice("penna", "t1.sel.err.altro", { x: Rel3.scrivi(n), anno: String(oggi + n), oggi: p.oggi, meta: p.meta }); }
    });
    m.aiutoQui(null);
    if (!ok) return;
    m.flag("salto", Rel3.scrivi(giusta));
    m.togli("biglietto8");
    await m.dice("penna", "t1.sel.giusta", { x: Rel3.scrivi(giusta) });
    m.annota("t1.q.tempo");
    m.flag("partito", true);
    m.flag("trenoAnno", meta);
    m.flag("mete", ["cina"]);
    m.suono("magia");
    await m.dice("penna", "t1.sel.parti");
    await m.vaiStanza("cina", [300, 830, 1, "profilo"]);
  }

  /* ---------- aiuti a gradini ---------- */
  Rel3.aiutiStanze.treno = function (m) {
    if (!m.flag("pennaSveglia")) return { id: "t-penna", chi: "zara", chiavi: ["t1.aiuto.penna1", "t1.aiuto.penna2"] };
    if (!m.flag("termometroGiusto")) return { id: "t-term", chi: "penna", chiavi: m.flag("termometroPreso") ? ["t1.aiuto.term2", "t1.aiuto.term3"] : ["t1.aiuto.term1", "t1.aiuto.term2", "t1.aiuto.term3"] };
    if (!m.flag("valigieOrdinate")) return { id: "t-val", chi: "penna", chiavi: ["t1.aiuto.val1", "t1.aiuto.val2", "t1.aiuto.val3"] };
    if (!m.flag("cartaPresa")) return { id: "t-carta", chi: "penna", chiavi: ["t1.aiuto.carta1", "t1.aiuto.carta2"] };
    if (!m.flag("partito")) return { id: "t-sel", chi: "penna", chiavi: ["t1.aiuto.sel1", "t1.aiuto.sel2", "t1.aiuto.sel3"] };
    return { id: "t-fine", chi: "penna", chiavi: ["t1.aiuto.base1", "t1.aiuto.base2"] };
  };
})();
