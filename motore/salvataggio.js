/* =====================================================================
   SALVATAGGIO: tutto resta nel browser di questo computer, nessun dato esce.
   - una partita per ogni gioco, classe e capitolo
   - l'elenco delle classi (i "biglietti"), i capitoli sbloccati, le impostazioni
   - la copia di sicurezza su file (da salvare su chiavetta) e il suo ripristino
   ===================================================================== */
var Salvataggio = (function () {
  var PREFISSO = "stazione-dei-giochi:";

  function leggi(chiave, base) {
    try { var v = localStorage.getItem(PREFISSO + chiave); return v ? JSON.parse(v) : base; }
    catch (e) { return base; }
  }
  function scrivi(chiave, valore) {
    try { localStorage.setItem(PREFISSO + chiave, JSON.stringify(valore)); return true; }
    catch (e) { return false; }
  }
  function togli(chiave) { try { localStorage.removeItem(PREFISSO + chiave); } catch (e) {} }
  function tutteLeChiavi() {
    var k = [];
    try { for (var i = 0; i < localStorage.length; i++) { var c = localStorage.key(i); if (c.indexOf(PREFISSO) === 0) k.push(c.slice(PREFISSO.length)); } }
    catch (e) {}
    return k;
  }

  return {
    /* partite */
    carica: function (gioco, classe, capitolo) { return leggi("partita:" + gioco + ":" + classe + ":" + capitolo, null); },
    salva: function (gioco, classe, capitolo, stato) {
      stato.salvatoIl = new Date().toISOString();
      return scrivi("partita:" + gioco + ":" + classe + ":" + capitolo, stato);
    },
    /* senza capitolo: azzera tutto il gioco per quella classe; senza gioco: tutta la classe */
    azzera: function (gioco, classe, capitolo) {
      tutteLeChiavi().forEach(function (k) {
        if (k.indexOf("partita:") !== 0) return;
        var p = k.split(":");               // partita : gioco : classe : capitolo
        if ((gioco && p[1] !== gioco) || p[2] !== classe || (capitolo && p[3] !== capitolo)) return;
        togli(k);
      });
      if (!capitolo) {
        var pr = leggi("progressi", {});
        Object.keys(pr).forEach(function (k) { var p = k.split(":"); if (p[1] === classe && (!gioco || p[0] === gioco)) delete pr[k]; });
        scrivi("progressi", pr);
      } else {
        var p2 = this.progressi(gioco, classe);
        p2.completati = p2.completati.filter(function (c) { return c !== capitolo; });
        this.salvaProgressi(gioco, classe, p2);
      }
    },
    /* capitoli completati e ultimo giocato, per gioco e classe */
    progressi: function (gioco, classe) { return leggi("progressi", {})[gioco + ":" + classe] || { completati: [], ultimo: null }; },
    salvaProgressi: function (gioco, classe, p) { var pr = leggi("progressi", {}); pr[gioco + ":" + classe] = p; scrivi("progressi", pr); },

    /* classi: [{ id, nome, anno }] */
    classi: function () { return leggi("classi", []); },
    salvaClassi: function (l) { return scrivi("classi", l); },
    ultimaClasse: function (id) { if (id !== undefined) scrivi("ultimaClasse", id); return leggi("ultimaClasse", null); },

    /* sblocchi: { classe: { gioco: [capitoli] } } */
    sblocchi: function () { return leggi("sblocchi", {}); },
    salvaSblocchi: function (s) { return scrivi("sblocchi", s); },

    /* dati del docente: codice (in forma non leggibile) e data dell'ultima copia di sicurezza */
    docente: function () { return leggi("docente", { codice: null, ultimaCopia: null }); },
    salvaDocente: function (d) { return scrivi("docente", d); },

    /* impostazioni comuni a tutti i giochi */
    impostazioni: function () {
      var base = { lingua: "it", doppi: false, testoGrande: false, muto: false, timer: false };
      var v = leggi("impostazioni", {});
      for (var k in base) if (v[k] === undefined) v[k] = base[k];
      return v;
    },
    salvaImpostazioni: function (imp) { return scrivi("impostazioni", imp); },

    /* copia di sicurezza: tutto in un unico oggetto (diventa un file .json) */
    esporta: function () {
      var dati = {};
      tutteLeChiavi().forEach(function (k) { dati[k] = leggi(k, null); });
      return { tipo: "stazione-dei-giochi", versione: 1, creatoIl: new Date().toISOString(), dati: dati };
    },
    importa: function (copia) {
      if (!copia || copia.tipo !== "stazione-dei-giochi" || !copia.dati) return false;
      tutteLeChiavi().forEach(togli);
      Object.keys(copia.dati).forEach(function (k) { scrivi(k, copia.dati[k]); });
      return true;
    }
  };
})();
