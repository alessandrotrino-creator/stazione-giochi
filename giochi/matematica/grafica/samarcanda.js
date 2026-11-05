/* Gioco di Matematica · capitolo 1: SAMARCANDA, circa 1427. Il cortile dell'osservatorio di Ulugh Beg,
   quasi finito (impalcature), di notte: blu notte e oro. Tre porte con le piastrelle; le scritte sono elementi traducibili. */
Grafica.definizioni(`
  <linearGradient id="g-sam-cielo" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#0b1030"/><stop offset=".7" stop-color="#1c2a5c"/><stop offset="1" stop-color="#3a4a80"/>
  </linearGradient>
  <linearGradient id="g-sam-muro" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#c8a878"/><stop offset="1" stop-color="#8a6a48"/>
  </linearGradient>
  <linearGradient id="g-sam-terra" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#6a5a6a"/><stop offset="1" stop-color="#3a3048"/>
  </linearGradient>
  <linearGradient id="g-sam-oro" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#fff0b0"/><stop offset=".5" stop-color="#e8b84a"/><stop offset="1" stop-color="#9a6a1a"/>
  </linearGradient>
  <radialGradient id="g-sam-luce" cx="50%" cy="60%" r="60%">
    <stop offset="0" stop-color="#ffe7a0"/><stop offset="1" stop-color="#b8782a"/>
  </radialGradient>
  <pattern id="p-sam-piastrelle" width="36" height="36" patternUnits="userSpaceOnUse">
    <rect width="36" height="36" fill="#1f3f9a"/>
    <path d="M18 2 L34 18 L18 34 L2 18 Z" fill="#3a8ad8" stroke="#0b1a4a" stroke-width="2"/>
    <path d="M18 10 L26 18 L18 26 L10 18 Z" fill="#e8b84a" stroke="#0b1a4a" stroke-width="1.5"/>
  </pattern>
`);

/* una porta del cortile: chiusa (legno con borchie) o aperta (luce dorata) */
var PortaSamarcanda = function (aperta) {
  return '<svg viewBox="0 0 200 300"><g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">' +
    (aperta
      ? '<path d="M20 300 L20 90 Q100 6 180 90 L180 300 Z" fill="url(#g-sam-luce)"/><path d="M40 300 L60 140 L140 140 L160 300 Z" fill="#fff4cc" opacity=".5" stroke="none"/>'
      : '<path d="M20 300 L20 90 Q100 6 180 90 L180 300 Z" fill="#5a3418"/><path d="M100 40 L100 300" stroke-width="3"/>' +
        '<g fill="url(#g-sam-oro)"><circle cx="60" cy="140" r="6"/><circle cx="140" cy="140" r="6"/><circle cx="60" cy="230" r="6"/><circle cx="140" cy="230" r="6"/><circle cx="88" cy="190" r="7"/><circle cx="112" cy="190" r="7"/></g>' +
        '<rect x="86" y="200" width="28" height="34" rx="4" fill="#2a1a0e"/><path d="M100 210 L100 226" stroke="#e8b84a" stroke-width="4"/>') +
    "</g></svg>";
};

