/* =====================================================================
   Gioco di Scienze · CAPITOLO 1 · "La notte delle etichette" (gli animali invertebrati)
   Parte comune del capitolo: personaggi, oggetti, figurine "Chi era?", aiuti, inizio.
   Le stanze sono in file separati (stanze/*.js), i testi in testi/<lingua>.js.
   ===================================================================== */
var Cap1 = {
  svegli: function (m) { return m.flag("gambertoSveglio"); },
  /* chi dà gli aiuti: Gamberto se è con noi, altrimenti Nina pensa ad alta voce */
  chi: function (m) { return m.flag("gambertoSveglio") ? "gamberto" : "nina"; },
  scintille: function (m, x, y) {
    var e = m.effetto("scintille", x, y, 1200);
    for (var i = 0; i < 16; i++) {
      var s = document.createElement("i"), a = i / 16 * Math.PI * 2;
      s.style.setProperty("--dx", Math.cos(a) * (70 + Math.random() * 50) + "px");
      s.style.setProperty("--dy", Math.sin(a) * (50 + Math.random() * 40) + "px");
      e.appendChild(s);
    }
  },
  /* gli aiuti di ogni stanza si aggiungono qui: { stanza: function (m) { return {id, chi, chiavi} } } */
  aiutiStanze: {},
  /* Nina: stessa protagonista in tutte le stanze, cambia solo dove compare */
  nina: function (x, y, dir) {
    return { id: "nina", simbolo: "nina", viste: { fronte: "nina", profilo: "nina-profilo", schiena: "nina-schiena" },
      vista: [-110, -600, 230, 615], piedi: [5, 0], altezza: 520, x: x, y: y, dir: dir || 1, alone: true,
      aggiorna: function (a, m) {
        var ha = m.ha("lanterna") || m.ha("lanterna-lente");
        a.corpo.style.setProperty("--lanterna", ha ? 1 : 0);
        a.alone.style.opacity = ha ? 1 : 0;
      } };
  },
  /* una scelta ripetuta finché la classe non trova la risposta giusta; ogni errore ha la sua spiegazione */
  finoAlGiusto: async function (m, titolo, opzioni, spiega, errore) {
    for (;;) {
      var v = await m.scegli(opzioni.map(function (o) { return { testo: o[0], valore: o[1] }; }), titolo);
      if (v === "giusta") { m.suono("prendi"); return; }
      m.suono("errore");
      if (errore) m.errore(errore + "-" + v);
      await m.dice(Cap1.chi(m), spiega(v));
    }
  },
  /* carta caratteristica di un gruppo: va nello zaino e serve per il finale */
  carta: function (m, gruppo) {
    if (m.flag("carta-" + gruppo)) return;
    m.flag("carta-" + gruppo, true);
    m.prendi("carta-" + gruppo);
    m.annota("q1.carta." + gruppo);
  }
};

