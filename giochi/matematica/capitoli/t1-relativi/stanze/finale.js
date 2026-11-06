/* =====================================================================
   Matematica · terze · Capitolo 1 · Stanza: IL FINALE, sul Binario 8 della nostra stazione, oggi (Lez. 7 e Lez. 1)
   Madama Parolona aspetta con la scatola del meno. Sfida degli INSIEMI (ogni numero nella scatola più piccola:
   ℕ, ℤ, ℚ, ℝ; √2 e la tavoletta babilonese) → sfida delle RADICI (bivio √(−9); ∛(−8); √(a²+b²) ≠ a+b; √a·√b)
   → le cinque CARTE-PAROLA in ordine: «Nessuno capiva i miei simboli» → la confessione, il meno ritorna
   → cliffhanger verso il livello «Il cerchio senza π» → ripasso, «Vero o inventato?», fine con il codice.
   Lo sfondo riusa la grafica della stazione (stazione/grafica.js è sempre caricato).
   ===================================================================== */
(function () {
  Motore.aggiungi("personaggi", {
    tecla: { nome: "nome.tecla", colore: "#9fd7ff", voce: { altezza: 300, timbro: "sine", passo: 0.1, volume: 0.05 } }
  });
  Motore.aggiungi("oggetti", {
    ruota: { icona: "ogg-ruota", nome: "ogg.ruota", descrizione: "ogg.ruota.d", suAltro: "ruota.altro" }
  });

  Grafica.definizioni(
    '<symbol id="ogg-ruota" viewBox="0 0 140 140"><ellipse cx="70" cy="124" rx="44" ry="6" fill="#000" opacity=".25"/>' +
    '<g stroke="#1d1428" stroke-width="3" stroke-linejoin="round"><path d="M70 20 Q122 26 118 70 Q114 112 66 116 Q22 112 24 66 Q30 30 70 20 Z" fill="none" stroke="#7a4a24" stroke-width="12"/>' +
    '<path d="M70 20 Q122 26 118 70 Q114 112 66 116 Q22 112 24 66 Q30 30 70 20 Z" fill="none"/>' +
    '<path d="M70 68 L70 22 M70 68 L116 70 M70 68 L68 114 M70 68 L26 66" stroke="#7a4a24" stroke-width="6"/><circle cx="70" cy="68" r="10" fill="url(#t8-ottone)"/></g></symbol>' +
    '<symbol id="scatola-meno" viewBox="0 0 140 140"><g stroke="#1d1428" stroke-width="3" stroke-linejoin="round">' +
    '<path d="M24 60 L116 60 L108 120 L32 120 Z" fill="#7a2f8e"/><path d="M18 46 L122 46 L116 64 L24 64 Z" fill="#9a48a8"/>' +
    '<path d="M24 78 q10 -8 20 0 t20 0 t20 0 t20 0" fill="none" stroke="#e8c26a" stroke-width="3"/><rect x="62" y="66" width="16" height="14" rx="3" fill="url(#t8-ottone)"/></g></symbol>'
  );

  /* lo sfondo: il Binario 8 di notte, con il treno di Matematica appena rientrato */
  Grafica.sfondo("finale", (function () {
    var s = '<rect width="1600" height="900" fill="url(#st-cielo3)"/>';
    s += '<circle cx="1220" cy="190" r="46" fill="#fff4d6"/><circle cx="1240" cy="180" r="42" fill="#161c4a"/>';
    var seme = 5; s += '<g fill="#fff">';
    for (var i = 0; i < 50; i++) {
      seme = (seme * 9301 + 49297) % 233280; var x = seme / 233280 * 1600;
      seme = (seme * 9301 + 49297) % 233280; var y = seme / 233280 * 380;
      s += '<circle cx="' + x.toFixed(0) + '" cy="' + y.toFixed(0) + '" r="' + (1 + (i % 3) * 0.6) + '" opacity="' + (0.4 + (i % 4) * 0.15) + '"/>';
    }
    s += '</g><use href="#st-tettoia"/><use href="#st-facciata"/><use href="#st-colonne"/><use href="#st-terra"/>';
    s += '<use href="#st-treno-matematica"/>';
    s += '<g font-family="Atkinson Hyperlegible, Segoe UI, Arial" font-weight="800" font-size="40" text-anchor="middle"><path d="M680 266 L680 200" stroke="#1a1a2a" stroke-width="4"/>' +
      '<circle cx="680" cy="300" r="34" fill="#fff8e6" stroke="#1d1428" stroke-width="5"/><text x="680" y="314" fill="#1d1428">8</text></g>';
    s += '<rect width="1600" height="900" fill="#0a0c30" opacity=".18"/>';
    // lampioni accesi sulle banchine: aloni caldi
    s += '<g fill="#ffd27a" opacity=".18"><ellipse cx="520" cy="760" rx="160" ry="60"/><ellipse cx="1100" cy="780" rx="200" ry="70"/></g>';
    return s;
  })());

  /* ---------- gli insiemi numerici: ogni numero nella scatola più piccola ---------- */
  var INSIEMI = ["N", "Z", "Q", "R"];
  var POOL = {
    N: [["7", "7"], ["12", "12"], ["√9", "√9 (= 3)"], ["√16", "√16 (= 4)"], ["20 : 4", "20 : 4 (= 5)"]],
    Z: [["−5", "−5"], ["−12", "−12"], ["−√4", "−√4 (= −2)"], ["−18 : 6", "−18 : 6 (= −3)"]],
    Q: [["{fr:3/4}", "3/4"], ["−0,5", "−0,5"], ["0,{per:3}", "0,333…"], ["−{fr:2/3}", "−2/3"], ["2,25", "2,25"]],
    R: [["√2", "√2"], ["√5", "√5"], ["π", "π"], ["√3", "√3"]]
  };
  function nuoviNumeri() {
    var out = [];
    INSIEMI.forEach(function (k) {
      var l = Rel3.mescola(POOL[k].slice()).slice(0, 2);
      // nei naturali e negli interi c'è sempre una "trappola" con la radice o la divisione
      if (k === "N" && !l.some(function (x) { return /√|:/.test(x[0]); })) l[1] = POOL.N[2];
      if (k === "Z" && !l.some(function (x) { return /√|:/.test(x[0]); })) l[1] = POOL.Z[2];
      if (k === "R" && !l.some(function (x) { return x[0] === "√2"; })) l[0] = POOL.R[0];
      l.forEach(function (x) { out.push({ v: x[0], d: x[1], ins: k }); });
    });
    return Rel3.mescola(out);
  }
  function insiemi(m) {
    if (!m.stato.flag.numeriInsiemi) m.flag("numeriInsiemi", nuoviNumeri());
    var numeri = m.stato.flag.numeriInsiemi, messi = {}, scelto = null, messaggio = null;
    return m.pannello(function (p, chiudi) {
      function disegna() {
        p.innerHTML = "";
        var h = document.createElement("h2"); h.innerHTML = Lingue.html("t1f.ins.titolo"); p.appendChild(h);
        var sc = document.createElement("div"); sc.className = "ins-scatole";
        INSIEMI.forEach(function (k) {
          var b = document.createElement("div"); b.className = "ins-scatola ins-" + k;
          b.innerHTML = '<b>' + { N: "ℕ", Z: "ℤ", Q: "ℚ", R: "ℝ" }[k] + '</b><small>' + Lingue.html("t1f.ins.nome." + k) + '</small><div class="ins-dentro num">' +
            numeri.filter(function (x, i) { return messi[i] === k; }).map(function (x) { return "<span>" + Lingue.html("t1f.val", { v: x.v }) + "</span>"; }).join("") + "</div>";
          b.addEventListener("click", function (e) { e.stopPropagation(); metti(k); });
          sc.appendChild(b);
        });
        p.appendChild(sc);
        var nn = document.createElement("div"); nn.className = "ins-numeri";
        numeri.forEach(function (x, i) {
          if (messi[i]) return;
          var b = document.createElement("button"); b.className = "ins-num num" + (scelto === i ? " scelto" : "");
          b.innerHTML = Lingue.html("t1f.val", { v: x.v });
          b.addEventListener("click", function (e) { e.stopPropagation(); scelto = i; Suoni.effetto("clic"); disegna(); });
          nn.appendChild(b);
        });
        p.appendChild(nn);
        var msg = document.createElement("p"); msg.className = "pn-losapevi";
        msg.innerHTML = messaggio || Lingue.html("t1f.ins.istruzioni");
        p.appendChild(msg);
      }
      function metti(k) {
        if (scelto === null) return;
        var x = numeri[scelto];
        if (x.ins === k) {
          messi[scelto] = k; Suoni.effetto("prendi");
          messaggio = x.v === "√2" ? Lingue.html("t1f.ins.radice2") : null;
          scelto = null;
          if (Object.keys(messi).length === numeri.length) { disegna(); setTimeout(chiudi, 1400); return; }
        } else {
          Suoni.effetto("errore"); m.errore("t1f-insiemi-" + x.ins);
          messaggio = Lingue.html("t1f.ins.err." + x.ins, { x: Lingue.html("t1f.val", { v: x.d }) });
          scelto = null;
        }
        disegna();
      }
      disegna();
    }, { chiudibile: false });
  }

  /* ---------- le radici: un bivio e tre risposte da scrivere ---------- */
  async function radici(m) {
    if (!m.stato.flag.radici) {
      var terne = [[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17]], t = terne[Rel3.a_caso(0, 3)];
      var cubi = [[-8, -2], [-27, -3], [-64, -4], [-125, -5]], c = cubi[Rel3.a_caso(0, 3)];
      var quad = [[-9, 3], [-16, 4], [-25, 5], [-36, 6]], q = quad[Rel3.a_caso(0, 3)];
      var prod = [[2, 8, 4], [3, 12, 6], [2, 18, 6], [5, 20, 10]], pr = prod[Rel3.a_caso(0, 3)];
      m.flag("radici", { q: q, c: c, t: t, pr: pr });
    }
    var r = m.stato.flag.radici, fatte = m.stato.flag.radiciFatte || 0;
    if (fatte < 1) {
      var p = { n: Rel3.scrivi(r.q[0]), a: String(r.q[1]) };
      await m.dice("parolona", "t1f.rad.q.vanto", p);
      m.aiutoQui({ id: "h-rq", chi: "penna", chiavi: ["t1f.h.rq.1", "t1f.h.rq.2", "t1f.h.rq.3"], param: p });
      for (;;) {
        var v = await m.scegli(Rel3.mescola([
          { testo: "t1f.rad.q.giusta", valore: "giusta", param: p },
          { testo: "t1f.rad.q.meno", valore: "meno", param: p },
          { testo: "t1f.rad.q.piu", valore: "piu", param: p },
          { testo: "t1f.rad.q.entrambi", valore: "entrambi", param: p }
        ]), "t1f.rad.q.bivio", p);
        if (v === "giusta") break;
        m.suono("errore"); m.errore("t1f-radice-negativo-" + v);
        await m.dice("penna", "t1f.rad.q.err." + v, p);
      }
      m.aiutoQui(null);
      m.suono("prendi");
      await m.dice("penna", "t1f.rad.q.ok", p);
      m.flag("radiciFatte", 1);
    }
    var domande = [
      { k: "c", giusta: r.c[1], p: { n: Rel3.scrivi(r.c[0]).replace("+", ""), g: Rel3.scrivi(r.c[1]) } },
      { k: "t", giusta: r.t[2], p: { a: String(r.t[0] * r.t[0]), b: String(r.t[1] * r.t[1]), ra: String(r.t[0]), rb: String(r.t[1]), s: String(r.t[0] + r.t[1]), somma: String(r.t[2] * r.t[2]), g: String(r.t[2]) } },
      { k: "pr", giusta: r.pr[2], p: { a: String(r.pr[0]), b: String(r.pr[1]), ab: String(r.pr[0] * r.pr[1]), g: String(r.pr[2]) } }
    ];
    for (var i = Math.max(0, (m.stato.flag.radiciFatte || 1) - 1); i < domande.length; i++) {
      var d = domande[i];
      await m.dice("parolona", "t1f.rad." + d.k + ".vanto", d.p);
      m.aiutoQui({ id: "h-r" + d.k, chi: "penna", chiavi: ["t1f.h.r" + d.k + ".1", "t1f.h.r" + d.k + ".2", "t1f.h.r" + d.k + ".3"], param: d.p });
      await Rel3.finoAlGiusto(m, "t1f.rad." + d.k + ".domanda", d.p, { segno: true, max: 3 }, d.giusta, async function (n) {
        var tipo = d.k === "c" && n === -d.giusta ? "segno" : (d.k === "t" && n === r.t[0] + r.t[1] ? "somma" : "calcolo");
        m.errore("t1f-radice-" + d.k + "-" + tipo);
        await m.dice("penna", "t1f.rad." + d.k + ".err." + tipo, Object.assign({ x: Rel3.scrivi(n) }, d.p));
      });
      m.aiutoQui(null);
      m.flag("radiciFatte", i + 2);
      await m.dice("penna", "t1f.rad." + d.k + ".ok", d.p);
    }
    m.annota("t1f.q.radici");
  }

  /* ---------- le cinque carte in ordine ---------- */
  var FRASE = ["carta3", "carta1", "carta4", "carta2", "carta5"];   // NESSUNO CAPIVA I MIEI SIMBOLI
  function carte(m) {
    var ordine = Rel3.mescola(FRASE.slice());
    while (ordine.join() === FRASE.join()) ordine = Rel3.mescola(FRASE.slice());
    var messe = [], messaggio = null;
    m.aiutoQui({ id: "h-carte", chi: "penna", chiavi: ["t1f.h.carte.1", "t1f.h.carte.2", "t1f.h.carte.3"] });
    return m.pannello(function (p, chiudi) {
      function disegna() {
        p.innerHTML = "";
        var h = document.createElement("h2"); h.innerHTML = Lingue.html("t1f.carte.titolo"); p.appendChild(h);
        var f = document.createElement("div"); f.className = "cr-frase";
        f.innerHTML = messe.map(function (c) { return "<span>" + Lingue.html("t1f.parola." + c) + "</span>"; }).join("") || "&nbsp;";
        p.appendChild(f);
        var box = document.createElement("div"); box.className = "cr-carte";
        ordine.forEach(function (c) {
          if (messe.indexOf(c) >= 0) return;
          var b = document.createElement("button"); b.className = "cr-carta";
          b.innerHTML = Lingue.html("t1f.parola." + c);
          b.addEventListener("click", function (e) { e.stopPropagation(); scegli(c); });
          box.appendChild(b);
        });
        p.appendChild(box);
        var msg = document.createElement("p"); msg.className = "pn-losapevi"; msg.innerHTML = messaggio || Lingue.html("t1f.carte.istruzioni");
        p.appendChild(msg);
        if (messe.length) {
          var r = document.createElement("button"); r.className = "pn-tasto"; r.innerHTML = Lingue.html("t1f.carte.ricomincia");
          r.addEventListener("click", function (e) { e.stopPropagation(); messe = []; messaggio = null; disegna(); });
          p.appendChild(r);
        }
      }
      function scegli(c) {
        messe.push(c); Suoni.effetto("clic");
        if (messe.length === FRASE.length) {
          if (messe.join() === FRASE.join()) { Suoni.effetto("magia"); disegna(); setTimeout(chiudi, 1600); return; }
          Suoni.effetto("errore"); messaggio = Lingue.html("t1f.carte.sbagliato"); messe = [];
        }
        disegna();
      }
      disegna();
    }, { chiudibile: false }).then(function () { m.aiutoQui(null); });
  }

  /* ---------- la sfida completa, riprendibile se si chiude a metà ---------- */
  async function sfida(m) {
    if (m.flag("finaleFatto")) return "t1f.par.dopo";
    if (!m.flag("insiemiFatti")) {
      await m.dice("parolona", "t1f.sfida.1");
      await m.dice("penna", "t1f.tavoletta.1");
      await m.dice("penna", "t1f.tavoletta.2");
      m.aiutoQui({ id: "h-insiemi", chi: "penna", chiavi: ["t1f.h.ins.1", "t1f.h.ins.2", "t1f.h.ins.3"] });
      await insiemi(m);
      m.aiutoQui(null);
      m.flag("insiemiFatti", true);
      m.annota("t1f.q.insiemi");
      await m.dice("parolona", "t1f.sfida.2");
    }
    if (!m.flag("radiciTutte")) { await radici(m); m.flag("radiciTutte", true); }
    if (!m.flag("carteFatte")) {
      await m.dice("parolona", "t1f.sfida.3");
      await m.pensa("t1f.carte.intro");
      await carte(m);
      m.flag("carteFatte", true);
      ["carta1", "carta2", "carta3", "carta4", "carta5"].forEach(function (c) { m.togli(c); });
      m.annota("t1f.q.frase");
    }
    await confessione(m);
  }

  async function confessione(m) {
    await m.dice("narratore", "t1f.conf.0");
    await m.dice("parolona", "t1f.conf.1");
    await m.dice("parolona", "t1f.conf.2");
    await m.pensa("t1f.conf.3");
    await m.dice("penna", "t1f.conf.4");
    await m.dice("parolona", "t1f.conf.5");
    m.suono("magia");
    m.effetto("lampo-meno", 520, 600, 1400);
    m.flag("menoTornato", true);
    await m.dice("narratore", "t1f.conf.6");
    await m.dice("parolona", "t1f.conf.7");
    m.flag("parolonaVia", true);
    m.prendi("ruota");
    await m.dice("narratore", "t1f.conf.8");
    await m.dice("penna", "t1f.conf.9");
    await m.pensa("t1f.conf.10");
    m.flag("finaleFatto", true);
    await m.cartello("t1f.continua", "t1f.continua.sotto", 4200);
    await ripasso(m);
    await veroInventato(m);
    m.fine("t1f.fine.titolo", "t1f.fine.testo");
  }

  /* ---------- ripasso e «Vero o inventato?» ---------- */
  function crea(tag, html) { var e = document.createElement(tag); e.innerHTML = html; return e; }
  function bottone(html, fai) { var b = crea("button", html); b.className = "pn-tasto principale"; b.addEventListener("click", function (e) { e.stopPropagation(); fai(); }); return b; }
  async function ripasso(m) {
    await m.pannello(function (p, chiudi) {
      p.appendChild(crea("h2", Lingue.html("t1f.rip.titolo")));
      var l = crea("ul", ""); l.className = "pn-elenco";
      for (var i = 1; i <= 8; i++) l.appendChild(crea("li", Lingue.html("t1f.rip." + i)));
      p.appendChild(l);
      p.appendChild(bottone(Lingue.html("t1f.avanti"), chiudi));
    }, { chiudibile: false, aiuto: false });
  }
  var VERO_INVENTATO = [["t1f.vi.1", true], ["t1f.vi.2", false], ["t1f.vi.3", true], ["t1f.vi.4", false], ["t1f.vi.5", true],
    ["t1f.vi.6", true], ["t1f.vi.7", false], ["t1f.vi.8", true], ["t1f.vi.9", false], ["t1f.vi.10", false]];
  async function veroInventato(m) {
    var indice = 0, giuste = 0;
    await m.pannello(function (p, chiudi) {
      function disegna() {
        p.innerHTML = "";
        p.appendChild(crea("h2", Lingue.html("t1f.vi.titolo") + ' <small style="color:#c8c4dc">' + Math.min(indice + 1, VERO_INVENTATO.length) + "/" + VERO_INVENTATO.length + "</small>"));
        if (indice >= VERO_INVENTATO.length) {
          p.appendChild(crea("p", Lingue.html("t1f.vi.fine", { giuste: String(giuste), totale: String(VERO_INVENTATO.length) })));
          p.appendChild(bottone(Lingue.html("t1f.avanti"), chiudi));
          return;
        }
        var d = VERO_INVENTATO[indice];
        p.appendChild(crea("p", '<b style="font-size:1.2em">' + Lingue.html(d[0]) + "</b>"));
        var riga = crea("div", ""); riga.style.display = "flex"; riga.style.gap = "16px";
        [[true, "t1f.vi.vero"], [false, "t1f.vi.inventato"]].forEach(function (s) {
          riga.appendChild(bottone(Lingue.html(s[1]), function () {
            var ok = s[0] === d[1];
            if (ok) giuste++;
            Suoni.effetto(ok ? "prendi" : "errore");
            p.querySelectorAll("button").forEach(function (b) { b.disabled = true; });
            var e = crea("div", Lingue.html(ok ? "t1f.vi.ok" : "t1f.vi.no") + " " + Lingue.html(d[0] + ".spiega"));
            e.className = "pn-losapevi";
            p.appendChild(e);
            p.appendChild(bottone(Lingue.html("t1f.avanti"), function () { indice++; disegna(); }));
          }));
        });
        p.appendChild(riga);
      }
      disegna();
    }, { chiudibile: false, aiuto: false });
  }

  (function () {
    var s = document.createElement("style");
    s.textContent =
      ".ins-scatole { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin: 6px 0 14px; direction: ltr; }" +
      ".ins-scatola { min-height: 150px; border-radius: 14px; border: 4px solid #1d1428; padding: 8px; cursor: pointer; text-align: center; color: #1d1428; }" +
      ".ins-scatola b { display: block; font-size: 42px; line-height: 1; } .ins-scatola small { display: block; font-size: 16px; font-weight: 700; }" +
      ".ins-N { background: #ffe7a0; } .ins-Z { background: #ffc8a8; } .ins-Q { background: #c8e8ff; } .ins-R { background: #d8c8ff; }" +
      ".ins-dentro { display: flex; flex-wrap: wrap; gap: 6px; justify-content: center; margin-top: 8px; }" +
      ".ins-dentro span { padding: 2px 8px; border-radius: 8px; background: #fff; font-weight: 800; font-size: 20px; }" +
      ".ins-numeri { display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; direction: ltr; }" +
      ".ins-num { font-family: inherit; cursor: pointer; min-width: 90px; padding: 10px 14px; border-radius: 12px; border: 4px solid #1d1428; box-shadow: 0 5px 0 #1d1428; background: #f6ecd8; color: #1d1428; font-size: 28px; font-weight: 800; }" +
      ".ins-num.scelto { background: #ffd36b; transform: translateY(-4px); }" +
      ".cr-frase { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; min-height: 64px; padding: 10px; margin: 6px 0 14px; border-radius: 12px; background: #2a2448; }" +
      ".cr-frase span, .cr-carta { padding: 10px 16px; border-radius: 8px; background: #fbf0d0; color: #7a2f8e; font-weight: 800; font-size: 26px; border: 3px solid #7a2f8e; font-family: Georgia, serif; }" +
      ".cr-carte { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; } .cr-carta { cursor: pointer; box-shadow: 0 5px 0 #4a1a5a; }";
    document.head.appendChild(s);
  })();

  Motore.stanza("finale", {
    sfondo: "finale",
    pavimento: { xMin: 1000, xMax: 1330, yMin: 760, yMax: 880 },
    scala: { lontano: { y: 760, s: 0.94 }, vicino: { y: 880, s: 1 } },
    attori: [
      { id: "zara", simbolo: "zara-fronte", viste: { fronte: "zara-fronte", profilo: "zara-profilo", schiena: "zara-schiena" },
        vista: [-110, -600, 230, 615], piedi: [5, 0], altezza: 470, x: 1120, y: 840, dir: -1 },
      { id: "parolona", simbolo: "parolona", vista: [-150, -700, 300, 715], piedi: [0, 0], altezza: 520, x: 470, y: 850, dir: 1, fisso: true,
        visibile: function (m) { return !m.flag("parolonaVia"); } }
    ],
    elementi: [
      { id: "penna", classe: "penna-el", personaggio: "penna", x: 1230, y: 520, larghezza: 80, altezza: 128,
        svg: '<svg viewBox="-70 -230 150 240"><use href="#penna" x="-70" y="-230" width="150" height="240"/></svg>' },
      { id: "scatola", classe: "", x: 560, y: 700, larghezza: 90, altezza: 90,
        svg: '<svg viewBox="0 0 140 140"><use href="#scatola-meno"/></svg>',
        visibile: function (m) { return !m.flag("menoTornato"); } },
      { id: "tecla", classe: "", personaggio: "tecla", x: 1360, y: 660, larghezza: 140, altezza: 200,
        svg: '<svg viewBox="-70 -190 140 200"><use href="#tecla" x="-70" y="-190" width="140" height="200"/></svg>' }
    ],
    entrata: async function (m) {
      if (m.flag("finaleArrivo")) return;
      m.flag("finaleArrivo", true);
      await m.cartello("t1f.titolo", "t1f.sottotitolo", 3000);
      await m.dice("narratore", "t1f.arrivo.1");
      await m.dice("parolona", "t1f.arrivo.2");
      await m.dice("parolona", "t1f.arrivo.3");
      await m.dice("penna", "t1f.arrivo.4");
    },
    hotspot: [
      { id: "parolona", nome: "t1f.hs.parolona", forma: "M360 220 H620 V860 H360 Z", arrivo: [1010, 850], verso: -1,
        presente: function (m) { return !m.flag("parolonaVia"); },
        guarda: "t1f.par.guarda", usa: "t1f.par.usa", parla: sfida, conAltro: "t1f.par.altro" },
      { id: "scatola", nome: "t1f.hs.scatola", forma: "M556 696 H654 V794 H556 Z", arrivo: [1010, 850], verso: -1,
        presente: function (m) { return !m.flag("menoTornato"); },
        guarda: "t1f.scat.guarda", usa: "t1f.scat.usa", parla: "t1f.scat.parla" },
      { id: "tecla", nome: "t1f.hs.tecla", forma: "M1360 660 H1500 V860 H1360 Z", arrivo: [1300, 850], verso: 1,
        guarda: "t1f.tecla.guarda", usa: "t1f.tecla.usa",
        parla: function (m) { return m.dice("tecla", m.flag("finaleFatto") ? "t1f.tecla.parla2" : "t1f.tecla.parla"); } },
      { id: "trenoF", nome: "t1f.hs.treno", forma: "M620 330 H980 V840 H620 Z", arrivo: [1010, 840], verso: -1,
        guarda: "t1f.treno.guarda", usa: function (m) { return m.flag("finaleFatto") ? "t1f.treno.usa2" : Rel3.sali(m); }, parla: "t1f.treno.parla" }
    ]
  });

  Rel3.aiutiStanze.finale = function (m) {
    if (!m.flag("finaleFatto")) return { id: "f-sfida", chi: "penna", chiavi: ["t1f.aiuto.sfida1", "t1f.aiuto.sfida2"] };
    return { id: "f-fine", chi: "penna", chiavi: ["t1f.aiuto.fine"] };
  };
})();