Grafica.sfondo("samarcanda", `
  <rect width="1600" height="900" fill="url(#g-sam-cielo)"/>
  <g fill="#fff6d0">
    <circle cx="120" cy="60" r="2.5"/><circle cx="260" cy="120" r="2"/><circle cx="420" cy="50" r="3"/><circle cx="560" cy="140" r="2"/>
    <circle cx="700" cy="70" r="2.5"/><circle cx="880" cy="40" r="2"/><circle cx="1010" cy="110" r="3"/><circle cx="1180" cy="60" r="2"/>
    <circle cx="1330" cy="130" r="2.5"/><circle cx="1480" cy="50" r="3"/><circle cx="1560" cy="160" r="2"/><circle cx="330" cy="200" r="1.8"/>
    <circle cx="960" cy="190" r="1.8"/><circle cx="1250" cy="200" r="2"/>
  </g>
  <circle cx="1440" cy="110" r="44" fill="#fff4cc"/><circle cx="1458" cy="98" r="40" fill="#0f1640"/>
  <!-- l'osservatorio: grande edificio tondo, ancora con le impalcature -->
  <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <path d="M200 300 Q800 150 1400 300 L1400 640 L200 640 Z" fill="url(#g-sam-muro)"/>
    <rect x="200" y="300" width="1200" height="40" fill="url(#p-sam-piastrelle)"/>
    <path d="M200 300 Q800 150 1400 300" fill="none" stroke="url(#g-sam-oro)" stroke-width="10"/>
  </g>
  <!-- impalcature di legno sul lato destro: nel 1427 i lavori non erano finiti -->
  <g stroke="#5a3a1a" stroke-width="8" stroke-linecap="round">
    <path d="M1250 200 L1250 640 M1340 220 L1340 640 M1430 250 L1430 640"/>
    <path d="M1240 300 L1440 300 M1240 420 L1440 420 M1240 540 L1440 540" stroke-width="7"/>
    <path d="M1250 300 L1340 420 M1340 300 L1430 420 M1250 420 L1340 540" stroke-width="4" opacity=".8"/>
  </g>
  <!-- cornici delle tre porte, con le piastrelle -->
  <g stroke="#1d1428" stroke-width="4">
    <path d="M330 640 L330 380 Q460 250 590 380 L590 640" fill="url(#p-sam-piastrelle)"/>
    <path d="M670 640 L670 380 Q800 250 930 380 L930 640" fill="url(#p-sam-piastrelle)"/>
    <path d="M1010 640 L1010 380 Q1140 250 1270 380 L1270 640" fill="url(#p-sam-piastrelle)"/>
  </g>
  <!-- cortile: piastrelle con stelle a otto punte (le disegna la funzione qui sotto), vasca, lanterne -->
  <rect x="0" y="630" width="1600" height="270" fill="url(#g-sam-terra)"/>
  <g id="sam-pavimento"></g>
  <rect x="0" y="626" width="1600" height="14" fill="#000" opacity=".3"/>
  <!-- vasca ottagonale che riflette le stelle (sul fondo del cortile, così Leo non ci cammina sopra) -->
  <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round" transform="translate(800 644) scale(.72 .6) translate(-800 -712)">
    <path d="M620 742 L700 712 L900 712 L980 742 L940 790 L660 790 Z" fill="url(#p-sam-piastrelle)"/>
    <path d="M650 744 L712 722 L888 722 L950 744 L920 780 L680 780 Z" fill="#0f1a48"/>
    <g fill="#fff6d0" stroke="none"><circle cx="720" cy="748" r="2"/><circle cx="790" cy="740" r="1.6"/><circle cx="860" cy="756" r="2"/><circle cx="900" cy="744" r="1.5"/><circle cx="760" cy="764" r="1.5"/></g>
    <path d="M860 735 Q880 742 900 735" fill="none" stroke="#fff4cc" stroke-width="3" opacity=".7"/>
  </g>
  <!-- due lanterne accese ai lati delle porte -->
  <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round">
    <circle cx="630" cy="560" r="60" fill="#ffd36b" opacity=".18" stroke="none"/><circle cx="970" cy="560" r="60" fill="#ffd36b" opacity=".18" stroke="none"/>
    <path d="M630 640 L630 590 M970 640 L970 590" stroke="#3a2416" stroke-width="7"/>
    <path d="M614 590 L646 590 L640 530 L620 530 Z M954 590 L986 590 L980 530 L960 530 Z" fill="#ffe7a0"/>
    <path d="M612 530 L648 530 L630 512 Z M952 530 L988 530 L970 512 Z" fill="url(#g-sam-oro)"/>
    <path d="M622 560 L638 560 M962 560 L978 560" stroke="#b8782a" stroke-width="2"/>
  </g>
  <!-- Ottone, parcheggiato nel cortile -->
  <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <ellipse cx="150" cy="752" rx="120" ry="14" fill="#000" opacity=".35" stroke="none"/>
    <rect x="40" y="450" width="210" height="300" rx="10" fill="url(#g-ottone)"/>
    <rect x="62" y="486" width="166" height="250" rx="6" fill="#ffe7a8" opacity=".85"/>
    <path d="M62 486 L228 736 M228 486 L62 736 M145 486 L145 736" stroke="#8a6a24" stroke-width="3" opacity=".7"/>
    <circle cx="145" cy="450" r="34" fill="#f3ead2"/>
    <path d="M145 450 L131 434 M145 450 L163 438" stroke="#1d1428" stroke-width="4"/>
    <circle cx="131" cy="458" r="5" fill="#1d1428"/><circle cx="159" cy="458" r="5" fill="#1d1428"/>
  </g>
`, function (svg) {
  // pavimento a piastrelle in prospettiva, una stella a otto punte su ogni piastrella chiara
  var NS = "http://www.w3.org/2000/svg", g = svg.querySelector("#sam-pavimento"), fuga = { x: 800, y: 300 }, alto = 640, basso = 900, righe = [];
  if (!g) return;
  for (var k = 0; k <= 7; k++) righe.push(alto + (basso - alto) * Math.pow(k / 7, 1.4));
  function xa(xb, y) { return fuga.x + (xb - fuga.x) * (y - fuga.y) / (basso - fuga.y); }
  for (var r = 0; r < righe.length - 1; r++) {
    for (var c = -14; c < 14; c++) {
      var b1 = 800 + c * 120, b2 = b1 + 120, y1 = righe[r], y2 = righe[r + 1], chiara = (r + c) % 2 === 0;
      var p = document.createElementNS(NS, "path");
      p.setAttribute("d", "M" + xa(b1, y1) + " " + y1 + " L" + xa(b2, y1) + " " + y1 + " L" + xa(b2, y2) + " " + y2 + " L" + xa(b1, y2) + " " + y2 + " Z");
      p.setAttribute("fill", chiara ? "#5a5276" : "#3a3458"); p.setAttribute("stroke", "#1d1830"); p.setAttribute("stroke-width", "1.5");
      g.appendChild(p);
      if (chiara) {
        var cx = (xa(b1, y1) + xa(b2, y2)) / 2, cy = (y1 + y2) / 2, rx = (xa(b2, y2) - xa(b1, y2)) * 0.26, ry = (y2 - y1) * 0.3, d = "";
        for (var i = 0; i < 16; i++) {
          var a = i * Math.PI / 8, q = i % 2 ? 0.55 : 1;
          d += (i ? "L" : "M") + (cx + rx * q * Math.cos(a)).toFixed(1) + " " + (cy + ry * q * Math.sin(a)).toFixed(1);
        }
        var st = document.createElementNS(NS, "path");
        st.setAttribute("d", d + "Z"); st.setAttribute("fill", "#c8a04a"); st.setAttribute("opacity", ".55");
        g.appendChild(st);
      }
    }
  }
});

