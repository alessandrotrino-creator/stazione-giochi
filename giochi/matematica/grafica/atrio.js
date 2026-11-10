/* Gioco di Matematica · terze · Capitolo 2: IL FINALE. L'atrio della Stazione dei giochi, oggi.
   Tre piani: le grandi finestre ad arco, il tabellone delle partenze e l'orologio; le panchine e il cantiere
   di Madama Parolona (secchio, sacchi, piastrelle impilate); in primo piano il pavimento a quadrotte e il riquadro
   da piastrellare. Le piastrelle del riquadro (con i buchi o complete) sono "elementi". */
Grafica.definizioni(`
  <linearGradient id="at-muro" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#c8b8d8"/><stop offset="1" stop-color="#9a88b0"/>
  </linearGradient>
  <linearGradient id="at-vetro" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#ffd8a0"/><stop offset=".6" stop-color="#f0a8a0"/><stop offset="1" stop-color="#a88ac8"/>
  </linearGradient>
  <linearGradient id="at-pav" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#8a7aa0"/><stop offset="1" stop-color="#5a4a70"/>
  </linearGradient>
  <linearGradient id="at-legno" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#a87a4a"/><stop offset="1" stop-color="#6a4a2a"/>
  </linearGradient>
  <radialGradient id="at-luce" cx=".5" cy=".5" r=".5">
    <stop offset="0" stop-color="#fff0c8" stop-opacity=".55"/><stop offset="1" stop-color="#fff0c8" stop-opacity="0"/>
  </radialGradient>
  <!-- le piastrelle del pavimento di Madama Parolona -->
  <symbol id="at-quadrato-a" viewBox="0 0 100 100"><rect width="100" height="100" fill="#e88a6a" stroke="#1d1428" stroke-width="4"/><path d="M10 10 L90 90 M90 10 L10 90" stroke="#c86a4a" stroke-width="3"/></symbol>
  <symbol id="at-quadrato-b" viewBox="0 0 100 100"><rect width="100" height="100" fill="#6ab0d8" stroke="#1d1428" stroke-width="4"/><circle cx="50" cy="50" r="22" fill="none" stroke="#4a90b8" stroke-width="3"/></symbol>
  <symbol id="at-rettangolo" viewBox="0 0 100 100" preserveAspectRatio="none"><rect width="100" height="100" fill="#f2d26a" stroke="#1d1428" stroke-width="4"/><path d="M0 50 H100" stroke="#d2b24a" stroke-width="3"/></symbol>
`);

