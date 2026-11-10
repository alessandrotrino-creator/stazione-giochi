/* Gioco di Matematica · terze · Capitolo 2: ALESSANDRIA D'EGITTO, III SECOLO. Il porto delle anfore.
   Di Diofanto non esistono ritratti: è disegnato con abiti greci del periodo (chitone e mantello), senza caricature.
   Niente templi né elementi religiosi: sullo sfondo il Faro sull'isola, navi a vela, case e un porticato.
   Tre piani: il mare con il Faro e le navi lontane; la gru di legno, la barca del grano e il banco del fornaio;
   in primo piano il molo di pietra, la farina rovesciata e la catasta delle tre anfore sigillate.
   Il setaccio, le impronte, le ditate, la manovella e la barca sono "elementi". */
Grafica.definizioni(`
  <linearGradient id="al-cielo" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#3a8ac8"/><stop offset=".6" stop-color="#9ad0ea"/><stop offset="1" stop-color="#f4e6c0"/>
  </linearGradient>
  <linearGradient id="al-mare" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#5ab0c8"/><stop offset=".5" stop-color="#2a7a9a"/><stop offset="1" stop-color="#1a4a6a"/>
  </linearGradient>
  <linearGradient id="al-pietra" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#e8d8b0"/><stop offset="1" stop-color="#c8b088"/>
  </linearGradient>
  <linearGradient id="al-legno" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#5a3418"/><stop offset=".5" stop-color="#8a5a30"/><stop offset="1" stop-color="#5a3418"/>
  </linearGradient>
  <linearGradient id="al-legno-v" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#9a6a3a"/><stop offset="1" stop-color="#5a3418"/>
  </linearGradient>
  <linearGradient id="al-terracotta" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#8a3a1e"/><stop offset=".4" stop-color="#d8784a"/><stop offset=".7" stop-color="#c0603a"/><stop offset="1" stop-color="#7a321a"/>
  </linearGradient>
  <linearGradient id="al-chitone" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#c8c0a8"/><stop offset=".55" stop-color="#f2ecd8"/><stop offset="1" stop-color="#e2dac2"/>
  </linearGradient>
  <linearGradient id="al-mantello" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#1a3a6a"/><stop offset=".55" stop-color="#2e5a9a"/><stop offset="1" stop-color="#3a6aa8"/>
  </linearGradient>
  <linearGradient id="al-pelle" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#9a6a44"/><stop offset=".55" stop-color="#c8946a"/><stop offset="1" stop-color="#d8a87e"/>
  </linearGradient>
  <linearGradient id="al-tenda" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#e8e0c8"/><stop offset=".125" stop-color="#e8e0c8"/><stop offset=".125" stop-color="#c8402f"/><stop offset=".25" stop-color="#c8402f"/>
    <stop offset=".25" stop-color="#e8e0c8"/><stop offset=".375" stop-color="#e8e0c8"/><stop offset=".375" stop-color="#c8402f"/><stop offset=".5" stop-color="#c8402f"/>
    <stop offset=".5" stop-color="#e8e0c8"/><stop offset=".625" stop-color="#e8e0c8"/><stop offset=".625" stop-color="#c8402f"/><stop offset=".75" stop-color="#c8402f"/>
    <stop offset=".75" stop-color="#e8e0c8"/><stop offset=".875" stop-color="#e8e0c8"/><stop offset=".875" stop-color="#c8402f"/><stop offset="1" stop-color="#c8402f"/>
  </linearGradient>
  <radialGradient id="al-sole" cx="50%" cy="50%" r="50%">
    <stop offset="0" stop-color="#fff8d8" stop-opacity=".9"/><stop offset=".4" stop-color="#fff0b0" stop-opacity=".35"/><stop offset="1" stop-color="#fff0b0" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="al-fuoco" cx="50%" cy="50%" r="50%">
    <stop offset="0" stop-color="#ffe070" stop-opacity=".9"/><stop offset="1" stop-color="#ff9a30" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="al-vignetta" cx="50%" cy="45%" r="75%">
    <stop offset=".65" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#0a1a2a" stop-opacity=".45"/>
  </radialGradient>

  <!-- ===== l'anfora (per la catasta, la barca e i pannelli): piedi in basso al centro ===== -->
  <symbol id="al-anfora" viewBox="0 0 60 120">
    <ellipse cx="30" cy="116" rx="18" ry="4" fill="#000" opacity=".3"/>
    <g stroke="#1d1428" stroke-width="2.5" stroke-linejoin="round">
      <path d="M22 8 H38 L36 22 Q56 34 54 64 Q52 92 34 108 L30 116 L26 108 Q8 92 6 64 Q4 34 24 22 Z" fill="url(#al-terracotta)"/>
      <path d="M24 22 Q12 22 12 36 M36 22 Q48 22 48 36" fill="none" stroke-width="4"/>
      <path d="M8 56 Q30 64 52 56" fill="none" stroke="#5a2410" stroke-width="2"/>
      <ellipse cx="30" cy="8" rx="9" ry="3" fill="#3a2010"/>
      <path d="M16 40 Q14 60 20 80" fill="none" stroke="#f0a070" stroke-width="3" opacity=".6"/>
    </g>
  </symbol>

  <!-- ===== DIOFANTO (tre quarti; piedi in 0,0): chitone chiaro, mantello blu sulla spalla, tavoletta di cera ===== -->
  <symbol id="diofanto" viewBox="-110 -600 230 615" overflow="visible">
    <ellipse cx="0" cy="0" rx="68" ry="11" fill="#000" opacity=".4"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <!-- sandali e caviglie -->
      <path d="M-34 -60 L-32 -14 L-12 -14 L-12 -60 Z M10 -60 L12 -14 L32 -14 L32 -60 Z" fill="url(#al-pelle)"/>
      <path d="M-42 -2 Q-44 -14 -30 -14 L-10 -14 L-10 2 Z M10 2 L10 -14 L32 -14 Q46 -14 48 -2 Z" fill="#7a4a26"/>
      <path d="M-32 -30 L-12 -40 M-32 -44 L-12 -30 M12 -30 L32 -40 M12 -44 L32 -30" stroke="#5a3418" stroke-width="3"/>
      <!-- chitone lungo fino al polpaccio -->
      <path d="M-44 -442 C-56 -340 -62 -200 -66 -58 Q0 -46 66 -58 C62 -200 56 -340 46 -442 Q0 -456 -44 -442 Z" fill="url(#al-chitone)"/>
      <path d="M-20 -420 Q-24 -260 -30 -60 M16 -420 Q20 -260 26 -60" fill="none" stroke="#b8b098" stroke-width="2.5"/>
      <path d="M-50 -280 Q0 -270 50 -280" fill="none" stroke="#8a6a3a" stroke-width="6"/>
      <!-- mantello blu: sulla spalla sinistra e giù fino al ginocchio, in diagonale -->
      <path d="M-50 -444 C-70 -380 -80 -260 -76 -150 Q-30 -130 30 -170 C10 -260 -4 -340 30 -440 Q0 -460 -50 -444 Z" fill="url(#al-mantello)"/>
      <path d="M-60 -380 Q-40 -300 -52 -180 M-30 -420 Q-20 -320 -10 -200" fill="none" stroke="#123060" stroke-width="2.5"/>
      <path d="M-76 -150 Q-30 -130 30 -170" fill="none" stroke="#e8c26a" stroke-width="4"/>
      <!-- braccio destro con lo stilo -->
      <path d="M44 -436 C70 -410 84 -380 86 -346" fill="none" stroke="#1d1428" stroke-width="29"/>
      <path d="M44 -436 C70 -410 84 -380 86 -346" fill="none" stroke="#e8e0c8" stroke-width="23"/>
      <ellipse cx="86" cy="-338" rx="11" ry="12" fill="url(#al-pelle)"/>
      <path d="M80 -352 L104 -404" stroke="#3a2a1a" stroke-width="4"/>
      <!-- braccio sinistro (sotto il mantello) con la tavoletta di cera -->
      <path d="M-46 -430 C-70 -400 -78 -360 -64 -320 L-20 -312" fill="none" stroke="#1d1428" stroke-width="29"/>
      <path d="M-46 -430 C-70 -400 -78 -360 -64 -320 L-20 -312" fill="none" stroke="#2e5a9a" stroke-width="23"/>
      <g transform="rotate(-8 -24 -334)">
        <rect x="-64" y="-366" width="74" height="54" rx="4" fill="#8a5a30"/>
        <rect x="-58" y="-360" width="62" height="42" rx="2" fill="#3a3a30"/>
        <path d="M-52 -350 q6 -6 10 0 t10 0 M-52 -336 h20 M-26 -336 q4 -6 8 0" fill="none" stroke="#e8d8a0" stroke-width="2"/>
      </g>
      <ellipse cx="-20" cy="-312" rx="11" ry="9" fill="url(#al-pelle)"/>
      <!-- collo e testa -->
      <path d="M-8 -470 L-10 -444 L14 -444 L12 -470 Z" fill="url(#al-pelle)"/>
      <path d="M-26 -524 C-28 -492 -20 -472 2 -466 C20 -462 32 -474 36 -492 C40 -508 38 -528 32 -542 C20 -558 -18 -558 -26 -524 Z" fill="url(#al-pelle)"/>
      <path d="M-24 -508 Q-34 -512 -32 -498 Q-30 -488 -22 -492" fill="#b88058"/>
      <!-- capelli corti e ricci, un po' grigi; barba riccia -->
      <path d="M-30 -516 C-40 -550 -20 -574 6 -572 C32 -572 46 -556 40 -528 C34 -546 18 -552 4 -550 C-10 -548 -22 -540 -30 -516 Z" fill="#6a6058"/>
      <g fill="#6a6058"><circle cx="-26" cy="-544" r="9"/><circle cx="-12" cy="-562" r="9"/><circle cx="6" cy="-568" r="9"/><circle cx="24" cy="-562" r="9"/><circle cx="38" cy="-546" r="8"/></g>
      <path d="M-24 -506 C-26 -474 -10 -446 10 -442 C30 -442 40 -466 40 -498 C34 -484 26 -478 18 -480 C10 -484 -4 -484 -10 -480 C-16 -486 -20 -496 -24 -506 Z" fill="#7a7068"/>
      <g fill="none" stroke="#5a5048" stroke-width="2"><path d="M-6 -470 q4 6 0 12 M8 -462 q4 6 0 12 M22 -468 q4 6 0 12"/></g>
      <!-- bocca, naso, baffi -->
      <path d="M8 -486 Q18 -480 28 -486" fill="none" stroke="#6a2a26" stroke-width="3"/>
      <path d="M24 -508 Q31 -496 25 -492" fill="none" stroke="#8a5a3a" stroke-width="3"/>
      <path d="M6 -490 Q16 -496 22 -492 Q30 -496 38 -490" fill="none" stroke="#5a5048" stroke-width="4"/>
      <!-- occhi attenti, sopracciglia folte -->
      <path d="M-4 -516 Q6 -522 16 -516" fill="none" stroke-width="3"/>
      <path d="M21 -515 Q28 -521 35 -515" fill="none" stroke-width="3"/>
      <circle cx="6" cy="-514" r="2.6" fill="#1d1428" stroke="none"/><circle cx="28" cy="-513" r="2.4" fill="#1d1428" stroke="none"/>
      <path d="M-8 -530 Q4 -538 16 -530 M20 -529 Q28 -535 38 -528" fill="none" stroke="#4a4038" stroke-width="4"/>
    </g>
  </symbol>

  <!-- icone degli oggetti (140 × 140) -->
  <symbol id="ogg-setaccio" viewBox="0 0 140 140">
    <ellipse cx="70" cy="118" rx="50" ry="7" fill="#000" opacity=".25"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round">
      <ellipse cx="70" cy="74" rx="52" ry="22" fill="#c89a5a"/>
      <ellipse cx="70" cy="70" rx="44" ry="17" fill="#e8d0a0"/>
      <g stroke="#a8885a" stroke-width="1.5"><path d="M32 70 H108 M38 62 H102 M38 78 H102 M50 56 V84 M62 54 V86 M74 54 V86 M86 56 V84 M98 60 V80"/></g>
      <path d="M18 74 Q18 96 70 98 Q122 96 122 74" fill="none"/>
    </g>
  </symbol>
  <symbol id="ogg-setaccio-pieno" viewBox="0 0 140 140">
    <use href="#ogg-setaccio"/>
    <path d="M34 68 Q50 50 70 54 Q92 48 106 68 Q70 82 34 68 Z" fill="#fbf8f0" stroke="#d8d0c0" stroke-width="2"/>
    <g fill="#fbf8f0"><circle cx="56" cy="108" r="2.5"/><circle cx="72" cy="112" r="2"/><circle cx="88" cy="106" r="2.5"/></g>
  </symbol>
  <symbol id="ogg-manovella" viewBox="0 0 140 140">
    <ellipse cx="70" cy="118" rx="44" ry="6" fill="#000" opacity=".25"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <path d="M30 96 L88 52" stroke-width="14"/><path d="M30 96 L88 52" stroke="#8a5a30" stroke-width="8"/>
      <rect x="22" y="86" width="22" height="22" rx="4" fill="#5a3a20" transform="rotate(-37 33 97)"/>
      <path d="M88 52 L104 72" stroke-width="12"/><path d="M88 52 L104 72" stroke="#8a5a30" stroke-width="6"/>
      <rect x="98" y="64" width="16" height="34" rx="7" fill="#c89a5a"/>
    </g>
  </symbol>
  <symbol id="ogg-tavoletta" viewBox="0 0 140 140">
    <ellipse cx="70" cy="120" rx="48" ry="6" fill="#000" opacity=".25"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round" transform="rotate(-6 70 70)">
      <rect x="22" y="30" width="96" height="78" rx="6" fill="#8a5a30"/>
      <rect x="30" y="38" width="80" height="62" rx="3" fill="#3a3a30"/>
      <path d="M58 54 Q76 50 76 62 Q76 70 64 72 Q56 74 58 84 Q60 92 72 90" fill="none" stroke="#f3d27a" stroke-width="5"/>
    </g>
  </symbol>
`);

