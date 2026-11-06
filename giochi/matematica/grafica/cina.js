/* Gioco di Matematica · terze · Capitolo 1: REGNO DI WEI (Cina), ANNO 263. Lo studio di Liu Hui.
   Di Liu Hui non esistono ritratti: il personaggio è disegnato con abiti del periodo, senza caricature.
   Niente elementi religiosi. Tavolo basso con la tavola da calcolo a quadretti (i bastoncini sono "elementi"),
   scaffale con i rotoli, finestra a grata sulla sera, lampada di bronzo, carretto delle sete della "mercante".
   A sinistra la porta del vagone del Binario 8, fermo nel cortile. */
Grafica.definizioni(`
  <linearGradient id="cn-muro" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#6a4a3a"/><stop offset=".6" stop-color="#b08a62"/><stop offset="1" stop-color="#8a6a4a"/>
  </linearGradient>
  <linearGradient id="cn-lacca" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#5a1410"/><stop offset=".5" stop-color="#a8301e"/><stop offset="1" stop-color="#5a1410"/>
  </linearGradient>
  <linearGradient id="cn-sera" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#2a2a5a"/><stop offset=".6" stop-color="#c86a5a"/><stop offset="1" stop-color="#f0b070"/>
  </linearGradient>
  <linearGradient id="cn-legno" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#7a4a2a"/><stop offset="1" stop-color="#4a2a18"/>
  </linearGradient>
  <linearGradient id="cn-bronzo" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#3a4a3a"/><stop offset=".45" stop-color="#8aa07a"/><stop offset="1" stop-color="#2a3a2a"/>
  </linearGradient>
  <linearGradient id="cn-veste" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#1a2a48"/><stop offset=".55" stop-color="#2e4a78"/><stop offset="1" stop-color="#3c5a8a"/>
  </linearGradient>
  <linearGradient id="cn-pelle" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#b8865a"/><stop offset=".55" stop-color="#e2b48a"/><stop offset="1" stop-color="#eec8a0"/>
  </linearGradient>

  <!-- ===== LIU HUI (vista di tre quarti; piedi in 0,0) ===== -->
  <symbol id="liuhui" viewBox="-110 -600 230 615" overflow="visible">
    <ellipse cx="0" cy="0" rx="70" ry="11" fill="#000" opacity=".4"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <!-- veste lunga a maniche ampie, incrociata sul petto -->
      <path d="M-50 -440 C-62 -340 -72 -150 -82 -10 Q0 4 82 -10 C72 -150 62 -340 50 -440 Q0 -456 -50 -440 Z" fill="url(#cn-veste)"/>
      <path d="M-82 -10 Q0 4 82 -10 L82 -30 Q0 -16 -82 -30 Z" fill="#c8a24a"/>
      <path d="M-30 -440 L22 -330 M30 -440 L-6 -380" fill="none" stroke="#e8dcc0" stroke-width="7"/>
      <path d="M-56 -300 Q0 -288 56 -300 L56 -280 Q0 -268 -56 -280 Z" fill="#8a2a1e"/>
      <path d="M8 -284 L4 -230 M16 -284 L22 -232" stroke="#8a2a1e" stroke-width="5"/>
      <!-- scarpe -->
      <path d="M-40 -2 Q-44 -14 -24 -14 L-6 -14 L-6 2 Z M10 2 L10 -14 L32 -14 Q50 -14 46 -2 Z" fill="#1a1a2a"/>
      <!-- manica sinistra con un rotolo -->
      <path d="M-48 -436 C-86 -400 -100 -330 -92 -270 L-46 -262 C-50 -320 -44 -380 -30 -420 Z" fill="url(#cn-veste)"/>
      <path d="M-92 -270 L-46 -262" stroke="#e8dcc0" stroke-width="6"/>
      <ellipse cx="-66" cy="-258" rx="11" ry="9" fill="url(#cn-pelle)"/>
      <rect x="-92" y="-300" width="24" height="70" rx="10" fill="#e8d8a8" transform="rotate(-20 -80 -265)"/>
      <path d="M-92 -290 L-70 -296 M-90 -250 L-66 -256" stroke="#8a6a3a" stroke-width="2" transform="rotate(-20 -80 -265)"/>
      <!-- manica destra alzata con un bastoncino rosso tra le dita -->
      <path d="M46 -436 C86 -420 104 -380 100 -340 L60 -330 C62 -364 54 -396 30 -420 Z" fill="url(#cn-veste)"/>
      <path d="M100 -340 L60 -330" stroke="#e8dcc0" stroke-width="6"/>
      <ellipse cx="82" cy="-330" rx="10" ry="11" fill="url(#cn-pelle)"/>
      <rect x="80" y="-394" width="6" height="58" rx="2" fill="#c8302a" stroke-width="2" transform="rotate(14 83 -365)"/>
      <!-- collo e testa -->
      <path d="M-8 -466 L-10 -440 L14 -440 L12 -466 Z" fill="url(#cn-pelle)"/>
      <path d="M-26 -522 C-28 -490 -20 -470 2 -464 C20 -460 32 -472 36 -490 C40 -506 38 -526 32 -540 C20 -556 -18 -556 -26 -522 Z" fill="url(#cn-pelle)"/>
      <path d="M-22 -506 Q-32 -510 -30 -496 Q-28 -486 -20 -490" fill="#c8946a"/>
      <!-- capelli raccolti e piccolo copricapo nero con il nastro -->
      <path d="M-28 -516 C-34 -548 -12 -566 8 -564 C28 -562 40 -548 36 -526 C26 -544 10 -548 -6 -544 C-18 -540 -24 -530 -28 -516 Z" fill="#1e1a1a"/>
      <path d="M-14 -560 Q-10 -596 10 -598 Q30 -596 32 -560 Q10 -570 -14 -560 Z" fill="#141018"/>
      <path d="M-14 -560 Q10 -570 32 -560 L32 -552 Q10 -562 -14 -552 Z" fill="#3a3a4a"/>
      <path d="M32 -556 Q50 -540 44 -510" fill="none" stroke="#141018" stroke-width="4"/>
      <!-- viso: occhi gentili, baffi e barbetta -->
      <path d="M-4 -508 Q6 -516 16 -508" fill="none" stroke-width="3"/>
      <path d="M21 -507 Q28 -514 35 -507" fill="none" stroke-width="3"/>
      <circle cx="6" cy="-507" r="2.6" fill="#1d1428" stroke="none"/><circle cx="28" cy="-506" r="2.4" fill="#1d1428" stroke="none"/>
      <path d="M-6 -522 Q4 -528 14 -522 M20 -521 Q28 -526 36 -520" fill="none" stroke="#2a2222" stroke-width="3.5"/>
      <path d="M24 -500 Q30 -490 25 -486" fill="none" stroke="#9a6a4a" stroke-width="3"/>
      <path d="M8 -480 Q18 -486 26 -482 Q34 -486 38 -480" fill="none" stroke="#2a2222" stroke-width="4"/>
      <path d="M12 -474 Q22 -470 32 -474 Q24 -454 20 -452 Q16 -456 12 -474 Z" fill="#2a2222"/>
    </g>
  </symbol>

  <!-- ===== Madama Parolona travestita da mercante di seta: il cappello di paglia non nasconde le piume ===== -->
  <symbol id="parolona-mercante" viewBox="-150 -720 300 735" overflow="visible">
    <use href="#parolona" x="-150" y="-700" width="300" height="715"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round">
      <!-- scialle di seta sulle spalle e sul vocabolario -->
      <path d="M-70 -480 Q0 -440 70 -480 L96 -380 Q0 -340 -96 -380 Z" fill="#2c8a7a"/>
      <path d="M-80 -420 Q0 -390 80 -420" fill="none" stroke="#f3d27a" stroke-width="4"/>
      <path d="M-150 -440 L-50 -440 L-50 -300 L-150 -300 Z" fill="#e8b84a" transform="rotate(-8 -96 -380)"/>
      <path d="M-140 -420 Q-100 -404 -60 -420 M-140 -380 Q-100 -364 -60 -380 M-140 -340 Q-100 -324 -60 -340" fill="none" stroke="#c8402f" stroke-width="3" transform="rotate(-8 -96 -380)"/>
      <!-- grande cappello di paglia a cono: le piume di pergamena spuntano lo stesso -->
      <path d="M-130 -584 Q0 -540 130 -584 L0 -650 Z" fill="#e8c878"/>
      <path d="M-100 -590 L0 -642 M100 -590 L0 -642 M-50 -566 L0 -642 M50 -566 L0 -642" stroke="#b8904a" stroke-width="2"/>
      <path d="M-130 -584 Q0 -540 130 -584" fill="none" stroke="#8a6a2a" stroke-width="4"/>
      <!-- velo davanti al viso, abbassato solo a metà -->
      <path d="M-40 -568 Q4 -556 46 -568 L44 -536 Q4 -524 -38 -536 Z" fill="#f6ecd8" opacity=".85"/>
    </g>
  </symbol>

  <!-- icone degli oggetti (140 × 140) -->
  <symbol id="ogg-sacchetto" viewBox="0 0 140 140">
    <ellipse cx="70" cy="126" rx="40" ry="6" fill="#000" opacity=".25"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round">
      <path d="M40 56 Q20 120 70 122 Q120 120 100 56 Z" fill="#7a2f8e"/>
      <path d="M44 56 Q70 64 96 56 L90 40 Q70 46 50 40 Z" fill="#9a48a8"/>
      <path d="M50 48 Q70 30 90 48 Q80 60 70 50 Q60 60 50 48 Z" fill="#e8c26a"/>
      <g stroke="#1d1428" stroke-width="2"><rect x="58" y="22" width="5" height="34" fill="#1a1a1a"/><rect x="68" y="18" width="5" height="36" fill="#1a1a1a"/><rect x="78" y="24" width="5" height="32" fill="#1a1a1a"/></g>
    </g>
  </symbol>
  <!-- la piccola lampada a olio di bronzo di Liu Hui, da viaggio: spenta e accesa -->
  <symbol id="ogg-lampada" viewBox="0 0 140 140">
    <ellipse cx="70" cy="124" rx="40" ry="6" fill="#000" opacity=".25"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round">
      <path d="M48 120 L92 120 L84 106 L56 106 Z" fill="url(#cn-bronzo)"/>
      <rect x="64" y="70" width="12" height="36" fill="url(#cn-bronzo)"/>
      <path d="M30 70 Q70 96 110 70 Q104 58 70 58 Q36 58 30 70 Z" fill="url(#cn-bronzo)"/>
      <path d="M104 64 Q118 58 120 50 L110 60 Z" fill="url(#cn-bronzo)"/>
      <path d="M40 66 Q70 76 100 66" fill="none" stroke="#c8d8a8" stroke-width="2"/>
      <path d="M118 52 L120 44" stroke-width="3"/>
    </g>
  </symbol>
  <symbol id="ogg-lampada-accesa" viewBox="0 0 140 140">
    <circle cx="118" cy="34" r="26" fill="#ffd27a" opacity=".35"/>
    <use href="#ogg-lampada"/>
    <path d="M120 18 Q130 32 122 44 Q120 46 118 44 Q110 32 120 18 Z" fill="#ffcf3a" stroke="#c8601a" stroke-width="2"/>
    <path d="M120 26 Q124 34 120 40 Q116 34 120 26 Z" fill="#fff6c0"/>
  </symbol>
  <symbol id="ogg-coltellino" viewBox="0 0 140 140">
    <ellipse cx="70" cy="120" rx="44" ry="6" fill="#000" opacity=".25"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round" transform="rotate(-30 70 70)">
      <rect x="20" y="60" width="54" height="20" rx="6" fill="#7a4a2a"/>
      <path d="M26 64 H68 M26 76 H68" stroke="#4a2a18" stroke-width="2"/>
      <path d="M74 62 L122 66 L126 72 L74 78 Z" fill="url(#cn-bronzo)"/>
      <circle cx="30" cy="70" r="4" fill="#c8a24a"/>
    </g>
  </symbol>
  <symbol id="ogg-bastoncini-neri" viewBox="0 0 140 140">
    <ellipse cx="70" cy="122" rx="44" ry="6" fill="#000" opacity=".25"/>
    <g stroke="#1d1428" stroke-width="2.5">
      <rect x="30" y="30" width="8" height="84" rx="2" fill="#1a1a1a" transform="rotate(-14 34 72)"/>
      <rect x="48" y="24" width="8" height="90" rx="2" fill="#1a1a1a" transform="rotate(-6 52 70)"/>
      <rect x="66" y="22" width="8" height="92" rx="2" fill="#1a1a1a"/>
      <rect x="84" y="24" width="8" height="90" rx="2" fill="#1a1a1a" transform="rotate(6 88 70)"/>
      <rect x="102" y="30" width="8" height="84" rx="2" fill="#1a1a1a" transform="rotate(14 106 72)"/>
    </g>
    <path d="M38 76 Q70 86 104 76" fill="none" stroke="#e8c26a" stroke-width="5"/>
  </symbol>
`);

