/* Gioco di Scienze · Capitolo 1 · Ritratti (Aristotele, Lamarck) e il Barone Etichetti.
   I ritratti hanno due stati: addormentati (.sveglio-no) e svegli (.sveglio-si), e una bocca (.bocca)
   che si muove quando parlano. Sono ritratti di fantasia: non riproducono quadri reali. */
var RitrattiCap1 = (function () {
  var BORDO = 'stroke="#1d1428" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"';

  function cornice(dentro) {
    return '<svg viewBox="0 0 180 220">' +
      '<rect x="4" y="4" width="172" height="212" rx="10" fill="url(#g-oro)" stroke="#1d1428" stroke-width="4"/>' +
      '<rect x="16" y="16" width="148" height="188" rx="4" fill="#5e3f12"/>' +
      '<g transform="translate(20 22)">' + dentro + "</g>" +
      '<rect x="20" y="22" width="140" height="176" fill="url(#g-vetro)" opacity=".7"/>' +
      '<path d="M12 12 L168 12" stroke="#fff3c4" stroke-width="2" opacity=".6"/></svg>';
  }

  /* ARISTOTELE: barba riccia, mantello chiaro (himation) */
  var aristotele =
    '<rect width="140" height="176" fill="#2e2630"/><rect width="140" height="176" fill="#5a3a2a" opacity=".35"/>' +
    '<g ' + BORDO + '>' +
      '<path d="M6 176 Q14 120 70 112 Q126 120 134 176 Z" fill="#d8cfb8"/>' +
      '<path d="M30 176 Q48 134 100 118 M60 176 Q74 148 118 132" fill="none" stroke="#a89a80" stroke-width="2"/>' +
      '<path d="M58 104 L60 120 L82 120 L84 104 Z" fill="#b88a64"/>' +
      '<ellipse cx="70" cy="70" rx="27" ry="32" fill="#c89a74"/>' +
      '<g fill="#6a5a4a"><circle cx="48" cy="48" r="9"/><circle cx="58" cy="40" r="9"/><circle cx="70" cy="37" r="9"/><circle cx="82" cy="40" r="9"/><circle cx="92" cy="48" r="9"/></g>' +
      '<path d="M44 76 Q42 112 70 120 Q98 112 96 76 Q86 92 70 92 Q54 92 44 76 Z" fill="#7a6a5a"/>' +
      '<g fill="#8a7a6a" stroke-width="1.5"><circle cx="54" cy="100" r="5"/><circle cx="66" cy="108" r="5"/><circle cx="78" cy="106" r="5"/><circle cx="88" cy="96" r="5"/><circle cx="60" cy="92" r="4"/><circle cx="82" cy="88" r="4"/></g>' +
      '<path d="M54 86 Q70 80 86 86" fill="#6a5a4a" stroke-width="2"/>' +
      '<path d="M68 66 L66 80 L72 80" fill="none" stroke="#8a5a3a" stroke-width="2"/>' +
      '<path d="M50 56 Q58 52 64 56 M76 56 Q82 52 90 56" fill="none" stroke-width="3.5"/>' +
      '<g class="sveglio-no"><path d="M52 64 Q58 67 64 64 M76 64 Q82 67 88 64" fill="none" stroke-width="2.5"/></g>' +
      '<g class="sveglio-si"><ellipse cx="58" cy="64" rx="6" ry="5" fill="#fff"/><ellipse cx="82" cy="64" rx="6" ry="5" fill="#fff"/>' +
        '<circle cx="59" cy="64" r="2.8" fill="#2a1a10" stroke="none"/><circle cx="83" cy="64" r="2.8" fill="#2a1a10" stroke="none"/></g>' +
      '<ellipse class="bocca" cx="70" cy="90" rx="6" ry="2" fill="#3a1a14" stroke="none"/>' +
    "</g>";

  /* LAMARCK: giacca scura con colletto alto, cravatta bianca, capelli grigi tirati indietro */
  var lamarck =
    '<rect width="140" height="176" fill="#262a36"/><rect width="140" height="176" fill="#3a4a5a" opacity=".3"/>' +
    '<g ' + BORDO + '>' +
      '<path d="M4 176 Q12 118 70 108 Q128 118 136 176 Z" fill="#2a2a40"/>' +
      '<path d="M40 118 L70 160 L100 118 L86 112 L70 130 L54 112 Z" fill="#3a3a58"/>' +
      '<path d="M56 108 Q70 104 84 108 L88 126 Q70 136 52 126 Z" fill="#f4f0e6"/>' +
      '<path d="M62 120 Q70 128 78 120 M60 128 Q70 136 80 128" fill="none" stroke="#c8c0b0" stroke-width="1.5"/>' +
      '<path d="M60 96 L60 110 L80 110 L80 96 Z" fill="#c89a7a"/>' +
      '<ellipse cx="70" cy="64" rx="25" ry="31" fill="#e0b89a"/>' +
      '<path d="M45 64 Q42 36 58 30 Q70 26 82 30 Q98 36 95 64 Q92 46 86 42 Q70 38 54 42 Q48 46 45 64 Z" fill="#b8b0a8"/>' +
      '<path d="M45 64 Q44 80 50 88 M95 64 Q96 80 90 88" fill="none" stroke="#b8b0a8" stroke-width="6"/>' +
      '<path d="M70 62 Q66 76 68 80 Q72 82 76 79" fill="none" stroke="#9a6a4a" stroke-width="2"/>' +
      '<path d="M52 54 Q58 50 65 54 M75 54 Q82 50 88 54" fill="none" stroke="#6a6060" stroke-width="3"/>' +
      '<g class="sveglio-no"><path d="M53 61 Q59 64 65 61 M75 61 Q81 64 87 61" fill="none" stroke-width="2.5"/></g>' +
      '<g class="sveglio-si"><ellipse cx="59" cy="61" rx="6" ry="5" fill="#fff"/><ellipse cx="81" cy="61" rx="6" ry="5" fill="#fff"/>' +
        '<circle cx="60" cy="61" r="2.8" fill="#2a3a4a" stroke="none"/><circle cx="82" cy="61" r="2.8" fill="#2a3a4a" stroke="none"/></g>' +
      '<path d="M62 88 Q70 90 78 88" fill="none" stroke="#8a4a3a" stroke-width="2"/>' +
      '<ellipse class="bocca" cx="70" cy="89" rx="5" ry="1.6" fill="#5a2a24" stroke="none"/>' +
    "</g>";

  return {
    aristotele: cornice(aristotele),
    lamarck: cornice(lamarck),
    /* versione per la figurina "Chi era?" (sempre sveglio, senza cornice) */
    figurina: function (chi) { return '<svg viewBox="0 0 140 176">' + ({ aristotele: aristotele, lamarck: lamarck })[chi] + "</svg>"; }
  };
})();

