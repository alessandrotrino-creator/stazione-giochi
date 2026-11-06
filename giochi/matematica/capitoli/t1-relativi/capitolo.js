/* =====================================================================
   MATEMATICA · TERZE · Capitolo 1: «Sotto zero» (Unità 1: i numeri relativi)
   Parte comune: personaggi, oggetti, aiuti e gli strumenti per i numeri con segno
   (numeri diversi a ogni partita, errori tipici riconosciuti e spiegati).
   Le stanze sono in stanze/*.js, i testi in testi/<lingua>.js. Piano: CAPITOLI.md.
   ===================================================================== */
var Rel3 = {
  aiutiStanze: {},

  /* un numero relativo scritto come a scuola: −7, 0, +5 (segno meno tipografico) */
  scrivi: function (n) {
    if (n === 0) return "0";
    return (n < 0 ? "−" : "+") + String(Math.abs(n)).replace(".", ",");
  },
  mescola: function (a) {
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  },
  a_caso: function (min, max) { return min + Math.floor(Math.random() * (max - min + 1)); },

  /* risposta da scrivere con il tastierino, finché non è giusta; "spiega" riceve il numero scritto.
     Restituisce true se è giusta, false se si è premuto «Annulla» (solo con opz.annullabile). */
  finoAlGiusto: async function (m, titolo, param, opz, giusta, spiega) {
    for (;;) {
      var testo = await m.tastierino(titolo, param, opz);
      if (testo === null) return false;
      var n = m.numero(testo);
      if (n === giusta) { m.suono("prendi"); return true; }
      m.suono("errore");
      await spiega(n, testo);
    }
  },

  /* durante una domanda il pulsante Aiuto dà questi aiuti a gradini (l'ultimo è la soluzione); poi si tolgono.
     Ogni aiuto chiesto è contato e finisce nel riepilogo e nel codice di fine capitolo. */
  conAiuto: async function (m, id, chiavi, param, fn) {
    m.aiutoQui({ id: id, chi: "penna", chiavi: chiavi, param: param });
    try { return await fn(); } finally { m.aiutoQui(null); }
  },

  /* ---------- IL TRENO COME BASE: le epoche raggiungibili con il selettore ---------- */
  METE: [
    { id: "cina", anno: 263, stanza: "cina", arrivo: [300, 830, 1, "profilo"] },
    { id: "india", anno: 628, stanza: "india", arrivo: [240, 850, 1, "profilo"] },
    { id: "lione", anno: 1484, stanza: "lione", arrivo: [200, 850, 1, "profilo"] },
    { id: "delft", anno: 1676, stanza: "delft", arrivo: [240, 850, 1, "profilo"] },
    { id: "stazione", anno: new Date().getFullYear(), stanza: "finale", arrivo: [1120, 840, -1, "profilo"] }
  ],
  sblocca: async function (m, id) {
    var l = (m.stato.flag.mete || []).slice();
    if (l.indexOf(id) >= 0) return;
    l.push(id); m.flag("mete", l);
    m.suono("magia");
    await m.dice("penna", "t1.meta.nuova", { meta: Lingue.semplice("t1.meta." + id) });
  },
  /* dal selettore del vagone: scegliere un'epoca già sbloccata e scrivere il salto nel tempo, con il segno */
  viaggio: async function (m) {
    var qui = m.stato.flag.trenoAnno || new Date().getFullYear(), sbloccate = m.stato.flag.mete || [];
    var opz = Rel3.METE.filter(function (x) { return sbloccate.indexOf(x.id) >= 0; }).map(function (x) {
      return x.anno === qui ? { testo: "t1.viaggio.scendi", valore: x.id, param: { meta: Lingue.semplice("t1.meta." + x.id) } }
        : { testo: "t1.viaggio.vai", valore: x.id, param: { meta: Lingue.semplice("t1.meta." + x.id), anno: String(x.anno) } };
    });
    opz.push({ testo: "t1.viaggio.resta", valore: "resta" });
    var scelta = await m.scegli(opz, "t1.viaggio.titolo", { qui: String(qui) });
    if (scelta === "resta") return;
    var meta = Rel3.METE.filter(function (x) { return x.id === scelta; })[0];
    if (!Motore._haStanza(meta.stanza)) { await m.dice("penna", "t1.viaggio.costruzione", { meta: Lingue.semplice("t1.meta." + meta.id) }); return; }
    if (meta.anno !== qui) {
      var giusta = meta.anno - qui, p = { oggi: String(qui), meta: String(meta.anno) };
      m.aiutoQui({ id: "h-salto-" + meta.id + qui, chi: "penna", chiavi: ["t1.h.salto.1", "t1.h.salto.2", "t1.h.salto.3"], param: { oggi: p.oggi, meta: p.meta, g: Rel3.scrivi(giusta) } });
      var ok = await Rel3.finoAlGiusto(m, "t1.sel.domanda", p, { segno: true, max: 5, promemoria: "t1.sel.promemoria", annullabile: true }, giusta, async function (n) {
        if (n === -giusta) { m.errore("t1-viaggio-segno"); await m.dice("penna", "t1.viaggio.err.segno", { x: Rel3.scrivi(n), anno: String(qui + n) }); }
        else if (Math.abs(n) === qui + meta.anno) { m.errore("t1-viaggio-somma"); await m.dice("penna", "t1.sel.err.somma", p); }
        else { m.errore("t1-viaggio-calcolo"); await m.dice("penna", "t1.viaggio.err.altro", { x: Rel3.scrivi(n), anno: String(qui + n), oggi: p.oggi, meta: p.meta }); }
      });
      m.aiutoQui(null);
      if (!ok) return;
      m.flag("trenoAnno", meta.anno);
      m.flag("salto", Rel3.scrivi(giusta));
      m.suono("magia");
      await m.dice("penna", "t1.viaggio.ok", { x: Rel3.scrivi(giusta), meta: Lingue.semplice("t1.meta." + meta.id) });
    }
    await m.vaiStanza(meta.stanza, meta.arrivo);
  },
  /* dalla porta del vagone, in ogni epoca: si risale sul treno */
  sali: async function (m) {
    await m.pensa("t1.vagone.sali");
    await m.vaiStanza("treno", [1180, 800, 1, "profilo"]);
  },

  inizio: async function (m) {
    m.flag("temp", -Rel3.a_caso(3, 9));                     // la temperatura sotto zero cambia a ogni partita
    m.flag("parolonaAlFinestrino", true);
    await m.cartello("t1.titolo", "t1.sottotitolo", 3400);
    await m.dice("narratore", "t1.intro.1");
    await m.pensa("t1.intro.2");
    await m.dice("parolona", "t1.intro.3");
    await m.dice("parolona", "t1.intro.4");
    m.suono("magia");
    m.effetto("lampo-meno", 1060, 330, 1200);
    m.flag("menoRubato", true);
    await m.dice("parolona", "t1.intro.5");
    m.flag("parolonaAlFinestrino", false);
    m.flag("cartaSottoPorta", true);
    await m.dice("narratore", "t1.intro.6");
    await m.pensa("t1.intro.7", { t: String(Math.abs(m.stato.flag.temp)) });
  },

  aiuti: function (m) {
    var f = Rel3.aiutiStanze[m.stato.stanza];
    return f ? f(m) : null;
  }
};

