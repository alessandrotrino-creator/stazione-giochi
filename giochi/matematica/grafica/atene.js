/* Gioco di Matematica · terze · G1 «Il cerchio senza π»: ATENE, circa 440 a.C. — il portico di Ippocrate di Chio.
   Un portico (stoà) con le colonne sull'agorà, colline lontane, ulivi, anfore, una bancarella di vasi dipinti,
   il tavolo con le tavolette di cera piene di lunule, la bilancia a due piatti su un trespolo.
   Ippocrate è intero, appoggiato a terra: ex mercante, con il berretto da marinaio. Prefisso degli id: at-. */
Grafica.definizioni(`
  <linearGradient id="at-cielo" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#6ab8e8"/><stop offset=".6" stop-color="#b8e0f4"/><stop offset="1" stop-color="#f0ead8"/>
  </linearGradient>
  <linearGradient id="at-marmo" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#d8d0c0"/><stop offset=".35" stop-color="#fffaf0"/><stop offset=".7" stop-color="#ece4d4"/><stop offset="1" stop-color="#c0b6a2"/>
  </linearGradient>
  <linearGradient id="at-muro" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#e8dcc4"/><stop offset="1" stop-color="#cdbc9c"/>
  </linearGradient>
  <linearGradient id="at-tetto" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#c8603a"/><stop offset="1" stop-color="#8a3a1a"/>
  </linearGradient>
  <linearGradient id="at-terra" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#d8c4a0"/><stop offset="1" stop-color="#bca27a"/>
  </linearGradient>
  <linearGradient id="at-colline" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#9ab07a"/><stop offset="1" stop-color="#7a9060"/>
  </linearGradient>
  <linearGradient id="at-chitone" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#c8c0a8"/><stop offset=".5" stop-color="#ece6d4"/><stop offset="1" stop-color="#b8ae96"/>
  </linearGradient>
  <linearGradient id="at-mantello" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#4a8a6a"/><stop offset="1" stop-color="#2a5a44"/>
  </linearGradient>
  <linearGradient id="at-pelle" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#d8a07a"/><stop offset="1" stop-color="#b47a56"/>
  </linearGradient>
  <linearGradient id="at-bronzo" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#f2c47a"/><stop offset=".5" stop-color="#c88a3a"/><stop offset="1" stop-color="#7a4a1a"/>
  </linearGradient>

  <!-- ===== IPPOCRATE DI CHIO: chitone corto, mantello verde, berretto da marinaio, tavoletta di cera ===== -->
  <symbol id="ippocrate" viewBox="-110 -600 230 615" overflow="visible">
    <ellipse cx="0" cy="0" rx="72" ry="11" fill="#000" opacity=".35"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <path d="M-38 -2 Q-44 -14 -24 -14 H-6 V2 Z M8 2 V-14 H26 Q42 -14 48 -4 Q42 2 8 2 Z" fill="#6a3a1a"/>
      <path d="M-22 -150 L-24 -16 M22 -150 L24 -16" stroke="#1d1428" stroke-width="24"/>
      <path d="M-22 -150 L-24 -16 M22 -150 L24 -16" stroke="url(#at-pelle)" stroke-width="18"/>
      <path d="M-30 -16 L-18 -50 M18 -16 L24 -50" stroke="#5a3418" stroke-width="3"/>
      <!-- chitone corto al ginocchio -->
      <path d="M-50 -440 C-62 -340 -66 -240 -60 -140 Q0 -126 62 -140 C66 -240 62 -340 52 -440 Q0 -454 -50 -440 Z" fill="url(#at-chitone)"/>
      <path d="M-28 -420 L-34 -144 M2 -430 L2 -132 M30 -420 L36 -144" stroke="#a8a08a" stroke-width="2" fill="none"/>
      <path d="M-48 -290 Q0 -278 50 -290" fill="none" stroke="#7a5a2a" stroke-width="7"/>
      <!-- mantello verde arrotolato sulla spalla -->
      <path d="M-56 -444 C-20 -452 40 -420 58 -380 C66 -350 60 -320 46 -310 C40 -340 20 -380 -10 -400 C-30 -410 -50 -420 -56 -444 Z" fill="url(#at-mantello)"/>
      <path d="M-30 -436 C0 -430 30 -406 46 -370" fill="none" stroke="#1a3a2a" stroke-width="2.5"/>
      <!-- braccio sinistro con la tavoletta di cera -->
      <path d="M-50 -432 C-82 -390 -90 -340 -76 -300" fill="none" stroke="#1d1428" stroke-width="30"/>
      <path d="M-50 -432 C-82 -390 -90 -340 -76 -300" fill="none" stroke="url(#at-pelle)" stroke-width="24"/>
      <path d="M-76 -300 C-62 -292 -40 -296 -24 -306" fill="none" stroke="#1d1428" stroke-width="26"/>
      <path d="M-76 -300 C-62 -292 -40 -296 -24 -306" fill="none" stroke="url(#at-pelle)" stroke-width="20"/>
      <rect x="-74" y="-370" width="70" height="56" rx="4" fill="#8a5a2a" transform="rotate(-8 -40 -342)"/>
      <rect x="-68" y="-364" width="58" height="44" rx="2" fill="#3a2a1a" transform="rotate(-8 -40 -342)"/>
      <path d="M-62 -330 A20 20 0 0 1 -22 -336 A26 26 0 0 0 -62 -330 Z" fill="none" stroke="#f3c45a" stroke-width="2" transform="rotate(-8 -40 -342)"/>
      <!-- braccio destro che indica con il dito -->
      <path d="M48 -430 C80 -410 100 -380 110 -350" fill="none" stroke="#1d1428" stroke-width="28"/>
      <path d="M48 -430 C80 -410 100 -380 110 -350" fill="none" stroke="url(#at-pelle)" stroke-width="22"/>
      <ellipse cx="112" cy="-340" rx="11" ry="12" fill="url(#at-pelle)"/>
      <path d="M118 -348 L134 -364" stroke="#1d1428" stroke-width="8"/><path d="M118 -348 L134 -364" stroke="url(#at-pelle)" stroke-width="5"/>
      <!-- testa: barba corta castana, naso un po' storto, berretto conico da marinaio -->
      <path d="M-10 -470 L-12 -444 L14 -444 L12 -470 Z" fill="url(#at-pelle)"/>
      <path d="M-26 -524 C-28 -490 -18 -470 2 -466 C22 -462 34 -474 38 -494 C42 -512 40 -532 32 -546 C18 -562 -18 -560 -26 -524 Z" fill="url(#at-pelle)"/>
      <path d="M-24 -500 C-26 -472 -10 -456 8 -454 C26 -454 38 -470 38 -496 C30 -484 22 -480 14 -482 C6 -484 -6 -484 -12 -480 C-18 -486 -22 -492 -24 -500 Z" fill="#6a4a2a"/>
      <path d="M8 -484 Q18 -478 28 -484" fill="none" stroke="#6a2a26" stroke-width="3"/>
      <path d="M22 -510 Q32 -498 26 -490" fill="none" stroke="#8a5a3a" stroke-width="3"/>
      <circle cx="6" cy="-514" r="2.8" fill="#1d1428" stroke="none"/><circle cx="28" cy="-513" r="2.6" fill="#1d1428" stroke="none"/>
      <path d="M-6 -528 Q4 -534 16 -528 M20 -528 Q28 -534 38 -528" fill="none" stroke="#5a3a1a" stroke-width="4"/>
      <path d="M-28 -530 C-32 -560 -10 -572 10 -572 C30 -572 44 -560 40 -530 C34 -546 22 -552 10 -552 C-6 -552 -20 -546 -28 -530 Z" fill="#6a4a2a"/>
      <path d="M-30 -548 C-24 -600 30 -612 42 -548 Q8 -560 -30 -548 Z" fill="#c8a060"/>
      <path d="M-30 -548 Q8 -560 42 -548" fill="none" stroke="#8a6a3a" stroke-width="4"/>
    </g>
  </symbol>
`);

