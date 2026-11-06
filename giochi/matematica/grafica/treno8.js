/* Gioco di Matematica · terze · Capitolo 1: l'interno del vagone del BINARIO 8 (tutorial).
   Legno scuro e ottone, finestrini ghiacciati (fuori è notte e nevica sulla banchina),
   il portabagagli in alto è una sbarra con le tacche e la freccia: una retta dei numeri.
   A destra la porta della cabina con il selettore delle epoche.
   Termometro, valigie, Penna, carta-parola sono "elementi" della stanza (cambiano durante il gioco). */
Grafica.definizioni(`
  <linearGradient id="t8-legno" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#3a1a16"/><stop offset=".5" stop-color="#5e2c22"/><stop offset="1" stop-color="#3e1c18"/>
  </linearGradient>
  <linearGradient id="t8-legno-o" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#4a2018"/><stop offset=".5" stop-color="#7a3a28"/><stop offset="1" stop-color="#4a2018"/>
  </linearGradient>
  <linearGradient id="t8-soffitto" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#140c14"/><stop offset="1" stop-color="#3a2228"/>
  </linearGradient>
  <linearGradient id="t8-notte" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#0a1030"/><stop offset=".7" stop-color="#1e2a5a"/><stop offset="1" stop-color="#3a4070"/>
  </linearGradient>
  <linearGradient id="t8-velluto" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#2c6a4a"/><stop offset="1" stop-color="#173c2a"/>
  </linearGradient>
  <linearGradient id="t8-ottone" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#6e4a16"/><stop offset=".35" stop-color="#f3c45a"/><stop offset=".6" stop-color="#c8922e"/><stop offset="1" stop-color="#5a3a10"/>
  </linearGradient>
  <linearGradient id="t8-ottone-v" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#f3c45a"/><stop offset="1" stop-color="#7a5418"/>
  </linearGradient>
  <radialGradient id="t8-luce" cx="50%" cy="0%" r="100%">
    <stop offset="0" stop-color="#ffe0a0" stop-opacity=".55"/><stop offset="1" stop-color="#ffe0a0" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="t8-brina" cx="50%" cy="50%" r="70%">
    <stop offset=".45" stop-color="#e8f4ff" stop-opacity="0"/><stop offset=".85" stop-color="#e8f4ff" stop-opacity=".55"/><stop offset="1" stop-color="#ffffff" stop-opacity=".9"/>
  </radialGradient>

  <!-- icone degli oggetti (140 × 140) -->
  <symbol id="ogg-termometro" viewBox="0 0 140 140">
    <ellipse cx="70" cy="128" rx="30" ry="5" fill="#000" opacity=".25"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round">
      <rect x="48" y="10" width="44" height="114" rx="10" fill="#8a5a32"/>
      <rect x="64" y="18" width="12" height="84" rx="6" fill="#f6fbff"/>
      <circle cx="70" cy="106" r="11" fill="#d83a2a"/>
      <rect x="67" y="68" width="6" height="36" fill="#d83a2a" stroke="none"/>
      <path d="M54 30 H62 M54 46 H62 M54 62 H62 M54 78 H62 M54 94 H62 M80 38 H86 M80 54 H86 M80 70 H86 M80 86 H86" stroke-width="2"/>
      <path d="M52 62 H64" stroke="#2a6ad8" stroke-width="3"/>
    </g>
  </symbol>
  <symbol id="ogg-biglietto8" viewBox="0 0 140 140">
    <ellipse cx="70" cy="122" rx="48" ry="6" fill="#000" opacity=".25"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round" transform="rotate(-8 70 70)">
      <path d="M14 40 H126 V58 Q118 70 126 82 V100 H14 V82 Q22 70 14 58 Z" fill="#f6e7b8"/>
      <path d="M98 40 V100" stroke-dasharray="6 5" stroke-width="2"/>
      <circle cx="112" cy="70" r="10" fill="none" stroke="#c8402f" stroke-width="3"/>
      <path d="M26 56 H84 M26 70 H74 M26 84 H80" stroke="#8a5a32" stroke-width="4"/>
      <path d="M104 70 H120" stroke="#c8402f" stroke-width="3"/>
    </g>
  </symbol>
  <symbol id="ogg-cartaparola" viewBox="0 0 140 140">
    <ellipse cx="70" cy="122" rx="44" ry="6" fill="#000" opacity=".25"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round" transform="rotate(6 70 70)">
      <rect x="22" y="30" width="96" height="74" rx="6" fill="#fbf0d0"/>
      <rect x="28" y="36" width="84" height="62" rx="4" fill="none" stroke="#7a2f8e" stroke-width="3"/>
      <path d="M38 62 q8 -8 16 0 t16 0 t16 0 t16 0" fill="none" stroke="#7a2f8e" stroke-width="4"/>
      <path d="M46 80 H94" stroke="#e8c26a" stroke-width="3"/>
    </g>
  </symbol>
`);