Grafica.sfondo("cina", `
  <!-- muro intonacato, colonne laccate, travi -->
  <rect width="1600" height="900" fill="url(#cn-muro)"/>
  <rect width="1600" height="120" fill="#3a2418"/>
  <g stroke="#1d1428" stroke-width="4">
    <rect y="110" width="1600" height="26" fill="url(#cn-lacca)"/>
    <rect x="150" y="120" width="56" height="540" fill="url(#cn-lacca)"/>
    <rect x="1440" y="120" width="56" height="540" fill="url(#cn-lacca)"/>
    <path d="M140 640 H216 V664 H140 Z M1430 640 H1506 V664 H1430 Z" fill="#3a2418"/>
  </g>
  <g fill="#2a1810" opacity=".5"><rect x="0" y="40" width="1600" height="8"/><rect x="0" y="80" width="1600" height="8"/></g>

  <!-- finestra a grata sulla sera, al centro -->
  <g stroke="#1d1428" stroke-width="4">
    <rect x="600" y="190" width="400" height="290" fill="url(#cn-sera)"/>
    <circle cx="880" cy="290" r="26" fill="#fff4d0" stroke="none" opacity=".9"/>
    <path d="M600 420 Q700 380 800 410 Q900 380 1000 420 V480 H600 Z" fill="#3a2a4a" stroke="none" opacity=".8"/>
    <g fill="none" stroke="#4a2414" stroke-width="10">
      <rect x="600" y="190" width="400" height="290"/>
      <path d="M700 190 V480 M800 190 V480 M900 190 V480 M600 262 H1000 M600 335 H1000 M600 408 H1000"/>
    </g>
    <g fill="none" stroke="#6a3a1e" stroke-width="4">
      <path d="M650 190 V262 M750 262 V335 M850 190 V262 M950 262 V335 M650 335 V408 M850 335 V408 M750 408 V480 M950 408 V480"/>
    </g>
  </g>

  <!-- scaffale con i rotoli -->
  <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <rect x="250" y="220" width="280" height="380" fill="url(#cn-legno)"/>
    <path d="M250 310 H530 M250 400 H530 M250 490 H530" stroke-width="6"/>
    <g fill="#e8d8a8" stroke-width="3">
      <rect x="266" y="264" width="80" height="36" rx="16"/><rect x="356" y="268" width="70" height="32" rx="15"/><rect x="436" y="262" width="80" height="38" rx="17"/>
      <rect x="270" y="356" width="90" height="34" rx="16"/><rect x="370" y="352" width="76" height="38" rx="17"/>
      <rect x="276" y="448" width="70" height="32" rx="15"/><rect x="420" y="444" width="96" height="36" rx="16"/>
      <rect x="268" y="540" width="84" height="40" rx="18"/><rect x="362" y="544" width="70" height="36" rx="16"/><rect x="442" y="540" width="76" height="40" rx="18"/>
    </g>
    <g fill="#c8302a" stroke="none"><rect x="300" y="262" width="6" height="40"/><rect x="390" y="350" width="6" height="42"/><rect x="460" y="442" width="6" height="40"/><rect x="300" y="538" width="6" height="44"/></g>
  </g>

  <!-- lampada a olio di bronzo a stelo -->
  <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <path d="M1080 760 L1140 760 L1124 740 L1096 740 Z" fill="url(#cn-bronzo)"/>
    <rect x="1104" y="460" width="12" height="282" fill="url(#cn-bronzo)"/>
    <path d="M1076 460 Q1110 488 1144 460 Q1110 450 1076 460 Z" fill="url(#cn-bronzo)"/>
    <path d="M1110 456 Q1100 430 1110 412 Q1122 432 1110 456 Z" fill="#ffd060" stroke="#c86a1a" stroke-width="2"/>
  </g>
  <circle cx="1110" cy="430" r="80" fill="#ffd27a" opacity=".16"/>

  <!-- pavimento di assi in prospettiva -->
  <g id="cn-pav"></g>

  <!-- stuoia e tavolo basso con la tavola da calcolo -->
  <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <path d="M560 760 L1060 760 L1110 860 L510 860 Z" fill="#c8a868"/>
    <g stroke="#a88848" stroke-width="2"><path d="M560 780 H1066 M552 800 H1074 M542 820 H1086 M532 840 H1098"/></g>
    <path d="M620 660 L1000 660 L1030 700 L590 700 Z" fill="#6a3a1e"/>
    <path d="M590 700 H1030 V722 H590 Z" fill="#4a2414"/>
    <path d="M610 722 V770 M1010 722 V770" stroke-width="10"/>
    <!-- la tavola a quadretti -->
    <path d="M660 666 L960 666 L982 694 L638 694 Z" fill="#e8d0a0"/>
    <g stroke="#8a6a3a" stroke-width="2">
      <path d="M720 666 L702 694 M780 666 L767 694 M840 666 L832 694 M900 666 L896 694 M650 680 H970"/>
    </g>
    <!-- vasetti dei bastoncini -->
    <path d="M604 640 Q600 664 616 668 L640 668 Q656 664 652 640 Z" fill="#c8302a"/>
    <path d="M968 640 Q964 664 980 668 L1004 668 Q1020 664 1016 640 Z" fill="#2a2a2a"/>
  </g>

  <!-- il carretto delle sete della "mercante" -->
  <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <path d="M1180 600 L1430 600 L1420 700 L1190 700 Z" fill="url(#cn-legno)"/>
    <circle cx="1220" cy="720" r="30" fill="#4a2a18"/><circle cx="1390" cy="720" r="30" fill="#4a2a18"/>
    <circle cx="1220" cy="720" r="8" fill="#c8a24a"/><circle cx="1390" cy="720" r="8" fill="#c8a24a"/>
    <rect x="1196" y="556" width="60" height="44" rx="20" fill="#2c8a7a"/><rect x="1262" y="550" width="60" height="50" rx="22" fill="#e8b84a"/>
    <rect x="1328" y="556" width="60" height="44" rx="20" fill="#c8402f"/><rect x="1236" y="516" width="60" height="40" rx="18" fill="#7a5ab8"/>
    <path d="M1326 516 Q1350 560 1336 600" fill="none" stroke="#f6c8d8" stroke-width="10"/>
  </g>

  <!-- a sinistra la porta del vagone del Binario 8, fermo nel cortile -->
  <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <rect x="-10" y="170" width="140" height="490" fill="#7a2228"/>
    <rect x="10" y="190" width="100" height="440" rx="6" fill="#4a2018"/>
    <circle cx="60" cy="290" r="34" fill="url(#t8-ottone)"/><circle cx="60" cy="290" r="24" fill="#ffd27a"/>
    <circle cx="96" cy="440" r="7" fill="url(#t8-ottone)"/>
    <path d="M-10 660 H150 L140 690 H-10 Z" fill="url(#t8-ottone-v)"/>
  </g>
`, function (svg) {
  Grafica.pavimentoListoni(svg.querySelector("#cn-pav"), { fuga: { x: 800, y: 300 }, alto: 660, basso: 900, colori: ["#8a5a32", "#7a4a2a", "#946638"] });
});
