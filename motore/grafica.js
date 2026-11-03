/* =====================================================================
   GRAFICA: registro dei disegni vettoriali di un gioco
   (definizioni condivise, sfondi delle stanze, icone degli oggetti).
   ===================================================================== */
var Grafica = (function () {
  var NS = "http://www.w3.org/2000/svg", sfondi = {};

  return {
    /* sfumature, texture, personaggi e oggetti: inseriti una volta nella pagina */
    definizioni: function (markup) {
      var s = document.createElementNS(NS, "svg");
      s.setAttribute("width", "0"); s.setAttribute("height", "0");
      s.setAttribute("aria-hidden", "true");
      s.style.position = "absolute";
      s.innerHTML = "<defs>" + markup + "</defs>";
      (document.body || document.documentElement).appendChild(s);
    },
    sfondo: function (id, markup, dopo) { sfondi[id] = { markup: markup, dopo: dopo }; },
    disegnaSfondo: function (id, contenitore) {
      var d = sfondi[id];
      contenitore.innerHTML = '<svg viewBox="0 0 1600 900" preserveAspectRatio="none">' + (d ? d.markup : "") + "</svg>";
      if (d && d.dopo) d.dopo(contenitore.firstChild);
    },
    icona: function (simbolo) {
      return '<svg viewBox="0 0 140 140" aria-hidden="true"><use href="#' + simbolo + '"/></svg>';
    },

    /* pavimento a listoni in prospettiva */
    pavimentoListoni: function (g, o) {
      if (!g) return;
      var fuga = o.fuga, alto = o.alto, basso = o.basso, out = "";
      function a(xb, y) { return fuga.x + (xb - fuga.x) * (y - fuga.y) / (basso - fuga.y); }
      for (var i = -12; i < 12; i++) {
        var b1 = 800 + i * 150, b2 = b1 + 150;
        out += '<path d="M' + a(b1, alto) + " " + alto + " L" + a(b2, alto) + " " + alto + " L" + b2 + " " + basso + " L" + b1 + " " + basso +
          ' Z" fill="' + o.colori[(i + 12) % o.colori.length] + '" stroke="#1a1020" stroke-width="2"/>';
        [0.25, 0.55, 0.85].forEach(function (t) {
          var tt = (t + ((i + 12) % 3) * 0.1) % 1, y = alto + (basso - alto) * tt * tt;
          out += '<path d="M' + a(b1, y) + " " + y + " L" + a(b2, y) + " " + y + '" stroke="#1a1020" stroke-width="2"/>';
        });
      }
      out += '<rect y="' + alto + '" width="1600" height="30" fill="#000" opacity=".35"/>';
      g.innerHTML = out;
    },

    /* granelli di polvere sospesi nella luce (sempre uguali: seme fisso) */
    polvere: function (g, o) {
      if (!g) return;
      var seme = 7, out = "";
      function caso() { seme = (seme * 9301 + 49297) % 233280; return seme / 233280; }
      for (var j = 0; j < o.quanti; j++) {
        out += '<circle class="granello" cx="' + (o.x + caso() * o.larghezza).toFixed(0) + '" cy="' + (o.y + caso() * o.altezza).toFixed(0) +
          '" r="' + (0.8 + caso() * 1.8).toFixed(1) + '" opacity="' + (0.15 + caso() * 0.45).toFixed(2) + '"/>';
      }
      g.innerHTML = out;
    }
  };
})();