Grafica.sfondo("atrio2", `
  <!-- ===== PARETI E FINESTRE AD ARCO ===== -->
  <rect width="1600" height="900" fill="url(#at-muro)"/>
  <g stroke="#2a1a3a" stroke-width="4">
    <path d="M80 560 V200 A120 120 0 0 1 320 200 V560 Z" fill="url(#at-vetro)"/>
    <path d="M1280 560 V200 A120 120 0 0 1 1520 200 V560 Z" fill="url(#at-vetro)"/>
    <path d="M200 80 V560 M80 300 H320 M80 430 H320 M1400 80 V560 M1280 300 H1520 M1280 430 H1520" stroke="#4a3a5a" stroke-width="6"/>
    <path d="M80 560 V200 A120 120 0 0 1 320 200 V560 Z M1280 560 V200 A120 120 0 0 1 1520 200 V560 Z" fill="none" stroke="#3a2a4a" stroke-width="14"/>
  </g>
  <!-- binari e treni lontani dietro le finestre -->
  <g stroke="#2a1a3a" stroke-width="2.5" opacity=".8">
    <rect x="96" y="470" width="210" height="60" fill="#5a6a8a"/><rect x="110" y="482" width="40" height="24" fill="#ffe8a0"/><rect x="170" y="482" width="40" height="24" fill="#ffe8a0"/><rect x="230" y="482" width="40" height="24" fill="#ffe8a0"/>
    <rect x="1296" y="480" width="210" height="50" fill="#8a4a6a"/><rect x="1310" y="490" width="34" height="20" fill="#ffe8a0"/><rect x="1370" y="490" width="34" height="20" fill="#ffe8a0"/>
  </g>
  <!-- cornicione -->
  <rect y="60" width="1600" height="26" fill="#7a6a90" stroke="#2a1a3a" stroke-width="3"/>
  <g fill="#7a6a90" stroke="#2a1a3a" stroke-width="3"><rect x="360" y="86" width="26" height="560"/><rect x="1214" y="86" width="26" height="560"/></g>

  <!-- ===== IL TABELLONE DELLE PARTENZE E L'OROLOGIO ===== -->
  <g stroke="#1d1428" stroke-width="4">
    <rect x="480" y="120" width="640" height="200" rx="10" fill="#1d1a2e"/>
    <rect x="500" y="140" width="600" height="36" fill="#2a2648"/>
    <g fill="#ffd36b" stroke="none" font-family="Georgia, serif" font-weight="700" font-size="24">
      <text x="520" y="166">BINARIO</text><text x="760" y="166">DESTINAZIONE</text><text x="1010" y="166">ORA</text>
    </g>
    <g stroke="#3a3660" stroke-width="2"><path d="M500 210 H1100 M500 250 H1100 M500 290 H1100"/></g>
    <g fill="#e8e4ff" stroke="none" font-family="monospace" font-weight="700" font-size="24">
      <text x="540" y="202">7</text><text x="660" y="202">· · · · · · · · ·</text>
      <text x="540" y="242">8</text><text x="660" y="242">· · · · · · · · ·</text>
      <text x="540" y="282">9</text><text x="660" y="282">· · · · · · · · ·</text>
    </g>
    <circle cx="800" cy="390" r="52" fill="#fbf6ea"/>
    <circle cx="800" cy="390" r="44" fill="none" stroke="#c8962e" stroke-width="3"/>
    <path d="M800 390 V356 M800 390 L826 404" stroke-width="5" stroke-linecap="round"/>
    <path d="M800 338 V346 M852 390 H844 M800 442 V434 M748 390 H756" stroke-width="3"/>
    <path d="M800 320 V338" stroke-width="6"/>
  </g>

  <!-- ===== IL PAVIMENTO DELL'ATRIO ===== -->
  <path d="M0 640 H1600 V900 H0 Z" fill="url(#at-pav)"/>
  <g stroke="#3a2a50" stroke-width="2" fill="none" opacity=".8">
    <path d="M0 680 H1600 M0 730 H1600 M0 790 H1600 M0 860 H1600"/>
    <path d="M800 640 L800 900 M640 640 L560 900 M480 640 L320 900 M320 640 L80 900 M160 640 L-160 900 M960 640 L1040 900 M1120 640 L1280 900 M1280 640 L1520 900 M1440 640 L1760 900"/>
  </g>
  <rect y="634" width="1600" height="12" fill="#3a2a50"/>
  <ellipse cx="800" cy="770" rx="420" ry="90" fill="url(#at-luce)"/>

  <!-- ===== IL CANTIERE DI MADAMA PAROLONA ===== -->
  <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round">
    <!-- piastrelle impilate -->
    <path d="M1060 640 L1140 640 L1150 620 L1070 620 Z" fill="#e88a6a"/><path d="M1062 620 L1142 620 L1150 602 L1072 602 Z" fill="#6ab0d8"/><path d="M1066 602 L1146 602 L1152 586 L1074 586 Z" fill="#f2d26a"/>
    <!-- secchio della colla -->
    <path d="M440 650 L450 600 H510 L520 650 Z" fill="#8a9aa8"/><ellipse cx="480" cy="600" rx="30" ry="8" fill="#e8e4d8"/>
    <path d="M452 600 Q480 560 508 600" fill="none" stroke-width="3"/>
    <!-- sacco -->
    <path d="M540 650 Q530 600 560 590 L610 590 Q636 600 626 650 Z" fill="#d8c8a8"/><path d="M556 610 h50 M552 630 h58" stroke="#a89878" stroke-width="2"/>
  </g>

  <!-- ===== PANCHINE ===== -->
  <g stroke="#1d1428" stroke-width="3">
    <rect x="96" y="590" width="220" height="20" rx="4" fill="url(#at-legno)"/><rect x="96" y="560" width="220" height="18" rx="4" fill="url(#at-legno)"/>
    <path d="M110 610 V650 M300 610 V650" stroke-width="8"/>
    <rect x="1290" y="590" width="220" height="20" rx="4" fill="url(#at-legno)"/><rect x="1290" y="560" width="220" height="18" rx="4" fill="url(#at-legno)"/>
    <path d="M1304 610 V650 M1494 610 V650" stroke-width="8"/>
  </g>
  <!-- la porta verso il Binario 8 -->
  <g stroke="#1d1428" stroke-width="4">
    <rect x="0" y="300" width="60" height="340" fill="#4a3a5a"/>
    <rect x="8" y="320" width="44" height="80" fill="#ffd36b" opacity=".6"/>
  </g>
`);
