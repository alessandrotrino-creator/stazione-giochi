/* Gioco di Scienze · Capitolo 1 · Oggetti e piccoli personaggi delle altre stanze:
   carte caratteristica (una per gruppo), chiave, medusa Turri, stella marina viva, cozza, ruota del ciclo della medusa. */
Grafica.definizioni(`
  <linearGradient id="g-carta-car" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#fffdf4"/><stop offset="1" stop-color="#e8dcc0"/>
  </linearGradient>
  <!-- cornice comune delle carte caratteristica: l'emblema del gruppo cambia -->
  <symbol id="carta-base" viewBox="0 0 140 140">
    <ellipse cx="70" cy="128" rx="40" ry="5" fill="#000" opacity=".25"/>
    <g transform="rotate(-6 70 70)" stroke="#1d1428" stroke-width="3.5" stroke-linejoin="round">
      <rect x="30" y="14" width="80" height="110" rx="10" fill="url(#g-carta-car)"/>
      <rect x="38" y="22" width="64" height="64" rx="8" fill="#24384a"/>
      <path d="M40 96 L100 96 M40 106 L88 106" stroke="#c8bfa8" stroke-width="3" stroke-linecap="round"/>
    </g>
  </symbol>
  <symbol id="em-poriferi" viewBox="0 0 64 64"><path d="M14 40 Q10 22 24 20 Q30 10 40 18 Q54 16 50 32 Q56 46 42 48 Q32 56 22 48 Q10 50 14 40 Z" fill="#f2b33d" stroke="#1d1428" stroke-width="2.5"/><g fill="#8a5416"><circle cx="26" cy="30" r="3"/><circle cx="38" cy="26" r="3"/><circle cx="40" cy="40" r="3"/><circle cx="26" cy="42" r="2.5"/></g></symbol>
  <symbol id="em-cnidari" viewBox="0 0 64 64"><path d="M14 30 Q32 6 50 30 Q32 26 14 30 Z" fill="#c9b8ff" stroke="#1d1428" stroke-width="2.5"/><path d="M20 30 q-3 12 2 22 M28 30 q3 14 -2 24 M36 30 q-3 12 2 22 M44 30 q3 10 -1 18" fill="none" stroke="#c9b8ff" stroke-width="2.5"/></symbol>
  <symbol id="em-vermi" viewBox="0 0 64 64"><path d="M8 44 Q18 22 30 36 Q42 50 54 24" fill="none" stroke="#1d1428" stroke-width="10" stroke-linecap="round"/><path d="M8 44 Q18 22 30 36 Q42 50 54 24" fill="none" stroke="#e88a8a" stroke-width="6" stroke-linecap="round"/><path d="M14 36 l4 3 M22 30 l3 4 M32 38 l4 1 M42 40 l3 -3 M50 30 l4 1" stroke="#7a3a3a" stroke-width="1.5"/></symbol>
  <symbol id="em-molluschi" viewBox="0 0 64 64"><path d="M10 48 Q8 40 18 40 L46 40 Q54 40 54 48 Z" fill="#c8a06a" stroke="#1d1428" stroke-width="2.5"/><circle cx="34" cy="28" r="15" fill="#e2c08a" stroke="#1d1428" stroke-width="2.5"/><path d="M34 28 m-8 0 a8 8 0 1 1 8 8 a5 5 0 1 1 -5 -5" fill="none" stroke="#8a5a2a" stroke-width="2"/><path d="M50 40 L56 30 M52 40 L60 34" stroke="#1d1428" stroke-width="2"/></symbol>
  <symbol id="em-echinodermi" viewBox="0 0 64 64"><polygon points="32,6 38.5,24 57,24.5 42,35.5 47.5,54 32,43 16.5,54 22,35.5 7,24.5 25.5,24" fill="#ff7a45" stroke="#1d1428" stroke-width="2.5" stroke-linejoin="round"/><circle cx="32" cy="31" r="4" fill="#ffd0b0"/></symbol>
  <symbol id="em-artropodi" viewBox="0 0 64 64"><ellipse cx="20" cy="34" rx="8" ry="7" fill="#3a2a2a" stroke="#1d1428" stroke-width="2"/><ellipse cx="32" cy="34" rx="6" ry="5" fill="#3a2a2a" stroke="#1d1428" stroke-width="2"/><ellipse cx="46" cy="34" rx="10" ry="8" fill="#3a2a2a" stroke="#1d1428" stroke-width="2"/><path d="M28 34 L20 48 M32 34 L32 50 M36 34 L44 48 M28 34 L20 20 M32 34 L32 18 M36 34 L44 20 M14 30 L6 20 M14 30 L8 24" stroke="#fff" stroke-width="2"/></symbol>

  <symbol id="ogg-chiave" viewBox="0 0 140 140">
    <ellipse cx="70" cy="122" rx="44" ry="5" fill="#000" opacity=".25"/>
    <g stroke="#1d1428" stroke-width="3.5" stroke-linejoin="round" transform="rotate(-30 70 70)">
      <circle cx="40" cy="70" r="22" fill="url(#g-oro)"/><circle cx="40" cy="70" r="9" fill="#5e3f12"/>
      <rect x="60" y="64" width="62" height="12" rx="3" fill="url(#g-oro)"/>
      <path d="M104 76 L104 92 L114 92 L114 76 M88 76 L88 88 L96 88 L96 76" fill="url(#g-oro)"/>
    </g>
  </symbol>
  <symbol id="ogg-cartellini" viewBox="0 0 140 140">
    <g transform="translate(-8 6) rotate(-10 70 70)"><use href="#ogg-cartellino"/></g>
    <use href="#ogg-cartellino"/>
  </symbol>

  <!-- TURRI, la piccola medusa "immortale" -->
  <symbol id="turri" viewBox="-40 -60 80 110" overflow="visible">
    <g stroke="#1d1428" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round">
      <path d="M-26 -12 Q0 -56 26 -12 Q0 -18 -26 -12 Z" fill="#ffb0d0" fill-opacity=".85"/>
      <path d="M-14 -30 Q0 -44 14 -30" fill="none" stroke="#ff6fa8" stroke-width="5" opacity=".6"/>
      <path d="M-18 -12 q-6 20 2 36 M-6 -12 q6 24 -2 44 M6 -12 q-6 22 2 40 M18 -12 q6 18 -2 32" fill="none" stroke="#ffb0d0" stroke-width="2.5"/>
      <circle cx="-8" cy="-24" r="3.5" fill="#fff"/><circle cx="8" cy="-24" r="3.5" fill="#fff"/>
      <circle cx="-8" cy="-24" r="1.6" fill="#1d1428" stroke="none"/><circle cx="8" cy="-24" r="1.6" fill="#1d1428" stroke="none"/>
    </g>
  </symbol>
  <symbol id="stella-viva" viewBox="0 0 140 140">
    <use href="#ogg-stella"/>
    <g fill="#1d1428"><circle cx="64" cy="58" r="3"/><circle cx="76" cy="58" r="3"/></g>
    <path d="M62 68 Q70 74 78 68" fill="none" stroke="#1d1428" stroke-width="2.5" stroke-linecap="round"/>
  </symbol>
  <symbol id="cozza" viewBox="0 0 140 90">
    <g stroke="#1d1428" stroke-width="3.5" stroke-linejoin="round">
      <path d="M10 60 Q20 14 80 10 Q130 14 132 50 Q120 74 70 78 Q24 78 10 60 Z" fill="#2a2a4a"/>
      <path d="M20 58 Q40 30 80 26 M30 66 Q60 44 110 40" fill="none" stroke="#5a5a8a" stroke-width="2"/>
      <path d="M10 60 Q60 66 132 50" fill="none" stroke-width="3"/>
    </g>
  </symbol>
  <symbol id="cozza-aperta" viewBox="0 0 140 90">
    <g stroke="#1d1428" stroke-width="3.5" stroke-linejoin="round">
      <path d="M10 62 Q60 74 132 52 Q120 82 70 86 Q24 86 10 62 Z" fill="#2a2a4a"/>
      <path d="M10 58 Q14 6 80 2 Q126 8 132 48 Q70 30 10 58 Z" fill="#2a2a4a"/>
      <path d="M24 60 Q70 50 120 54 Q80 70 24 60 Z" fill="#f4c8a8"/>
      <rect x="54" y="44" width="28" height="20" rx="3" fill="#fffdf4" transform="rotate(-8 68 54)"/>
    </g>
  </symbol>
`);

/* le sei carte caratteristica: stessa carta, emblema diverso */
Grafica.definizioni(["poriferi", "cnidari", "vermi", "molluschi", "echinodermi", "artropodi"].map(function (g) {
  return '<symbol id="carta-' + g + '" viewBox="0 0 140 140"><use href="#carta-base"/>' +
    '<g transform="rotate(-6 70 70)"><use href="#em-' + g + '" x="38" y="22" width="64" height="64"/></g></symbol>';
}).join(""));
