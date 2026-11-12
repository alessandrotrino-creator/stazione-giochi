/* =====================================================================
   MATEMATICA · TERZE · Livello di geometria G1: «Il cerchio senza π»
   (Unità 1 di geometria: lunghezza della circonferenza e area del cerchio)
   Parte comune: personaggi, oggetti, aiuti, il treno del Binario 8 come base.
   Il selettore delle epoche è un QUADRANTE ROTONDO: per partire si scrive la lunghezza
   dell'arco che la lancetta percorre, con il VALORE ESATTO (tasto π del tastierino).
   I quattro spicchi della ruota di legno si recuperano uno per epoca.
   Regola della docente: valore ESATTO = con π (32π cm); valore APPROSSIMATO = con 3,14.
   Piano: CAPITOLI.md. Stanze in stanze/*.js, testi in testi/it*.js.
   ===================================================================== */
var Cer3 = {
  aiutiStanze: {},

  mescola: function (a) {
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  },
  a_caso: function (min, max) { return min + Math.floor(Math.random() * (max - min + 1)); },
  scegliUno: function (l) { return l[Math.floor(Math.random() * l.length)]; },
  /* numeri con la virgola, come in classe: 100.48 → "100,48" (al massimo due decimali) */
  v: function (n) { return String(Math.round(n * 100) / 100).replace(".", ","); },
  /* un multiplo di π scritto come in classe: 1 → "π", 32 → "32π" */
  kpi: function (k) { return (k === 1 ? "" : Cer3.v(k)) + "π"; },
  /* frazione ridotta, in colonna: (90, 360) → "{fr:1/4}" */
  frazione: function (n, d) {
    var a = n, b = d; while (b) { var t = a % b; a = b; b = t; }
    return d / a === 1 ? String(n / a) : "{fr:" + n / a + "/" + d / a + "}";
  },
  uguale: function (a, b) { return a !== null && b !== null && Math.abs(a - b) < 0.001; },

  /* ---------- la risposta con π, da scrivere finché non è giusta ----------
     d = { titolo, param, k: numero davanti a π (valore esatto), esatto: true se si chiede il valore esatto,
           trappole: [{ k: numero, err: "codice", chiave: "testo" }], promemoria, annullabile }
     Riconosce da sola: valore approssimato al posto dell'esatto e viceversa; π dimenticato;
     3,14 scritto insieme a π. */
  rispostaPi: async function (m, d) {
    var giustaApprox = Math.round(d.k * 3.14 * 100) / 100;
    for (;;) {
      var testo = await m.tastierino(d.titolo, d.param, { pi: true, virgola: true, max: 7, promemoria: d.promemoria, annullabile: d.annullabile, calcolatrice: !d.esatto || !!d.calcolatrice });
      if (testo === null) return false;
      var conPi = m.numeroPi(testo), senza = conPi === null ? m.numero(testo) : null;
      var ok = d.esatto ? Cer3.uguale(conPi, d.k) : Cer3.uguale(senza, giustaApprox);
      if (ok) { m.suono("prendi"); return true; }
      m.suono("errore");
      var p = Object.assign({ scritto: testo, esatto: Cer3.kpi(d.k), approx: Cer3.v(giustaApprox) }, d.param || {});
      /* valore giusto, ma nella forma sbagliata */
      if (d.esatto && Cer3.uguale(senza, giustaApprox)) { m.errore("g1-pi-approssimato-invece-esatto"); await m.dice("penna", "g1.pi.err.serveEsatto", p); continue; }
      if (!d.esatto && Cer3.uguale(conPi, d.k)) { m.errore("g1-pi-esatto-invece-approssimato"); await m.dice("penna", "g1.pi.err.serveApprox", p); continue; }
      if (d.esatto && Cer3.uguale(senza, d.k)) { m.errore("g1-pi-dimenticato"); await m.dice("penna", "g1.pi.err.dimenticato", p); continue; }
      if (d.esatto && Cer3.uguale(conPi, giustaApprox)) { m.errore("g1-pi-doppio"); await m.dice("penna", "g1.pi.err.doppio", p); continue; }
      /* errori tipici del problema (con π o con 3,14) */
      var trovata = (d.trappole || []).filter(function (t) {
        return d.esatto ? (Cer3.uguale(conPi, t.k) || Cer3.uguale(senza, t.k)) : (Cer3.uguale(senza, Math.round(t.k * 3.14 * 100) / 100) || Cer3.uguale(conPi, t.k));
      })[0];
      if (trovata) { m.errore(trovata.err); await m.dice("penna", trovata.chiave, p); continue; }
      m.errore(d.errAltro || "g1-calcolo");
      await m.dice("penna", d.esatto ? "g1.pi.err.altroEsatto" : "g1.pi.err.altroApprox", p);
    }
  },

  /* risposta numerica senza π (angoli, giri, stadi…), finché non è giusta */
  finoAlGiusto: async function (m, titolo, param, opz, giusta, spiega) {
    for (;;) {
      var testo = await m.tastierino(titolo, param, opz);
      if (testo === null) return false;
      var n = m.numero(testo);
      if (Cer3.uguale(n, giusta)) { m.suono("prendi"); return true; }
      m.suono("errore");
      await spiega(n, testo);
    }
  },

  /* domanda a scelta finché non è giusta: opzioni [{ testo, valore, param }], «giusta» = valore giusto;
     per ogni sbagliata errore "pref-valore" e battuta di Penna chiave + "." + valore */
  sceltaFinoAlGiusto: async function (m, domanda, param, opzioni, pref, chiaveErr) {
    for (;;) {
      var v = await m.scegli(Cer3.mescola(opzioni.slice()), domanda, param);
      if (v === "giusta") { m.suono("prendi"); return; }
      m.suono("errore"); m.errore(pref + "-" + v);
      await m.dice("penna", chiaveErr + "." + v, param);
    }
  },

  /* ---------- gli spicchi della ruota ---------- */
  spicchi: function (m) { return (m.stato.flag.spicchi || []).length; },
  prendiSpicchio: async function (m, id) {
    var l = (m.stato.flag.spicchi || []).slice();
    if (l.indexOf(id) >= 0) return;
    l.push(id); m.flag("spicchi", l);
    m.prendi("spicchio");
    m.suono("magia");
    await m.dice("penna", "g1.spicchio.preso", { n: String(l.length) });
  },

  /* ---------- IL TRENO COME BASE: il quadrante delle epoche ----------
     Ogni epoca ha la sua posizione sul quadrante (in gradi, in senso orario dalla stazione). */
  METE: [
    { id: "stazione", gradi: 0, stanza: "finale", arrivo: [1120, 840, -1, "profilo"] },
    { id: "londra", gradi: 60, stanza: "londra", arrivo: [240, 850, 1, "profilo"] },
    { id: "atene", gradi: 120, stanza: "atene", arrivo: [240, 850, 1, "profilo"] },
    { id: "siracusa", gradi: 180, stanza: "siracusa", arrivo: [240, 850, 1, "profilo"] },
    { id: "siene", gradi: 240, stanza: "siene", arrivo: [240, 850, 1, "profilo"] },
    { id: "cina", gradi: 300, stanza: "cina", arrivo: [240, 850, 1, "profilo"] }
  ],
  meta: function (id) { return Cer3.METE.filter(function (x) { return x.id === id; })[0]; },
  sblocca: async function (m, id) {
    var l = (m.stato.flag.mete || []).slice();
    if (l.indexOf(id) >= 0) return;
    l.push(id); m.flag("mete", l);
    m.suono("magia");
    await m.dice("penna", "g1.meta.nuova", { meta: Lingue.semplice("g1.meta." + id) });
  },

  /* il disegno del quadrante, con la lancetta sull'epoca di partenza e l'arco da percorrere */
  disegnoQuadrante: function (da, a) {
    var g = '<circle r="150" fill="#2a1a2a" stroke="#f3c45a" stroke-width="8"/><circle r="138" fill="none" stroke="#7a5418" stroke-width="2"/>';
    for (var t = 0; t < 360; t += 10) {
      var rr = t % 30 === 0 ? 120 : 128, ang = (t - 90) * Math.PI / 180;
      g += '<line x1="' + (Math.cos(ang) * rr).toFixed(1) + '" y1="' + (Math.sin(ang) * rr).toFixed(1) + '" x2="' + (Math.cos(ang) * 136).toFixed(1) + '" y2="' + (Math.sin(ang) * 136).toFixed(1) + '" stroke="#f3c45a" stroke-width="' + (t % 30 === 0 ? 3 : 1.5) + '"/>';
    }
    if (a) {
      var alfa = (a.gradi - da.gradi + 360) % 360, a0 = (da.gradi - 90) * Math.PI / 180, a1 = (a.gradi - 90) * Math.PI / 180;
      g += '<path d="M' + (Math.cos(a0) * 104).toFixed(1) + " " + (Math.sin(a0) * 104).toFixed(1) + " A104 104 0 " + (alfa > 180 ? 1 : 0) + " 1 " + (Math.cos(a1) * 104).toFixed(1) + " " + (Math.sin(a1) * 104).toFixed(1) + '" fill="none" stroke="#9fffb0" stroke-width="8" stroke-linecap="round" opacity=".85"/>';
    }
    Cer3.METE.forEach(function (x) {
      var ang = (x.gradi - 90) * Math.PI / 180;
      g += '<circle cx="' + (Math.cos(ang) * 104).toFixed(1) + '" cy="' + (Math.sin(ang) * 104).toFixed(1) + '" r="9" fill="' + (a && x.id === a.id ? "#9fffb0" : "#f3c45a") + '" stroke="#1d1428" stroke-width="2"/>' +
        '<text x="' + (Math.cos(ang) * 176).toFixed(1) + '" y="' + (Math.sin(ang) * 176 + 7).toFixed(1) + '" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="26" fill="#f6e7b8">' + Lingue.semplice("g1.meta.corto." + x.id) + "</text>";
    });
    var ad = (da.gradi - 90) * Math.PI / 180;
    g += '<line x1="0" y1="0" x2="' + (Math.cos(ad) * 96).toFixed(1) + '" y2="' + (Math.sin(ad) * 96).toFixed(1) + '" stroke="#c8402f" stroke-width="7" stroke-linecap="round"/><circle r="12" fill="#f3c45a" stroke="#1d1428" stroke-width="3"/>';
    return '<svg viewBox="-230 -210 460 420" style="max-height:330px">' + g + "</svg>";
  },

  /* raggio del quadrante e coefficiente dell'arco: arco = 2πr · α/360 = (r·α/180)π, sempre intero */
  arco: function (alfa) {
    var possibili = [3, 6, 9, 12, 15].filter(function (r) { return (r * alfa) % 180 === 0; });
    var r = Cer3.scegliUno(possibili);
    return { r: r, alfa: alfa, k: r * alfa / 180 };
  },
  calcolaArco: async function (m, da, a) {
    var alfa = (a.gradi - da.gradi + 360) % 360, q = Cer3.arco(alfa);
    var par = { r: String(q.r), alfa: String(alfa), d: String(2 * q.r), giro: Cer3.kpi(2 * q.r), da: Lingue.semplice("g1.meta." + da.id), meta: Lingue.semplice("g1.meta." + a.id),
      frazione: Cer3.frazione(alfa, 360) };
    await m.pannello(function (p, chiudi) {
      p.innerHTML = "<h2>" + Lingue.html("g1.quad.titolo", par) + '</h2><div class="ce-figura">' + Cer3.disegnoQuadrante(da, a) + '</div><p class="pn-guida">' + Lingue.html("g1.quad.guida", par) + "</p>";
      var b = document.createElement("button"); b.className = "pn-tasto principale"; b.innerHTML = Lingue.html("g1.quad.calcola");
      b.addEventListener("click", function (e) { e.stopPropagation(); chiudi(); });
      p.appendChild(b);
    }, { chiudibile: false });
    m.aiutoQui({ id: "h-arco-" + a.id, chi: "penna", chiavi: ["g1.h.arco.1", "g1.h.arco.2", "g1.h.arco.3"], param: Object.assign({ k: Cer3.kpi(q.k) }, par) });
    var ok = await Cer3.rispostaPi(m, {
      titolo: "g1.quad.domanda", param: par, k: q.k, esatto: true, promemoria: "g1.quad.promemoria", annullabile: true,
      trappole: [
        { k: 2 * q.r, err: "g1-arco-giro-intero", chiave: "g1.arco.err.giro" },
        { k: q.r * alfa / 360, err: "g1-arco-senza-2", chiave: "g1.arco.err.senza2" },
        { k: q.r * q.r * alfa / 360, err: "g1-arco-area", chiave: "g1.arco.err.area" },
        { k: 2 * q.k, err: "g1-arco-diametro", chiave: "g1.arco.err.diametro" }
      ], errAltro: "g1-arco-calcolo"
    });
    m.aiutoQui(null);
    return ok;
  },

  viaggio: async function (m) {
    var qui = Cer3.meta(m.stato.flag.trenoQui || "stazione"), sbloccate = m.stato.flag.mete || [];
    var opz = Cer3.METE.filter(function (x) { return sbloccate.indexOf(x.id) >= 0; }).map(function (x) {
      return { testo: x.id === qui.id ? "g1.viaggio.scendi" : "g1.viaggio.vai", valore: x.id, param: { meta: Lingue.semplice("g1.meta." + x.id) } };
    });
    opz.push({ testo: "g1.viaggio.resta", valore: "resta" });
    var scelta = await m.scegli(opz, "g1.viaggio.titolo");
    if (scelta === "resta") return;
    var meta = Cer3.meta(scelta);
    if (!Motore._haStanza(meta.stanza)) { await m.dice("penna", "g1.viaggio.costruzione", { meta: Lingue.semplice("g1.meta." + meta.id) }); return; }
    if (meta.id !== qui.id) {
      /* un ritorno non chiede di rifare il calcolo: si risparmia tempo */
      var viste = m.stato.flag.meteViste || [];
      if (viste.indexOf(meta.id) < 0) {
        var ok = await Cer3.calcolaArco(m, qui, meta);
        if (!ok) return;
        m.flag("meteViste", viste.concat([meta.id]));
      }
      m.flag("trenoQui", meta.id);
      m.suono("magia");
      await m.dice("penna", viste.indexOf(meta.id) < 0 ? "g1.viaggio.ok" : "g1.viaggio.ritorno", { meta: Lingue.semplice("g1.meta." + meta.id) });
    }
    await m.vaiStanza(meta.stanza, meta.arrivo);
  },
  /* dalla porta del vagone, in ogni epoca: si risale sul treno */
  sali: async function (m) {
    await m.pensa("g1.vagone.sali");
    await m.vaiStanza("treno", [1180, 800, 1, "profilo"]);
  },

  /* pannello con una figura e un testo, con il tasto «Ho capito» */
  pannelloFigura: function (m, titolo, figura, testo, param) {
    return m.pannello(function (p, chiudi) {
      p.innerHTML = "<h2>" + Lingue.html(titolo, param) + '</h2><div class="ce-figura">' + figura + "</div>" + (testo ? '<p class="pn-guida">' + Lingue.html(testo, param) + "</p>" : "");
      var t = document.createElement("button"); t.className = "pn-tasto principale"; t.innerHTML = Lingue.html("g1.capito");
      t.addEventListener("click", function (e) { e.stopPropagation(); chiudi(); });
      p.appendChild(t);
    }, { chiudibile: false });
  },

  inizio: async function (m) {
    m.flag("parolonaAlFinestrino", true);
    await m.cartello("g1.titolo", "g1.sottotitolo", 3400);
    await m.dice("narratore", "g1.intro.1");
    await m.pensa("g1.intro.2");
    await m.dice("parolona", "g1.intro.3");
    await m.dice("parolona", "g1.intro.4");
    await m.pensa("g1.intro.5");
    await m.dice("parolona", "g1.intro.6");
    m.suono("magia");
    m.effetto("lampo-pi", 640, 600, 1300);
    m.flag("ruotaRotta", true);
    m.flag("parolonaAlFinestrino", false);
    await m.dice("narratore", "g1.intro.7");
    await m.dice("penna", "g1.intro.8");
    await m.pensa("g1.intro.9");
  },

  aiuti: function (m) {
    var f = Cer3.aiutiStanze[m.stato.stanza];
    return f ? f(m) : null;
  }
};

