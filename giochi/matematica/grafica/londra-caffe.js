/* Gioco di Matematica · terze · G1 «Il cerchio senza π»: LONDRA, 1706 — un caffè dove si insegna matematica.
   Pareti a pannelli di legno scuro, un camino acceso, il bancone con le caffettiere di rame, tavoli lunghi,
   una finestra a riquadri sulla strada piovosa, candele, una lunetta a semicerchio sopra la porta.
   William Jones è intero, appoggiato a terra (parrucca, giacca lunga). Prefisso degli id: lc-. */
Grafica.definizioni(`
  <linearGradient id="lc-pannelli" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#4a2e1e"/><stop offset="1" stop-color="#3a2216"/>
  </linearGradient>
  <linearGradient id="lc-legno" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#8a5a34"/><stop offset="1" stop-color="#5a3820"/>
  </linearGradient>
  <linearGradient id="lc-pavimento" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#6a4a30"/><stop offset="1" stop-color="#4a3020"/>
  </linearGradient>
  <linearGradient id="lc-strada" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#8a9aa8"/><stop offset="1" stop-color="#5a6a78"/>
  </linearGradient>
  <linearGradient id="lc-rame" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#8a4a24"/><stop offset=".4" stop-color="#e89a5a"/><stop offset="1" stop-color="#7a3a1a"/>
  </linearGradient>
  <radialGradient id="lc-fuoco" cx=".5" cy=".8" r=".7">
    <stop offset="0" stop-color="#fff2a0"/><stop offset=".4" stop-color="#f89a2a"/><stop offset="1" stop-color="#c83a1a" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="lc-luce" cx=".5" cy=".5" r=".5">
    <stop offset="0" stop-color="#ffe0a0" stop-opacity=".45"/><stop offset="1" stop-color="#ffe0a0" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="lc-giacca" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#2a3a6a"/><stop offset=".5" stop-color="#3a4e8a"/><stop offset="1" stop-color="#1e2a54"/>
  </linearGradient>
  <linearGradient id="lc-pelle" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#f2c8a8"/><stop offset="1" stop-color="#dca88a"/>
  </linearGradient>

  <!-- ===== WILLIAM JONES: parrucca, giacca lunga blu, gilet, cravatta bianca, calze e scarpe con fibbia ===== -->
  <symbol id="jones" viewBox="-110 -600 230 615" overflow="visible">
    <ellipse cx="0" cy="0" rx="66" ry="10" fill="#000" opacity=".35"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <path d="M-38 0 Q-44 -12 -24 -14 H-6 V2 Z M8 2 V-14 H26 Q42 -12 46 -2 Q40 2 8 2 Z" fill="#1d1a1a"/>
      <rect x="-26" y="-14" width="12" height="6" fill="#f3c45a"/><rect x="18" y="-14" width="12" height="6" fill="#f3c45a"/>
      <path d="M-20 -170 L-20 -14 M20 -170 L22 -14" stroke="#1d1428" stroke-width="22"/>
      <path d="M-20 -170 L-20 -14 M20 -170 L22 -14" stroke="#f2ede0" stroke-width="16"/>
      <!-- calzoni al ginocchio -->
      <path d="M-34 -250 L-34 -160 H-6 L0 -230 L6 -160 H34 L34 -250 Z" fill="#2a2a3a"/>
      <!-- gilet e giacca lunga aperta -->
      <path d="M-34 -440 H34 L36 -250 H-36 Z" fill="#c8a04a"/>
      <g fill="#8a6a2a" stroke="none"><circle cx="0" cy="-420" r="3"/><circle cx="0" cy="-390" r="3"/><circle cx="0" cy="-360" r="3"/><circle cx="0" cy="-330" r="3"/><circle cx="0" cy="-300" r="3"/></g>
      <path d="M-52 -444 C-64 -360 -70 -260 -74 -170 L-30 -176 C-30 -260 -26 -360 -22 -440 Z" fill="url(#lc-giacca)"/>
      <path d="M52 -444 C64 -360 70 -260 74 -170 L30 -176 C30 -260 26 -360 22 -440 Z" fill="url(#lc-giacca)"/>
      <path d="M-56 -300 h22 v20 h-22 Z M34 -300 h22 v20 h-22 Z" fill="#2a3a6a"/>
      <!-- braccio sinistro: tiene un libro -->
      <path d="M-50 -434 C-76 -392 -82 -340 -66 -300" fill="none" stroke="#1d1428" stroke-width="30"/>
      <path d="M-50 -434 C-76 -392 -82 -340 -66 -300" fill="none" stroke="url(#lc-giacca)" stroke-width="24"/>
      <path d="M-70 -300 h16 v-14 h-16 Z" fill="#f2ede0"/>
      <rect x="-60" y="-338" width="52" height="66" rx="3" fill="#7a2a1a" transform="rotate(10 -34 -305)"/>
      <path d="M-54 -330 V-280" stroke="#e8c26a" stroke-width="2" transform="rotate(10 -34 -305)"/>
      <ellipse cx="-62" cy="-292" rx="10" ry="11" fill="url(#lc-pelle)"/>
      <!-- braccio destro con la penna d'oca alzata -->
      <path d="M48 -434 C78 -420 96 -390 100 -356" fill="none" stroke="#1d1428" stroke-width="30"/>
      <path d="M48 -434 C78 -420 96 -390 100 -356" fill="none" stroke="url(#lc-giacca)" stroke-width="24"/>
      <path d="M90 -360 h22 v-14 h-22 Z" fill="#f2ede0"/>
      <ellipse cx="102" cy="-346" rx="10" ry="11" fill="url(#lc-pelle)"/>
      <path d="M100 -350 L124 -420" stroke="#f2ede0" stroke-width="5"/><path d="M118 -404 q14 -10 12 -26 q-10 10 -16 14" fill="#f2ede0"/>
      <!-- cravatta bianca -->
      <path d="M-14 -446 Q0 -436 14 -446 L8 -410 Q0 -404 -8 -410 Z" fill="#fbf8f0"/>
      <!-- testa con la parrucca bianca a riccioli -->
      <path d="M-10 -474 L-12 -446 L14 -446 L12 -474 Z" fill="url(#lc-pelle)"/>
      <path d="M-24 -528 C-26 -494 -16 -474 4 -470 C22 -466 34 -478 36 -498 C40 -516 38 -536 30 -550 C16 -566 -16 -564 -24 -528 Z" fill="url(#lc-pelle)"/>
      <path d="M8 -488 Q16 -482 24 -488" fill="none" stroke="#a83a3a" stroke-width="3"/>
      <path d="M22 -512 Q30 -500 24 -494" fill="none" stroke="#c88a6a" stroke-width="3"/>
      <circle cx="6" cy="-516" r="2.6" fill="#1d1428" stroke="none"/><circle cx="28" cy="-515" r="2.4" fill="#1d1428" stroke="none"/>
      <path d="M-2 -530 Q6 -535 14 -530 M20 -530 Q28 -535 36 -530" fill="none" stroke="#7a6a5a" stroke-width="3"/>
      <path d="M-30 -536 C-34 -576 -6 -590 12 -588 C36 -588 50 -572 44 -536 C36 -552 24 -560 8 -560 C-6 -560 -20 -552 -30 -536 Z" fill="#eeeae2"/>
      <path d="M-30 -536 C-44 -520 -44 -490 -34 -470 C-42 -450 -36 -430 -24 -424 L-16 -470 Z M44 -536 C56 -520 56 -490 46 -470 C54 -450 48 -430 36 -424 L28 -470 Z" fill="#eeeae2"/>
      <g fill="none" stroke="#c8c0b4" stroke-width="2"><path d="M-36 -510 q8 4 0 10 M-38 -488 q8 4 0 10 M-34 -464 q8 4 0 10 M48 -510 q-8 4 0 10 M50 -488 q-8 4 0 10 M46 -464 q-8 4 0 10"/></g>
    </g>
  </symbol>
`);

