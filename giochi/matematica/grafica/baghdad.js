/* Gioco di Matematica · terze · Capitolo 2: BAGHDAD, CIRCA 830. La Casa della Sapienza.
   Di al-Khwarizmi non esistono ritratti: è disegnato con abiti del periodo abbaside, senza caricature.
   Niente elementi religiosi (dalla finestra: il Tigri, le palme, le mura rotonde della città, case a terrazza).
   Tre piani di profondità: il paesaggio al tramonto dietro il grande arco, la sala con gli scaffali e il
   corridoio a destra, il primo piano con lo scrittoio basso, il tappeto e il tavolo del rilegatore.
   Il gatto Dattero, la cassetta delle tessere, lo spago, il disegno e il righello sono "elementi". */
Grafica.definizioni(`
  <linearGradient id="bg-muro" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#7a5434"/><stop offset=".35" stop-color="#c89a64"/><stop offset=".8" stop-color="#d8ae74"/><stop offset="1" stop-color="#a87a4a"/>
  </linearGradient>
  <linearGradient id="bg-cielo" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#4a5aa0"/><stop offset=".45" stop-color="#c87a8a"/><stop offset=".75" stop-color="#f4a860"/><stop offset="1" stop-color="#ffd890"/>
  </linearGradient>
  <linearGradient id="bg-fiume" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#e8a870"/><stop offset=".4" stop-color="#6a7a9a"/><stop offset="1" stop-color="#3a4a6a"/>
  </linearGradient>
  <linearGradient id="bg-legno" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#4a2a16"/><stop offset=".5" stop-color="#7a4a26"/><stop offset="1" stop-color="#4a2a16"/>
  </linearGradient>
  <linearGradient id="bg-legno-v" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#8a5a30"/><stop offset="1" stop-color="#4a2a16"/>
  </linearGradient>
  <linearGradient id="bg-ottone" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#6e4a16"/><stop offset=".35" stop-color="#f3c45a"/><stop offset=".6" stop-color="#c8922e"/><stop offset="1" stop-color="#5a3a10"/>
  </linearGradient>
  <linearGradient id="bg-corridoio" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#2a1a10"/><stop offset=".7" stop-color="#4a3020"/><stop offset="1" stop-color="#6a4a2a"/>
  </linearGradient>
  <linearGradient id="bg-luce" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#ffe2a0" stop-opacity=".55"/><stop offset="1" stop-color="#ffe2a0" stop-opacity="0"/>
  </linearGradient>
  <radialGradient id="bg-alone" cx="50%" cy="50%" r="50%">
    <stop offset="0" stop-color="#ffd88a" stop-opacity=".55"/><stop offset=".5" stop-color="#ffb84a" stop-opacity=".18"/><stop offset="1" stop-color="#ffb84a" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="bg-vignetta" cx="50%" cy="45%" r="75%">
    <stop offset=".6" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#1a0a04" stop-opacity=".55"/>
  </radialGradient>
  <linearGradient id="bg-veste" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#123a44"/><stop offset=".55" stop-color="#1e6470"/><stop offset="1" stop-color="#2c7a84"/>
  </linearGradient>
  <linearGradient id="bg-sopraveste" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#4a1a14"/><stop offset=".55" stop-color="#8a3424"/><stop offset="1" stop-color="#9a4430"/>
  </linearGradient>
  <linearGradient id="bg-pelle" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#8a5a3a"/><stop offset=".55" stop-color="#b88058"/><stop offset="1" stop-color="#c8926a"/>
  </linearGradient>
  <linearGradient id="bg-gatto" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#f0a84a"/><stop offset="1" stop-color="#c8742a"/>
  </linearGradient>
  <linearGradient id="bg-turchese" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#1f7a8a"/><stop offset=".5" stop-color="#4ab8c0"/><stop offset="1" stop-color="#1a5a6a"/>
  </linearGradient>
  <pattern id="bg-blocchi" width="120" height="56" patternUnits="userSpaceOnUse">
    <path d="M0 0 H120 M0 28 H120 M60 0 V28 M0 28 V56 M120 28 V56" stroke="#5a3a1e" stroke-width="2" opacity=".22" fill="none"/>
    <circle cx="30" cy="12" r="2" fill="#5a3a1e" opacity=".12"/><circle cx="92" cy="42" r="3" fill="#fff" opacity=".08"/>
  </pattern>
  <pattern id="bg-fregio" width="56" height="40" patternUnits="userSpaceOnUse">
    <rect width="56" height="40" fill="#1a4a64"/>
    <rect x="17" y="9" width="22" height="22" fill="#e8c26a"/>
    <rect x="17" y="9" width="22" height="22" fill="#e8c26a" transform="rotate(45 28 20)"/>
    <circle cx="28" cy="20" r="6" fill="#c8402f"/>
    <path d="M0 0 L6 0 L0 6 Z M56 0 L50 0 L56 6 Z M0 40 L6 40 L0 34 Z M56 40 L50 40 L56 34 Z" fill="#4ab8c0"/>
  </pattern>
  <pattern id="bg-grata" width="22" height="22" patternUnits="userSpaceOnUse">
    <rect width="22" height="22" fill="#3a1e10"/>
    <circle cx="11" cy="11" r="7" fill="#6a3a1e"/><circle cx="11" cy="11" r="3" fill="#2a140a"/>
  </pattern>
  <pattern id="bg-tappeto" width="34" height="34" patternUnits="userSpaceOnUse">
    <rect width="34" height="34" fill="#8a1e22"/>
    <path d="M17 4 L30 17 L17 30 L4 17 Z" fill="#b8302a" stroke="#e8c26a" stroke-width="1.5"/>
    <circle cx="17" cy="17" r="3" fill="#1a3a5a"/>
  </pattern>

  <!-- ===== MUHAMMAD IBN MUSA AL-KHWARIZMI (tre quarti; piedi in 0,0) =====
       turbante chiaro su un berretto scuro, veste lunga verde-azzurra, sopraveste rossiccia con le fasce
       ricamate sulle maniche, cintura; nella mano sinistra un foglio, nella destra il calamo di canna -->
  <symbol id="alkhwarizmi" viewBox="-110 -600 230 615" overflow="visible">
    <ellipse cx="0" cy="0" rx="72" ry="11" fill="#000" opacity=".4"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <!-- babbucce a punta -->
      <path d="M-44 -2 Q-50 -16 -26 -16 L-6 -16 L-6 2 Z M8 2 L8 -16 L30 -16 Q46 -16 58 -6 Q50 2 8 2 Z" fill="#8a3a1a"/>
      <!-- veste lunga -->
      <path d="M-46 -440 C-58 -330 -66 -160 -74 -12 Q0 2 76 -12 C68 -160 60 -330 48 -440 Q0 -454 -46 -440 Z" fill="url(#bg-veste)"/>
      <path d="M-74 -12 Q0 2 76 -12 L74 -34 Q0 -20 -72 -34 Z" fill="#0e2e36"/>
      <path d="M2 -440 L4 -20" stroke="#0e2e36" stroke-width="2.5"/>
      <!-- sopraveste aperta, più corta -->
      <path d="M-50 -444 C-70 -340 -84 -200 -88 -96 L-30 -90 C-28 -200 -22 -330 -12 -440 Z" fill="url(#bg-sopraveste)"/>
      <path d="M50 -444 C70 -340 84 -200 88 -96 L32 -90 C30 -200 24 -330 14 -440 Z" fill="url(#bg-sopraveste)"/>
      <path d="M-30 -90 C-28 -200 -22 -330 -12 -440 M32 -90 C30 -200 24 -330 14 -440" fill="none" stroke="#e8c26a" stroke-width="4"/>
      <!-- cintura annodata -->
      <path d="M-34 -268 Q0 -258 36 -268 L36 -250 Q0 -240 -34 -250 Z" fill="#e8c26a"/>
      <path d="M6 -252 L0 -206 M14 -252 L20 -210" stroke="#c8922e" stroke-width="5"/>
      <!-- braccio sinistro piegato, con il foglio del quadrato -->
      <path d="M-48 -436 C-84 -404 -96 -350 -84 -300" fill="none" stroke="#1d1428" stroke-width="33"/>
      <path d="M-48 -436 C-84 -404 -96 -350 -84 -300" fill="none" stroke="#8a3424" stroke-width="27"/>
      <path d="M-82 -398 L-62 -406 M-90 -384 L-68 -392" stroke="#e8c26a" stroke-width="5"/>
      <path d="M-84 -300 C-70 -290 -46 -294 -30 -306" fill="none" stroke="#1d1428" stroke-width="27"/>
      <path d="M-84 -300 C-70 -290 -46 -294 -30 -306" fill="none" stroke="#8a3424" stroke-width="21"/>
      <path d="M-50 -350 L4 -356 L8 -296 L-46 -290 Z" fill="#f6ecd0" transform="rotate(-6 -20 -322)"/>
      <rect x="-40" y="-344" width="24" height="24" fill="none" stroke="#3a2a6a" stroke-width="2" transform="rotate(-6 -20 -322)"/>
      <path d="M-16 -344 h14 v24 h-14 M-40 -320 v12 h24 v-12" fill="none" stroke="#3a2a6a" stroke-width="2" transform="rotate(-6 -20 -322)"/>
      <ellipse cx="-28" cy="-308" rx="11" ry="9" fill="url(#bg-pelle)"/>
      <!-- braccio destro alzato con il calamo -->
      <path d="M46 -436 C78 -420 96 -390 96 -356" fill="none" stroke="#1d1428" stroke-width="33"/>
      <path d="M46 -436 C78 -420 96 -390 96 -356" fill="none" stroke="#8a3424" stroke-width="27"/>
      <path d="M78 -416 L92 -398 M70 -424 L86 -404" stroke="#e8c26a" stroke-width="5"/>
      <ellipse cx="96" cy="-346" rx="11" ry="12" fill="url(#bg-pelle)"/>
      <path d="M90 -360 L114 -420" stroke="#c89a5a" stroke-width="5"/>
      <path d="M114 -420 L118 -430" stroke="#1d1428" stroke-width="3"/>
      <!-- collo e testa -->
      <path d="M-8 -470 L-10 -444 L14 -444 L12 -470 Z" fill="url(#bg-pelle)"/>
      <path d="M-26 -524 C-28 -492 -20 -472 2 -466 C20 -462 32 -474 36 -492 C40 -508 38 -528 32 -542 C20 -558 -18 -558 -26 -524 Z" fill="url(#bg-pelle)"/>
      <path d="M-24 -508 Q-34 -512 -32 -498 Q-30 -488 -22 -492" fill="#a87050"/>
      <!-- barba piena, scura con qualche filo grigio -->
      <path d="M-24 -506 C-26 -470 -10 -440 10 -436 C30 -436 40 -460 40 -496 C34 -482 26 -476 18 -478 C10 -482 -4 -482 -10 -478 C-16 -484 -20 -494 -24 -506 Z" fill="#2a2220"/>
      <path d="M0 -460 q4 8 2 16 M18 -456 q2 8 -2 14" fill="none" stroke="#8a8480" stroke-width="2"/>
      <!-- bocca (si muove quando parla) -->
      <path d="M8 -484 Q18 -478 28 -484" fill="none" stroke="#6a2a26" stroke-width="3"/>
      <!-- naso e baffi -->
      <path d="M24 -506 Q31 -494 25 -490" fill="none" stroke="#7a4a2a" stroke-width="3"/>
      <path d="M6 -488 Q16 -494 22 -490 Q30 -494 38 -488" fill="none" stroke="#2a2220" stroke-width="4"/>
      <!-- occhi gentili e sopracciglia folte -->
      <path d="M-4 -514 Q6 -520 16 -514" fill="none" stroke-width="3"/>
      <path d="M21 -513 Q28 -519 35 -513" fill="none" stroke-width="3"/>
      <circle cx="6" cy="-512" r="2.6" fill="#1d1428" stroke="none"/><circle cx="28" cy="-511" r="2.4" fill="#1d1428" stroke="none"/>
      <path d="M-8 -528 Q4 -536 16 -528 M20 -527 Q28 -533 38 -526" fill="none" stroke="#2a2220" stroke-width="4"/>
      <!-- turbante chiaro avvolto intorno a un berretto scuro -->
      <path d="M-20 -560 Q-16 -606 8 -610 Q32 -606 34 -560 Q8 -572 -20 -560 Z" fill="#2a2a3a"/>
      <path d="M-36 -532 C-44 -566 -20 -584 8 -584 C38 -584 50 -566 42 -530 C30 -546 -20 -548 -36 -532 Z" fill="#f2ead6"/>
      <path d="M-34 -550 C-10 -566 26 -566 44 -546 M-28 -566 C-6 -578 24 -578 38 -562" fill="none" stroke="#c8bca0" stroke-width="3"/>
      <path d="M-30 -542 C-10 -556 20 -540 40 -560" fill="none" stroke="#d8cdb4" stroke-width="5"/>
      <path d="M40 -540 Q54 -520 48 -490" fill="none" stroke="#f2ead6" stroke-width="9"/>
      <path d="M40 -540 Q54 -520 48 -490" fill="none" stroke="#1d1428" stroke-width="1.5" opacity=".5"/>
    </g>
  </symbol>

  <!-- ===== DATTERO, il gatto della biblioteca ===== -->
  <symbol id="bg-gatto-dorme" viewBox="0 0 160 100">
    <ellipse cx="80" cy="92" rx="70" ry="8" fill="#000" opacity=".3"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <path d="M30 88 Q8 84 14 66 Q24 50 56 46 Q100 40 128 56 Q150 70 142 86 Q120 96 30 88 Z" fill="url(#bg-gatto)"/>
      <path d="M140 84 Q156 70 146 58 Q138 52 132 60" fill="none" stroke="#1d1428" stroke-width="12"/>
      <path d="M140 84 Q156 70 146 58 Q138 52 132 60" fill="none" stroke="#e8963a" stroke-width="7"/>
      <path d="M60 50 Q66 64 60 78 M84 46 Q92 62 86 80 M108 50 Q116 64 112 80" fill="none" stroke="#a85a1a" stroke-width="4"/>
      <!-- testa appoggiata sulle zampe -->
      <path d="M12 74 Q8 52 28 46 L22 30 L38 42 Q48 40 56 44 L64 30 L66 50 Q74 64 64 80 Q40 90 12 74 Z" fill="url(#bg-gatto)"/>
      <path d="M26 36 L34 44 M60 36 L58 46" stroke="#f6c8b8" stroke-width="3"/>
      <path d="M26 62 Q32 66 38 62 M48 60 Q54 64 60 60" fill="none" stroke-width="2.5"/>
      <path d="M40 70 L44 72 L40 74 Z" fill="#c86a6a" stroke-width="1.5"/>
      <path d="M18 70 L4 68 M18 74 L4 76 M62 68 L76 64 M62 72 L76 72" stroke-width="1.5"/>
      <path d="M20 84 Q34 92 50 86" fill="#e8963a" stroke-width="2.5"/>
    </g>
  </symbol>
  <symbol id="bg-gatto-corre" viewBox="0 0 160 100">
    <ellipse cx="80" cy="94" rx="60" ry="6" fill="#000" opacity=".25"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <path d="M150 40 Q160 20 146 10" fill="none" stroke="#1d1428" stroke-width="12"/>
      <path d="M150 40 Q160 20 146 10" fill="none" stroke="#e8963a" stroke-width="7"/>
      <path d="M118 66 L140 88 M100 70 L112 92" stroke="#1d1428" stroke-width="12"/>
      <path d="M118 66 L140 88 M100 70 L112 92" stroke="#e8963a" stroke-width="7"/>
      <path d="M40 56 Q70 30 120 40 Q150 46 148 60 Q140 74 110 72 Q70 74 40 66 Z" fill="url(#bg-gatto)"/>
      <path d="M44 62 L18 86 M58 66 L46 92" stroke="#1d1428" stroke-width="12"/>
      <path d="M44 62 L18 86 M58 66 L46 92" stroke="#e8963a" stroke-width="7"/>
      <path d="M78 40 Q84 54 78 66 M100 40 Q106 54 102 70" fill="none" stroke="#a85a1a" stroke-width="4"/>
      <path d="M8 46 Q6 28 22 22 L20 6 L34 18 Q42 16 48 18 L58 6 L58 26 Q64 44 50 54 Q24 62 8 46 Z" fill="url(#bg-gatto)"/>
      <circle cx="24" cy="34" r="6" fill="#fff6a0"/><circle cx="44" cy="32" r="6" fill="#fff6a0"/>
      <circle cx="22" cy="34" r="3" fill="#1d1428" stroke="none"/><circle cx="42" cy="32" r="3" fill="#1d1428" stroke="none"/>
      <path d="M30 44 L34 46 L30 48 Z" fill="#c86a6a" stroke-width="1.5"/>
      <path d="M14 46 L0 44 M14 50 L0 52 M48 44 L62 40" stroke-width="1.5"/>
    </g>
  </symbol>

  <!-- icone degli oggetti (140 × 140) -->
  <symbol id="ogg-spago" viewBox="0 0 140 140">
    <ellipse cx="70" cy="122" rx="40" ry="6" fill="#000" opacity=".25"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round">
      <path d="M40 40 Q70 30 100 40 L100 104 Q70 114 40 104 Z" fill="#7a4a26"/>
      <path d="M44 48 Q70 40 96 48 L96 98 Q70 106 44 98 Z" fill="#d8b884"/>
      <path d="M44 56 Q70 48 96 56 M44 66 Q70 58 96 66 M44 76 Q70 68 96 76 M44 86 Q70 78 96 86" fill="none" stroke="#a8885a" stroke-width="2"/>
      <ellipse cx="70" cy="40" rx="30" ry="8" fill="#8a5a30"/><ellipse cx="70" cy="40" rx="6" ry="2" fill="#2a140a"/>
      <path d="M96 80 Q120 84 118 104 Q116 120 128 124" fill="none" stroke="#d8b884" stroke-width="4"/>
    </g>
  </symbol>
  <symbol id="ogg-cassetta" viewBox="0 0 140 140">
    <ellipse cx="70" cy="124" rx="56" ry="7" fill="#000" opacity=".3"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round">
      <path d="M18 58 L122 58 L116 118 L24 118 Z" fill="url(#bg-legno-v)"/>
      <path d="M24 74 H116 M22 96 H118" stroke="#3a1e10" stroke-width="2"/>
      <rect x="58" y="80" width="24" height="14" rx="3" fill="url(#bg-ottone)"/>
      <path d="M28 58 L44 40 L60 58 Z" fill="#e8d8b0"/><path d="M52 58 L70 36 L84 58 Z" fill="#c8e0e8"/>
      <path d="M78 58 L98 42 L110 58 Z" fill="#e8d8b0"/>
      <path d="M44 40 L48 50 M70 36 L66 48 M98 42 L94 52" stroke="#5a3a1e" stroke-width="2"/>
      <path d="M14 58 L18 50 L122 50 L126 58 Z" fill="#8a5a30"/>
    </g>
  </symbol>
  <!-- il disegno di al-Khwarizmi: il quadrato completato di x² + 10x = 39 -->
  <symbol id="ogg-disegno" viewBox="0 0 140 140">
    <ellipse cx="70" cy="126" rx="48" ry="6" fill="#000" opacity=".25"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round" transform="rotate(-6 70 70)">
      <path d="M18 18 H122 V118 H18 Z" fill="#f6ecd0"/>
      <g stroke="#3a2a6a" stroke-width="2.5" fill="none">
        <rect x="34" y="34" width="44" height="44" fill="#d8c0f0"/>
        <rect x="78" y="34" width="24" height="44" fill="#c8e8c0"/>
        <rect x="34" y="78" width="44" height="24" fill="#c8e8c0"/>
        <rect x="78" y="78" width="24" height="24" stroke-dasharray="4 3"/>
      </g>
    </g>
  </symbol>
  <symbol id="ogg-righello" viewBox="0 0 140 140">
    <ellipse cx="70" cy="110" rx="54" ry="6" fill="#000" opacity=".25"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round" transform="rotate(-20 70 70)">
      <rect x="10" y="58" width="120" height="24" rx="3" fill="#d8a860"/>
      <path d="M20 58 V68 M30 58 V64 M40 58 V68 M50 58 V64 M60 58 V68 M70 58 V64 M80 58 V68 M90 58 V64 M100 58 V68 M110 58 V64 M120 58 V68" stroke-width="2"/>
      <circle cx="18" cy="74" r="3" fill="#5a3a1e" stroke="none"/>
    </g>
  </symbol>
`);

