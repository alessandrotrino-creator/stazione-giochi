/* =====================================================================
   MOTORE della Stazione dei giochi: comune a tutti i giochi.
   Scena, camminata, ventaglio di azioni, inventario e combinazioni,
   dialoghi e scelte, scenette, aiuti a gradini, quaderno, rileggi,
   cambio lingua in ogni momento, salvataggio automatico.

   Un capitolo si descrive con Motore.capitolo({...}) in un file a parte
   (vedi giochi/scienze/capitoli/00-prova/stanza.js).
   ===================================================================== */
var Motore = (function () {
  var NS = "http://www.w3.org/2000/svg";
  var LARGO = 1600, ALTO = 900;

  var cap = null;            // il capitolo in corso
  var stato = null;          // ciò che viene salvato
  var imp = Salvataggio.impostazioni();
  var classe = "prova";
  var D = {};                // riferimenti agli elementi della pagina
  var scala = 1;
  var attori = {};
  var occupato = false;      // vero durante scenette e dialoghi: il giocatore non può dare comandi
  var selezionato = null;    // oggetto dell'inventario "in mano"
  var attesa = null;         // funzione che fa avanzare la battuta in corso
  var rigaCorrente = null, sceltaCorrente = null, pannelloCorrente = null;
  var livelloAiuto = {};
  var ultimoAvanzamento = 0;

  /* ---------------- utilità ---------------- */
  function el(tag, classe, html) {
    var e = document.createElement(tag);
    if (classe) e.className = classe;
    if (html != null) e.innerHTML = html;
    return e;
  }
  function T(k, p) { return Lingue.html(k, p); }
  function aspetta(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }
  function nomeOggetto(id) { var o = cap.oggetti[id]; return o ? Lingue.semplice(o.nome) : id; }
  function protagonista() { return attori[cap.protagonista]; }

  var ICONE = {
    lingua: '<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="18" fill="#7fc8ff" stroke="#140d1f" stroke-width="3"/><path d="M6 24h36M24 6c-8 9-8 27 0 36M24 6c8 9 8 27 0 36M10 14h28M10 34h28" fill="none" stroke="#140d1f" stroke-width="2.5"/></svg>',
    aiuto: '<svg viewBox="0 0 48 48"><path d="M24 6c-8 0-13 6-13 12 0 5 3 8 5 10 2 2 2 4 2 6h12c0-2 0-4 2-6 2-2 5-5 5-10 0-6-5-12-13-12z" fill="#ffd36b" stroke="#140d1f" stroke-width="3"/><path d="M18 38h12M19 43h10" stroke="#140d1f" stroke-width="3" stroke-linecap="round"/></svg>',
    quaderno: '<svg viewBox="0 0 48 48"><rect x="10" y="6" width="28" height="36" rx="3" fill="#c0504d" stroke="#140d1f" stroke-width="3"/><path d="M16 6v36" stroke="#140d1f" stroke-width="3"/><path d="M21 15h12M21 21h12M21 27h8" stroke="#ffe8c8" stroke-width="2.5"/></svg>',
    rileggi: '<svg viewBox="0 0 48 48"><path d="M6 10h36v22H20l-9 8v-8H6z" fill="#fff8e6" stroke="#140d1f" stroke-width="3" stroke-linejoin="round"/><path d="M30 21a7 7 0 1 1-3-6m3-3v5h-5" fill="none" stroke="#140d1f" stroke-width="2.5" stroke-linecap="round"/></svg>',
    lente: '<svg viewBox="0 0 48 48"><circle cx="20" cy="20" r="12" fill="#bfe6ff" stroke="#140d1f" stroke-width="3"/><path d="M29 29l12 12" stroke="#140d1f" stroke-width="6" stroke-linecap="round"/><path d="M14 16a7 7 0 0 1 6-5" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round"/></svg>',
    audioSi: '<svg viewBox="0 0 48 48"><path d="M8 18h8l10-8v28l-10-8H8z" fill="#fff8e6" stroke="#140d1f" stroke-width="3" stroke-linejoin="round"/><path d="M32 16c4 4 4 12 0 16M36 11c7 7 7 19 0 26" fill="none" stroke="#140d1f" stroke-width="3" stroke-linecap="round"/></svg>',
    audioNo: '<svg viewBox="0 0 48 48"><path d="M8 18h8l10-8v28l-10-8H8z" fill="#fff8e6" stroke="#140d1f" stroke-width="3" stroke-linejoin="round"/><path d="M32 18l10 12M42 18L32 30" stroke="#d84a3a" stroke-width="4" stroke-linecap="round"/></svg>',
    impostazioni: '<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="8" fill="#fff8e6" stroke="#140d1f" stroke-width="3"/><path d="M24 4v8M24 36v8M4 24h8M36 24h8M10 10l6 6M32 32l6 6M38 10l-6 6M16 32l-6 6" stroke="#140d1f" stroke-width="5" stroke-linecap="round"/></svg>',
    zaino: '<svg viewBox="0 0 48 48"><path d="M14 16c0-6 4-10 10-10s10 4 10 10" fill="none" stroke="#140d1f" stroke-width="3"/><rect x="9" y="14" width="30" height="30" rx="8" fill="#e0632f" stroke="#140d1f" stroke-width="3"/><rect x="15" y="28" width="18" height="11" rx="3" fill="#c24c22" stroke="#140d1f" stroke-width="2.5"/></svg>',
    guarda: '<svg viewBox="0 0 48 48"><path d="M4 24c6-10 13-14 20-14s14 4 20 14c-6 10-13 14-20 14S10 34 4 24z" fill="#fff" stroke="#140d1f" stroke-width="3"/><circle cx="24" cy="24" r="8" fill="#3a6a8a" stroke="#140d1f" stroke-width="2.5"/><circle cx="24" cy="24" r="3.5" fill="#140d1f"/></svg>',
    usa: '<svg viewBox="0 0 48 48"><path d="M16 26V12a3 3 0 0 1 6 0v10V9a3 3 0 0 1 6 0v13V11a3 3 0 0 1 6 0v13-6a3 3 0 0 1 6 0v12c0 8-6 14-14 14-5 0-8-2-11-6l-7-9a3 3 0 0 1 5-4z" fill="#f2c69a" stroke="#140d1f" stroke-width="2.5" stroke-linejoin="round"/></svg>',
    parla: '<svg viewBox="0 0 48 48"><path d="M6 10h36v22H22l-10 8v-8H6z" fill="#fff8e6" stroke="#140d1f" stroke-width="3" stroke-linejoin="round"/><circle cx="16" cy="21" r="2.5" fill="#140d1f"/><circle cx="24" cy="21" r="2.5" fill="#140d1f"/><circle cx="32" cy="21" r="2.5" fill="#140d1f"/></svg>'
  };

  /* ---------------- costruzione della pagina ---------------- */
  function costruisci() {
    D.contenitore = el("div", "contenitore");
    D.palco = el("div", "palco");
    D.sfondo = el("div", "l-sfondo");
    D.elementi = el("div", "l-elementi");
    D.attori = el("div", "l-attori");
    D.effetti = el("div", "l-effetti");
    D.hotspot = document.createElementNS(NS, "svg");
    D.hotspot.setAttribute("class", "l-hotspot");
    D.hotspot.setAttribute("viewBox", "0 0 " + LARGO + " " + ALTO);
    D.ui = el("div", "ui");
    D.ui.innerHTML =
      '<div class="riga-azione"></div><div class="biglietto"></div><div class="clessidra vuota"></div>' +
      '<div class="barra-alta">' +
        tasto("lingua", "ui.lingua") + tasto("aiuto", "ui.aiuto") + tasto("quaderno", "ui.quaderno") +
        tasto("rileggi", "ui.rileggi") + tasto("lente", "ui.lente") + tasto("audio", "ui.audio") + tasto("impostazioni", "ui.impostazioni") +
      "</div>" +
      '<div class="bozza"></div>' +
      '<button class="tasto zaino" data-azione="zaino"><span class="icona">' + ICONE.zaino + '</span><span class="etich" data-t="ui.zaino"></span></button>' +
      '<div class="inventario"><div class="inv-oggetti"></div></div>' +
      '<div class="ventaglio"></div>' +
      '<div class="sottotitoli"><div class="st-righe"></div><div class="st-tocca" data-t="ui.tocca"></div></div>' +
      '<div class="scelte"></div>' +
      '<div class="velo"></div><div class="pannello" role="dialog"></div>' +
      '<div class="cursore"></div><div class="avviso"></div>';
    D.palco.appendChild(D.sfondo);
    D.palco.appendChild(D.elementi);
    D.palco.appendChild(D.attori);
    D.palco.appendChild(D.effetti);
    D.palco.appendChild(D.hotspot);
    D.palco.appendChild(D.ui);
    D.contenitore.appendChild(D.palco);
    document.body.appendChild(D.contenitore);
    ["riga-azione", "biglietto", "clessidra", "bozza", "inventario", "inv-oggetti", "ventaglio", "sottotitoli", "st-righe", "scelte", "velo", "pannello", "cursore", "avviso"]
      .forEach(function (c) { D[c] = D.ui.querySelector("." + c); });

    D.palco.addEventListener("click", clicPalco);
    D.palco.addEventListener("pointermove", muoviCursore);
    D.palco.addEventListener("contextmenu", function (e) { e.preventDefault(); deseleziona(); });
    D.hotspot.addEventListener("mouseover", function (e) { var h = trovaHotspot(e.target); if (h) mostraRigaAzione(h); });
    D.hotspot.addEventListener("mouseout", function () { mostraRigaAzione(null); });
    D.ui.querySelectorAll("[data-azione]").forEach(function (b) {
      b.addEventListener("click", function (e) { e.stopPropagation(); azioneTasto(b.getAttribute("data-azione")); });
    });
    D.velo.addEventListener("click", function (e) { e.stopPropagation(); if (pannelloCorrente && pannelloCorrente.chiudibile !== false) chiudiPannello(); });
    D.pannello.addEventListener("click", function (e) { e.stopPropagation(); });
    D.scelte.addEventListener("click", function (e) { e.stopPropagation(); });
    window.addEventListener("resize", adatta);
    window.addEventListener("keydown", tastiera);
    adatta();
  }

  function tasto(azione, chiave) {
    return '<button class="tasto" data-azione="' + azione + '"><span class="icona">' + (ICONE[azione] || ICONE.audioSi) +
      '</span><span class="etich" data-t="' + chiave + '"></span></button>';
  }

  /* il palco 1600×900 si adatta a qualunque schermo, senza deformarsi */
  function adatta() {
    var W = window.innerWidth, H = window.innerHeight;
    scala = Math.min(W / LARGO, H / ALTO);
    D.palco.style.transform = "translate(" + (W - LARGO * scala) / 2 + "px," + (H - ALTO * scala) / 2 + "px) scale(" + scala + ")";
  }

  function puntoPalco(e) {
    var r = D.palco.getBoundingClientRect();
    return { x: (e.clientX - r.left) / scala, y: (e.clientY - r.top) / scala };
  }

  /* ---------------- stanza: sfondo, elementi, punti interattivi, attori ---------------- */
  function stanza() { return cap.stanze[stato.stanza]; }

  function disegnaStanza() {
    var s = stanza();
    Grafica.disegnaSfondo(s.sfondo, D.sfondo);
    D.attori.innerHTML = ""; attori = {};
    (s.attori || []).forEach(function (a) { creaAttore(a); });
    var p = protagonista();
    if (p && stato.posizione) {
      p.x = stato.posizione.x; p.y = stato.posizione.y; p.dir = stato.posizione.dir || 1;
      impostaVista(p, stato.posizione.vista || "fronte"); posiziona(p);
    }
    aggiornaScena();
  }

  /* cambio di stanza con dissolvenza; "arrivo" = [x, y, dir] dove compare la protagonista */
  function vaiStanza(nome, arrivo) {
    if (!cap.stanze[nome]) return Promise.resolve();
    D.palco.classList.add("dissolvenza");
    return aspetta(450).then(function () {
      stato.stanza = nome;
      stato.posizione = arrivo ? { x: arrivo[0], y: arrivo[1], dir: arrivo[2] || 1, vista: arrivo[3] || "fronte" } : null;
      disegnaStanza();
      nascondiVentaglio(); mostraRigaAzione(null);
      D.palco.classList.remove("dissolvenza");
      return aspetta(350);
    }).then(function () {
      var s = stanza();
      if (s.entrata) return eseguiGestore(s.entrata, {});
    });
  }

  function aggiornaScena() {
    var s = stanza();
    // elementi della scena (oggetti appoggiati, etichette con testo traducibile)
    D.elementi.innerHTML = "";
    (s.elementi || []).forEach(function (e) {
      if (e.visibile && !e.visibile(api)) return;
      var d = el("div", "elemento " + (e.classe || "") + (e.stato ? " " + (e.stato(api) || "") : ""));
      d.setAttribute("data-id", e.id);
      // un ritratto o una statua che parla: quando "dice" qualcosa, la sua bocca si muove
      if (e.personaggio) d.setAttribute("data-personaggio", e.personaggio);
      d.style.left = e.x + "px"; d.style.top = e.y + "px";
      if (e.larghezza) d.style.width = e.larghezza + "px";
      if (e.altezza) d.style.height = e.altezza + "px";
      if (e.rotazione) d.style.transform = "rotate(" + e.rotazione + "deg)";
      if (e.testo) { d.innerHTML = T(e.testo, e.param && e.param(api)); d.setAttribute("dir", Lingue.info().dir); }
      else d.innerHTML = e.svg;
      D.elementi.appendChild(d);
    });
    // punti interattivi
    D.hotspot.innerHTML = "";
    // ordine dei punti: sotto i grandi (porto, fiume…), sopra i piccoli; in cima i personaggi.
    // Un personaggio fermo (fisso) si clicca sulla sua vera sagoma, non su un rettangolo.
    var punti = [];
    (s.hotspot || []).forEach(function (h) {
      if (h.presente && !h.presente(api)) return;
      var a = h.sagoma === false ? null : attori[typeof h.sagoma === "string" ? h.sagoma : h.id];
      if (a && !a.def.fisso && !h.sagoma) a = null;
      if (a && a.el.style.display === "none") a = null;
      var f;
      if (a) {
        f = document.createElementNS(NS, "g");
        f.setAttribute("class", "hs hs-sagoma");
        var p0 = a.def.piedi || [0, 0], sc = a.def.fisso ? 1 : scalaProfondita(a.y);
        f.setAttribute("transform", "translate(" + a.x + " " + a.y + ") scale(" + a.k * sc * a.dir + " " + a.k * sc + ") translate(" + -p0[0] + " " + -p0[1] + ")");
        f.innerHTML = (a.svg && a.svgs[a.vista] ? a.svgs[a.vista] : a.svg).innerHTML;
      } else {
        f = document.createElementNS(NS, "path");
        f.setAttribute("d", formaDi(h));
        f.setAttribute("class", "hs");
      }
      f.setAttribute("data-id", h.id);
      punti.push({ el: f, livello: h.livello != null ? h.livello : a ? 1e9 : -areaForma(formaDi(h)) });
    });
    punti.sort(function (p, q) { return p.livello - q.livello; });
    punti.forEach(function (p) { D.hotspot.appendChild(p.el); });
    // attori presenti o no (per esempio Gamberto, dopo che è saltato nel barattolo) e aggiornamenti propri
    Object.keys(attori).forEach(function (id) {
      var a = attori[id];
      a.el.style.display = a.def.visibile && !a.def.visibile(api) ? "none" : "";
      if (a.def.aggiorna) a.def.aggiorna(a, api);
    });
  }

  /* la forma può dipendere dalla partita (per esempio un oggetto che si sposta) */
  function formaDi(h) { return typeof h.forma === "function" ? h.forma(api) : h.forma; }

  /* area approssimata di una forma (somma dei rettangoli che contengono i suoi pezzi): serve solo per l'ordine */
  function areaForma(d) {
    var tot = 0;
    String(d || "").split(/(?=[Mm])/).forEach(function (pezzo) {
      var x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity, x = 0, y = 0;
      // forme scritte con M, L, H, V (le più comuni); per le altre lettere si leggono le coppie di numeri
      pezzo.replace(/([A-Za-z])([^A-Za-z]*)/g, function (_, c, num) {
        var v = (num.match(/-?\d*\.?\d+/g) || []).map(Number);
        if (c === "H") v.forEach(function (q) { x = q; x0 = Math.min(x0, x); x1 = Math.max(x1, x); });
        else if (c === "V") v.forEach(function (q) { y = q; y0 = Math.min(y0, y); y1 = Math.max(y1, y); });
        else for (var i = 0; i + 1 < v.length; i += 2) { x = v[i]; y = v[i + 1]; x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y); }
        if (c === "H" || c === "V") { x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y); }
      });
      if (x1 > x0 && y1 > y0) tot += (x1 - x0) * (y1 - y0);
    });
    return tot;
  }

  function trovaHotspot(t) {
    var p = t && t.closest ? t.closest(".hs") : null;
    if (!p) return null;
    var id = p.getAttribute("data-id");
    return (stanza().hotspot || []).filter(function (h) { return h.id === id; })[0] || null;
  }

  function creaAttore(def) {
    var a = { def: def, x: def.x, y: def.y, dir: def.dir || 1 };
    a.el = el("div", "attore");
    a.corpo = el("div", "corpo");
    var vb = def.vista, k = def.altezza / vb[3];
    a.k = k;
    if (def.alone) {
      a.alone = el("div", "alone");
      a.corpo.appendChild(a.alone);
    }
    // una vista per direzione: "fronte" (tre quarti), "profilo" (guarda a destra), "schiena"
    var viste = def.viste || { fronte: def.simbolo };
    a.svgs = {};
    Object.keys(viste).forEach(function (nome) {
      var s = document.createElementNS(NS, "svg");
      s.setAttribute("class", "vista vista-" + nome);
      s.setAttribute("viewBox", vb.join(" "));
      s.setAttribute("width", vb[2] * k);
      s.setAttribute("height", vb[3] * k);
      s.style.left = (vb[0] - def.piedi[0]) * k + "px";
      s.style.top = (vb[1] - def.piedi[1]) * k + "px";
      // il disegno viene copiato dentro l'attore (non solo richiamato), così gambe e braccia si possono animare
      var simbolo = document.getElementById(viste[nome]);
      s.innerHTML = simbolo ? simbolo.innerHTML
        : '<use href="#' + viste[nome] + '" x="' + vb[0] + '" y="' + vb[1] + '" width="' + vb[2] + '" height="' + vb[3] + '"/>';
      a.corpo.appendChild(s);
      a.svgs[nome] = s;
    });
    a.svg = a.svgs.fronte || a.svgs[Object.keys(viste)[0]];
    impostaVista(a, "fronte");
    a.el.appendChild(a.corpo);
    D.attori.appendChild(a.el);
    attori[def.id] = a;
    posiziona(a);
    return a;
  }

  function impostaVista(a, nome) {
    if (!a.svgs[nome]) nome = a.svgs.fronte ? "fronte" : Object.keys(a.svgs)[0];
    Object.keys(a.svgs).forEach(function (k) { a.svgs[k].style.display = k === nome ? "" : "none"; });
    a.vista = nome;
  }

  function scalaProfondita(y) {
    var sc = stanza().scala;
    if (!sc) return 1;
    var t = Math.max(0, Math.min(1, (y - sc.lontano.y) / (sc.vicino.y - sc.lontano.y)));
    return sc.lontano.s + (sc.vicino.s - sc.lontano.s) * t;
  }

  function posiziona(a) {
    var s = a.def.fisso ? 1 : scalaProfondita(a.y);
    a.el.style.transform = "translate(" + a.x + "px," + a.y + "px)";
    a.el.style.zIndex = Math.round(a.y);
    a.corpo.style.transform = "scale(" + s * a.dir + "," + s + ")";
  }

  /* camminata fino a un punto del pavimento */
  function cammina(id, x, y) {
    var a = typeof id === "string" ? attori[id] : id;
    if (!a) return Promise.resolve();
    var pav = stanza().pavimento;
    x = Math.max(pav.xMin, Math.min(pav.xMax, x));
    y = Math.max(pav.yMin, Math.min(pav.yMax, y));
    if (a.camminata) a.camminata.ferma();
    return new Promise(function (fine) {
      var x0 = a.x, y0 = a.y, dist = Math.hypot(x - x0, (y - y0) * 1.6);
      if (dist < 4) { fine(); return; }
      // più lontano = più piccolo = più lento sullo schermo: così il passo resta sincronizzato e i piedi non "scivolano"
      var s = a.def.fisso ? 1 : (scalaProfondita(y0) + scalaProfondita(y)) / 2;
      var durata = dist / ((a.def.velocita || 340) * s) * 1000, t0 = performance.now(), fermo = false;
      if (Math.abs(x - x0) > 3) a.dir = x > x0 ? 1 : -1;
      // la vista dipende dalla direzione: verso il fondo = di schiena, verso di noi = tre quarti, di lato = profilo
      if (Math.abs(y - y0) * 1.3 > Math.abs(x - x0)) impostaVista(a, y < y0 ? "schiena" : "fronte");
      else impostaVista(a, "profilo");
      a.corpo.classList.add("cammina");
      a.camminata = { ferma: function () { fermo = true; a.corpo.classList.remove("cammina"); fine(); } };
      (function passo(t) {
        if (fermo) return;
        var f = Math.min(1, (t - t0) / durata);
        a.x = x0 + (x - x0) * f; a.y = y0 + (y - y0) * f;
        posiziona(a);
        if (f < 1) requestAnimationFrame(passo);
        else { a.camminata = null; a.corpo.classList.remove("cammina"); fine(); }
      })(t0);
    });
  }

  function vaiVerso(h) {
    var p = protagonista();
    if (!p || !h.arrivo) return Promise.resolve();
    return cammina(p, h.arrivo[0], h.arrivo[1]).then(function () {
      // arrivata, si gira verso l'oggetto: di lato se è accanto (verso), altrimenti di schiena verso la parete
      if (h.verso) { p.dir = h.verso; impostaVista(p, "profilo"); }
      else impostaVista(p, h.vista || "schiena");
      posiziona(p);
    });
  }

  /* ---------------- clic sul palco ---------------- */
  function clicPalco(e) {
    if (pannelloCorrente) return;
    if (attesa) { avanza(); return; }
    if (sceltaCorrente || occupato) return;
    if (e.target.closest(".inventario, .barra-alta, .zaino, .scelte, .ventaglio")) return;
    var h = trovaHotspot(e.target), pt = puntoPalco(e);
    nascondiVentaglio();
    if (h && h.uscita && !selezionato) {
      // porte e passaggi: un tocco e si va (si cammina fino alla porta, poi si cambia stanza)
      var u = h.uscita;
      esegui(function () {
        return vaiVerso(h).then(function () {
          if (u.se && !u.se(api)) return eseguiGestore(u.chiusa || "gen.usa.1", {});
          return vaiStanza(u.stanza, u.arrivo);
        });
      });
      return;
    }
    if (h) {
      if (selezionato) {
        var ogg = selezionato;
        deseleziona();
        esegui(function () { return vaiVerso(h).then(function () { return gestisci(h, "con", ogg); }); });
      } else mostraVentaglio(h, pt);
      return;
    }
    // clic sul pavimento o sullo sfondo: si cammina
    var p = protagonista();
    if (p) cammina(p, pt.x, pt.y).then(salva);
  }

  function mostraVentaglio(h, pt) {
    var v = D.ventaglio, x = Math.max(210, Math.min(LARGO - 210, pt.x)), y = Math.max(240, Math.min(ALTO - 60, pt.y));
    v.innerHTML = '<div class="vt-nome">' + T(h.nome) + "</div>";
    [["guarda", -140, -40], ["usa", 0, -110], ["parla", 140, -40]].forEach(function (d) {
      var b = el("button", "vt-tasto", '<span class="icona">' + ICONE[d[0]] + '</span><span class="etich">' + T("ui." + d[0]) + "</span>");
      b.style.left = d[1] + "px"; b.style.top = d[2] + "px";
      b.addEventListener("click", function (e) {
        e.stopPropagation(); nascondiVentaglio();
        esegui(function () { return vaiVerso(h).then(function () { return gestisci(h, d[0]); }); });
      });
      v.appendChild(b);
    });
    v.style.left = x + "px"; v.style.top = y + "px";
    v.classList.add("aperto");
    v.ventaglioDi = h;
  }
  function nascondiVentaglio() { D.ventaglio.classList.remove("aperto"); D.ventaglio.ventaglioDi = null; }

  function mostraRigaAzione(h) {
    var r = D["riga-azione"];
    if (selezionato) {
      r.innerHTML = T("ui.usaCon", { ogg: nomeOggetto(selezionato), cosa: h ? Lingue.semplice(h.nome) : "…" });
    } else r.innerHTML = h ? T(h.nome) : "";
    r.classList.toggle("vuota", !r.innerHTML);
  }

  /* cosa succede con un verbo o con un oggetto */
  var contatoreGenerico = 0;
  function gestisci(h, verbo, ogg) {
    var gestore;
    if (verbo === "con") {
      gestore = (h.con && h.con[ogg]) || (cap.oggetti[ogg] && cap.oggetti[ogg].suAltro) || h.conAltro;
      if (!gestore) gestore = "gen.oggetto." + (1 + (contatoreGenerico++ % 3));
    } else {
      gestore = h[verbo];
      if (!gestore) gestore = "gen." + verbo + "." + (1 + (contatoreGenerico++ % 3));
    }
    return eseguiGestore(gestore, { hotspot: h, oggetto: ogg });
  }
  function eseguiGestore(g, extra) {
    if (typeof g === "string") return api.pensa(g, extra && extra.oggetto ? { ogg: nomeOggetto(extra.oggetto) } : null);
    return Promise.resolve(g(api, extra)).then(function (r) {
      if (typeof r === "string") return api.pensa(r, extra && extra.oggetto ? { ogg: nomeOggetto(extra.oggetto) } : null);
    });
  }

  /* esegue una sequenza (scenetta, dialogo) bloccando i comandi; poi salva */
  function esegui(fn) {
    if (occupato) return Promise.resolve();
    occupato = true; D.ui.classList.add("occupato"); nascondiVentaglio();
    return Promise.resolve()
      .then(function () { return fn(api); })
      .catch(function (err) { if (window.console) console.error(err); })
      .then(function () {
        occupato = false; D.ui.classList.remove("occupato");
        aggiornaScena(); disegnaInventario(); salva();
      });
  }

  /* ---------------- dialoghi e sottotitoli ---------------- */
  function dice(chi, chiave, param) {
    return new Promise(function (fine) {
      rigaCorrente = { chi: chi, chiave: chiave, param: param || null };
      stato.storico.push(rigaCorrente);
      if (stato.storico.length > 40) stato.storico.shift();
      disegnaRiga();
      var voce = cap.personaggi[chi] && cap.personaggi[chi].voce;
      Suoni.borbotta(voce, Lingue.semplice(chiave, param));
      var a = attori[chi];
      if (a) a.corpo.classList.add("parla");
      var ritratto = D.elementi.querySelector('[data-personaggio="' + chi + '"]');
      if (ritratto) ritratto.classList.add("parla");
      var inizio = performance.now();
      attesa = function () {
        if (performance.now() - inizio < 280) return false;   // protezione dai clic frenetici
        attesa = null; rigaCorrente = null;
        if (a) a.corpo.classList.remove("parla");
        var r2 = D.elementi.querySelector('[data-personaggio="' + chi + '"]');
        if (r2) r2.classList.remove("parla");
        D.sottotitoli.classList.remove("aperti");
        fine();
        return true;
      };
    });
  }

  function disegnaRiga() {
    var r = rigaCorrente;
    if (!r) { D.sottotitoli.classList.remove("aperti"); return; }
    var pers = cap.personaggi[r.chi] || {}, lingua = Lingue.attiva(), inf = Lingue.info();
    var nome = pers.nome ? T(pers.nome) : "";
    var html = '<div class="st-riga" dir="' + inf.dir + '" lang="' + lingua + '"><b style="color:' + (pers.colore || "#ffd36b") + '">' +
      nome + '</b><span class="st-sep">: </span>' + Lingue.html(r.chiave, r.param) + "</div>";
    if (imp.doppi && lingua !== "it") {
      html = '<div class="st-riga st-it" dir="ltr" lang="it"><b style="color:' + (pers.colore || "#ffd36b") + '">' + Lingue.html(pers.nome, null, "it") +
        '</b>: ' + Lingue.html(r.chiave, r.param, "it") + "</div>" + html;
    }
    D["st-righe"].innerHTML = html;
    D.sottotitoli.classList.add("aperti");
  }

  function avanza() {
    if (attesa && attesa()) ultimoAvanzamento = performance.now();
  }

  /* opzioni: [{ testo: chiave, valore, param }]; il titolo può avere parametri (per esempio una frazione che cambia a ogni partita) */
  function scegli(opzioni, titolo, param) {
    return new Promise(function (fine) {
      sceltaCorrente = { opzioni: opzioni, titolo: titolo, param: param, fine: function (v) { sceltaCorrente = null; D.scelte.classList.remove("aperte"); fine(v); } };
      disegnaScelte();
    });
  }
  function disegnaScelte() {
    var s = sceltaCorrente;
    if (!s) { D.scelte.classList.remove("aperte"); return; }
    D.scelte.innerHTML = (s.titolo ? '<div class="sc-titolo">' + T(s.titolo, s.param) + "</div>" : "");
    D.scelte.setAttribute("dir", Lingue.info().dir);
    s.opzioni.forEach(function (o, i) {
      var b = el("button", "sc-opzione", '<span class="sc-n">' + (i + 1) + "</span>" + T(o.testo, o.param));
      b.addEventListener("click", function (e) { e.stopPropagation(); s.fine(o.valore); });
      D.scelte.appendChild(b);
    });
    D.scelte.classList.add("aperte");
  }

  /* ---------------- tastierino numerico (risposte da scrivere, senza scelta multipla) ----------------
     opz: { segno: tasto "−", virgola: tasto ",", pi: tasto "π" (valore esatto, es. "32π"), max: cifre massime (8),
           calcolatrice: una calcolatrice accanto, per i conti (il risultato va poi scritto nel tastierino) }.
     Restituisce il testo scritto ("−1763", "0,5"); il controllo lo fa il capitolo con api.numero(). */
  var tastierinoCorrente = null;
  function tastierino(titolo, param, opz) {
    opz = opz || {};
    return new Promise(function (fine) {
      var t = { testo: "" };
      t.premi = function (k) {
        if (k === "ok") {
          if (!/\d|π/.test(t.testo)) return;
          tastierinoCorrente = null; chiudiPannello(); Suoni.effetto("pagina"); fine(t.testo); return;
        }
        if (k === "canc") t.testo = t.testo.slice(0, -1);
        else if (t.testo.indexOf("π") >= 0) return;   // dopo π non si scrive altro (si può solo cancellare)
        else if (k === "π") { if (!opz.pi || /,$/.test(t.testo)) return; t.testo += "π"; }
        else if (k === "−") { if (!opz.segno) return; t.testo = t.testo.charAt(0) === "−" ? t.testo.slice(1) : "−" + t.testo; }
        else if (k === ",") { if (!opz.virgola || t.testo.indexOf(",") >= 0) return; t.testo += /\d$/.test(t.testo) ? "," : "0,"; }
        else if (/^\d$/.test(k)) { if (t.testo.replace(/\D/g, "").length >= (opz.max || 8)) return; t.testo += k; }
        else return;
        Suoni.effetto("clic");
        disegnaPannello();
      };
      tastierinoCorrente = t;
      var calc = opz.calcolatrice ? nuovaCalcolatrice() : null;
      apriPannello(function (p) {
        var box = el("div", "tn-box");
        box.appendChild(el("h2", "", T(titolo, param)));
        box.appendChild(el("div", "tn-schermo num", t.testo || "&nbsp;"));
        var g = el("div", "tn-tasti");
        ["7", "8", "9", "4", "5", "6", "1", "2", "3", opz.segno ? "−" : (opz.pi ? "π" : ""), "0", opz.virgola ? "," : ""].forEach(function (k) {
          var b = el("button", "tn-tasto" + (k ? "" : " vuoto"), k || "&nbsp;");
          if (k) b.addEventListener("click", function (e) { e.stopPropagation(); t.premi(k); });
          g.appendChild(b);
        });
        var c = el("button", "tn-tasto canc", "⌫");
        c.setAttribute("aria-label", Lingue.semplice("ui.cancella"));
        c.addEventListener("click", function (e) { e.stopPropagation(); t.premi("canc"); });
        var ok = el("button", "tn-tasto ok", T("ui.conferma"));
        ok.addEventListener("click", function (e) { e.stopPropagation(); t.premi("ok"); });
        g.appendChild(c); g.appendChild(ok);
        box.appendChild(g);
        // promemoria sempre visibile (per esempio anno di partenza e di arrivo), così non serve ricordarlo a memoria
        if (opz.promemoria) box.appendChild(el("div", "tn-promemoria", T(opz.promemoria, param)));
        // "Annulla": si esce senza rispondere (il capitolo riceve null)
        if (opz.annullabile) {
          var an = el("button", "pn-tasto tn-annulla", T("ui.annulla"));
          an.addEventListener("click", function (e) { e.stopPropagation(); tastierinoCorrente = null; chiudiPannello(); fine(null); });
          box.appendChild(an);
        }
        if (calc) { var due = el("div", "tn-con-calc"); due.appendChild(box); due.appendChild(calc.disegna()); p.appendChild(due); }
        else p.appendChild(box);
      }, { chiudibile: false, aiuto: true });
    });
  }
  /* "−1763" → −1763; "0,50" → 0,5 (così 0,50 e 0,5 valgono uguale) */
  /* ---------------- calcolatrice (accanto al tastierino, per i conti con 3,14) ----------------
     Virgola decimale, × e : come a scuola, x² e √. Fa solo i conti: il risultato lo scrive lo studente. */
  function nuovaCalcolatrice() {
    var c = { espr: "", risultato: null, box: null };
    function mostra() {
      if (!c.box) return;
      c.box.querySelector(".calc-espr").innerHTML = c.espr || "&nbsp;";
      c.box.querySelector(".calc-ris").innerHTML = c.risultato === null ? "&nbsp;" : "= " + c.risultato;
    }
    /* piccolo analizzatore: + − × : ( ) con le precedenze giuste, ² (al quadrato) e √ (radice quadrata) */
    function valuta(testo) {
      var t = testo.replace(/,/g, "."), i = 0;
      function guarda() { return t.charAt(i); }
      function numero() {
        var m = /^\d+(\.\d+)?|^\.\d+/.exec(t.slice(i));
        if (!m) throw new Error("numero");
        i += m[0].length; return parseFloat(m[0]);
      }
      function primario() {
        var v;
        if (guarda() === "(") { i++; v = somma(); if (guarda() !== ")") throw new Error(")"); i++; }
        else v = numero();
        while (guarda() === "²") { i++; v = v * v; }
        return v;
      }
      function fattore() {
        if (guarda() === "−") { i++; return -fattore(); }
        if (guarda() === "√") { i++; var r = fattore(); if (r < 0) throw new Error("√"); return Math.sqrt(r); }
        return primario();
      }
      function prodotto() {
        var v = fattore();
        while (guarda() === "×" || guarda() === ":") { var op = t.charAt(i++), w = fattore(); v = op === "×" ? v * w : v / w; }
        return v;
      }
      function somma() {
        var v = prodotto();
        while (guarda() === "+" || guarda() === "−") { var op = t.charAt(i++), w = prodotto(); v = op === "+" ? v + w : v - w; }
        return v;
      }
      var v = somma();
      if (i < t.length) throw new Error("resto");
      return v;
    }
    function calcola() {
      try {
        var v = valuta(c.espr);
        if (!isFinite(v)) { c.risultato = "?"; return; }
        c.risultato = String(Math.round(v * 1e6) / 1e6).replace("-", "−").replace(".", ",");
      } catch (e) { c.risultato = "?"; }
    }
    function premi(k) {
      if (k === "C") { c.espr = ""; c.risultato = null; }
      else if (k === "⌫") c.espr = c.espr.slice(0, -1);
      else if (k === "=") calcola();
      else if ((k === "√" || k === "x²") && c.risultato !== null && c.risultato !== "?") {
        // come nelle calcolatrici vere: √ e x² dopo «=» agiscono subito sul risultato
        c.espr = k === "√" ? "√" + c.risultato : "(" + c.risultato + ")²";
        calcola();
      }
      else {
        // dopo «=» un numero ricomincia da capo, un'operazione continua dal risultato
        if (c.risultato !== null && c.risultato !== "?") c.espr = /[+−×:²]/.test(k) ? c.risultato : "";
        c.risultato = null;
        c.espr += k === "x²" ? "²" : k;
      }
      Suoni.effetto("clic");
      mostra();
    }
    c.disegna = function () {
      var b = el("div", "calc");
      b.appendChild(el("div", "calc-titolo", "🧮 " + T("ui.calcolatrice")));
      var sc = el("div", "calc-schermo num");
      sc.appendChild(el("div", "calc-espr", "&nbsp;")); sc.appendChild(el("div", "calc-ris", "&nbsp;"));
      b.appendChild(sc);
      var g = el("div", "calc-tasti");
      ["C", "x²", "√", ":", "7", "8", "9", "×", "4", "5", "6", "−", "1", "2", "3", "+", "0", ",", "(", ")", "⌫", "="].forEach(function (k) {
        var t = el("button", "calc-tasto" + (/[+−×:=]/.test(k) ? " op" : "") + (k === "x²" || k === "√" ? " fn" : "") + (k === "C" ? " canc" : "") + (k === "=" ? " uguale" : ""), k);
        t.addEventListener("click", function (e) { e.stopPropagation(); premi(k); });
        g.appendChild(t);
      });
      b.appendChild(g);
      c.box = b; mostra();
      return b;
    };
    return c;
  }

  /* "32π" → 32 (il numero davanti a π; "π" da solo vale 1); se non c'è π restituisce null */
  function numeroPi(testo) {
    testo = String(testo);
    if (testo.indexOf("π") < 0) return null;
    var davanti = testo.replace("π", "");
    return davanti === "" ? 1 : numero(davanti);
  }
  function numero(testo) {
    var n = parseFloat(String(testo).replace("−", "-").replace(",", "."));
    return isNaN(n) ? null : n;
  }

  /* ---------------- inventario ---------------- */
  function disegnaInventario() {
    var box = D["inv-oggetti"];
    box.innerHTML = "";
    if (!stato.inventario.length) box.innerHTML = '<div class="inv-vuoto">' + T("ui.zainoVuoto") + "</div>";
    stato.inventario.forEach(function (id) {
      var o = cap.oggetti[id];
      var b = el("button", "inv-ogg" + (selezionato === id ? " scelto" : ""),
        Grafica.icona(o.icona) + '<span class="etich">' + T(o.nome) + "</span>");
      b.addEventListener("click", function (e) { e.stopPropagation(); clicOggetto(id); });
      box.appendChild(b);
    });
  }

  function clicOggetto(id) {
    if (occupato || attesa) return;
    if (selezionato && selezionato !== id) {
      var a = selezionato; deseleziona();
      esegui(function () { return combina(a, id); });
      return;
    }
    if (selezionato === id) { deseleziona(); return; }
    apriSchedaOggetto(id);
  }

  function combina(a, b) {
    var c = (cap.combinazioni || []).filter(function (x) { return (x.a === a && x.b === b) || (x.a === b && x.b === a); })[0];
    if (c) return eseguiGestore(c.fai, {});
    var o = cap.oggetti[a];
    var g = (o.conOggetto && o.conOggetto[b]) || (cap.oggetti[b].conOggetto && cap.oggetti[b].conOggetto[a]) || ("gen.combina." + (1 + (contatoreGenerico++ % 3)));
    return eseguiGestore(g, { oggetto: b });
  }

  function seleziona(id) {
    selezionato = id;
    D.cursore.innerHTML = Grafica.icona(cap.oggetti[id].icona);
    D.cursore.classList.add("attivo");
    disegnaInventario(); mostraRigaAzione(null);
  }
  function deseleziona() {
    selezionato = null;
    D.cursore.classList.remove("attivo");
    disegnaInventario(); mostraRigaAzione(null);
  }
  function muoviCursore(e) {
    if (!selezionato) return;
    var p = puntoPalco(e);
    D.cursore.style.transform = "translate(" + (p.x + 18) + "px," + (p.y + 18) + "px)";
  }

  /* ---------------- pannelli ---------------- */
  function apriPannello(costruttore, opz) {
    pannelloCorrente = { costruisci: costruttore, chiudibile: !opz || opz.chiudibile !== false, aiuto: !!(opz && opz.aiuto) };
    disegnaPannello();
    D.velo.classList.add("aperto"); D.pannello.classList.add("aperto");
  }
  function disegnaPannello() {
    if (!pannelloCorrente) return;
    D.pannello.setAttribute("dir", Lingue.info().dir);
    D.pannello.innerHTML = "";
    pannelloCorrente.costruisci(D.pannello);
    // nei pannelli-domanda (tastierino, valigie, scala…) c'è sempre il pulsante Aiuto: nessuno resta bloccato
    if (pannelloCorrente.aiuto && cap.aiuti) {
      var a = el("button", "pn-aiuto", "💡 " + T("ui.aiuto"));
      a.addEventListener("click", function (e) { e.stopPropagation(); chiediAiuto(); });
      D.pannello.insertBefore(a, D.pannello.firstChild);
    }
    if (pannelloCorrente.chiudibile) {
      var x = el("button", "pn-chiudi", T("ui.chiudi"));
      x.addEventListener("click", chiudiPannello);
      D.pannello.appendChild(x);
    }
  }
  /* un aiuto mostrato come nuvoletta sopra tutto (durante una domanda o una scelta): non interrompe niente */
  function nuvolaAiuto(chi, chiave, param) {
    var vecchia = D.palco.querySelector(".aiuto-nuvola");
    if (vecchia) vecchia.remove();
    var pers = cap.personaggi[chi] || {};
    var n = el("div", "aiuto-nuvola", "<b>💡 " + (pers.nome ? T(pers.nome) : "") + "</b> " + T(chiave, param));
    n.setAttribute("dir", Lingue.info().dir);
    n.addEventListener("click", function (e) { e.stopPropagation(); n.remove(); });
    D.palco.appendChild(n);
    Suoni.effetto("pagina");
  }
  function chiudiPannello() {
    var nv = D.palco.querySelector(".aiuto-nuvola"); if (nv) nv.remove();
    pannelloCorrente = null;
    D.velo.classList.remove("aperto"); D.pannello.classList.remove("aperto");
  }

  function pannelloLingue(p) {
    p.appendChild(el("h2", "", T("ui.scegliLingua")));
    var g = el("div", "pn-lingue");
    Lingue.elenco().forEach(function (l) {
      var b = el("button", "pn-lingua" + (l.codice === Lingue.attiva() ? " attiva" : ""), l.nome);
      b.setAttribute("dir", l.dir); b.setAttribute("lang", l.codice);
      b.style.fontFamily = l.font;
      b.addEventListener("click", function () { cambiaLingua(l.codice); });
      g.appendChild(b);
    });
    p.appendChild(g);
    var d = el("button", "pn-interruttore" + (imp.doppi ? " acceso" : ""), '<span class="pallino"></span>' + T("ui.doppi"));
    d.addEventListener("click", function () { imp.doppi = !imp.doppi; salvaImp(); disegnaRiga(); disegnaPannello(); });
    p.appendChild(d);
    if (Lingue.attiva() !== "it") p.appendChild(el("p", "pn-nota", T("ui.bozzaSpiegazione")));
  }

  function pannelloQuaderno(p) {
    p.appendChild(el("h2", "", T("ui.quaderno")));
    var fig = (stato.figurine || []).filter(function (id) { return cap.figurine && cap.figurine[id]; });
    if (!stato.quaderno.length && !fig.length) { p.appendChild(el("p", "", T("ui.quadernoVuoto"))); return; }
    if (fig.length) {
      p.appendChild(el("h3", "pn-sezione", T("ui.chiEra")));
      var g = el("div", "pn-figurine");
      fig.forEach(function (id) {
        var f = cap.figurine[id];
        var c = el("div", "figurina");
        c.appendChild(el("div", "fg-ritratto", f.ritratto.charAt(0) === "<" ? f.ritratto : '<svg viewBox="0 0 140 160"><use href="#' + f.ritratto + '"/></svg>'));
        c.appendChild(el("b", "fg-nome", T(f.nome)));
        c.appendChild(el("span", "fg-dati", '<bdi dir="ltr">' + T(f.anni) + "</bdi> · " + T(f.paese)));
        c.appendChild(el("p", "fg-testo", T(f.testo)));
        g.appendChild(c);
      });
      p.appendChild(g);
    }
    if (stato.quaderno.length) {
      p.appendChild(el("h3", "pn-sezione", T("ui.appunti")));
      var l = el("ul", "pn-elenco");
      stato.quaderno.forEach(function (k) { l.appendChild(el("li", "", T(k))); });
      p.appendChild(l);
    }
  }

  function pannelloRileggi(p) {
    p.appendChild(el("h2", "", T("ui.storico")));
    var righe = stato.storico.slice(-12);
    if (!righe.length) { p.appendChild(el("p", "", "…")); return; }
    var l = el("div", "pn-storico");
    righe.forEach(function (r) {
      var pers = cap.personaggi[r.chi] || {};
      l.appendChild(el("p", "", '<b style="color:' + (pers.colore || "#ffd36b") + '">' + T(pers.nome) + "</b>: " + Lingue.html(r.chiave, r.param)));
    });
    p.appendChild(l);
    setTimeout(function () { l.scrollTop = l.scrollHeight; }, 0);
  }

  function pannelloImpostazioni(p) {
    p.appendChild(el("h2", "", T("ui.impostazioni")));
    var st = el("button", "pn-tasto principale", "🚉 " + T("ui.stazione"));
    st.addEventListener("click", function () { salva(); Piattaforma.tornaAllaStazione(); });
    p.appendChild(st);
    var g = el("button", "pn-interruttore" + (imp.testoGrande ? " acceso" : ""), '<span class="pallino"></span>' + T("ui.testoGrande"));
    g.addEventListener("click", function () { imp.testoGrande = !imp.testoGrande; salvaImp(); applicaImpostazioni(); disegnaPannello(); });
    p.appendChild(g);
    var a = el("button", "pn-interruttore" + (!imp.muto ? " acceso" : ""), '<span class="pallino"></span>' + T("ui.audioAcceso"));
    a.addEventListener("click", function () { cambiaAudio(); disegnaPannello(); });
    p.appendChild(a);
    var r = el("button", "pn-pericolo", T("ui.ricomincia"));
    r.addEventListener("click", function () {
      apriPannello(function (q) {
        q.appendChild(el("h2", "", T("ui.confermaRicomincia")));
        var si = el("button", "pn-pericolo", T("ui.si")), no = el("button", "pn-tasto", T("ui.no"));
        si.addEventListener("click", function () { Salvataggio.azzera(cap.gioco, chiavePartita(), cap.id); location.reload(); });
        no.addEventListener("click", chiudiPannello);
        q.appendChild(si); q.appendChild(no);
      });
    });
    p.appendChild(r);
  }

  function apriSchedaOggetto(id) {
    var o = cap.oggetti[id];
    apriPannello(function (p) {
      var c = el("div", "pn-scheda");
      c.appendChild(el("div", "pn-scheda-icona", Grafica.icona(o.icona)));
      var t = el("div", "pn-scheda-testo");
      t.appendChild(el("h2", "", T(o.nome)));
      t.appendChild(el("p", "", T(o.descrizione)));
      if (o.loSapevi) t.appendChild(el("div", "pn-losapevi", "<b>" + T("ui.loSapevi") + "</b> " + T(o.loSapevi)));
      c.appendChild(t);
      p.appendChild(c);
      var u = el("button", "pn-tasto principale", T("ui.usaOggetto"));
      // l'oggetto resta "in mano" e lo zaino si richiude, così la scena (porte e oggetti in basso) è tutta libera;
      // per combinarlo con un altro oggetto basta riaprire lo zaino e toccare il secondo
      u.addEventListener("click", function () { chiudiPannello(); seleziona(id); D.ui.classList.remove("zaino-aperto"); });
      p.appendChild(u);
    });
  }

  function pannelloFine(titolo, testo) {
    return function (p) {
      p.appendChild(el("h2", "", T(titolo)));
      p.appendChild(el("div", "pn-fine", T(testo)));
      if (stato.codiceCasa) {
        var g = Casa.giocatore() || {};
        var c = el("div", "pn-codice");
        c.appendChild(el("b", "", T("ui.casa.codiceTitolo")));
        c.appendChild(el("span", "pn-codice-valore", stato.codiceCasa));
        c.appendChild(el("p", "", T("ui.casa.codiceTesto", { classe: Piattaforma.nomeClasse(classe), numero: String(g.numero || "") })));
        p.appendChild(c);
      }
      var st = el("button", "pn-tasto principale", "🚉 " + T("ui.stazione"));
      st.addEventListener("click", function () { Piattaforma.tornaAllaStazione(); });
      p.appendChild(st);
      var r = el("button", "pn-tasto", T("ui.ricomincia"));
      r.addEventListener("click", function () { Salvataggio.azzera(cap.gioco, chiavePartita(), cap.id); location.reload(); });
      p.appendChild(r);
    };
  }

  /* ---------------- tasti dell'interfaccia ---------------- */
  function azioneTasto(a) {
    if (a === "lingua") return apriPannello(pannelloLingue);
    if (a === "rileggi") return apriPannello(pannelloRileggi);
    if (a === "audio") return cambiaAudio();
    if (a === "impostazioni") return apriPannello(pannelloImpostazioni);
    if (a === "lente") return lente();
    if (a === "aiuto") return chiediAiuto();                      // l'aiuto si può chiedere sempre, anche durante una domanda
    if (attesa || occupato || sceltaCorrente) return;          // questi solo quando non c'è una scenetta
    if (a === "quaderno") return apriPannello(pannelloQuaderno);
    if (a === "zaino") { D.ui.classList.toggle("zaino-aperto"); disegnaInventario(); return; }
  }

  function lente() {
    D.hotspot.classList.add("lente");
    clearTimeout(lente.t);
    lente.t = setTimeout(function () { D.hotspot.classList.remove("lente"); }, 2200);
  }

  /* aiuti a gradini: se il capitolo ha indicato un aiuto per la domanda in corso (api.aiutoQui) vale quello,
     altrimenti quello della stanza. Durante una domanda o una scelta l'aiuto compare come nuvoletta.
     Ogni aiuto chiesto si conta: finisce nel riepilogo e nel codice di fine capitolo.
     Si contano anche per tipo: con un aiuto della domanda in corso (aiutoQui) è un aiuto «didattico»
     (stato.aiutiDomande), altrimenti è un aiuto per gli enigmi con gli oggetti della stanza (stato.aiutiOggetti). */
  var aiutoContesto = null;
  function chiediAiuto() {
    var a = aiutoContesto || (cap.aiuti && cap.aiuti(api));
    if (!a) return;
    var liv = livelloAiuto[a.id] || 0;
    livelloAiuto[a.id] = liv + 1;
    stato.aiuti = (stato.aiuti || 0) + 1;
    if (aiutoContesto) stato.aiutiDomande = (stato.aiutiDomande || 0) + 1;
    else stato.aiutiOggetti = (stato.aiutiOggetti || 0) + 1;
    var chiave = a.chiavi[Math.min(liv, a.chiavi.length - 1)];
    if (occupato || pannelloCorrente || sceltaCorrente || attesa) { nuvolaAiuto(a.chi, chiave, a.param); salva(); return; }
    esegui(function (m) { return m.dice(a.chi, chiave, a.param); });
  }

  function cambiaAudio() {
    imp.muto = !imp.muto; Suoni.muto(imp.muto); salvaImp();
    D.ui.querySelector('[data-azione="audio"] .icona').innerHTML = imp.muto ? ICONE.audioNo : ICONE.audioSi;
  }

  function tastiera(e) {
    if (tastierinoCorrente) {
      var k = e.key === "Enter" ? "ok" : e.key === "Backspace" ? "canc" : e.key === "-" ? "−" : e.key === "." ? "," : e.key === "p" || e.key === "P" ? "π" : e.key;
      if (/^(\d|ok|canc|−|,|π)$/.test(k)) { e.preventDefault(); tastierinoCorrente.premi(k); }
      return;
    }
    if (e.key === "Escape") { if (pannelloCorrente && pannelloCorrente.chiudibile) chiudiPannello(); else deseleziona(); nascondiVentaglio(); }
    if ((e.key === " " || e.key === "Enter") && attesa && !pannelloCorrente) { e.preventDefault(); avanza(); }
    if (sceltaCorrente && /^[1-9]$/.test(e.key)) {
      var o = sceltaCorrente.opzioni[+e.key - 1];
      if (o) sceltaCorrente.fine(o.valore);
    }
  }

  /* ---------------- lingua e impostazioni ---------------- */
  function cambiaLingua(c) {
    Lingue.imposta(c); imp.lingua = c; salvaImp();
    applicaLingua();
  }

  /* biglietto della classe e titolo della scheda del browser, nella lingua attiva */
  var intestazione = null;
  function aggiornaIntestazione() {
    if (!intestazione) return;
    D.biglietto.innerHTML = "🎫 " + Lingue.html("ui.classe", { nome: intestazione.nomeClasse });
    if (intestazione.titolo) document.title = Lingue.semplice(intestazione.titolo) + " · " + intestazione.nomeClasse;
  }

  function applicaLingua() {
    var inf = Lingue.info();
    D.ui.setAttribute("dir", inf.dir);
    D.ui.setAttribute("lang", inf.codice);
    document.documentElement.lang = inf.codice;
    D.palco.style.setProperty("--font", inf.font);
    D.ui.querySelectorAll("[data-t]").forEach(function (n) { n.innerHTML = T(n.getAttribute("data-t")); });
    D.bozza.innerHTML = inf.codice === "it" ? "" : T("ui.bozza");
    D.bozza.classList.toggle("vuota", inf.codice === "it");
    aggiornaIntestazione();
    disegnaRiga(); disegnaScelte(); disegnaPannello(); disegnaInventario(); aggiornaScena();
    if (D.ventaglio.ventaglioDi) nascondiVentaglio();
    mostraRigaAzione(null);
  }

  function applicaImpostazioni() {
    D.palco.classList.toggle("testo-grande", !!imp.testoGrande);
    Suoni.muto(imp.muto);
    var ic = D.ui.querySelector('[data-azione="audio"] .icona');
    if (ic) ic.innerHTML = imp.muto ? ICONE.audioNo : ICONE.audioSi;
  }
  function salvaImp() { Salvataggio.salvaImpostazioni(imp); }

  /* ---------------- salvataggio ---------------- */
  /* la partita salvata: in classe, una per biglietto di classe; A CASA, una per classe + numero di registro,
     così due studenti che usano lo stesso dispositivo non mescolano partita, errori, aiuti e codice */
  function chiavePartita() {
    if (window.Casa && Casa.attiva()) {
      var g = Casa.giocatore();
      if (g && g.classe === classe && g.numero) return classe + "-n" + g.numero;
    }
    return classe;
  }
  function salva() {
    if (!stato || occupato) return;
    var p = protagonista();
    if (p) stato.posizione = { x: Math.round(p.x), y: Math.round(p.y), dir: p.dir, vista: p.vista };
    if (Salvataggio.salva(cap.gioco, chiavePartita(), cap.id, stato)) {
      D.avviso.innerHTML = T("ui.salvato");
      D.avviso.classList.remove("mostra"); void D.avviso.offsetWidth; D.avviso.classList.add("mostra");
    }
  }

  function statoNuovo() {
    return { versione: cap.versione || 1, capitolo: cap.id, stanza: cap.stanzaIniziale, inventario: [], flag: {}, quaderno: [], storico: [], posizione: null };
  }

  /* ---------------- ciò che i capitoli possono usare ---------------- */
  var api = {
    dice: dice,
    pensa: function (k, p) { return dice(cap.protagonista, k, p); },
    scegli: scegli,
    tastierino: tastierino,
    /* aiuti specifici per la domanda in corso: { id, chi, chiavi: [dal più vago alla soluzione], param }; null per toglierli */
    aiutoQui: function (a) { aiutoContesto = a; },
    numero: numero,
    numeroPi: numeroPi,
    cammina: function (x, y, chi) { return cammina(chi || cap.protagonista, x, y); },
    guarda: function (dir, chi) { var a = attori[chi || cap.protagonista]; if (a) { a.dir = dir; impostaVista(a, "profilo"); posiziona(a); } },
    vista: function (nome, chi) { var a = attori[chi || cap.protagonista]; if (a) impostaVista(a, nome); },
    aspetta: aspetta,
    ha: function (id) { return stato.inventario.indexOf(id) >= 0; },
    prendi: function (id) {
      if (stato.inventario.indexOf(id) < 0) stato.inventario.push(id);
      Suoni.effetto("prendi"); disegnaInventario(); aggiornaScena();
      D.ui.classList.add("zaino-lampeggia"); setTimeout(function () { D.ui.classList.remove("zaino-lampeggia"); }, 1200);
    },
    togli: function (id) { stato.inventario = stato.inventario.filter(function (x) { return x !== id; }); disegnaInventario(); },
    flag: function (n, v) { if (v === undefined) return !!stato.flag[n]; stato.flag[n] = v; aggiornaScena(); },
    annota: function (k) {
      if (stato.quaderno.indexOf(k) < 0) { stato.quaderno.push(k); Suoni.effetto("pagina"); D.ui.classList.add("quaderno-lampeggia"); setTimeout(function () { D.ui.classList.remove("quaderno-lampeggia"); }, 1400); }
    },
    suono: function (n) { Suoni.effetto(n); },
    /* conta gli errori tipici (solo numeri, nessun nome): servono al riepilogo del docente */
    errore: function (k) { stato.errori = stato.errori || {}; stato.errori[k] = (stato.errori[k] || 0) + 1; },
    attore: function (id) { return attori[id]; },
    elemento: function (id) { return D.elementi.querySelector('[data-id="' + id + '"]'); },
    /* aggiunge un effetto (alone di luce, scintille...) nel livello degli effetti; si toglie da solo dopo "durata" ms */
    effetto: function (classe, x, y, durata) {
      var e = el("div", "effetto " + classe);
      e.style.left = x + "px"; e.style.top = y + "px";
      D.effetti.appendChild(e);
      if (durata) setTimeout(function () { e.remove(); }, durata);
      return e;
    },
    vaiStanza: function (nome, arrivo) { return vaiStanza(nome, arrivo); },
    /* figurine "Chi era?" dei personaggi storici incontrati (finiscono nel quaderno) */
    figurina: function (id) {
      stato.figurine = stato.figurine || [];
      if (stato.figurine.indexOf(id) < 0) {
        stato.figurine.push(id); Suoni.effetto("magia");
        D.ui.classList.add("quaderno-lampeggia"); setTimeout(function () { D.ui.classList.remove("quaderno-lampeggia"); }, 1400);
      }
    },
    /* cartello grande al centro (titolo del capitolo, "fermata intermedia"...) */
    cartello: function (titolo, sotto, durata) {
      var c = el("div", "cartello", "<b>" + T(titolo) + "</b>" + (sotto ? "<span>" + T(sotto) + "</span>" : ""));
      c.setAttribute("dir", Lingue.info().dir);
      D.ui.appendChild(c);
      return aspetta(durata || 2600).then(function () { c.classList.add("via"); return aspetta(500); }).then(function () { c.remove(); });
    },
    fine: function (titolo, testo) {
      var pr = Salvataggio.progressi(cap.gioco, classe);
      if (pr.completati.indexOf(cap.id) < 0) pr.completati.push(cap.id);
      /* a casa: il codice personale di completamento (numero di registro + errori + aiuti per gli oggetti
         + aiuti per le domande), calcolato una volta sola */
      var chi = Casa.attiva() && Casa.chi(cap.gioco, cap.id);
      if (chi && !stato.codiceCasa) {
        var errori = 0;
        for (var k in stato.errori || {}) errori += stato.errori[k];
        var domande = stato.aiutiDomande || 0;
        // partite iniziate prima del conteggio per tipo: gli aiuti di allora (non divisi) vanno con quelli per gli oggetti
        var oggetti = Math.max(stato.aiutiOggetti || 0, (stato.aiuti || 0) - domande);
        stato.codiceCasa = Casa.codice(chi, errori, oggetti, domande);
        salva();
      }
      if (stato.codiceCasa) { pr.codici = pr.codici || {}; pr.codici[cap.id] = stato.codiceCasa; }
      Salvataggio.salvaProgressi(cap.gioco, classe, pr);
      apriPannello(pannelloFine(titolo, testo), { chiudibile: false });
    },
    /* apre un pannello costruito dal capitolo (per esempio il ripasso finale) */
    pannello: function (costruttore, opz) { return new Promise(function (fatto) {
      var o = opz || {};
      if (o.chiudibile === false && o.aiuto !== false) o.aiuto = true;      // le domande hanno sempre il pulsante Aiuto
      apriPannello(function (p) { costruttore(p, function () { chiudiPannello(); fatto(); }); }, o);
    }); },
    get stato() { return stato; }
  };

  /* ---------------- avvio ---------------- */
  return {
    capitolo: function (def) { cap = def; cap.stanze = cap.stanze || {}; },
    /* le stanze di un capitolo possono stare in file separati */
    stanza: function (id, def) { cap.stanze[id] = def; },
    /* per arricchire una stanza già definita (per esempio il finale che torna nell'atrio) */
    stanzaDef: function (id) { return cap.stanze[id]; },
    /* ogni stanza può aggiungere al capitolo i suoi oggetti, personaggi, figurine, combinazioni */
    aggiungi: function (parte, voci) {
      if (Array.isArray(voci)) { cap[parte] = (cap[parte] || []).concat(voci); return; }
      cap[parte] = cap[parte] || {};
      for (var k in voci) cap[parte][k] = voci[k];
    },
    avvia: function (opz) {
      opz = opz || {};
      classe = opz.classe || "libera";
      // il nome del capitolo e del gioco li decide l'elenco della piattaforma (giochi/<materia>/gioco.js)
      if (opz.capitolo) cap.id = opz.capitolo;
      if (opz.gioco) cap.gioco = opz.gioco;
      costruisci();
      Lingue.imposta(imp.lingua || "it");
      var salvato = Salvataggio.carica(cap.gioco, chiavePartita(), cap.id);
      // a casa: una partita salvata con il sistema vecchio (solo classe) passa una volta sola al numero di registro
      if (!salvato && chiavePartita() !== classe) {
        salvato = Salvataggio.carica(cap.gioco, classe, cap.id);
        if (salvato) { Salvataggio.salva(cap.gioco, chiavePartita(), cap.id, salvato); Salvataggio.azzera(cap.gioco, classe, cap.id); }
      }
      stato = salvato && salvato.capitolo === cap.id && salvato.versione === (cap.versione || 1) ? salvato : statoNuovo();
      var pr = Salvataggio.progressi(cap.gioco, classe);
      pr.ultimo = cap.id; Salvataggio.salvaProgressi(cap.gioco, classe, pr);
      // biglietto della classe, sempre visibile: così non si gioca per sbaglio con il salvataggio di un'altra classe
      intestazione = { titolo: opz.titolo, nomeClasse: opz.nomeClasse || "" };
      aggiornaIntestazione();
      // clessidra indicativa (si accende dalla modalità docente): conta i minuti giocati, non punisce mai
      var durata = opz.durata || 30;
      setInterval(function () {
        if (document.hidden || pannelloCorrente) return;
        stato.tempo = (stato.tempo || 0) + 1;
        if (imp.timer) {
          var m = Math.floor(stato.tempo / 60);
          D.clessidra.innerHTML = "⏳ " + m + "′ / " + durata + "′";
          D.clessidra.classList.toggle("oltre", m >= durata);
        }
      }, 1000);
      D.clessidra.classList.toggle("vuota", !imp.timer);
      applicaImpostazioni();
      disegnaStanza();
      applicaLingua();
      disegnaInventario();
      if (!stato.flag._iniziato && cap.inizio) {
        esegui(function (m) { return Promise.resolve(cap.inizio(m)).then(function () { stato.flag._iniziato = true; }); });
      }
    },
    /* per le prove automatiche: lo stato attuale e le frasi mancanti */
    _debug: function () { return { stato: stato, occupato: occupato, attesa: !!attesa, mancanti: Lingue.mancanti(), scelta: sceltaCorrente }; },
    _avanza: avanza,
    _api: function () { return api; },
    _haStanza: function (n) { return !!(cap && cap.stanze[n]); }
  };
})();
