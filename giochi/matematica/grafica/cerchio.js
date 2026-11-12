/* Gioco di Matematica · terze · Livello G1 «Il cerchio senza π»: oggetti dello zaino e disegni comuni.
   - metro da sarta e gomitolo (dal cestino della nonna), compasso rotto, vite, compasso aggiustato,
     sasso forato, filo a piombo, foglio di papiro, pesetti di bronzo, spicchi della ruota, lunula ritagliata;
   - la ruota di legno a quattro spicchi (ce-ruota-*) e il quadrante delle epoche (ce-quadrante). */
Grafica.definizioni(`
  <linearGradient id="ce-legno" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#d89a5a"/><stop offset=".5" stop-color="#b0703a"/><stop offset="1" stop-color="#7a4a24"/>
  </linearGradient>
  <linearGradient id="ce-bronzo" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#f2c47a"/><stop offset=".45" stop-color="#c88a3a"/><stop offset="1" stop-color="#7a4a1a"/>
  </linearGradient>
  <linearGradient id="ce-papiro" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#e8d49a"/><stop offset=".5" stop-color="#f4e4b0"/><stop offset="1" stop-color="#d8c080"/>
  </linearGradient>
  <linearGradient id="ce-ferro" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#5a6470"/><stop offset=".4" stop-color="#d8e0e8"/><stop offset="1" stop-color="#4a525c"/>
  </linearGradient>
  <radialGradient id="ce-sasso" cx=".35" cy=".3" r=".8">
    <stop offset="0" stop-color="#c8bca8"/><stop offset="1" stop-color="#6a6052"/>
  </radialGradient>

  <!-- metro da sarta arrotolato -->
  <symbol id="ogg-metro" viewBox="0 0 140 140">
    <ellipse cx="70" cy="122" rx="44" ry="7" fill="#000" opacity=".25"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round">
      <circle cx="62" cy="70" r="40" fill="#f2d26a"/>
      <circle cx="62" cy="70" r="28" fill="#e8c24a"/>
      <circle cx="62" cy="70" r="14" fill="#c8402f"/>
      <path d="M100 82 L132 96 L126 110 L94 96 Z" fill="#f2d26a"/>
    </g>
    <path d="M104 88 l4 2 M110 90 l3 1.5 M116 93 l4 2 M122 96 l3 1.5" stroke="#1d1428" stroke-width="2"/>
    <path d="M40 46 A32 32 0 0 1 84 40" fill="none" stroke="#fff" stroke-width="4" opacity=".5" stroke-linecap="round"/>
    <text x="54" y="76" font-family="Georgia, serif" font-weight="700" font-size="16" fill="#fff">cm</text>
  </symbol>

  <!-- gomitolo di spago -->
  <symbol id="ogg-gomitolo" viewBox="0 0 140 140">
    <ellipse cx="70" cy="122" rx="40" ry="7" fill="#000" opacity=".25"/>
    <circle cx="70" cy="74" r="44" fill="#d8c08a" stroke="#1d1428" stroke-width="3"/>
    <g fill="none" stroke="#a8884a" stroke-width="3">
      <path d="M30 60 Q70 40 110 66"/><path d="M28 78 Q72 56 112 84"/><path d="M36 96 Q76 74 106 100"/>
      <path d="M52 34 Q40 74 64 116"/><path d="M78 32 Q96 70 84 116"/>
    </g>
    <path d="M110 84 Q130 96 122 120 Q118 130 128 134" fill="none" stroke="#1d1428" stroke-width="3"/>
    <path d="M44 48 A40 40 0 0 1 80 34" fill="none" stroke="#fff" stroke-width="4" opacity=".5" stroke-linecap="round"/>
  </symbol>

  <!-- compasso di bronzo: rotto (gambe aperte, senza vite) e aggiustato -->
  <symbol id="ogg-compasso-rotto" viewBox="0 0 140 140">
    <ellipse cx="70" cy="126" rx="48" ry="6" fill="#000" opacity=".25"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round">
      <path d="M40 22 L52 18 L30 124 L24 122 Z" fill="url(#ce-bronzo)"/>
      <path d="M86 30 L98 34 L122 120 L116 124 Z" fill="url(#ce-bronzo)"/>
      <circle cx="46" cy="22" r="8" fill="#e8b860"/><circle cx="92" cy="32" r="8" fill="#e8b860"/>
    </g>
    <circle cx="46" cy="22" r="3" fill="#1d1428"/><circle cx="92" cy="32" r="3" fill="#1d1428"/>
    <path d="M60 60 l8 -6 M64 70 l10 -2" stroke="#c8402f" stroke-width="3" stroke-linecap="round"/>
  </symbol>
  <symbol id="ogg-vite" viewBox="0 0 140 140">
    <ellipse cx="70" cy="118" rx="30" ry="5" fill="#000" opacity=".25"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round">
      <ellipse cx="70" cy="34" rx="26" ry="12" fill="url(#ce-bronzo)"/>
      <rect x="60" y="38" width="20" height="70" fill="url(#ce-bronzo)"/>
    </g>
    <path d="M60 50 L80 44 M60 62 L80 56 M60 74 L80 68 M60 86 L80 80 M60 98 L80 92" stroke="#1d1428" stroke-width="2.5"/>
    <path d="M56 30 H84" stroke="#1d1428" stroke-width="4"/>
  </symbol>
  <symbol id="ogg-compasso" viewBox="0 0 140 140">
    <ellipse cx="70" cy="126" rx="44" ry="6" fill="#000" opacity=".25"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round">
      <path d="M64 20 L76 20 L40 124 L34 122 Z" fill="url(#ce-bronzo)"/>
      <path d="M64 20 L76 20 L106 122 L100 124 Z" fill="url(#ce-bronzo)"/>
      <circle cx="70" cy="20" r="11" fill="#e8b860"/>
    </g>
    <path d="M64 20 H76 M70 14 V26" stroke="#1d1428" stroke-width="3"/>
    <path d="M24 112 A70 70 0 0 0 116 112" fill="none" stroke="#9fffb0" stroke-width="3" stroke-dasharray="6 6"/>
  </symbol>

  <!-- sasso forato e filo a piombo -->
  <symbol id="ogg-sasso" viewBox="0 0 140 140">
    <ellipse cx="70" cy="118" rx="40" ry="7" fill="#000" opacity=".25"/>
    <path d="M30 84 C26 54 52 36 76 38 C104 40 118 62 112 88 C106 112 46 116 30 84 Z" fill="url(#ce-sasso)" stroke="#1d1428" stroke-width="3"/>
    <ellipse cx="72" cy="66" rx="9" ry="8" fill="#2a2228" stroke="#1d1428" stroke-width="2"/>
    <path d="M44 62 Q54 50 66 48" fill="none" stroke="#fff" stroke-width="4" opacity=".4" stroke-linecap="round"/>
  </symbol>
  <symbol id="ogg-filopiombo" viewBox="0 0 140 140">
    <ellipse cx="70" cy="128" rx="26" ry="5" fill="#000" opacity=".25"/>
    <path d="M70 6 V84" stroke="#a8884a" stroke-width="3"/>
    <rect x="58" y="2" width="24" height="8" rx="3" fill="url(#ce-legno)" stroke="#1d1428" stroke-width="2.5"/>
    <path d="M44 104 C42 84 58 74 72 76 C90 78 98 92 94 106 C90 124 50 126 44 104 Z" fill="url(#ce-sasso)" stroke="#1d1428" stroke-width="3"/>
    <ellipse cx="70" cy="92" rx="6" ry="5" fill="#2a2228"/>
  </symbol>

  <!-- foglio di papiro arrotolato -->
  <symbol id="ogg-papiro" viewBox="0 0 140 140">
    <ellipse cx="70" cy="122" rx="50" ry="6" fill="#000" opacity=".25"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round">
      <rect x="26" y="34" width="88" height="78" fill="url(#ce-papiro)"/>
      <ellipse cx="26" cy="73" rx="10" ry="40" fill="#d8c080"/>
      <ellipse cx="114" cy="73" rx="10" ry="40" fill="#e8d49a"/>
    </g>
    <path d="M36 44 V104 M48 44 V104 M60 44 V104 M72 44 V104 M84 44 V104 M96 44 V104" stroke="#c8a860" stroke-width="1.5" opacity=".7"/>
    <path d="M40 58 H100 M40 70 H92 M40 82 H98" stroke="#7a5a3a" stroke-width="2.5" stroke-linecap="round" opacity=".6"/>
  </symbol>

  <!-- pesetti di bronzo -->
  <symbol id="ogg-pesi-bronzo" viewBox="0 0 140 140">
    <ellipse cx="70" cy="120" rx="54" ry="7" fill="#000" opacity=".25"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round">
      <path d="M18 116 L24 80 H56 L62 116 Z" fill="url(#ce-bronzo)"/><rect x="32" y="68" width="16" height="14" rx="4" fill="#e8b860"/>
      <path d="M66 116 L70 90 H94 L98 116 Z" fill="url(#ce-bronzo)"/><rect x="76" y="80" width="12" height="12" rx="3" fill="#e8b860"/>
      <path d="M102 116 L105 100 H121 L124 116 Z" fill="url(#ce-bronzo)"/><rect x="108" y="92" width="10" height="9" rx="3" fill="#e8b860"/>
    </g>
    <path d="M28 86 V108" stroke="#fff" stroke-width="3" opacity=".5"/>
  </symbol>

  <!-- uno spicchio della ruota (un quarto) e la lunula di papiro -->
  <symbol id="ogg-spicchio" viewBox="0 0 140 140">
    <ellipse cx="70" cy="126" rx="48" ry="6" fill="#000" opacity=".25"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round">
      <path d="M30 116 L30 20 A96 96 0 0 1 126 116 Z" fill="url(#ce-legno)"/>
      <path d="M30 116 L30 34 A82 82 0 0 1 112 116 Z" fill="none" stroke-width="2"/>
      <path d="M30 116 L92 54" fill="none" stroke-width="5"/>
    </g>
    <circle cx="30" cy="116" r="8" fill="#e8b860" stroke="#1d1428" stroke-width="3"/>
  </symbol>
  <symbol id="ogg-lunula" viewBox="0 0 140 140">
    <ellipse cx="70" cy="122" rx="48" ry="6" fill="#000" opacity=".25"/>
    <path d="M20 96 A54 54 0 0 1 120 96 A70 70 0 0 0 20 96 Z" fill="url(#ce-papiro)" stroke="#1d1428" stroke-width="3"/>
  </symbol>

  <!-- la manopola del quadrante (chiusa nella cappelliera della nonna) -->
  <symbol id="ogg-manopola" viewBox="0 0 140 140">
    <ellipse cx="70" cy="122" rx="40" ry="6" fill="#000" opacity=".25"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round">
      <path d="M30 96 V70 H110 V96 Q70 112 30 96 Z" fill="#7a5a1a"/>
      <ellipse cx="70" cy="70" rx="40" ry="16" fill="url(#ce-bronzo)"/>
      <path d="M40 70 h60" stroke-width="2"/>
      <path d="M62 34 h16 v36 h-16 Z" fill="#2a2a3a"/>
    </g>
    <path d="M70 66 L92 56" stroke="#f3c45a" stroke-width="6" stroke-linecap="round"/>
    <g stroke="#3a2a0a" stroke-width="2"><path d="M36 82 V96 M48 86 V102 M60 88 V104 M80 88 V104 M92 86 V102 M104 82 V96"/></g>
  </symbol>
  <!-- un panetto d'argilla, un'anfora (vuota e piena d'acqua di mare) -->
  <symbol id="ogg-argilla" viewBox="0 0 140 140">
    <ellipse cx="70" cy="118" rx="44" ry="7" fill="#000" opacity=".25"/>
    <path d="M28 108 C20 80 38 56 70 54 C102 52 122 78 112 108 C96 120 44 120 28 108 Z" fill="#b8683a" stroke="#1d1428" stroke-width="3"/>
    <path d="M42 76 Q60 64 80 68" fill="none" stroke="#e8a070" stroke-width="5" stroke-linecap="round" opacity=".7"/>
    <g fill="#8a4a24"><circle cx="58" cy="94" r="4"/><circle cx="86" cy="88" r="3"/><circle cx="74" cy="104" r="3"/></g>
  </symbol>
  <symbol id="ogg-anfora" viewBox="0 0 140 140">
    <ellipse cx="70" cy="128" rx="30" ry="5" fill="#000" opacity=".25"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round">
      <path d="M56 26 H84 L80 40 C108 52 112 96 86 124 H54 C28 96 32 52 60 40 Z" fill="#c8703a"/>
      <path d="M58 34 C40 34 38 54 52 58 M82 34 C100 34 102 54 88 58" fill="none" stroke-width="5"/>
      <ellipse cx="70" cy="26" rx="16" ry="5" fill="#2a1a14"/>
    </g>
    <path d="M44 74 Q70 84 96 74 M42 90 Q70 100 98 90" fill="none" stroke="#1d1428" stroke-width="2.5"/>
    <path d="M52 78 l6 8 l6 -8 l6 8 l6 -8 l6 8 l6 -8" fill="none" stroke="#1d1428" stroke-width="2"/>
    <path d="M50 56 Q46 76 52 96" fill="none" stroke="#f0a070" stroke-width="5" stroke-linecap="round" opacity=".6"/>
  </symbol>
  <symbol id="ogg-anfora-piena" viewBox="0 0 140 140">
    <use href="#ogg-anfora" width="140" height="140"/>
    <ellipse cx="70" cy="26" rx="13" ry="4" fill="#4a9ad8"/>
    <path d="M60 22 q4 -8 8 0 q4 -8 8 0" fill="none" stroke="#9fd8ff" stroke-width="2.5"/>
    <g fill="#9fd8ff" stroke="#1d1428" stroke-width="1.5"><path d="M100 30 q5 9 0 12 q-5 -3 0 -12 Z"/><path d="M112 46 q4 7 0 9 q-4 -2 0 -9 Z"/></g>
  </symbol>

  <!-- la ruota di legno: quattro spicchi (si accendono quando tornano) -->
  <symbol id="ce-ruota-vuota" viewBox="-110 -110 220 220">
    <circle r="100" fill="none" stroke="#9fffb0" stroke-width="3" stroke-dasharray="8 8" opacity=".6"/>
    <circle r="12" fill="#e8b860" stroke="#1d1428" stroke-width="3"/>
  </symbol>
  <symbol id="ce-spicchio-ruota" viewBox="-110 -110 220 220" overflow="visible">
    <path d="M0 0 L0 -100 A100 100 0 0 1 100 0 Z" fill="url(#ce-legno)" stroke="#1d1428" stroke-width="4" stroke-linejoin="round"/>
    <path d="M0 0 L0 -84 A84 84 0 0 1 84 0 Z" fill="none" stroke="#1d1428" stroke-width="2" opacity=".6"/>
    <path d="M0 0 L66 -66" stroke="#1d1428" stroke-width="7"/><path d="M0 0 L66 -66" stroke="#c88a4a" stroke-width="3"/>
  </symbol>

  <!-- il fianco del vagone del Binario 8, con la porta aperta (a sinistra in ogni epoca) -->
  <symbol id="ce-vagone" viewBox="0 0 170 560" overflow="visible">
    <ellipse cx="80" cy="552" rx="110" ry="12" fill="#000" opacity=".35"/>
    <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
      <path d="M-20 30 Q60 0 150 30 V500 H-20 Z" fill="#5e2c22"/>
      <path d="M-20 30 Q60 0 150 30 V60 H-20 Z" fill="#3a1a16"/>
      <rect x="20" y="110" width="100" height="390" rx="8" fill="#2a120e"/>
      <rect x="30" y="120" width="80" height="380" rx="6" fill="#140a0a"/>
      <rect x="-20" y="500" width="170" height="26" fill="#2a1a16"/>
      <circle cx="10" cy="540" r="18" fill="#3a3a44"/><circle cx="120" cy="540" r="18" fill="#3a3a44"/>
      <rect x="130" y="250" width="10" height="90" rx="4" fill="#f3c45a"/>
      <path d="M40 520 H100 V534 H40 Z" fill="#c8922e"/>
    </g>
    <path d="M30 500 L110 500 L104 470 L36 470 Z" fill="#ffe0a0" opacity=".25"/>
    <path d="M-20 80 H150" stroke="#f3c45a" stroke-width="5"/>
    <circle cx="65" cy="86" r="16" fill="#3a1a16" stroke="#f3c45a" stroke-width="3"/>
    <text x="65" y="94" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="22" fill="#f3c45a">8</text>
    <path d="M36 140 Q70 300 40 480" stroke="#ffe0a0" stroke-width="3" fill="none" opacity=".25"/>
  </symbol>
`);
