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

    /* rumori della stazione: "passi" (per n secondi), "fischio", "freno", "timbro", "palette" (tabellone che gira) */
    rumore: function (nome, secondi) {
      if (muto) return;
      var c = contesto(); if (!c) return;
      function fruscio(t, durata, freq, vol, freqFine) {
        var n = Math.max(1, Math.floor(c.sampleRate * durata)), b = c.createBuffer(1, n, c.sampleRate), d = b.getChannelData(0);
        for (var i = 0; i < n; i++) d[i] = Math.random() * 2 - 1;
        var s = c.createBufferSource(), f = c.createBiquadFilter(), g = c.createGain();
        s.buffer = b; f.type = "bandpass"; f.frequency.setValueAtTime(freq, t); f.Q.value = 1.2;
        if (freqFine) f.frequency.exponentialRampToValueAtTime(freqFine, t + durata);
        g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + Math.min(0.02, durata / 4));
        g.gain.exponentialRampToValueAtTime(0.0001, t + durata);
        s.connect(f); f.connect(g); g.connect(c.destination); s.start(t); s.stop(t + durata);
      }
      function nota(t, f1, f2, durata, vol, tipo) {
        var o = c.createOscillator(), g = c.createGain();
        o.type = tipo || "sine"; o.frequency.setValueAtTime(f1, t); o.frequency.exponentialRampToValueAtTime(f2, t + durata);
        g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + durata);
        o.connect(g); g.connect(c.destination); o.start(t); o.stop(t + durata + 0.02);
      }
      var t = c.currentTime + 0.02, i;
      if (nome === "passi") for (i = 0; i < (secondi || 2) / 0.34; i++) { nota(t + i * 0.34, 110, 60, 0.09, 0.08); fruscio(t + i * 0.34, 0.06, 1800, 0.03); }
      if (nome === "palette") for (i = 0; i < 26; i++) fruscio(t + i * 0.035 + Math.random() * 0.02, 0.018, 3200, 0.04);
      if (nome === "fischio") { [0, 0.5].forEach(function (d) { nota(t + d, 1780, 1700, 0.38, 0.03); nota(t + d, 2240, 2150, 0.38, 0.02); }); }
      if (nome === "freno") { fruscio(t, 1.3, 4200, 0.05, 1400); nota(t + 1.1, 90, 50, 0.3, 0.06, "triangle"); }
      if (nome === "timbro") { nota(t, 160, 70, 0.12, 0.12, "triangle"); fruscio(t, 0.04, 2400, 0.06); }
    },

    /* piccoli effetti: "prendi", "magia", "errore" */
    effetto: function (nome) {
      if (muto) return;
      var c = contesto(); if (!c) return;
      var note = { prendi: [660, 880], magia: [523, 659, 784, 1046], errore: [220, 180], pagina: [440], clic: [990] }[nome] || [440];
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
