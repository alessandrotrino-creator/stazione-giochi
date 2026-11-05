/* =====================================================================
   LINGUE: elenco delle lingue, testi, traduzione con ripiego sull'italiano.
   Le lingue sono un'impostazione della piattaforma: ogni gioco le eredita.

   Nei testi si possono usare:
     {fr:3/4}   frazione in colonna (resta sempre nel verso giusto, anche in arabo)
     {n:3,5}    numero "blindato" da sinistra a destra
     {per:16}   cifre del periodo, con la lineetta sopra (es. 2,1{per:6})
     *parola*   grassetto
     {nome}     valore passato dal gioco (per esempio il nome di un oggetto)
   ===================================================================== */
var Lingue = (function () {
  var info = {}, ordine = [], testi = {}, attiva = "it", mancantiVisti = {};
  /* variante (per esempio "casa"): si usa "chiave@casa" se esiste, e si applicano le sostituzioni
     di inizio frase (per esempio "Bivio di classe:" → "Decidi tu:") */
  var variante = null, sostituzioni = {};

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function formatta(s, param) {
    s = esc(s);
    // prima i valori passati dal gioco, così anche "{fr:{n}/{d}}" diventa una frazione in colonna
    s = s.replace(/\{(\w+)\}/g, function (m, k) {
      return param && param[k] != null ? param[k] : m;
    });
    s = s.replace(/\{fr:(\d+)\/(\d+)\}/g,
      '<span class="fr" dir="ltr"><span class="fr-n">$1</span><span class="fr-d">$2</span></span>');
    s = s.replace(/\{n:([^}]+)\}/g, '<bdi dir="ltr" class="num">$1</bdi>');
    s = s.replace(/\{per:(\d+)\}/g, '<span class="periodo">$1</span>');
    s = s.replace(/\*([^*]+)\*/g, "<b>$1</b>");
    return s;
  }

  return {
    /* registra una lingua con i testi dell'interfaccia del motore */
    registra: function (codice, dati, interfaccia) {
      dati.codice = codice;
      info[codice] = dati;
      if (ordine.indexOf(codice) < 0) ordine.push(codice);
      this.aggiungi(codice, interfaccia || {});
    },
    /* aggiunge testi (di un gioco o di un capitolo) a una lingua */
    aggiungi: function (codice, voci) {
      testi[codice] = testi[codice] || {};
      for (var k in voci) testi[codice][k] = voci[k];
    },
    elenco: function () { return ordine.map(function (c) { return info[c]; }); },
    attiva: function () { return attiva; },
    info: function (c) { return info[c || attiva]; },
    imposta: function (c) { if (info[c]) attiva = c; },
    esiste: function (chiave) { return !!(testi.it && testi.it[chiave] != null); },

    /* testo grezzo: se manca la traduzione usa l'italiano, mai uno spazio vuoto */
    grezzo: function (chiave, lingua) {
      lingua = lingua || attiva;
      if (variante && testi.it && testi.it[chiave + "@" + variante] != null) chiave = chiave + "@" + variante;
      var v = testi[lingua] && testi[lingua][chiave];
      if (v == null) {
        if (lingua !== "it" && !mancantiVisti[lingua + chiave]) {
          mancantiVisti[lingua + chiave] = true;
          if (window.console) console.info("[lingue] manca " + lingua + ": " + chiave);
        }
        v = testi.it && testi.it[chiave];
      }
      if (v == null) return "…";
      (variante && sostituzioni[variante + lingua] || []).forEach(function (c) {
        if (v.indexOf(c[0]) === 0) v = c[1] + v.slice(c[0].length);
      });
      return v;
    },
    variante: function (v) { if (v !== undefined) variante = v; return variante; },
    sostituisci: function (v, lingua, da, a) { (sostituzioni[v + lingua] = sostituzioni[v + lingua] || []).push([da, a]); },
    /* testo pronto da mettere nella pagina */
    html: function (chiave, param, lingua) {
      var p = {};
      for (var k in param || {}) p[k] = esc(param[k]);
      return formatta(this.grezzo(chiave, lingua), p);
    },
    /* testo semplice (senza formattazione), per i titoli e le descrizioni accessibili */
    semplice: function (chiave, param, lingua) {
      var d = document.createElement("div");
      d.innerHTML = this.html(chiave, param, lingua);
      return d.textContent;
    },
    /* elenco delle frasi mancanti o non tradotte, lingua per lingua */
    mancanti: function () {
      var r = {};
      ordine.forEach(function (c) {
        if (c === "it") return;
        r[c] = Object.keys(testi.it || {}).filter(function (k) {
          return !testi[c] || testi[c][k] == null;
        });
      });
      return r;
    },
    tutte: function () { return testi; }
  };
})();