Grafica.sfondo("alessandria", `
  <!-- ===== CIELO, SOLE, MARE ===== -->
  <rect width="1600" height="900" fill="url(#al-cielo)"/>
  <circle cx="380" cy="150" r="170" fill="url(#al-sole)"/>
  <circle cx="380" cy="150" r="40" fill="#fffbe8"/>
  <g fill="#fff" opacity=".8"><ellipse cx="640" cy="120" rx="80" ry="16"/><ellipse cx="700" cy="108" rx="50" ry="14"/><ellipse cx="1380" cy="90" rx="70" ry="14"/><ellipse cx="1430" cy="80" rx="40" ry="12"/></g>
  <rect y="392" width="1600" height="200" fill="url(#al-mare)"/>
  <g stroke="#e8f8ff" stroke-width="3" stroke-linecap="round" opacity=".7">
    <path d="M340 410 h40 M330 424 h70 M350 438 h30 M90 470 h30 M560 452 h40 M780 420 h26 M1420 446 h40 M1500 480 h30 M640 500 h34 M120 520 h50"/>
  </g>

  <!-- ===== L'ISOLA DEL FARO (lontano, a destra) ===== -->
  <g stroke="#3a4a5a" stroke-width="2.5" stroke-linejoin="round">
    <path d="M1080 404 Q1200 380 1340 404 Z" fill="#b8a888"/>
    <rect x="1170" y="250" width="70" height="150" fill="#e8e0cc"/>
    <path d="M1170 280 H1240 M1170 320 H1240 M1170 360 H1240" stroke="#b8b0a0"/>
    <g fill="#5a6a7a"><rect x="1190" y="290" width="8" height="14"/><rect x="1212" y="290" width="8" height="14"/><rect x="1200" y="334" width="8" height="14"/></g>
    <path d="M1178 250 L1186 196 H1224 L1232 250 Z" fill="#ded6c0"/>
    <rect x="1192" y="166" width="26" height="30" fill="#d6cdb4"/>
    <path d="M1188 166 Q1205 150 1222 166 Z" fill="#c8bea4"/>
    <rect x="1080" y="398" width="260" height="8" fill="#a89878"/>
  </g>
  <circle cx="1205" cy="178" r="34" fill="url(#al-fuoco)"/>
  <!-- navi a vela lontane -->
  <g stroke="#3a4a5a" stroke-width="2" stroke-linejoin="round">
    <path d="M820 420 Q850 432 884 420 L878 430 Q850 436 826 430 Z" fill="#6a4a2a"/>
    <path d="M852 420 V376" /><path d="M852 378 L878 382 L874 414 L852 412 Z" fill="#f2ead6"/>
    <path d="M960 440 Q980 448 1004 440 L1000 446 Q980 452 964 446 Z" fill="#6a4a2a"/>
    <path d="M982 440 V412" /><path d="M982 414 L998 418 L996 436 L982 436 Z" fill="#e8d8b0"/>
  </g>

  <!-- ===== LA CITTÀ SULLA RIVA (lontano, a sinistra): case e un lungo porticato ===== -->
  <g stroke="#6a5a4a" stroke-width="2" stroke-linejoin="round">
    <rect x="0" y="330" width="80" height="66" fill="#e8d8b8"/><rect x="70" y="310" width="60" height="86" fill="#dccaa8"/>
    <rect x="124" y="340" width="90" height="56" fill="#e8dcc0"/>
    <path d="M200 356 H560 V396 H200 Z" fill="#efe4c8"/>
    <path d="M196 356 L380 334 L564 356 Z" fill="#d8c8a0"/>
    <g fill="#d8cbb0"><rect x="214" y="362" width="8" height="34"/><rect x="244" y="362" width="8" height="34"/><rect x="274" y="362" width="8" height="34"/><rect x="304" y="362" width="8" height="34"/><rect x="334" y="362" width="8" height="34"/><rect x="364" y="362" width="8" height="34"/><rect x="394" y="362" width="8" height="34"/><rect x="424" y="362" width="8" height="34"/><rect x="454" y="362" width="8" height="34"/><rect x="484" y="362" width="8" height="34"/><rect x="514" y="362" width="8" height="34"/><rect x="544" y="362" width="8" height="34"/></g>
  </g>
  <g fill="#4a6a3a" stroke="#2a3a20" stroke-width="2">
    <path d="M590 396 Q596 360 588 330" fill="none" stroke="#5a4a2a" stroke-width="4"/>
    <path d="M588 330 q-26 -6 -40 8 q22 -2 40 -8 q-10 -22 -34 -24 q18 10 34 24 q6 -24 26 -30 q-18 16 -26 30 q20 -10 40 2 q-22 -4 -40 -2 Z"/>
  </g>

  <!-- ===== IL BORDO DEL MOLO E L'ACQUA CHE SBATTE ===== -->
  <rect y="588" width="1600" height="312" fill="url(#al-pietra)"/>
  <g id="al-lastre"></g>
  <path d="M0 576 H1600 V600 H0 Z" fill="#b8a07a" stroke="#1d1428" stroke-width="3"/>
  <path d="M0 576 H1600" stroke="#f8f0d8" stroke-width="3"/>
  <g stroke="#e8f8ff" stroke-width="3" stroke-linecap="round" opacity=".8"><path d="M40 572 q10 -6 20 0 t20 0 M300 572 q10 -6 20 0 t20 0 M620 572 q10 -6 20 0 t20 0 M1400 572 q10 -6 20 0 t20 0"/></g>

  <!-- ===== IL BANCO DEL FORNAIO (sinistra) ===== -->
  <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <path d="M180 640 V420 M430 640 V420" stroke-width="10"/>
    <path d="M160 410 L450 410 L470 470 L140 470 Z" fill="url(#al-tenda)"/>
    <path d="M140 470 q20 18 41 0 q20 18 41 0 q20 18 41 0 q20 18 41 0 q20 18 41 0 q20 18 41 0 q20 18 41 0 q20 18 41 0" fill="url(#al-tenda)" stroke-width="3"/>
    <path d="M170 560 H440 V650 H170 Z" fill="url(#al-legno-v)"/>
    <path d="M160 548 H450 V566 H160 Z" fill="#8a5a30"/>
    <!-- pagnotte tonde con gli spicchi e ciambelle -->
    <g fill="#d8a050" stroke-width="2.5">
      <ellipse cx="210" cy="538" rx="26" ry="14"/><ellipse cx="262" cy="534" rx="28" ry="16"/><ellipse cx="236" cy="518" rx="24" ry="12"/>
      <ellipse cx="400" cy="538" rx="24" ry="13"/>
    </g>
    <g fill="none" stroke="#8a5a20" stroke-width="2"><path d="M196 532 L224 544 M248 528 L276 540 M224 512 L248 524 M262 520 V548 M388 534 L412 542"/></g>
    <g fill="#c88a40" stroke-width="2.5"><circle cx="350" cy="530" r="16"/><circle cx="350" cy="530" r="5" fill="#e8d8b0"/></g>
    <!-- due sacchi di farina dietro il banco -->
    <path d="M440 560 Q436 490 470 480 Q504 490 500 560 Z" fill="#e8dcc0"/>
    <path d="M458 482 Q470 470 482 482" fill="none" stroke-width="3"/>
  </g>
  <!-- ===== IL SACCO ROVESCIATO, LA FARINA E LE PRIME IMPRONTE ===== -->
  <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <path d="M440 650 Q420 610 460 596 L540 612 Q560 640 530 664 Z" fill="#e8dcc0"/>
    <path d="M520 606 Q556 600 560 624" fill="none" stroke-width="3"/>
  </g>
  <path d="M500 650 Q560 630 640 650 Q700 676 650 700 Q580 716 520 700 Q470 684 500 650 Z" fill="#fbf8f0" opacity=".95"/>
  <g fill="#c8bca0" opacity=".9">
    <ellipse cx="560" cy="668" rx="7" ry="11" transform="rotate(70 560 668)"/><circle cx="574" cy="676" r="3"/>
    <ellipse cx="600" cy="684" rx="7" ry="11" transform="rotate(70 600 684)"/><circle cx="614" cy="690" r="3"/>
    <ellipse cx="632" cy="670" rx="7" ry="11" transform="rotate(70 632 670)"/><circle cx="646" cy="676" r="3"/>
  </g>

  <!-- ===== LA GRU DI LEGNO (centro) ===== -->
  <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
    <path d="M720 640 L760 220 L800 640" fill="none" stroke-width="16"/>
    <path d="M720 640 L760 220 L800 640" fill="none" stroke="#8a5a30" stroke-width="10"/>
    <path d="M736 480 H784 M744 380 H776" stroke-width="8"/>
    <path d="M760 222 L1040 150" stroke-width="16"/><path d="M760 222 L1040 150" stroke="#9a6a3a" stroke-width="10"/>
    <path d="M760 300 L960 172" stroke-width="5"/>
    <circle cx="1040" cy="152" r="12" fill="#5a3418"/>
    <!-- il tamburo dell'argano, senza manovella -->
    <rect x="726" y="540" width="68" height="44" rx="8" fill="url(#al-legno)"/>
    <path d="M730 552 H790 M730 564 H790 M730 576 H790" stroke="#c8a870" stroke-width="2"/>
    <circle cx="760" cy="562" r="7" fill="#2a1a10"/>
    <!-- la corda dall'argano alla cima e giù fino al gancio con un'anfora appesa -->
    <path d="M760 548 L762 226 L1040 152 L1040 330" fill="none" stroke="#c8a870" stroke-width="3"/>
    <path d="M1040 330 Q1030 340 1040 350 Q1050 340 1040 330" fill="none" stroke="#3a3a3a" stroke-width="4"/>
  </g>
  <use href="#al-anfora" x="1010" y="340" width="60" height="120"/>
  <!-- la bitta con la cima della barca -->
  <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <path d="M880 660 L880 610 Q900 596 920 610 L920 660 Z" fill="#6a6a6a"/>
    <ellipse cx="900" cy="610" rx="22" ry="8" fill="#8a8a8a"/>
    <path d="M884 628 Q900 640 916 628 M884 640 Q900 652 916 640" fill="none" stroke="#c8a870" stroke-width="5"/>
    <path d="M916 634 Q960 600 980 548" fill="none" stroke="#c8a870" stroke-width="5"/>
  </g>
  <!-- un gabbiano sulla cima della gru -->
  <g stroke="#1d1428" stroke-width="2.5" stroke-linejoin="round">
    <path d="M1030 140 Q1040 120 1056 126 Q1066 132 1058 140 Z" fill="#f8f8f8"/>
    <path d="M1056 126 L1068 124 L1058 132 Z" fill="#f0b030"/>
    <circle cx="1052" cy="128" r="1.8" fill="#1d1428"/>
    <path d="M1034 132 L1018 128 L1030 140 Z" fill="#9aa8b8"/>
  </g>

  <!-- ===== LA CATASTA DELLE ANFORE (destra, primo piano) ===== -->
  <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <path d="M1290 760 L1590 760 L1600 790 L1280 790 Z" fill="#8a6a44"/>
    <path d="M1300 790 V820 M1580 790 V820" stroke-width="10"/>
  </g>
  <use href="#al-anfora" x="1300" y="560" width="100" height="200"/>
  <use href="#al-anfora" x="1390" y="550" width="100" height="210"/>
  <use href="#al-anfora" x="1480" y="560" width="100" height="200"/>
  <!-- sigilli di cera sui tappi -->
  <g fill="#b8302a" stroke="#1d1428" stroke-width="2"><circle cx="1350" cy="572" r="7"/><circle cx="1440" cy="562" r="7"/><circle cx="1530" cy="572" r="7"/></g>
  <!-- anfore sdraiate e una cesta di pesci -->
  <g transform="rotate(-80 1240 760)"><use href="#al-anfora" x="1210" y="700" width="50" height="100"/></g>
  <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round">
    <path d="M220 800 Q216 760 260 756 L330 756 Q372 760 368 800 Q300 816 220 800 Z" fill="#b8904a"/>
    <path d="M232 770 H356 M228 786 H360" stroke="#7a5a2a" stroke-width="2"/>
    <g fill="#9ab8c8"><path d="M250 756 q20 -14 40 0 l10 -8 v16 l-10 -8 q-20 14 -40 0 Z"/><path d="M300 754 q16 -12 34 0 l8 -6 v14 l-8 -8 q-18 12 -34 0 Z"/></g>
  </g>

  <!-- ===== LA PORTA DEL VAGONE DEL BINARIO 8, a sinistra ===== -->
  <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <rect x="-10" y="170" width="140" height="490" fill="#7a2228"/>
    <rect x="10" y="190" width="100" height="440" rx="6" fill="#4a2018"/>
    <circle cx="60" cy="290" r="34" fill="url(#t8-ottone)"/><circle cx="60" cy="290" r="24" fill="#ffd27a"/>
    <circle cx="96" cy="440" r="7" fill="url(#t8-ottone)"/>
    <path d="M-10 660 H150 L140 690 H-10 Z" fill="url(#t8-ottone-v)"/>
  </g>

  <rect width="1600" height="900" fill="url(#al-vignetta)"/>
`, function (svg) {
  /* le grandi lastre di pietra del molo, in prospettiva, con qualche crepa */
  var g = svg.querySelector("#al-lastre");
  if (!g) return;
  var vx = 800, vy = 260, alto = 596, basso = 900, out = "";
  function ax(xb, y) { return vx + (xb - vx) * (y - vy) / (basso - vy); }
  var righe = [0, 0.14, 0.32, 0.55, 0.82, 1.1];
  for (var i = 0; i < righe.length - 1; i++) {
    var y1 = alto + (basso - alto) * Math.min(1, righe[i]), y2 = Math.min(basso, alto + (basso - alto) * righe[i + 1]);
    for (var j = -14; j < 14; j++) {
      var b1 = vx + (j + (i % 2) * 0.5) * 150, b2 = b1 + 150;
      var tono = ["#e2d2a8", "#d8c49a", "#e8dab4", "#d2be92"][(i * 3 + j + 40) % 4];
      out += '<path d="M' + ax(b1, y1).toFixed(1) + " " + y1.toFixed(1) + " L" + ax(b2, y1).toFixed(1) + " " + y1.toFixed(1) + " L" + ax(b2, y2).toFixed(1) + " " + y2.toFixed(1) + " L" + ax(b1, y2).toFixed(1) + " " + y2.toFixed(1) +
        ' Z" fill="' + tono + '" stroke="#9a8460" stroke-width="2"/>';
      if ((i + j + 30) % 5 === 0) {
        var cx = ax((b1 + b2) / 2, (y1 + y2) / 2), cy = (y1 + y2) / 2;
        out += '<path d="M' + (cx - 20) + " " + (cy - 6) + " l14 6 l10 -4 l16 8" + '" fill="none" stroke="#a89068" stroke-width="2"/>';
      }
    }
  }
  out += '<rect y="' + alto + '" width="1600" height="26" fill="#000" opacity=".18"/>';
  g.innerHTML = out;
});