Grafica.definizioni(`
  <linearGradient id="g-redingote" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#3a1a4a"/><stop offset=".55" stop-color="#6a2a7a"/><stop offset="1" stop-color="#8a4a9a"/>
  </linearGradient>
  <linearGradient id="g-righe" x1="0" y1="0" x2="1" y2="0" gradientTransform="rotate(90)">
    <stop offset="0" stop-color="#2a2a3a"/><stop offset="1" stop-color="#1a1a28"/>
  </linearGradient>
  <pattern id="p-righe" width="10" height="10" patternUnits="userSpaceOnUse">
    <rect width="10" height="10" fill="#2a2a3a"/><rect width="4" height="10" fill="#4a4a5e"/>
  </pattern>

  <!-- IL BARONE VITTORIO ETICHETTI: lunghissimo, monocolo, etichettatrice rosa. Piedi in 0,0, guarda a destra -->
  <symbol id="etichetti" viewBox="-100 -700 220 715" overflow="visible">
    <ellipse cx="6" cy="0" rx="66" ry="10" fill="#000" opacity=".4"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <!-- gambe sottilissime a righe e scarpe a punta -->
      <path d="M-14 -300 L-18 -20 L-4 -20 L2 -300 Z M10 -300 L18 -20 L32 -20 L26 -300 Z" fill="url(#p-righe)"/>
      <path d="M-30 -2 Q-34 -22 -4 -22 L-4 0 Z M14 0 L14 -22 Q46 -24 64 -4 Q60 2 14 0 Z" fill="#1a1a28"/>
      <!-- redingote lunga con le code -->
      <path d="M-40 -510 C-52 -430 -56 -340 -50 -250 L-20 -270 L4 -250 L30 -270 L56 -250 C60 -340 56 -430 44 -510 Z" fill="url(#g-redingote)"/>
      <path d="M-6 -510 L-16 -320 M14 -510 L22 -320" stroke="#2a0a3a" stroke-width="2.5"/>
      <path d="M-8 -512 L4 -470 L16 -512 Z" fill="#f4f0e6"/>
      <path d="M-2 -500 L10 -500 L4 -486 Z" fill="#ff5fa2"/>
      <!-- etichette appiccicate ovunque, anche su di sé -->
      <g fill="#ff5fa2" stroke-width="2">
        <rect x="-44" y="-440" width="26" height="12" rx="2" transform="rotate(-12 -31 -434)"/>
        <rect x="22" y="-380" width="26" height="12" rx="2" transform="rotate(9 35 -374)"/>
        <rect x="-38" y="-320" width="24" height="11" rx="2" transform="rotate(6 -26 -315)"/>
      </g>
      <!-- braccio con l'etichettatrice, alzato come un timbro -->
      <path d="M36 -496 C66 -470 80 -440 86 -420" fill="none" stroke="#1d1428" stroke-width="22"/>
      <path d="M36 -496 C66 -470 80 -440 86 -420" fill="none" stroke="#6a2a7a" stroke-width="16"/>
      <path d="M78 -432 L118 -440 L124 -414 L84 -404 Z" fill="#ff5fa2"/>
      <path d="M90 -404 L88 -384 L100 -386 L102 -406 Z" fill="#c8407a"/>
      <path d="M120 -426 q10 4 8 14 q-6 10 4 18 q8 8 0 16" fill="none" stroke="#fff" stroke-width="5"/>
      <path d="M120 -426 q10 4 8 14 q-6 10 4 18 q8 8 0 16" fill="none" stroke="#ff9fc8" stroke-width="2"/>
      <!-- braccio dietro -->
      <path d="M-36 -500 C-56 -440 -60 -380 -54 -330" fill="none" stroke="#1d1428" stroke-width="22"/>
      <path d="M-36 -500 C-56 -440 -60 -380 -54 -330" fill="none" stroke="#4a1a5a" stroke-width="16"/>
      <circle cx="-54" cy="-324" r="9" fill="#e8d0c0"/>
      <!-- collo lunghissimo e testa piccola -->
      <path d="M-6 -560 L-4 -508 L14 -508 L16 -560 Z" fill="#e8d0c0"/>
      <path d="M-20 -606 C-24 -580 -16 -558 4 -552 C22 -550 34 -566 34 -586 C34 -604 26 -618 8 -620 C-8 -620 -18 -616 -20 -606 Z" fill="#f0dcc8"/>
      <path d="M30 -592 Q58 -586 60 -578 Q48 -572 32 -576" fill="#f0dcc8"/>
      <!-- capelli lisci con il ricciolo, cilindro altissimo -->
      <path d="M-22 -604 Q-20 -626 6 -628 Q28 -628 34 -610 Q16 -616 -8 -612 Z" fill="#1a1a28"/>
      <path d="M8 -626 q-10 -8 -2 -14 q8 -2 6 8" fill="none" stroke-width="3"/>
      <path d="M-24 -628 L-30 -634 L46 -634 L40 -628 Z" fill="#1a1a28"/>
      <path d="M-18 -634 L-14 -700 L36 -700 L32 -634 Z" fill="#1a1a28"/>
      <path d="M-15 -650 L33 -650" stroke="#ff5fa2" stroke-width="6"/>
      <!-- monocolo, occhio, baffetti arricciati -->
      <circle cx="22" cy="-596" r="9" fill="#cfeaff" fill-opacity=".5" stroke="#b8892f" stroke-width="3"/>
      <path d="M22 -587 Q16 -560 8 -540" fill="none" stroke="#b8892f" stroke-width="1.5"/>
      <circle cx="22" cy="-596" r="3" fill="#1d1428" stroke="none"/>
      <path d="M12 -608 Q22 -614 32 -606" fill="none" stroke-width="3"/>
      <path d="M30 -570 q10 -6 20 0 q6 -6 2 -10 M30 -570 q-8 -6 -16 -2 q-4 -6 2 -9" fill="none" stroke-width="2.5"/>
      <path d="M34 -562 Q42 -558 48 -562" fill="none" stroke-width="2.5"/>
    </g>
  </symbol>

  <!-- ================= OGGETTI DEL CAPITOLO 1 ================= -->
  <radialGradient id="g-lente" cx="40%" cy="35%" r="70%">
    <stop offset="0" stop-color="#e8f6ff"/><stop offset=".5" stop-color="#7ac8ff"/><stop offset="1" stop-color="#2a6aa8"/>
  </radialGradient>
  <symbol id="ogg-lente" viewBox="0 0 140 140">
    <ellipse cx="70" cy="124" rx="40" ry="5" fill="#000" opacity=".25"/>
    <g stroke="#1d1428" stroke-width="3.5" stroke-linejoin="round">
      <circle cx="70" cy="64" r="44" fill="url(#g-ottone)"/>
      <circle cx="70" cy="64" r="34" fill="url(#g-lente)"/>
      <path d="M44 50 A30 30 0 0 1 66 32" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round" opacity=".8"/>
      <path d="M62 108 L78 108 L76 122 L64 122 Z" fill="url(#g-ottone)"/>
    </g>
  </symbol>
  <symbol id="ogg-lanterna-lente" viewBox="0 0 140 140">
    <use href="#ogg-lanterna"/>
    <g stroke="#1d1428" stroke-width="3">
      <circle cx="96" cy="76" r="22" fill="url(#g-ottone)"/>
      <circle cx="96" cy="76" r="15" fill="url(#g-lente)"/>
      <path d="M84 70 A12 12 0 0 1 94 62" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
    </g>
  </symbol>
  <symbol id="ogg-gamberto" viewBox="0 0 140 140">
    <ellipse cx="70" cy="126" rx="38" ry="5" fill="#000" opacity=".25"/>
    <g stroke="#1d1428" stroke-width="3.5" stroke-linejoin="round">
      <rect x="34" y="34" width="72" height="90" rx="14" fill="#9fe8d8" fill-opacity=".55"/>
      <rect x="38" y="64" width="64" height="56" rx="10" fill="#3fb89a" fill-opacity=".6" stroke="none"/>
      <rect x="30" y="22" width="80" height="16" rx="5" fill="url(#g-ottone)"/>
      <path d="M44 44 L44 110" stroke="#fff" stroke-width="5" opacity=".5"/>
    </g>
    <use href="#gamberto" x="40" y="62" width="64" height="46"/>
  </symbol>
  <symbol id="ogg-farfalla" viewBox="0 0 140 140">
    <ellipse cx="70" cy="122" rx="44" ry="5" fill="#000" opacity=".25"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round">
      <path d="M70 66 C50 30 14 30 16 58 C18 80 50 80 70 70 Z M70 66 C90 30 126 30 124 58 C122 80 90 80 70 70 Z" fill="#3f8fd8"/>
      <path d="M70 72 C54 86 30 102 40 112 C52 120 66 98 70 80 Z M70 72 C86 86 110 102 100 112 C88 120 74 98 70 80 Z" fill="#2a5f9a"/>
      <g fill="#ffd36b" stroke-width="1.5"><circle cx="38" cy="54" r="7"/><circle cx="102" cy="54" r="7"/><circle cx="48" cy="100" r="4"/><circle cx="92" cy="100" r="4"/></g>
      <path d="M70 56 L70 104" stroke-width="7"/>
      <path d="M68 56 Q60 36 52 32 M72 56 Q80 36 88 32" fill="none" stroke-width="2.5"/>
      <path d="M70 28 L70 116" stroke="#ffd36b" stroke-width="1.5" stroke-dasharray="4 4" opacity=".9"/>
    </g>
  </symbol>
  <symbol id="ogg-passero" viewBox="0 0 140 140">
    <ellipse cx="70" cy="122" rx="40" ry="5" fill="#000" opacity=".25"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round">
      <path d="M50 116 L90 116 L86 104 L54 104 Z" fill="url(#g-legno)"/>
      <path d="M62 104 L60 92 M78 104 L80 92" stroke-width="3"/>
      <path d="M30 76 Q28 46 60 40 Q92 36 104 60 Q112 82 86 94 Q56 100 40 92 Z" fill="#a8743a"/>
      <path d="M44 70 Q70 58 96 74 Q72 90 44 70 Z" fill="#7a4a22"/>
      <path d="M30 76 L8 82 L28 68 Z" fill="#7a4a22"/>
      <circle cx="92" cy="50" r="18" fill="#a8743a"/>
      <path d="M108 50 L124 54 L108 58 Z" fill="#e8b04a"/>
      <circle cx="96" cy="47" r="4" fill="#1d1428"/>
      <path d="M82 60 Q90 68 100 62" fill="none" stroke="#f6efe0" stroke-width="3"/>
    </g>
  </symbol>
  <symbol id="ogg-pesce" viewBox="0 0 140 140">
    <ellipse cx="70" cy="122" rx="44" ry="5" fill="#000" opacity=".25"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round">
      <path d="M24 70 Q50 34 92 44 Q118 52 120 70 Q118 88 92 96 Q50 106 24 70 Z" fill="#ff7a2a"/>
      <path d="M24 70 L6 50 L10 70 L6 90 Z" fill="#ff7a2a"/>
      <path d="M52 44 Q60 70 52 98 M80 42 Q88 70 80 98" fill="none" stroke="#fff" stroke-width="10"/>
      <path d="M52 44 Q60 70 52 98 M80 42 Q88 70 80 98" fill="none" stroke="#1d1428" stroke-width="2"/>
      <path d="M64 40 Q74 26 88 34 Z" fill="#ff7a2a"/>
      <circle cx="104" cy="64" r="6" fill="#fff"/><circle cx="106" cy="64" r="3" fill="#1d1428"/>
    </g>
  </symbol>
  <!-- cassa sigillata di Etichetti -->
  <symbol id="cassa" viewBox="0 0 160 130">
    <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
      <rect x="6" y="18" width="148" height="106" rx="4" fill="url(#g-legno)"/>
      <path d="M6 54 L154 54 M6 90 L154 90" stroke="#3e2416" stroke-width="4"/>
      <path d="M10 22 L150 120 M150 22 L10 120" stroke="#5a3622" stroke-width="6" opacity=".7"/>
      <rect x="0" y="8" width="160" height="16" rx="3" fill="#8a5a36"/>
      <g fill="#c8c8d8" stroke-width="1.5"><circle cx="14" cy="16" r="3"/><circle cx="146" cy="16" r="3"/><circle cx="14" cy="116" r="3"/><circle cx="146" cy="116" r="3"/></g>
    </g>
  </symbol>
  <symbol id="cassa-aperta" viewBox="0 0 160 130">
    <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
      <rect x="6" y="30" width="148" height="94" rx="4" fill="url(#g-legno)"/>
      <path d="M12 34 L148 34 L140 52 L20 52 Z" fill="#2a160c"/>
      <path d="M20 40 q20 -18 40 -4 q16 -16 36 -2 q18 -14 40 4" fill="#e8c96a" stroke-width="2.5"/>
      <path d="M6 66 L154 66 M6 98 L154 98" stroke="#3e2416" stroke-width="4"/>
      <path d="M118 30 L160 -6 L168 6 L130 36 Z" fill="#8a5a36"/>
    </g>
  </symbol>
`);