Grafica.sfondo("atene", `
  <!-- ===== CIELO E COLLINE ===== -->
  <rect width="1600" height="900" fill="url(#at-cielo)"/>
  <g fill="#fff" opacity=".8"><ellipse cx="420" cy="110" rx="80" ry="18"/><ellipse cx="470" cy="96" rx="50" ry="18"/><ellipse cx="1180" cy="140" rx="70" ry="14"/></g>
  <path d="M0 420 Q160 330 340 370 Q520 300 700 360 Q900 290 1080 350 Q1300 300 1600 360 V520 H0 Z" fill="url(#at-colline)" stroke="#5a7040" stroke-width="2"/>
  <g fill="#5a7a4a" opacity=".7"><circle cx="180" cy="380" r="10"/><circle cx="220" cy="386" r="8"/><circle cx="560" cy="352" r="9"/><circle cx="980" cy="340" r="10"/><circle cx="1320" cy="330" r="9"/><circle cx="1360" cy="336" r="8"/></g>
  <!-- case lontane sulle colline -->
  <g fill="#f0e6d0" stroke="#8a7a5a" stroke-width="1.5">
    <rect x="620" y="352" width="34" height="26"/><rect x="660" y="346" width="26" height="32"/><rect x="900" y="330" width="36" height="28"/><rect x="940" y="338" width="28" height="22"/>
  </g>
  <g fill="#c8603a" stroke="#7a3a1a" stroke-width="1.5"><path d="M616 352 l21 -10 l21 10 Z M896 330 l22 -10 l22 10 Z"/></g>

  <!-- ===== IL PORTICO (STOÀ) DA SINISTRA A DESTRA ===== -->
  <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <rect x="0" y="150" width="1600" height="54" fill="url(#at-muro)"/>
    <path d="M-10 150 L800 96 L1610 150 Z" fill="url(#at-tetto)"/>
    <rect x="0" y="196" width="1600" height="14" fill="#c8b490"/>
  </g>
  <g fill="#c8603a" stroke="#1d1428" stroke-width="2.5">
    <path d="M60 204 h40 v14 h-40 Z M260 204 h40 v14 h-40 Z M460 204 h40 v14 h-40 Z M660 204 h40 v14 h-40 Z M860 204 h40 v14 h-40 Z M1060 204 h40 v14 h-40 Z M1260 204 h40 v14 h-40 Z M1460 204 h40 v14 h-40 Z"/>
  </g>
  <!-- il muro di fondo del portico con le pitture -->
  <rect x="0" y="218" width="1600" height="400" fill="#e2d4b4" opacity=".55"/>
  <!-- colonne -->
  <g stroke="#1d1428" stroke-width="3.5">
    <rect x="240" y="210" width="50" height="420" fill="url(#at-marmo)"/><rect x="228" y="206" width="74" height="18" fill="#fffaf0"/><rect x="232" y="620" width="66" height="16" fill="#e8dcc8"/>
    <rect x="590" y="210" width="50" height="420" fill="url(#at-marmo)"/><rect x="578" y="206" width="74" height="18" fill="#fffaf0"/><rect x="582" y="620" width="66" height="16" fill="#e8dcc8"/>
    <rect x="960" y="210" width="50" height="420" fill="url(#at-marmo)"/><rect x="948" y="206" width="74" height="18" fill="#fffaf0"/><rect x="952" y="620" width="66" height="16" fill="#e8dcc8"/>
    <rect x="1330" y="210" width="50" height="420" fill="url(#at-marmo)"/><rect x="1318" y="206" width="74" height="18" fill="#fffaf0"/><rect x="1322" y="620" width="66" height="16" fill="#e8dcc8"/>
  </g>
  <g stroke="#c8beac" stroke-width="2"><path d="M252 226 V620 M266 226 V620 M278 226 V620 M602 226 V620 M616 226 V620 M628 226 V620 M972 226 V620 M986 226 V620 M998 226 V620 M1342 226 V620 M1356 226 V620 M1368 226 V620"/></g>

  <!-- ===== LA BANCARELLA DEI VASI (sotto il portico, tra le colonne) ===== -->
  <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round">
    <rect x="660" y="520" width="270" height="20" fill="#a8703a"/>
    <path d="M670 540 V630 M920 540 V630" stroke-width="8"/><path d="M670 540 V630 M920 540 V630" stroke="#7a4a24" stroke-width="4"/>
    <path d="M690 520 C680 490 690 460 710 450 L706 436 H730 L726 450 C746 460 756 490 744 520 Z" fill="#d8783a"/>
    <path d="M770 520 C760 500 766 480 784 474 V462 H804 V474 C822 480 828 500 818 520 Z" fill="#1d1a1a"/>
    <path d="M850 520 C836 480 846 440 868 430 L864 412 H894 L890 430 C912 440 922 480 908 520 Z" fill="#d8783a"/>
  </g>
  <g stroke="#1d1428" stroke-width="2.5" fill="none"><path d="M694 486 H740 M774 500 H814 M850 470 H906 M852 490 H904"/></g>
  <path d="M780 496 q14 -14 28 0" fill="none" stroke="#d8783a" stroke-width="3"/>
  <path d="M858 452 l10 -8 l10 8 l10 -8 l10 8" fill="none" stroke="#1d1a1a" stroke-width="3"/>

  <!-- ===== ULIVO A DESTRA ===== -->
  <path d="M1480 640 C1470 560 1500 520 1480 450 C1510 500 1520 560 1510 640 Z" fill="#6a5a44" stroke="#1d1428" stroke-width="3"/>
  <g fill="#8aa87a" stroke="#4a6a3a" stroke-width="2.5"><ellipse cx="1450" cy="440" rx="70" ry="38"/><ellipse cx="1530" cy="420" rx="76" ry="40"/><ellipse cx="1490" cy="390" rx="60" ry="32"/></g>
  <g fill="#3a4a2a"><circle cx="1440" cy="450" r="5"/><circle cx="1520" cy="430" r="5"/><circle cx="1560" cy="440" r="5"/></g>

  <!-- ===== TERRENO DELL'AGORÀ ===== -->
  <rect y="630" width="1600" height="270" fill="url(#at-terra)"/>
  <path d="M0 630 H1600" stroke="#8a7a5a" stroke-width="4"/>
  <g fill="#c4ae86" opacity=".7"><ellipse cx="400" cy="720" rx="160" ry="10"/><ellipse cx="1100" cy="800" rx="200" ry="12"/><ellipse cx="700" cy="860" rx="140" ry="10"/></g>
  <g fill="#a89070" stroke="#6a5a3a" stroke-width="2"><ellipse cx="900" cy="700" rx="16" ry="7"/><ellipse cx="1500" cy="820" rx="20" ry="8"/><ellipse cx="300" cy="860" rx="18" ry="7"/></g>

  <!-- ===== IL TAVOLO DI IPPOCRATE CON LE TAVOLETTE DI CERA ===== -->
  <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <path d="M330 680 V760 M560 680 V760" stroke-width="10"/><path d="M330 680 V760 M560 680 V760" stroke="#7a4a24" stroke-width="6"/>
    <path d="M300 666 H590 V686 H300 Z" fill="#a8703a"/>
  </g>
  <g stroke="#1d1428" stroke-width="2.5">
    <rect x="320" y="630" width="80" height="40" rx="3" fill="#8a5a2a"/><rect x="326" y="636" width="68" height="28" fill="#3a2a1a"/>
    <rect x="420" y="634" width="76" height="36" rx="3" fill="#8a5a2a"/><rect x="426" y="640" width="64" height="24" fill="#3a2a1a"/>
  </g>
  <g fill="none" stroke="#f3c45a" stroke-width="2"><path d="M336 658 A16 16 0 0 1 368 658 A22 22 0 0 0 336 658 Z M372 660 l10 -14 l10 14 Z"/><path d="M434 656 A14 14 0 0 1 462 656 A18 18 0 0 0 434 656 Z M468 658 h16"/></g>
  <path d="M510 640 L560 676" stroke="#c8c0b0" stroke-width="5"/><path d="M510 640 L520 646" stroke="#1d1428" stroke-width="5"/>
`);
