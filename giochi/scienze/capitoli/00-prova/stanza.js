/* =====================================================================
   Gioco di Scienze · STANZA DI PROVA (Fase 2b)
   Una sola stanza per provare il motore: camminare, guardare, prendere,
   combinare, usare, dialogo a scelta, bivio di classe, due scenette,
   aiuti a gradini, quaderno, cambio lingua.
   Tutti i testi stanno nella cartella testi/ (un file per lingua).
   ===================================================================== */
(function () {

  function scintille(m, x, y) {
    var e = m.effetto("scintille", x, y, 1200);
    for (var i = 0; i < 16; i++) {
      var s = document.createElement("i"), a = i / 16 * Math.PI * 2;
      s.style.setProperty("--dx", Math.cos(a) * (70 + Math.random() * 50) + "px");
      s.style.setProperty("--dy", Math.sin(a) * (50 + Math.random() * 40) + "px");
      e.appendChild(s);
    }
  }
  function svegli(m) { return m.flag("gambertoSveglio"); }

  /* scenetta 1: la lanterna sveglia Gamberto */
  async function svegliaGamberto(m) {
    if (svegli(m)) return "acquario.lanterna.dopo";
    await m.pensa("sc1.n1");
    var luce = m.effetto("luce-acquario", 1440, 380);
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
    luce.classList.add("spegni");
    setTimeout(function () { luce.remove(); }, 900);
    m.annota("q.gamberto");
  }

  /* dialogo a scelta con Gamberto */
  async function parlaConGamberto(m) {
    if (!svegli(m)) return "acquario.parla.dorme";
    for (;;) {
      var v = await m.scegli([
        { testo: "dlg.etichette", valore: "etichette" },
        { testo: "dlg.conchiglia", valore: "conchiglia" },
        { testo: "dlg.come", valore: "come" },
        { testo: "dlg.ciao", valore: "ciao" }
      ]);
      await m.pensa("dlg." + v);
      if (v === "etichette") { await m.dice("gamberto", "dlg.etichette.r1"); await m.dice("gamberto", "dlg.etichette.r2"); m.annota("q.etichetti"); }
      if (v === "conchiglia") { await m.dice("gamberto", "dlg.conchiglia.r1"); await m.dice("gamberto", "dlg.conchiglia.r2"); }
      if (v === "come") { await m.dice("gamberto", "dlg.come.r1"); await m.dice("gamberto", "dlg.come.r2"); }
      if (v === "ciao") { await m.dice("gamberto", "dlg.ciao.r"); return; }
    }
  }

  /* bivio di classe: cosa scriviamo sul cartellino? */
  async function scriviCartellino(m) {
    await m.pensa("comb.domanda");
    for (;;) {
      var v = await m.scegli([
        { testo: "comb.pietra", valore: "pietra" },
        { testo: "comb.vegetale", valore: "vegetale" },
        { testo: "comb.animale", valore: "animale" }
      ], "comb.bivio");
      if (v === "animale") {
        m.togli("cartellino"); m.togli("matita"); m.prendi("etichetta");
        await m.pensa("comb.giusto");
        m.annota("q.corallo");
        return;
      }
      m.suono("errore");
      m.errore("corallo-" + v);          // conteggio anonimo, per il riepilogo del docente
      if (svegli(m)) await m.dice("gamberto", "comb." + v + ".g");
      else await m.pensa("comb." + v + ".n");
    }
  }

  /* scenetta 2: l'etichetta giusta al suo posto, Darwin si sveglia */
  async function attaccaEtichetta(m) {
    await m.pensa("teca.etichetta.n1");
    var rosa = m.elemento("etichetta-rosa");
    if (rosa) rosa.classList.add("cade");
    m.suono("pagina");
    await m.aspetta(1000);
    m.togli("etichetta");
    m.flag("etichettaCorretta", true);
    var giusta = m.elemento("etichetta-giusta");
    if (giusta) giusta.classList.add("compare");
    scintille(m, 775, 560);
    m.suono("magia");
    await m.aspetta(900);
    if (m.ha("lanterna")) {
      m.effetto("luce-ritratto", 545, 262);
      await m.aspetta(1000);
      await m.dice("darwin", "darwin.1");
      await m.pensa("teca.etichetta.n2");
      if (svegli(m)) await m.dice("gamberto", "gamberto.finale");
      await m.dice("darwin", "darwin.2");
      m.annota("q.darwin");
    } else {
      await m.pensa("teca.etichetta.n2b");
    }
    m.flag("finito", true);
    m.fine("fine.titolo", "fine.testo");
  }

  Motore.capitolo({
    id: "prova",
    gioco: "scienze",
    versione: 1,
    protagonista: "nina",
    stanzaIniziale: "sala",

    personaggi: {
      nina: { nome: "nome.nina", colore: "#7fd8ff", voce: { altezza: 430, timbro: "triangle", passo: 0.075, volume: 0.05 } },
      gamberto: { nome: "nome.gamberto", colore: "#ff9a7a", voce: { altezza: 280, timbro: "square", passo: 0.06, volume: 0.03 } },
      darwin: { nome: "nome.darwin", colore: "#ffd36b", voce: { altezza: 140, timbro: "sawtooth", passo: 0.11, volume: 0.025 } }
    },

    oggetti: {
      lanterna: { icona: "ogg-lanterna", nome: "ogg.lanterna", descrizione: "ogg.lanterna.d", suAltro: "lanterna.altro",
        conOggetto: { cartellino: "comb.cartellinoLanterna" } },
      cartellino: { icona: "ogg-cartellino", nome: "ogg.cartellino", descrizione: "ogg.cartellino.d", suAltro: "cartellino.altro" },
      matita: { icona: "ogg-matita", nome: "ogg.matita", descrizione: "ogg.matita.d", suAltro: "matita.altro" },
      etichetta: { icona: "ogg-etichetta", nome: "ogg.etichetta", descrizione: "ogg.etichetta.d", loSapevi: "ogg.etichetta.ls", suAltro: "etichetta.altro" }
    },

    combinazioni: [
      { a: "cartellino", b: "matita", fai: scriviCartellino }
    ],

    inizio: async function (m) {
      await m.aspetta(600);
      await m.pensa("intro.1");
      await m.pensa("intro.2");
      await m.pensa("intro.3");
    },

    /* aiuti a gradini: chi parla e cosa dice dipende da dove si è arrivati */
    aiuti: function (m) {
      var chi = svegli(m) ? "gamberto" : "nina";
      if (m.flag("etichettaCorretta")) return { id: "f", chi: chi, chiavi: ["aiuto.f1"] };
      if (m.ha("etichetta")) return { id: "e", chi: chi, chiavi: ["aiuto.e1", "aiuto.e2"] };
      if (m.ha("cartellino") && m.ha("matita")) return { id: "d", chi: chi, chiavi: ["aiuto.d1", "aiuto.d2"] };
      if (!m.ha("lanterna")) return { id: "a", chi: "nina", chiavi: ["aiuto.a1", "aiuto.a2", "aiuto.a3"] };
      if (!svegli(m)) return { id: "b", chi: "nina", chiavi: ["aiuto.b1", "aiuto.b2"] };
      return { id: "c", chi: "gamberto", chiavi: ["aiuto.c1", "aiuto.c2", "aiuto.c3"] };
    },

    stanze: {
      sala: {
        sfondo: "sala-invertebrati",
        pavimento: { xMin: 120, xMax: 1480, yMin: 660, yMax: 860 },
        scala: { lontano: { y: 660, s: 0.8 }, vicino: { y: 860, s: 1 } },

        attori: [
          { id: "nina", simbolo: "nina", viste: { fronte: "nina", profilo: "nina-profilo", schiena: "nina-schiena" },
            vista: [-110, -600, 230, 615], piedi: [5, 0], altezza: 520, x: 430, y: 780, dir: 1, alone: true,
            aggiorna: function (a, m) {
              var ha = m.ha("lanterna");
              a.corpo.style.setProperty("--lanterna", ha ? 1 : 0);
              a.alone.style.opacity = ha ? 1 : 0;
            } },
          { id: "gamberto", simbolo: "gamberto", vista: [-80, -110, 170, 120], piedi: [0, 0], altezza: 85, x: 1452, y: 443, fisso: true }
        ],

        elementi: [
          { id: "lanterna-davanzale", x: 196, y: 402, larghezza: 70, altezza: 70, svg: Grafica.icona("ogg-lanterna"),
            visibile: function (m) { return !m.flag("lanternaPresa"); } },
          { id: "etichetta-farfalle", classe: "etichetta rosa", testo: "scena.etichettaFarfalle", x: 688, y: 284, rotazione: -4 },
          { id: "etichetta-rosa", classe: "etichetta rosa", testo: "scena.etichettaRosa", x: 696, y: 546, rotazione: -6,
            visibile: function (m) { return !m.flag("etichettaCorretta"); } },
          { id: "etichetta-giusta", classe: "etichetta bianca", testo: "scena.etichettaGiusta", x: 690, y: 548, rotazione: -3,
            visibile: function (m) { return m.flag("etichettaCorretta"); } },
          { id: "etichetta-argonauta", classe: "etichetta rosa", testo: "scena.etichettaArgonauta", x: 1018, y: 526, rotazione: 4 }
        ],

        /* punti interattivi: quelli più in basso nell'elenco stanno "sopra" */
        hotspot: [
          { id: "finestra", nome: "hs.finestra", forma: "M100 470 L100 210 Q200 80 300 210 L300 470 Z", arrivo: [300, 690],
            guarda: "finestra.guarda", usa: "finestra.usa", parla: "finestra.parla" },
          { id: "lanterna", nome: "hs.lanterna", forma: "M188 394 L274 394 L274 482 L188 482 Z", arrivo: [290, 690],
            presente: function (m) { return !m.flag("lanternaPresa"); },
            guarda: "lanterna.guarda", parla: "lanterna.parla",
            usa: function (m) { m.flag("lanternaPresa", true); m.prendi("lanterna"); m.annota("q.lanterna"); return "lanterna.usa"; } },
          { id: "ritratto", nome: "hs.ritratto", forma: "M438 128 L652 128 L652 392 L438 392 Z", arrivo: [545, 690],
            guarda: "ritratto.guarda", usa: "ritratto.usa", parla: "ritratto.parla", con: { lanterna: "ritratto.lanterna" } },
          { id: "farfalle", nome: "hs.farfalle", forma: "M680 168 L830 168 L830 278 L680 278 Z", arrivo: [755, 690],
            guarda: "farfalle.guarda", usa: "farfalle.usa", parla: "farfalle.parla", con: { matita: "farfalle.matita" } },
          { id: "barattoli", nome: "hs.barattoli", forma: "M880 140 L1105 140 L1105 262 L880 262 Z", arrivo: [990, 690],
            guarda: "barattoli.guarda", usa: "barattoli.usa", parla: "barattoli.parla", con: { lanterna: "barattoli.lanterna" } },
          { id: "teca", nome: "hs.teca", forma: "M690 284 L990 284 L990 604 L690 604 Z", arrivo: [840, 690],
            guarda: function (m) { return m.flag("etichettaCorretta") ? "teca.guarda.dopo" : "teca.guarda.prima"; },
            usa: function (m) {
              if (m.flag("cartellinoPreso")) return "teca.usa.vuoto";
              m.flag("cartellinoPreso", true); m.prendi("cartellino"); return "teca.usa.prendi";
            },
            parla: "teca.parla",
            con: { cartellino: "teca.cartellino", matita: "teca.matita", lanterna: "teca.lanterna", etichetta: attaccaEtichetta } },
          { id: "campana", nome: "hs.campana", forma: "M1040 300 L1180 300 L1180 604 L1040 604 Z", arrivo: [1110, 690],
            guarda: "campana.guarda", usa: "campana.usa", parla: "campana.parla",
            con: { etichetta: "campana.etichetta", lanterna: "campana.lanterna" } },
          { id: "calamaro", nome: "hs.calamaro", forma: "M1110 108 L1262 108 L1262 300 L1250 400 L1120 400 L1110 300 Z", arrivo: [1180, 690],
            guarda: "calamaro.guarda", usa: "calamaro.usa", parla: "calamaro.parla", con: { lanterna: "calamaro.lanterna" } },
          { id: "acquario", nome: "hs.acquario", forma: "M1286 280 L1576 280 L1576 604 L1286 604 Z", arrivo: [1400, 690], verso: 1,
            guarda: function (m) { return svegli(m) ? "acquario.guarda.sveglio" : "acquario.guarda.dorme"; },
            usa: "acquario.usa",
            parla: parlaConGamberto,
            con: {
              lanterna: svegliaGamberto,
              etichetta: function (m) { return svegli(m) ? m.dice("gamberto", "acquario.etichetta.g") : "acquario.etichetta.n"; },
              matita: function (m) { return svegli(m) ? m.dice("gamberto", "acquario.matita.g") : "matita.altro"; }
            } },
          { id: "felce", nome: "hs.felce", forma: "M-10 640 L210 640 L210 900 L-10 900 Z", arrivo: [230, 830], verso: -1,
            guarda: "felce.guarda", parla: "felce.parla",
            usa: function (m) {
              if (m.flag("matitaPresa")) return "felce.usa.ragno";
              m.flag("matitaPresa", true); m.prendi("matita"); return "felce.usa.prendi";
            } },
          { id: "transenna", nome: "hs.transenna", forma: "M1326 672 L1600 672 L1600 900 L1326 900 Z", arrivo: [1290, 830], verso: 1,
            guarda: "transenna.guarda", usa: "transenna.usa", parla: "transenna.parla" }
        ]
      }
    }
  });
})();
