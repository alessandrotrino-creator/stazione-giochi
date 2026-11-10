/* Gioco di Matematica · terze · Capitolo 2: TOURS, 1591. Lo studio di François Viète.
   Viète era avvocato: è disegnato con la toga nera e il colletto bianco a gorgiera dell'epoca, senza caricature.
   Niente chiese né elementi religiosi: dalla finestra si vedono i tetti di ardesia e il ponte sulla Loira.
   Tre piani: la finestra con la città; la libreria, il camino e la macchina del cifrario (inventata dal gioco);
   in primo piano il pavimento a scacchi, la scrivania con il candeliere e il tappeto.
   Il biglietto, lo specchietto, la pagina del diario e le luci della macchina sono "elementi". */
Grafica.definizioni(`
  <linearGradient id="to-muro" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#6a4a3a"/><stop offset="1" stop-color="#4a3226"/>
  </linearGradient>
  <linearGradient id="to-legno" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#8a5a34"/><stop offset="1" stop-color="#5a3820"/>
  </linearGradient>
  <linearGradient id="to-legno-v" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#5a3820"/><stop offset=".5" stop-color="#8a5a34"/><stop offset="1" stop-color="#5a3820"/>
  </linearGradient>
  <linearGradient id="to-cielo" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#8ab8e0"/><stop offset="1" stop-color="#f0dcb0"/>
  </linearGradient>
  <linearGradient id="to-ottone" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#f2d27a"/><stop offset=".5" stop-color="#c8962e"/><stop offset="1" stop-color="#8a6018"/>
  </linearGradient>
  <linearGradient id="to-toga" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#14121c"/><stop offset=".45" stop-color="#34303e"/><stop offset="1" stop-color="#14121c"/>
  </linearGradient>
  <linearGradient id="to-pelle" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#f2c8a4"/><stop offset="1" stop-color="#d8a07c"/>
  </linearGradient>
  <radialGradient id="to-luce" cx=".5" cy=".5" r=".5">
    <stop offset="0" stop-color="#ffe8a0" stop-opacity=".75"/><stop offset="1" stop-color="#ffe8a0" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="to-fuoco" cx=".5" cy=".7" r=".6">
    <stop offset="0" stop-color="#fff2a0"/><stop offset=".45" stop-color="#ff9a2a"/><stop offset="1" stop-color="#c83a10" stop-opacity="0"/>
  </radialGradient>
  <pattern id="to-scacchi" width="80" height="80" patternUnits="userSpaceOnUse">
    <rect width="80" height="80" fill="#c8b490"/><rect width="40" height="40" fill="#6a4a34"/><rect x="40" y="40" width="40" height="40" fill="#6a4a34"/>
  </pattern>

  <!-- FRANÇOIS VIÈTE: toga nera, gorgiera bianca, berretto nero, barba corta -->
  <symbol id="viete" viewBox="-110 -600 230 615" overflow="visible">
    <ellipse cx="0" cy="0" rx="70" ry="11" fill="#000" opacity=".4"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <!-- scarpe -->
      <path d="M-46 0 Q-48 -16 -30 -18 L-8 -18 L-8 2 Z M8 2 L8 -18 L30 -18 Q50 -16 50 0 Z" fill="#2a1a12"/>
      <!-- toga lunga fino alle caviglie -->
      <path d="M-46 -440 C-60 -330 -70 -190 -76 -16 Q0 -4 78 -16 C70 -190 62 -330 48 -440 Q0 -458 -46 -440 Z" fill="url(#to-toga)"/>
      <path d="M-6 -430 L-10 -20 M-30 -400 Q-40 -220 -48 -24 M24 -400 Q34 -220 44 -24" fill="none" stroke="#4a4458" stroke-width="2.5"/>
      <!-- bordo di pelliccia scura sul davanti -->
      <path d="M-20 -440 L-26 -20 M16 -440 L20 -20" fill="none" stroke="#5a4030" stroke-width="10"/>
      <!-- braccio destro con il foglio cifrato -->
      <path d="M44 -432 C72 -404 86 -370 84 -330" fill="none" stroke="#1d1428" stroke-width="31"/>
      <path d="M44 -432 C72 -404 86 -370 84 -330" fill="none" stroke="#2a2634" stroke-width="25"/>
      <path d="M74 -334 Q84 -320 96 -330" fill="#f2ead6" stroke-width="2.5"/>
      <ellipse cx="88" cy="-320" rx="11" ry="12" fill="url(#to-pelle)"/>
      <g transform="rotate(12 100 -300)">
        <rect x="80" y="-330" width="56" height="70" rx="3" fill="#f6ecd0"/>
        <path d="M88 -318 h38 M88 -306 h30 M88 -294 h40 M88 -282 h24 M88 -270 h34" stroke="#5a3a6a" stroke-width="2"/>
      </g>
      <!-- braccio sinistro, mano sul fianco -->
      <path d="M-44 -432 C-72 -400 -82 -360 -60 -320" fill="none" stroke="#1d1428" stroke-width="31"/>
      <path d="M-44 -432 C-72 -400 -82 -360 -60 -320" fill="none" stroke="#2a2634" stroke-width="25"/>
      <ellipse cx="-56" cy="-314" rx="11" ry="11" fill="url(#to-pelle)"/>
      <!-- collo e gorgiera -->
      <path d="M-9 -474 L-10 -446 L14 -446 L12 -474 Z" fill="url(#to-pelle)"/>
      <g fill="#fbf6ea">
        <ellipse cx="2" cy="-452" rx="46" ry="16"/>
      </g>
      <path d="M-40 -456 q6 8 12 0 q6 8 12 0 q6 8 12 0 q6 8 12 0 q6 8 12 0 q6 8 12 0" fill="none" stroke="#c8c0b0" stroke-width="2"/>
      <!-- testa -->
      <path d="M-24 -524 C-26 -494 -18 -474 2 -468 C20 -464 32 -476 36 -494 C40 -510 38 -530 32 -544 C20 -560 -16 -558 -24 -524 Z" fill="url(#to-pelle)"/>
      <path d="M-22 -510 Q-32 -514 -30 -500 Q-28 -490 -20 -494" fill="#c88a64"/>
      <!-- barba corta a punta e baffi, castano scuro -->
      <path d="M-18 -500 C-20 -476 -6 -452 12 -448 C30 -450 38 -472 38 -500 C32 -488 24 -484 16 -486 C8 -490 -4 -490 -10 -486 Z" fill="#4a3226"/>
      <path d="M6 -492 Q20 -500 34 -492" fill="none" stroke="#4a3226" stroke-width="5"/>
      <path d="M12 -484 Q22 -480 30 -484" fill="none" stroke="#7a2a26" stroke-width="2.5"/>
      <path d="M26 -512 Q33 -500 27 -496" fill="none" stroke="#a86a48" stroke-width="3"/>
      <!-- occhi e sopracciglia -->
      <ellipse cx="22" cy="-522" rx="3.5" ry="4.5" fill="#1d1428" stroke="none"/>
      <path d="M14 -534 Q22 -538 30 -533" fill="none" stroke="#3a2a1e" stroke-width="3"/>
      <!-- berretto nero morbido -->
      <path d="M-34 -534 C-38 -566 -10 -584 14 -582 C40 -580 50 -562 44 -536 Q6 -548 -34 -534 Z" fill="#1a1622"/>
      <path d="M-34 -534 Q6 -548 44 -536" fill="none" stroke="#3a3446" stroke-width="5"/>
    </g>
  </symbol>

  <!-- il biglietto scritto al contrario -->
  <symbol id="ogg-biglietto-rov" viewBox="0 0 140 140">
    <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
      <path d="M22 30 L118 22 L122 112 L26 120 Z" fill="#f4e8cc"/>
      <g fill="none" stroke="#7a2f8e" stroke-width="3" stroke-linecap="round">
        <path d="M98 42 q-8 -6 -14 2 q-4 6 -12 0 l-14 2 M100 58 l-30 2 q-6 -6 -12 2 M96 74 q-10 4 -18 -2 l-20 2 M100 90 l-40 3"/>
      </g>
      <circle cx="40" cy="98" r="9" fill="#9a48a8" stroke-width="2.5"/>
    </g>
  </symbol>
  <!-- lo specchietto da tasca -->
  <symbol id="ogg-specchietto" viewBox="0 0 140 140">
    <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
      <rect x="62" y="84" width="16" height="44" rx="5" fill="url(#to-ottone)"/>
      <circle cx="70" cy="60" r="44" fill="url(#to-ottone)"/>
      <circle cx="70" cy="60" r="34" fill="#bcd8e8"/>
      <path d="M50 46 Q60 34 76 34" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round" opacity=".8"/>
    </g>
  </symbol>
  <!-- il carattere tipografico dell'uguale (da Londra) -->
  <symbol id="ogg-uguale" viewBox="0 0 140 140">
    <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
      <path d="M30 40 L100 26 L116 40 L116 112 L46 126 L30 112 Z" fill="#8a8a96"/>
      <path d="M30 40 L100 26 L116 40 L46 54 Z" fill="#c8c8d2"/>
      <path d="M30 40 L46 54 L46 126 L30 112 Z" fill="#6a6a76"/>
      <rect x="54" y="72" width="54" height="9" rx="2" fill="#2a2a34" transform="rotate(-11 81 76)"/>
      <rect x="56" y="92" width="54" height="9" rx="2" fill="#2a2a34" transform="rotate(-11 83 96)"/>
    </g>
  </symbol>
`);

