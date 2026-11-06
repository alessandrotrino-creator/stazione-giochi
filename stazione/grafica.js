/* =====================================================================
   STAZIONE DEI GIOCHI: disegno della stazione.
   - l'ATRIO, con i cartelli delle classi (il tabellone è testo sovrapposto);
   - tre gruppi di BINARI: prime (1-2-3, mattina), seconde (4-5-6, tramonto),
     terze (7-8-9, notte). Ogni gruppo è largo uno schermo: la "telecamera"
     scorre da uno all'altro (carrellata);
   - Ottavio il capostazione e Tecla la bigliettaia.
   Nessun testo dentro il disegno, tranne i numeri dei binari (cifre uguali in tutte le lingue).
   ===================================================================== */
Grafica.definizioni(`
  <linearGradient id="st-cielo1" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#5fb4e8"/><stop offset=".6" stop-color="#bfe3f2"/><stop offset="1" stop-color="#fff0c4"/>
  </linearGradient>
  <linearGradient id="st-cielo2" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#2a2356"/><stop offset=".55" stop-color="#8a4a6a"/><stop offset="1" stop-color="#f09a5a"/>
  </linearGradient>
  <linearGradient id="st-cielo3" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#05071c"/><stop offset=".6" stop-color="#161c4a"/><stop offset="1" stop-color="#34306a"/>
  </linearGradient>
  <linearGradient id="st-muro" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#5a3a3e"/><stop offset="1" stop-color="#3a2430"/>
  </linearGradient>
  <linearGradient id="st-pietra" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#3a2a3a"/><stop offset=".55" stop-color="#6a4e4a"/><stop offset="1" stop-color="#4a3438"/>
  </linearGradient>
  <linearGradient id="st-pilastro" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#2a1e28"/><stop offset=".4" stop-color="#7a6058"/><stop offset=".6" stop-color="#8a7062"/><stop offset="1" stop-color="#2a1e28"/>
  </linearGradient>
  <linearGradient id="st-banchina" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#7a6a7a"/><stop offset="1" stop-color="#4a3e52"/>
  </linearGradient>
  <linearGradient id="st-ferro" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#1a1a2a"/><stop offset=".5" stop-color="#3e3e58"/><stop offset="1" stop-color="#1a1a2a"/>
  </linearGradient>
  <linearGradient id="st-ottone" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#6e4a16"/><stop offset=".3" stop-color="#f3c45a"/><stop offset=".55" stop-color="#c8922e"/><stop offset="1" stop-color="#5a3a10"/>
  </linearGradient>
  <linearGradient id="st-verde" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#173c3c"/><stop offset=".45" stop-color="#3a8a80"/><stop offset="1" stop-color="#173c3c"/>
  </linearGradient>
  <linearGradient id="st-rosso" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#6a1a1a"/><stop offset=".45" stop-color="#c8402f"/><stop offset="1" stop-color="#6a1a1a"/>
  </linearGradient>
  <linearGradient id="st-guscio" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#b07a3a"/><stop offset="1" stop-color="#5a3a1a"/>
  </linearGradient>
  <linearGradient id="st-tunnel" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#05030c"/><stop offset="1" stop-color="#1d1428"/>
  </linearGradient>
  <radialGradient id="st-acqua" cx="50%" cy="40%" r="60%">
    <stop offset="0" stop-color="#7cf2cf"/><stop offset="1" stop-color="#0c4a48"/>
  </radialGradient>
  <radialGradient id="st-faro" cx="50%" cy="50%" r="50%">
    <stop offset="0" stop-color="#fffbe0"/><stop offset=".4" stop-color="#ffd36b"/><stop offset="1" stop-color="#ffd36b" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="st-quadrante" cx="50%" cy="45%" r="60%">
    <stop offset="0" stop-color="#fffaf0"/><stop offset="1" stop-color="#e6d2a4"/>
  </radialGradient>
  <radialGradient id="st-lampada" cx="50%" cy="0%" r="100%">
    <stop offset="0" stop-color="#ffe7a0" stop-opacity=".55"/><stop offset="1" stop-color="#ffe7a0" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="st-vignetta" cx="50%" cy="55%" r="80%">
    <stop offset=".55" stop-color="#05030c" stop-opacity="0"/><stop offset="1" stop-color="#05030c" stop-opacity=".7"/>
  </radialGradient>
  <filter id="st-grana" x="0" y="0" width="100%" height="100%">
    <feTurbulence type="fractalNoise" baseFrequency=".85" numOctaves="2" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/>
  </filter>
  <filter id="st-sfoca"><feGaussianBlur stdDeviation="8"/></filter>

  <!-- OTTAVIO, il piccione capostazione -->
  <symbol id="ottavio" viewBox="-70 -150 140 160" overflow="visible">
    <ellipse cx="0" cy="4" rx="46" ry="7" fill="#000" opacity=".35"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <path d="M-12 -6 L-16 4 M-4 -6 L-4 4 M8 -6 L12 4" stroke="#e8805a" stroke-width="5"/>
      <path d="M-44 -40 Q-60 -36 -66 -20 Q-52 -24 -40 -26 Z" fill="#6a7088"/>
      <path d="M-40 -30 C-46 -66 -20 -86 6 -80 C34 -74 42 -48 36 -26 C30 -6 -32 -4 -40 -30 Z" fill="#9aa0b8"/>
      <path d="M-30 -40 C-24 -56 -4 -62 12 -54 C0 -46 -10 -34 -30 -40 Z" fill="#7a8098"/>
      <path d="M8 -78 C12 -96 22 -110 34 -108 C48 -106 52 -90 46 -78 C40 -70 20 -68 8 -78 Z" fill="#9aa0b8"/>
      <path d="M12 -80 C20 -72 38 -72 46 -80 C40 -66 18 -64 12 -80 Z" fill="#5ab49a" opacity=".9"/>
      <path d="M48 -96 L62 -92 L48 -88 Z" fill="#e8b04a"/>
      <circle cx="40" cy="-98" r="6" fill="#fff"/>
      <circle cx="42" cy="-98" r="3" fill="#1d1428" stroke="none"/>
      <!-- berretto da capostazione -->
      <path d="M20 -108 Q36 -122 54 -110 L54 -104 Q36 -110 20 -102 Z" fill="#1f3a6a"/>
      <path d="M16 -104 Q36 -98 60 -104 L64 -100 Q36 -92 14 -100 Z" fill="#14264a"/>
      <circle cx="38" cy="-112" r="3.5" fill="#f3c45a"/>
      <!-- fischietto -->
      <path d="M10 -56 Q20 -50 24 -40" fill="none" stroke="#f3c45a" stroke-width="2"/>
      <rect x="20" y="-42" width="12" height="7" rx="3" fill="url(#st-ottone)"/>
    </g>
  </symbol>

  <!-- TECLA, la tartaruga bigliettaia: giacca blu, berretto, occhiali tondi e la pinza per timbrare -->
  <symbol id="tecla" viewBox="-70 -190 140 200" overflow="visible">
    <ellipse cx="0" cy="4" rx="54" ry="8" fill="#000" opacity=".35"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <!-- guscio dietro la schiena -->
      <path d="M-50 -40 C-62 -90 -40 -136 0 -138 C40 -136 58 -96 50 -44 C44 -18 -42 -14 -50 -40 Z" fill="url(#st-guscio)"/>
      <path d="M-40 -60 L-24 -50 L-6 -60 L-8 -82 L-26 -90 L-42 -80 Z M-6 -60 L12 -50 L30 -60 L30 -82 L12 -92 L-8 -82 M30 -60 L44 -52 M30 -82 L46 -88 M-26 -90 L-24 -116 L0 -126 L14 -112 L12 -92" fill="none" stroke="#3a2210" stroke-width="2.5"/>
      <!-- zampe -->
      <path d="M-26 -26 L-30 -4 Q-30 4 -16 4 L-10 4 L-10 -26 Z" fill="#7ab05a"/>
      <path d="M10 -26 L10 4 L18 4 Q32 4 30 -4 L26 -26 Z" fill="#7ab05a"/>
      <path d="M-26 0 L-26 4 M-20 0 L-20 4 M16 0 L16 4 M22 0 L22 4" stroke-width="2"/>
      <!-- pancia (piastrone) e giacca da bigliettaia -->
      <ellipse cx="0" cy="-66" rx="32" ry="46" fill="#e8c97a"/>
      <path d="M-30 -76 Q-34 -40 -24 -24 L-4 -24 L-8 -70 L-16 -104 Q-26 -98 -30 -76 Z" fill="#1f3a6a"/>
      <path d="M30 -76 Q34 -40 24 -24 L4 -24 L8 -70 L16 -104 Q26 -98 30 -76 Z" fill="#1f3a6a"/>
      <path d="M-12 -46 H-4 M-12 -60 H-4 M4 -46 H12 M4 -60 H12" stroke="#c8a85a" stroke-width="2"/>
      <g fill="url(#st-ottone)" stroke-width="2"><circle cx="-18" cy="-74" r="3.5"/><circle cx="-18" cy="-56" r="3.5"/><circle cx="18" cy="-74" r="3.5"/><circle cx="18" cy="-56" r="3.5"/></g>
      <!-- borsa dei biglietti a tracolla -->
      <path d="M-20 -104 L30 -36" stroke="#8a5a32" stroke-width="5"/>
      <path d="M22 -44 L46 -44 L46 -20 L22 -20 Z" fill="#a8703a"/>
      <path d="M22 -44 L46 -44 L42 -34 L26 -34 Z" fill="#8a5a32"/>
      <!-- braccio sinistro con un biglietto, braccio destro con la pinza -->
      <path d="M-30 -90 Q-52 -78 -54 -58 Q-54 -50 -46 -52 Q-42 -70 -26 -76 Z" fill="#7ab05a"/>
      <path d="M-64 -66 L-44 -70 L-40 -54 L-60 -50 Z" fill="#f6e7b8" stroke-width="2"/>
      <path d="M-58 -62 L-46 -64" stroke="#c8402f" stroke-width="2"/>
      <path d="M30 -90 Q50 -96 56 -112 Q58 -120 50 -120 Q44 -104 26 -102 Z" fill="#7ab05a"/>
      <path d="M48 -118 L60 -146 M54 -116 L68 -142" stroke="#9aa0b8" stroke-width="5"/>
      <circle cx="51" cy="-117" r="4" fill="#9aa0b8" stroke-width="2"/>
      <!-- collo e testa -->
      <path d="M-10 -104 Q-12 -122 -2 -130 L14 -130 Q18 -120 12 -104 Z" fill="#7ab05a"/>
      <ellipse cx="4" cy="-142" rx="26" ry="22" fill="#8ac06a"/>
      <path d="M-12 -130 Q4 -122 22 -132" fill="none" stroke-width="2.5"/>
      <circle cx="-6" cy="-146" r="8" fill="#fff" stroke-width="2.5"/><circle cx="14" cy="-146" r="8" fill="#fff" stroke-width="2.5"/>
      <path d="M2 -146 L6 -146" stroke-width="2"/>
      <circle cx="-4" cy="-145" r="3" fill="#1d1428" stroke="none"/><circle cx="16" cy="-145" r="3" fill="#1d1428" stroke="none"/>
      <circle cx="-10" cy="-136" r="3.5" fill="#f0a0a0" stroke="none" opacity=".7"/><circle cx="24" cy="-136" r="3.5" fill="#f0a0a0" stroke="none" opacity=".7"/>
      <!-- berretto -->
      <path d="M-22 -158 Q4 -180 30 -158 L30 -152 Q4 -160 -22 -152 Z" fill="#1f3a6a"/>
      <path d="M-22 -154 Q4 -160 30 -154 L30 -149 Q4 -155 -22 -149 Z" fill="#c8402f" stroke-width="2"/>
      <path d="M-2 -150 Q16 -148 36 -146 L38 -142 Q14 -140 -4 -146 Z" fill="#14264a"/>
      <circle cx="4" cy="-166" r="4" fill="url(#st-ottone)" stroke-width="2"/>
    </g>
  </symbol>

  <!-- ===== pezzi dei binari (uguali nei tre gruppi; cambia solo il cielo) ===== -->
  <g id="st-tettoia">
    <path d="M-20 470 Q800 -170 1620 470" fill="none" stroke="#1a1a2a" stroke-width="26"/>
    <path d="M-20 470 Q800 -170 1620 470" fill="none" stroke="#3e3e58" stroke-width="8"/>
    <g stroke="#1a1a2a" stroke-width="7" fill="none" opacity=".85">
      <path d="M800 150 L80 470"/><path d="M800 150 L300 470"/><path d="M800 150 L540 470"/><path d="M800 150 L800 470"/>
      <path d="M800 150 L1060 470"/><path d="M800 150 L1300 470"/><path d="M800 150 L1520 470"/>
      <path d="M140 380 Q800 -20 1460 380"/><path d="M300 300 Q800 40 1300 300"/>
    </g>
    <g fill="#fff" opacity=".06">
      <path d="M800 150 L300 470 L540 470 Z"/><path d="M800 150 L1060 470 L1300 470 Z"/>
    </g>
  </g>

  <!-- il grande orologio della stazione (tenuto premuto 3 secondi apre la modalità docente) -->
  <g id="st-orologio-g" stroke="#1d1428" stroke-linejoin="round">
    <path d="M1470 0 L1470 128" stroke="#1a1a2a" stroke-width="5"/>
    <circle cx="1470" cy="200" r="78" fill="url(#st-ottone)" stroke-width="5"/>
    <circle cx="1470" cy="200" r="64" fill="url(#st-quadrante)" stroke-width="3"/>
    <g stroke-width="4">
      <path d="M1470 140 L1470 154 M1470 246 L1470 260 M1410 200 L1424 200 M1516 200 L1530 200"/>
      <path d="M1500 148 L1496 155 M1522 170 L1515 174 M1522 230 L1515 226 M1500 252 L1496 245 M1440 252 L1444 245 M1418 230 L1425 226 M1418 170 L1425 174 M1440 148 L1444 155" stroke-width="2.5"/>
    </g>
    <path id="st-ore" d="M1470 200 L1470 166" stroke-width="7" stroke-linecap="round"/>
    <path id="st-min" d="M1470 200 L1514 200" stroke-width="4.5" stroke-linecap="round"/>
    <circle cx="1470" cy="200" r="7" fill="#c8402f" stroke-width="2.5"/>
    <path d="M1420 160 A64 64 0 0 1 1470 136" fill="none" stroke="#fff" stroke-width="4" opacity=".5"/>
  </g>
`);

