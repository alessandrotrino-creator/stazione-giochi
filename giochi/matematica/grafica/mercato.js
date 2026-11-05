/* Gioco di Matematica · capitolo 1: la PIAZZA DEL MERCATO di una città olandese, intorno al 1600.
   Case a gradoni, selciato di mattoni a spina di pesce, la pesa pubblica con la grande bilancia.
   Banchi, personaggi e oggetti sono elementi della stanza. */
Grafica.definizioni(`
  <linearGradient id="g-me-cielo" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#a8c4d8"/><stop offset="1" stop-color="#e8eef0"/>
  </linearGradient>
  <linearGradient id="g-me-mattoni" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#a8543a"/><stop offset="1" stop-color="#7a3a26"/>
  </linearGradient>
  <linearGradient id="g-me-suolo" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#9a6a50"/><stop offset="1" stop-color="#6a4434"/>
  </linearGradient>
  <linearGradient id="g-me-ottone" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#8a6a24"/><stop offset=".5" stop-color="#f0cc6a"/><stop offset="1" stop-color="#9a7a2a"/>
  </linearGradient>
  <symbol id="ogg-edam" viewBox="0 0 140 140"><g stroke="#1d1428" stroke-width="3"><ellipse cx="70" cy="122" rx="44" ry="6" fill="#000" opacity=".25" stroke="none"/>
    <circle cx="70" cy="72" r="46" fill="#d8392b"/><path d="M36 50 Q52 36 70 34" fill="none" stroke="#ff8a7a" stroke-width="6" opacity=".7"/>
    <path d="M70 26 L70 34" stroke-width="5"/></g></symbol>
  <symbol id="ogg-borsellino" viewBox="0 0 140 140"><g stroke="#1d1428" stroke-width="3" stroke-linejoin="round"><path d="M30 60 Q70 30 110 60 L104 112 Q70 124 36 112 Z" fill="#8a5a32"/>
    <path d="M44 50 Q70 64 96 50" fill="none" stroke-width="4"/><circle cx="70" cy="40" r="8" fill="#e8b84a"/><circle cx="56" cy="88" r="7" fill="#e8b84a"/><circle cx="82" cy="92" r="7" fill="#e8b84a"/></g></symbol>
  <symbol id="ogg-pesetti" viewBox="0 0 140 140"><g stroke="#1d1428" stroke-width="3" stroke-linejoin="round"><path d="M20 60 L120 60 L112 112 L28 112 Z" fill="#6a4424"/>
    <path d="M40 60 L44 36 L56 36 L60 60 Z M66 60 L69 42 L79 42 L82 60 Z M88 60 L90 48 L98 48 L100 60 Z" fill="url(#g-me-ottone)"/></g></symbol>
`);

/* una venditrice del mercato, in piedi: gonna lunga, grembiule, cuffia bianca */
var FiguraOlandese = function (o) {
  return '<svg viewBox="0 0 200 440"><g stroke="#1d1428" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">' +
    '<ellipse cx="100" cy="432" rx="70" ry="8" fill="#000" opacity=".3" stroke="none"/>' +
    '<path d="M70 420 L66 432 L92 432 L92 420 Z M108 420 L108 432 L134 432 L130 420 Z" fill="#2a1a14"/>' +
    '<path d="M50 240 Q36 340 40 422 L160 422 Q164 340 150 240 Z" fill="' + o.gonna + '"/>' +
    '<path d="M74 244 L70 400 L130 400 L126 244 Z" fill="#f2ece0"/>' +
    '<path d="M60 166 Q54 210 56 248 L144 248 Q146 210 140 166 Q100 154 60 166 Z" fill="' + o.corpetto + '"/>' +
    '<path d="M60 172 Q38 230 54 290 L72 284 Q62 236 74 196 Z M140 172 Q162 230 146 290 L128 284 Q138 236 126 196 Z" fill="' + o.corpetto + '"/>' +
    '<ellipse cx="62" cy="294" rx="11" ry="12" fill="' + o.pelle + '"/><ellipse cx="138" cy="294" rx="11" ry="12" fill="' + o.pelle + '"/>' +
    '<path d="M70 166 Q100 186 130 166 L126 160 Q100 172 74 160 Z" fill="#f6f2ea"/>' +
    '<path d="M88 160 L90 140 L110 140 L112 160 Z" fill="' + o.pelle + '"/>' +
    '<ellipse cx="100" cy="110" rx="34" ry="38" fill="' + o.pelle + '"/>' +
    '<path d="M64 108 Q62 64 100 62 Q138 64 136 108 Q128 84 100 82 Q72 84 64 108 Z" fill="' + o.capelli + '"/>' +
    '<path d="M60 100 Q60 52 100 50 Q140 52 140 100 L132 98 Q128 66 100 64 Q72 66 68 98 Z" fill="#f6f2ea"/>' +
    '<circle cx="88" cy="110" r="3.5" fill="#1d1428" stroke="none"/><circle cx="112" cy="110" r="3.5" fill="#1d1428" stroke="none"/>' +
    '<path d="M82 100 Q88 96 94 100 M106 100 Q112 96 118 100" fill="none" stroke-width="2.5"/>' +
    '<path d="M100 114 Q104 122 98 124" fill="none" stroke="#a0623e" stroke-width="3"/>' +
    '<circle cx="80" cy="124" r="6" fill="#e07a6a" opacity=".3" stroke="none"/><circle cx="120" cy="124" r="6" fill="#e07a6a" opacity=".3" stroke="none"/>' +
    '<g class="bocca"><path d="M92 132 Q100 137 108 132 Q100 142 92 132 Z" fill="#8a3a36" stroke-width="2"/></g>' +
    "</g></svg>";
};