/* il CONTE ARROTONDO: rotondo come una palla, rosso pomodoro, mantello a pois, monocolo a forma di zero */
var FiguraConte = function () {
  return '<svg viewBox="0 0 160 200"><g stroke="#1d1428" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">' +
    '<ellipse cx="80" cy="194" rx="50" ry="6" fill="#000" opacity=".35" stroke="none"/>' +
    '<path d="M60 160 L56 190 L70 190 L72 166 Z M100 160 L104 190 L90 190 L88 166 Z" fill="#2a1a2a"/>' +
    '<path d="M50 192 L72 192 M88 192 L110 192" stroke-width="7"/>' +
    '<path d="M14 150 Q4 80 40 60 L120 60 Q156 80 146 150 Q120 160 80 160 Q40 160 14 150 Z" fill="#1f2a6a"/>' +
    '<g fill="#fff" stroke="none"><circle cx="30" cy="110" r="5"/><circle cx="44" cy="136" r="5"/><circle cx="128" cy="104" r="5"/><circle cx="118" cy="134" r="5"/><circle cx="140" cy="128" r="4"/><circle cx="22" cy="132" r="4"/></g>' +
    '<circle cx="80" cy="110" r="52" fill="#d8392b"/>' +
    '<path d="M44 82 Q60 66 80 64" fill="none" stroke="#ff8a7a" stroke-width="6" opacity=".7"/>' +
    '<circle cx="64" cy="98" r="6" fill="#1d1428" stroke="none"/>' +
    '<circle cx="98" cy="98" r="13" fill="#fff6c2" fill-opacity=".35" stroke-width="4"/><circle cx="98" cy="98" r="5" fill="#1d1428" stroke="none"/>' +
    '<path d="M110 106 Q122 130 116 150" fill="none" stroke-width="2"/>' +
    '<path d="M58 124 Q70 116 80 122 Q90 116 102 124" fill="none" stroke="#1d1428" stroke-width="5"/>' +
    '<g class="bocca"><path d="M68 134 Q80 144 92 134 Q80 150 68 134 Z" fill="#5a1a1a" stroke-width="2"/></g>' +
    '<path d="M56 60 L56 30 Q80 20 104 30 L104 60 Z" fill="#1d1428"/><path d="M44 60 L116 60" stroke-width="7"/>' +
    '<path d="M58 50 L102 50" stroke="#d8392b" stroke-width="6"/>' +
    "</g></svg>";
};
