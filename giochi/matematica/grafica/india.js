/* Gioco di Matematica · terze · Capitolo 1: BHILLAMALA (oggi Bhinmal, India), ANNO 628.
   Il cortile dove lavora Brahmagupta, all'alba. Di Brahmagupta non esistono ritratti: abiti semplici del periodo,
   nessun segno religioso, nessuna caricatura. Muri di arenaria con archi, una vasca d'acqua, uno gnomone
   (asta verticale per misurare le ombre: Brahmagupta era astronomo), lo scrittoio dello "scrivano"
   e la TAVOLA DELLE REGOLE appesa al muro, con quattro incavi (le tessere sono "elementi"). */
Grafica.definizioni(`
  <linearGradient id="in-cielo" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#5a8ad0"/><stop offset=".6" stop-color="#f8c890"/><stop offset="1" stop-color="#ffe0b0"/>
  </linearGradient>
  <linearGradient id="in-arenaria" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#d89a6a"/><stop offset="1" stop-color="#b0704a"/>
  </linearGradient>
  <linearGradient id="in-pietra" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#c88a5a"/><stop offset="1" stop-color="#8a5a3a"/>
  </linearGradient>
  <linearGradient id="in-acqua" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#6ac0d8"/><stop offset="1" stop-color="#2a7a9a"/>
  </linearGradient>
  <linearGradient id="in-scialle" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#2a3a7a"/><stop offset=".55" stop-color="#3e5aa8"/><stop offset="1" stop-color="#4a6ac0"/>
  </linearGradient>
  <linearGradient id="in-pelle" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#7a4a2a"/><stop offset=".55" stop-color="#a06a44"/><stop offset="1" stop-color="#b47a50"/>
  </linearGradient>

  <!-- ===== BRAHMAGUPTA (tre quarti; piedi in 0,0) ===== -->
  <symbol id="brahmagupta" viewBox="-110 -600 230 615" overflow="visible">
    <ellipse cx="0" cy="0" rx="66" ry="11" fill="#000" opacity=".4"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <!-- veste bianca lunga fino alle caviglie -->
      <path d="M-46 -300 C-54 -200 -60 -100 -58 -24 L58 -24 C60 -100 54 -200 46 -300 Z" fill="#f6efe0"/>
      <path d="M-10 -296 L-16 -24 M14 -296 L22 -24" stroke="#d8ccb0" stroke-width="3"/>
      <path d="M-58 -40 L58 -40" stroke="#c8a24a" stroke-width="5"/>
      <!-- piedi con sandali -->
      <path d="M-40 -24 L-12 -24 L-10 -4 Q-10 2 -16 2 L-46 2 Q-50 -10 -40 -24 Z M10 -24 L36 -24 Q50 -12 54 0 L12 2 Z" fill="url(#in-pelle)"/>
      <path d="M-48 0 L-8 0 M10 0 L54 0" stroke="#5a3418" stroke-width="5"/>
      <!-- busto con la veste e lo scialle blu sulla spalla -->
      <path d="M-46 -446 C-58 -400 -56 -340 -48 -290 Q0 -278 48 -290 C56 -340 58 -400 46 -446 Q0 -458 -46 -446 Z" fill="#f6efe0"/>
      <path d="M-46 -446 Q-10 -430 30 -300 L50 -296 Q30 -380 46 -446 Z" fill="url(#in-scialle)"/>
      <path d="M-46 -446 C-70 -400 -66 -330 -60 -230 L-30 -230 C-36 -330 -30 -400 -20 -440 Z" fill="url(#in-scialle)"/>
      <path d="M-58 -244 L-32 -244" stroke="#c8a24a" stroke-width="4"/>
      <!-- braccio con una foglia di palma scritta (manoscritto) -->
      <path d="M44 -436 C60 -404 64 -374 64 -350 C64 -330 70 -316 78 -304" fill="none" stroke="#1d1428" stroke-width="25"/>
      <path d="M44 -436 C60 -404 64 -374 64 -350 C64 -330 70 -316 78 -304" fill="none" stroke="#f6efe0" stroke-width="19"/>
      <ellipse cx="80" cy="-298" rx="9" ry="10" fill="url(#in-pelle)"/>
      <rect x="66" y="-318" width="80" height="18" rx="6" fill="#e8d098" transform="rotate(-24 80 -300)"/>
      <path d="M76 -312 H136 M76 -306 H130" stroke="#5a3a1a" stroke-width="1.5" transform="rotate(-24 80 -300)"/>
      <path d="M-48 -430 C-60 -400 -62 -370 -58 -350" fill="none" stroke="#1d1428" stroke-width="25"/>
      <path d="M-48 -430 C-60 -400 -62 -370 -58 -350" fill="none" stroke="url(#in-scialle)" stroke-width="19"/>
      <!-- collo e testa -->
      <path d="M-8 -470 L-10 -444 L14 -444 L12 -470 Z" fill="url(#in-pelle)"/>
      <path d="M-26 -524 C-28 -492 -20 -472 2 -466 C20 -462 32 -474 36 -492 C40 -508 38 -528 32 -542 C20 -558 -18 -558 -26 -524 Z" fill="url(#in-pelle)"/>
      <path d="M-22 -508 Q-32 -512 -30 -498 Q-28 -488 -20 -492" fill="#8a5434"/>
      <!-- capelli neri raccolti in uno chignon -->
      <path d="M-30 -514 C-36 -550 -12 -566 8 -566 C30 -564 42 -550 38 -526 C28 -546 10 -550 -6 -546 C-18 -542 -26 -532 -30 -514 Z" fill="#1a1414"/>
      <circle cx="-6" cy="-570" r="16" fill="#1a1414"/>
      <!-- viso con barba corta -->
      <path d="M-4 -510 Q6 -518 16 -510" fill="none" stroke-width="3"/>
      <path d="M21 -509 Q28 -516 35 -509" fill="none" stroke-width="3"/>
      <circle cx="6" cy="-509" r="2.8" fill="#1d1428" stroke="none"/><circle cx="28" cy="-508" r="2.5" fill="#1d1428" stroke="none"/>
      <path d="M-6 -524 Q4 -530 14 -524 M20 -523 Q28 -528 36 -522" fill="none" stroke="#1a1414" stroke-width="4"/>
      <path d="M24 -502 Q30 -492 25 -488" fill="none" stroke="#5a3418" stroke-width="3"/>
      <path d="M-20 -490 Q-18 -462 4 -458 Q26 -456 36 -480 Q30 -476 24 -480 Q14 -470 4 -476 Q-8 -474 -20 -490 Z" fill="#1a1414"/>
      <path d="M10 -482 Q18 -478 26 -484" fill="none" stroke="#f6efe0" stroke-width="2.5"/>
    </g>
  </symbol>

  <!-- ===== Madama Parolona travestita da scrivano pubblico: baffi finti, occhialoni, berretto... e le solite piume ===== -->
  <symbol id="parolona-scrivano" viewBox="-150 -720 300 735" overflow="visible">
    <use href="#parolona" x="-150" y="-700" width="300" height="715"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round">
      <!-- mantello color sabbia sopra l'abito -->
      <path d="M-66 -470 Q0 -440 66 -470 L120 -20 Q0 0 -120 -20 Z" fill="#c8b48a" opacity=".96"/>
      <path d="M-100 -200 Q0 -180 100 -200 M-110 -110 Q0 -90 110 -110" fill="none" stroke="#a8946a" stroke-width="3"/>
      <!-- berretto morbido: le piume spuntano lo stesso -->
      <path d="M-62 -596 Q0 -640 66 -596 Q70 -576 0 -572 Q-66 -576 -62 -596 Z" fill="#6a5a3a"/>
      <!-- occhialoni rotondi e baffoni finti, un po' storti -->
      <circle cx="-2" cy="-548" r="15" fill="#fff" fill-opacity=".25" stroke-width="4"/>
      <circle cx="27" cy="-548" r="15" fill="#fff" fill-opacity=".25" stroke-width="4"/>
      <path d="M13 -548 L12 -548" stroke-width="4"/>
      <path d="M-26 -512 Q-6 -530 12 -516 Q30 -532 48 -508 Q30 -504 12 -508 Q-6 -500 -26 -512 Z" fill="#3a2a1a" transform="rotate(-6 12 -514)"/>
      <!-- un lungo rotolo scritto fitto fitto -->
      <path d="M70 -330 L76 -120" stroke="none"/>
      <rect x="40" y="-330" width="70" height="230" fill="#f6ecd8"/>
      <path d="M48 -310 H102 M48 -294 H96 M48 -278 H102 M48 -262 H90 M48 -246 H102 M48 -230 H98 M48 -214 H102 M48 -198 H92 M48 -182 H102 M48 -166 H96 M48 -150 H100 M48 -134 H94" stroke="#7a2f8e" stroke-width="2"/>
      <rect x="34" y="-340" width="82" height="14" rx="7" fill="#c8a24a"/>
    </g>
  </symbol>

  <!-- icone (140 × 140) -->
  <symbol id="ogg-tessere" viewBox="0 0 140 140">
    <ellipse cx="70" cy="124" rx="44" ry="6" fill="#000" opacity=".25"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round">
      <path d="M28 60 L112 60 L104 120 L36 120 Z" fill="#c8a868"/>
      <path d="M32 74 H108 M34 90 H106 M35 106 H105" stroke="#8a6a3a" stroke-width="2"/>
      <rect x="40" y="30" width="30" height="38" rx="4" fill="#f6ecd8" transform="rotate(-10 55 49)"/>
      <rect x="72" y="26" width="30" height="38" rx="4" fill="#f6ecd8" transform="rotate(8 87 45)"/>
      <path d="M48 44 h14 M55 37 v14 M80 44 h14" stroke="#c8302a" stroke-width="3" transform="rotate(-2 70 44)"/>
    </g>
  </symbol>
  <!-- gli occhialoni finti dello scrivano: ottone lucido (piacciono tanto al pappagallo) -->
  <symbol id="ogg-occhiali" viewBox="0 0 140 140">
    <ellipse cx="70" cy="112" rx="50" ry="6" fill="#000" opacity=".25"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round">
      <circle cx="44" cy="74" r="24" fill="#dff4ff" fill-opacity=".5" stroke="url(#t8-ottone)" stroke-width="8"/>
      <circle cx="96" cy="74" r="24" fill="#dff4ff" fill-opacity=".5" stroke="url(#t8-ottone)" stroke-width="8"/>
      <circle cx="44" cy="74" r="28" fill="none"/><circle cx="96" cy="74" r="28" fill="none"/>
      <path d="M68 70 Q70 64 72 70" fill="none" stroke="url(#t8-ottone)" stroke-width="6"/>
      <path d="M34 64 Q40 58 48 60 M86 64 Q92 58 100 60" fill="none" stroke="#fff" stroke-width="3"/>
    </g>
  </symbol>
  <!-- il pappagallo verde, appollaiato: corpo comune, poi con la tessera nel becco o con gli occhialoni -->
  <linearGradient id="pp-verde" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#6ee07a"/><stop offset=".55" stop-color="#34b050"/><stop offset="1" stop-color="#1f7a3a"/>
  </linearGradient>
  <linearGradient id="pp-coda" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#2a6ad8"/><stop offset=".75" stop-color="#2a4ab0"/><stop offset="1" stop-color="#e0402f"/>
  </linearGradient>
  <!-- il pappagallo VISTO DI FRONTE, appollaiato sul bordo dell'arco (zampe a y 126, centro x 60):
       due occhi, becco ricurvo al centro, così gli occhialoni stanno davvero sul becco -->
  <g id="papp-corpo" stroke="#1d1428" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round">
    <!-- coda che pende dietro -->
    <path d="M52 108 L46 158 L60 160 L74 158 L68 108 Z" fill="url(#pp-coda)"/>
    <path d="M60 112 L60 158" stroke="#1a3a8a" stroke-width="1.5"/>
    <!-- ali chiuse ai due lati -->
    <path d="M38 66 C22 84 24 112 42 126 C40 106 38 86 44 70 Z" fill="#1f8a3e"/>
    <path d="M82 66 C98 84 96 112 78 126 C80 106 82 86 76 70 Z" fill="#1f8a3e"/>
    <path d="M32 96 Q36 112 42 124 Q34 116 30 104 Z M88 96 Q84 112 78 124 Q86 116 90 104 Z" fill="#2a6ad8"/>
    <path d="M30 84 Q36 88 40 96 M90 84 Q84 88 80 96" fill="none" stroke="#14602a" stroke-width="2"/>
    <!-- corpo con il petto chiaro -->
    <path d="M38 62 C30 84 34 112 60 122 C86 112 90 84 82 62 C76 50 44 50 38 62 Z" fill="url(#pp-verde)"/>
    <path d="M48 72 C44 90 48 108 60 116 C72 108 76 90 72 72 C66 66 54 66 48 72 Z" fill="#a8ec98" stroke="none" opacity=".7"/>
    <path d="M52 84 Q60 88 68 84 M50 96 Q60 100 70 96" fill="none" stroke="#5ab060" stroke-width="1.5"/>
    <!-- zampe grigie che stringono il bordo -->
    <path d="M52 118 L50 126 M56 119 L56 126 M64 119 L64 126 M68 118 L70 126" stroke="#6a6a7a" stroke-width="4"/>
    <path d="M45 127 Q50 123 55 127 M65 127 Q70 123 75 127" fill="none" stroke="#6a6a7a" stroke-width="3"/>
    <!-- testa tonda, ciuffo rosso, guance gialle -->
    <path d="M36 40 C36 20 48 12 60 12 C72 12 84 20 84 40 C84 56 72 62 60 62 C48 62 36 56 36 40 Z" fill="#4fd06a"/>
    <path d="M50 16 Q52 0 60 8 Q66 -2 70 14 Q64 10 60 14 Q56 10 50 16 Z" fill="#e8402f"/>
    <ellipse cx="44" cy="47" rx="7" ry="5" fill="#f6d84a" stroke="none" opacity=".85"/>
    <ellipse cx="76" cy="47" rx="7" ry="5" fill="#f6d84a" stroke="none" opacity=".85"/>
    <!-- due occhi con l'anello bianco -->
    <circle cx="47" cy="33" r="7" fill="#fff"/><circle cx="73" cy="33" r="7" fill="#fff"/>
    <circle cx="48" cy="33" r="3.8" fill="#f0a030" stroke-width="1.5"/><circle cx="72" cy="33" r="3.8" fill="#f0a030" stroke-width="1.5"/>
    <circle cx="48" cy="33" r="2" fill="#1d1428" stroke="none"/><circle cx="72" cy="33" r="2" fill="#1d1428" stroke="none"/>
    <circle cx="47" cy="31.6" r=".9" fill="#fff" stroke="none"/><circle cx="71" cy="31.6" r=".9" fill="#fff" stroke="none"/>
    <!-- becco ricurvo al centro, visto di fronte -->
    <path d="M53 36 C53 28 67 28 67 36 C67 46 63 52 60 58 C57 52 53 46 53 36 Z" fill="#f0b040"/>
    <path d="M57 34 L57.5 35 M63 34 L62.5 35" stroke-width="2"/>
    <path d="M55 46 Q60 54 65 46 Q63 52 60 53 Q57 52 55 46 Z" fill="#3a3a3a"/>
  </g>
  <symbol id="papp-tessera" viewBox="0 0 120 160">
    <use href="#papp-corpo"/>
    <!-- la tessera stretta nella punta del becco -->
    <g stroke="#1d1428" stroke-width="2.5" transform="rotate(-8 60 66)">
      <rect x="48" y="54" width="24" height="30" rx="3" fill="#f6ecd8"/>
      <path d="M54 66 h12 M60 60 v12" stroke-width="2.5"/>
    </g>
    <path d="M57 52 Q60 58 63 52" fill="#f0b040" stroke="#1d1428" stroke-width="2"/>
  </symbol>
  <symbol id="papp-occhiali" viewBox="0 0 120 160">
    <use href="#papp-corpo"/>
    <!-- gli occhialoni d'ottone, frontali: lenti sugli occhi, ponte sul becco, stanghette ai lati della testa -->
    <g stroke-linecap="round" fill="none">
      <path d="M34 32 L28 36 M86 32 L92 36" stroke="#1d1428" stroke-width="7"/>
      <path d="M34 32 L28 36 M86 32 L92 36" stroke="#f3c45a" stroke-width="4"/>
      <path d="M57 30 Q60 25 63 30" stroke="#1d1428" stroke-width="7"/>
      <path d="M57 30 Q60 25 63 30" stroke="#f3c45a" stroke-width="4"/>
      <circle cx="47" cy="33" r="11" fill="#dff4ff" fill-opacity=".35" stroke="#1d1428" stroke-width="8"/>
      <circle cx="73" cy="33" r="11" fill="#dff4ff" fill-opacity=".35" stroke="#1d1428" stroke-width="8"/>
      <circle cx="47" cy="33" r="11" stroke="url(#t8-ottone)" stroke-width="5"/>
      <circle cx="73" cy="33" r="11" stroke="url(#t8-ottone)" stroke-width="5"/>
      <path d="M40 28 Q43 24 48 25 M66 28 Q69 24 74 25" stroke="#fff" stroke-width="2.5"/>
      <!-- luccichii -->
      <path d="M30 12 L32 18 L38 20 L32 22 L30 28 L28 22 L22 20 L28 18 Z" fill="#fff8c0" stroke="#e8b84a" stroke-width="1"/>
      <path d="M92 14 L93 17 L96 18 L93 19 L92 22 L91 19 L88 18 L91 17 Z" fill="#fff8c0" stroke="#e8b84a" stroke-width="1"/>
    </g>
  </symbol>
  <symbol id="ogg-tessera" viewBox="0 0 140 140">
    <ellipse cx="70" cy="122" rx="40" ry="6" fill="#000" opacity=".25"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round">
      <rect x="34" y="26" width="72" height="88" rx="8" fill="#f6ecd8" transform="rotate(-6 70 70)"/>
      <path d="M50 58 h18 M59 49 v18 M76 76 h18" stroke="#1d1428" stroke-width="4" transform="rotate(-6 70 70)"/>
      <path d="M40 34 Q56 40 60 30 M88 104 Q96 96 100 106" fill="none" stroke="#6ac0d8" stroke-width="4"/>
    </g>
  </symbol>
`);