/* piccoli stili propri del capitolo: Penna che fluttua e parla, il lampo del meno rubato */
(function () {
  var s = document.createElement("style");
  s.textContent =
    ".elemento.penna-el svg { animation: galleggia 3s ease-in-out infinite; }" +
    ".elemento.penna-el.dorme svg { animation: none; transform: rotate(-12deg); filter: brightness(.8); }" +
    ".elemento.penna-el.parla svg { animation: penna-parla .35s ease-in-out infinite alternate; }" +
    "@keyframes penna-parla { from { transform: rotate(-4deg) translateY(0); } to { transform: rotate(4deg) translateY(-6px); } }" +
    ".effetto.lampo-meno { width: 260px; height: 260px; margin: -130px 0 0 -130px; border-radius: 50%; background: radial-gradient(circle, #e8b8ff 0%, rgba(160,80,200,.5) 40%, transparent 70%); animation: lampo-meno 1.2s ease-out forwards; pointer-events: none; }" +
    "@keyframes lampo-meno { 0% { transform: scale(.2); opacity: 0; } 30% { opacity: 1; } 100% { transform: scale(2.4); opacity: 0; } }" +
    ".elemento.valigia-cartellino { padding: 2px 10px; border-radius: 8px; background: #f6e7b8; border: 3px solid #1d1428; color: #1d1428; font-weight: 800; font-size: 26px; transform: translateX(-50%); white-space: nowrap; }" +
    ".elemento.display-epoche { width: 60px; height: 44px; display: grid; place-items: center; color: #9fffb0; font-weight: 800; font-size: 15px; text-align: center; line-height: 1; }" +
    ".elemento.termometro-lettura { padding: 2px 8px; border-radius: 8px; background: #fffdf4; border: 3px solid #1d1428; color: #1d1428; font-weight: 800; font-size: 22px; transform: translateX(-50%); white-space: nowrap; }" +
    ".pn-valigie { display: flex; flex-wrap: wrap; gap: 16px; justify-content: center; margin: 10px 0 6px; direction: ltr; }" +
    ".pn-valigia { font-family: inherit; cursor: pointer; width: 150px; padding: 16px 0 12px; border-radius: 16px; border: 4px solid #1d1428; box-shadow: 0 6px 0 #1d1428; font-size: 40px; font-weight: 800; color: #1d1428; }" +
    ".pn-valigia.usata { visibility: hidden; }" +
    ".pn-retta { display: flex; gap: 10px; justify-content: center; align-items: center; min-height: 70px; margin: 14px 0; padding: 10px; border-radius: 12px; background: #2a2448; direction: ltr; }" +
    ".pn-retta span { padding: 6px 16px; border-radius: 10px; background: #f6e7b8; color: #1d1428; font-weight: 800; font-size: 30px; }" +
    ".pn-retta .freccia { background: none; color: #f3c45a; font-size: 34px; }";
  document.head.appendChild(s);
})();

