/* Gioco di Matematica · terze · G1 «Il cerchio senza π»: CINA, circa 460 — il cortile di Zu Chongzhi.
   Muro bianco con la porta rotonda «a luna», tetti di tegole scure, bambù, un pruno in fiore, lanterne;
   a terra la macina di pietra smontata (base e mola forata) e i sacchi di grano; una stuoia con i bastoncini
   per contare. Zu Chongzhi e il figlio Zu Geng sono interi, appoggiati a terra. Prefisso degli id: cz-. */
Grafica.definizioni(`
  <linearGradient id="cz-cielo" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#e8a878"/><stop offset=".5" stop-color="#f6d0a0"/><stop offset="1" stop-color="#fbe8c8"/>
  </linearGradient>
  <linearGradient id="cz-muro" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#f6f0e2"/><stop offset="1" stop-color="#e2d6bc"/>
  </linearGradient>
  <linearGradient id="cz-tegole" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#4a5a6a"/><stop offset="1" stop-color="#2a3440"/>
  </linearGradient>
  <linearGradient id="cz-legno" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#7a2a1a"/><stop offset=".5" stop-color="#a8402a"/><stop offset="1" stop-color="#6a2216"/>
  </linearGradient>
  <linearGradient id="cz-pietra" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#c8c4bc"/><stop offset=".5" stop-color="#a8a49c"/><stop offset="1" stop-color="#7a766e"/>
  </linearGradient>
  <linearGradient id="cz-pav" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#b8b0a0"/><stop offset="1" stop-color="#9a9282"/>
  </linearGradient>
  <linearGradient id="cz-veste" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#2a4a6a"/><stop offset=".5" stop-color="#3a6a8a"/><stop offset="1" stop-color="#1e3a54"/>
  </linearGradient>
  <linearGradient id="cz-veste2" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#5a7a3a"/><stop offset=".5" stop-color="#7a9a4a"/><stop offset="1" stop-color="#4a6a2a"/>
  </linearGradient>
  <linearGradient id="cz-pelle" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#f0c8a0"/><stop offset="1" stop-color="#d8a880"/>
  </linearGradient>

  <!-- ===== ZU CHONGZHI: veste lunga blu con le maniche larghe, barba lunga e sottile, berretto nero ===== -->
  <symbol id="zuchongzhi" viewBox="-110 -600 230 615" overflow="visible">
    <ellipse cx="0" cy="0" rx="74" ry="11" fill="#000" opacity=".35"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <path d="M-40 0 Q-46 -12 -28 -12 H-6 V2 Z M8 2 V-12 H28 Q44 -12 48 -2 Q42 2 8 2 Z" fill="#1d1a1a"/>
      <path d="M-50 -440 C-64 -320 -74 -170 -78 -10 Q0 4 80 -10 C76 -170 66 -320 52 -440 Q0 -454 -50 -440 Z" fill="url(#cz-veste)"/>
      <path d="M-78 -10 Q0 4 80 -10 L78 -34 Q0 -20 -76 -34 Z" fill="#1a2a3a"/>
      <path d="M-30 -440 L4 -330 L34 -440" fill="none" stroke="#e8d8b0" stroke-width="7"/>
      <path d="M4 -330 L4 -40" stroke="#1a2a3a" stroke-width="2.5"/>
      <path d="M-50 -280 Q0 -270 52 -280 L52 -258 Q0 -248 -50 -258 Z" fill="#c8402f"/>
      <!-- maniche larghe: le mani unite davanti, con un bastoncino per contare -->
      <path d="M-50 -432 C-90 -380 -96 -320 -60 -270 C-40 -262 -20 -266 -8 -280 C-30 -320 -40 -370 -40 -420 Z" fill="url(#cz-veste)"/>
      <path d="M50 -432 C90 -380 96 -320 60 -270 C40 -262 20 -266 8 -280 C30 -320 40 -370 40 -420 Z" fill="url(#cz-veste)"/>
      <ellipse cx="0" cy="-284" rx="16" ry="11" fill="url(#cz-pelle)"/>
      <path d="M-16 -296 L40 -340" stroke="#e8d8a0" stroke-width="5"/>
      <!-- testa -->
      <path d="M-10 -470 L-12 -444 L14 -444 L12 -470 Z" fill="url(#cz-pelle)"/>
      <path d="M-26 -524 C-28 -490 -18 -470 2 -466 C22 -462 34 -474 38 -494 C42 -512 40 -532 32 -546 C18 -562 -18 -560 -26 -524 Z" fill="url(#cz-pelle)"/>
      <!-- barba lunga e sottile, baffi lunghi -->
      <path d="M0 -476 C-6 -440 -2 -400 6 -380 C12 -400 18 -440 14 -476 Z" fill="#3a3430"/>
      <path d="M2 -488 C-10 -486 -20 -478 -26 -462 M20 -488 C30 -486 40 -478 44 -462" fill="none" stroke="#3a3430" stroke-width="3"/>
      <path d="M6 -486 Q12 -482 18 -486" fill="none" stroke="#6a2a26" stroke-width="3"/>
      <path d="M22 -508 Q28 -498 22 -494" fill="none" stroke="#a87858" stroke-width="3"/>
      <path d="M0 -514 Q6 -517 12 -514 M20 -514 Q26 -517 32 -514" fill="none" stroke="#1d1428" stroke-width="3"/>
      <path d="M-4 -526 Q6 -532 14 -527 M18 -527 Q26 -532 36 -526" fill="none" stroke="#2a2420" stroke-width="3.5"/>
      <path d="M-28 -530 C-30 -556 -10 -566 8 -566 C28 -566 42 -556 40 -530 C34 -544 22 -550 8 -550 C-8 -550 -22 -544 -28 -530 Z" fill="#2a2420"/>
      <!-- berretto nero rigido -->
      <path d="M-24 -556 L-20 -598 H36 L40 -556 Q8 -566 -24 -556 Z" fill="#1d1a1a"/>
      <path d="M-20 -598 H36" stroke="#5a5a6a" stroke-width="2"/>
    </g>
  </symbol>

  <!-- ===== ZU GENG, il figlio: giovane, veste verde corta, pantaloni, capelli raccolti ===== -->
  <symbol id="zugeng" viewBox="-110 -600 230 615" overflow="visible">
    <ellipse cx="0" cy="0" rx="62" ry="10" fill="#000" opacity=".35"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <path d="M-36 0 Q-42 -12 -24 -12 H-6 V2 Z M8 2 V-12 H26 Q40 -12 44 -2 Q38 2 8 2 Z" fill="#1d1a1a"/>
      <path d="M-22 -200 L-24 -14 M22 -200 L24 -14" stroke="#1d1428" stroke-width="28"/>
      <path d="M-22 -200 L-24 -14 M22 -200 L24 -14" stroke="#c8b890" stroke-width="22"/>
      <path d="M-44 -420 C-56 -330 -60 -250 -56 -180 Q0 -168 56 -180 C60 -250 56 -330 46 -420 Q0 -432 -44 -420 Z" fill="url(#cz-veste2)"/>
      <path d="M-26 -420 L4 -320 L30 -420" fill="none" stroke="#e8d8b0" stroke-width="6"/>
      <path d="M-46 -276 Q0 -266 48 -276 L48 -258 Q0 -250 -46 -258 Z" fill="#3a2a1a"/>
      <!-- braccia che reggono un sacco di grano sulla spalla -->
      <path d="M44 -412 C70 -440 76 -480 64 -500" fill="none" stroke="#1d1428" stroke-width="26"/>
      <path d="M44 -412 C70 -440 76 -480 64 -500" fill="none" stroke="url(#cz-veste2)" stroke-width="20"/>
      <path d="M20 -540 C40 -560 100 -550 106 -510 C110 -480 70 -470 40 -480 C16 -488 4 -520 20 -540 Z" fill="#d8c08a"/>
      <path d="M40 -540 Q60 -520 50 -484" fill="none" stroke="#a8884a" stroke-width="2"/>
      <path d="M-44 -412 C-66 -360 -72 -310 -60 -270" fill="none" stroke="#1d1428" stroke-width="26"/>
      <path d="M-44 -412 C-66 -360 -72 -310 -60 -270" fill="none" stroke="url(#cz-veste2)" stroke-width="20"/>
      <ellipse cx="-58" cy="-260" rx="11" ry="12" fill="url(#cz-pelle)"/>
      <!-- testa -->
      <path d="M-10 -450 L-12 -424 L14 -424 L12 -450 Z" fill="url(#cz-pelle)"/>
      <path d="M-26 -504 C-28 -470 -18 -450 2 -446 C22 -442 34 -454 38 -474 C42 -492 40 -512 32 -526 C18 -542 -18 -540 -26 -504 Z" fill="url(#cz-pelle)"/>
      <path d="M6 -464 Q14 -458 22 -464" fill="none" stroke="#a83a3a" stroke-width="3"/>
      <path d="M0 -494 Q6 -497 12 -494 M20 -494 Q26 -497 32 -494" fill="none" stroke="#1d1428" stroke-width="3"/>
      <path d="M-28 -506 C-32 -540 -10 -552 8 -552 C30 -552 44 -540 40 -506 C34 -524 22 -530 8 -530 C-8 -530 -22 -524 -28 -506 Z" fill="#1d1a1a"/>
      <ellipse cx="8" cy="-560" rx="14" ry="12" fill="#1d1a1a"/>
      <path d="M-6 -560 H22" stroke="#c8402f" stroke-width="4"/>
    </g>
  </symbol>

  <!-- la macina: base (disco), mola forata (corona circolare) e perno -->
  <symbol id="cz-base" viewBox="0 0 260 90">
    <ellipse cx="130" cy="70" rx="124" ry="18" fill="#000" opacity=".25"/>
    <path d="M10 40 V62 Q130 92 250 62 V40 Z" fill="url(#cz-pietra)" stroke="#1d1428" stroke-width="3"/>
    <ellipse cx="130" cy="40" rx="120" ry="30" fill="#c8c4bc" stroke="#1d1428" stroke-width="3"/>
    <g stroke="#8a867e" stroke-width="2" fill="none"><path d="M40 40 Q130 20 220 40 M60 48 Q130 30 200 48 M70 32 L190 48 M190 32 L70 48"/></g>
  </symbol>
  <symbol id="cz-mola" viewBox="0 0 220 80">
    <path d="M10 34 V52 Q110 80 210 52 V34 Z" fill="url(#cz-pietra)" stroke="#1d1428" stroke-width="3"/>
    <ellipse cx="110" cy="34" rx="100" ry="26" fill="#d0ccc4" stroke="#1d1428" stroke-width="3"/>
    <ellipse cx="110" cy="34" rx="30" ry="8" fill="#3a3632" stroke="#1d1428" stroke-width="3"/>
    <g stroke="#9a968e" stroke-width="2" fill="none"><path d="M30 30 Q60 18 80 24 M140 24 Q170 18 192 30"/></g>
    <path d="M196 40 L218 22 L224 30" fill="none" stroke="#6a4020" stroke-width="7" stroke-linecap="round"/>
  </symbol>
`);

