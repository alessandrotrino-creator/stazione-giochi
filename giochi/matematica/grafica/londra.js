/* Gioco di Matematica · terze · Capitolo 2: LONDRA, 1557. La bottega del tipografo dove si stampa il libro di Recorde.
   Di Robert Recorde non esistono ritratti sicuri: è disegnato con la veste lunga e il berretto piatto dei dotti
   inglesi del Cinquecento, senza caricature. Niente chiese né elementi religiosi: dalla finestra il Tamigi e le case.
   Tre piani: pareti a graticcio con la finestra e i fogli stesi ad asciugare; il torchio di legno, il capobottega
   e la cassa dei caratteri; in primo piano il pavimento di assi, il cesto degli stracci e il banco delle bozze.
   Il grembiule, il berretto, Madama Parolona alla finestra e l'uguale nella cassa sono "elementi". */
Grafica.definizioni(`
  <linearGradient id="lo-intonaco" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#e8dcc0"/><stop offset="1" stop-color="#c8b898"/>
  </linearGradient>
  <linearGradient id="lo-trave" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#3a2416"/><stop offset=".5" stop-color="#5a3a24"/><stop offset="1" stop-color="#3a2416"/>
  </linearGradient>
  <linearGradient id="lo-assi" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#7a5434"/><stop offset="1" stop-color="#4a3020"/>
  </linearGradient>
  <linearGradient id="lo-cielo" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#a8b8c8"/><stop offset="1" stop-color="#e0e4e0"/>
  </linearGradient>
  <linearGradient id="lo-veste" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#3a1a1a"/><stop offset=".45" stop-color="#6a2a2a"/><stop offset="1" stop-color="#3a1a1a"/>
  </linearGradient>
  <linearGradient id="lo-pelle" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#f4cca8"/><stop offset="1" stop-color="#dca482"/>
  </linearGradient>
  <radialGradient id="lo-luce" cx=".5" cy=".5" r=".5">
    <stop offset="0" stop-color="#fff8e0" stop-opacity=".6"/><stop offset="1" stop-color="#fff8e0" stop-opacity="0"/>
  </radialGradient>

  <!-- ROBERT RECORDE: veste lunga rosso scuro con bordo di pelliccia, berretto piatto nero -->
  <symbol id="recorde" viewBox="-110 -600 230 615" overflow="visible">
    <ellipse cx="0" cy="0" rx="70" ry="11" fill="#000" opacity=".4"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <path d="M-46 0 Q-48 -16 -30 -18 L-8 -18 L-8 2 Z M8 2 L8 -18 L30 -18 Q50 -16 50 0 Z" fill="#2a1a12"/>
      <!-- veste -->
      <path d="M-48 -440 C-64 -330 -74 -190 -80 -16 Q0 -4 82 -16 C74 -190 64 -330 50 -440 Q0 -458 -48 -440 Z" fill="url(#lo-veste)"/>
      <path d="M-30 -440 C-40 -300 -46 -160 -50 -14 M30 -440 C40 -300 46 -160 50 -14" fill="none" stroke="#5a3a2a" stroke-width="13"/>
      <path d="M-4 -430 L-6 -20" fill="none" stroke="#2a1010" stroke-width="2.5"/>
      <!-- cintura -->
      <path d="M-56 -300 Q0 -290 58 -300" fill="none" stroke="#2a1a12" stroke-width="7"/>
      <!-- braccio destro con il righello di legno (il suo regolo) -->
      <path d="M46 -432 C72 -404 86 -370 84 -330" fill="none" stroke="#1d1428" stroke-width="31"/>
      <path d="M46 -432 C72 -404 86 -370 84 -330" fill="none" stroke="#5a2424" stroke-width="25"/>
      <ellipse cx="86" cy="-320" rx="11" ry="12" fill="url(#lo-pelle)"/>
      <rect x="78" y="-420" width="14" height="150" rx="3" fill="#d8b878" transform="rotate(-12 86 -320)"/>
      <path d="M80 -404 h8 M80 -384 h8 M80 -364 h8 M80 -344 h8" stroke="#5a3a20" stroke-width="2" transform="rotate(-12 86 -320)"/>
      <!-- braccio sinistro con un foglio di bozze -->
      <path d="M-46 -432 C-72 -400 -80 -360 -58 -322" fill="none" stroke="#1d1428" stroke-width="31"/>
      <path d="M-46 -432 C-72 -400 -80 -360 -58 -322" fill="none" stroke="#5a2424" stroke-width="25"/>
      <rect x="-92" y="-340" width="48" height="62" rx="2" fill="#f6ecd0" transform="rotate(-8 -68 -310)"/>
      <path d="M-86 -326 h34 M-86 -314 h30 M-86 -302 h36 M-86 -290 h22" stroke="#4a3a2a" stroke-width="2" transform="rotate(-8 -68 -310)"/>
      <ellipse cx="-54" cy="-316" rx="11" ry="11" fill="url(#lo-pelle)"/>
      <!-- collo, colletto bianco piccolo -->
      <path d="M-9 -474 L-10 -446 L14 -446 L12 -474 Z" fill="url(#lo-pelle)"/>
      <path d="M-24 -448 Q2 -436 28 -448 L22 -440 Q2 -430 -18 -440 Z" fill="#fbf6ea"/>
      <!-- testa -->
      <path d="M-24 -524 C-26 -494 -18 -474 2 -468 C20 -464 32 -476 36 -494 C40 -510 38 -530 32 -544 C20 -560 -16 -558 -24 -524 Z" fill="url(#lo-pelle)"/>
      <path d="M-22 -510 Q-32 -514 -30 -500 Q-28 -490 -20 -494" fill="#c88a64"/>
      <!-- barba castana, corta e tonda -->
      <path d="M-20 -500 C-22 -474 -6 -454 12 -452 C30 -454 40 -474 38 -500 C32 -490 24 -486 16 -488 C8 -492 -6 -492 -12 -488 Z" fill="#7a4a2a"/>
      <path d="M6 -492 Q20 -500 34 -492" fill="none" stroke="#7a4a2a" stroke-width="5"/>
      <path d="M12 -484 Q22 -478 30 -484" fill="none" stroke="#7a2a26" stroke-width="2.5"/>
      <path d="M26 -512 Q33 -500 27 -496" fill="none" stroke="#a86a48" stroke-width="3"/>
      <ellipse cx="22" cy="-522" rx="3.5" ry="4.5" fill="#1d1428" stroke="none"/>
      <path d="M14 -534 Q22 -537 30 -533" fill="none" stroke="#5a3a20" stroke-width="3"/>
      <!-- capelli e berretto piatto -->
      <path d="M-26 -520 C-34 -540 -26 -556 -10 -560 L-6 -530 Z" fill="#7a4a2a"/>
      <ellipse cx="4" cy="-556" rx="48" ry="12" fill="#1a1622"/>
      <path d="M-30 -558 C-28 -584 34 -586 38 -558 Z" fill="#1a1622"/>
    </g>
  </symbol>

  <!-- il grembiule da apprendista -->
  <symbol id="ogg-grembiule" viewBox="0 0 140 140">
    <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
      <path d="M50 22 Q70 14 90 22" fill="none" stroke-width="5"/>
      <path d="M46 28 H94 L98 62 L118 64 L110 126 H30 L22 64 L42 62 Z" fill="#c8b48a"/>
      <path d="M22 64 L6 60 M118 64 L134 60" stroke-width="5"/>
      <rect x="52" y="78" width="36" height="24" rx="3" fill="#a8946a"/>
      <g fill="#2a2a34" stroke="none"><circle cx="60" cy="44" r="4"/><circle cx="84" cy="112" r="5"/><circle cx="40" cy="96" r="3"/></g>
    </g>
  </symbol>
  <!-- il berretto -->
  <symbol id="ogg-berretto" viewBox="0 0 140 140">
    <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
      <ellipse cx="70" cy="92" rx="52" ry="18" fill="#4a5a3a"/>
      <path d="M26 88 C24 50 116 44 114 88 Q70 102 26 88 Z" fill="#5a6a46"/>
      <path d="M30 86 Q70 98 110 86" fill="none" stroke="#3a4a2a" stroke-width="5"/>
    </g>
  </symbol>
  <!-- il travestimento: grembiule e berretto insieme -->
  <symbol id="ogg-travestimento" viewBox="0 0 140 140">
    <g transform="translate(-6 10) scale(.86)"><use href="#ogg-grembiule" width="140" height="140"/></g>
    <g transform="translate(46 -10) scale(.6)"><use href="#ogg-berretto" width="140" height="140"/></g>
  </symbol>
`);

