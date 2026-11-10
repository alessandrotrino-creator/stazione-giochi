/* =====================================================================
   MATEMATICA · TERZE · Capitolo 2: «Il furto dei simboli» (Unità 2: il linguaggio dell'algebra)
   Parte comune: personaggi, oggetti, aiuti, il treno del Binario 8 come base
   (il selettore delle epoche vuole il VALORE di un'espressione con le lettere,
   diversa a ogni partita), le pagine del diario di Madama Parolona.
   Le stanze sono in stanze/*.js, i testi in testi/<lingua>.js. Piano: CAPITOLI.md.
   ===================================================================== */
var Alg3 = {
  aiutiStanze: {},

  mescola: function (a) {
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  },
  a_caso: function (min, max) { return min + Math.floor(Math.random() * (max - min + 1)); },
  /* un simbolo di Madama Parolona, da mettere dentro i pannelli */
  simbolo: function (nome, alto) {
    var vb = { stella: "0 0 40 40", goccia: "0 0 32 40", ricciolo: "0 0 44 36", fiocco: "0 0 40 40", corona: "0 0 40 32" }[nome];
    return '<svg class="mp-sim" viewBox="' + vb + '" style="height:' + (alto || 1.2) + 'em"><use href="#mp-' + nome + '"/></svg>';
  },

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

  /* ---------- IL TRENO COME BASE ---------- */
  METE: [
    { id: "alessandria", anno: 250, stanza: "alessandria", arrivo: [260, 850, 1, "profilo"] },
    { id: "baghdad", anno: 830, stanza: "baghdad", arrivo: [260, 850, 1, "profilo"] },
    { id: "londra", anno: 1557, stanza: "londra", arrivo: [260, 850, 1, "profilo"] },
    { id: "tours", anno: 1591, stanza: "tours", arrivo: [260, 850, 1, "profilo"] },
    { id: "stazione", anno: new Date().getFullYear(), stanza: "finale", arrivo: [1120, 840, -1, "profilo"] }
  ],
  sblocca: async function (m, id) {
    var l = (m.stato.flag.mete || []).slice();
    if (l.indexOf(id) >= 0) return;
    l.push(id); m.flag("mete", l);
    m.suono("magia");
    await m.dice("penna", "t2.meta.nuova", { meta: Lingue.semplice("t2.meta." + id) });
  },

  /* l'anno scritto come espressione «a·x + b» (o «a·x − b») con il valore di x: sempre l'anno giusto,
     ma coefficienti diversi a ogni viaggio */
  espressione: function (anno) {
    var A = [2, 3, 4, 5, 6, 8, 10, 20];
    for (;;) {
      var a = A[Alg3.a_caso(0, A.length - 1)], b = Alg3.a_caso(3, 60), piu = Math.random() < 0.6;
      var resto = piu ? anno - b : anno + b;
      if (resto > 0 && resto % a === 0 && resto / a > 1) return { a: a, b: b, piu: piu, x: resto / a };
    }
  },
  scriviEspr: function (e) { return e.a + "·x " + (e.piu ? "+ " : "− ") + e.b; },

  /* il selettore delle epoche: si sceglie la meta, poi si calcola il valore dell'espressione */
  viaggio: async function (m) {
    var qui = m.stato.flag.trenoAnno || new Date().getFullYear(), sbloccate = m.stato.flag.mete || [];
    var opz = Alg3.METE.filter(function (x) { return sbloccate.indexOf(x.id) >= 0; }).map(function (x) {
      return x.anno === qui ? { testo: "t2.viaggio.scendi", valore: x.id, param: { meta: Lingue.semplice("t2.meta." + x.id) } }
        : { testo: "t2.viaggio.vai", valore: x.id, param: { meta: Lingue.semplice("t2.meta." + x.id) } };
    });
    opz.push({ testo: "t2.viaggio.resta", valore: "resta" });
    var scelta = await m.scegli(opz, "t2.viaggio.titolo");
    if (scelta === "resta") return;
    var meta = Alg3.METE.filter(function (x) { return x.id === scelta; })[0];
    if (!Motore._haStanza(meta.stanza)) { await m.dice("penna", "t2.viaggio.costruzione", { meta: Lingue.semplice("t2.meta." + meta.id) }); return; }
    if (meta.anno !== qui) {
      /* per un ritorno il selettore ricorda l'anno già calcolato: si risparmia tempo */
      var viste = m.stato.flag.meteViste || [];
      if (viste.indexOf(meta.id) < 0) {
        var ok = await Alg3.calcolaAnno(m, meta);
        if (!ok) return;
        m.flag("meteViste", viste.concat([meta.id]));
      }
      m.flag("trenoAnno", meta.anno);
      m.suono("magia");
      await m.dice("penna", viste.indexOf(meta.id) < 0 ? "t2.viaggio.ok" : "t2.viaggio.ritorno", { anno: String(meta.anno), meta: Lingue.semplice("t2.meta." + meta.id) });
    }
    await m.vaiStanza(meta.stanza, meta.arrivo);
  },
  calcolaAnno: async function (m, meta) {
    var e = Alg3.espressione(meta.anno), giusta = meta.anno;
    var p = { espr: Alg3.scriviEspr(e), x: String(e.x), a: String(e.a), b: String(e.b), meta: Lingue.semplice("t2.meta." + meta.id),
      prodotto: String(e.a * e.x), segno: e.piu ? "+" : "−", g: String(giusta) };
    var attaccato = Number(String(e.a) + String(e.x)) + (e.piu ? e.b : -e.b);
    var sommati = e.a + e.x + (e.piu ? e.b : -e.b);
    var parentesi = e.a * (e.x + (e.piu ? e.b : -e.b));
    m.aiutoQui({ id: "h-anno-" + meta.id, chi: "penna", chiavi: ["t2.h.anno.1", "t2.h.anno.2", "t2.h.anno.3"], param: p });
    var ok = await Alg3.finoAlGiusto(m, "t2.sel.domanda", p, { max: 4, promemoria: "t2.sel.promemoria", annullabile: true }, giusta, async function (n) {
      if (n === attaccato) { m.errore("t2-valore-attaccato"); await m.dice("penna", "t2.sel.err.attaccato", p); }
      else if (n === sommati) { m.errore("t2-valore-somma"); await m.dice("penna", "t2.sel.err.somma", p); }
      else if (n === parentesi) { m.errore("t2-valore-ordine"); await m.dice("penna", "t2.sel.err.ordine", p); }
      else { m.errore("t2-valore-calcolo"); await m.dice("penna", "t2.sel.err.altro", { n: String(n), espr: p.espr, x: p.x }); }
    });
    m.aiutoQui(null);
    return ok;
  },
  /* dalla porta del vagone, in ogni epoca: si risale sul treno */
  sali: async function (m) {
    await m.pensa("t2.vagone.sali");
    await m.vaiStanza("treno", [1180, 800, 1, "profilo"]);
  },

  inizio: async function (m) {
    m.flag("parolonaAlFinestrino", true);
    await m.cartello("t2.titolo", "t2.sottotitolo", 3400);
    await m.dice("narratore", "t2.intro.1");
    await m.pensa("t2.intro.2");
    await m.dice("parolona", "t2.intro.3");
    await m.dice("parolona", "t2.intro.5");
    await m.dice("parolona", "t2.intro.6");
    m.suono("magia");
    m.effetto("lampo-lettere", 1060, 330, 1200);
    m.flag("lettereRubate", true);
    m.flag("parolonaAlFinestrino", false);
    m.flag("paginaATerra", true);
    await m.dice("narratore", "t2.intro.7");
    await m.pensa("t2.intro.8");
  },

  aiuti: function (m) {
    var f = Alg3.aiutiStanze[m.stato.stanza];
    return f ? f(m) : null;
  }
};

