/* Gioco di Matematica · capitolo 1: OLANDA, intorno al 1600. La spiaggia tra le dune (Mare del Nord, grigio-azzurro).
   Il carro a vela di Stevino, Stevino, il gabbiano e gli oggetti sono elementi della stanza (cambiano durante il gioco). */
Grafica.definizioni(`
  <linearGradient id="g-sp-cielo" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#8fb0c8"/><stop offset=".7" stop-color="#c8dae4"/><stop offset="1" stop-color="#e4ecee"/>
  </linearGradient>
  <linearGradient id="g-sp-mare" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#5a7e94"/><stop offset="1" stop-color="#8aa8b4"/>
  </linearGradient>
  <linearGradient id="g-sp-sabbia" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#e2d2a8"/><stop offset="1" stop-color="#c8b080"/>
  </linearGradient>
  <linearGradient id="g-sp-duna" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#d8c494"/><stop offset="1" stop-color="#b89a68"/>
  </linearGradient>
  <linearGradient id="g-sp-legno" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#9a6a3a"/><stop offset="1" stop-color="#5a3a1e"/>
  </linearGradient>
`);

/* SIMON STEVIN, in piedi: giubba scura, gorgiera bianca, mantello, cappello a tesa larga, barba */
var FiguraStevino = function (conOcchiali) {
  return '<svg viewBox="0 0 200 440"><g stroke="#1d1428" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">' +
    '<ellipse cx="100" cy="432" rx="64" ry="8" fill="#000" opacity=".3" stroke="none"/>' +
    '<path d="M72 330 L68 420 L90 420 L92 330 Z M108 330 L110 420 L132 420 L128 330 Z" fill="#2a2a34"/>' +
    '<path d="M60 420 L92 420 L92 430 L58 430 Z M108 420 L140 420 L142 430 L108 430 Z" fill="#1d1428"/>' +
    '<path d="M48 170 Q30 300 44 360 L156 360 Q170 300 152 170 Q100 150 48 170 Z" fill="#2a2638"/>' +
    '<path d="M60 176 L64 330 L136 330 L140 176 Q100 166 60 176 Z" fill="#3a3448"/>' +
    '<path d="M100 178 L100 326" stroke="#8a8090" stroke-width="2"/><g fill="#c8b060" stroke="none"><circle cx="100" cy="200" r="3"/><circle cx="100" cy="230" r="3"/><circle cx="100" cy="260" r="3"/><circle cx="100" cy="290" r="3"/></g>' +
    '<path d="M50 180 Q34 250 48 312 L66 308 Q58 254 70 200 Z M150 180 Q166 250 152 312 L134 308 Q142 254 130 200 Z" fill="#2a2638"/>' +
    '<ellipse cx="57" cy="316" rx="11" ry="12" fill="#e8c0a0"/><ellipse cx="143" cy="316" rx="11" ry="12" fill="#e8c0a0"/>' +
    '<path d="M86 160 L88 140 L112 140 L114 160 Z" fill="#e8c0a0"/>' +
    /* gorgiera */
    '<ellipse cx="100" cy="166" rx="46" ry="14" fill="#f6f2ea"/><path d="M60 164 Q70 174 80 164 Q90 174 100 164 Q110 174 120 164 Q130 174 140 164" fill="none" stroke-width="2"/>' +
    '<ellipse cx="100" cy="110" rx="34" ry="40" fill="#e8c0a0"/>' +
    '<path d="M70 118 Q72 154 100 156 Q128 154 130 118 Q124 136 100 138 Q76 136 70 118 Z" fill="#8a6a4a"/>' +
    '<path d="M84 128 Q100 122 116 128" fill="none" stroke="#5a3a2a" stroke-width="4"/>' +
    '<circle cx="88" cy="104" r="3.5" fill="#1d1428" stroke="none"/><circle cx="112" cy="104" r="3.5" fill="#1d1428" stroke="none"/>' +
    (conOcchiali ? '<circle cx="88" cy="104" r="10" fill="#fff" fill-opacity=".25" stroke-width="2.5"/><circle cx="112" cy="104" r="10" fill="#fff" fill-opacity=".25" stroke-width="2.5"/><path d="M98 104 L102 104" stroke-width="2.5"/>' :
      '<path d="M82 96 Q88 92 94 96 M106 96 Q112 92 118 96" fill="none" stroke-width="2.5"/>') +
    '<path d="M100 108 Q105 118 98 120" fill="none" stroke="#8a5a3a" stroke-width="3"/>' +
    '<g class="bocca"><path d="M92 134 Q100 139 108 134 Q100 144 92 134 Z" fill="#6a2a26" stroke-width="2"/></g>' +
    /* cappello a tesa larga */
    '<ellipse cx="100" cy="76" rx="58" ry="12" fill="#1d1a24"/><path d="M70 76 Q72 36 100 34 Q128 36 130 76 Z" fill="#2a2638"/>' +
    "</g></svg>";
};

