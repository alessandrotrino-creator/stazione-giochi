/* =====================================================================
   MATEMATICA · Capitolo 1: «La virgola rubata» (Unità 1: frazioni e numeri decimali)
   Parte comune: personaggi, oggetti, figurine, aiuti, e il "motore" delle frazioni
   (numeri diversi a ogni partita, risposte sbagliate costruite sugli errori tipici).
   Le stanze sono in stanze/*.js, i testi in testi/<lingua>.js.
   ===================================================================== */
var Mat1 = {
  aiutiStanze: {},

  /* ---------- numeri decimali scritti come a scuola: virgola, niente zeri inutili ---------- */
  /* valore esatto di n/d come [intero, cifre decimali] (d ha solo fattori 2 e 5) */
  decimale: function (n, d) {
    for (var k = 0; k <= 6; k++) {
      var p = Math.pow(10, k);
      if ((n * p) % d === 0) return Mat1.scrivi((n * p) / d, k);
    }
    return null;
  },
  /* q = numero intero, k = cifre dopo la virgola: scrivi(75, 2) = "0,75" */
  scrivi: function (q, k) {
    var s = String(q);
    if (k <= 0) return s + (k < 0 ? new Array(-k + 1).join("0") : "");
    while (s.length <= k) s = "0" + s;
    var t = s.slice(0, s.length - k) + "," + s.slice(s.length - k);
    return t.replace(/0+$/, "").replace(/,$/, "");
  },
  /* sposta la virgola di una posizione (verso destra se verso > 0): l'errore "dieci volte" */
  sposta: function (testo, verso) {
    var parti = testo.split(","), cifre = parti[0] + (parti[1] || ""), k = (parti[1] || "").length - verso;
    return Mat1.scrivi(parseInt(cifre, 10), k);
  },

  /* tre risposte sbagliate credibili, ognuna con il suo tipo di errore (serve per la spiegazione e per il riepilogo) */
  distrattori: function (n, d, giusta, decimale) {
    var c = [];
    c.push([Mat1.sposta(giusta, 1), "spostata"]);
    c.push([Mat1.sposta(giusta, -1), "spostata"]);
    c.push([n + "," + d, "incollata"]);
    if (!decimale) c.push(["0," + n + d, "dentro"]);
    if (!decimale && d > n) c.push([Mat1.scrivi(Math.round(d / n * 10), 1), "rovescio"]);
    // prima gli errori più "da classe", poi gli altri; niente doppioni e niente risposta giusta
    var ordine = decimale ? ["spostata", "spostata", "incollata"] : ["incollata", "dentro", "rovescio", "spostata"];
    var scelti = [], visti = {}; visti[giusta] = true;
    ordine.forEach(function (tipo) {
      for (var i = 0; i < c.length; i++) {
        if (c[i][1] === tipo && !visti[c[i][0]] && scelti.length < 3) { visti[c[i][0]] = true; scelti.push(c[i]); c.splice(i, 1); return; }
      }
    });
    for (var j = 0; j < c.length && scelti.length < 3; j++) if (!visti[c[j][0]]) { visti[c[j][0]] = true; scelti.push(c[j]); }
    return scelti;
  },
  mescola: function (a) {
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  },
  a_caso: function (l) { return l[Math.floor(Math.random() * l.length)]; },

  /* una scelta ripetuta finché non si trova la risposta giusta; ogni errore ha la sua spiegazione */
  finoAlGiusto: async function (m, titolo, param, opzioni, spiega, errore) {
    for (;;) {
      var v = await m.scegli(opzioni.map(function (o) { return { testo: "num.opzione", param: { x: o[0] }, valore: o[1] }; }), titolo, param);
      if (v === "giusta") { m.suono("prendi"); return; }
      m.suono("errore");
      if (errore) m.errore(errore + "-" + v);
      await spiega(v);
    }
  }
};

Motore.capitolo({
  id: "cap01",
  gioco: "matematica",
  versione: 1,
  protagonista: "leo",
  stanzaIniziale: "condominio",

  personaggi: {
    leo: { nome: "nome.leo", colore: "#ffcf5a", voce: { altezza: 200, timbro: "triangle", passo: 0.08, volume: 0.05 } },
    ottone: { nome: "nome.ottone", colore: "#e8c26a", voce: { altezza: 320, timbro: "square", passo: 0.05, volume: 0.025 } },
    nonna: { nome: "nome.nonna", colore: "#c8b4ff", voce: { altezza: 380, timbro: "sine", passo: 0.09, volume: 0.04 } },
    mercante: { nome: "nome.mercante", colore: "#ff9a7a", voce: { altezza: 160, timbro: "sawtooth", passo: 0.08, volume: 0.025 } },
    uqlidisi: { nome: "nome.uqlidisi", colore: "#7fd8c8", voce: { altezza: 140, timbro: "triangle", passo: 0.1, volume: 0.04 } },
    stevino: { nome: "nome.stevino", colore: "#c8d8ff", voce: { altezza: 150, timbro: "sawtooth", passo: 0.09, volume: 0.025 } },
    formaggiaia: { nome: "nome.formaggiaia", colore: "#ffb8a0", voce: { altezza: 360, timbro: "triangle", passo: 0.08, volume: 0.04 } },
    conte: { nome: "nome.conte", colore: "#ff6a5a", voce: { altezza: 240, timbro: "square", passo: 0.07, volume: 0.03 } },
    alkashi: { nome: "nome.alkashi", colore: "#b8c8ff", voce: { altezza: 170, timbro: "sawtooth", passo: 0.1, volume: 0.025 } },
    narratore: { nome: "nome.narratore", colore: "#c8c4dc" }
  },

  oggetti: {
    lettera: { icona: "ogg-lettera", nome: "ogg.lettera", descrizione: "ogg.lettera.d", suAltro: "lettera.altro" },
    foglio: { icona: "ogg-foglio", nome: "ogg.foglio", descrizione: "ogg.foglio.d", loSapevi: "ogg.foglio.ls", suAltro: "foglio.altro" }
  },

  /* figurine "Chi era?": fatti verificati sulle fonti (vedi CAPITOLI.md) */
  figurine: {
    uqlidisi: { nome: "fig.uqlidisi.nome", anni: "fig.uqlidisi.anni", paese: "fig.uqlidisi.paese", testo: "fig.uqlidisi.testo",
      ritratto: FiguraDamasco({ abito: "#2f7a8a", bordo: "#f3c77a", pelle: "#c8956a", barba: "#e8e2d4", berretto: "#f3e2b8" }) },
    stevino: { nome: "fig.stevino.nome", anni: "fig.stevino.anni", paese: "fig.stevino.paese", testo: "fig.stevino.testo",
      ritratto: FiguraStevino(true) },
    alkashi: { nome: "fig.alkashi.nome", anni: "fig.alkashi.anni", paese: "fig.alkashi.paese", testo: "fig.alkashi.testo",
      ritratto: FiguraDamasco({ abito: "#3a3a8a", bordo: "#e8b84a", pelle: "#c89a70", barba: "#4a3a30", berretto: "#e8e2d4" }) }
  },

  inizio: async function (m) {
    await m.cartello("mat1.titolo", "mat1.sottotitolo", 3200);
    await m.pensa("mat1.intro.1");
    await m.pensa("mat1.intro.2");
    await m.dice("ottone", "mat1.intro.3");
  },

  aiuti: function (m) {
    var f = Mat1.aiutiStanze[m.stato.stanza];
    return f ? f(m) : null;
  },

  stanze: {}
});
