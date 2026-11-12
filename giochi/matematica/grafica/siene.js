/* Gioco di Matematica · terze · G1 «Il cerchio senza π»: SIENE (Egitto), circa 240 a.C., mezzogiorno d'estate.
   La riva del Nilo: il sole a picco, le rocce di granito rosa, le palme da dattero, una feluca sul fiume,
   il pozzo di pietra con il sole riflesso sul fondo, il tavolo di Eratostene con i papiri,
   l'asta di legno per misurare l'ombra (storta, poi dritta). Eratostene è intero, appoggiato a terra. */
Grafica.definizioni(`
  <linearGradient id="se-cielo" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#3a9ad8"/><stop offset=".55" stop-color="#8ccaf0"/><stop offset="1" stop-color="#f6e8c8"/>
  </linearGradient>
  <linearGradient id="se-nilo" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#2a7a9a"/><stop offset="1" stop-color="#1a5a6a"/>
  </linearGradient>
  <linearGradient id="se-sabbia" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#ecd29a"/><stop offset="1" stop-color="#d8b070"/>
  </linearGradient>
  <linearGradient id="se-granito" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#d89a8a"/><stop offset=".5" stop-color="#b86a62"/><stop offset="1" stop-color="#7a4040"/>
  </linearGradient>
  <linearGradient id="se-pietra" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#a8987a"/><stop offset=".4" stop-color="#e8dcc0"/><stop offset="1" stop-color="#8a7a5a"/>
  </linearGradient>
  <radialGradient id="se-fondo-pozzo" cx=".5" cy=".5" r=".5">
    <stop offset="0" stop-color="#fffbe0"/><stop offset=".3" stop-color="#f6e080"/><stop offset=".6" stop-color="#2a4a5a"/><stop offset="1" stop-color="#0a1a22"/>
  </radialGradient>
  <linearGradient id="se-veste" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#e0d8c8"/><stop offset=".45" stop-color="#fcf8ee"/><stop offset="1" stop-color="#d0c4ae"/>
  </linearGradient>
  <linearGradient id="se-mantello" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#c86a3a"/><stop offset="1" stop-color="#8a3a1a"/>
  </linearGradient>
  <linearGradient id="se-pelle" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#d8a07a"/><stop offset="1" stop-color="#b07a54"/>
  </linearGradient>

  <!-- ===== ERATOSTENE: veste chiara, mantello color terracotta, capelli scuri e corti, rotolo di papiro ===== -->
  <symbol id="eratostene" viewBox="-110 -600 230 615" overflow="visible">
    <ellipse cx="0" cy="0" rx="70" ry="11" fill="#000" opacity=".35"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <path d="M-38 -2 Q-44 -14 -24 -14 H-6 V2 Z M8 2 V-14 H26 Q42 -14 48 -4 Q42 2 8 2 Z" fill="#7a4a24"/>
      <path d="M-20 -110 L-22 -16 M20 -110 L22 -16" stroke="#1d1428" stroke-width="22"/>
      <path d="M-20 -110 L-22 -16 M20 -110 L22 -16" stroke="url(#se-pelle)" stroke-width="16"/>
      <path d="M-28 -16 L-14 -40 M22 -16 L18 -40" stroke="#5a3418" stroke-width="3"/>
      <!-- veste fino al ginocchio -->
      <path d="M-48 -440 C-60 -330 -66 -210 -62 -104 Q0 -90 64 -104 C68 -210 62 -330 50 -440 Q0 -454 -48 -440 Z" fill="url(#se-veste)"/>
      <path d="M-26 -420 L-32 -110 M2 -430 L2 -98 M28 -420 L34 -110" stroke="#c0b49c" stroke-width="2" fill="none"/>
      <path d="M-44 -290 Q0 -278 46 -290" fill="none" stroke="#a8884a" stroke-width="6"/>
      <!-- mantello dalla spalla destra -->
      <path d="M52 -446 C30 -440 -20 -380 -52 -300 C-62 -250 -64 -190 -60 -130 L-26 -122 C-34 -200 -24 -270 6 -320 C26 -350 48 -380 64 -410 Z" fill="url(#se-mantello)"/>
      <path d="M40 -420 C10 -380 -20 -330 -34 -270 M24 -400 C-4 -360 -30 -300 -44 -230" fill="none" stroke="#6a2a10" stroke-width="2.5"/>
      <!-- braccio sinistro con il rotolo -->
      <path d="M-48 -432 C-74 -390 -84 -340 -70 -300" fill="none" stroke="#1d1428" stroke-width="30"/>
      <path d="M-48 -432 C-74 -390 -84 -340 -70 -300" fill="none" stroke="url(#se-pelle)" stroke-width="24"/>
      <path d="M-70 -300 C-56 -292 -34 -296 -20 -306" fill="none" stroke="#1d1428" stroke-width="26"/>
      <path d="M-70 -300 C-56 -292 -34 -296 -20 -306" fill="none" stroke="url(#se-pelle)" stroke-width="20"/>
      <rect x="-60" y="-338" width="70" height="26" rx="12" fill="#f0dca0" transform="rotate(-12 -25 -325)"/>
      <path d="M-58 -330 H8" stroke="#a8884a" stroke-width="2" transform="rotate(-12 -25 -325)"/>
      <!-- braccio destro alzato che indica il sole -->
      <path d="M46 -432 C70 -470 80 -510 84 -548" fill="none" stroke="#1d1428" stroke-width="28"/>
      <path d="M46 -432 C70 -470 80 -510 84 -548" fill="none" stroke="url(#se-pelle)" stroke-width="22"/>
      <ellipse cx="86" cy="-560" rx="11" ry="12" fill="url(#se-pelle)"/>
      <path d="M86 -570 L90 -592" stroke="#1d1428" stroke-width="7"/><path d="M86 -570 L90 -592" stroke="url(#se-pelle)" stroke-width="4"/>
      <!-- testa: viso giovane, barba corta scura -->
      <path d="M-10 -470 L-12 -444 L14 -444 L12 -470 Z" fill="url(#se-pelle)"/>
      <path d="M-26 -524 C-28 -490 -18 -470 2 -466 C22 -462 34 -474 38 -494 C42 -512 40 -532 32 -546 C18 -562 -18 -560 -26 -524 Z" fill="url(#se-pelle)"/>
      <path d="M-24 -500 C-26 -478 -12 -462 6 -460 C24 -460 36 -474 38 -496 C30 -484 22 -480 14 -482 C6 -484 -6 -484 -12 -480 C-18 -486 -22 -492 -24 -500 Z" fill="#2a1e1a"/>
      <path d="M8 -484 Q18 -478 28 -484" fill="none" stroke="#6a2a26" stroke-width="3"/>
      <path d="M24 -508 Q31 -496 25 -492" fill="none" stroke="#8a5a3a" stroke-width="3"/>
      <circle cx="6" cy="-514" r="2.8" fill="#1d1428" stroke="none"/><circle cx="28" cy="-513" r="2.6" fill="#1d1428" stroke="none"/>
      <path d="M-6 -528 Q4 -534 16 -528 M20 -528 Q28 -534 38 -528" fill="none" stroke="#2a1e1a" stroke-width="4"/>
      <path d="M-30 -522 C-36 -560 -14 -578 8 -578 C32 -578 46 -562 42 -532 C38 -548 26 -556 8 -556 C-6 -556 -18 -548 -22 -530 C-24 -540 -28 -534 -30 -522 Z" fill="#2a1e1a"/>
      <!-- corona d'alloro -->
      <path d="M-30 -548 C-10 -566 26 -566 44 -548" fill="none" stroke="#5a7a2a" stroke-width="4"/>
      <path d="M-24 -552 l-6 -8 M-12 -558 l-4 -10 M2 -562 l0 -10 M16 -562 l4 -10 M30 -556 l6 -8" stroke="#6a9a3a" stroke-width="5"/>
    </g>
  </symbol>

  <!-- l'asta per misurare l'ombra: storta e dritta -->
  <symbol id="se-asta-storta" viewBox="0 0 120 340" overflow="visible">
    <ellipse cx="44" cy="334" rx="40" ry="7" fill="#000" opacity=".3"/>
    <path d="M30 334 L94 20" stroke="#1d1428" stroke-width="14" stroke-linecap="round"/><path d="M30 334 L94 20" stroke="#b8844a" stroke-width="8" stroke-linecap="round"/>
    <path d="M30 334 L-80 344" stroke="#3a2a1a" stroke-width="18" stroke-linecap="round" opacity=".28"/>
    <path d="M14 330 Q30 320 50 330" fill="#c8a870" stroke="#1d1428" stroke-width="2"/>
  </symbol>
  <symbol id="se-asta-dritta" viewBox="0 0 120 340" overflow="visible">
    <ellipse cx="60" cy="334" rx="30" ry="6" fill="#000" opacity=".25"/>
    <path d="M60 334 V16" stroke="#1d1428" stroke-width="14" stroke-linecap="round"/><path d="M60 334 V16" stroke="#b8844a" stroke-width="8" stroke-linecap="round"/>
    <path d="M60 30 V200" stroke="#a8884a" stroke-width="2"/>
    <path d="M44 330 Q60 320 76 330" fill="#c8a870" stroke="#1d1428" stroke-width="2"/>
    <circle cx="60" cy="16" r="7" fill="#f3c45a" stroke="#1d1428" stroke-width="2"/>
  </symbol>
`);