Grafica.sfondo("tours", `
  <!-- ===== PARETE A PANNELLI ===== -->
  <rect width="1600" height="900" fill="url(#to-muro)"/>
  <g stroke="#2a1a12" stroke-width="3">
    <rect y="470" width="1600" height="130" fill="url(#to-legno)"/>
    <path d="M0 470 H1600 M0 600 H1600" stroke-width="5"/>
    <g fill="none" stroke="#3a2416" stroke-width="2.5">
      <rect x="20" y="490" width="160" height="90" rx="4"/><rect x="200" y="490" width="160" height="90" rx="4"/>
      <rect x="1060" y="490" width="160" height="90" rx="4"/><rect x="1240" y="490" width="160" height="90" rx="4"/><rect x="1420" y="490" width="160" height="90" rx="4"/>
    </g>
  </g>
  <!-- ===== PAVIMENTO A SCACCHI E TAPPETO ===== -->
  <path d="M0 640 H1600 V900 H0 Z" fill="url(#to-scacchi)"/>
  <path d="M0 640 H1600 V900 H0 Z" fill="#000" opacity=".22"/>
  <rect y="636" width="1600" height="10" fill="#2a1a12"/>
  <g stroke="#1d1410" stroke-width="3">
    <path d="M300 760 L1280 760 L1340 880 L240 880 Z" fill="#7a2a2a"/>
    <path d="M330 776 L1262 776 L1312 866 L272 866 Z" fill="none" stroke="#c8962e" stroke-width="5"/>
    <path d="M520 800 l40 24 l-40 24 l-40 -24 Z M800 800 l40 24 l-40 24 l-40 -24 Z M1080 800 l40 24 l-40 24 l-40 -24 Z" fill="#c8962e" stroke-width="2"/>
  </g>

  <!-- travi del soffitto -->
  <g fill="#3a2416" stroke="#1d1410" stroke-width="3">
    <rect y="0" width="1600" height="40"/>
    <path d="M100 40 L120 70 H180 L200 40 Z M560 40 L580 70 H640 L660 40 Z M1020 40 L1040 70 H1100 L1120 40 Z M1460 40 L1480 70 H1540 L1560 40 Z"/>
  </g>

  <!-- ===== LA FINESTRA SULLA LOIRA ===== -->
  <g stroke="#1d1410" stroke-width="4" stroke-linejoin="round">
    <rect x="420" y="110" width="360" height="330" fill="url(#to-cielo)"/>
    <!-- la città: tetti di ardesia, comignoli, il ponte sul fiume -->
    <g stroke="#3a3a4a" stroke-width="2">
      <path d="M420 330 L470 290 L520 330 Z M500 330 L560 280 L620 330 Z M600 330 L650 296 L700 330 Z M680 330 L730 286 L780 330 Z" fill="#4a5a6e"/>
      <rect x="430" y="330" width="350" height="40" fill="#e8dcc4"/>
      <g fill="#6a7a8a"><rect x="450" y="340" width="10" height="16"/><rect x="520" y="340" width="10" height="16"/><rect x="590" y="340" width="10" height="16"/><rect x="660" y="340" width="10" height="16"/><rect x="730" y="340" width="10" height="16"/></g>
      <rect x="540" y="262" width="12" height="24" fill="#8a5a44"/><rect x="742" y="268" width="12" height="22" fill="#8a5a44"/>
      <rect x="420" y="370" width="360" height="70" fill="#6a9ab8"/>
      <path d="M420 384 Q470 360 520 384 Q570 360 620 384 Q670 360 720 384 Q750 370 780 384 V398 H420 Z" fill="#c8b490"/>
      <path d="M450 420 h40 M560 410 h60 M680 428 h50" stroke="#e8f8ff" stroke-width="3"/>
    </g>
    <path d="M440 170 q20 -14 40 0 q20 -14 40 0" fill="none" stroke="#fff" stroke-width="3" opacity=".8"/>
    <!-- cornice e piombature -->
    <path d="M600 110 V440 M420 275 H780" stroke="#3a2416" stroke-width="10"/>
    <rect x="410" y="100" width="380" height="350" fill="none" stroke="#3a2416" stroke-width="18"/>
    <rect x="396" y="440" width="408" height="22" fill="url(#to-legno)"/>
  </g>
  <!-- tende rosso scuro -->
  <g stroke="#1d1410" stroke-width="3">
    <path d="M370 90 Q400 260 380 470 L420 470 Q400 260 430 90 Z" fill="#8a2a2a"/>
    <path d="M770 90 Q800 260 780 470 L820 470 Q800 260 830 90 Z" fill="#8a2a2a"/>
    <rect x="350" y="80" width="500" height="14" rx="5" fill="url(#to-ottone)"/>
  </g>
  <ellipse cx="600" cy="560" rx="240" ry="90" fill="url(#to-luce)"/>

  <!-- ===== LA LIBRERIA (a sinistra) ===== -->
  <g stroke="#1d1410" stroke-width="3" stroke-linejoin="round">
    <rect x="40" y="120" width="300" height="600" fill="url(#to-legno-v)"/>
    <path d="M40 240 H340 M40 360 H340 M40 480 H340 M40 600 H340" stroke-width="6"/>
    <g>
      <rect x="56" y="160" width="22" height="80" fill="#8a2a2a"/><rect x="78" y="168" width="18" height="72" fill="#2a5a3a"/><rect x="96" y="156" width="26" height="84" fill="#c8a24a"/>
      <rect x="122" y="170" width="16" height="70" fill="#3a3a6a"/><path d="M146 240 L170 172 L184 176 L160 240 Z" fill="#7a4a2a"/>
      <rect x="200" y="164" width="24" height="76" fill="#5a2a5a"/><rect x="224" y="174" width="18" height="66" fill="#8a2a2a"/><rect x="250" y="160" width="28" height="80" fill="#2a4a6a"/><rect x="290" y="176" width="34" height="64" fill="#c8b490"/>
      <rect x="56" y="282" width="30" height="78" fill="#2a4a6a"/><rect x="86" y="290" width="20" height="70" fill="#c8a24a"/><rect x="110" y="300" width="80" height="60" fill="#e8dcc4"/>
      <path d="M118 316 h60 M118 330 h50 M118 344 h56" stroke="#7a6a5a" stroke-width="2"/>
      <rect x="200" y="280" width="22" height="80" fill="#8a2a2a"/><rect x="222" y="286" width="22" height="74" fill="#3a3a6a"/><rect x="244" y="282" width="30" height="78" fill="#5a3a20"/><rect x="280" y="296" width="44" height="64" fill="#2a5a3a"/>
      <rect x="56" y="404" width="26" height="76" fill="#5a2a5a"/><rect x="82" y="410" width="22" height="70" fill="#2a5a3a"/>
      <!-- un mappamondo sul ripiano -->
      <circle cx="170" cy="430" r="40" fill="#6aa0c8"/><path d="M150 410 q14 10 6 26 q-10 10 4 22 M182 398 q-6 16 10 22 q14 6 8 22" fill="#8ab06a" stroke-width="2"/>
      <path d="M126 430 A44 44 0 0 1 214 430" fill="none" stroke="url(#to-ottone)" stroke-width="6"/><rect x="160" y="470" width="20" height="10" fill="url(#to-ottone)"/>
      <rect x="240" y="400" width="24" height="80" fill="#c8a24a"/><rect x="264" y="412" width="24" height="68" fill="#8a2a2a"/><rect x="292" y="404" width="30" height="76" fill="#3a3a6a"/>
      <rect x="60" y="530" width="120" height="70" fill="#e8dcc4"/><path d="M60 530 L120 510 L180 530" fill="#d8ccb0"/>
      <rect x="200" y="520" width="30" height="80" fill="#2a4a6a"/><rect x="232" y="528" width="26" height="72" fill="#5a2a5a"/><rect x="262" y="516" width="34" height="84" fill="#5a3a20"/>
    </g>
  </g>

  <!-- ===== IL CAMINO (a destra) ===== -->
  <g stroke="#1d1410" stroke-width="4" stroke-linejoin="round">
    <path d="M1260 200 H1560 V250 H1260 Z" fill="#c8b8a0"/>
    <path d="M1290 250 H1530 V640 H1290 Z" fill="#b8a890"/>
    <path d="M1330 420 H1490 V640 H1330 Z" fill="#2a1a12"/>
    <ellipse cx="1410" cy="600" rx="70" ry="50" fill="url(#to-fuoco)" stroke="none"/>
    <path d="M1370 620 L1450 600 M1366 604 L1452 624" stroke="#5a3a20" stroke-width="10"/>
    <path d="M1300 300 H1520 M1300 360 H1520" stroke="#8a7a64" stroke-width="2.5"/>
    <!-- sulla mensola: clessidra, due libri, un vaso di penne -->
    <path d="M1300 186 L1316 196 L1300 206 Z M1332 186 L1316 196 L1332 206 Z" fill="#f2e2b0" stroke-width="2"/>
    <rect x="1296" y="180" width="40" height="6" fill="url(#to-ottone)" stroke-width="2"/><rect x="1296" y="206" width="40" height="6" fill="url(#to-ottone)" stroke-width="2"/>
    <rect x="1380" y="168" width="70" height="20" fill="#8a2a2a" stroke-width="2"/><rect x="1386" y="150" width="60" height="18" fill="#2a4a6a" stroke-width="2"/>
    <rect x="1480" y="164" width="30" height="36" rx="4" fill="#5a6a7a" stroke-width="2"/><path d="M1488 164 L1478 120 M1498 164 L1504 116" stroke="#f2ead6" stroke-width="3"/>
  </g>

  <!-- ===== LA MACCHINA DEL CIFRARIO (centro-destra) ===== -->
  <g stroke="#1d1410" stroke-width="4" stroke-linejoin="round">
    <path d="M880 640 L900 470 H1220 L1240 640 Z" fill="url(#to-legno)"/>
    <path d="M900 640 V720 M1220 640 V720" stroke-width="14" stroke="#3a2416"/>
    <rect x="930" y="330" width="260" height="150" rx="10" fill="url(#to-ottone)"/>
    <rect x="950" y="350" width="220" height="40" rx="4" fill="#2a2418"/>
    <g fill="#c8962e"><circle cx="980" cy="430" r="26"/><circle cx="1060" cy="430" r="26"/><circle cx="1140" cy="430" r="26"/></g>
    <g fill="#f2e2b0" stroke-width="2"><circle cx="980" cy="430" r="14"/><circle cx="1060" cy="430" r="14"/><circle cx="1140" cy="430" r="14"/></g>
    <path d="M980 416 V430 M1060 416 V430 M1140 416 V430" stroke-width="3"/>
    <rect x="1190" y="380" width="40" height="14" fill="url(#to-ottone)"/><circle cx="1240" cy="387" r="12" fill="#8a2a2a"/>
    <path d="M940 480 H1180 L1170 500 H950 Z" fill="#8a6018"/>
  </g>

  <!-- ===== LA SCRIVANIA (centro-sinistra) ===== -->
  <g stroke="#1d1410" stroke-width="4" stroke-linejoin="round">
    <path d="M360 600 H860 L880 640 H340 Z" fill="#8a5a34"/>
    <rect x="340" y="640" width="540" height="40" fill="url(#to-legno)"/>
    <path d="M360 680 V760 M860 680 V760" stroke="#3a2416" stroke-width="16"/>
    <!-- carte, libro aperto (l'Isagoge), calamaio -->
    <path d="M400 612 L500 604 L508 630 L404 636 Z" fill="#f2ead6" stroke-width="2"/>
    <path d="M560 616 Q610 604 660 616 Q710 604 760 616 L756 638 Q710 628 660 640 Q610 628 564 638 Z" fill="#fbf6ea" stroke-width="2.5"/>
    <path d="M660 616 V640" stroke-width="2"/>
    <path d="M580 622 h60 M580 630 h50 M680 622 h60 M680 630 h56" stroke="#7a6a5a" stroke-width="1.5"/>
    <!-- candeliere -->
    <rect x="806" y="596" width="30" height="10" fill="url(#to-ottone)"/>
    <path d="M816 596 V560 H826 V596" fill="url(#to-ottone)"/>
    <rect x="814" y="520" width="14" height="40" fill="#f6ecd0"/>
    <path d="M821 520 Q812 506 821 492 Q830 506 821 520 Z" fill="#ffd060" stroke-width="2"/>
  </g>
  <circle cx="821" cy="506" r="60" fill="url(#to-luce)"/>
`);