Grafica.sfondo("baghdad", `
  <defs>
    <clipPath id="bg-clip-finestra"><path d="M620 560 V336 Q620 214 800 152 Q980 214 980 336 V560 Z"/></clipPath>
    <clipPath id="bg-clip-corridoio"><path d="M1090 640 V330 Q1090 240 1220 206 Q1350 240 1350 330 V640 Z"/></clipPath>
  </defs>

  <!-- ===== MURO DI ARENARIA E SOFFITTO A TRAVI ===== -->
  <rect width="1600" height="900" fill="url(#bg-muro)"/>
  <rect width="1600" height="660" fill="url(#bg-blocchi)"/>
  <rect width="1600" height="70" fill="#2a160c"/>
  <g fill="#4a2a16" stroke="#1d1428" stroke-width="3">
    <rect x="0" y="0" width="1600" height="22"/>
    <path d="M40 22 h44 v34 h-44 Z M240 22 h44 v34 h-44 Z M440 22 h44 v34 h-44 Z M640 22 h44 v34 h-44 Z M840 22 h44 v34 h-44 Z M1040 22 h44 v34 h-44 Z M1240 22 h44 v34 h-44 Z M1440 22 h44 v34 h-44 Z"/>
  </g>
  <rect x="0" y="70" width="1600" height="40" fill="url(#bg-fregio)" stroke="#1d1428" stroke-width="3"/>
  <rect x="0" y="108" width="1600" height="10" fill="#e8c26a" stroke="#1d1428" stroke-width="2"/>
  <rect x="0" y="118" width="1600" height="30" fill="#000" opacity=".12"/>
  <!-- zoccolo dipinto lungo il muro -->
  <rect x="0" y="590" width="1600" height="54" fill="#8a5a34" stroke="#1d1428" stroke-width="3"/>
  <rect x="0" y="600" width="1600" height="34" fill="url(#bg-fregio)" opacity=".55"/>

  <!-- ===== PAVIMENTO A PIASTRELLE IN PROSPETTIVA ===== -->
  <g id="bg-pav"></g>

  <!-- ===== IL GRANDE ARCO SUL TIGRI (piano lontano) ===== -->
  <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <path d="M582 590 V330 Q582 182 800 116 Q1018 182 1018 330 V590 Z" fill="#e2c48e"/>
    <path d="M600 576 V334 Q600 198 800 134 Q1000 198 1000 334 V576 Z" fill="url(#bg-fregio)"/>
  </g>
  <g clip-path="url(#bg-clip-finestra)">
    <rect x="600" y="140" width="400" height="430" fill="url(#bg-cielo)"/>
    <circle cx="872" cy="420" r="90" fill="#fff0c0" opacity=".25"/>
    <circle cx="872" cy="420" r="34" fill="#fff4d0"/>
    <!-- nuvolette rosate -->
    <g fill="#f8c8b0" opacity=".7"><ellipse cx="690" cy="260" rx="46" ry="9"/><ellipse cx="730" cy="250" rx="30" ry="7"/><ellipse cx="920" cy="300" rx="40" ry="8"/></g>
    <!-- la riva lontana: le mura rotonde della città e le case a terrazza -->
    <g fill="#a8705a" stroke="#5a3428" stroke-width="2">
      <rect x="610" y="404" width="40" height="40"/><rect x="646" y="396" width="30" height="48"/><rect x="934" y="400" width="44" height="44"/><rect x="900" y="410" width="30" height="34"/>
      <rect x="700" y="408" width="26" height="36"/><rect x="800" y="402" width="34" height="42"/>
    </g>
    <path d="M600 450 Q800 424 1000 450 V470 H600 Z" fill="#c08a64" stroke="#5a3428" stroke-width="2"/>
    <g fill="#c08a64" stroke="#5a3428" stroke-width="1.5">
      <path d="M612 446 h10 v-8 h10 v8 h12 v-9 h10 v9 h12 v-10 h10 v10 h14 v-11 h10 v11 h14 v-12 h10 v12 h16 v-12 h10 v12 h16 v-12 h10 v12 h16 v-11 h10 v11 h14 v-10 h10 v10 h12 v-9 h10 v9 h12 v-8 h10 v8"/>
    </g>
    <circle cx="758" cy="430" r="10" fill="#c08a64" stroke="#5a3428" stroke-width="2"/>
    <!-- palme sulla riva -->
    <g stroke="#2a3020" stroke-width="3" fill="none" stroke-linecap="round">
      <path d="M660 470 Q664 430 656 400 M950 470 Q944 432 954 404 M720 470 Q726 446 722 428"/>
    </g>
    <g fill="#3a4a2a" stroke="#1d2414" stroke-width="2">
      <path d="M656 400 q-26 -6 -40 8 q22 -2 40 -8 q-10 -22 -34 -24 q18 10 34 24 q6 -24 26 -30 q-18 16 -26 30 q20 -10 40 2 q-22 -4 -40 -2 Z"/>
      <path d="M954 404 q-26 -6 -40 8 q22 -2 40 -8 q-10 -22 -34 -24 q18 10 34 24 q6 -24 26 -30 q-18 16 -26 30 q20 -10 40 2 q-22 -4 -40 -2 Z"/>
      <path d="M722 428 q-18 -4 -28 6 q16 -2 28 -6 q-6 -16 -24 -18 q14 8 24 18 q4 -18 20 -22 q-14 12 -20 22 q14 -8 28 2 q-16 -4 -28 -2 Z"/>
    </g>
    <!-- il fiume Tigri con i riflessi del tramonto -->
    <rect x="600" y="468" width="400" height="60" fill="url(#bg-fiume)"/>
    <g stroke="#ffe0a0" stroke-width="3" stroke-linecap="round" opacity=".8">
      <path d="M850 478 h44 M842 490 h60 M858 502 h30 M846 514 h50 M700 484 h20 M940 496 h22"/>
    </g>
    <!-- una barca a vela triangolare -->
    <g stroke="#1d1428" stroke-width="2.5" stroke-linejoin="round">
      <path d="M700 498 Q730 512 768 498 L760 508 Q730 516 708 508 Z" fill="#5a3418"/>
      <path d="M736 500 L736 444" />
      <path d="M738 446 Q770 470 764 496 L738 496 Z" fill="#f2e2c0"/>
    </g>
    <!-- la terrazza con la grata di legno -->
    <rect x="600" y="520" width="400" height="44" fill="url(#bg-grata)" stroke="#1d1428" stroke-width="3"/>
    <rect x="600" y="514" width="400" height="10" fill="#6a3a1e" stroke="#1d1428" stroke-width="2"/>
  </g>
  <path d="M620 560 V336 Q620 214 800 152 Q980 214 980 336 V560 Z" fill="none" stroke="#1d1428" stroke-width="4"/>
  <rect x="590" y="556" width="420" height="26" fill="#d8b880" stroke="#1d1428" stroke-width="4"/>

  <!-- ===== SCAFFALE DEI CODICI A SINISTRA ===== -->
  <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <rect x="160" y="150" width="400" height="460" fill="url(#bg-legno)"/>
    <path d="M150 140 H570 V164 H150 Z" fill="#5a3418"/>
    <path d="M160 164 H560" stroke="#e8c26a" stroke-width="3"/>
    <g id="bg-nicchie"></g>
    <path d="M150 596 H570 V620 H150 Z" fill="#5a3418"/>
  </g>

  <!-- ===== IL CORRIDOIO A DESTRA (secondo arco, più in profondità) ===== -->
  <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <path d="M1066 644 V326 Q1066 222 1220 184 Q1374 222 1374 326 V644 Z" fill="#e2c48e"/>
  </g>
  <g clip-path="url(#bg-clip-corridoio)">
    <rect x="1080" y="190" width="290" height="460" fill="url(#bg-corridoio)"/>
    <!-- pavimento del corridoio che si allontana -->
    <path d="M1090 640 L1180 520 L1260 520 L1350 640 Z" fill="#5a3a22"/>
    <path d="M1120 600 L1320 600 M1146 566 L1294 566 M1166 540 L1274 540" stroke="#2a1a10" stroke-width="2"/>
    <!-- archi più lontani, uno dentro l'altro -->
    <path d="M1150 560 V380 Q1150 320 1220 300 Q1290 320 1290 380 V560" fill="none" stroke="#7a5a3a" stroke-width="10"/>
    <path d="M1180 524 V420 Q1180 380 1220 368 Q1260 380 1260 420 V524 Z" fill="#8a6a44"/>
    <!-- una finestrella in fondo, piena di luce -->
    <path d="M1204 500 V444 Q1204 428 1220 424 Q1236 428 1236 444 V500 Z" fill="#ffe0a0"/>
    <circle cx="1220" cy="470" r="60" fill="url(#bg-alone)"/>
    <!-- uno scaffale che si intravede nel corridoio -->
    <rect x="1096" y="330" width="40" height="230" fill="#3a2214"/>
    <path d="M1096 390 h40 M1096 450 h40 M1096 510 h40" stroke="#1a0a04" stroke-width="3"/>
    <g fill="#8a2a1e"><rect x="1100" y="372" width="30" height="16"/><rect x="1102" y="432" width="28" height="16"/><rect x="1100" y="492" width="32" height="16"/></g>
    <rect x="1080" y="190" width="290" height="460" fill="#000" opacity=".18"/>
  </g>
  <path d="M1090 640 V330 Q1090 240 1220 206 Q1350 240 1350 330 V640" fill="none" stroke="#1d1428" stroke-width="4"/>
  <path d="M1078 640 V328 Q1078 230 1220 194 Q1362 230 1362 328 V640" fill="none" stroke="url(#bg-fregio)" stroke-width="12"/>

  <!-- ===== NICCHIA DELL'ASTROLABIO E LIMONE IN VASO (destra) ===== -->
  <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <path d="M1420 480 V250 Q1420 196 1490 180 Q1560 196 1560 250 V480 Z" fill="#8a6440"/>
    <path d="M1434 470 V256 Q1434 210 1490 196 Q1546 210 1546 256 V470 Z" fill="#5a3a22"/>
    <!-- astrolabio di ottone appeso -->
    <path d="M1490 200 V226" stroke-width="3"/>
    <circle cx="1490" cy="232" r="9" fill="url(#bg-ottone)"/>
    <circle cx="1490" cy="300" r="62" fill="url(#bg-ottone)"/>
    <circle cx="1490" cy="300" r="50" fill="#3a2a10" opacity=".85"/>
    <g fill="none" stroke="#f3c45a" stroke-width="2.5">
      <circle cx="1490" cy="300" r="40"/><circle cx="1500" cy="290" r="22"/>
      <path d="M1450 300 H1530 M1490 260 V340 M1462 272 L1518 328"/>
      <path d="M1470 270 Q1500 260 1520 286 Q1530 310 1508 330"/>
    </g>
    <path d="M1490 300 L1526 276" stroke="#fff6c0" stroke-width="3"/>
    <circle cx="1490" cy="300" r="5" fill="#f3c45a"/>
  </g>
  <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <path d="M1520 520 Q1470 470 1500 420 Q1530 380 1572 400 Q1610 430 1590 480 Q1570 520 1520 520 Z" fill="#3a6a2a"/>
    <path d="M1480 470 Q1460 430 1490 400 Q1520 380 1540 410" fill="#4a7a34"/>
    <g fill="#f0d03a" stroke-width="2"><ellipse cx="1500" cy="440" rx="9" ry="7"/><ellipse cx="1560" cy="420" rx="9" ry="7"/><ellipse cx="1540" cy="480" rx="9" ry="7"/><ellipse cx="1580" cy="460" rx="9" ry="7"/></g>
    <path d="M1540 520 V560" stroke="#5a3418" stroke-width="10"/>
    <path d="M1490 560 L1590 560 L1574 660 Q1540 674 1506 660 Z" fill="url(#bg-turchese)"/>
    <path d="M1496 584 H1586 M1500 620 H1582" stroke="#e8c26a" stroke-width="4"/>
  </g>

  <!-- ===== LANTERNE DI OTTONE ===== -->
  <circle cx="400" cy="250" r="140" fill="url(#bg-alone)"/>
  <circle cx="1220" cy="150" r="120" fill="url(#bg-alone)"/>
  <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round">
    <path d="M400 70 V196 M1220 70 V96" stroke-width="2.5"/>
    <path d="M384 196 L416 196 L424 212 L376 212 Z" fill="url(#bg-ottone)"/>
    <path d="M376 212 L424 212 L432 272 Q400 290 368 272 Z" fill="url(#bg-ottone)"/>
    <g fill="#ffe7a0" stroke="none"><circle cx="390" cy="236" r="4"/><circle cx="410" cy="236" r="4"/><circle cx="400" cy="254" r="4"/><circle cx="384" cy="262" r="3"/><circle cx="416" cy="262" r="3"/></g>
    <path d="M392 282 L408 282 L400 300 Z" fill="url(#bg-ottone)"/>
    <path d="M1204 96 L1236 96 L1244 112 L1196 112 Z" fill="url(#bg-ottone)"/>
    <path d="M1196 112 L1244 112 L1252 162 Q1220 178 1188 162 Z" fill="url(#bg-ottone)"/>
    <g fill="#ffe7a0" stroke="none"><circle cx="1210" cy="132" r="4"/><circle cx="1230" cy="132" r="4"/><circle cx="1220" cy="148" r="4"/></g>
  </g>

  <!-- ===== LA PORTA DEL VAGONE DEL BINARIO 8, a sinistra ===== -->
  <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <rect x="-10" y="170" width="140" height="490" fill="#7a2228"/>
    <rect x="10" y="190" width="100" height="440" rx="6" fill="#4a2018"/>
    <circle cx="60" cy="290" r="34" fill="url(#t8-ottone)"/><circle cx="60" cy="290" r="24" fill="#ffd27a"/>
    <circle cx="96" cy="440" r="7" fill="url(#t8-ottone)"/>
    <path d="M-10 660 H150 L140 690 H-10 Z" fill="url(#t8-ottone-v)"/>
  </g>

  <!-- la luce del tramonto che entra dall'arco e cade sul pavimento -->
  <path d="M620 560 L980 560 L1260 900 L700 900 Z" fill="url(#bg-luce)"/>
  <g id="bg-polvere" fill="#fff4c8"></g>

  <!-- ===== IL TAPPETO ===== -->
  <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <path d="M520 716 L1080 716 L1170 872 L430 872 Z" fill="#e8c26a"/>
    <path d="M540 726 L1060 726 L1140 862 L460 862 Z" fill="url(#bg-tappeto)" stroke-width="3"/>
    <ellipse cx="800" cy="794" rx="150" ry="40" fill="#1a3a5a" stroke="#e8c26a" stroke-width="4"/>
    <ellipse cx="800" cy="794" rx="90" ry="22" fill="#b8302a" stroke="#e8c26a" stroke-width="3"/>
    <path d="M440 872 l-6 12 M470 872 l-4 12 M500 872 l-3 12 M1100 872 l3 12 M1130 872 l4 12 M1160 872 l6 12" stroke="#e8c26a" stroke-width="3"/>
  </g>

  <!-- ===== LO SCRITTOIO BASSO DI AL-KHWARIZMI ===== -->
  <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <ellipse cx="800" cy="712" rx="170" ry="14" fill="#000" opacity=".3" stroke="none"/>
    <path d="M650 618 L950 618 L972 646 L628 646 Z" fill="#8a5a30"/>
    <path d="M628 646 H972 V668 H628 Z" fill="#5a3418"/>
    <g fill="#e8c26a" stroke="none"><circle cx="660" cy="657" r="4"/><circle cx="700" cy="657" r="4"/><circle cx="740" cy="657" r="4"/><circle cx="780" cy="657" r="4"/><circle cx="820" cy="657" r="4"/><circle cx="860" cy="657" r="4"/><circle cx="900" cy="657" r="4"/><circle cx="940" cy="657" r="4"/></g>
    <path d="M646 668 V708 M954 668 V708" stroke-width="12"/>
    <!-- fogli, calamaio di ottone, calami in un bicchiere -->
    <path d="M800 624 L860 620 L866 640 L804 644 Z" fill="#f6ecd0"/>
    <path d="M812 630 h40 M812 636 h34" stroke="#6a5a8a" stroke-width="2"/>
    <path d="M872 610 Q870 630 880 634 L900 634 Q910 630 908 610 Z" fill="url(#bg-ottone)"/>
    <ellipse cx="890" cy="610" rx="18" ry="5" fill="#1a1020"/>
    <path d="M918 600 L926 636 L944 636 L950 600 Z" fill="#3a6a8a"/>
    <path d="M926 600 L914 560 M934 600 L936 552 M942 600 L956 562" stroke="#c89a5a" stroke-width="4"/>
    <!-- la ciotola dei datteri -->
    <path d="M660 616 Q662 638 690 640 Q718 638 720 616 Z" fill="url(#bg-turchese)"/>
    <g fill="#6a2a14" stroke-width="2"><ellipse cx="676" cy="612" rx="9" ry="6"/><ellipse cx="692" cy="608" rx="9" ry="6"/><ellipse cx="706" cy="613" rx="9" ry="6"/><ellipse cx="690" cy="616" rx="8" ry="5"/></g>
  </g>

  <!-- ===== LA GIARA DELL'ACQUA FRESCA (sinistra, in primo piano) ===== -->
  <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <path d="M270 720 L380 720 L370 760 L280 760 Z" fill="#5a3418"/>
    <path d="M290 760 L284 800 M360 760 L366 800" stroke-width="8"/>
    <path d="M296 600 Q262 640 280 690 Q300 724 326 726 Q352 724 372 690 Q390 640 356 600 Z" fill="#c88a5a"/>
    <path d="M300 600 L352 600 L346 580 L306 580 Z" fill="#b87a4a"/>
    <path d="M290 640 Q326 650 362 640" fill="none" stroke="#8a5a34" stroke-width="3"/>
    <g fill="#9ad0f0" stroke-width="2"><path d="M326 732 Q322 740 326 746 Q330 740 326 732 Z"/></g>
    <path d="M300 790 Q326 806 352 790 L348 778 Q326 788 304 778 Z" fill="url(#bg-ottone)"/>
    <ellipse cx="326" cy="782" rx="22" ry="5" fill="#6aa8d0"/>
  </g>

  <!-- ===== PILA DI FOGLI E CODICI A TERRA ===== -->
  <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round">
    <path d="M470 690 L560 690 L566 704 L464 704 Z" fill="#2a5a6a"/>
    <path d="M474 676 L556 676 L560 690 L470 690 Z" fill="#8a2a1e"/>
    <path d="M480 662 L552 662 L556 676 L474 676 Z" fill="#c89a3a"/>
    <path d="M486 650 L540 646 L548 660 L484 664 Z" fill="#f6ecd0"/>
  </g>

  <!-- ===== IL TAVOLO DEL RILEGATORE (destra) ===== -->
  <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <ellipse cx="1290" cy="736" rx="150" ry="12" fill="#000" opacity=".3" stroke="none"/>
    <path d="M1150 616 L1420 616 L1438 640 L1132 640 Z" fill="#8a5a30"/>
    <path d="M1132 640 H1438 V660 H1132 Z" fill="#5a3418"/>
    <path d="M1150 660 V730 M1420 660 V730" stroke-width="12"/>
    <path d="M1150 700 H1420" stroke-width="6"/>
    <!-- un codice a metà rilegatura, aperto -->
    <path d="M1170 620 Q1210 600 1250 616 Q1290 600 1330 620 L1326 632 Q1290 616 1250 630 Q1210 616 1174 632 Z" fill="#f6ecd0"/>
    <path d="M1250 616 V630" stroke-width="2"/>
    <path d="M1186 616 h40 M1268 612 h44" stroke="#8a7a6a" stroke-width="2"/>
    <!-- vasetto della colla con il pennello -->
    <path d="M1162 596 L1190 596 L1186 624 L1166 624 Z" fill="#c8b890"/>
    <path d="M1180 600 L1196 566" stroke="#7a4a26" stroke-width="5"/>
    <!-- cuscinetto degli aghi -->
    <ellipse cx="1404" cy="616" rx="18" ry="8" fill="#b8302a"/>
    <path d="M1398 610 L1394 594 M1408 610 L1412 596" stroke="#c8c8d8" stroke-width="2"/>
  </g>

  <!-- ===== IL CUSCINO GRANDE (dove finirà Dattero) ===== -->
  <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <path d="M1296 838 Q1290 800 1320 790 L1444 790 Q1470 800 1464 838 Q1380 856 1296 838 Z" fill="#2a5a7a"/>
    <path d="M1310 814 Q1380 826 1452 814" fill="none" stroke="#e8c26a" stroke-width="4"/>
    <g fill="#e8c26a"><circle cx="1296" cy="836" r="7"/><circle cx="1464" cy="836" r="7"/><circle cx="1322" cy="792" r="6"/><circle cx="1444" cy="792" r="6"/></g>
  </g>

  <!-- ombra intorno ai bordi -->
  <rect width="1600" height="900" fill="url(#bg-vignetta)"/>
`, function (svg) {
  /* le nicchie dello scaffale: codici sdraiati uno sull'altro e rotoli legati (sempre uguali: seme fisso) */
  var seme = 11, out = "";
  function caso() { seme = (seme * 9301 + 49297) % 233280; return seme / 233280; }
  var colori = ["#8a2a1e", "#2a5a6a", "#c89a3a", "#4a3a6a", "#6a4a2a", "#3a6a3a", "#a8502a"];
  for (var r = 0; r < 3; r++) {
    for (var c = 0; c < 3; c++) {
      var x = 176 + c * 128, y = 178 + r * 140, w = 112, h = 124;
      out += '<path d="M' + x + " " + (y + h) + " V" + (y + 36) + " Q" + x + " " + y + " " + (x + w / 2) + " " + (y - 2) + " Q" + (x + w) + " " + y + " " + (x + w) + " " + (y + 36) + " V" + (y + h) +
        ' Z" fill="#2a160c" stroke="#1d1428" stroke-width="3"/>';
      out += '<path d="M' + (x + 4) + " " + (y + h - 2) + " H" + (x + w - 4) + '" stroke="#000" stroke-width="6" opacity=".35"/>';
      var fondo = y + h - 4;
      if ((r + c) % 3 === 1) {
        // rotoli legati con il nastro
        for (var k = 0; k < 4; k++) {
          var ry = fondo - 14 - (k % 2) * 16 - Math.floor(k / 2) * 30, rx = x + 10 + (k % 2) * 8;
          out += '<rect x="' + rx + '" y="' + ry + '" width="' + (w - 26) + '" height="16" rx="8" fill="#e8d8a8" stroke="#1d1428" stroke-width="2"/>';
          out += '<rect x="' + (rx + 30 + k * 6) + '" y="' + ry + '" width="5" height="16" fill="' + colori[k] + '"/>';
        }
      } else {
        // codici sdraiati, di misure diverse
        var yy = fondo, quanti = 4 + Math.floor(caso() * 3);
        for (var b = 0; b < quanti && yy > y + 40; b++) {
          var bh = 9 + Math.floor(caso() * 8), bw = 70 + Math.floor(caso() * 32), bx = x + 6 + Math.floor(caso() * (w - bw - 10));
          yy -= bh;
          out += '<rect x="' + bx + '" y="' + yy + '" width="' + bw + '" height="' + bh + '" rx="2" fill="' + colori[Math.floor(caso() * colori.length)] + '" stroke="#1d1428" stroke-width="2"/>';
          out += '<path d="M' + (bx + 4) + " " + (yy + bh / 2) + " H" + (bx + bw - 4) + '" stroke="#f6ecd0" stroke-width="1.5" opacity=".5"/>';
        }
      }
    }
  }
  var nicchie = svg.querySelector("#bg-nicchie");
  if (nicchie) nicchie.innerHTML = out;

  /* il pavimento di piastrelle smaltate, in prospettiva, con una stellina in ogni piastrella */
  var pav = svg.querySelector("#bg-pav");
  if (pav) {
    var vx = 800, vy = 300, alto = 644, basso = 900, p = "";
    function ax(xb, yy) { return vx + (xb - vx) * (yy - vy) / (basso - vy); }
    var righe = [0, 0.1, 0.22, 0.36, 0.52, 0.7, 0.88, 1.08];
    for (var i = 0; i < righe.length - 1; i++) {
      var y1 = alto + (basso - alto) * Math.min(1, righe[i]), y2 = alto + (basso - alto) * Math.min(1, righe[i + 1]);
      if (y1 >= basso) break;
      y2 = Math.min(y2, basso);
      for (var j = -16; j < 16; j++) {
        var b1 = vx + j * 110, b2 = b1 + 110;
        var colore = (i + j) % 2 === 0 ? "#c8784a" : "#2a7a84";
        p += '<path d="M' + ax(b1, y1).toFixed(1) + " " + y1.toFixed(1) + " L" + ax(b2, y1).toFixed(1) + " " + y1.toFixed(1) + " L" + ax(b2, y2).toFixed(1) + " " + y2.toFixed(1) + " L" + ax(b1, y2).toFixed(1) + " " + y2.toFixed(1) +
          ' Z" fill="' + colore + '" stroke="#3a1e10" stroke-width="2"/>';
        var cx = (ax(b1, (y1 + y2) / 2) + ax(b2, (y1 + y2) / 2)) / 2, cy = (y1 + y2) / 2, s = (y2 - y1) * 0.32, sx = (ax(b2, cy) - ax(b1, cy)) * 0.2;
        p += '<path d="M' + cx.toFixed(1) + " " + (cy - s).toFixed(1) + " L" + (cx + sx).toFixed(1) + " " + cy.toFixed(1) + " L" + cx.toFixed(1) + " " + (cy + s).toFixed(1) + " L" + (cx - sx).toFixed(1) + " " + cy.toFixed(1) +
          ' Z" fill="' + ((i + j) % 2 === 0 ? "#f3d08a" : "#8ad8d8") + '" opacity=".75"/>';
      }
    }
    p += '<rect y="' + alto + '" width="1600" height="40" fill="#000" opacity=".3"/>';
    pav.innerHTML = p;
  }
  Grafica.polvere(svg.querySelector("#bg-polvere"), { x: 640, y: 560, larghezza: 520, altezza: 320, quanti: 70 });
});