/* il carro a vela: vela legata o spiegata, tre ingranaggi (dorati quando montati) */
var CarroAVela = function (velaLibera, montati) {
  var ing = "";
  [[300, 300], [370, 330], [440, 300]].forEach(function (c, i) {
    var ok = i < montati, d = "";
    for (var k = 0; k < 10; k++) {
      var a = k * Math.PI / 5, b = a + Math.PI / 10;
      d += (k ? "L" : "M") + (c[0] + 30 * Math.cos(a)).toFixed(1) + " " + (c[1] + 30 * Math.sin(a)).toFixed(1) + "L" + (c[0] + 24 * Math.cos(b)).toFixed(1) + " " + (c[1] + 24 * Math.sin(b)).toFixed(1);
    }
    ing += '<path d="' + d + 'Z" fill="' + (ok ? "#e8b84a" : "#5a5a60") + '" stroke="#1d1428" stroke-width="3"/><circle cx="' + c[0] + '" cy="' + c[1] + '" r="7" fill="#1d1428"/>' +
      (ok ? "" : '<circle cx="' + c[0] + '" cy="' + c[1] + '" r="18" fill="none" stroke="#ff8f8f" stroke-width="3" stroke-dasharray="5 5"/>');
  });
  return '<svg viewBox="0 0 560 460"><g stroke="#1d1428" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">' +
    '<ellipse cx="290" cy="446" rx="250" ry="12" fill="#000" opacity=".25" stroke="none"/>' +
    '<path d="M268 360 L268 30" stroke="url(#g-sp-legno)" stroke-width="14"/>' +
    (velaLibera
      ? '<path d="M276 40 Q470 120 480 330 L276 330 Z" fill="#f2ead6"/><path d="M276 120 Q420 170 440 330 M276 220 Q380 250 400 330" fill="none" stroke="#c8b898" stroke-width="3"/>'
      : '<path d="M262 60 Q300 50 300 320 L262 320 Z" fill="#e8dcc0"/><path d="M262 120 L300 116 M262 200 L300 198 M262 280 L300 280" stroke="#8a6a3a" stroke-width="5"/>') +
    '<path d="M60 340 L520 340 L500 400 L80 400 Z" fill="url(#g-sp-legno)"/>' +
    '<path d="M80 352 L500 352" stroke="#c89a5a" stroke-width="3"/>' +
    '<circle cx="130" cy="404" r="40" fill="#7a5a3a"/><circle cx="130" cy="404" r="10" fill="#1d1428"/><path d="M130 364 L130 444 M90 404 L170 404" stroke-width="3"/>' +
    '<circle cx="450" cy="404" r="40" fill="#7a5a3a"/><circle cx="450" cy="404" r="10" fill="#1d1428"/><path d="M450 364 L450 444 M410 404 L490 404" stroke-width="3"/>' +
    '<rect x="260" y="264" width="220" height="80" rx="8" fill="#4a3a2a" opacity=".85"/>' + ing +
    '<path d="M268 30 L360 18 L352 34 L268 40" fill="#d8392b" stroke-width="3"/>' +
    '<path d="M226 44 L310 44" stroke="url(#g-sp-legno)" stroke-width="8"/>' +
    "</g></svg>";
};