Grafica.sfondo("treno8", `
  <!-- soffitto a botte con le lampade -->
  <rect width="1600" height="900" fill="url(#t8-legno)"/>
  <path d="M0 0 H1600 V120 Q800 70 0 120 Z" fill="url(#t8-soffitto)"/>
  <g stroke="#1d1428" stroke-width="3" fill="none" opacity=".7">
    <path d="M0 40 Q800 0 1600 40"/><path d="M0 80 Q800 40 1600 80"/>
  </g>
  <g>
    <path d="M400 96 h60 l-10 18 h-40 Z M1100 96 h60 l-10 18 h-40 Z" fill="url(#t8-ottone)" stroke="#1d1428" stroke-width="3"/>
    <ellipse cx="430" cy="118" rx="22" ry="9" fill="#fff4c8"/><ellipse cx="1130" cy="118" rx="22" ry="9" fill="#fff4c8"/>
    <path d="M330 120 L530 120 L700 640 L160 640 Z M1030 120 L1230 120 L1400 640 L860 640 Z" fill="url(#t8-luce)"/>
  </g>
  <!-- cornicione e pannelli di legno -->
  <rect y="120" width="1600" height="14" fill="#2a120e"/>
  <g fill="none" stroke="#2a120e" stroke-width="4" opacity=".8">
    <path d="M40 480 V620 M200 480 V620 M640 480 V620 M840 480 V620 M1280 480 V620"/>
  </g>
  <rect y="470" width="1600" height="12" fill="url(#t8-ottone-v)" stroke="#1d1428" stroke-width="2"/>
  <g fill="url(#t8-legno-o)" stroke="#2a120e" stroke-width="3">
    <rect x="56" y="500" width="128" height="104" rx="6"/><rect x="656" y="500" width="168" height="104" rx="6"/><rect x="1296" y="500" width="40" height="104" rx="6"/>
  </g>

  <!-- PORTABAGAGLI: una retta dei numeri con le tacche e la freccia -->
  <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round">
    <path d="M190 150 L190 196 M1290 150 L1290 196 M740 150 L740 196" stroke="#2a120e" stroke-width="8"/>
    <rect x="170" y="186" width="1110" height="12" rx="6" fill="url(#t8-ottone-v)"/>
    <path d="M1276 180 L1310 192 L1276 204 Z" fill="url(#t8-ottone-v)"/>
    <rect x="170" y="160" width="1110" height="8" rx="4" fill="url(#t8-ottone-v)"/>
    <g stroke-width="3">
      <path d="M260 182 V204 M380 182 V204 M500 182 V204 M620 182 V204 M860 182 V204 M980 182 V204 M1100 182 V204 M1220 182 V204"/>
      <path d="M740 176 V210" stroke-width="5"/>
    </g>
  </g>

  <!-- due finestrini: fuori notte, neve e la banchina; vetro con la brina -->
  <g stroke="#1d1428" stroke-width="4">
    <rect x="226" y="226" width="388" height="232" rx="26" fill="url(#t8-ottone)"/>
    <rect x="866" y="226" width="388" height="232" rx="26" fill="url(#t8-ottone)"/>
    <rect x="240" y="240" width="360" height="204" rx="18" fill="url(#t8-notte)"/>
    <rect x="880" y="240" width="360" height="204" rx="18" fill="url(#t8-notte)"/>
  </g>
  <g>
    <!-- banchina e lampione fuori -->
    <rect x="240" y="392" width="360" height="52" fill="#3a3a52"/><rect x="880" y="392" width="360" height="52" fill="#3a3a52"/>
    <path d="M520 392 V300 M1160 392 V300" stroke="#1a1a2a" stroke-width="7"/>
    <circle cx="520" cy="296" r="11" fill="#ffe8a0"/><circle cx="1160" cy="296" r="11" fill="#ffe8a0"/>
    <circle cx="520" cy="296" r="38" fill="#ffe8a0" opacity=".18"/><circle cx="1160" cy="296" r="38" fill="#ffe8a0" opacity=".18"/>
    <g fill="#fff" opacity=".85">
      <circle cx="280" cy="270" r="3"/><circle cx="330" cy="320" r="2.5"/><circle cx="400" cy="262" r="3"/><circle cx="450" cy="350" r="2"/><circle cx="560" cy="250" r="2.5"/><circle cx="300" cy="380" r="2"/>
      <circle cx="920" cy="280" r="3"/><circle cx="990" cy="340" r="2"/><circle cx="1050" cy="262" r="3"/><circle cx="1110" cy="370" r="2.5"/><circle cx="1210" cy="300" r="2"/><circle cx="960" cy="400" r="2"/>
    </g>
    <!-- brina sui bordi e cristalli di ghiaccio -->
    <rect x="240" y="240" width="360" height="204" rx="18" fill="url(#t8-brina)"/>
    <rect x="880" y="240" width="360" height="204" rx="18" fill="url(#t8-brina)"/>
    <g fill="none" stroke="#f4faff" stroke-width="2.5" opacity=".9" stroke-linecap="round">
      <path d="M252 430 l18 -18 M262 430 l-6 -14 M270 412 l10 0 M590 254 l-18 18 M580 254 l6 14 M572 272 l-10 0"/>
      <path d="M892 430 l18 -18 M902 430 l-6 -14 M910 412 l10 0 M1230 254 l-18 18 M1220 254 l6 14 M1212 272 l-10 0"/>
      <path d="M250 300 l14 6 l-4 12 M590 380 l-14 -6 l4 -12 M890 320 l14 6 l-4 12 M1230 400 l-14 -6 l4 -12"/>
    </g>
    <path d="M250 250 L330 250 L250 310 Z M890 250 L970 250 L890 310 Z" fill="#fff" opacity=".12"/>
  </g>
  <!-- chiodo del termometro tra i finestrini -->
  <circle cx="740" cy="226" r="5" fill="url(#t8-ottone)" stroke="#1d1428" stroke-width="2"/>

  <!-- porta della cabina con l'oblò, e il selettore delle epoche accanto -->
  <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <rect x="1350" y="160" width="220" height="490" rx="8" fill="#4a2018"/>
    <rect x="1370" y="180" width="180" height="450" rx="6" fill="url(#t8-legno-o)"/>
    <circle cx="1460" cy="290" r="58" fill="url(#t8-ottone)"/>
    <circle cx="1460" cy="290" r="44" fill="#ffd27a"/>
    <path d="M1430 274 Q1460 250 1490 274" fill="none" stroke="#fff" stroke-width="4" opacity=".6"/>
    <rect x="1392" y="420" width="136" height="180" rx="6" fill="none" stroke="#2a120e" stroke-width="4"/>
    <circle cx="1394" cy="440" r="9" fill="url(#t8-ottone)"/>
    <!-- selettore -->
    <rect x="1262" y="300" width="80" height="190" rx="8" fill="url(#t8-ottone)"/>
    <rect x="1272" y="318" width="60" height="44" rx="4" fill="#0d0b12"/>
    <circle cx="1302" cy="404" r="22" fill="#2a2a3a"/><path d="M1302 404 L1316 390" stroke="#f3c45a" stroke-width="5"/>
    <circle cx="1284" cy="460" r="8" fill="#c8402f"/><circle cx="1320" cy="460" r="8" fill="#3fa05a"/>
    <!-- freno d'emergenza -->
    <path d="M1300 134 V176" stroke-width="5"/><path d="M1284 176 H1316 V196 H1284 Z" fill="#c8402f"/>
  </g>

  <!-- pavimento: tappeto rosso a fiori, in prospettiva -->
  <path d="M0 640 H1600 V900 H0 Z" fill="#2a1a18"/>
  <path d="M260 640 H1340 L1560 900 H40 Z" fill="#7a2228" stroke="#1d1428" stroke-width="4"/>
  <path d="M300 660 H1300 L1500 880 H100 Z" fill="none" stroke="#e8c26a" stroke-width="5" opacity=".7"/>
  <g fill="#c84a3a" opacity=".6">
    <circle cx="500" cy="700" r="10"/><circle cx="800" cy="700" r="10"/><circle cx="1100" cy="700" r="10"/>
    <circle cx="400" cy="790" r="13"/><circle cx="800" cy="790" r="13"/><circle cx="1200" cy="790" r="13"/>
  </g>
  <rect y="640" width="1600" height="22" fill="#000" opacity=".35"/>

  <!-- sedile di velluto a sinistra, in primo piano -->
  <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <path d="M30 420 Q30 390 60 390 L400 390 Q430 390 430 420 L430 640 L30 640 Z" fill="url(#t8-velluto)"/>
    <g fill="none" stroke="#0e2a1c" stroke-width="3"><path d="M100 420 V620 M190 420 V620 M280 420 V620 M370 420 V620"/></g>
    <path d="M10 630 L450 630 L470 700 L-10 700 Z" fill="url(#t8-velluto)"/>
    <path d="M10 700 H470 V760 H10 Z" fill="#3a1a16"/>
    <path d="M40 760 V820 M440 760 V820" stroke-width="10"/>
  </g>

  <!-- scrittoio a destra con il calamaio -->
  <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <path d="M1000 600 L1220 600 L1236 626 L984 626 Z" fill="#8a4a2a"/>
    <path d="M996 626 H1224 V700 H996 Z" fill="#5e2c22"/>
    <path d="M1010 700 V800 M1210 700 V800" stroke-width="10"/>
    <rect x="1060" y="640" width="100" height="40" rx="4" fill="#4a2018"/><circle cx="1110" cy="660" r="6" fill="url(#t8-ottone)"/>
    <path d="M1080 600 Q1076 570 1096 566 L1124 566 Q1144 570 1140 600 Z" fill="#1a2440"/>
    <ellipse cx="1110" cy="566" rx="16" ry="5" fill="#0a0e20"/>
    <rect x="1150" y="584" width="54" height="16" rx="2" fill="#f6ecd8" transform="rotate(-6 1176 592)"/>
  </g>

  <!-- ombra sul bordo basso -->
  <rect y="884" width="1600" height="16" fill="#000" opacity=".3"/>
`);