Grafica.sfondo("londracaffe", `
  <!-- ===== PARETI A PANNELLI E SOFFITTO A TRAVI ===== -->
  <rect width="1600" height="900" fill="url(#lc-pannelli)"/>
  <rect width="1600" height="70" fill="#2a1810"/>
  <g fill="#3a2214" stroke="#1d1428" stroke-width="3"><rect x="0" y="60" width="1600" height="20"/><path d="M100 0 h40 v80 h-40 Z M500 0 h40 v80 h-40 Z M900 0 h40 v80 h-40 Z M1300 0 h40 v80 h-40 Z"/></g>
  <g stroke="#2a1810" stroke-width="3" fill="#5a3826">
    <rect x="20" y="120" width="180" height="200" rx="4"/><rect x="20" y="360" width="180" height="200" rx="4"/>
    <rect x="1400" y="120" width="180" height="200" rx="4"/><rect x="1400" y="360" width="180" height="200" rx="4"/>
  </g>
  <g fill="none" stroke="#7a5236" stroke-width="2"><rect x="34" y="134" width="152" height="172"/><rect x="34" y="374" width="152" height="172"/><rect x="1414" y="134" width="152" height="172"/><rect x="1414" y="374" width="152" height="172"/></g>
  <rect y="580" width="1600" height="40" fill="#2a1810"/>

  <!-- ===== LA FINESTRA SULLA STRADA PIOVOSA ===== -->
  <g stroke="#1d1428" stroke-width="4">
    <rect x="250" y="120" width="300" height="300" fill="url(#lc-strada)"/>
  </g>
  <g fill="#6a5a50" stroke="#2a2a30" stroke-width="2"><rect x="260" y="250" width="70" height="170"/><rect x="340" y="220" width="80" height="200"/><rect x="430" y="260" width="110" height="160"/></g>
  <g fill="#ffd890"><rect x="276" y="276" width="14" height="18"/><rect x="300" y="276" width="14" height="18"/><rect x="356" y="250" width="16" height="20"/><rect x="390" y="250" width="16" height="20"/><rect x="450" y="290" width="16" height="18"/><rect x="490" y="290" width="16" height="18"/></g>
  <g stroke="#cfe0ee" stroke-width="2" opacity=".7"><path d="M270 140 l-8 24 M330 160 l-8 24 M390 130 l-8 24 M450 170 l-8 24 M510 140 l-8 24 M300 200 l-8 24 M480 220 l-8 24 M360 300 l-8 24 M520 320 l-8 24"/></g>
  <g stroke="#3a2214" stroke-width="10"><path d="M250 220 H550 M250 320 H550 M350 120 V420 M450 120 V420"/></g>
  <rect x="244" y="114" width="312" height="312" fill="none" stroke="#1d1428" stroke-width="10"/>
  <rect x="236" y="420" width="328" height="20" fill="#5a3826" stroke="#1d1428" stroke-width="3"/>

  <!-- ===== LA PORTA CON LA LUNETTA A SEMICERCHIO (in fondo a destra) ===== -->
  <g stroke="#1d1428" stroke-width="4">
    <path d="M1080 580 V250 H1300 V580 Z" fill="#2a1810"/>
    <path d="M1090 580 V260 H1290 V580 Z" fill="url(#lc-legno)"/>
    <path d="M1080 250 A110 110 0 0 1 1300 250 Z" fill="#5a3826"/>
    <path d="M1096 250 A94 94 0 0 1 1284 250 Z" fill="#a8c0d0"/>
  </g>
  <g stroke="#3a2214" stroke-width="5"><path d="M1190 250 V156 M1190 250 L1124 184 M1190 250 L1256 184"/></g>
  <g stroke="#3a2214" stroke-width="3" fill="none"><rect x="1110" y="290" width="70" height="120"/><rect x="1200" y="290" width="70" height="120"/><rect x="1110" y="430" width="70" height="120"/><rect x="1200" y="430" width="70" height="120"/></g>
  <circle cx="1270" cy="430" r="7" fill="#e8c26a" stroke="#1d1428" stroke-width="2"/>

  <!-- ===== IL CAMINO A SINISTRA ===== -->
  <g stroke="#1d1428" stroke-width="4">
    <rect x="600" y="300" width="300" height="280" fill="#7a6a5a"/>
    <rect x="584" y="286" width="332" height="24" fill="#8a7a6a"/>
    <path d="M650 580 V400 Q750 340 850 400 V580 Z" fill="#1a1010"/>
  </g>
  <ellipse cx="750" cy="540" rx="80" ry="60" fill="url(#lc-fuoco)"/>
  <g stroke="#3a2214" stroke-width="10" stroke-linecap="round"><path d="M690 570 L790 550 M710 552 L810 572"/></g>
  <path d="M720 560 Q730 500 750 480 Q760 520 780 500 Q790 540 770 560 Z" fill="#ffd060" opacity=".9"/>
  <circle cx="750" cy="500" r="220" fill="url(#lc-luce)"/>
  <!-- sulla mensola del camino: candele e una caffettiera di rame -->
  <g stroke="#1d1428" stroke-width="3">
    <rect x="620" y="250" width="14" height="36" fill="#f6efd8"/><rect x="866" y="250" width="14" height="36" fill="#f6efd8"/>
    <path d="M730 286 C722 256 734 236 750 232 L746 222 H764 L760 232 C778 236 788 256 778 286 Z" fill="url(#lc-rame)"/>
    <path d="M778 250 Q800 242 804 226" fill="none" stroke-width="5"/>
  </g>
  <g fill="#ffd060"><path d="M627 250 q-6 -10 0 -18 q6 8 0 18 Z M873 250 q-6 -10 0 -18 q6 8 0 18 Z"/></g>

  <!-- ===== IL BANCONE CON LE CAFFETTIERE (a destra) ===== -->
  <g stroke="#1d1428" stroke-width="4">
    <rect x="1340" y="500" width="260" height="140" fill="url(#lc-legno)"/>
    <rect x="1330" y="488" width="280" height="20" fill="#a8703a"/>
  </g>
  <g stroke="#1d1428" stroke-width="3">
    <path d="M1380 488 C1372 460 1384 440 1400 436 L1396 426 H1414 L1410 436 C1428 440 1438 460 1428 488 Z" fill="url(#lc-rame)"/>
    <path d="M1470 488 C1462 460 1474 440 1490 436 L1486 426 H1504 L1500 436 C1518 440 1528 460 1518 488 Z" fill="url(#lc-rame)"/>
    <path d="M1550 488 v-20 h24 v20 Z" fill="#f6efd8"/><path d="M1574 474 q10 0 10 8 q0 6 -10 6" fill="none"/>
  </g>

  <!-- ===== PAVIMENTO DI ASSI ===== -->
  <rect y="620" width="1600" height="280" fill="url(#lc-pavimento)"/>
  <g stroke="#3a2416" stroke-width="2"><path d="M0 660 H1600 M0 710 H1600 M0 770 H1600 M0 840 H1600"/><path d="M200 620 L180 660 M600 620 L590 660 M1000 620 L1004 660 M1400 620 L1420 660 M100 660 L70 710 M500 660 L480 710 M900 660 L900 710 M1300 660 L1320 710 M300 710 L270 770 M800 710 L800 770 M1200 710 L1230 770"/></g>
  <rect y="620" width="1600" height="16" fill="#000" opacity=".25"/>

  <!-- ===== IL TAVOLO LUNGO DELLA LEZIONE ===== -->
  <g stroke="#1d1428" stroke-width="4">
    <path d="M420 690 V780 M820 690 V780" stroke-width="10"/><path d="M420 690 V780 M820 690 V780" stroke="#5a3820" stroke-width="6"/>
    <rect x="380" y="672" width="480" height="24" fill="#8a5a34"/>
  </g>
  <g stroke="#1d1428" stroke-width="2.5">
    <rect x="420" y="648" width="70" height="28" fill="#f6efd8" transform="rotate(-6 455 662)"/>
    <rect x="510" y="652" width="60" height="22" fill="#f0e6c8"/>
    <path d="M600 672 v-24 h20 v24 Z" fill="#f6efd8"/><path d="M620 656 q10 0 10 8 q0 6 -10 6" fill="none"/>
    <path d="M700 672 C694 652 704 640 716 638 L712 630 H726 L722 638 C736 640 744 652 738 672 Z" fill="url(#lc-rame)"/>
  </g>
`);