var StazioneGrafica = (function () {
  /* ===== PROSPETTIVA: tutte le linee del pavimento vanno verso il punto di fuga (800, 200).
     s = 1 è il "piano vicino" (la fronte dei treni, appoggiata a terra a y 845);
     s = 0,558 è il muro in fondo (y 560), dove si aprono le gallerie.
     pt(x, y, s) porta un punto disegnato sul piano vicino alla profondità s. ===== */
  var VX = 800, VY = 200, FONDO = 0.558, BASE = 845;
  var BINARI_X = [-538, 0, 538];                                                   // centri dei binari sul piano vicino (rispetto a 800)
  var CENTRI = BINARI_X.map(function (c) { return Math.round(VX + c * FONDO); });  // bocche delle gallerie: 500, 800, 1100
  var VICINI = BINARI_X.map(function (c) { return VX + c; });                      // fronte dei treni: 262, 800, 1338
  var S_PARAURTI = 0.88;
  var PARAURTI = BINARI_X.map(function (c) { return Math.round(VX + c * S_PARAURTI); });
  var TRENI = { scienze: "st-treno-scienze", matematica: "st-treno-matematica" };

  function r1(v) { return Math.round(v * 10) / 10; }
  function px(x, s) { return r1(VX + (x - VX) * s); }
  function py(y, s) { return r1(VY + (y - VY) * s); }
  function pt(x, y, s) { return px(x, s) + " " + py(y, s); }
  function poli(p) { return "M" + p.join(" L") + " Z"; }

  /* facciata in fondo: muro, portali di pietra e le tre gallerie da cui escono i treni */
  function facciata() {
    var s = '<rect y="420" width="1600" height="142" fill="url(#st-muro)"/>' +
      '<g fill="#ffcf7a" opacity=".55">' + [60, 250, 1290, 1480].map(function (x) {
        return '<path d="M' + x + " 540 L" + x + " 480 Q" + (x + 30) + " 456 " + (x + 60) + " 480 L" + (x + 60) + ' 540 Z"/>';
      }).join("") + "</g>" + '<rect y="416" width="1600" height="10" fill="#1d1428"/>';
    CENTRI.forEach(function (c) {
      s += '<path d="M' + (c - 138) + " 562 L" + (c - 138) + " 452 A138 122 0 0 1 " + (c + 138) + " 452 L" + (c + 138) + ' 562 Z" fill="url(#st-muro)" stroke="#1d1428" stroke-width="4"/>' +
        '<path d="M' + (c - 124) + " 562 L" + (c - 124) + " 456 A124 110 0 0 1 " + (c + 124) + " 456 L" + (c + 124) + ' 562" fill="none" stroke="#8a6a5a" stroke-width="7" opacity=".7"/>' +
        '<path d="M' + (c - 110) + " 562 L" + (c - 110) + " 460 A110 100 0 0 1 " + (c + 110) + " 460 L" + (c + 110) + ' 562 Z" fill="url(#st-tunnel)" stroke="#1d1428" stroke-width="4"/>' +
        '<rect x="' + (c - 16) + '" y="336" width="32" height="26" fill="#8a6a5a" stroke="#1d1428" stroke-width="3"/>';
    });
    return s;
  }

  /* colonne di ghisa con le lampade, sulle due banchine in fondo */
  function colonne() {
    var s = "";
    [650, 950].forEach(function (x) {
      s += '<rect x="' + (x - 11) + '" y="150" width="22" height="420" fill="url(#st-ferro)"/>' +
        '<path d="M' + (x - 21) + " 150 L" + (x + 21) + " 150 L" + (x + 15) + " 170 L" + (x - 15) + " 170 Z M" + (x - 23) + " 566 L" + (x + 23) + " 566 L" + (x + 19) + " 580 L" + (x - 19) + ' 580 Z" fill="#1a1a2a"/>' +
        '<path d="M' + x + " 200 L" + x + ' 540" stroke="#5a5a78" stroke-width="2"/>' +
        '<g stroke="#1a1a2a" stroke-width="3"><path d="M' + x + " 170 L" + x + ' 236"/><path d="M' + (x - 15) + " 236 L" + (x + 15) + " 236 L" + (x + 7) + " 252 L" + (x - 7) + ' 252 Z" fill="#2a2a3a"/></g>' +
        '<path d="M' + (x - 7) + " 252 L" + (x - 81) + " 420 L" + (x + 81) + " 420 L" + (x + 7) + ' 252 Z" fill="url(#st-lampada)"/>';
    });
    return s;
  }

  /* pavimento: banchine, massicciata, traversine e rotaie, tutto verso il punto di fuga */
  function terra() {
    var lontano = FONDO, vicino = 1.1;
    function striscia(a, b, sa, sb) { return poli([pt(VX + a, BASE, sa), pt(VX + b, BASE, sa), pt(VX + b, BASE, sb), pt(VX + a, BASE, sb)]); }
    var s = '<path d="M0 560 H1600 V900 H0 Z" fill="#2a2230"/>';
    // massicciata (la ghiaia sotto i binari)
    s += '<g fill="#3a2e36">' + BINARI_X.map(function (c) { return '<path d="' + striscia(c - 160, c + 160, lontano, vicino) + '"/>'; }).join("") + "</g>";
    // banchine con la riga gialla di sicurezza
    var banchine = [[-2200, -708], [-368, -170], [170, 368], [708, 2200]];
    s += '<g fill="url(#st-banchina)" stroke="#1d1428" stroke-width="4">' + banchine.map(function (b) { return '<path d="' + striscia(b[0], b[1], lontano, vicino) + '"/>'; }).join("") + "</g>";
    s += '<g stroke="#e8d9a0" stroke-width="5" opacity=".8">';
    banchine.forEach(function (b) {
      if (b[0] > -2000) s += '<path d="M' + pt(VX + b[0] + 22, BASE, lontano) + " L" + pt(VX + b[0] + 22, BASE, vicino) + '"/>';
      if (b[1] < 2000) s += '<path d="M' + pt(VX + b[1] - 22, BASE, lontano) + " L" + pt(VX + b[1] - 22, BASE, vicino) + '"/>';
    });
    s += "</g>";
    // traversine, sempre più fitte verso il fondo
    s += '<g stroke="#5a4232">';
    BINARI_X.forEach(function (c) {
      [0.59, 0.63, 0.68, 0.735, 0.8, 0.875, 0.96, 1.05].forEach(function (k) {
        s += '<path d="M' + pt(VX + c - 135, BASE, k) + " L" + pt(VX + c + 135, BASE, k) + '" stroke-width="' + r1(14 * k) + '"/>';
      });
    });
    s += "</g>";
    // rotaie
    s += '<g stroke="#9a9ab8" stroke-width="6">';
    BINARI_X.forEach(function (c) {
      [-107, 107].forEach(function (d) { s += '<path d="M' + pt(VX + c + d, BASE, lontano) + " L" + pt(VX + c + d, BASE, vicino) + '"/>'; });
    });
    s += '</g><path d="M0 560 L1600 560" stroke="#1d1428" stroke-width="6"/>';
    // panchina sulla banchina tra il secondo e il terzo binario (Ottavio ci sta accanto)
    s += '<g stroke="#1d1428" stroke-width="4"><path d="M990 800 L1140 800 L1150 812 L980 812 Z" fill="#8a5a32"/>' +
      '<path d="M986 780 L1146 780" stroke="#8a5a32" stroke-width="10"/><path d="M1000 812 L996 850 M1130 812 L1134 850" stroke-width="7"/></g>';
    return s;
  }

  /* un blocco del treno (carrozza o cabina) visto in prospettiva: tetto, fianco visibile, testata.
     m = mezza larghezza, su/giu = tetto e fondo (piano vicino), sa/sb = profondità davanti e dietro */
  function blocco(X, m, su, giu, sa, sb, colore, lato, finestre) {
    var s = "";
    if (lato) {
      var x = X + lato * m;
      s += '<path d="' + poli([pt(x, su, sa), pt(x, giu, sa), pt(x, giu, sb), pt(x, su, sb)]) + '" fill="' + colore + '"/>';
      for (var j = 0; j < finestre; j++) {
        var a = sa - (sa - sb) * (0.1 + j * 0.3), b = a - (sa - sb) * 0.2;
        s += '<path d="' + poli([pt(x, su + 34, a), pt(x, su + 110, a), pt(x, su + 110, b), pt(x, su + 34, b)]) + '" fill="#fff0b0" stroke-width="3"/>';
      }
      s += '<path d="M' + pt(x, giu - 30, sa) + " L" + pt(x, giu - 30, sb) + '" stroke="#f3c45a" stroke-width="3"/>';
    }
    s += '<path d="' + poli([pt(X - m, su, sa), pt(X + m, su, sa), pt(X + m, su, sb), pt(X - m, su, sb)]) + '" fill="#4a4a5e"/>';
    s += '<path d="' + poli([pt(X - m, su, sa), pt(X + m, su, sa), pt(X + m, giu, sa), pt(X - m, giu, sa)]) + '" fill="' + colore + '"/>';
    return s;
  }

  /* un TRENO: locomotiva a vapore vista di fronte, con le carrozze che si perdono nella galleria.
     Il frontale cambia con la materia: oblò-acquario (Scienze) o orologio (Matematica). */
  function treno(tema, i) {
    var c = BINARI_X[i], X = VX + c, lato = c < 0 ? 1 : (c > 0 ? -1 : 0);
    var sci = tema === "scienze";
    var corpo = sci ? "url(#st-verde)" : "url(#st-rosso)", carrozza = sci ? "#2c7a6a" : "#9a3434";
    var s = '<g id="' + TRENI[tema] + '" stroke="#1d1428" stroke-width="4" stroke-linejoin="round">';
    s += '<ellipse cx="' + X + '" cy="' + (BASE + 4) + '" rx="210" ry="20" fill="#000" opacity=".45" stroke="none"/>';
    // carrozze (dalla più lontana) e cabina del macchinista
    s += blocco(X, 150, 570, 800, 0.68, FONDO, carrozza, lato, 3);
    s += blocco(X, 150, 570, 800, 0.8, 0.695, carrozza, lato, 3);
    s += blocco(X, 168, 500, 795, 0.905, 0.815, corpo, lato, 1);
    s += '<path d="M' + pt(X - 178, 500, 0.905) + " Q" + pt(X, 452, 0.905) + " " + pt(X + 178, 500, 0.905) + '" fill="#4a4a5e"/>';
    s += '<g fill="#fff0b0">' + [-1, 1].map(function (k) {
      return '<path d="' + poli([pt(X + k * 112, 535, 0.905), pt(X + k * 152, 535, 0.905), pt(X + k * 152, 610, 0.905), pt(X + k * 112, 610, 0.905)]) + '"/>';
    }).join("") + "</g>";
    // ruote motrici sul fianco visibile, con la biella
    if (lato) {
      var ruote = [0.965, 0.93].map(function (k) { return { x: px(X + lato * 120, k), y: py(800, k), r: r1(44 * k) }; });
      ruote.slice().reverse().forEach(function (w) {
        s += '<circle cx="' + w.x + '" cy="' + w.y + '" r="' + w.r + '" fill="#2a2a3a"/><circle cx="' + w.x + '" cy="' + w.y + '" r="' + r1(w.r * 0.35) + '" fill="url(#st-ottone)" stroke-width="2"/>';
      });
      s += '<path d="M' + ruote[0].x + " " + (ruote[0].y + 14) + " L" + ruote[1].x + " " + (ruote[1].y + 14) + '" stroke="#c9c9d8" stroke-width="7"/>';
    }
    // caldaia: anelli dal fondo verso il davanti
    [0.905, 0.935, 0.965].forEach(function (k) {
      s += '<circle cx="' + px(X, k) + '" cy="' + py(655, k) + '" r="' + r1(105 * k) + '" fill="' + corpo + '"/>';
    });
    // duomo d'ottone e ciminiera
    s += '<path d="M' + pt(X - 30, 556, 0.935) + " Q" + pt(X, 500, 0.935) + " " + pt(X + 30, 556, 0.935) + ' Z" fill="url(#st-ottone)"/>';
    s += '<path d="' + poli([pt(X - 22, 570, 0.985), pt(X - 18, 478, 0.985), pt(X + 18, 478, 0.985), pt(X + 22, 570, 0.985)]) + '" fill="#2a2a3a"/>';
    s += '<path d="' + poli([pt(X - 32, 486, 0.985), pt(X - 30, 464, 0.985), pt(X + 30, 464, 0.985), pt(X + 32, 486, 0.985)]) + '" fill="url(#st-ottone)"/>';
    s += '<g fill="#f4ecf4" opacity=".7" stroke="none"><circle cx="' + (X + 6) + '" cy="438" r="20"/><circle cx="' + (X + 36) + '" cy="410" r="16"/><circle cx="' + (X + 66) + '" cy="390" r="11"/></g>';
    // camera a fumo (il frontale)
    s += '<circle cx="' + X + '" cy="655" r="105" fill="' + corpo + '"/>';
    if (sci) {
      s += '<g transform="translate(' + X + ' 655) scale(.94) translate(-335 -575)">' +
        '<circle cx="335" cy="575" r="98" fill="url(#st-ottone)"/><circle cx="335" cy="575" r="80" fill="url(#st-acqua)"/>' +
        '<path d="M300 560 Q330 518 360 560 Q330 552 300 560 Z" fill="#c9b8ff" stroke-width="2.5"/>' +
        '<path d="M310 560 q-4 24 4 42 M326 560 q4 28 -2 50 M344 560 q-4 24 4 44" fill="none" stroke="#c9b8ff" stroke-width="3"/>' +
        '<path d="M360 630 Q352 604 372 592 Q394 584 404 606 Q406 628 384 636 Z" fill="#f6efe0" stroke-width="2.5"/>' +
        '<path d="M270 640 q10 -30 0 -50 M282 644 q-8 -24 6 -40" fill="none" stroke="#2c8a4a" stroke-width="6"/>' +
        '<path d="M285 520 Q300 506 320 504" fill="none" stroke="#fff" stroke-width="5" opacity=".5"/>' +
        '<g fill="#1d1428" stroke="none"><circle cx="335" cy="487" r="5"/><circle cx="423" cy="575" r="5"/><circle cx="335" cy="663" r="5"/><circle cx="247" cy="575" r="5"/></g></g>';
    } else {
      s += '<g transform="translate(' + X + ' 655) scale(.8) translate(-800 -590)">' +
        '<circle cx="800" cy="590" r="118" fill="url(#st-ottone)"/><circle cx="800" cy="590" r="100" fill="url(#st-quadrante)"/>' +
        '<g stroke-width="4"><path d="M800 494 L800 512 M800 668 L800 686 M704 590 L722 590 M878 590 L896 590"/>' +
        '<path d="M848 507 L842 518 M883 542 L872 548 M883 638 L872 632 M848 673 L842 662 M752 673 L758 662 M717 638 L728 632 M717 542 L728 548 M752 507 L758 518" stroke-width="3"/></g>' +
        '<path id="st-loco-ore" d="M800 590 L800 532" stroke-width="9"/><path id="st-loco-min" d="M800 590 L858 590" stroke-width="6"/>' +
        '<circle cx="800" cy="590" r="10" fill="url(#st-ottone)"/></g>';
    }
    // traversa dei respingenti, fanali, respingenti
    s += '<rect x="' + (X - 175) + '" y="758" width="350" height="42" fill="#c8402f"/>';
    s += '<path d="M' + (X - 150) + " 766 H" + (X + 150) + '" stroke="#f3c45a" stroke-width="3"/>';
    [-1, 1].forEach(function (k) {
      s += '<circle cx="' + (X + k * 112) + '" cy="728" r="20" fill="url(#st-faro)"/><circle cx="' + (X + k * 112) + '" cy="728" r="14" fill="#fff6c2"/>' +
        '<rect x="' + (X + k * 145 - 8) + '" y="772" width="16" height="16" fill="#2a2a3a"/>' +
        '<ellipse cx="' + (X + k * 145) + '" cy="780" rx="24" ry="22" fill="url(#st-ottone)"/>';
    });
    // ruote davanti e spazzaneve
    s += '<g fill="#2a2a3a"><circle cx="' + (X - 92) + '" cy="815" r="30"/><circle cx="' + (X + 92) + '" cy="815" r="30"/></g>';
    s += '<path d="M' + (X - 150) + " 800 L" + (X + 150) + " 800 L" + (X + 104) + " " + BASE + " L" + (X - 104) + " " + BASE + ' Z" fill="#3a3a4a"/>';
    s += '<path d="M' + [-110, -55, 0, 55, 110].map(function (d) { return (X + d) + " 804 L" + (X + d * 0.72) + " " + (BASE - 4); }).join(" M") + '" stroke="#1d1428" stroke-width="3"/>';
    return s + "</g>";
  }

  /* binario vuoto: paraurti di fine corsa con il palo del cartello */
  function paraurti(i) {
    var X = VX + BINARI_X[i], k = S_PARAURTI;
    function q(x, y) { return pt(X + x, y, k); }
    return '<g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">' +
      '<path d="M' + q(-110, 800) + " L" + q(-110, BASE) + " M" + q(110, 800) + " L" + q(110, BASE) + '" stroke-width="10"/>' +
      '<path d="' + poli([q(-130, 735), q(130, 735), q(138, 800), q(-138, 800)]) + '" fill="#c8402f"/>' +
      '<path d="M' + [-100, -45, 10, 65].map(function (d) { return q(d, 735) + " L" + q(d + 24, 800); }).join(" M") + '" stroke="#fff" stroke-width="11" opacity=".85"/>' +
      '<circle cx="' + px(X - 92, k) + '" cy="' + py(767, k) + '" r="12" fill="url(#st-ottone)"/><circle cx="' + px(X + 92, k) + '" cy="' + py(767, k) + '" r="12" fill="url(#st-ottone)"/>' +
      '<path d="M' + q(0, 735) + " L" + px(X, k) + ' 596" stroke-width="8"/></g>';
  }

  Grafica.definizioni('<g id="st-facciata">' + facciata() + '</g><g id="st-colonne">' + colonne() + '</g><clipPath id="st-ritaglio"><rect width="1600" height="900"/></clipPath>' +
    '<g id="st-terra" clip-path="url(#st-ritaglio)">' + terra() + "</g>" +
    treno("scienze", 0) + treno("matematica", 1));

  /* cielo diverso per ogni anno: mattina, tramonto, notte */
  function cielo(anno) {
    var s = '<rect width="1600" height="900" fill="url(#st-cielo' + anno + ')"/>';
    if (anno === 1) s += '<circle cx="300" cy="200" r="60" fill="#fff6c8" opacity=".8" filter="url(#st-sfoca)"/>' +
      '<g fill="#fff" opacity=".75"><ellipse cx="520" cy="130" rx="70" ry="18"/><ellipse cx="570" cy="118" rx="44" ry="16"/><ellipse cx="1200" cy="220" rx="90" ry="20"/><ellipse cx="1150" cy="206" rx="50" ry="16"/></g>';
    if (anno === 2) s += '<circle cx="1180" cy="330" r="70" fill="#ffd59a" opacity=".55" filter="url(#st-sfoca)"/>' +
      '<g fill="#fff" opacity=".7"><circle cx="220" cy="90" r="2"/><circle cx="420" cy="60" r="1.5"/><circle cx="1280" cy="80" r="2"/><circle cx="1450" cy="140" r="1.5"/><circle cx="640" cy="40" r="1.2"/></g>';
    if (anno === 3) {
      s += '<circle cx="1220" cy="190" r="46" fill="#fff4d6"/><circle cx="1240" cy="180" r="42" fill="#161c4a"/>';
      var seme = 11; s += '<g fill="#fff">';
      for (var i = 0; i < 60; i++) {
        seme = (seme * 9301 + 49297) % 233280; var x = seme / 233280 * 1600;
        seme = (seme * 9301 + 49297) % 233280; var y = seme / 233280 * 420;
        s += '<circle cx="' + x.toFixed(0) + '" cy="' + y.toFixed(0) + '" r="' + (1 + (i % 3) * 0.6) + '" opacity="' + (0.4 + (i % 4) * 0.15) + '"/>';
      }
      s += "</g>";
    }
    return s;
  }

  /* sbuffi di vapore ai piedi del treno appena fermo */
  function vapore(c) {
    return '<g class="st-vapore" fill="#f4ecf4" stroke="none">' +
      '<circle cx="' + (c - 170) + '" cy="830" r="30"/><circle cx="' + (c - 120) + '" cy="845" r="22"/>' +
      '<circle cx="' + (c + 170) + '" cy="830" r="30"/><circle cx="' + (c + 120) + '" cy="845" r="22"/></g>';
  }

  /* pilastro di pietra tra un ambiente e l'altro (copre la giuntura durante la carrellata) */
  function pilastro(x) {
    return '<g stroke="#1d1428" stroke-width="4"><rect x="' + (x - 36) + '" y="-10" width="72" height="920" fill="url(#st-pilastro)"/>' +
      '<rect x="' + (x - 46) + '" y="40" width="92" height="26" fill="#5a4448"/><rect x="' + (x - 46) + '" y="820" width="92" height="40" fill="#5a4448"/></g>';
  }

  /* pavimento a scacchi di marmo in prospettiva */
  function scacchi() {
    var fx = 800, fy = 200, righe = [600, 628, 662, 704, 756, 820, 900], out = "";
    function a(xb, y) { return (fx + (xb - fx) * (y - fy) / (900 - fy)).toFixed(1); }
    for (var j = 0; j < righe.length - 1; j++) {
      for (var i = -9; i < 9; i++) {
        var b1 = 800 + i * 140, b2 = b1 + 140, y1 = righe[j], y2 = righe[j + 1];
        out += '<path d="M' + a(b1, y1) + " " + y1 + " L" + a(b2, y1) + " " + y1 + " L" + a(b2, y2) + " " + y2 + " L" + a(b1, y2) + " " + y2 +
          ' Z" fill="' + ((i + j) % 2 ? "#e8dcc4" : "#5a3e46") + '"/>';
      }
    }
    return out + '<ellipse cx="800" cy="760" rx="420" ry="70" fill="#fff" opacity=".08"/><rect y="600" width="1600" height="24" fill="#000" opacity=".3"/>';
  }

  return {
    CENTRI: CENTRI, VICINI: VICINI, PARAURTI: PARAURTI,

    /* l'ATRIO: sala con finestroni, edicola, palme, carrello dei bagagli */
    atrio: function () {
      return '<g>' +
        '<rect width="1600" height="900" fill="url(#st-pietra)"/>' +
        // finestroni ad arco con il cielo del tramonto
        '<g stroke="#1d1428" stroke-width="5">' +
          '<path d="M70 560 L70 260 Q215 110 360 260 L360 560 Z" fill="url(#st-cielo2)"/>' +
          '<path d="M1240 560 L1240 260 Q1385 110 1530 260 L1530 560 Z" fill="url(#st-cielo2)"/>' +
          '<path d="M215 150 L215 560 M70 360 L360 360 M70 460 L360 460 M1385 150 L1385 560 M1240 360 L1530 360 M1240 460 L1530 460" fill="none" stroke="#2a1e28" stroke-width="7"/>' +
        '</g>' +
        '<circle cx="290" cy="420" r="40" fill="#ffd59a" opacity=".5" filter="url(#st-sfoca)"/>' +
        // fasce di luce che entrano dai finestroni
        '<g fill="#ffd59a" opacity=".08"><path d="M70 560 L360 560 L640 900 L240 900 Z"/><path d="M1240 560 L1530 560 L1400 900 L1000 900 Z"/></g>' +
        // catene del tabellone e dei cartelli
        '<g stroke="#1a1a2a" stroke-width="4" stroke-dasharray="8 5"><path d="M470 0 L470 30 M1130 0 L1130 30"/>' +
          '<path d="M170 0 L170 450 M470 0 L470 450 M650 420 L650 450 M950 420 L950 450 M1130 0 L1130 450 M1430 280 L1430 450"/></g>' +
        // cornice di pietra in alto e zoccolo
        '<rect width="1600" height="16" fill="#2a1e28"/><rect y="560" width="1600" height="44" fill="#3a2a30"/><rect y="560" width="1600" height="8" fill="#8a6a5a"/>' +
        scacchi() +
        // EDICOLA (a sinistra)
        '<g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">' +
          '<ellipse cx="150" cy="872" rx="130" ry="12" fill="#000" opacity=".35" stroke="none"/>' +
          '<rect x="40" y="640" width="220" height="230" fill="#2c6a5a"/>' +
          '<path d="M24 640 L276 640 L256 600 L44 600 Z" fill="#e8dcc4"/>' +
          '<path d="M44 600 L65 640 M86 600 L100 640 M128 600 L135 640 M170 600 L170 640 M212 600 L205 640 M254 600 L240 640" stroke="#c8402f" stroke-width="12"/>' +
          '<rect x="58" y="660" width="184" height="90" fill="#1d1428"/>' +
          '<g stroke-width="2"><rect x="66" y="668" width="36" height="48" fill="#f6efe0"/><rect x="108" y="668" width="36" height="48" fill="#ffd36b"/><rect x="150" y="668" width="36" height="48" fill="#9fd7ff"/><rect x="192" y="668" width="40" height="48" fill="#ff9b8f"/>' +
          '<path d="M72 680 H96 M72 690 H96 M114 680 H138 M156 680 H180 M198 680 H226" stroke="#1d1428"/></g>' +
          '<rect x="58" y="770" width="184" height="16" fill="#8a5a32"/>' +
          '<g stroke-width="2"><path d="M70 786 L70 760 L120 760 L120 786" fill="#f6efe0"/><path d="M130 786 L134 756 L184 760 L180 786" fill="#c9b8ff"/><path d="M190 786 L190 762 L234 762 L234 786" fill="#7fe3a0"/></g>' +
        '</g>' +
        // PALME in vaso
        palma(440) + palma(1268) +
        // panchina al centro
        '<g stroke="#1d1428" stroke-width="4"><path d="M560 800 L760 800 L770 812 L550 812 Z" fill="#8a5a32"/><path d="M556 780 L766 780" stroke="#8a5a32" stroke-width="10"/>' +
          '<path d="M572 812 L568 850 M748 812 L752 850" stroke-width="7"/></g>' +
        // CARRELLO DEI BAGAGLI (a destra)
        '<g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">' +
          '<ellipse cx="1440" cy="880" rx="120" ry="10" fill="#000" opacity=".35" stroke="none"/>' +
          '<path d="M1330 840 L1550 840 L1550 852 L1330 852 Z" fill="#3e3e58"/>' +
          '<path d="M1550 852 L1570 700 M1330 852 L1320 760" stroke-width="7" fill="none"/>' +
          '<circle cx="1360" cy="868" r="14" fill="#1a1a2a"/><circle cx="1520" cy="868" r="14" fill="#1a1a2a"/>' +
          '<rect x="1344" y="770" width="110" height="70" rx="8" fill="#a8703a"/><path d="M1380 770 Q1400 750 1420 770" fill="none"/>' +
          '<rect x="1460" y="740" width="80" height="100" rx="8" fill="#5a7ab8"/><path d="M1470 760 H1530" stroke="#f6efe0" stroke-width="3"/>' +
          '<rect x="1370" y="720" width="80" height="50" rx="6" fill="#c8402f"/><circle cx="1440" cy="745" r="9" fill="#ffd36b" stroke-width="2"/>' +
        '</g>' +
        pilastro(0) + pilastro(1600) +
      '</g>';

      function palma(x) {
        return '<g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">' +
          '<ellipse cx="' + x + '" cy="872" rx="50" ry="8" fill="#000" opacity=".35" stroke="none"/>' +
          '<path d="M' + (x - 40) + ' 790 L' + (x + 40) + ' 790 L' + (x + 30) + ' 870 L' + (x - 30) + ' 870 Z" fill="#b0603a"/>' +
          '<path d="M' + (x - 44) + ' 782 L' + (x + 44) + ' 782 L' + (x + 44) + ' 796 L' + (x - 44) + ' 796 Z" fill="#8a4a2a"/>' +
          '<path d="M' + x + ' 784 Q' + (x - 6) + ' 720 ' + x + ' 650" fill="none" stroke="#6a4a2a" stroke-width="10"/>' +
          '<g fill="#3a8a4a">' +
            '<path d="M' + x + ' 650 Q' + (x - 60) + ' 620 ' + (x - 110) + ' 680 Q' + (x - 60) + ' 640 ' + x + ' 660 Z"/>' +
            '<path d="M' + x + ' 650 Q' + (x + 60) + ' 620 ' + (x + 110) + ' 680 Q' + (x + 60) + ' 640 ' + x + ' 660 Z"/>' +
            '<path d="M' + x + ' 648 Q' + (x - 40) + ' 590 ' + (x - 80) + ' 600 Q' + (x - 30) + ' 610 ' + x + ' 656 Z"/>' +
            '<path d="M' + x + ' 648 Q' + (x + 40) + ' 590 ' + (x + 80) + ' 600 Q' + (x + 30) + ' 610 ' + x + ' 656 Z"/>' +
            '<path d="M' + x + ' 650 Q' + (x + 6) + ' 590 ' + (x - 10) + ' 570 Q' + (x + 16) + ' 600 ' + (x + 6) + ' 652 Z"/>' +
          '</g></g>';
      }
    },

    /* un GRUPPO DI BINARI (anno 1, 2, 3); treni = ["scienze", "matematica", null]: chi c'è arriva, chi manca lascia il paraurti */
    binari: function (anno, treni) {
      var primo = (anno - 1) * 3 + 1;
      var s = cielo(anno) + '<use href="#st-tettoia"/><use href="#st-facciata"/><use href="#st-colonne"/><use href="#st-terra"/>';
      CENTRI.forEach(function (c, i) {
        var id = treni[i] && TRENI[treni[i]];
        if (id) s += '<g class="st-arrivo attesa" data-anno="' + anno + '"><use href="#' + id + '"/></g>' + vapore(VICINI[i]);
        else s += paraurti(i);
      });
      // numeri dei binari
      s += '<g font-family="Atkinson Hyperlegible, Segoe UI, Arial" font-weight="800" font-size="40" text-anchor="middle">';
      [VICINI[0], 680, VICINI[2]].forEach(function (x, i) {
        s += '<path d="M' + x + ' 266 L' + x + ' ' + (i === 1 ? 200 : 150) + '" stroke="#1a1a2a" stroke-width="4"/>' +
          '<circle cx="' + x + '" cy="300" r="34" fill="#fff8e6" stroke="#1d1428" stroke-width="5"/><text x="' + x + '" y="314" fill="#1d1428">' + (primo + i) + "</text>";
      });
      return s + "</g>" + (anno === 3 ? '<rect width="1600" height="900" fill="#0a0c30" opacity=".18"/>' : "");
    },

    pilastro: pilastro,

    /* primo piano che scorre più veloce (effetto profondità): colonne scure ai bordi di ogni inquadratura */
    primoPiano: function (fattore, quante) {
      var s = "";
      for (var k = 0; k < quante; k++) {
        [-20, 1620].forEach(function (dx) {
          var x = k * 1600 * fattore + dx;
          s += '<g><rect x="' + (x - 34) + '" y="-10" width="68" height="920" fill="#0d0912"/>' +
            '<rect x="' + (x - 22) + '" y="-10" width="8" height="920" fill="#3a2e3e"/>' +
            '<rect x="' + (x - 44) + '" y="140" width="88" height="22" fill="#1a1420"/><rect x="' + (x - 44) + '" y="760" width="88" height="34" fill="#1a1420"/></g>';
        });
      }
      return s;
    },

    /* cornice fissa: orologio, vignettatura e grana */
    cornice: function () {
      return '<use href="#st-orologio-g"/><rect width="1600" height="900" fill="url(#st-vignetta)"/>' +
        '<rect width="1600" height="900" filter="url(#st-grana)" opacity=".06" style="mix-blend-mode:overlay"/>';
    },

    /* le lancette dell'orologio grande e della locomotiva segnano l'ora vera */
    lancette: function () {
      var d = new Date(), h = (d.getHours() % 12 + d.getMinutes() / 60) * 30, m = d.getMinutes() * 6;
      [["st-loco-ore", h, 800, 590], ["st-loco-min", m - 90, 800, 590], ["st-ore", h, 1470, 200], ["st-min", m - 90, 1470, 200]].forEach(function (l) {
        var e = document.getElementById(l[0]);
        if (e) e.setAttribute("transform", "rotate(" + l[1] + " " + l[2] + " " + l[3] + ")");
      });
    }
  };
})();