/* la grande bilancia della pesa: pendenza > 0 = il piatto della farina (a sinistra) è più in basso; 0 = equilibrio; < 0 = pesano di più i pesetti */
var Bilancia = function (pendenza) {
  var a = Math.max(-1, Math.min(1, pendenza)) * 12, rad = a * Math.PI / 180;
  var sx = 180 - 120 * Math.cos(rad), sy = 80 + 120 * Math.sin(rad), dx = 180 + 120 * Math.cos(rad), dy = 80 - 120 * Math.sin(rad);
  function piatto(x, y, cosa) {
    return '<path d="M' + x + " " + y + " L" + (x - 40) + " " + (y + 90) + " M" + x + " " + y + " L" + (x + 40) + " " + (y + 90) + '" stroke="#5a4a2a" stroke-width="3"/>' +
      '<path d="M' + (x - 56) + " " + (y + 90) + " L" + (x + 56) + " " + (y + 90) + " Q" + x + " " + (y + 116) + " " + (x - 56) + " " + (y + 90) + ' Z" fill="url(#g-me-ottone)"/>' + cosa(x, y + 90);
  }
  return '<svg viewBox="0 0 360 360"><g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">' +
    '<path d="M170 80 L160 340 L200 340 L190 80 Z" fill="#5a3a22"/><path d="M120 340 L240 340 L248 356 L112 356 Z" fill="#3a2414"/>' +
    '<path d="M' + sx.toFixed(1) + " " + sy.toFixed(1) + " L" + dx.toFixed(1) + " " + dy.toFixed(1) + '" stroke="#3a2a14" stroke-width="10"/>' +
    '<circle cx="180" cy="80" r="12" fill="url(#g-me-ottone)"/>' +
    '<path d="M180 80 L' + (180 - 60 * Math.sin(rad)).toFixed(1) + " " + (80 - 60 * Math.cos(rad)).toFixed(1) + '" stroke="#d8392b" stroke-width="5"/>' +
    piatto(sx, sy, function (x, y) { return '<path d="M' + (x - 36) + " " + (y - 2) + " Q" + x + " " + (y - 60) + " " + (x + 36) + " " + (y - 2) + ' Z" fill="#c8a070"/><path d="M' + (x - 10) + " " + (y - 44) + ' l20 0" stroke-width="5"/>'; }) +
    piatto(dx, dy, function () { return ""; }) +
    "</g></svg>";
};