Grafica.sfondo("spiaggia", `
  <rect width="1600" height="900" fill="url(#g-sp-cielo)"/>
  <g fill="#fff" opacity=".85" stroke="none">
    <ellipse cx="260" cy="120" rx="120" ry="34"/><ellipse cx="340" cy="100" rx="90" ry="40"/><ellipse cx="1040" cy="90" rx="150" ry="36"/><ellipse cx="1140" cy="76" rx="90" ry="34"/>
    <ellipse cx="1420" cy="170" rx="110" ry="26"/>
  </g>
  <!-- mare con le onde -->
  <rect x="0" y="380" width="1600" height="150" fill="url(#g-sp-mare)"/>
  <g fill="none" stroke="#e4ecee" stroke-width="4" stroke-linecap="round" opacity=".8">
    <path d="M40 420 q30 -12 60 0 t60 0"/><path d="M380 440 q30 -12 60 0 t60 0"/><path d="M760 410 q30 -12 60 0 t60 0"/>
    <path d="M1140 450 q30 -12 60 0 t60 0"/><path d="M1400 420 q30 -12 60 0 t60 0"/><path d="M0 520 Q400 500 800 524 T1600 512" stroke-width="8"/>
  </g>
  <!-- una nave lontana, sul mare -->
  <g stroke="#2a3440" stroke-width="3" fill="#4a5a66" transform="translate(0 52)"><path d="M1240 380 L1330 380 L1316 396 L1252 396 Z"/><path d="M1286 380 L1286 320"/><path d="M1288 324 L1318 372 L1288 372 Z" fill="#e8e2d4"/></g>
  <!-- dune con l'erba e un mulino in lontananza -->
  <path d="M0 470 Q160 400 320 450 Q480 380 640 460 L640 560 L0 560 Z" fill="url(#g-sp-duna)" stroke="#8a6a40" stroke-width="3"/>
  <g stroke="#6a8a3a" stroke-width="4" stroke-linecap="round" fill="none">
    <path d="M80 450 l-6 -30 M90 448 l4 -32 M100 452 l12 -26 M260 440 l-4 -30 M272 442 l8 -28 M480 430 l-6 -32 M492 432 l6 -30 M560 450 l2 -28"/>
  </g>
  <g stroke="#2a2a34" stroke-width="3" stroke-linejoin="round">
    <path d="M410 410 L420 330 L440 330 L450 410 Z" fill="#7a5a4a"/><path d="M412 330 L448 330 L430 312 Z" fill="#4a3a3a"/>
    <path d="M430 330 L390 270 M430 330 L480 290 M430 330 L470 390 M430 330 L380 370" stroke-width="5"/>
  </g>
  <!-- spiaggia -->
  <path d="M0 540 Q800 510 1600 530 L1600 900 L0 900 Z" fill="url(#g-sp-sabbia)"/>
  <g fill="#b89a6a" opacity=".5" stroke="none">
    <ellipse cx="200" cy="640" rx="60" ry="6"/><ellipse cx="560" cy="700" rx="90" ry="7"/><ellipse cx="980" cy="660" rx="70" ry="6"/><ellipse cx="1300" cy="760" rx="110" ry="8"/>
    <ellipse cx="760" cy="820" rx="120" ry="8"/><ellipse cx="360" cy="860" rx="90" ry="7"/>
  </g>
  <!-- conchiglie e alghe -->
  <g stroke="#1d1428" stroke-width="2">
    <path d="M300 760 q10 -14 20 0 z" fill="#f2d8c8"/><path d="M1120 840 q10 -14 20 0 z" fill="#e8c8b8"/><path d="M880 720 q8 -12 16 0 z" fill="#f2e2d8"/>
    <path d="M640 600 q20 -10 40 4 q-20 6 -40 -4" fill="#4a6a3a"/><path d="M1460 640 q20 -10 40 4 q-20 6 -40 -4" fill="#4a6a3a"/>
  </g>
  <!-- barca dei pescatori tirata a riva -->
  <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <ellipse cx="1330" cy="626" rx="170" ry="14" fill="#000" opacity=".2" stroke="none"/>
    <path d="M1170 560 L1490 560 L1450 620 L1210 620 Z" fill="url(#g-sp-legno)"/>
    <path d="M1180 574 L1484 574" stroke="#c89a5a" stroke-width="3"/>
    <path d="M1330 560 L1330 470" stroke="#5a3a1e" stroke-width="8"/>
    <path d="M1300 474 Q1260 520 1290 560" fill="none" stroke="#8a7a5a" stroke-width="3"/>
  </g>
  <!-- Ottone sulla spiaggia -->
  <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <ellipse cx="140" cy="742" rx="110" ry="12" fill="#000" opacity=".3" stroke="none"/>
    <rect x="40" y="480" width="200" height="262" rx="10" fill="url(#g-ottone)"/>
    <rect x="60" y="512" width="160" height="216" rx="6" fill="#ffe7a8" opacity=".85"/>
    <path d="M60 512 L220 728 M220 512 L60 728 M140 512 L140 728" stroke="#8a6a24" stroke-width="3" opacity=".7"/>
    <circle cx="140" cy="480" r="32" fill="#f3ead2"/>
    <path d="M140 480 L126 466 M140 480 L156 468" stroke="#1d1428" stroke-width="4"/>
    <circle cx="127" cy="488" r="5" fill="#1d1428"/><circle cx="153" cy="488" r="5" fill="#1d1428"/>
  </g>
`);
