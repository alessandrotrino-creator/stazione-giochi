/* =====================================================================
   STAZIONE DEI GIOCHI: disegno della stazione (sfondo, treni, Ottavio).
   Nessun testo dentro il disegno: nomi, tabellone e cartelli sono testo sovrapposto.
   ===================================================================== */
Grafica.definizioni(`
  <linearGradient id="st-cielo" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#2a2356"/><stop offset=".55" stop-color="#8a4a6a"/><stop offset="1" stop-color="#f09a5a"/>
  </linearGradient>
  <linearGradient id="st-muro" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#5a3a3e"/><stop offset="1" stop-color="#3a2430"/>
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
  <radialGradient id="st-acqua" cx="50%" cy="40%" r="60%">
    <stop offset="0" stop-color="#7cf2cf"/><stop offset="1" stop-color="#0c4a48"/>
  </radialGradient>
  <radialGradient id="st-faro" cx="50%" cy="50%" r="50%">
    <stop offset="0" stop-color="#fffbe0"/><stop offset=".4" stop-color="#ffd36b"/><stop offset="1" stop-color="#ffd36b" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="st-quadrante" cx="50%" cy="45%" r="60%">
    <stop offset="0" stop-color="#fffaf0"/><stop offset="1" stop-color="#e6d2a4"/>
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
`);