Motore.capitolo({
  id: "t3cap01",
  gioco: "matematica",
  versione: 1,
  protagonista: "zara",
  stanzaIniziale: "treno",

  personaggi: {
    zara: { nome: "nome.zara", colore: "#ff9a7a", voce: { altezza: 260, timbro: "triangle", passo: 0.07, volume: 0.05 } },
    penna: { nome: "nome.penna", colore: "#e8f0ff", voce: { altezza: 520, timbro: "sine", passo: 0.05, volume: 0.04 } },
    parolona: { nome: "nome.parolona", colore: "#d89aff", voce: { altezza: 190, timbro: "sawtooth", passo: 0.11, volume: 0.025 } },
    narratore: { nome: "nome.narratore", colore: "#c8c4dc" }
  },

  oggetti: {
    termometro: { icona: "ogg-termometro", nome: "ogg.termometro", descrizione: "ogg.termometro.d", suAltro: "termometro.altro" },
    biglietto8: { icona: "ogg-biglietto8", nome: "ogg.biglietto8", descrizione: "ogg.biglietto8.d", suAltro: "biglietto8.altro" },
    carta1: { icona: "ogg-cartaparola", nome: "ogg.carta1", descrizione: "ogg.carta1.d", loSapevi: "ogg.carta1.ls", suAltro: "carta.altro" }
  },

  figurine: {},

  inizio: Rel3.inizio,
  aiuti: Rel3.aiuti
});
