/* =====================================================================
   Matematica · terze · Livello G1 · Stanza: LONDRA, 1706 — il FINALE nel caffè di William Jones (ripasso)
   DECIFRARE CON UN OGGETTO RICOSTRUITO: i quattro spicchi si incastrano nella ruota; al centro compare il
   simbolo π e Jones lo copia nel suo libro per principianti. Madama Parolona sfida la classe con i suoi
   problemi (sempre più difficili, numeri diversi a ogni partita): giri della ruota di una carrozza
   (calcolatrice), aiuola a corona circolare (approssimato), lunetta a semicerchio sopra la porta (esatto)
   → BIVIO DI CLASSE: valore esatto o approssimato? → π torna nella storia → CLIFFHANGER: una pagina del
   diario di Madama Parolona (aggancio con il capitolo 2, le lettere) → ripasso, «Vero o inventato?», fine.
   Fatti verificati (MacTutor): William Jones (1675-1749), gallese, insegnava matematica nei caffè di Londra;
   nel 1706 pubblicò un libro per principianti in cui π compare con il significato di oggi; Eulero lo
   adottò nel 1737 e divenne la notazione di tutti.
   ===================================================================== */
(function () {
  Motore.aggiungi("personaggi", {
    jones: { nome: "nome.jones", colore: "#a8c0ff", voce: { altezza: 190, timbro: "triangle", passo: 0.08, volume: 0.04 } }
  });
  Motore.aggiungi("figurine", {
    jones: { nome: "fig.jones.nome", anni: "fig.jones.anni", paese: "fig.jones.paese", testo: "fig.jones.testo", ritratto: "jones" }
  });

  function ruota(conPi) {
    var g = "";
    for (var i = 0; i < 4; i++) g += '<g transform="rotate(' + i * 90 + ')"><use href="#ce-spicchio-ruota" x="-110" y="-110" width="220" height="220"/></g>';
    g += '<circle r="26" fill="#f3c45a" stroke="#1d1428" stroke-width="4"/>';
    if (conPi) g += '<text y="14" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="44" fill="#1d1428">π</text>';
    return '<svg viewBox="-130 -130 260 260" overflow="visible">' + g + "</svg>";
  }
  function lunetta(d) {
    return '<svg viewBox="0 0 340 200"><path d="M20 180 A150 150 0 0 1 320 180 Z" fill="#a8c0d0" stroke="#1d1428" stroke-width="4"/>' +
      '<path d="M170 180 V30 M170 180 L64 74 M170 180 L276 74" stroke="#3a2214" stroke-width="6"/>' +
      '<path d="M20 190 H320" stroke="#c8402f" stroke-width="4"/><text x="170" y="198" text-anchor="middle" font-size="22" fill="#ffd36b">d = ' + d + " dm</text></svg>";
  }

  var elementi = [
    { id: "vagone", classe: "", x: 0, y: 300, larghezza: 170, altezza: 560,
      svg: '<svg viewBox="0 0 170 560" overflow="visible"><use href="#ce-vagone" width="170" height="560"/></svg>' },
    { id: "ruota", classe: "", x: 560, y: 560, larghezza: 120, altezza: 120, svg: ruota(true),
      visibile: function (m) { return m.flag("spicchiInRuota"); } },
    { id: "penna", classe: "penna-el", personaggio: "penna", x: 470, y: 400, larghezza: 80, altezza: 128,
      svg: '<svg viewBox="-70 -230 150 240" overflow="visible"><use href="#penna" x="-70" y="-230" width="150" height="240"/></svg>' }
  ];

  Motore.stanza("londra", {
    sfondo: "londracaffe",
    pavimento: { xMin: 190, xMax: 1460, yMin: 790, yMax: 880 },
    scala: { lontano: { y: 790, s: 0.93 }, vicino: { y: 880, s: 1 } },
    attori: [
      { id: "zara", simbolo: "zara-fronte", viste: { fronte: "zara-fronte", profilo: "zara-profilo", schiena: "zara-schiena" },
        vista: [-110, -600, 230, 615], piedi: [5, 0], altezza: 460, x: 240, y: 850, dir: 1 },
      { id: "jones", simbolo: "jones", vista: [-110, -600, 230, 615], piedi: [0, 0], altezza: 440, x: 960, y: 790, dir: -1, fisso: true },
      { id: "parolona", simbolo: "parolona", vista: [-150, -700, 300, 715], piedi: [0, 0], altezza: 480, x: 1360, y: 790, dir: -1, fisso: true }
    ],
    elementi: elementi,
    entrata: async function (m) {
      if (m.flag("londraArrivo")) return;
      m.flag("londraArrivo", true);
      await m.cartello("g1l.titolo", "g1l.sottotitolo", 3000);
      await m.dice("narratore", "g1l.arrivo.1");
      await m.dice("jones", "g1l.arrivo.2");
      await m.dice("jones", "g1l.arrivo.3");
      await m.dice("parolona", "g1l.arrivo.4");
      await m.dice("parolona", "g1l.arrivo.5");
      await m.dice("penna", "g1l.arrivo.6");
    },
    hotspot: [
      { id: "jones", nome: "g1l.hs.jones", forma: "M890 340 H1050 V790 H890 Z", arrivo: [840, 830], verso: 1,
        guarda: "g1l.jon.guarda", usa: "g1l.jon.usa", parla: parlaJones,
        con: { spicchio: ricomponi, compasso: "g1l.jon.compasso", metro: "g1l.jon.metro" }, conAltro: "g1l.jon.altro" },
      { id: "parolona", nome: "g1l.hs.parolona", forma: "M1270 240 H1450 V790 H1270 Z", arrivo: [1220, 830], verso: 1,
        guarda: "g1l.par.guarda", usa: "g1l.par.usa",
        parla: function (m) { return m.flag("spicchiInRuota") ? lezione(m) : m.dice("parolona", "g1l.par.prima"); },
        con: { spicchio: "g1l.par.spicchio" }, conAltro: "g1l.par.altro" },
      { id: "tavolo", nome: "g1l.hs.tavolo", forma: "M380 640 H860 V780 H380 Z", arrivo: [620, 820], vista: "schiena",
        guarda: function (m) { return m.flag("spicchiInRuota") ? "g1l.tav.guarda2" : "g1l.tav.guarda"; },
        usa: function (m) { return m.flag("spicchiInRuota") ? lezione(m) : m.pensa("g1l.tav.usa"); },
        parla: "g1l.tav.parla", con: { spicchio: ricomponi }, conAltro: "g1l.tav.altro" },
      { id: "camino", nome: "g1l.hs.camino", forma: "M584 240 H916 V580 H584 Z", arrivo: [750, 800], vista: "schiena",
        guarda: "g1l.cam.guarda", usa: "g1l.cam.usa", parla: "g1l.cam.parla" },
      { id: "finestra", nome: "g1l.hs.finestra", forma: "M244 114 H556 V426 H244 Z", arrivo: [400, 800], vista: "schiena",
        guarda: "g1l.fin.guarda", usa: "g1l.fin.usa", parla: "g1l.fin.parla" },
      { id: "lunetta", nome: "g1l.hs.lunetta", forma: "M1080 140 H1300 V250 H1080 Z", arrivo: [1190, 800], vista: "schiena",
        guarda: "g1l.lun.guarda", usa: "g1l.lun.usa", parla: "g1l.lun.parla" },
      { id: "bancone", nome: "g1l.hs.bancone", forma: "M1330 420 H1600 V640 H1330 Z", arrivo: [1300, 830], vista: "schiena",
        guarda: "g1l.ban.guarda", usa: "g1l.ban.usa", parla: "g1l.ban.parla" },
      { id: "penna", nome: "g1.hs.penna", forma: "M450 380 H560 V530 H450 Z", arrivo: [500, 830], vista: "schiena",
        guarda: "g1l.penna.guarda", usa: "g1.penna.usa", parla: "g1l.penna.parla", conAltro: "g1.penna.altro" },
      { id: "treno", nome: "g1.hs.treno", forma: "M0 300 H170 V870 H0 Z", arrivo: [230, 840], verso: -1,
        guarda: "g1.treno.guarda", usa: function (m) { return m.flag("lFatto") ? m.pensa("g1l.treno.fine") : Cer3.sali(m); }, parla: "g1.treno.parla" }
    ]
  });

  /* ---------- la ruota ricomposta ---------- */
  async function ricomponi(m) {
    if (m.flag("spicchiInRuota")) return m.pensa("g1l.ruo.gia");
    if (Cer3.spicchi(m) < 4) return m.pensa("g1l.ruo.mancano");
    m.togli("spicchio");
    m.flag("spicchiInRuota", true);
    m.suono("magia");
    await m.pensa("g1l.ruo.1");
    await Cer3.pannelloFigura(m, "g1l.ruo.titolo", ruota(true), "g1l.ruo.guida");
    await m.dice("penna", "g1l.ruo.2");
    await m.dice("jones", "g1l.ruo.3");
    await m.dice("jones", "g1l.ruo.4");
    await m.dice("parolona", "g1l.ruo.5");
    await m.dice("parolona", "g1l.ruo.6");
    return lezione(m);
  }

  async function parlaJones(m) {
    if (m.flag("spicchiInRuota") && !m.flag("lFatto")) return lezione(m);
    var v = await m.scegli([
      { testo: "g1l.dlg.chi", valore: "chi" },
      { testo: "g1l.dlg.libro", valore: "libro" },
      { testo: "g1l.dlg.caffe", valore: "caffe" },
      { testo: "g1l.dlg.ciao", valore: "ciao" }
    ]);
    if (v === "chi") { await m.dice("jones", "g1l.dlg.chi.r1"); await m.dice("jones", "g1l.dlg.chi.r2"); }
    if (v === "libro") { await m.dice("jones", "g1l.dlg.libro.r1"); await m.dice("jones", m.flag("spicchiInRuota") ? "g1l.dlg.libro.r3" : "g1l.dlg.libro.r2"); }
    if (v === "caffe") { await m.dice("jones", "g1l.dlg.caffe.r1"); await m.dice("jones", "g1l.dlg.caffe.r2"); }
    if (v === "ciao") await m.dice("jones", "g1l.dlg.ciao.r");
  }

  async function lezione(m) {
    if (!m.flag("spicchiInRuota")) return m.dice("parolona", "g1l.par.prima");
    if (!m.flag("lGiri")) { if (!(await giri(m))) return; }
    if (!m.flag("lAiuola")) { if (!(await aiuola(m))) return; }
    if (!m.flag("lLunetta")) { if (!(await lunettaDom(m))) return; }
    if (!m.flag("lBivio")) await bivio(m);
    if (!m.flag("lFatto")) return finale(m);
  }

  /* 1. i giri della ruota della carrozza (calcolatrice) */
  async function giri(m) {
    var q = m.stato.flag.lG;
    if (!q) { q = { d: Cer3.scegliUno([50, 100]), n: Cer3.scegliUno([100, 200, 250, 300, 500]) }; m.flag("lG", q); }
    var C = Math.round(3.14 * q.d * 100) / 100, dist = Math.round(q.n * C) / 100;
    var par = { d: String(q.d), C: Cer3.v(C), dist: Cer3.v(dist), cm: Cer3.v(dist * 100), n: String(q.n) };
    await m.dice("parolona", "g1l.giri.intro", par);
    m.aiutoQui({ id: "h-giri", chi: "penna", chiavi: ["g1l.h.giri.1", "g1l.h.giri.2", "g1l.h.giri.3"], param: par });
    var ok = await Cer3.finoAlGiusto(m, "g1l.giri.domanda", par, { virgola: true, max: 7, annullabile: true, calcolatrice: true, promemoria: "g1l.giri.promemoria" }, q.n, async function (n) {
      if (Cer3.uguale(n, q.n * 2)) { m.errore("g1-giri-raggio"); await m.dice("penna", "g1l.giri.err.raggio", par); }
      else if (Cer3.uguale(n, q.n / 100) || (n !== null && Math.abs(n - q.n / 100) < 0.01)) { m.errore("g1-giri-unita"); await m.dice("penna", "g1l.giri.err.unita", par); }
      else if (n !== null && Math.abs(n - dist * C) < 1) { m.errore("g1-giri-moltiplica"); await m.dice("penna", "g1l.giri.err.moltiplica", par); }
      else { m.errore("g1-giri-calcolo"); await m.dice("penna", "g1l.giri.err.altro", { n: Cer3.v(n || 0), cm: par.cm, C: par.C }); }
    });
    m.aiutoQui(null);
    if (!ok) return false;
    m.flag("lGiri", true);
    await m.dice("parolona", "g1l.giri.ok", par);
    return true;
  }
  /* 2. l'aiuola a corona circolare, valore approssimato */
  async function aiuola(m) {
    var c = m.stato.flag.lA;
    if (!c) { var R = Cer3.scegliUno([5, 6, 8, 10]); c = { R: R, r: Cer3.a_caso(2, R - 2) }; m.flag("lA", c); }
    var k = c.R * c.R - c.r * c.r, par = { R: String(c.R), r: String(c.r), k: Cer3.kpi(k), ap: Cer3.v(k * 3.14) };
    await m.dice("parolona", "g1l.aiu.intro", par);
    m.aiutoQui({ id: "h-aiu", chi: "penna", chiavi: ["g1l.h.aiu.1", "g1l.h.aiu.2", "g1l.h.aiu.3"], param: par });
    var ok = await Cer3.rispostaPi(m, {
      titolo: "g1l.aiu.domanda", param: par, k: k, esatto: false, annullabile: true, promemoria: "g1l.aiu.promemoria",
      trappole: [
        { k: (c.R - c.r) * (c.R - c.r), err: "g1-corona-differenza-quadrato", chiave: "g1c.cor.err.diff" },
        { k: c.R * c.R + c.r * c.r, err: "g1-corona-somma", chiave: "g1c.cor.err.somma" },
        { k: c.R * c.R, err: "g1-corona-solo-esterno", chiave: "g1c.cor.err.esterno" }
      ], errAltro: "g1-corona-calcolo"
    });
    m.aiutoQui(null);
    if (!ok) return false;
    m.flag("lAiuola", true);
    await m.dice("parolona", "g1l.aiu.ok", par);
    return true;
  }
  /* 3. la lunetta sopra la porta: semicerchio, valore esatto */
  async function lunettaDom(m) {
    var d = m.stato.flag.lL || Cer3.scegliUno([4, 8, 12, 16, 20]);
    m.flag("lL", d);
    var r = d / 2, k = r * r / 2, par = { d: String(d), r: String(r), r2: String(r * r), cerchio: Cer3.kpi(r * r), k: Cer3.kpi(k) };
    await m.dice("jones", "g1l.lun.intro", par);
    await Cer3.pannelloFigura(m, "g1l.lun.titolo", lunetta(d), "g1l.lun.guida", par);
    m.aiutoQui({ id: "h-lun", chi: "penna", chiavi: ["g1l.h.lun.1", "g1l.h.lun.2", "g1l.h.lun.3"], param: par });
    var ok = await Cer3.rispostaPi(m, {
      titolo: "g1l.lun.domanda", param: par, k: k, esatto: true, annullabile: true,
      trappole: [
        { k: r * r, err: "g1-semicerchio-intero", chiave: "g1l.lun.err.intero" },
        { k: d * d / 2, err: "g1-semicerchio-diametro", chiave: "g1l.lun.err.diametro" },
        { k: r, err: "g1-semicerchio-arco", chiave: "g1l.lun.err.arco" }
      ], errAltro: "g1-semicerchio-calcolo"
    });
    m.aiutoQui(null);
    if (!ok) return false;
    m.flag("lLunetta", true);
    await m.dice("jones", "g1l.lun.ok", par);
    return true;
  }
  /* 4. bivio di classe: valore esatto o approssimato? */
  async function bivio(m) {
    var k = Cer3.scegliUno([12, 16, 24, 32]), par = { es: Cer3.kpi(k), ap: Cer3.v(k * 3.14) };
    await m.dice("parolona", "g1l.biv.intro", par);
    m.aiutoQui({ id: "h-biv-l", chi: "penna", chiavi: ["g1l.h.biv.1", "g1l.h.biv.2", "g1l.h.biv.3"], param: par });
    await Cer3.sceltaFinoAlGiusto(m, "g1l.biv.domanda", par, [
      { testo: "g1l.biv.giusta", valore: "giusta", param: par },
      { testo: "g1l.biv.decimali", valore: "decimali", param: par },
      { testo: "g1l.biv.uguali", valore: "uguali", param: par },
      { testo: "g1l.biv.nessuno", valore: "nessuno", param: par }
    ], "g1-bivio-esatto", "g1l.biv.err");
    m.aiutoQui(null);
    m.flag("lBivio", true);
    await m.dice("jones", "g1l.biv.ok", par);
  }

  /* ---------- finale, cliffhanger, ripasso, «Vero o inventato?» ---------- */
  async function finale(m) {
    m.flag("lFatto", true);
    await m.dice("parolona", "g1l.fine.1");
    await m.dice("jones", "g1l.fine.2");
    m.suono("magia");
    m.effetto("lampo-pi", 620, 600, 1300);
    await m.dice("narratore", "g1l.fine.3");
    await m.dice("penna", "g1l.fine.4");
    m.figurina("jones");
    await m.dice("parolona", "g1l.fine.5");
    await m.dice("parolona", "g1l.fine.6");
    await m.pensa("g1l.fine.7");
    await m.dice("penna", "g1l.fine.8");
    m.annota("g1l.q.jones");
    await m.cartello("g1l.continua", "g1l.continua.sotto", 4200);
    await ripasso(m);
    await veroInventato(m);
    m.fine("g1l.fine.titolo", "g1l.fine.testo");
  }
  function crea(tag, html) { var e = document.createElement(tag); e.innerHTML = html; return e; }
  function bottone(html, fai) { var b = crea("button", html); b.className = "pn-tasto principale"; b.addEventListener("click", function (e) { e.stopPropagation(); fai(); }); return b; }
  async function ripasso(m) {
    await m.pannello(function (p, chiudi) {
      p.appendChild(crea("h2", Lingue.html("g1l.rip.titolo")));
      var l = crea("ul", ""); l.className = "pn-elenco";
      for (var i = 1; i <= 9; i++) l.appendChild(crea("li", Lingue.html("g1l.rip." + i)));
      p.appendChild(l);
      p.appendChild(bottone(Lingue.html("g1l.avanti"), chiudi));
    }, { chiudibile: false, aiuto: false });
  }
  var VERO_INVENTATO = [["g1l.vi.1", false], ["g1l.vi.2", true], ["g1l.vi.3", true], ["g1l.vi.4", true], ["g1l.vi.5", false], ["g1l.vi.6", true], ["g1l.vi.7", false]];
  async function veroInventato(m) {
    var indice = 0, giuste = 0;
    await m.pannello(function (p, chiudi) {
      function disegna() {
        p.innerHTML = "";
        p.appendChild(crea("h2", Lingue.html("g1l.vi.titolo") + ' <small style="color:#c8c4dc">' + Math.min(indice + 1, VERO_INVENTATO.length) + "/" + VERO_INVENTATO.length + "</small>"));
        if (indice >= VERO_INVENTATO.length) {
          p.appendChild(crea("p", Lingue.html("g1l.vi.fine", { giuste: String(giuste), totale: String(VERO_INVENTATO.length) })));
          p.appendChild(bottone(Lingue.html("g1l.avanti"), chiudi));
          return;
        }
        var d = VERO_INVENTATO[indice];
        p.appendChild(crea("p", '<b style="font-size:1.2em">' + Lingue.html(d[0]) + "</b>"));
        var riga = crea("div", ""); riga.style.display = "flex"; riga.style.gap = "16px";
        [[true, "g1l.vi.vero"], [false, "g1l.vi.inventato"]].forEach(function (s) {
          riga.appendChild(bottone(Lingue.html(s[1]), function () {
            var ok = s[0] === d[1];
            if (ok) giuste++;
            Suoni.effetto(ok ? "prendi" : "errore");
            p.querySelectorAll("button").forEach(function (b) { b.disabled = true; });
            var e = crea("div", Lingue.html(ok ? "g1l.vi.ok" : "g1l.vi.no") + " " + Lingue.html(d[0] + ".spiega"));
            e.className = "pn-losapevi";
            p.appendChild(e);
            p.appendChild(bottone(Lingue.html("g1l.avanti"), function () { indice++; disegna(); }));
          }));
        });
        p.appendChild(riga);
      }
      disegna();
    }, { chiudibile: false, aiuto: false });
  }

  /* ---------- aiuti a gradini ---------- */
  Cer3.aiutiStanze.londra = function (m) {
    if (!m.flag("spicchiInRuota")) return { id: "l-ruota", chi: "penna", chiavi: ["g1l.aiuto.ruota1", "g1l.aiuto.ruota2", "g1l.aiuto.ruota3"] };
    if (!m.flag("lFatto")) return { id: "l-lez", chi: "penna", chiavi: ["g1l.aiuto.lez1", "g1l.aiuto.lez2"] };
    return { id: "l-fine", chi: "penna", chiavi: ["g1l.aiuto.fine1"] };
  };
})();
