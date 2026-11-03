/* Gioco di Scienze · Capitolo 1 · Altri ritratti che si animano:
   Jeanne Villepreux-Power, Charles Darwin, Maria Sibylla Merian, Al-Jahiz.
   Sono ritratti DI FANTASIA in stile cartone (per Al-Jahiz non esistono ritratti dal vero).
   Stessa struttura dei ritratti di cap1-personaggi.js: .sveglio-no / .sveglio-si / .bocca */
(function () {
  var B = 'stroke="#1d1428" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"';
  function occhi(x1, x2, y, iride) {
    return '<g class="sveglio-no"><path d="M' + (x1 - 6) + " " + y + " Q" + x1 + " " + (y + 3) + " " + (x1 + 6) + " " + y + " M" + (x2 - 6) + " " + y + " Q" + x2 + " " + (y + 3) + " " + (x2 + 6) + " " + y + '" fill="none" stroke-width="2.5"/></g>' +
      '<g class="sveglio-si"><ellipse cx="' + x1 + '" cy="' + y + '" rx="6" ry="5" fill="#fff"/><ellipse cx="' + x2 + '" cy="' + y + '" rx="6" ry="5" fill="#fff"/>' +
      '<circle cx="' + (x1 + 1) + '" cy="' + y + '" r="2.8" fill="' + iride + '" stroke="none"/><circle cx="' + (x2 + 1) + '" cy="' + y + '" r="2.8" fill="' + iride + '" stroke="none"/></g>';
  }
  function cornice(dentro) {
    return '<svg viewBox="0 0 180 220">' +
      '<rect x="4" y="4" width="172" height="212" rx="10" fill="url(#g-oro)" stroke="#1d1428" stroke-width="4"/>' +
      '<rect x="16" y="16" width="148" height="188" rx="4" fill="#5e3f12"/>' +
      '<g transform="translate(20 22)">' + dentro + "</g>" +
      '<rect x="20" y="22" width="140" height="176" fill="url(#g-vetro)" opacity=".7"/>' +
      '<path d="M12 12 L168 12" stroke="#fff3c4" stroke-width="2" opacity=".6"/></svg>';
  }

  /* JEANNE VILLEPREUX-POWER: capelli scuri con la riga in mezzo e i boccoli, abito con colletto ampio; in mano una conchiglia di argonauta */
  var villepreux =
    '<rect width="140" height="176" fill="#22303a"/><rect width="140" height="176" fill="#2a5a6a" opacity=".35"/>' +
    '<g ' + B + '>' +
      '<path d="M8 176 Q16 120 70 112 Q124 120 132 176 Z" fill="#3a2a52"/>' +
      '<path d="M34 120 Q70 140 106 120 Q100 136 70 142 Q40 136 34 120 Z" fill="#f4f0e6"/>' +
      '<path d="M60 100 L60 116 L80 116 L80 100 Z" fill="#d8a888"/>' +
      '<ellipse cx="70" cy="68" rx="24" ry="30" fill="#ecc4a4"/>' +
      '<path d="M46 66 Q44 34 70 32 Q96 34 94 66 Q90 46 72 44 L70 40 L68 44 Q50 46 46 66 Z" fill="#3a2418"/>' +
      '<g fill="#3a2418"><circle cx="44" cy="70" r="7"/><circle cx="42" cy="82" r="6"/><circle cx="96" cy="70" r="7"/><circle cx="98" cy="82" r="6"/></g>' +
      '<path d="M50 56 Q58 52 64 56 M76 56 Q82 52 90 56" fill="none" stroke="#3a2418" stroke-width="2.5"/>' +
      occhi(58, 82, 64, "#3a2a1a") +
      '<path d="M70 66 Q67 76 70 79 Q73 79 75 77" fill="none" stroke="#b8846a" stroke-width="2"/>' +
      '<path d="M62 86 Q70 90 78 86" fill="none" stroke="#a84a4a" stroke-width="2"/>' +
      '<ellipse class="bocca" cx="70" cy="87" rx="4.5" ry="1.6" fill="#7a2a2a" stroke="none"/>' +
      '<path d="M96 160 Q90 140 104 130 Q122 124 128 142 Q130 160 112 166 Z" fill="#f6efe0"/>' +
      '<path d="M102 156 Q98 142 108 134 M112 160 Q108 144 118 136" fill="none" stroke="#c8b48a" stroke-width="1.5"/>' +
    "</g>";

  /* CHARLES DARWIN (anziano): calvo, sopracciglia folte, lunga barba bianca, giacca scura */
  var darwin =
    '<rect width="140" height="176" fill="#2a2622"/><rect width="140" height="176" fill="#5a4a2a" opacity=".3"/>' +
    '<g ' + B + '>' +
      '<path d="M4 176 Q12 116 70 108 Q128 116 136 176 Z" fill="#2a2a30"/>' +
      '<path d="M58 98 L58 112 L82 112 L82 98 Z" fill="#c89a7a"/>' +
      '<ellipse cx="70" cy="62" rx="26" ry="31" fill="#e0b494"/>' +
      '<path d="M44 60 Q40 74 46 82 M96 60 Q100 74 94 82" fill="none" stroke="#d8d4cc" stroke-width="7"/>' +
      '<path d="M50 38 Q70 26 90 38" fill="none" stroke="#f6e6d4" stroke-width="5" opacity=".6"/>' +
      '<path d="M46 74 Q40 128 70 140 Q100 128 94 74 Q86 90 70 90 Q54 90 46 74 Z" fill="#e8e4dc"/>' +
      '<path d="M56 96 Q60 120 66 132 M74 98 Q80 118 84 128 M64 104 Q68 122 72 136" fill="none" stroke="#b8b4ac" stroke-width="1.5"/>' +
      '<path d="M48 52 Q58 44 66 52 M74 52 Q82 44 92 52" fill="#d8d4cc" stroke="#9a968e" stroke-width="5"/>' +
      occhi(58, 82, 60, "#3a4a5a") +
      '<path d="M70 62 Q66 76 70 80 Q74 80 76 78" fill="none" stroke="#a87a5a" stroke-width="2"/>' +
      '<path d="M60 88 Q70 84 80 88" fill="#d8d4cc" stroke-width="2"/>' +
      '<ellipse class="bocca" cx="70" cy="92" rx="5" ry="1.6" fill="#5a3a30" stroke="none"/>' +
    "</g>";

  /* MARIA SIBYLLA MERIAN: abito scuro con colletto bianco, capelli raccolti; in mano un pennello e un bruco */
  var merian =
    '<rect width="140" height="176" fill="#2a2a22"/><rect width="140" height="176" fill="#5a5a2a" opacity=".3"/>' +
    '<g ' + B + '>' +
      '<path d="M6 176 Q14 118 70 110 Q126 118 134 176 Z" fill="#1e1e2a"/>' +
      '<path d="M40 116 Q70 132 100 116 L96 128 Q70 140 44 128 Z" fill="#f4f0e6"/>' +
      '<path d="M60 98 L60 114 L80 114 L80 98 Z" fill="#d8a888"/>' +
      '<ellipse cx="70" cy="66" rx="24" ry="30" fill="#ecc8a8"/>' +
      '<path d="M46 62 Q46 32 70 32 Q94 32 94 62 Q88 44 70 42 Q52 44 46 62 Z" fill="#6a4a2a"/>' +
      '<ellipse cx="70" cy="34" rx="20" ry="9" fill="#6a4a2a"/>' +
      '<path d="M50 54 Q58 50 64 54 M76 54 Q82 50 90 54" fill="none" stroke="#5a3a1a" stroke-width="2.5"/>' +
      occhi(58, 82, 62, "#3a5a3a") +
      '<path d="M70 64 Q67 74 70 77 Q73 77 75 75" fill="none" stroke="#b8846a" stroke-width="2"/>' +
      '<path d="M62 84 Q70 88 78 84" fill="none" stroke="#a84a4a" stroke-width="2"/>' +
      '<ellipse class="bocca" cx="70" cy="85" rx="4.5" ry="1.6" fill="#7a2a2a" stroke="none"/>' +
      '<path d="M18 150 L44 128" stroke="#8a5a2a" stroke-width="4"/><path d="M44 128 L50 122" stroke="#1d1428" stroke-width="5"/>' +
      '<path d="M98 150 q6 -8 12 0 q6 -8 12 0" fill="#7ac84a" stroke-width="2"/><circle cx="124" cy="148" r="4" fill="#7ac84a" stroke-width="1.5"/>' +
    "</g>";

  /* AL-JAHIZ: studioso di Bassora, turbante chiaro, barba scura, un libro aperto e un calamo */
  var aljahiz =
    '<rect width="140" height="176" fill="#2a2420"/><rect width="140" height="176" fill="#6a4a2a" opacity=".3"/>' +
    '<g ' + B + '>' +
      '<path d="M6 176 Q14 118 70 110 Q126 118 134 176 Z" fill="#4a6a5a"/>' +
      '<path d="M50 116 L70 150 L90 116" fill="none" stroke="#2a4a3a" stroke-width="3"/>' +
      '<path d="M60 98 L60 114 L80 114 L80 98 Z" fill="#a87a54"/>' +
      '<ellipse cx="70" cy="68" rx="24" ry="29" fill="#b88a62"/>' +
      '<path d="M44 52 Q42 26 70 24 Q98 26 96 52 Q90 46 70 46 Q50 46 44 52 Z" fill="#f0e6d0"/>' +
      '<path d="M46 44 Q70 30 94 44 M48 36 Q70 24 92 36" fill="none" stroke="#c8bca4" stroke-width="2"/>' +
      '<path d="M48 76 Q46 108 70 114 Q94 108 92 76 Q84 90 70 90 Q56 90 48 76 Z" fill="#3a2a22"/>' +
      '<path d="M50 58 Q58 54 64 58 M76 58 Q82 54 90 58" fill="none" stroke="#2a1a12" stroke-width="3"/>' +
      occhi(58, 82, 66, "#2a1a10") +
      '<path d="M70 68 Q66 78 70 82 Q74 82 76 80" fill="none" stroke="#8a5a3a" stroke-width="2"/>' +
      '<path d="M60 90 Q70 86 80 90" fill="#2a1a12" stroke-width="2"/>' +
      '<ellipse class="bocca" cx="70" cy="93" rx="5" ry="1.6" fill="#5a2a20" stroke="none"/>' +
      '<path d="M86 156 L104 142 L134 150 L118 166 Z" fill="#f6efe0"/><path d="M104 142 L118 166" stroke-width="2"/>' +
      '<path d="M110 150 h12 M108 156 h10" stroke="#5a4a3a" stroke-width="1.5"/>' +
    "</g>";

  var arte = { villepreux: villepreux, darwin: darwin, merian: merian, aljahiz: aljahiz };
  Object.keys(arte).forEach(function (k) { RitrattiCap1[k] = cornice(arte[k]); });
  var figVecchia = RitrattiCap1.figurina;
  RitrattiCap1.figurina = function (chi) { return arte[chi] ? '<svg viewBox="0 0 140 176">' + arte[chi] + "</svg>" : figVecchia(chi); };
})();
