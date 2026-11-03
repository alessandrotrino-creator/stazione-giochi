/* =====================================================================
   PIATTAFORMA: elenco dei giochi e dei loro capitoli, classi, sblocchi.
   Ogni gioco si presenta con Piattaforma.gioco({...}) nel suo file
   giochi/<materia>/gioco.js. I file di un capitolo vengono caricati
   solo quando si parte con quel capitolo.
   ===================================================================== */
var Piattaforma = (function () {
  var giochi = {}, ordine = [];

  /* carica uno dopo l'altro i file di un capitolo (funziona anche aprendo il gioco con doppio clic) */
  function caricaFile(elenco) {
    return elenco.reduce(function (p, f) {
      return p.then(function () {
        return new Promise(function (ok, ko) {
          var s = document.createElement("script");
          s.src = f;
          s.onload = ok;
          s.onerror = function () { ko(new Error("Manca il file " + f)); };
          document.body.appendChild(s);
        });
      });
    }, Promise.resolve());
  }

  function leggiIndirizzo() {
    var o = {};
    location.hash.replace(/^#/, "").split("&").forEach(function (p) {
      var kv = p.split("=");
      if (kv[0]) o[kv[0]] = decodeURIComponent(kv[1] || "");
    });
    return o;
  }

  /* sui telefoni tenuti in verticale: "gira il telefono" (lo mostra il foglio di stile solo in verticale) */
  function avvisoGira() {
    var d = document.createElement("div");
    d.className = "gira-telefono";
    d.innerHTML = '<svg viewBox="0 0 120 120"><rect x="38" y="14" width="44" height="80" rx="8" fill="#2a2448" stroke="#ffd36b" stroke-width="5"/>' +
      '<path d="M20 100 A46 46 0 0 0 100 100" fill="none" stroke="#ffd36b" stroke-width="5" stroke-linecap="round"/><path d="M92 90l9 11-14 2" fill="none" stroke="#ffd36b" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
      "<p></p>";
    d.querySelector("p").textContent = Lingue.semplice("ui.gira");
    document.body.appendChild(d);
  }

  var api = {
    gioco: function (def) { giochi[def.id] = def; if (ordine.indexOf(def.id) < 0) ordine.push(def.id); },
    giochi: function () { return ordine.map(function (id) { return giochi[id]; }); },
    trova: function (id) { return giochi[id]; },
    capitolo: function (gioco, id) {
      var g = giochi[gioco];
      return g ? (g.capitoli || []).filter(function (c) { return c.id === id; })[0] : null;
    },

    /* classi: se il docente non ne ha ancora create, c'è il biglietto "Prova libera" */
    classi: function () {
      var l = Salvataggio.classi();
      return l.length ? l : [{ id: "libera", nome: null, anno: 2, libera: true }];
    },
    /* "2A" oppure, se la classe ha dato un nome al biglietto, "I Paguri Ribelli (2A)" */
    nomeClasse: function (id) {
      var c = api.classi().filter(function (x) { return x.id === id; })[0];
      if (!c || !c.nome) return Lingue.semplice("st.liberaNome");
      return c.soprannome ? c.soprannome + " (" + c.nome + ")" : c.nome;
    },
    trovaClasse: function (id) { return api.classi().filter(function (x) { return x.id === id; })[0] || null; },

    sbloccato: function (classe, gioco, capId) {
      var c = api.capitolo(gioco, capId);
      if (!c) return false;
      if (c.sempreAperto || classe === "libera") return true;
      var s = Salvataggio.sblocchi();
      return !!(s[classe] && s[classe][gioco] && s[classe][gioco].indexOf(capId) >= 0);
    },
    sblocca: function (classe, gioco, capId, aperto) {
      var s = Salvataggio.sblocchi();
      s[classe] = s[classe] || {};
      var l = s[classe][gioco] = s[classe][gioco] || [];
      var i = l.indexOf(capId);
      if (aperto && i < 0) l.push(capId);
      if (!aperto && i >= 0) l.splice(i, 1);
      Salvataggio.salvaSblocchi(s);
    },

    /* si passa dalla stazione al gioco (e ritorno) ricaricando la pagina: ogni volta si riparte puliti */
    gioca: function (gioco, capId, classe) {
      Salvataggio.ultimaClasse(classe);
      location.hash = "gioco=" + encodeURIComponent(gioco) + "&capitolo=" + encodeURIComponent(capId) + "&classe=" + encodeURIComponent(classe);
      location.reload();
    },
    tornaAllaStazione: function () {
      history.replaceState(null, "", location.pathname + location.search);
      location.reload();
    },

    avvia: function () {
      // la prima volta su questo computer: crea le classi di scuola.js (una volta sola, anche se poi vengono eliminate)
      if (window.CLASSI_INIZIALI && !Salvataggio.classi().length && !localStorage.getItem("stazione-dei-giochi:classiCreate")) {
        Salvataggio.salvaClassi(CLASSI_INIZIALI.map(function (c, i) {
          return { id: "c" + (Date.now() + i).toString(36), nome: c.nome, anno: c.anno || 2, soprannome: c.soprannome || "" };
        }));
        try { localStorage.setItem("stazione-dei-giochi:classiCreate", "1"); } catch (e) {}
      }
      var imp = Salvataggio.impostazioni();
      Lingue.imposta(imp.lingua || "it");
      if (window.Casa && Casa.attiva()) Lingue.variante("casa");
      avvisoGira();
      var o = leggiIndirizzo(), g = giochi[o.gioco], c = g && api.capitolo(o.gioco, o.capitolo);
      if (!g || !c || !o.classe || !api.sbloccato(o.classe, o.gioco, o.capitolo)) { Stazione.mostra(); return; }
      document.title = Lingue.semplice(g.titolo) + " · " + api.nomeClasse(o.classe);
      caricaFile((g.grafica || []).concat(c.file)).then(function () {
        Motore.avvia({ gioco: g.id, capitolo: c.id, classe: o.classe, nomeClasse: api.nomeClasse(o.classe), titolo: g.titolo, durata: c.durata });
      }).catch(function (err) {
        document.body.innerHTML = '<p style="color:#fff;font:24px sans-serif;padding:40px">' + err.message +
          '<br><br><a style="color:#ffd36b" href="' + location.pathname + '">↩ Stazione</a></p>';
      });
    }
  };
  return api;
})();