Grafica.sfondo("stazione", `
  <!-- cielo al tramonto dietro la tettoia di vetro -->
  <rect width="1600" height="900" fill="url(#st-cielo)"/>
  <circle cx="1180" cy="330" r="70" fill="#ffd59a" opacity=".55" filter="url(#st-sfoca)"/>
  <g fill="#fff" opacity=".7"><circle cx="220" cy="90" r="2"/><circle cx="420" cy="60" r="1.5"/><circle cx="1280" cy="80" r="2"/><circle cx="1450" cy="140" r="1.5"/><circle cx="640" cy="40" r="1.2"/></g>

  <!-- tettoia: arco di ferro e vetro -->
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

  <!-- facciata in fondo con le arcate -->
  <rect y="420" width="1600" height="120" fill="url(#st-muro)"/>
  <g fill="#2a1820" stroke="#1d1428" stroke-width="3">
    <path d="M120 540 L120 470 Q170 430 220 470 L220 540 Z"/><path d="M380 540 L380 470 Q430 430 480 470 L480 540 Z"/>
    <path d="M1120 540 L1120 470 Q1170 430 1220 470 L1220 540 Z"/><path d="M1380 540 L1380 470 Q1430 430 1480 470 L1480 540 Z"/>
  </g>
  <g fill="#ffcf7a" opacity=".55">
    <path d="M130 540 L130 474 Q170 442 210 474 L210 540 Z"/><path d="M1390 540 L1390 474 Q1430 442 1470 474 L1470 540 Z"/>
  </g>
  <rect y="416" width="1600" height="10" fill="#1d1428"/>

  <!-- pilastri di ghisa -->
  <g id="st-colonna">
    <rect x="540" y="150" width="22" height="420" fill="url(#st-ferro)"/>
    <path d="M530 150 L572 150 L566 170 L536 170 Z M528 566 L574 566 L570 580 L532 580 Z" fill="#1a1a2a"/>
    <path d="M551 200 L551 540" stroke="#5a5a78" stroke-width="2"/>
  </g>
  <use href="#st-colonna" x="476"/>

  <!-- binari e banchine in prospettiva (punto di fuga 800, 420) -->
  <path d="M0 560 L1600 560 L1600 900 L0 900 Z" fill="#2a2230"/>
  <g fill="url(#st-banchina)" stroke="#1d1428" stroke-width="4">
    <path d="M0 560 L170 560 L-60 900 L-200 900 Z"/>
    <path d="M500 560 L640 560 L560 900 L300 900 Z"/>
    <path d="M960 560 L1100 560 L1300 900 L1040 900 Z"/>
    <path d="M1430 560 L1600 560 L1800 900 L1660 900 Z"/>
  </g>
  <g stroke="#e8d9a0" stroke-width="5" opacity=".8">
    <path d="M170 560 L-60 900"/><path d="M500 560 L300 900"/><path d="M640 560 L560 900"/>
    <path d="M960 560 L1040 900"/><path d="M1100 560 L1300 900"/><path d="M1430 560 L1660 900"/>
  </g>
  <!-- rotaie -->
  <g stroke="#8a8aa8" stroke-width="5">
    <path d="M250 560 L80 900"/><path d="M420 560 L330 900"/>
    <path d="M730 560 L690 900"/><path d="M870 560 L910 900"/>
    <path d="M1180 560 L1270 900"/><path d="M1350 560 L1520 900"/>
  </g>
  <g stroke="#3a2a22" stroke-width="10" opacity=".8">
    <path d="M238 600 L432 600"/><path d="M215 650 L452 650"/><path d="M185 720 L478 720"/><path d="M145 810 L510 810"/>
    <path d="M726 600 L874 600"/><path d="M722 650 L878 650"/><path d="M716 720 L884 720"/><path d="M708 810 L892 810"/>
    <path d="M1168 600 L1362 600"/><path d="M1148 650 L1385 650"/><path d="M1120 720 L1415 720"/><path d="M1090 810 L1455 810"/>
  </g>
  <path d="M0 560 L1600 560" stroke="#1d1428" stroke-width="6"/>

  <!-- BINARIO 1: il treno-museo di Scienze -->
  <g id="treno-scienze" stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <ellipse cx="335" cy="842" rx="230" ry="22" fill="#000" opacity=".45" stroke="none"/>
    <path d="M150 840 L150 520 Q150 440 230 432 L440 432 Q520 440 520 520 L520 840 Z" fill="url(#st-verde)"/>
    <path d="M168 520 Q168 456 232 450 L438 450 Q502 456 502 520" fill="none" stroke="#f3c45a" stroke-width="5"/>
    <path d="M240 420 Q335 380 430 420 L430 436 L240 436 Z" fill="url(#st-ottone)"/>
    <circle cx="335" cy="400" r="14" fill="url(#st-ottone)"/>
    <!-- grande oblò-vetrina con medusa e conchiglia -->
    <circle cx="335" cy="575" r="98" fill="url(#st-ottone)"/>
    <circle cx="335" cy="575" r="80" fill="url(#st-acqua)"/>
    <path d="M300 560 Q330 518 360 560 Q330 552 300 560 Z" fill="#c9b8ff" stroke-width="2.5"/>
    <path d="M310 560 q-4 24 4 42 M326 560 q4 28 -2 50 M344 560 q-4 24 4 44" fill="none" stroke="#c9b8ff" stroke-width="3"/>
    <path d="M360 630 Q352 604 372 592 Q394 584 404 606 Q406 628 384 636 Z" fill="#f6efe0" stroke-width="2.5"/>
    <path d="M270 640 q10 -30 0 -50 M282 644 q-8 -24 6 -40" fill="none" stroke="#2c8a4a" stroke-width="6"/>
    <path d="M285 520 Q300 506 320 504" fill="none" stroke="#fff" stroke-width="5" opacity=".5"/>
    <g fill="#1d1428" stroke="none"><circle cx="335" cy="487" r="5"/><circle cx="423" cy="575" r="5"/><circle cx="335" cy="663" r="5"/><circle cx="247" cy="575" r="5"/></g>
    <!-- fanali, respingenti, scacciapietre -->
    <circle cx="200" cy="720" r="22" fill="url(#st-faro)"/>
    <circle cx="470" cy="720" r="22" fill="url(#st-faro)"/>
    <circle cx="200" cy="720" r="16" fill="#fff6c2"/><circle cx="470" cy="720" r="16" fill="#fff6c2"/>
    <rect x="150" y="760" width="370" height="26" fill="#1d1428"/>
    <circle cx="180" cy="773" r="18" fill="url(#st-ottone)"/><circle cx="490" cy="773" r="18" fill="url(#st-ottone)"/>
    <path d="M190 786 L480 786 L440 840 L230 840 Z" fill="#3a3a4a"/>
    <path d="M230 800 L240 840 M280 800 L285 840 M335 800 L335 840 M390 800 L385 840 M440 800 L430 840" stroke="#1d1428" stroke-width="3"/>
  </g>

  <!-- BINARIO 2: la locomotiva-orologio di Matematica -->
  <g id="treno-matematica" stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <ellipse cx="800" cy="842" rx="220" ry="22" fill="#000" opacity=".45" stroke="none"/>
    <!-- comignolo con sbuffi di vapore -->
    <path d="M770 420 L760 360 L840 360 L830 420 Z" fill="#1d1428"/>
    <rect x="750" y="348" width="100" height="18" rx="4" fill="url(#st-ottone)"/>
    <g fill="#f4ecf4" opacity=".75" stroke="none">
      <circle cx="800" cy="320" r="26"/><circle cx="830" cy="286" r="20"/><circle cx="866" cy="262" r="16"/><circle cx="900" cy="246" r="11"/>
    </g>
    <!-- caldaia: il fronte è un grande quadrante -->
    <path d="M620 840 L620 560 Q620 420 800 420 Q980 420 980 560 L980 840 Z" fill="url(#st-rosso)"/>
    <circle cx="800" cy="590" r="122" fill="url(#st-ottone)"/>
    <circle cx="800" cy="590" r="104" fill="url(#st-quadrante)"/>
    <g id="st-tacche" stroke-width="4">
      <path d="M800 494 L800 512 M800 668 L800 686 M704 590 L722 590 M878 590 L896 590"/>
      <path d="M848 507 L842 518 M883 542 L872 548 M883 638 L872 632 M848 673 L842 662 M752 673 L758 662 M717 638 L728 632 M717 542 L728 548 M752 507 L758 518" stroke-width="3"/>
    </g>
    <path id="st-loco-ore" d="M800 590 L800 532" stroke-width="9"/>
    <path id="st-loco-min" d="M800 590 L858 590" stroke-width="6"/>
    <circle cx="800" cy="590" r="10" fill="url(#st-ottone)"/>
    <!-- ingranaggi decorativi -->
    <g fill="url(#st-ottone)" stroke-width="3">
      <circle cx="660" cy="470" r="22"/><circle cx="940" cy="470" r="22"/>
    </g>
    <g fill="#5a3a10" stroke="none"><circle cx="660" cy="470" r="8"/><circle cx="940" cy="470" r="8"/></g>
    <circle cx="680" cy="740" r="24" fill="url(#st-faro)"/><circle cx="920" cy="740" r="24" fill="url(#st-faro)"/>
    <circle cx="680" cy="740" r="17" fill="#fff6c2"/><circle cx="920" cy="740" r="17" fill="#fff6c2"/>
    <rect x="610" y="772" width="380" height="28" fill="#1d1428"/>
    <circle cx="640" cy="786" r="19" fill="url(#st-ottone)"/><circle cx="960" cy="786" r="19" fill="url(#st-ottone)"/>
    <path d="M650 800 L950 800 L900 840 L700 840 Z" fill="#3a3a4a"/>
  </g>

  <!-- BINARIO 3: vuoto, con il paraurti di fine corsa -->
  <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <path d="M1180 700 L1370 700 L1380 760 L1170 760 Z" fill="#c8402f"/>
    <path d="M1200 700 L1220 760 M1250 700 L1270 760 M1300 700 L1320 760 M1350 700 L1365 750" stroke="#fff" stroke-width="12" opacity=".85"/>
    <path d="M1185 760 L1185 820 M1365 760 L1365 820" stroke-width="10"/>
    <circle cx="1210" cy="730" r="12" fill="url(#st-ottone)"/><circle cx="1340" cy="730" r="12" fill="url(#st-ottone)"/>
    <!-- palo del cartello -->
    <path d="M1275 700 L1275 600" stroke-width="8"/>
  </g>

  <!-- numeri dei binari (cifre: uguali in tutte le lingue) -->
  <g font-family="Atkinson Hyperlegible, Segoe UI, Arial" font-weight="800" font-size="40" text-anchor="middle" stroke="none">
    <circle cx="335" cy="300" r="34" fill="#fff8e6" stroke="#1d1428" stroke-width="5"/><text x="335" y="314" fill="#1d1428">1</text>
    <circle cx="680" cy="300" r="34" fill="#fff8e6" stroke="#1d1428" stroke-width="5"/><text x="680" y="314" fill="#1d1428">2</text>
    <circle cx="1275" cy="300" r="34" fill="#fff8e6" stroke="#1d1428" stroke-width="5"/><text x="1275" y="314" fill="#1d1428">3</text>
  </g>
  <path d="M335 266 L335 150 M1275 266 L1275 150 M680 266 L680 200" stroke="#1a1a2a" stroke-width="4"/>

  <!-- il grande orologio della stazione (tenuto premuto 3 secondi apre la modalità docente) -->
  <g id="st-orologio" stroke="#1d1428" stroke-linejoin="round">
    <path d="M1470 60 L1470 128" stroke="#1a1a2a" stroke-width="5"/>
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

  <!-- panchina -->
  <g stroke="#1d1428" stroke-width="4">
    <path d="M1040 800 L1190 800 L1200 812 L1030 812 Z" fill="#8a5a32"/>
    <path d="M1036 780 L1196 780" stroke="#8a5a32" stroke-width="10"/>
    <path d="M1050 812 L1046 850 M1180 812 L1184 850" stroke-width="7"/>
  </g>

  <rect width="1600" height="900" fill="url(#st-vignetta)"/>
  <rect width="1600" height="900" filter="url(#st-grana)" opacity=".06" style="mix-blend-mode:overlay"/>
`, function (svg) {
  // l'orologio della locomotiva segna l'ora vera
  function lancette() {
    var d = new Date(), h = (d.getHours() % 12 + d.getMinutes() / 60) * 30, m = d.getMinutes() * 6;
    var o = svg.querySelector("#st-loco-ore"), mi = svg.querySelector("#st-loco-min");
    if (o) o.setAttribute("transform", "rotate(" + h + " 800 590)");
    if (mi) mi.setAttribute("transform", "rotate(" + (m - 90) + " 800 590)");
    var o2 = svg.querySelector("#st-ore"), m2 = svg.querySelector("#st-min");
    if (o2) o2.setAttribute("transform", "rotate(" + h + " 1470 200)");
    if (m2) m2.setAttribute("transform", "rotate(" + (m - 90) + " 1470 200)");
  }
  lancette(); setInterval(lancette, 20000);
});