Grafica.sfondo("india", `
  <rect width="1600" height="900" fill="url(#in-cielo)"/>
  <circle cx="1220" cy="250" r="70" fill="#fff0c0" opacity=".85"/>
  <circle cx="1220" cy="250" r="130" fill="#fff0c0" opacity=".2"/>
  <!-- alberi lontani oltre il muro -->
  <g fill="#5a7a4a" opacity=".8"><circle cx="300" cy="300" r="70"/><circle cx="380" cy="270" r="60"/><circle cx="1500" cy="290" r="80"/><circle cx="1420" cy="320" r="56"/></g>
  <!-- muro di arenaria con tre archi -->
  <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <path d="M0 330 H1600 V660 H0 Z" fill="url(#in-arenaria)"/>
    <path d="M0 316 H1600 V340 H0 Z" fill="#b0704a"/>
    <g fill="#7a4a2a">
      <path d="M170 660 V470 Q260 380 350 470 V660 Z"/>
      <path d="M1250 660 V470 Q1340 380 1430 470 V660 Z"/>
    </g>
    <g fill="url(#in-cielo)" opacity=".8">
      <path d="M190 660 V480 Q260 410 330 480 V660 Z"/>
      <path d="M1270 660 V480 Q1340 410 1410 480 V660 Z"/>
    </g>
    <g fill="none" stroke="#8a5a3a" stroke-width="3" opacity=".7">
      <path d="M0 400 H170 M350 400 H1250 M1430 400 H1600 M0 470 H170 M350 470 H1250 M1430 470 H1600 M0 540 H170 M350 540 H1250 M1430 540 H1600 M0 610 H170 M350 610 H1250 M1430 610 H1600"/>
    </g>
  </g>
  <!-- la tavola delle regole appesa al muro (gli incavi sono disegnati qui; le tessere sono elementi) -->
  <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <rect x="560" y="370" width="480" height="210" rx="10" fill="#6a3a1e"/>
    <rect x="574" y="384" width="452" height="182" rx="6" fill="#8a5a32"/>
    <g fill="#4a2414"><rect x="592" y="452" width="96" height="96" rx="6"/><rect x="702" y="452" width="96" height="96" rx="6"/><rect x="812" y="452" width="96" height="96" rx="6"/><rect x="922" y="452" width="96" height="96" rx="6"/></g>
    <path d="M590 400 H1010" stroke="#c8a24a" stroke-width="4"/>
  </g>
  <!-- pavimento di lastre -->
  <path d="M0 660 H1600 V900 H0 Z" fill="url(#in-pietra)"/>
  <g stroke="#6a4028" stroke-width="3" opacity=".7" fill="none">
    <path d="M0 700 H1600 M0 760 H1600 M0 830 H1600"/>
    <path d="M200 660 L120 900 M500 660 L450 900 M800 660 V900 M1100 660 L1150 900 M1400 660 L1480 900"/>
  </g>
  <rect y="660" width="1600" height="22" fill="#000" opacity=".2"/>
  <!-- gnomone su una piattaforma: l'asta che misura le ombre del sole -->
  <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <path d="M1120 760 L1300 760 L1320 800 L1100 800 Z" fill="#d8a878"/>
    <rect x="1204" y="560" width="12" height="200" fill="#5a3a1e"/>
    <path d="M1216 760 L1310 790" stroke="#3a2a1a" stroke-width="10" opacity=".35"/>
    <path d="M1130 780 H1290" stroke="#8a5a3a" stroke-width="2"/>
  </g>
  <!-- vasca d'acqua di pietra, a sinistra -->
  <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <path d="M240 720 L560 720 L580 800 L220 800 Z" fill="#a87a52"/>
    <ellipse cx="400" cy="722" rx="150" ry="22" fill="url(#in-acqua)"/>
    <path d="M300 718 Q330 712 360 718 M430 726 Q460 720 490 726" fill="none" stroke="#fff" stroke-width="3" opacity=".7"/>
    <path d="M220 800 H580 V820 H220 Z" fill="#8a5a3a"/>
  </g>
  <!-- angolo con le stoviglie: giara e appendino -->
  <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <path d="M70 640 Q40 700 70 760 L130 760 Q160 700 130 640 Z" fill="#b8603a"/>
    <path d="M76 640 H124 V626 H76 Z" fill="#8a4a2a"/>
    <path d="M40 420 H150" stroke="#5a3a1e" stroke-width="8"/>
    <path d="M60 420 V444 M100 420 V444 M140 420 V444" stroke-width="3"/>
  </g>
  <!-- scrittoio dello "scrivano" con un tappeto, a destra -->
  <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <path d="M1280 820 L1560 820 L1590 880 L1250 880 Z" fill="#8a2a3a"/>
    <path d="M1300 830 H1540 M1290 850 H1556 M1280 868 H1570" stroke="#e8c26a" stroke-width="3"/>
    <path d="M1360 720 L1520 720 L1530 750 L1350 750 Z" fill="#7a4a2a"/>
    <path d="M1370 750 V810 M1510 750 V810" stroke-width="8"/>
  </g>
  <!-- a sinistra in fondo la porta del vagone del Binario 8 -->
  <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <rect x="-10" y="300" width="150" height="420" fill="#7a2228"/>
    <rect x="10" y="320" width="100" height="380" rx="6" fill="#4a2018"/>
    <circle cx="60" cy="410" r="30" fill="url(#t8-ottone)"/><circle cx="60" cy="410" r="21" fill="#ffd27a"/>
    <circle cx="96" cy="540" r="7" fill="url(#t8-ottone)"/>
    <path d="M-10 720 H150 L140 748 H-10 Z" fill="url(#t8-ottone-v)"/>
  </g>
`);