Grafica.sfondo("mercato", `
  <rect width="1600" height="900" fill="url(#g-me-cielo)"/>
  <!-- case con le facciate a gradoni -->
  <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <path d="M0 560 L0 200 L40 200 L40 160 L80 160 L80 120 L160 120 L160 160 L200 160 L200 200 L240 200 L240 560 Z" fill="url(#g-me-mattoni)"/>
    <path d="M240 560 L240 230 L280 190 L320 150 L360 190 L400 230 L400 560 Z" fill="#c89a6a"/>
    <path d="M1200 560 L1200 210 L1240 210 L1240 170 L1280 170 L1280 130 L1360 130 L1360 170 L1400 170 L1400 210 L1440 210 L1440 560 Z" fill="#8a4a34"/>
    <path d="M1440 560 L1440 250 L1520 180 L1600 250 L1600 560 Z" fill="url(#g-me-mattoni)"/>
  </g>
  <g fill="#e8eef0" stroke="#1d1428" stroke-width="3">
    <rect x="60" y="240" width="44" height="64" /><rect x="136" y="240" width="44" height="64"/><rect x="60" y="360" width="44" height="64"/><rect x="136" y="360" width="44" height="64"/>
    <rect x="296" y="260" width="48" height="70"/><rect x="296" y="380" width="48" height="70"/>
    <rect x="1250" y="250" width="44" height="64"/><rect x="1346" y="250" width="44" height="64"/><rect x="1250" y="370" width="44" height="64"/><rect x="1346" y="370" width="44" height="64"/>
    <rect x="1496" y="290" width="48" height="66"/><rect x="1496" y="400" width="48" height="66"/>
  </g>
  <g stroke="#1d1428" stroke-width="2" opacity=".5"><path d="M82 240 v64 M158 240 v64 M82 360 v64 M158 360 v64 M320 260 v70 M1272 250 v64 M1368 250 v64 M1520 290 v66"/></g>
  <!-- la pesa pubblica al centro, con il frontone -->
  <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <path d="M440 560 L440 250 L800 150 L1160 250 L1160 560 Z" fill="#d8c8a8"/>
    <path d="M440 250 L800 150 L1160 250 Z" fill="#b89a6a"/>
    <path d="M760 210 Q800 180 840 210 Q800 240 760 210 Z" fill="url(#g-me-ottone)"/>
    <path d="M520 560 L520 330 Q600 270 680 330 L680 560 Z M920 560 L920 330 Q1000 270 1080 330 L1080 560 Z" fill="#4a3a30"/>
    <rect x="440" y="290" width="720" height="16" fill="#8a6a44"/>
  </g>
  <!-- selciato di mattoni a spina di pesce (lo disegna la funzione qui sotto) -->
  <rect x="0" y="560" width="1600" height="340" fill="url(#g-me-suolo)"/>
  <g id="me-selciato"></g>
  <rect x="0" y="556" width="1600" height="12" fill="#000" opacity=".3"/>
  <!-- un canale con un ponticello sul lato destro -->
  <path d="M1460 900 L1520 568 L1600 568 L1600 900 Z" fill="#4a6a7a" stroke="#1d1428" stroke-width="3"/>
  <path d="M1500 700 Q1550 680 1600 700" fill="none" stroke="#a8c8d8" stroke-width="4"/>
  <!-- Ottone, nell'angolo della piazza -->
  <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <ellipse cx="130" cy="752" rx="110" ry="12" fill="#000" opacity=".3" stroke="none"/>
    <rect x="30" y="490" width="200" height="262" rx="10" fill="url(#g-ottone)"/>
    <rect x="50" y="522" width="160" height="216" rx="6" fill="#ffe7a8" opacity=".85"/>
    <path d="M50 522 L210 738 M210 522 L50 738 M130 522 L130 738" stroke="#8a6a24" stroke-width="3" opacity=".7"/>
    <circle cx="130" cy="490" r="32" fill="#f3ead2"/>
    <path d="M130 490 L116 476 M130 490 L146 478" stroke="#1d1428" stroke-width="4"/>
    <circle cx="117" cy="498" r="5" fill="#1d1428"/><circle cx="143" cy="498" r="5" fill="#1d1428"/>
  </g>
`, function (svg) {
  // mattoni a spina di pesce in prospettiva
  var NS = "http://www.w3.org/2000/svg", g = svg.querySelector("#me-selciato");
  if (!g) return;
  var TONI = ["#a8603e", "#94503a", "#b87050", "#8a4a32"];
  for (var r = 0, y = 568, h = 18; y < 900; r++, y += h, h *= 1.12) {
    var w = h * 1.8;
    for (var x = -w + (r % 2) * w / 2; x < 1600; x += w) {
      var p = document.createElementNS(NS, "path"), t = (Math.floor(x / w) + r) % 2;
      p.setAttribute("d", t ? "M" + x + " " + y + " l" + w / 2 + " 0 l" + w / 2 + " " + h + " l" + -w / 2 + " 0 Z" : "M" + (x + w / 2) + " " + y + " l" + w / 2 + " 0 l" + -w / 2 + " " + h + " l" + -w / 2 + " 0 Z");
      p.setAttribute("fill", TONI[(r * 7 + Math.floor(x / w) * 3) % 4]); p.setAttribute("stroke", "#4a2a1e"); p.setAttribute("stroke-width", "1.2");
      g.appendChild(p);
    }
  }
});