/* piccoli stili propri del capitolo */
(function () {
  var s = document.createElement("style");
  s.textContent =
    ".elemento.penna-el svg { animation: galleggia 3s ease-in-out infinite; }" +
    ".elemento.penna-el.secca svg { animation: none; transform: rotate(-24deg) translateY(10px); filter: grayscale(.85) brightness(.75); }" +
    ".elemento.penna-el.parla svg { animation: penna-parla .35s ease-in-out infinite alternate; }" +
    "@keyframes penna-parla { from { transform: rotate(-4deg) translateY(0); } to { transform: rotate(4deg) translateY(-6px); } }" +
    ".effetto.lampo-lettere { width: 300px; height: 300px; margin: -150px 0 0 -150px; border-radius: 50%; background: radial-gradient(circle, #ffe0a0 0%, rgba(200,120,220,.5) 40%, transparent 70%); animation: lampo-lettere 1.2s ease-out forwards; pointer-events: none; }" +
    "@keyframes lampo-lettere { 0% { transform: scale(.2) rotate(0); opacity: 0; } 30% { opacity: 1; } 100% { transform: scale(2.4) rotate(90deg); opacity: 0; } }" +
    ".effetto.vapore-te { width: 120px; height: 160px; margin: -150px 0 0 -60px; background: radial-gradient(ellipse at 50% 80%, rgba(255,255,255,.7), transparent 60%); animation: vapore-te 1.6s ease-out forwards; pointer-events: none; }" +
    "@keyframes vapore-te { from { transform: translateY(20px) scale(.6); opacity: 0; } 40% { opacity: 1; } to { transform: translateY(-60px) scale(1.4); opacity: 0; } }" +
    ".elemento.display-epoche { width: 60px; height: 44px; display: grid; place-items: center; color: #9fffb0; font-weight: 800; font-size: 15px; text-align: center; line-height: 1; }" +
    ".elemento.cartello-frase { padding: 1px 6px; border-radius: 5px; background: #f6e7b8; border: 2px solid #1d1428; color: #1d1428; font-weight: 700; font-size: 11px; transform: translateX(-50%); white-space: nowrap; }" +
    ".mp-sim { vertical-align: middle; display: inline-block; }" +
    /* il pannello dei cartellini */
    ".pn-trad { display: grid; grid-template-columns: 1.35fr 1fr; gap: 26px; align-items: start; direction: ltr; }" +
    ".pn-frasi, .pn-cartellini { display: flex; flex-direction: column; gap: 12px; }" +
    ".pn-cartellini { flex-direction: row; flex-wrap: wrap; justify-content: center; }" +
    ".pn-frase { font-family: inherit; cursor: pointer; text-align: start; padding: 12px 16px; border-radius: 12px; border: 3px solid #1d1428; background: #b8862e; color: #fff8e0; font-size: 22px; font-weight: 700; box-shadow: 0 5px 0 #1d1428; display: flex; justify-content: space-between; gap: 14px; align-items: center; }" +
    ".pn-frase.scelta { outline: 5px solid #9fffb0; }" +
    ".pn-frase.fatta { background: #3a6a4a; cursor: default; }" +
    ".pn-frase .incollato { flex: none; padding: 2px 10px; border-radius: 8px; background: #f6e7b8; color: #1d1428; font-size: 24px; font-weight: 800; }" +
    ".pn-cartellino { font-family: inherit; cursor: pointer; min-width: 120px; padding: 12px 14px; border-radius: 10px; border: 3px solid #1d1428; background: #f6e7b8; color: #1d1428; font-size: 28px; font-weight: 800; box-shadow: 0 5px 0 #1d1428; transform: rotate(var(--r, 0deg)); }" +
    ".pn-cartellino.usato { visibility: hidden; }" +
    ".pn-guida { margin: 0 0 14px; font-size: 20px; opacity: .9; }" +
    /* la pagina del diario */
    ".pn-diario { margin: 6px auto 14px; max-width: 760px; padding: 22px 30px; border-radius: 6px; background: linear-gradient(#fff6e0, #ead8b0); color: #3a2a4a; box-shadow: 0 8px 0 rgba(0,0,0,.35); transform: rotate(-1deg); font-size: 26px; line-height: 1.5; direction: ltr; }" +
    ".pn-diario .riga { display: flex; align-items: center; justify-content: center; gap: 14px; font-size: 38px; font-weight: 800; margin: 10px 0; }" +
    ".pn-diario .mele { letter-spacing: -6px; color: #c8402f; }" +
    ".pn-diario .firma { text-align: end; font-style: italic; font-size: 22px; opacity: .8; }";
  document.head.appendChild(s);
})();

Motore.capitolo({
  id: "t3cap02",
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
    thermos: { icona: "ogg-thermos", nome: "ogg.thermos", descrizione: "ogg.thermos.d", suAltro: "thermos.altro" },
    pagina1: { icona: "ogg-diario", nome: "ogg.pagina1", descrizione: "ogg.pagina1.d", loSapevi: "ogg.pagina1.ls", suAltro: "pagina.altro" }
  },

  figurine: {},

  inizio: Alg3.inizio,
  aiuti: Alg3.aiuti
});
