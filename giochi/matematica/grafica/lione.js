/* Gioco di Matematica · terze · Capitolo 1: LIONE, ANNO 1484. La stanza di Nicolas Chuquet.
   Di Chuquet non esistono ritratti: veste lunga da medico-studioso del Quattrocento, berretto morbido, nessuna caricatura.
   Muri di pietra e travi, un grande camino con il paiolo, il tavolo con la candela spenta e il manoscritto,
   una finestra a vetri piombati e, nel pavimento, la BOTOLA aperta della cantina: dentro è buio pesto. */
Grafica.definizioni(`
  <linearGradient id="ly-pietra" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#5a5060"/><stop offset=".6" stop-color="#8a7a78"/><stop offset="1" stop-color="#6a5a58"/>
  </linearGradient>
  <linearGradient id="ly-legno" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#6a4224"/><stop offset="1" stop-color="#3e2414"/>
  </linearGradient>
  <radialGradient id="ly-fuoco" cx="50%" cy="80%" r="70%">
    <stop offset="0" stop-color="#fff2a0"/><stop offset=".45" stop-color="#ff9a2a"/><stop offset="1" stop-color="#c8301a" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="ly-buio" cx="50%" cy="30%" r="70%">
    <stop offset="0" stop-color="#000" stop-opacity=".95"/><stop offset="1" stop-color="#140c10"/>
  </radialGradient>
  <linearGradient id="ly-veste" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#4a1418"/><stop offset=".55" stop-color="#7a2228"/><stop offset="1" stop-color="#8a2e30"/>
  </linearGradient>
  <linearGradient id="ly-pelle" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#c8946a"/><stop offset=".55" stop-color="#ecc4a0"/><stop offset="1" stop-color="#f4d4b4"/>
  </linearGradient>

  <!-- ===== NICOLAS CHUQUET (tre quarti; piedi in 0,0) ===== -->
  <symbol id="chuquet" viewBox="-110 -600 230 615" overflow="visible">
    <ellipse cx="0" cy="0" rx="68" ry="11" fill="#000" opacity=".4"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <!-- veste lunga rossa scura con il bordo di pelliccia -->
      <path d="M-50 -440 C-62 -330 -70 -150 -76 -10 Q0 4 76 -10 C70 -150 62 -330 50 -440 Q0 -456 -50 -440 Z" fill="url(#ly-veste)"/>
      <path d="M-76 -10 Q0 4 76 -10 L76 -32 Q0 -18 -76 -32 Z" fill="#6a5a4a"/>
      <path d="M-14 -440 L-18 -30 M16 -440 L22 -30" stroke="#3a0a0e" stroke-width="3"/>
      <path d="M-56 -300 Q0 -290 56 -300" fill="none" stroke="#2a1a10" stroke-width="8"/>
      <path d="M-36 -2 Q-40 -14 -20 -14 L-4 -14 L-4 2 Z M8 2 L8 -14 L28 -14 Q44 -14 40 -2 Z" fill="#2a1a10"/>
      <!-- collo di pelliccia -->
      <path d="M-52 -446 Q0 -420 52 -446 Q48 -470 0 -472 Q-48 -470 -52 -446 Z" fill="#8a7a6a"/>
      <!-- braccio con il libro -->
      <path d="M-48 -430 C-66 -400 -70 -360 -60 -320" fill="none" stroke="#1d1428" stroke-width="27"/>
      <path d="M-48 -430 C-66 -400 -70 -360 -60 -320" fill="none" stroke="#7a2228" stroke-width="21"/>
      <rect x="-96" y="-360" width="60" height="78" rx="4" fill="#5a3a1e" transform="rotate(-8 -66 -320)"/>
      <rect x="-90" y="-354" width="48" height="66" rx="2" fill="#f0e2c0" transform="rotate(-8 -66 -320)"/>
      <ellipse cx="-56" cy="-316" rx="10" ry="11" fill="url(#ly-pelle)"/>
      <!-- braccio alzato che spiega, con la penna -->
      <path d="M48 -432 C76 -420 92 -392 90 -360" fill="none" stroke="#1d1428" stroke-width="27"/>
      <path d="M48 -432 C76 -420 92 -392 90 -360" fill="none" stroke="#7a2228" stroke-width="21"/>
      <ellipse cx="90" cy="-352" rx="10" ry="11" fill="url(#ly-pelle)"/>
      <path d="M92 -362 L112 -410" stroke="#f6f0e0" stroke-width="5"/>
      <!-- collo e testa -->
      <path d="M-8 -472 L-10 -446 L14 -446 L12 -472 Z" fill="url(#ly-pelle)"/>
      <path d="M-26 -524 C-28 -492 -20 -472 2 -466 C20 -462 32 -474 36 -492 C40 -508 38 -528 32 -542 C20 -558 -18 -558 -26 -524 Z" fill="url(#ly-pelle)"/>
      <path d="M-22 -508 Q-32 -512 -30 -498 Q-28 -488 -20 -492" fill="#d8a47a"/>
      <!-- capelli castani a caschetto e berretto morbido nero -->
      <path d="M-30 -496 C-38 -530 -24 -556 4 -558 C30 -558 42 -540 38 -510 C34 -530 20 -540 2 -540 C-14 -540 -24 -526 -30 -496 Z" fill="#5a3a20"/>
      <path d="M-36 -548 Q-30 -590 6 -592 Q44 -590 46 -548 Q6 -560 -36 -548 Z" fill="#1a1418"/>
      <path d="M-36 -548 Q6 -560 46 -548 L46 -540 Q6 -552 -36 -540 Z" fill="#3a3040"/>
      <!-- viso -->
      <path d="M-4 -510 Q6 -518 16 -510" fill="none" stroke-width="3"/>
      <path d="M21 -509 Q28 -516 35 -509" fill="none" stroke-width="3"/>
      <circle cx="6" cy="-509" r="2.6" fill="#1d1428" stroke="none"/><circle cx="28" cy="-508" r="2.4" fill="#1d1428" stroke="none"/>
      <path d="M-6 -524 Q4 -530 14 -524 M20 -523 Q28 -528 36 -522" fill="none" stroke="#5a3a20" stroke-width="3.5"/>
      <path d="M24 -502 Q30 -492 25 -488" fill="none" stroke="#a8704a" stroke-width="3"/>
      <path d="M10 -480 Q20 -474 30 -482" fill="none" stroke="#8a3a2a" stroke-width="3"/>
    </g>
  </symbol>

  <!-- ===== Madama Parolona travestita da cuoca: cuffia enorme, grembiule, cucchiaio di legno ===== -->
  <symbol id="parolona-cuoca" viewBox="-150 -720 300 735" overflow="visible">
    <use href="#parolona" x="-150" y="-700" width="300" height="715"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round">
      <path d="M-70 -460 Q0 -440 70 -460 L104 -20 Q0 0 -104 -20 Z" fill="#f6f0e0"/>
      <path d="M-60 -300 H60 M-80 -160 H80" stroke="#c8b8a0" stroke-width="3"/>
      <path d="M-30 -460 L-40 -520 M30 -460 L40 -520" stroke="#f6f0e0" stroke-width="10"/>
      <path d="M-74 -600 Q-90 -660 0 -668 Q90 -660 74 -600 Q0 -580 -74 -600 Z" fill="#fbfaf2"/>
      <path d="M-74 -600 Q0 -580 74 -600" fill="none" stroke="#c8b8a0" stroke-width="4"/>
      <path d="M110 -380 L60 -250" stroke="#8a5a32" stroke-width="10" stroke-linecap="round"/>
      <ellipse cx="114" cy="-392" rx="14" ry="20" fill="#a8703a" transform="rotate(20 114 -392)"/>
    </g>
  </symbol>

  <!-- icone (140 × 140) -->
  <symbol id="ogg-candela" viewBox="0 0 140 140">
    <ellipse cx="70" cy="126" rx="36" ry="6" fill="#000" opacity=".25"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round">
      <path d="M36 112 Q70 100 104 112 L98 122 Q70 130 42 122 Z" fill="url(#t8-ottone)"/>
      <rect x="58" y="40" width="24" height="72" rx="4" fill="#f6ecd0"/>
      <path d="M70 40 V28" stroke-width="3"/>
      <path d="M62 52 Q66 60 62 70" fill="none" stroke="#e8dcb0" stroke-width="3"/>
    </g>
  </symbol>
  <symbol id="ogg-candela-accesa" viewBox="0 0 140 140">
    <circle cx="70" cy="22" r="26" fill="#ffd27a" opacity=".35"/>
    <use href="#ogg-candela"/>
    <path d="M70 6 Q80 18 72 30 Q70 32 68 30 Q60 18 70 6 Z" fill="#ffcf3a" stroke="#c8601a" stroke-width="2"/>
    <path d="M70 14 Q74 22 70 28 Q66 22 70 14 Z" fill="#fff6c0"/>
  </symbol>
  <!-- vasetto di vetro con il tappo di sughero: vuoto, e poi con l'acqua della vasca indiana -->
  <symbol id="ogg-vasetto" viewBox="0 0 140 140">
    <ellipse cx="70" cy="124" rx="34" ry="6" fill="#000" opacity=".25"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round">
      <path d="M52 44 L88 44 L88 56 Q104 66 102 96 Q100 120 70 120 Q40 120 38 96 Q36 66 52 56 Z" fill="#dff4ff" fill-opacity=".55"/>
      <rect x="54" y="26" width="32" height="20" rx="4" fill="#b8865a"/>
      <path d="M48 70 Q46 86 50 100" fill="none" stroke="#fff" stroke-width="4"/>
    </g>
  </symbol>
  <symbol id="ogg-vasetto-acqua" viewBox="0 0 140 140">
    <use href="#ogg-vasetto"/>
    <path d="M40 84 Q70 78 100 84 Q100 118 70 118 Q40 118 40 84 Z" fill="#6ac0d8" opacity=".85"/>
    <path d="M52 92 Q60 88 66 92" fill="none" stroke="#fff" stroke-width="2.5"/>
  </symbol>
  <symbol id="ogg-manoscritto" viewBox="0 0 140 140">
    <ellipse cx="70" cy="122" rx="46" ry="6" fill="#000" opacity=".25"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round" transform="rotate(-6 70 70)">
      <rect x="26" y="30" width="88" height="80" rx="4" fill="#5a3a1e"/>
      <rect x="32" y="34" width="76" height="72" rx="2" fill="#f0e2c0"/>
      <path d="M40 48 H98 M40 60 H90 M40 72 H98 M40 84 H86 M40 96 H94" stroke="#7a2f8e" stroke-width="2.5"/>
      <path d="M70 34 V106" stroke-width="2"/>
    </g>
  </symbol>
`);