/* piccoli stili propri del livello */
(function () {
  var s = document.createElement("style");
  s.textContent =
    ".elemento.penna-el svg { animation: galleggia 3s ease-in-out infinite; }" +
    ".elemento.penna-el.parla svg { animation: penna-parla .35s ease-in-out infinite alternate; }" +
    "@keyframes penna-parla { from { transform: rotate(-4deg) translateY(0); } to { transform: rotate(4deg) translateY(-6px); } }" +
    ".effetto.lampo-pi { width: 320px; height: 320px; margin: -160px 0 0 -160px; border-radius: 50%; background: radial-gradient(circle, #fff2c0 0%, rgba(120,200,255,.5) 40%, transparent 70%); animation: lampo-pi 1.3s ease-out forwards; pointer-events: none; }" +
    "@keyframes lampo-pi { 0% { transform: scale(.2) rotate(0); opacity: 0; } 30% { opacity: 1; } 100% { transform: scale(2.6) rotate(-120deg); opacity: 0; } }" +
    ".elemento.display-epoche { width: 60px; height: 44px; display: grid; place-items: center; color: #9fffb0; font-weight: 800; font-size: 13px; text-align: center; line-height: 1.05; }" +
    ".ce-figura { display: flex; justify-content: center; margin: 4px 0 12px; direction: ltr; }" +
    ".ce-figura svg { max-height: 320px; width: auto; max-width: 100%; }" +
    ".ce-figura text { font-family: Georgia, serif; font-weight: 700; }" +
    ".ce-misure { display: flex; gap: 22px; justify-content: center; flex-wrap: wrap; margin: 6px 0 14px; direction: ltr; }" +
    ".ce-misura { width: 210px; padding: 10px 12px 14px; border-radius: 14px; background: #f6e7b8; color: #1d1428; border: 3px solid #1d1428; box-shadow: 0 5px 0 #1d1428; text-align: center; font-size: 20px; }" +
    ".ce-misura svg { height: 120px; width: auto; display: block; margin: 0 auto 6px; }" +
    ".ce-misura b { font-size: 24px; }" +
    ".ce-misura .rapporto { margin-top: 8px; padding: 4px; border-radius: 8px; background: #3a6a4a; color: #fff8e0; font-weight: 800; }" +
    ".ce-scheda { margin: 6px auto 12px; max-width: 820px; display: grid; grid-template-columns: 1fr 1fr; gap: 18px; direction: ltr; }" +
    ".ce-scheda > div { padding: 14px 18px; border-radius: 12px; border: 3px solid #1d1428; font-size: 22px; line-height: 1.4; }" +
    ".ce-scheda .esatto { background: #e8f4ff; color: #1d1428; }" +
    ".ce-scheda .approx { background: #fff0d8; color: #1d1428; }" +
    ".ce-scheda h3 { margin: 0 0 6px; font-size: 24px; }" +
    ".ce-scheda .num { font-size: 30px; font-weight: 800; }";
  document.head.appendChild(s);
})();

Motore.capitolo({
  id: "t3g1",
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
    metro: { icona: "ogg-metro", nome: "ogg.metro", descrizione: "ogg.metro.d", loSapevi: "ogg.metro.ls", suAltro: "metro.altro" },
    gomitolo: { icona: "ogg-gomitolo", nome: "ogg.gomitolo", descrizione: "ogg.gomitolo.d", suAltro: "gomitolo.altro" },
    spicchio: { icona: "ogg-spicchio", nome: "ogg.spicchio", descrizione: "ogg.spicchio.d", suAltro: "spicchio.altro" }
  },

  figurine: {},

  inizio: Cer3.inizio,
  aiuti: Cer3.aiuti
});
