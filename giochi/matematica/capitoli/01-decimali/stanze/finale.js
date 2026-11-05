/* =====================================================================
   Matematica · Capitolo 1 · FINALE nel condominio (puzzle 6, sintesi)
   «Duello nel vano dell'ascensore»: il Conte lancia calcoli con i periodici,
   Leo li smonta trasformandoli in frazioni. Colpo finale: 0,999… = 1.
   Poi: la virgola torna, il Conte scappa e lascia cadere un biglietto misterioso
   (Binario 3, con un'etichetta rosa: un filo verso gli altri treni), la radio della nonna,
   ripasso, «Vero o inventato?», fine del capitolo.
   ===================================================================== */
(function () {
  var M = Mat1;

  /* i quattro colpi del Conte: il periodico da trasformare, la frazione giusta, le sbagliate credibili */
  var DUELLO = [
    { x: "0,{per:2}", giusta: "2/9", sbagliate: [["2/10", "decimale"], ["2/90", "zero"], ["2/99", "nove"]] },
    { x: "1,{per:3}", giusta: "12/9", sbagliate: [["13/9", "sottrazione"], ["13/10", "decimale"], ["12/10", "decimale"]] },
    { x: "0,1{per:6}", giusta: "15/90", sbagliate: [["16/90", "sottrazione"], ["15/99", "nove"], ["16/99", "nove"]] },
    { x: "0,{per:9}", giusta: "9/9", sbagliate: [["9/10", "decimale"], ["99/100", "decimale"], ["8/9", "conte"]] }
  ];

  function fr(f) { var p = f.split("/"); return "{fr:" + p[0] + "/" + p[1] + "}"; }

  async function duello(m) {
    if (m.flag("finaleFatto")) return;
    m.flag("contePresente", true);
    m.vista("schiena");
    await m.dice("conte", "fm.c.1");
    await m.pensa("fm.l.1");
    await m.dice("conte", "fm.c.2");
    await m.dice("ottone", "fm.o.1");
    for (var i = 0; i < DUELLO.length; i++) {
      var n = i + 1, r = DUELLO[i];
      if (m.flag("colpo-" + n)) continue;
      await m.dice("conte", "fm.colpo." + n, { x: r.x });
      var opz = [[fr(r.giusta), "giusta"]].concat(r.sbagliate.map(function (s) { return [fr(s[0]), s[1]]; }));
      M.mescola(opz);
      await M.finoAlGiusto(m, n === 4 ? "fm.bivio" : "fm.domanda", { x: r.x }, opz, function (t) {
        return m.dice("ottone", "fm.errore." + t, { x: r.x });
      }, "m6-" + n);
      m.flag("colpo-" + n, true);
      m.suono("magia");
      await m.pensa("fm.colpo." + n + ".ok");
      if (n < 4) await m.dice("conte", "fm.colpo." + n + ".reazione");
    }
    /* 0,999… = 1 */
    await m.pannello(function (p, chiudi) {
      p.appendChild(crea("h2", Lingue.html("fm.uno.titolo")));
      var g = crea("div", Lingue.html("fm.uno.grande")); g.className = "fm-uno"; p.appendChild(g);
      p.appendChild(crea("p", Lingue.html("fm.uno.1")));
      p.appendChild(crea("p", Lingue.html("fm.uno.2")));
      p.appendChild(bottone(Lingue.html("rip.avanti"), chiudi));
    }, { chiudibile: false });
    await m.dice("conte", "fm.c.3");
    m.suono("errore");
    await m.dice("conte", "fm.c.4");
    m.flag("contePresente", false);
    m.flag("virgolaTornata", true);
    m.flag("bigliettoCaduto", true);
    m.suono("magia");
    await m.dice("ottone", "fm.o.2");
    await m.pensa("fm.l.2");
    m.annota("m1.uno");
    m.flag("finaleFatto", true);
  }

  /* il biglietto caduto al Conte: Binario 3, e un'etichetta rosa incollata sopra */
  async function biglietto(m) {
    m.flag("bigliettoPreso", true);
    m.prendi("biglietto");
    await m.pensa("fm.b.1");
    await m.pensa("fm.b.2");
    await m.dice("ottone", "fm.b.3");
    await m.dice("nonna", "fm.radio.1");
    await m.dice("nonna", "fm.radio.2");
    await m.pensa("fm.l.3");
    m.annota("m1.biglietto");
    await m.cartello("fm.continua", "fm.prossimo", 4000);
    await ripasso(m);
    await veroInventato(m);
    m.fine("mat1.fine.titolo", "mat1.fine.testo");
  }

  async function ripasso(m) {
    await m.pannello(function (p, chiudi) {
      p.appendChild(crea("h2", Lingue.html("rip.titolo")));
      p.appendChild(crea("p", Lingue.html("mrip.intro")));
      var l = crea("ul", ""); l.className = "pn-elenco";
      ["mrip.1", "mrip.2", "mrip.3", "mrip.4", "mrip.5", "mrip.6", "mrip.7"].forEach(function (k) { l.appendChild(crea("li", Lingue.html(k))); });
      p.appendChild(l);
      p.appendChild(bottone(Lingue.html("rip.avanti"), chiudi));
    }, { chiudibile: false });
  }

  var VERO_INVENTATO = [
    ["mvi.1", true], ["mvi.2", false], ["mvi.3", true], ["mvi.4", false], ["mvi.5", true], ["mvi.6", true],
    ["mvi.7", true], ["mvi.8", false], ["mvi.9", false], ["mvi.10", true], ["mvi.11", false], ["mvi.12", true]
  ];
  async function veroInventato(m) {
    var indice = 0, giuste = 0;
    await m.pannello(function (p, chiudi) {
      function disegna() {
        p.innerHTML = "";
        p.appendChild(crea("h2", Lingue.html("vi.titolo") + ' <small style="color:#c8c4dc">' + Math.min(indice + 1, VERO_INVENTATO.length) + "/" + VERO_INVENTATO.length + "</small>"));
        if (indice >= VERO_INVENTATO.length) {
          p.appendChild(crea("p", Lingue.html("vi.fine", { giuste: String(giuste), totale: String(VERO_INVENTATO.length) })));
          p.appendChild(bottone(Lingue.html("rip.avanti"), chiudi));
          return;
        }
        var d = VERO_INVENTATO[indice];
        p.appendChild(crea("p", '<b style="font-size:1.25em">' + Lingue.html(d[0]) + "</b>"));
        var riga = crea("div", ""); riga.style.display = "flex"; riga.style.gap = "16px";
        [[true, "vi.vero"], [false, "vi.inventato"]].forEach(function (s) {
          riga.appendChild(bottone(Lingue.html(s[1]), function () {
            var ok = s[0] === d[1];
            if (ok) giuste++;
            Suoni.effetto(ok ? "prendi" : "errore");
            p.querySelectorAll("button").forEach(function (b) { b.disabled = true; });
            var e = crea("div", Lingue.html(ok ? "vi.ok" : "vi.no") + " " + Lingue.html(d[0] + ".spiega"));
            e.className = "pn-losapevi";
            p.appendChild(e);
            p.appendChild(bottone(Lingue.html("rip.avanti"), function () { indice++; disegna(); }));
          }, s[0] ? "pn-tasto principale" : "pn-tasto"));
        });
        p.appendChild(riga);
      }
      disegna();
    }, { chiudibile: false });
  }

  function crea(tag, html) { var e = document.createElement(tag); e.innerHTML = html; return e; }
  function bottone(html, fai, classe) { var b = document.createElement("button"); b.className = classe || "pn-tasto principale"; b.innerHTML = html; b.addEventListener("click", fai); return b; }

  /* ---------- aggiunte all'atrio del condominio ---------- */
  var cond = Motore.stanzaDef("condominio");
  cond.elementi.push(
    { id: "conte-cond", classe: "figura", personaggio: "conte", x: 1160, y: 470, larghezza: 180, altezza: 225, svg: FiguraConte(),
      visibile: function (m) { return m.flag("contePresente"); } },
    { id: "biglietto-terra", x: 1060, y: 700, larghezza: 70, altezza: 40,
      svg: '<svg viewBox="0 0 70 40"><g stroke="#1d1428" stroke-width="2.5" transform="rotate(-8 35 20)"><rect x="4" y="6" width="62" height="28" rx="3" fill="#f3e2b8"/>' +
        '<path d="M48 6 L48 34" stroke-dasharray="3 3"/><rect x="10" y="12" width="20" height="14" fill="#ff8fc0"/><path d="M34 14 L44 14 M34 20 L44 20 M34 26 L40 26" stroke="#6a4424" stroke-width="2"/></g></svg>',
      visibile: function (m) { return m.flag("bigliettoCaduto") && !m.flag("bigliettoPreso"); } }
  );
  /* la virgola è tornata: la bacheca torna giusta */
  cond.elementi.forEach(function (e) {
    if (e.id === "bacheca-prezzo") Object.defineProperty(e, "testo", { get: function () { return Motore._api().flag("virgolaTornata") ? "cond.bacheca.prezzoGiusto" : "cond.bacheca.prezzo"; } });
  });
  cond.hotspot.push({ id: "biglietto", nome: "hs.biglietto", forma: "M1040 680 L1150 680 L1150 760 L1040 760 Z", arrivo: [1020, 800], verso: 1,
    presente: function (m) { return m.flag("bigliettoCaduto") && !m.flag("bigliettoPreso"); },
    guarda: "fm.biglietto.guarda", usa: function (m) { return biglietto(m); }, parla: "fm.biglietto.parla" });
  var guardaBacheca = cond.hotspot.filter(function (h) { return h.id === "bacheca"; })[0];
  guardaBacheca.guarda = function (m) { return m.flag("virgolaTornata") ? "cond.bacheca.guardaDopo" : "cond.bacheca.guarda"; };

  /* tornando dal mercato comincia il duello */
  cond.entrata = async function (m) {
    if (m.flag("conteScappatoMercato") && !m.flag("finaleFatto")) {
      await m.dice("ottone", "fm.ritorno");
      await m.cammina(760, 760);
      await duello(m);
    }
  };

  var aiutiCond = Mat1.aiutiStanze.condominio;
  Mat1.aiutiStanze.condominio = function (m) {
    if (m.flag("bigliettoPreso")) return { id: "f-fine", chi: "ottone", chiavi: ["aiuto6.fine"] };
    if (m.flag("finaleFatto")) return { id: "f-biglietto", chi: "ottone", chiavi: ["aiuto6.b1", "aiuto6.b2"] };
    if (m.flag("conteScappatoMercato")) return { id: "f-duello", chi: "ottone", chiavi: ["aiuto6.d1", "aiuto6.d2", "aiuto6.d3"] };
    return aiutiCond(m);
  };

  Motore.aggiungi("oggetti", {
    biglietto: { icona: "ogg-biglietto", nome: "ogg.biglietto", descrizione: "ogg.biglietto.d", suAltro: "biglietto.altro" }
  });
  Grafica.definizioni(`
    <symbol id="ogg-biglietto" viewBox="0 0 140 140"><g stroke="#1d1428" stroke-width="3" transform="rotate(-8 70 70)"><rect x="14" y="40" width="112" height="60" rx="5" fill="#f3e2b8"/>
      <path d="M92 40 L92 100" stroke-dasharray="5 5"/><rect x="24" y="52" width="40" height="30" fill="#ff8fc0"/><text x="108" y="78" font-size="22" font-weight="800" text-anchor="middle" fill="#1d1428" stroke="none">3</text></g></symbol>
  `);
})();