Grafica.sfondo("lione", `
  <!-- muro di pietra, travi del soffitto -->
  <rect width="1600" height="900" fill="url(#ly-pietra)"/>
  <g fill="none" stroke="#4a4050" stroke-width="3" opacity=".6">
    <path d="M0 200 H1600 M0 300 H1600 M0 400 H1600 M0 500 H1600 M0 600 H1600"/>
    <path d="M120 200 V300 M380 300 V400 M640 200 V300 M900 300 V400 M1160 200 V300 M1420 300 V400 M250 400 V500 M760 400 V500 M1300 400 V500 M500 500 V600 M1040 500 V600"/>
  </g>
  <rect width="1600" height="110" fill="#2a1a14"/>
  <g fill="url(#ly-legno)" stroke="#1d1428" stroke-width="4">
    <rect y="100" width="1600" height="30"/>
    <rect x="200" y="0" width="40" height="120"/><rect x="760" y="0" width="40" height="120"/><rect x="1320" y="0" width="40" height="120"/>
  </g>

  <!-- finestra a vetri piombati -->
  <g stroke="#1d1428" stroke-width="4">
    <path d="M1080 220 H1300 V470 H1080 Z" fill="#3a3a6a"/>
    <path d="M1080 220 H1300 V470 H1080 Z" fill="none" stroke="#2a1a14" stroke-width="12"/>
    <g fill="none" stroke="#5a5a6a" stroke-width="3">
      <path d="M1080 270 L1300 470 M1080 370 L1200 470 M1080 470 L1300 270 M1180 470 L1300 370 M1080 270 L1130 220 M1250 220 L1300 270 M1080 370 L1230 220 M1150 220 L1300 370"/>
    </g>
    <circle cx="1240" cy="280" r="18" fill="#fff4d0" stroke="none" opacity=".8"/>
    <path d="M1070 470 H1310 V490 H1070 Z" fill="#6a5a50"/>
  </g>

  <!-- il grande camino con il fuoco e il paiolo -->
  <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <path d="M120 200 H560 V260 H520 V650 H160 V260 H120 Z" fill="#7a6a68"/>
    <path d="M190 330 H490 V650 H190 Z" fill="#1a1010"/>
    <path d="M110 190 H570 V230 H110 Z" fill="#5a4a48"/>
    <ellipse cx="340" cy="610" rx="120" ry="70" fill="url(#ly-fuoco)" stroke="none"/>
    <path d="M260 640 Q300 560 330 640 Z M320 640 Q350 540 380 640 Z M360 640 Q400 570 420 640 Z" fill="#ff8a2a" stroke="#c8401a" stroke-width="2"/>
    <path d="M240 640 H440" stroke="#3a2a1a" stroke-width="12"/>
    <path d="M340 330 V470" stroke="#2a2a2a" stroke-width="5"/>
    <path d="M270 470 Q270 550 340 552 Q410 550 410 470 Z" fill="#2a2a32"/>
    <path d="M262 470 H418" stroke-width="6"/>
  </g>
  <circle cx="340" cy="600" r="200" fill="#ff9a3a" opacity=".1"/>

  <!-- scaffale del medico: libri, vasetti e un mazzo di erbe secche appeso -->
  <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <rect x="1370" y="200" width="200" height="450" fill="url(#ly-legno)"/>
    <path d="M1370 300 H1570 M1370 400 H1570 M1370 500 H1570" stroke-width="7"/>
    <g stroke-width="2.5">
      <rect x="1384" y="236" width="20" height="62" fill="#7a2228"/><rect x="1406" y="244" width="16" height="54" fill="#2a4a7a"/><rect x="1424" y="232" width="24" height="66" fill="#5a6a2a"/>
      <rect x="1450" y="250" width="18" height="48" fill="#8a6a2a"/><path d="M1476 298 L1500 246 L1516 252 L1494 298 Z" fill="#4a2a5a"/>
      <rect x="1384" y="340" width="90" height="56" rx="4" fill="#f0e2c0"/><path d="M1394 354 H1464 M1394 366 H1456 M1394 378 H1464" stroke="#8a6a3a"/>
      <path d="M1490 396 Q1486 360 1504 356 L1520 356 Q1538 360 1534 396 Z" fill="#c8a868"/><path d="M1496 356 H1528 V346 H1496 Z" fill="#8a5a32"/>
      <path d="M1388 496 Q1384 452 1404 448 L1424 448 Q1444 452 1440 496 Z" fill="#6aa0b8"/><path d="M1396 448 H1432 V438 H1396 Z" fill="#8a5a32"/>
      <path d="M1452 496 Q1448 462 1466 458 L1482 458 Q1500 462 1496 496 Z" fill="#b86a3a"/>
      <rect x="1384" y="540" width="170" height="20" fill="#7a2228"/><rect x="1390" y="560" width="160" height="20" fill="#2a4a7a"/><rect x="1380" y="580" width="176" height="20" fill="#5a6a2a"/>
    </g>
  </g>
  <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round">
    <path d="M1300 130 V176" stroke="#3a2a1a" stroke-width="3"/>
    <path d="M1300 176 Q1280 220 1288 250 Q1300 236 1300 214 Q1302 236 1314 250 Q1322 220 1300 176 Z" fill="#6a8a3a"/>
    <path d="M1292 186 Q1284 210 1290 232 M1308 186 Q1316 210 1310 232" fill="none" stroke="#4a6a2a" stroke-width="2"/>
    <path d="M1294 178 H1306" stroke="#c8402f" stroke-width="5"/>
  </g>
  <!-- pavimento di assi -->
  <path d="M0 650 H1600 V900 H0 Z" fill="#5a3a22"/>
  <g stroke="#3a2414" stroke-width="3" opacity=".8">
    <path d="M0 700 H1600 M0 770 H1600 M0 850 H1600"/>
    <path d="M300 650 L260 900 M700 650 L690 900 M1100 650 L1120 900 M1450 650 L1500 900"/>
  </g>
  <rect y="650" width="1600" height="20" fill="#000" opacity=".25"/>
  <!-- sgabello vicino al tavolo -->
  <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <ellipse cx="1010" cy="690" rx="44" ry="12" fill="#8a5a32"/>
    <path d="M980 696 L970 770 M1040 696 L1050 770 M1010 700 V772" stroke-width="7"/>
  </g>

  <!-- tavolo con calamaio (candela e manoscritto sono elementi) -->
  <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <path d="M620 560 L960 560 L980 590 L600 590 Z" fill="#8a5a32"/>
    <path d="M610 590 H970 V612 H610 Z" fill="#5a3a1e"/>
    <path d="M630 612 L620 760 M950 612 L960 760" stroke-width="12"/>
    <path d="M880 540 Q878 560 900 562 Q922 560 920 540 Z" fill="#1a2440"/>
    <path d="M900 540 L930 490" stroke="#f6f0e0" stroke-width="4"/>
  </g>

  <!-- la BOTOLA aperta nel pavimento: sotto, la scala che scende nel buio -->
  <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <path d="M1100 720 L1420 720 L1460 820 L1060 820 Z" fill="url(#ly-buio)"/>
    <g stroke="#3a2a20" stroke-width="5" opacity=".7"><path d="M1120 740 H1400 M1110 765 H1420 M1098 792 H1432"/></g>
    <path d="M1100 720 L1420 720 L1430 660 L1110 660 Z" fill="url(#ly-legno)"/>
    <path d="M1140 676 H1400 M1136 698 H1406" stroke="#2a1a10" stroke-width="2"/>
    <circle cx="1270" cy="690" r="8" fill="url(#t8-ottone)"/>
  </g>

  <!-- a sinistra la porta del vagone del Binario 8 -->
  <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <rect x="-10" y="300" width="110" height="420" fill="#7a2228"/>
    <rect x="6" y="320" width="76" height="380" rx="6" fill="#4a2018"/>
    <circle cx="44" cy="410" r="26" fill="url(#t8-ottone)"/><circle cx="44" cy="410" r="18" fill="#ffd27a"/>
    <path d="M-10 720 H110 L100 748 H-10 Z" fill="url(#t8-ottone-v)"/>
  </g>
`);