Grafica.sfondo("londra", `
  <!-- ===== PARETI A GRATICCIO ===== -->
  <rect width="1600" height="900" fill="url(#lo-intonaco)"/>
  <g fill="url(#lo-trave)" stroke="#1d1410" stroke-width="3">
    <rect y="0" width="1600" height="36"/>
    <rect x="0" y="36" width="34" height="620"/><rect x="360" y="36" width="30" height="620"/><rect x="730" y="36" width="30" height="620"/>
    <rect x="1000" y="36" width="30" height="620"/><rect x="1360" y="36" width="30" height="620"/><rect x="1566" y="36" width="34" height="620"/>
    <rect y="300" width="1600" height="22"/>
    <path d="M34 322 L360 640 L360 610 L64 322 Z M390 36 L730 290 L730 260 L420 36 Z M1030 322 L1360 640 L1360 610 L1060 322 Z M1390 36 L1566 200 L1566 170 L1420 36 Z"/>
  </g>

  <!-- ===== PAVIMENTO DI ASSI ===== -->
  <rect y="640" width="1600" height="260" fill="url(#lo-assi)"/>
  <g stroke="#2a1a10" stroke-width="2.5">
    <path d="M0 680 H1600 M0 730 H1600 M0 790 H1600 M0 860 H1600"/>
    <path d="M200 640 V680 M620 640 V680 M1100 640 V680 M1450 640 V680 M80 680 V730 M480 680 V730 M900 680 V730 M1300 680 V730 M300 730 V790 M760 730 V790 M1200 730 V790 M140 790 V860 M600 790 V860 M1040 790 V860 M1500 790 V860"/>
  </g>
  <rect y="636" width="1600" height="10" fill="#2a1a10"/>
  <ellipse cx="860" cy="700" rx="300" ry="70" fill="url(#lo-luce)"/>

  <!-- ===== LA FINESTRA SUL TAMIGI ===== -->
  <g stroke="#1d1410" stroke-width="4">
    <rect x="770" y="110" width="220" height="180" fill="url(#lo-cielo)"/>
    <path d="M770 220 H990 V290 H770 Z" fill="#6a8a9a"/>
    <path d="M770 214 L800 190 L830 214 Z M820 214 L850 186 L880 214 Z M880 214 L910 192 L940 214 Z M930 214 L960 188 L990 214 Z" fill="#7a5a44" stroke-width="2"/>
    <rect x="770" y="212" width="220" height="14" fill="#c8b490" stroke-width="2"/>
    <path d="M790 250 h30 M880 262 h40 M940 248 h30" stroke="#e8f8ff" stroke-width="3"/>
    <path d="M800 290 Q830 270 856 284 L860 262 L874 290 Z" fill="#5a3a24" stroke-width="2"/>
    <path d="M770 110 H990 V290 H770 Z M880 110 V290 M770 200 H990" fill="none" stroke="#3a2416" stroke-width="8"/>
    <path d="M770 110 L990 290 M990 110 L770 290" stroke="#5a4a3a" stroke-width="1.5" opacity=".5"/>
  </g>

  <!-- ===== I FOGLI STESI AD ASCIUGARE ===== -->
  <g stroke="#1d1410" stroke-width="2.5">
    <path d="M40 120 Q370 150 730 118" fill="none" stroke="#5a4a3a" stroke-width="3"/>
    <path d="M1030 110 Q1300 140 1566 112" fill="none" stroke="#5a4a3a" stroke-width="3"/>
    <g fill="#fbf4e0">
      <path d="M80 124 h70 l-4 90 h-66 Z"/><path d="M180 132 h70 l-2 92 h-68 Z"/><path d="M290 138 h70 l-2 90 h-68 Z"/>
      <path d="M420 140 h70 l-2 90 h-68 Z"/><path d="M530 136 h70 l-2 92 h-68 Z"/><path d="M630 128 h70 l-4 90 h-66 Z"/>
      <path d="M1080 120 h70 l-2 90 h-68 Z"/><path d="M1200 128 h70 l-2 92 h-68 Z"/><path d="M1330 128 h70 l-2 92 h-68 Z"/><path d="M1460 120 h70 l-4 90 h-66 Z"/>
    </g>
    <g stroke="#6a5a4a" stroke-width="2">
      <path d="M90 146 h48 M90 160 h40 M90 174 h50 M90 188 h34 M190 154 h50 M190 168 h44 M190 182 h50 M300 160 h50 M300 174 h40 M300 188 h50 M430 162 h50 M430 176 h44 M530 158 h50 M540 172 h40 M640 150 h50 M640 164 h40 M1090 142 h50 M1090 156 h44 M1210 150 h50 M1210 164 h40 M1340 150 h50 M1340 164 h44 M1470 142 h50 M1470 156 h40"/>
    </g>
    <g fill="#c8962e" stroke-width="1.5"><circle cx="115" cy="122" r="5"/><circle cx="215" cy="130" r="5"/><circle cx="325" cy="136" r="5"/><circle cx="455" cy="138" r="5"/><circle cx="565" cy="134" r="5"/><circle cx="665" cy="126" r="5"/><circle cx="1115" cy="118" r="5"/><circle cx="1235" cy="126" r="5"/><circle cx="1365" cy="126" r="5"/><circle cx="1495" cy="118" r="5"/></g>
  </g>

  <!-- ===== IL TORCHIO DI LEGNO (sinistra) ===== -->
  <g stroke="#1d1410" stroke-width="4" stroke-linejoin="round">
    <rect x="420" y="250" width="34" height="440" fill="url(#lo-trave)"/>
    <rect x="640" y="250" width="34" height="440" fill="url(#lo-trave)"/>
    <rect x="400" y="236" width="294" height="40" fill="#5a3a24"/>
    <rect x="410" y="420" width="274" height="30" fill="#5a3a24"/>
    <rect x="520" y="276" width="56" height="70" fill="#8a8a96"/>
    <path d="M530 290 h36 M530 304 h36 M530 318 h36 M530 332 h36" stroke="#4a4a56" stroke-width="2.5"/>
    <rect x="490" y="346" width="116" height="30" fill="#7a5434"/>
    <!-- la barra -->
    <path d="M576 300 L760 250" stroke="#3a2416" stroke-width="14"/><circle cx="764" cy="248" r="12" fill="#5a3a24"/>
    <!-- il piano con il foglio -->
    <path d="M380 520 H720 L740 560 H360 Z" fill="#7a5434"/>
    <rect x="460" y="512" width="170" height="16" fill="#fbf4e0" stroke-width="2"/>
    <path d="M380 560 V690 M720 560 V690" stroke="#3a2416" stroke-width="14"/>
    <!-- due mazzi d'inchiostro appoggiati -->
    <path d="M700 500 L722 470 M740 500 L752 468" stroke="#5a3a24" stroke-width="8"/>
    <ellipse cx="704" cy="506" rx="16" ry="10" fill="#2a2a34"/><ellipse cx="744" cy="506" rx="16" ry="10" fill="#2a2a34"/>
  </g>

  <!-- ===== IL CAPOBOTTEGA (davanti al passaggio verso il banco delle bozze) ===== -->
  <g transform="translate(880 700) scale(.84)" stroke="#1d1428" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
    <ellipse cx="0" cy="0" rx="62" ry="10" fill="#000" opacity=".35" stroke="none"/>
    <path d="M-40 0 Q-42 -14 -26 -16 L-8 -16 L-8 2 Z M8 2 L8 -16 L26 -16 Q44 -14 44 0 Z" fill="#2a1a12"/>
    <path d="M-30 -200 L-34 -16 H-6 L-2 -150 L2 -150 L6 -16 H34 L30 -200 Z" fill="#4a4a5a"/>
    <path d="M-44 -372 C-56 -300 -52 -240 -42 -196 Q0 -186 42 -196 C52 -240 56 -300 44 -372 Q0 -388 -44 -372 Z" fill="#8a6a4a"/>
    <path d="M-34 -340 H34 L38 -190 Q0 -180 -38 -190 Z" fill="#c8b48a"/>
    <g fill="#2a2a34" stroke="none"><circle cx="-10" cy="-300" r="5"/><circle cx="14" cy="-250" r="6"/></g>
    <path d="M-44 -364 C-74 -330 -70 -290 -40 -262" fill="none" stroke="#1d1428" stroke-width="27"/>
    <path d="M-44 -364 C-74 -330 -70 -290 -40 -262" fill="none" stroke="#8a6a4a" stroke-width="21"/>
    <path d="M44 -364 C74 -330 70 -290 40 -262" fill="none" stroke="#1d1428" stroke-width="27"/>
    <path d="M44 -364 C74 -330 70 -290 40 -262" fill="none" stroke="#8a6a4a" stroke-width="21"/>
    <ellipse cx="-36" cy="-258" rx="10" ry="10" fill="url(#lo-pelle)"/><ellipse cx="36" cy="-258" rx="10" ry="10" fill="url(#lo-pelle)"/>
    <path d="M-8 -400 L-8 -376 H10 L10 -400 Z" fill="url(#lo-pelle)"/>
    <ellipse cx="0" cy="-430" rx="30" ry="36" fill="url(#lo-pelle)"/>
    <path d="M-30 -438 C-32 -470 30 -474 32 -438 Q0 -452 -30 -438 Z" fill="#5a3a20"/>
    <path d="M-22 -406 Q0 -390 24 -406 Q20 -394 0 -390 Q-20 -394 -22 -406 Z" fill="#5a3a20"/>
    <ellipse cx="-11" cy="-432" rx="3" ry="4" fill="#1d1428" stroke="none"/><ellipse cx="11" cy="-432" rx="3" ry="4" fill="#1d1428" stroke="none"/>
    <path d="M-20 -444 L-4 -440 M20 -444 L4 -440" stroke-width="3.5"/>
    <path d="M-8 -412 Q0 -416 8 -412" fill="none" stroke="#7a2a26" stroke-width="2.5"/>
  </g>

  <!-- ===== LA CASSA DEI CARATTERI (centro-destra) ===== -->
  <g stroke="#1d1410" stroke-width="4" stroke-linejoin="round">
    <path d="M1050 380 L1310 360 L1320 520 L1040 540 Z" fill="#7a5434"/>
    <g fill="#5a3a24" stroke-width="2">
      <rect x="1060" y="392" width="40" height="30"/><rect x="1106" y="390" width="40" height="30"/><rect x="1152" y="386" width="40" height="30"/><rect x="1198" y="382" width="40" height="30"/><rect x="1244" y="378" width="40" height="30"/>
      <rect x="1058" y="430" width="40" height="30"/><rect x="1104" y="428" width="40" height="30"/><rect x="1150" y="424" width="40" height="30"/><rect x="1196" y="420" width="40" height="30"/><rect x="1242" y="416" width="40" height="30"/>
      <rect x="1056" y="468" width="40" height="30"/><rect x="1102" y="466" width="40" height="30"/><rect x="1148" y="462" width="40" height="30"/><rect x="1194" y="458" width="40" height="30"/><rect x="1240" y="454" width="40" height="30"/>
    </g>
    <g fill="#9a9aa6" stroke="none"><circle cx="1072" cy="410" r="3"/><circle cx="1084" cy="404" r="3"/><circle cx="1122" cy="408" r="3"/><circle cx="1170" cy="404" r="3"/><circle cx="1180" cy="398" r="3"/><circle cx="1260" cy="396" r="3"/><circle cx="1072" cy="448" r="3"/><circle cx="1166" cy="442" r="3"/><circle cx="1214" cy="436" r="3"/><circle cx="1262" cy="434" r="3"/><circle cx="1072" cy="486" r="3"/><circle cx="1120" cy="482" r="3"/><circle cx="1258" cy="472" r="3"/></g>
    <path d="M1060 540 L1050 680 M1300 520 L1310 680" stroke="#3a2416" stroke-width="14"/>
  </g>

  <!-- ===== IL BANCO DELLE BOZZE (destra) ===== -->
  <g stroke="#1d1410" stroke-width="4" stroke-linejoin="round">
    <path d="M1400 540 H1590 L1600 580 H1390 Z" fill="#8a5a34"/>
    <rect x="1390" y="580" width="210" height="30" fill="#5a3820"/>
    <path d="M1410 610 V700" stroke="#3a2416" stroke-width="14"/>
    <rect x="1420" y="520" width="80" height="24" fill="#fbf4e0" stroke-width="2"/><rect x="1500" y="514" width="70" height="30" fill="#e8dcc4" stroke-width="2"/>
    <rect x="1540" y="490" width="20" height="30" rx="4" fill="#2a2a34" stroke-width="2"/><path d="M1550 490 L1570 440" stroke="#f2ead6" stroke-width="3"/>
  </g>

  <!-- ===== IL CESTO DEGLI STRACCI (primo piano a sinistra) ===== -->
  <g stroke="#1d1410" stroke-width="4" stroke-linejoin="round">
    <path d="M150 760 Q140 690 170 680 H310 Q340 690 330 760 Q240 780 150 760 Z" fill="#a8844a"/>
    <path d="M160 700 Q240 712 320 700 M156 724 Q240 736 326 724 M154 746 Q240 758 328 746" fill="none" stroke="#7a5a2a" stroke-width="3"/>
    <path d="M176 684 Q200 650 230 676 Q260 646 290 680" fill="#e8dcc4" stroke-width="2.5"/>
  </g>
  <!-- il gancio vicino alla porta del vagone -->
  <rect x="300" y="380" width="40" height="10" fill="#2a2a34" stroke="#1d1410" stroke-width="2"/>
`);