Grafica.sfondo("cinazu", `
  <!-- ===== CIELO DEL TRAMONTO E MONTAGNE LONTANE ===== -->
  <rect width="1600" height="900" fill="url(#cz-cielo)"/>
  <circle cx="1240" cy="190" r="56" fill="#fff0d0" opacity=".9"/>
  <g fill="#c8a0a0" opacity=".55"><path d="M0 360 L120 250 L220 320 L360 200 L480 300 L600 240 L760 330 V420 H0 Z"/></g>
  <g fill="#a88a9a" opacity=".55"><path d="M700 360 L860 230 L980 320 L1100 210 L1240 310 L1380 240 L1600 330 V420 H700 Z"/></g>
  <g fill="none" stroke="#5a3a3a" stroke-width="3" stroke-linecap="round"><path d="M400 150 q10 -8 20 0 q10 -8 20 0"/><path d="M460 180 q8 -6 16 0 q8 -6 16 0"/></g>

  <!-- ===== IL MURO BIANCO CON LA PORTA A LUNA ===== -->
  <defs><clipPath id="cz-luna"><circle cx="800" cy="410" r="170"/></clipPath></defs>
  <rect x="0" y="230" width="1600" height="420" fill="url(#cz-muro)" stroke="#1d1428" stroke-width="4"/>
  <!-- tetto di tegole sopra il muro -->
  <path d="M-20 240 Q800 196 1620 240 L1620 210 Q800 168 -20 210 Z" fill="url(#cz-tegole)" stroke="#1d1428" stroke-width="4"/>
  <g stroke="#1a2430" stroke-width="2"><path d="M60 214 V236 M140 208 V232 M220 204 V228 M300 200 V224 M380 196 V220 M460 194 V218 M540 192 V216 M620 190 V214 M700 189 V213 M780 188 V212 M860 189 V213 M940 190 V214 M1020 192 V216 M1100 194 V218 M1180 196 V220 M1260 200 V224 M1340 204 V228 M1420 208 V232 M1500 214 V236"/></g>
  <path d="M-20 210 Q-40 190 -30 176 M1620 210 Q1640 190 1630 176" fill="none" stroke="#1d1428" stroke-width="6"/>
  <!-- il giardino visto attraverso la porta rotonda -->
  <g clip-path="url(#cz-luna)">
    <rect x="620" y="230" width="360" height="360" fill="#bfe0c0"/>
    <ellipse cx="800" cy="560" rx="200" ry="50" fill="#7aa86a"/>
    <path d="M630 520 Q700 480 770 520 Q830 470 900 510 Q950 480 990 500 V600 H630 Z" fill="#5a8a4a"/>
    <!-- un piccolo stagno rotondo e un ponticello -->
    <ellipse cx="800" cy="540" rx="90" ry="20" fill="#6ab0c8" stroke="#3a6a7a" stroke-width="2"/>
    <path d="M730 540 Q800 490 870 540" fill="none" stroke="#a8402a" stroke-width="8"/>
    <path d="M740 540 V520 M770 540 V506 M800 540 V500 M830 540 V506 M860 540 V520" stroke="#a8402a" stroke-width="3"/>
    <!-- un padiglione lontano -->
    <path d="M880 430 h70 v40 h-70 Z" fill="#e8d8c0" stroke="#5a3a2a" stroke-width="2"/>
    <path d="M866 432 Q915 400 964 432 Z" fill="#3a4a5a" stroke="#1d1428" stroke-width="2"/>
  </g>
  <circle cx="800" cy="410" r="170" fill="none" stroke="#1d1428" stroke-width="6"/>
  <circle cx="800" cy="410" r="184" fill="none" stroke="#c8bca0" stroke-width="16"/>
  <circle cx="800" cy="410" r="192" fill="none" stroke="#1d1428" stroke-width="3"/>
  <!-- finestre a grata -->
  <g stroke="#1d1428" stroke-width="3">
    <rect x="300" y="320" width="160" height="120" fill="#7a2a1a"/>
    <rect x="1140" y="320" width="160" height="120" fill="#7a2a1a"/>
  </g>
  <g stroke="#e8c26a" stroke-width="3" fill="none">
    <path d="M300 350 H460 M300 380 H460 M300 410 H460 M340 320 V440 M380 320 V440 M420 320 V440"/>
    <path d="M1140 350 H1300 M1140 380 H1300 M1140 410 H1300 M1180 320 V440 M1220 320 V440 M1260 320 V440"/>
  </g>
  <!-- lanterne rosse appese -->
  <g stroke="#1d1428" stroke-width="3">
    <path d="M380 240 V270 M1220 240 V270"/>
    <ellipse cx="380" cy="292" rx="26" ry="24" fill="#d8402f"/><ellipse cx="1220" cy="292" rx="26" ry="24" fill="#d8402f"/>
    <rect x="366" y="266" width="28" height="6" fill="#e8c26a"/><rect x="1206" y="266" width="28" height="6" fill="#e8c26a"/>
    <path d="M380 316 V334 M1220 316 V334" stroke="#e8c26a"/>
  </g>
  <g fill="#ffd090" opacity=".55"><ellipse cx="380" cy="292" rx="12" ry="14"/><ellipse cx="1220" cy="292" rx="12" ry="14"/></g>
  <!-- zoccolo del muro -->
  <rect x="0" y="600" width="1600" height="50" fill="#a8a090" stroke="#1d1428" stroke-width="4"/>
  <g stroke="#7a7262" stroke-width="2"><path d="M100 600 V650 M260 600 V650 M420 600 V650 M1180 600 V650 M1340 600 V650 M1500 600 V650"/></g>

  <!-- ===== BAMBÙ A SINISTRA E PRUNO IN FIORE A DESTRA ===== -->
  <g stroke="#1d1428" stroke-width="3">
    <path d="M190 650 V260 M226 650 V230 M256 650 V290" stroke-width="14"/>
    <path d="M190 650 V260 M226 650 V230 M256 650 V290" stroke="#7aa84a" stroke-width="9"/>
  </g>
  <g stroke="#3a5a1a" stroke-width="3"><path d="M182 340 h16 M182 440 h16 M182 540 h16 M218 320 h16 M218 420 h16 M218 520 h16 M248 380 h16 M248 480 h16 M248 580 h16"/></g>
  <g fill="#5a9a3a" stroke="#2a4a1a" stroke-width="2">
    <path d="M190 300 q-40 -10 -60 10 q30 -2 60 -10 Z M226 270 q40 -16 66 4 q-34 0 -66 -4 Z M256 340 q-36 -6 -52 14 q26 -6 52 -14 Z M190 400 q34 -14 56 2 q-28 2 -56 -2 Z M226 380 q-40 -6 -60 14 q32 -4 60 -14 Z"/>
  </g>
  <path d="M1460 650 C1450 560 1480 500 1440 420 M1450 520 C1500 490 1540 470 1580 480 M1446 460 C1400 440 1380 410 1360 380" fill="none" stroke="#3a2a22" stroke-width="10" stroke-linecap="round"/>
  <g fill="#f8c8d8" stroke="#c87890" stroke-width="1.5">
    <circle cx="1440" cy="420" r="9"/><circle cx="1470" cy="440" r="8"/><circle cx="1500" cy="490" r="9"/><circle cx="1540" cy="472" r="8"/><circle cx="1578" cy="482" r="9"/>
    <circle cx="1362" cy="380" r="9"/><circle cx="1390" cy="410" r="8"/><circle cx="1420" cy="440" r="7"/><circle cx="1516" cy="470" r="7"/><circle cx="1456" cy="400" r="7"/>
  </g>

  <!-- ===== PAVIMENTO DI LASTRE ===== -->
  <rect y="650" width="1600" height="250" fill="url(#cz-pav)"/>
  <g stroke="#7a7262" stroke-width="2">
    <path d="M0 700 H1600 M0 770 H1600 M0 860 H1600"/>
    <path d="M100 650 L60 700 M300 650 L280 700 M500 650 L490 700 M700 650 L696 700 M900 650 L904 700 M1100 650 L1110 700 M1300 650 L1320 700 M1500 650 L1540 700"/>
    <path d="M40 700 L0 770 M240 700 L210 770 M440 700 L420 770 M640 700 L630 770 M840 700 L840 770 M1040 700 L1050 770 M1240 700 L1260 770 M1440 700 L1470 770"/>
    <path d="M140 770 L90 860 M380 770 L350 860 M620 770 L600 860 M860 770 L860 860 M1100 770 L1120 860 M1340 770 L1370 860"/>
  </g>
  <rect y="650" width="1600" height="18" fill="#000" opacity=".15"/>

  <!-- ===== STUOIA CON I BASTONCINI PER CONTARE ===== -->
  <path d="M1180 760 L1220 720 H1420 L1400 760 Z" fill="#d8c08a" stroke="#1d1428" stroke-width="3"/>
  <g stroke="#a8884a" stroke-width="1.5"><path d="M1190 750 H1406 M1200 740 H1412 M1210 730 H1416"/></g>
  <g stroke-width="4" stroke-linecap="round"><path d="M1240 742 l14 -16 M1256 744 l14 -16 M1272 746 l14 -16" stroke="#c8402f"/><path d="M1310 744 l14 -16 M1326 746 l14 -16 M1352 740 h34 M1352 750 h34" stroke="#2a2a2a"/></g>

  <!-- ===== SACCHI DI GRANO ===== -->
  <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round">
    <path d="M1460 700 C1450 650 1470 620 1500 616 L1520 600 L1540 616 C1570 620 1590 650 1580 700 Q1520 716 1460 700 Z" fill="#d8c08a"/>
    <path d="M1520 600 L1510 590 M1520 600 L1534 588" stroke-width="4"/>
  </g>
  <path d="M1480 660 Q1520 650 1560 664" fill="none" stroke="#a8884a" stroke-width="2"/>
`);
