/* =====================================================================
   MODALITÀ CASA: parole d'ordine dei capitoli, codice personale di
   completamento, impronta che cambia da studente a studente.
   Si accende solo nel pacchetto per casa (modalita.js dice "casa");
   i calcoli servono anche alla modalità docente per la verifica.
   Avviso onesto: è un controllo di classe, non una cassaforte.
   ===================================================================== */
var Casa = (function () {
  var IMP = window.IMPOSTAZIONI_CASA || { segreto: "", parole: {} };
  var ALFA = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";      // niente 0, 1, O, I: non si confondono
  var CHIAVE = "stazione-dei-giochi:giocatore";

  function h32(s) {
    var h = 0x811c9dc5;
    for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193); }
    h ^= h >>> 16; h = Math.imul(h, 0x85ebca6b); h ^= h >>> 13; h = Math.imul(h, 0xc2b2ae35); h ^= h >>> 16;
    return h >>> 0;
  }
  /* chi = { gioco, capitolo, classe: "2A", numero: 5 } */
  function base(chi) {
    return IMP.segreto + "|" + chi.gioco + "/" + chi.capitolo + "|" + String(chi.classe).toUpperCase().replace(/\s/g, "") + "|" + (+chi.numero);
  }
  function lettere(n, quante) { var s = ""; for (var i = 0; i < quante; i++) { s = ALFA[n & 31] + s; n >>>= 5; } return s; }
  function numero(s) { var n = 0; for (var i = 0; i < s.length; i++) { var k = ALFA.indexOf(s[i]); if (k < 0) return -1; n = n * 32 + k; } return n; }

  /* Il codice di completamento (dal 10 novembre 2026): AAA-BBB-CC, 8 caratteri.
     - AAA dipende solo da studente e capitolo (si stampa nella tabella);
     - BBB-CC contiene, mascherati, errori, aiuti per gli oggetti e aiuti per le domande
       (da 0 a 99 ciascuno: 99 vuol dire «99 o più») e 5 bit di controllo:
       un codice copiato male passa solo 1 volta su 32.
     I vecchi codici AAA-BB (fino al 9 novembre 2026: errori e aiuti fino a 15, aiuti non divisi)
     si accettano ancora con verifica(). */
  var MAX = 99;
  function fissa(chi) { return lettere(h32(base(chi) + "|A"), 3); }
  function tra(n, max) { n = Math.floor(+n || 0); return n < 0 ? 0 : n > max ? max : n; }
  function codice(chi, errori, aiutiOggetti, aiutiDomande) {
    var b = base(chi), p = tra(errori, MAX) * 10000 + tra(aiutiOggetti, MAX) * 100 + tra(aiutiDomande, MAX);
    var v = ((p << 5) | (h32(b + "|K" + p) & 31)) ^ (h32(b + "|N") & 0x1ffffff);
    var s = lettere(v, 5);
    return fissa(chi) + "-" + s.slice(0, 3) + "-" + s.slice(3);
  }
  /* il vecchio codice AAA-BB: serve solo per le prove (i ragazzi delle seconde ne hanno già) */
  function codiceVecchio(chi, errori, aiuti) {
    var b = base(chi), p = tra(errori, 15) * 16 + tra(aiuti, 15);
    var v = ((p << 2) | (h32(b + "|C" + p) & 3)) ^ (h32(b + "|M") & 1023);
    return fissa(chi) + "-" + lettere(v, 2);
  }
  /* risultato: { ok, formato: 2, errori, aiutiOggetti, aiutiDomande, aiuti, massimo: 99 }
     oppure, per un vecchio codice, { ok, formato: 1, errori, aiuti, massimo: 15 } (aiuti non divisi) */
  function verifica(chi, testo) {
    var s = String(testo || "").toUpperCase().replace(/[^0-9A-Z]/g, "");
    if (s.length !== 8 && s.length !== 5) return { ok: false, motivo: "Il codice deve avere 8 caratteri, per esempio K7Q-4MX-ZP (i vecchi codici ne hanno 5, come K7Q-4M)." };
    if (numero(s) < 0) return { ok: false, motivo: "Il codice contiene caratteri che non esistono (0, 1, O, I): forse è stato copiato male." };
    if (s.slice(0, 3) !== fissa(chi)) return { ok: false, motivo: "Non è il codice di questo numero di registro per questo capitolo." };
    var b = base(chi), v = numero(s.slice(3)), p;
    if (s.length === 5) {
      v ^= h32(b + "|M") & 1023;
      p = v >> 2;
      if ((h32(b + "|C" + p) & 3) !== (v & 3)) return { ok: false, motivo: "Le ultime due lettere non tornano: codice copiato male o modificato." };
      return { ok: true, formato: 1, massimo: 15, errori: p >> 4, aiuti: p & 15 };
    }
    v ^= h32(b + "|N") & 0x1ffffff;
    p = v >>> 5;
    if (p > 999999 || (h32(b + "|K" + p) & 31) !== (v & 31))
      return { ok: false, motivo: "Le ultime cinque lettere non tornano: codice copiato male o modificato." };
    var e = Math.floor(p / 10000), o = Math.floor(p / 100) % 100, d = p % 100;
    return { ok: true, formato: 2, massimo: MAX, errori: e, aiutiOggetti: o, aiutiDomande: d, aiuti: o + d };
  }

  /* l'impronta misteriosa: quattro particolari che cambiano da studente a studente */
  var DITA = [3, 4, 5], SEGNI = ["stella", "luna", "triangolo", "cerchio"], COLORI = ["viola", "blu", "verde", "rosso"];
  var TINTE = { viola: "#7a45b8", blu: "#2f62c0", verde: "#2f9a4e", rosso: "#c23a32" };
  function impronta(chi) {
    var h = h32(base(chi) + "|I");
    return { dita: DITA[h % 3], segno: SEGNI[(h >>> 4) & 3], colore: COLORI[(h >>> 8) & 3], artigli: !!((h >>> 12) & 1) };
  }
  function descrizione(v) {
    return v.dita + " dita · " + (v.artigli ? "con artigli" : "senza artigli") + " · segno a forma di " + v.segno + " · colore " + v.colore;
  }
  /* due orme (sinistra e destra) disegnate con i particolari dello studente; senza particolari, quelle "normali" */
  function svgImpronta(v) {
    var colore = v ? TINTE[v.colore] : "#3a2a3a", n = v ? v.dita : 5;
    function orma(cx, cy) {
      var s = '<ellipse cx="' + cx + '" cy="' + cy + '" rx="11" ry="8"/>';
      for (var i = 0; i < n; i++) {
        var ampiezza = { 3: 80, 4: 108, 5: 128 }[n];  // le dita si aprono a ventaglio sopra il polpastrello
        var a = (-ampiezza / 2 + ampiezza * i / (n - 1)) * Math.PI / 180;
        var x = cx + 16 * Math.sin(a), y = cy - 12 * Math.cos(a) - 2;
        s += '<circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="4"/>';
        if (v && v.artigli) s += '<path d="M' + (x + 3 * Math.sin(a)).toFixed(1) + " " + (y - 3 * Math.cos(a)).toFixed(1) + "l" + (5 * Math.sin(a)).toFixed(1) + " " + (-6 * Math.cos(a)).toFixed(1) + '" stroke="' + colore + '" stroke-width="2.4" stroke-linecap="round"/>';
      }
      if (v) {
        var b = 'fill="#fff6c2"';
        s += { stella: '<path ' + b + ' d="M' + cx + " " + (cy - 5) + "l1.5 3.3 3.6.4-2.7 2.4.8 3.6-3.2-1.9-3.2 1.9.8-3.6-2.7-2.4 3.6-.4z\"/>",
          luna: '<path ' + b + ' d="M' + (cx + 1) + " " + (cy - 5) + "a5 5 0 1 0 0 10 4 4 0 1 1 0-10z\"/>",
          triangolo: '<path ' + b + ' d="M' + cx + " " + (cy - 5) + "l5 9h-10z\"/>",
          cerchio: '<circle ' + b + ' cx="' + cx + '" cy="' + (cy + 0.5) + '" r="4"/>' }[v.segno];
      }
      return s;
    }
    return '<svg viewBox="0 0 140 50"><g fill="' + colore + '" opacity=".9">' + orma(30, 32) + orma(100, 26) + "</g></svg>";
  }

  /* parole d'ordine: nel file delle impostazioni non stanno in chiaro */
  function parola(gioco, cap) {
    var cod = IMP.parole[gioco + "/" + cap];
    if (!cod) return null;
    var t = atob(cod), s = "";
    for (var i = 0; i < t.length; i++) s += String.fromCharCode(t.charCodeAt(i) ^ IMP.segreto.charCodeAt(i % IMP.segreto.length));
    return s;
  }
  function normale(s) { return String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toUpperCase().replace(/[^A-Z0-9]/g, ""); }

  var api = {
    attiva: function () { return window.MODALITA === "casa"; },
    /* chi gioca su questo dispositivo: classe (id del biglietto) e numero di registro */
    giocatore: function () { try { return JSON.parse(localStorage.getItem(CHIAVE)) || null; } catch (e) { return null; } },
    salvaGiocatore: function (g) { try { localStorage.setItem(CHIAVE, JSON.stringify(g)); } catch (e) {} },
    /* lo studente di questo dispositivo, per un capitolo */
    chi: function (gioco, capitolo) {
      var g = api.giocatore(), c = g && Piattaforma.trovaClasse(g.classe);
      return c ? { gioco: gioco, capitolo: capitolo, classe: c.nome, numero: g.numero } : null;
    },
    codice: codice, codiceVecchio: codiceVecchio, fissa: fissa, verifica: verifica,
    impronta: impronta, descrizione: descrizione, svgImpronta: svgImpronta,
    parola: parola,
    parolaGiusta: function (gioco, cap, testo) { var p = parola(gioco, cap); return !!p && normale(p) === normale(testo); },
    haParola: function (gioco, cap) { return !!IMP.parole[gioco + "/" + cap]; }
  };
  return api;
})();
