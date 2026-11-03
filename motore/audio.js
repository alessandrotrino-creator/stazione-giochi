/* =====================================================================
   AUDIO: i "borbottii" dei personaggi, generati dal codice (nessun file,
   nessuna licenza). Ogni personaggio ha la sua voce: altezza, timbro, ritmo.
   In futuro qui si aggiungeranno le voci vere in italiano.
   ===================================================================== */
var Suoni = (function () {
  var ctx = null, muto = false;

  function contesto() {
    if (!ctx) {
      var C = window.AudioContext || window.webkitAudioContext;
      if (!C) return null;
      ctx = new C();
    }
    if (ctx.state === "suspended") ctx.resume();
    return ctx;
  }

  return {
    muto: function (v) { if (v != null) muto = !!v; return muto; },

    /* borbottio lungo quanto la frase (con un massimo, per non stancare) */
    borbotta: function (voce, testo) {
      if (muto || !voce) return;
      var c = contesto(); if (!c) return;
      var sillabe = Math.min(14, Math.max(2, Math.round((testo || "").length / 6)));
      var t = c.currentTime + 0.02, passo = voce.passo || 0.085;
      for (var i = 0; i < sillabe; i++) {
        var o = c.createOscillator(), g = c.createGain();
        o.type = voce.timbro || "triangle";
        var f = voce.altezza * (0.85 + Math.random() * 0.35);
        o.frequency.setValueAtTime(f, t);
        o.frequency.exponentialRampToValueAtTime(f * (0.8 + Math.random() * 0.4), t + passo * 0.8);
        g.gain.setValueAtTime(0.0001, t);
        g.gain.exponentialRampToValueAtTime(voce.volume || 0.06, t + 0.012);
        g.gain.exponentialRampToValueAtTime(0.0001, t + passo * 0.9);
        o.connect(g); g.connect(c.destination);
        o.start(t); o.stop(t + passo);
        t += passo * (0.9 + Math.random() * 0.5);
      }
    },

    /* piccoli effetti: "prendi", "magia", "errore" */
    effetto: function (nome) {
      if (muto) return;
      var c = contesto(); if (!c) return;
      var note = { prendi: [660, 880], magia: [523, 659, 784, 1046], errore: [220, 180], pagina: [440] }[nome] || [440];
      note.forEach(function (f, i) {
        var o = c.createOscillator(), g = c.createGain(), t = c.currentTime + i * 0.09;
        o.type = nome === "errore" ? "square" : "sine";
        o.frequency.setValueAtTime(f, t);
        g.gain.setValueAtTime(0.0001, t);
        g.gain.exponentialRampToValueAtTime(0.05, t + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, t + 0.25);
        o.connect(g); g.connect(c.destination); o.start(t); o.stop(t + 0.3);
      });
    }
  };
})();