Motore.capitolo({
  id: "cap01",
  gioco: "scienze",
  versione: 1,
  protagonista: "nina",
  stanzaIniziale: "atrio",

  personaggi: {
    nina: { nome: "nome.nina", colore: "#7fd8ff", voce: { altezza: 430, timbro: "triangle", passo: 0.075, volume: 0.05 } },
    gamberto: { nome: "nome.gamberto", colore: "#ff9a7a", voce: { altezza: 280, timbro: "square", passo: 0.06, volume: 0.03 } },
    aristotele: { nome: "nome.aristotele", colore: "#e8d9a0", voce: { altezza: 120, timbro: "sawtooth", passo: 0.12, volume: 0.025 } },
    lamarck: { nome: "nome.lamarck", colore: "#9fd7ff", voce: { altezza: 170, timbro: "triangle", passo: 0.09, volume: 0.04 } },
    etichetti: { nome: "nome.etichetti", colore: "#ff5fa2", voce: { altezza: 220, timbro: "square", passo: 0.07, volume: 0.03 } },
    villepreux: { nome: "nome.villepreux", colore: "#a8e0f0", voce: { altezza: 330, timbro: "triangle", passo: 0.08, volume: 0.04 } },
    darwin: { nome: "nome.darwin", colore: "#ffd36b", voce: { altezza: 140, timbro: "sawtooth", passo: 0.11, volume: 0.025 } },
    merian: { nome: "nome.merian", colore: "#b8e890", voce: { altezza: 360, timbro: "triangle", passo: 0.08, volume: 0.04 } },
    aljahiz: { nome: "nome.aljahiz", colore: "#f0c890", voce: { altezza: 180, timbro: "triangle", passo: 0.1, volume: 0.04 } },
    turri: { nome: "nome.turri", colore: "#ffb0d0", voce: { altezza: 700, timbro: "sine", passo: 0.05, volume: 0.05 } },
    narratore: { nome: "nome.narratore", colore: "#c8c4dc" }
  },

  oggetti: {
    lanterna: { icona: "ogg-lanterna", nome: "ogg.lanterna", descrizione: "ogg.lanterna.d", suAltro: "lanterna.altro" },
    lente: { icona: "ogg-lente", nome: "ogg.lente", descrizione: "ogg.lente.d", suAltro: "lente.altro" },
    "lanterna-lente": { icona: "ogg-lanterna-lente", nome: "ogg.lanternaLente", descrizione: "ogg.lanternaLente.d", suAltro: "lanternaLente.altro" },
    gamberto: { icona: "ogg-gamberto", nome: "ogg.gamberto", descrizione: "ogg.gamberto.d",
      suAltro: function (m) { return m.dice("gamberto", "gamberto.altro"); } },
    stella: { icona: "ogg-stella", nome: "ogg.stella", descrizione: "ogg.stella.d", loSapevi: "ogg.stella.ls", suAltro: "esemplare.altro" },
    farfalla: { icona: "ogg-farfalla", nome: "ogg.farfalla", descrizione: "ogg.farfalla.d", loSapevi: "ogg.farfalla.ls", suAltro: "esemplare.altro" },    spugna: { icona: "ogg-spugna", nome: "ogg.spugna", descrizione: "ogg.spugna.d", loSapevi: "ogg.spugna.ls", suAltro: "esemplare.altro" },
    passero: { icona: "ogg-passero", nome: "ogg.passero", descrizione: "ogg.passero.d", suAltro: "esemplare.altro" },
    pesce: { icona: "ogg-pesce", nome: "ogg.pesce", descrizione: "ogg.pesce.d", suAltro: "esemplare.altro" },
    cartellini: { icona: "ogg-cartellini", nome: "ogg.cartellini", descrizione: "ogg.cartellini.d", suAltro: "cartellini.altro" },
    matita: { icona: "ogg-matita", nome: "ogg.matita", descrizione: "ogg.matita.d", suAltro: "matita.altro" },
    "chiave-serra": { icona: "ogg-chiave", nome: "ogg.chiaveSerra", descrizione: "ogg.chiaveSerra.d", suAltro: "chiave.altro" },
    "chiave-insetti": { icona: "ogg-chiave", nome: "ogg.chiaveInsetti", descrizione: "ogg.chiaveInsetti.d", suAltro: "chiave.altro" },
    "stella-viva": { icona: "stella-viva", nome: "ogg.stellaViva", descrizione: "ogg.stellaViva.d", loSapevi: "ogg.stellaViva.ls", suAltro: "stellaViva.altro" },
    /* le sei carte caratteristica (una per gruppo): servono per il finale */
    "carta-poriferi": { icona: "carta-poriferi", nome: "carta.poriferi", descrizione: "carta.poriferi.d", suAltro: "carta.altro" },
    "carta-cnidari": { icona: "carta-cnidari", nome: "carta.cnidari", descrizione: "carta.cnidari.d", suAltro: "carta.altro" },
    "carta-vermi": { icona: "carta-vermi", nome: "carta.vermi", descrizione: "carta.vermi.d", suAltro: "carta.altro" },
    "carta-molluschi": { icona: "carta-molluschi", nome: "carta.molluschi", descrizione: "carta.molluschi.d", suAltro: "carta.altro" },
    "carta-echinodermi": { icona: "carta-echinodermi", nome: "carta.echinodermi", descrizione: "carta.echinodermi.d", suAltro: "carta.altro" },
    "carta-artropodi": { icona: "carta-artropodi", nome: "carta.artropodi", descrizione: "carta.artropodi.d", suAltro: "carta.altro" }
  },

  combinazioni: [
    { a: "lanterna", b: "lente", fai: async function (m) {
      m.togli("lanterna"); m.togli("lente"); m.prendi("lanterna-lente");
      await m.pensa("comb.lanternaLente");
      m.annota("q1.lente");
    } }
  ],

  /* figurine "Chi era?": fatti verificati sulle fonti (vedi CAPITOLI.md) */
  figurine: {
    aristotele: { nome: "fig.aristotele.nome", anni: "fig.aristotele.anni", paese: "fig.aristotele.paese", testo: "fig.aristotele.testo", ritratto: RitrattiCap1.figurina("aristotele") },
    lamarck: { nome: "fig.lamarck.nome", anni: "fig.lamarck.anni", paese: "fig.lamarck.paese", testo: "fig.lamarck.testo", ritratto: RitrattiCap1.figurina("lamarck") },
    villepreux: { nome: "fig.villepreux.nome", anni: "fig.villepreux.anni", paese: "fig.villepreux.paese", testo: "fig.villepreux.testo", ritratto: RitrattiCap1.figurina("villepreux") },
    darwin: { nome: "fig.darwin.nome", anni: "fig.darwin.anni", paese: "fig.darwin.paese", testo: "fig.darwin.testo", ritratto: RitrattiCap1.figurina("darwin") },
    merian: { nome: "fig.merian.nome", anni: "fig.merian.anni", paese: "fig.merian.paese", testo: "fig.merian.testo", ritratto: RitrattiCap1.figurina("merian") },
    aljahiz: { nome: "fig.aljahiz.nome", anni: "fig.aljahiz.anni", paese: "fig.aljahiz.paese", testo: "fig.aljahiz.testo", ritratto: RitrattiCap1.figurina("aljahiz") }
  },

  inizio: async function (m) {
    await m.cartello("cap1.titolo", "cap1.sottotitolo", 3200);
    await m.pensa("cap1.intro.1");
    await m.pensa("cap1.intro.2");
    await m.pensa("cap1.intro.3");
  },

  aiuti: function (m) {
    var f = Cap1.aiutiStanze[m.stato.stanza];
    return f ? f(m) : null;
  },

  stanze: {}
});
