/* =====================================================================
   Capitolo 1 · FINALE (nell'atrio)
   Puzzle 7 "Il grande riordino": duello di etichette con il Barone Etichetti;
   con le sei carte si ricompone il ramo degli invertebrati sull'Albero della Vita.
   Poi: cliffhanger (l'impronta misteriosa), ripasso, "Vero o inventato?".
   ===================================================================== */
(function () {
  var C = Cap1;
  var GRUPPI = ["poriferi", "cnidari", "vermi", "molluschi", "echinodermi", "artropodi"];

  /* le sei sciocchezze del Barone e le risposte (la giusta è "giusta") */
  var DUELLO = [
    { carta: "poriferi", opz: [["duello.1.a", "a"], ["duello.1.giusta", "giusta"], ["duello.1.b", "b"]] },
    { carta: "cnidari", opz: [["duello.2.giusta", "giusta"], ["duello.2.a", "a"], ["duello.2.b", "b"]] },
    { carta: "vermi", opz: [["duello.3.a", "a"], ["duello.3.b", "b"], ["duello.3.giusta", "giusta"]] },
    { carta: "molluschi", opz: [["duello.4.giusta", "giusta"], ["duello.4.a", "a"], ["duello.4.b", "b"]] },
    { carta: "echinodermi", opz: [["duello.5.a", "a"], ["duello.5.giusta", "giusta"], ["duello.5.b", "b"]] },
    { carta: "artropodi", opz: [["duello.6.a", "a"], ["duello.6.b", "b"], ["duello.6.giusta", "giusta"]] }
  ];

  var VERO_INVENTATO = [
    ["vi.1", true], ["vi.2", false], ["vi.3", true], ["vi.4", false], ["vi.5", true], ["vi.6", true],
    ["vi.7", true], ["vi.8", false], ["vi.9", true], ["vi.10", true], ["vi.11", false], ["vi.12", true]
  ];

  function tutteLeCarte(m) { return GRUPPI.every(function (g) { return m.ha("carta-" + g); }); }

  async function duello(m) {
    if (m.flag("finaleFatto")) return;
    m.flag("etichettiPresente", true);
    m.vista("schiena");
    await m.aspetta(500);
    await m.dice("etichetti", "fin.e.1");
    await m.pensa("fin.n.1");
    await m.dice("etichetti", "fin.e.2");
    await m.dice("gamberto", "fin.g.1");
    for (var i = 0; i < DUELLO.length; i++) {
      var n = i + 1;
      if (m.flag("duello-" + n)) continue;
      await m.dice("etichetti", "duello." + n + ".barone");
      await C.finoAlGiusto(m, "duello.bivio", DUELLO[i].opz, function (v) { return "duello." + n + "." + v + ".spiega"; }, "p7-" + n);
      m.togli("carta-" + DUELLO[i].carta);
      m.flag("duello-" + n, true);
      m.suono("magia");
      C.scintille(m, 470, 300 - i * 30);
      await m.pensa("duello." + n + ".ok");
      if (n < DUELLO.length) await m.dice("etichetti", "duello." + n + ".reazione");
    }
    m.flag("ramoRicomposto", true);
    C.scintille(m, 480, 260);
    await m.dice("etichetti", "fin.e.3");
    await m.dice("etichetti", "fin.e.4");
    await m.pensa("fin.n.2");
    await m.dice("etichetti", "fin.e.5");
    var e = m.attore("etichetti");
    if (e) await m.cammina(-120, 760, "etichetti");
    m.flag("etichettiPresente", false);
    /* cliffhanger: l'impronta */
    await m.dice("gamberto", "fin.g.2");
    m.flag("impronteVisibili", true);
    await m.pensa("fin.n.3");
    if (CHI) await osservaImpronta(m);
    await m.dice("lamarck", "fin.l.1");
    await m.dice("gamberto", "fin.g.3");
    m.annota("q1.cliffhanger");
    m.flag("finaleFatto", true);
    await m.cartello("fin.continua", "fin.prossimo", 3800);
    await ripasso(m);
    await veroInventato(m);
    m.fine("cap1.fine.titolo", "cap1.fine.testo");
  }

  /* a casa l'impronta ha particolari che cambiano da studente a studente: in classe li si descrive a voce */
  var CHI = Casa.attiva() && Casa.chi("scienze", "cap01");
  async function osservaImpronta(m) {
    await m.pannello(function (p, chiudi) {
      p.appendChild(crea("h2", Lingue.html("fin.casa.titolo")));
      var d = crea("div", Casa.svgImpronta(Casa.impronta(CHI)));
      d.className = "pn-impronta";
      p.appendChild(d);
      p.appendChild(crea("p", Lingue.html("fin.casa.testo")));
      p.appendChild(bottone(Lingue.html("rip.avanti"), chiudi));
    }, { chiudibile: false });
  }

  async function ripasso(m) {
    await m.pannello(function (p, chiudi) {
      p.appendChild(crea("h2", Lingue.html("rip.titolo")));
      p.appendChild(crea("p", Lingue.html("rip.intro")));
      var l = crea("ul", "");
      l.className = "pn-elenco";
      ["rip.invertebrati", "rip.simmetria", "carta.poriferi.d", "carta.cnidari.d", "carta.vermi.d", "carta.molluschi.d", "carta.echinodermi.d", "carta.artropodi.d", "rip.metamorfosi"]
        .forEach(function (k) { l.appendChild(crea("li", Lingue.html(k))); });
      p.appendChild(l);
      p.appendChild(bottone(Lingue.html("rip.avanti"), chiudi));
    }, { chiudibile: false });
  }

  async function veroInventato(m) {
    var indice = 0, giuste = 0;
    await m.pannello(function (p, chiudi) {
      function disegna() {
        p.innerHTML = "";
        p.appendChild(crea("h2", Lingue.html("vi.titolo") + ' <small style="color:#c8c4dc">' + (Math.min(indice + 1, VERO_INVENTATO.length)) + "/" + VERO_INVENTATO.length + "</small>"));
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
            var esito = crea("div", Lingue.html(ok ? "vi.ok" : "vi.no") + " " + Lingue.html(d[0] + ".spiega"));
            esito.className = "pn-losapevi";
            p.appendChild(esito);
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

  /* ---------- aggiunte alla stanza dell'atrio ---------- */
  var atrio = Motore.stanzaDef("atrio");
  atrio.attori.push({ id: "etichetti", simbolo: "etichetti", vista: [-100, -700, 220, 715], piedi: [6, 0], altezza: 580, x: 560, y: 760, dir: 1,
    visibile: function (m) { return m.flag("etichettiPresente"); } });
  /* il ramo ricomposto: una targa per gruppo, appare man mano che si vince il duello */
  var POS = [[364, 262], [364, 234], [364, 206], [364, 178], [364, 150], [364, 122]];
  GRUPPI.forEach(function (g, i) {
    atrio.elementi.push({ id: "ramo-" + g, classe: "etichetta targa ramo", testo: "ramo." + g, x: POS[i][0], y: POS[i][1],
      visibile: function (m) { return m.flag("duello-" + (i + 1)); } });
  });
  atrio.elementi.unshift({ id: "ramo-luce", classe: "ramo-luce", x: 400, y: 100, larghezza: 90, altezza: 210,
    svg: '<svg viewBox="0 0 90 210"><path d="M72 198 Q92 100 30 12" fill="none" stroke="#ffd36b" stroke-width="16" stroke-linecap="round" opacity=".55"/><path d="M72 198 Q92 100 30 12" fill="none" stroke="#fff6c2" stroke-width="5" stroke-linecap="round"/></svg>',
    visibile: function (m) { return m.flag("duello-1"); } });
  atrio.elementi.push({ id: "impronte", x: 440, y: 650, larghezza: 140, altezza: 50,
    svg: CHI ? Casa.svgImpronta(Casa.impronta(CHI)) : '<svg viewBox="0 0 140 50"><g fill="#3a2a3a" opacity=".85"><ellipse cx="30" cy="30" rx="11" ry="8"/><circle cx="16" cy="18" r="4"/><circle cx="24" cy="12" r="4"/><circle cx="36" cy="12" r="4"/><circle cx="44" cy="18" r="4"/><circle cx="48" cy="28" r="3"/>' +
      '<ellipse cx="100" cy="24" rx="11" ry="8"/><circle cx="86" cy="12" r="4"/><circle cx="94" cy="6" r="4"/><circle cx="106" cy="6" r="4"/><circle cx="114" cy="12" r="4"/><circle cx="118" cy="22" r="3"/></g></svg>',
    visibile: function (m) { return m.flag("impronteVisibili"); } });

  /* il cartellino "RAMO INUTILE" sparisce appena il ramo comincia a ricomporsi; la targa ANIMALI si sposta per fare posto */
  atrio.elementi.forEach(function (e) {
    if (e.id === "t-inutile") e.visibile = function (m) { return !m.flag("duello-1"); };
    if (e.id === "t-animali") { e.x = 392; e.y = 300; }
  });

  /* l'Albero accetta le carte: con tutte e sei comincia il finale */
  var albero = atrio.hotspot.filter(function (h) { return h.id === "albero"; })[0];
  var conVecchio = albero.con || {};
  GRUPPI.forEach(function (g) {
    conVecchio["carta-" + g] = function (m) { return tutteLeCarte(m) ? duello(m) : "albero.carte.poche"; };
  });
  albero.con = conVecchio;
  var guardaVecchio = albero.guarda;
  albero.guarda = function (m) { return m.flag("ramoRicomposto") ? "albero.guarda.dopo" : guardaVecchio(m); };

  atrio.entrata = async function (m) {
    if (tutteLeCarte(m) && !m.flag("finaleFatto")) {
      await m.pensa("fin.ritorno");
      await m.cammina(360, 760);
      await duello(m);
    }
  };

  var aiutiAtrio = C.aiutiStanze.atrio;
  C.aiutiStanze.atrio = function (m) {
    if (m.flag("finaleFatto")) return { id: "f-fine", chi: C.chi(m), chiavi: ["aiuto7.fine"] };
    if (m.flag("portaAperta") && !tutteLeCarte(m)) return { id: "f-carte", chi: C.chi(m), chiavi: ["aiuto7.c1", "aiuto7.c2"] };
    if (tutteLeCarte(m)) return { id: "f-duello", chi: C.chi(m), chiavi: ["aiuto7.d1", "aiuto7.d2"] };
    return aiutiAtrio(m);
  };
})();