Grafica.sfondo("siene", `
  <!-- ===== CIELO E SOLE A PICCO ===== -->
  <rect width="1600" height="900" fill="url(#se-cielo)"/>
  <circle cx="800" cy="40" r="170" fill="#fff8d0" opacity=".3"/>
  <circle cx="800" cy="40" r="90" fill="#fff8d0" opacity=".45"/>
  <circle cx="800" cy="40" r="50" fill="#fffdf0"/>
  <g stroke="#fff4c0" stroke-width="5" stroke-linecap="round" opacity=".6">
    <path d="M800 110 V150 M740 96 L716 126 M860 96 L884 126 M700 60 L660 70 M900 60 L940 70"/>
  </g>
  <g fill="none" stroke="#2a2a3a" stroke-width="3" stroke-linecap="round"><path d="M420 160 q10 -10 20 0 q10 -10 20 0"/><path d="M1180 200 q8 -8 16 0 q8 -8 16 0"/></g>

  <!-- ===== RIVA LONTANA: DUNE E ROCCE DI GRANITO ===== -->
  <path d="M0 400 Q200 360 420 384 Q640 350 860 380 Q1100 346 1340 372 Q1480 360 1600 380 V460 H0 Z" fill="#e8c890" stroke="#a8884a" stroke-width="2"/>
  <g stroke="#5a3030" stroke-width="3" stroke-linejoin="round">
    <path d="M1080 420 C1070 380 1110 340 1160 350 C1200 330 1250 350 1260 390 C1280 400 1280 430 1260 440 H1090 Z" fill="url(#se-granito)"/>
    <path d="M1240 430 C1236 400 1270 380 1300 390 C1330 386 1350 410 1344 440 H1246 Z" fill="url(#se-granito)"/>
    <path d="M140 430 C130 396 170 366 210 376 C240 366 270 390 266 430 Z" fill="url(#se-granito)"/>
  </g>
  <g stroke="#fff" stroke-width="3" opacity=".35" fill="none"><path d="M1110 380 q20 -16 40 -14 M1180 360 q24 -8 44 4 M160 396 q16 -12 32 -10"/></g>
  <!-- ===== IL NILO CON LA FELUCA ===== -->
  <rect y="440" width="1600" height="120" fill="url(#se-nilo)"/>
  <g stroke="#bfe8f0" stroke-width="3" stroke-linecap="round" opacity=".7">
    <path d="M100 460 h40 M300 486 h60 M520 470 h44 M700 500 h70 M900 466 h40 M1060 492 h60 M1300 474 h50 M1460 506 h40 M240 530 h50 M620 540 h40 M1180 536 h60"/>
  </g>
  <path d="M780 470 L800 470" stroke="#fff8d0" stroke-width="10" opacity=".7"/>
  <g stroke="#1d1428" stroke-width="2.5" stroke-linejoin="round">
    <path d="M1080 506 Q1140 526 1220 504 L1212 518 Q1144 534 1090 520 Z" fill="#7a4a24"/>
    <path d="M1150 508 L1170 380"/>
    <path d="M1170 380 L1100 500 Q1150 484 1200 498 Z" fill="#f6efd8"/>
    <path d="M1112 486 L1160 404" stroke="#d8ccb0" stroke-width="2"/>
  </g>
  <!-- ===== PALME DA DATTERO ===== -->
  <g stroke="#3a2a1a" stroke-width="4" fill="none" stroke-linecap="round">
    <path d="M380 590 C376 520 390 440 384 360"/><path d="M1460 600 C1468 520 1456 440 1470 350"/><path d="M1540 610 C1546 540 1540 470 1550 410"/>
  </g>
  <g stroke="#6a4a2a" stroke-width="2"><path d="M378 560 h12 M380 520 h12 M382 480 h12 M384 440 h12 M386 400 h12 M1456 560 h12 M1458 520 h12 M1460 480 h12 M1462 440 h12 M1464 400 h12"/></g>
  <g fill="#4a7a2a" stroke="#1d3414" stroke-width="2.5">
    <path d="M384 360 q-60 -10 -90 30 q40 -20 90 -30 q-30 -40 -80 -40 q50 14 80 40 q10 -50 60 -60 q-40 28 -60 60 q50 -20 96 6 q-56 -10 -96 -6 q40 20 60 70 q-40 -40 -60 -70 Z"/>
    <path d="M1470 350 q-60 -10 -90 30 q40 -20 90 -30 q-30 -40 -80 -40 q50 14 80 40 q10 -50 60 -60 q-40 28 -60 60 q50 -20 96 6 q-56 -10 -96 -6 q40 20 60 70 q-40 -40 -60 -70 Z"/>
    <path d="M1550 410 q-50 -8 -76 26 q34 -18 76 -26 q-26 -34 -66 -34 q42 12 66 34 q8 -42 50 -50 q-34 24 -50 50 Z"/>
  </g>
  <g fill="#a8501a" stroke="#1d1428" stroke-width="1.5"><circle cx="378" cy="372" r="6"/><circle cx="390" cy="374" r="6"/><circle cx="384" cy="384" r="6"/><circle cx="1464" cy="362" r="6"/><circle cx="1476" cy="366" r="6"/></g>

  <!-- ===== LA RIVA VICINA: SABBIA E PIETRE ===== -->
  <path d="M0 556 Q400 540 800 552 Q1200 540 1600 556 V900 H0 Z" fill="url(#se-sabbia)"/>
  <path d="M0 556 Q400 540 800 552 Q1200 540 1600 556" fill="none" stroke="#a8884a" stroke-width="4"/>
  <g fill="#c8a870" opacity=".6"><ellipse cx="300" cy="700" rx="120" ry="10"/><ellipse cx="1000" cy="820" rx="180" ry="12"/><ellipse cx="1300" cy="680" rx="100" ry="8"/><ellipse cx="600" cy="860" rx="140" ry="10"/></g>
  <g fill="#b8a080" stroke="#6a5a3a" stroke-width="2"><ellipse cx="560" cy="620" rx="22" ry="10"/><ellipse cx="1500" cy="700" rx="30" ry="12"/><ellipse cx="240" cy="820" rx="26" ry="10"/><ellipse cx="1220" cy="860" rx="20" ry="8"/></g>
  <!-- ciuffi di papiro sulla riva -->
  <g stroke="#3a5a1a" stroke-width="3" fill="none"><path d="M60 600 L40 520 M70 600 L74 510 M80 600 L104 524 M1560 640 L1540 560 M1570 640 L1574 550 M1580 640 L1600 566"/></g>
  <g fill="#6a8a2a" stroke="#2a3a14" stroke-width="2"><path d="M40 520 l-14 -14 l20 -2 Z M74 510 l-10 -16 l18 2 Z M104 524 l4 -18 l12 12 Z M1540 560 l-14 -14 l20 -2 Z M1574 550 l-10 -16 l18 2 Z"/></g>

  <!-- ===== IL POZZO DI PIETRA (a sinistra) ===== -->
  <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <path d="M440 720 V610 Q540 584 640 610 V720 Q540 746 440 720 Z" fill="url(#se-pietra)"/>
    <ellipse cx="540" cy="610" rx="100" ry="26" fill="#d8ccb0"/>
    <ellipse cx="540" cy="612" rx="78" ry="18" fill="url(#se-fondo-pozzo)"/>
  </g>
  <g stroke="#8a7a5a" stroke-width="2"><path d="M440 650 Q540 672 640 650 M440 690 Q540 712 640 690 M490 620 V660 M590 620 V660 M540 664 V704 M470 700 V720 M610 700 V720"/></g>
  <g stroke="#1d1428" stroke-width="3"><path d="M456 610 V520 M624 610 V520" stroke-width="8"/><path d="M456 610 V520 M624 610 V520" stroke="#8a5a2a" stroke-width="5"/><path d="M446 520 H634" stroke-width="10"/><path d="M446 520 H634" stroke="#a8703a" stroke-width="6"/></g>
  <path d="M540 520 V586" stroke="#a8884a" stroke-width="2"/>
  <path d="M528 586 h24 v18 h-24 Z" fill="#8a5a2a" stroke="#1d1428" stroke-width="2"/>

  <!-- ===== IL TAVOLO DI ERATOSTENE (a destra) ===== -->
  <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <path d="M1150 650 V760 M1370 650 V760" stroke-width="10"/><path d="M1150 650 V760 M1370 650 V760" stroke="#7a4a24" stroke-width="6"/>
    <path d="M1120 640 H1400 V662 H1120 Z" fill="#a8703a"/>
  </g>
  <g stroke="#1d1428" stroke-width="2.5">
    <rect x="1140" y="610" width="110" height="34" rx="14" fill="#f0dca0"/><rect x="1260" y="618" width="80" height="26" rx="12" fill="#e8d090"/>
    <path d="M1300 600 L1330 640 L1350 600 Z" fill="#f0dca0"/>
  </g>
  <path d="M1150 622 H1240 M1150 632 H1220" stroke="#a8884a" stroke-width="2"/>
  <!-- una sfera di legno con i cerchi (meridiani) sul tavolo -->
  <g stroke="#1d1428" stroke-width="2.5" fill="none"><circle cx="1380" cy="600" r="30" fill="#c89a5a"/><ellipse cx="1380" cy="600" rx="12" ry="30"/><path d="M1350 600 H1410"/><path d="M1380 630 V650"/></g>
`);
