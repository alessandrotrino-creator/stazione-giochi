/* Gioco di Matematica · terze · Capitolo 2 «Il furto dei simboli»: oggetti e simboli comuni.
   - oggetti dello zaino: thermos del tè, pagine del diario di Madama Parolona, quaderno di Zara;
   - i simboli che Madama Parolona inventava da bambina (stellina = più, goccia = meno, ricciolo = uguale,
     fiocco = per, coroncina = al quadrato): si usano nei pannelli del diario con <use href="#mp-...">. */
Grafica.definizioni(`
  <linearGradient id="al-acciaio" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#6a7a8a"/><stop offset=".35" stop-color="#e8f0f6"/><stop offset=".6" stop-color="#9aaab8"/><stop offset="1" stop-color="#4a5664"/>
  </linearGradient>
  <linearGradient id="al-tartan" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#2c6a4a"/><stop offset="1" stop-color="#1c4a34"/>
  </linearGradient>
  <linearGradient id="al-carta" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#fff6e0"/><stop offset="1" stop-color="#ead8b0"/>
  </linearGradient>

  <symbol id="ogg-thermos" viewBox="0 0 140 140">
    <ellipse cx="70" cy="130" rx="30" ry="5" fill="#000" opacity=".28"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round">
      <rect x="44" y="30" width="52" height="98" rx="10" fill="url(#al-tartan)"/>
      <path d="M44 52 H96 M44 96 H96" stroke="#e8c26a" stroke-width="3"/>
      <path d="M44 60 H96 M44 88 H96" stroke="#c8402f" stroke-width="2"/>
      <path d="M60 30 V128 M80 30 V128" stroke="#0e2a1c" stroke-width="2" opacity=".6"/>
      <rect x="40" y="12" width="60" height="22" rx="6" fill="url(#al-acciaio)"/>
      <path d="M96 48 Q116 48 116 70 Q116 90 96 90" fill="none" stroke-width="6"/>
      <path d="M96 48 Q116 48 116 70 Q116 90 96 90" fill="none" stroke="#2c6a4a" stroke-width="2.5"/>
    </g>
    <path d="M56 8 q-6 -8 2 -14 M72 6 q-6 -8 2 -14" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".7"/>
    <rect x="48" y="16" width="8" height="14" rx="3" fill="#fff" opacity=".5"/>
  </symbol>

  <symbol id="ogg-diario" viewBox="0 0 140 140">
    <ellipse cx="70" cy="124" rx="46" ry="6" fill="#000" opacity=".25"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round" transform="rotate(-7 70 70)">
      <path d="M26 22 H112 V116 H26 Z" fill="url(#al-carta)"/>
      <path d="M26 22 q6 6 0 12 q-6 6 0 12 q6 6 0 12 q-6 6 0 12 q6 6 0 12 q-6 6 0 12 q6 6 0 10" fill="none" stroke="#b89a6a" stroke-width="2"/>
      <path d="M38 40 H100 M38 60 H100 M38 80 H100 M38 100 H100" stroke="#b8c8e8" stroke-width="1.5"/>
      <use href="#mp-stella" x="40" y="44" width="22" height="22"/>
      <use href="#mp-goccia" x="66" y="44" width="18" height="22"/>
      <use href="#mp-ricciolo" x="86" y="46" width="20" height="18"/>
      <path d="M42 88 q10 -10 18 0 t18 0" fill="none" stroke="#7a2f8e" stroke-width="3"/>
    </g>
  </symbol>

  <symbol id="ogg-quaderno" viewBox="0 0 140 140">
    <ellipse cx="70" cy="124" rx="50" ry="6" fill="#000" opacity=".25"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round" transform="rotate(5 70 70)">
      <rect x="20" y="26" width="100" height="88" rx="4" fill="#3a6ab8"/>
      <rect x="28" y="30" width="88" height="80" rx="3" fill="#fbfbf4"/>
      <path d="M36 46 H108 M36 60 H108 M36 74 H108 M36 88 H108 M36 102 H108" stroke="#c8d8f0" stroke-width="1.5"/>
      <path d="M38 52 q4 -6 8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0 M38 66 q4 -6 8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0 M38 80 q4 -6 8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0" fill="none" stroke="#4a4a6a" stroke-width="1.8"/>
      <path d="M24 30 V112" stroke="#c8402f" stroke-width="2"/>
    </g>
  </symbol>

  <!-- i simboli di Madama Parolona bambina -->
  <symbol id="mp-stella" viewBox="0 0 40 40">
    <path d="M20 3 L25 15 L38 16 L28 25 L31 38 L20 31 L9 38 L12 25 L2 16 L15 15 Z" fill="#f3c45a" stroke="#7a2f8e" stroke-width="2.5" stroke-linejoin="round"/>
  </symbol>
  <symbol id="mp-goccia" viewBox="0 0 32 40">
    <path d="M16 3 Q30 22 28 28 Q26 38 16 38 Q6 38 4 28 Q2 22 16 3 Z" fill="#7ac8f0" stroke="#7a2f8e" stroke-width="2.5" stroke-linejoin="round"/>
    <path d="M10 26 q0 6 5 8" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>
  </symbol>
  <symbol id="mp-ricciolo" viewBox="0 0 44 36">
    <path d="M4 22 Q4 6 16 8 Q26 10 20 18 Q14 24 10 16 M18 26 Q26 32 34 24 Q40 18 40 10" fill="none" stroke="#7a2f8e" stroke-width="4" stroke-linecap="round"/>
  </symbol>
  <symbol id="mp-fiocco" viewBox="0 0 40 40">
    <g fill="#f08ab8" stroke="#7a2f8e" stroke-width="2.5" stroke-linejoin="round">
      <path d="M20 20 Q6 6 4 16 Q2 26 20 20 Z"/><path d="M20 20 Q34 6 36 16 Q38 26 20 20 Z"/>
      <path d="M20 20 L12 36 L18 32 Z M20 20 L28 36 L22 32 Z"/>
      <circle cx="20" cy="20" r="4"/>
    </g>
  </symbol>
  <symbol id="mp-corona" viewBox="0 0 40 32">
    <path d="M4 28 L6 8 L14 18 L20 4 L26 18 L34 8 L36 28 Z" fill="#f3c45a" stroke="#7a2f8e" stroke-width="2.5" stroke-linejoin="round"/>
    <circle cx="20" cy="22" r="3" fill="#d83a7a"/>
  </symbol>
`);
