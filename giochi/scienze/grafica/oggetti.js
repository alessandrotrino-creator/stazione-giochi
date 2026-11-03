/* Gioco di Scienze: icone degli oggetti della stanza di prova (senza testo dentro: si capiscono in ogni lingua). */
Grafica.definizioni(`
  <linearGradient id="g-carta" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#fffdf4"/><stop offset="1" stop-color="#e4dcc4"/>
  </linearGradient>
  <linearGradient id="g-matita" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#ffe07a"/><stop offset=".5" stop-color="#f2b33d"/><stop offset="1" stop-color="#b87412"/>
  </linearGradient>

  <!-- cartellino bianco con il forellino e lo spago -->
  <symbol id="ogg-cartellino" viewBox="0 0 140 140">
    <ellipse cx="72" cy="122" rx="46" ry="6" fill="#000" opacity=".25"/>
    <path d="M30 40 Q16 22 30 14" fill="none" stroke="#8a5a32" stroke-width="3"/>
    <g transform="rotate(-8 70 70)" stroke="#1d1428" stroke-width="3" stroke-linejoin="round">
      <path d="M22 44 L44 30 L118 30 L118 104 L44 104 L22 90 Z" fill="url(#g-carta)"/>
      <circle cx="36" cy="67" r="6" fill="#d9cfb4"/>
      <path d="M56 50 L104 50 M56 64 L104 64 M56 78 L92 78" stroke="#c8bfa8" stroke-width="3" stroke-dasharray="2 6" stroke-linecap="round"/>
      <path d="M46 34 L114 34" stroke="#fff" stroke-width="2" opacity=".9"/>
    </g>
  </symbol>

  <!-- matita mordicchiata -->
  <symbol id="ogg-matita" viewBox="0 0 140 140">
    <ellipse cx="70" cy="124" rx="50" ry="6" fill="#000" opacity=".25"/>
    <g transform="rotate(-35 70 70)" stroke="#1d1428" stroke-width="3" stroke-linejoin="round">
      <path d="M22 58 L104 58 L104 82 L22 82 Z" fill="url(#g-matita)"/>
      <path d="M22 66 L104 66 M22 74 L104 74" stroke="#c88a1c" stroke-width="2"/>
      <path d="M104 58 L126 70 L104 82 Z" fill="#f2d9b0"/>
      <path d="M118 66 L126 70 L118 74 Z" fill="#3a3346"/>
      <path d="M8 58 L22 58 L22 82 L8 82 Q2 70 8 58 Z" fill="#ff8aa1"/>
      <path d="M16 58 L22 58 L22 82 L16 82 Z" fill="#b8b8c8"/>
      <path d="M40 58 q4 5 8 0 q4 5 8 0" fill="none" stroke="#8a5a1a" stroke-width="2"/>
    </g>
  </symbol>

  <!-- etichetta corretta, scritta a mano, con un disegnino di corallo -->
  <symbol id="ogg-etichetta" viewBox="0 0 140 140">
    <ellipse cx="72" cy="122" rx="46" ry="6" fill="#000" opacity=".25"/>
    <g transform="rotate(-8 70 70)" stroke="#1d1428" stroke-width="3" stroke-linejoin="round">
      <path d="M22 44 L44 30 L118 30 L118 104 L44 104 L22 90 Z" fill="url(#g-carta)"/>
      <circle cx="36" cy="67" r="6" fill="#d9cfb4"/>
      <path d="M74 92 L74 74 Q66 66 68 54 M74 74 Q84 66 82 52 M74 82 Q64 80 60 72" fill="none" stroke="#ff6f99" stroke-width="5" stroke-linecap="round"/>
      <path d="M90 50 q5 -4 10 0 t10 0 M90 64 q5 -4 10 0 t10 0 M90 78 q4 -4 8 0" fill="none" stroke="#3a3346" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M96 92 l6 6 12 -14" fill="none" stroke="#3fa05a" stroke-width="5" stroke-linecap="round"/>
    </g>
  </symbol>
`);
