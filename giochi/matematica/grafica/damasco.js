/* Gioco di Matematica · capitolo 1: DAMASCO, circa 952. Il mercato delle stoffe (ocra e turchese).
   Le pezze di stoffa, i cartellini e i personaggi sono elementi della stanza (si animano e si traducono). */
Grafica.definizioni(`
  <linearGradient id="g-dam-cielo" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#e9a64a"/><stop offset=".55" stop-color="#f3c77a"/><stop offset="1" stop-color="#f7dca0"/>
  </linearGradient>
  <linearGradient id="g-dam-muro" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#d9a868"/><stop offset="1" stop-color="#b07a44"/>
  </linearGradient>
  <linearGradient id="g-dam-ombra" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#5a3a24"/><stop offset="1" stop-color="#3a2416"/>
  </linearGradient>
  <linearGradient id="g-dam-terra" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#c89a62"/><stop offset="1" stop-color="#8a6038"/>
  </linearGradient>
  <linearGradient id="g-dam-turchese" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#1f8a8a"/><stop offset="1" stop-color="#5cc8c0"/>
  </linearGradient>
  <linearGradient id="g-dam-legno" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#8a5a32"/><stop offset="1" stop-color="#4e3018"/>
  </linearGradient>
  <pattern id="p-dam-piastrelle" width="40" height="40" patternUnits="userSpaceOnUse">
    <rect width="40" height="40" fill="#1f7a7a"/>
    <path d="M20 4 L36 20 L20 36 L4 20 Z" fill="#5cc8c0" stroke="#0e3a3a" stroke-width="2"/>
    <circle cx="20" cy="20" r="5" fill="#f3c77a" stroke="#0e3a3a" stroke-width="1.5"/>
  </pattern>

  <!-- pezza di stoffa arrotolata (vista di lato), colore passato con --stoffa -->
  <symbol id="dam-pezza" viewBox="0 0 220 120">
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round">
      <ellipse cx="110" cy="112" rx="104" ry="8" fill="#000" opacity=".3" stroke="none"/>
      <path d="M30 20 L190 20 Q214 60 190 104 L30 104 Z" style="fill:var(--stoffa,#c0392b)"/>
      <path d="M44 32 L184 32 M44 92 L184 92" stroke="#fff" stroke-width="2.5" opacity=".35"/>
      <ellipse cx="30" cy="62" rx="22" ry="42" style="fill:var(--stoffa,#c0392b)"/>
      <ellipse cx="30" cy="62" rx="14" ry="30" fill="#000" opacity=".18"/>
      <path d="M30 42 Q22 62 30 82 Q38 62 30 42" fill="none" stroke="#1d1428" stroke-width="2"/>
    </g>
  </symbol>
`);

/* personaggi di Damasco e Samarcanda, interi: { posa: "seduto" | "in piedi", abito, bordo, pelle, barba, berretto, leggio, extra }
   seduto = a gambe incrociate su un cuscino (con il leggio basso davanti, se serve); la bocca si muove quando parla */
var FiguraDamasco = function (o) {
  function testa(dx, dy) {
    return '<g transform="translate(' + dx + " " + dy + ')">' +
      '<path d="M100 150 L102 128 L138 128 L140 150 Z" fill="' + o.pelle + '"/>' +
      '<ellipse cx="120" cy="96" rx="40" ry="46" fill="' + o.pelle + '"/>' +
      '<path d="M84 104 Q86 152 120 156 Q154 152 156 104 Q150 126 120 128 Q90 126 84 104 Z" fill="' + o.barba + '"/>' +
      '<path d="M78 76 Q80 40 120 38 Q160 40 162 76 Q140 62 120 62 Q100 62 78 76 Z" fill="' + o.berretto + '"/>' +
      '<path d="M98 86 Q106 82 112 86 M128 86 Q134 82 142 86" fill="none" stroke="#3a2416" stroke-width="3.5"/>' +
      '<circle cx="105" cy="96" r="4" fill="#1d1428" stroke="none"/><circle cx="135" cy="96" r="4" fill="#1d1428" stroke="none"/>' +
      '<path d="M120 100 Q126 112 118 116" fill="none" stroke="#7a4a2a" stroke-width="3"/>' +
      '<g class="bocca"><path d="M108 128 Q120 134 132 128 Q120 138 108 128 Z" fill="#6a2a26" stroke-width="2"/></g></g>';
  }
  var t = 'stroke="#1d1428" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"';
  if (o.posa === "in piedi") {
    return '<svg viewBox="0 0 200 440"><g ' + t + ">" +
      '<ellipse cx="100" cy="430" rx="70" ry="9" fill="#000" opacity=".35" stroke="none"/>' +
      '<path d="M66 418 L60 432 L92 432 L92 418 Z M108 418 L108 432 L140 432 L134 418 Z" fill="#5a3418"/>' +
      '<path d="M54 160 Q40 300 50 420 L150 420 Q160 300 146 160 Q100 140 54 160 Z" fill="' + o.abito + '"/>' +
      '<path d="M100 156 L100 420" stroke="' + o.bordo + '" stroke-width="6"/>' +
      '<path d="M60 230 Q100 240 140 230" fill="none" stroke="' + o.bordo + '" stroke-width="8"/>' +
      '<path d="M54 166 Q30 230 46 300 L64 296 Q56 240 70 190 Z M146 166 Q170 230 154 300 L136 296 Q144 240 130 190 Z" fill="' + o.abito + '"/>' +
      '<ellipse cx="55" cy="304" rx="11" ry="12" fill="' + o.pelle + '"/><ellipse cx="145" cy="304" rx="11" ry="12" fill="' + o.pelle + '"/>' +
      testa(-20, 10) + (o.extra || "") + "</g></svg>";
  }
  return '<svg viewBox="0 0 260 300"><g ' + t + ">" +
    '<ellipse cx="130" cy="292" rx="122" ry="8" fill="#000" opacity=".35" stroke="none"/>' +
    '<path d="M14 280 Q14 252 40 246 L220 246 Q246 252 246 280 Q130 296 14 280 Z" fill="#8a2a2a"/>' +
    '<path d="M24 270 Q130 284 236 270" fill="none" stroke="#e9b45a" stroke-width="3"/>' +
    /* gambe incrociate: la veste si allarga sulle ginocchia, spuntano le babbucce */
    '<path d="M30 256 Q36 216 86 206 L174 206 Q224 216 230 256 Q130 272 30 256 Z" fill="' + o.abito + '"/>' +
    '<path d="M110 240 Q130 252 150 240" fill="none" stroke="#1d1428" stroke-width="2.5" opacity=".6"/>' +
    '<path d="M96 246 Q108 236 124 244 L118 254 Z M164 246 Q152 236 136 244 L142 254 Z" fill="#5a3418"/>' +
    '<path d="M76 216 Q66 170 96 150 Q130 136 164 150 Q194 170 184 216 Z" fill="' + o.abito + '"/>' +
    '<path d="M106 150 L130 214 L154 150" fill="none" stroke="' + o.bordo + '" stroke-width="6"/>' +
    '<path d="M80 172 Q60 206 86 228 L106 222 Q90 204 98 186 Z M180 172 Q200 206 174 228 L154 222 Q170 204 162 186 Z" fill="' + o.abito + '"/>' +
    '<ellipse cx="104" cy="226" rx="11" ry="9" fill="' + o.pelle + '"/><ellipse cx="156" cy="226" rx="11" ry="9" fill="' + o.pelle + '"/>' +
    testa(10, 2) +
    (o.leggio ? '<path d="M60 236 L200 236 L190 252 L70 252 Z" fill="#6a4424"/><path d="M76 252 L72 280 M184 252 L188 280" stroke="#3a2416" stroke-width="7"/>' +
      '<path d="M84 228 L176 226 L180 238 L80 240 Z" fill="#f3e2b8"/><path d="M96 232 L126 231 M134 231 L162 230" stroke="#6a4424" stroke-width="2"/>' : "") +
    (o.extra || "") + "</g></svg>";
};

Grafica.sfondo("damasco", `
  <rect width="1600" height="900" fill="url(#g-dam-cielo)"/>
  <circle cx="1320" cy="120" r="70" fill="#fff4cc" opacity=".8"/>
  <!-- tetti e cupole in lontananza -->
  <g fill="#c9945a" stroke="#6a4424" stroke-width="3" opacity=".8">
    <path d="M0 330 L0 250 L140 250 L140 220 L260 220 L260 300 L420 300 L420 330 Z"/>
    <path d="M1180 330 L1180 260 Q1240 190 1300 260 L1300 230 L1460 230 L1460 280 L1600 280 L1600 330 Z"/>
    <path d="M1236 200 L1244 176 L1252 200" fill="#e9b45a"/>
  </g>
  <!-- portico con archi -->
  <rect x="0" y="300" width="1600" height="360" fill="url(#g-dam-muro)" stroke="#6a4424" stroke-width="3"/>
  <rect x="0" y="300" width="1600" height="34" fill="url(#p-dam-piastrelle)" stroke="#0e3a3a" stroke-width="3"/>
  <g stroke="#6a4424" stroke-width="4">
    <path d="M60 660 L60 430 Q60 360 160 360 Q260 360 260 430 L260 660 Z" fill="url(#g-dam-ombra)"/>
    <path d="M380 660 L380 430 Q380 360 480 360 Q580 360 580 430 L580 660 Z" fill="url(#g-dam-ombra)"/>
    <path d="M1020 660 L1020 430 Q1020 360 1120 360 Q1220 360 1220 430 L1220 660 Z" fill="url(#g-dam-ombra)"/>
    <path d="M1340 660 L1340 430 Q1340 360 1440 360 Q1540 360 1540 430 L1540 660 Z" fill="url(#g-dam-ombra)"/>
  </g>
  <g fill="none" stroke="url(#p-dam-piastrelle)" stroke-width="14">
    <path d="M60 430 Q60 360 160 360 Q260 360 260 430"/><path d="M380 430 Q380 360 480 360 Q580 360 580 430"/>
    <path d="M1020 430 Q1020 360 1120 360 Q1220 360 1220 430"/><path d="M1340 430 Q1340 360 1440 360 Q1540 360 1540 430"/>
  </g>
  <!-- tende di stoffa appese nel portico -->
  <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round">
    <path d="M80 380 L240 380 L230 520 Q160 540 90 520 Z" fill="#b8322c" opacity=".9"/>
    <path d="M400 380 L560 380 L550 500 Q480 520 410 500 Z" fill="#2f62c0" opacity=".9"/>
    <path d="M1360 380 L1520 380 L1510 510 Q1440 530 1370 510 Z" fill="#2f9a4e" opacity=".9"/>
  </g>
  <!-- banco del mercante: tettoia a strisce e tavolo -->
  <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <path d="M640 330 L1000 330 L1040 410 L600 410 Z" fill="#f3e2b8"/>
    <path d="M660 330 L630 410 M720 330 L700 410 M780 330 L770 410 M840 330 L840 410 M900 330 L910 410 M960 330 L980 410" stroke="#b8322c" stroke-width="16"/>
    <path d="M600 410 L1040 410 L1040 430 L600 430 Z" fill="#b8322c"/>
    <path d="M620 430 L620 640 M1020 430 L1020 640" stroke="url(#g-dam-legno)" stroke-width="16"/>
    <path d="M590 560 L1050 560 L1060 600 L580 600 Z" fill="url(#g-dam-legno)"/>
    <path d="M600 600 L600 660 M1040 600 L1040 660" stroke="#3a2416" stroke-width="12"/>
  </g>
  <!-- strada: selciato (le pietre le disegna la funzione qui sotto), ombre degli archi, tappeto -->
  <rect x="0" y="640" width="1600" height="260" fill="url(#g-dam-terra)"/>
  <g id="dam-selciato"></g>
  <g fill="#3a2416" opacity=".22">
    <path d="M60 660 L260 660 L330 760 L120 760 Z"/><path d="M380 660 L580 660 L650 760 L440 760 Z"/>
    <path d="M1020 660 L1220 660 L1290 760 L1080 760 Z"/><path d="M1340 660 L1540 660 L1600 740 L1600 760 L1400 760 Z"/>
  </g>
  <rect x="0" y="636" width="1600" height="16" fill="#000" opacity=".25"/>
  <!-- tappeto davanti al banco -->
  <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round">
    <path d="M640 700 L1000 700 L1050 790 L590 790 Z" fill="#8a2a2a"/>
    <path d="M656 708 L984 708 L1026 782 L614 782 Z" fill="none" stroke="#e9b45a" stroke-width="5"/>
    <path d="M820 716 L866 745 L820 774 L774 745 Z" fill="#1f7a7a" stroke="#e9b45a" stroke-width="3"/>
    <path d="M700 745 L730 728 L760 745 L730 762 Z M880 745 L910 728 L940 745 L910 762 Z" fill="#e9b45a" stroke-width="2"/>
    <path d="M594 790 L590 800 M620 790 L618 800 M650 790 L650 800 M990 790 L992 800 M1020 790 L1024 800 M1046 790 L1050 800" stroke="#e9b45a" stroke-width="3"/>
  </g>
  <!-- ceste di spezie -->
  <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round">
    <ellipse cx="500" cy="736" rx="140" ry="12" fill="#000" opacity=".3" stroke="none"/>
    <path d="M384 688 L408 734 L456 734 L480 688 Z" fill="#a8783a"/><path d="M386 690 Q432 640 478 690 Z" fill="#9a2a3a"/>
    <path d="M466 694 L488 738 L536 738 L558 694 Z" fill="#a8783a"/><path d="M468 696 Q512 648 556 696 Z" fill="#e8a820"/>
    <path d="M544 690 L566 734 L612 734 L634 690 Z" fill="#a8783a"/><path d="M546 692 Q590 650 632 692 Z" fill="#3a2a22"/><g fill="#8a7a6a" stroke="none"><circle cx="576" cy="680" r="2"/><circle cx="592" cy="672" r="2"/><circle cx="606" cy="684" r="2"/></g>
    <path d="M390 704 L474 704 M472 710 L552 710 M550 706 L628 706" stroke="#6a4424" stroke-width="2"/>
  </g>
  <!-- anfore e un gatto che dorme all'ombra -->
  <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round">
    <ellipse cx="1120" cy="742" rx="96" ry="10" fill="#000" opacity=".3" stroke="none"/>
    <path d="M1066 740 Q1040 700 1058 660 L1062 640 L1086 640 L1090 660 Q1108 700 1082 740 Z" fill="#c8743a"/>
    <path d="M1056 640 L1092 640" stroke-width="6"/><path d="M1052 690 Q1074 698 1096 690" fill="none" stroke="#7a3a1a" stroke-width="3"/>
    <path d="M1128 742 Q1106 712 1120 682 L1124 666 L1144 666 L1148 682 Q1162 712 1140 742 Z" fill="#1f8a8a"/>
    <path d="M1118 666 L1150 666" stroke-width="6"/>
  </g>
  <!-- Ottone, arrivato nel X secolo: la cabina in ottone a sinistra -->
  <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <ellipse cx="190" cy="742" rx="130" ry="14" fill="#000" opacity=".35" stroke="none"/>
    <rect x="80" y="440" width="220" height="300" rx="10" fill="url(#g-ottone)"/>
    <rect x="104" y="476" width="172" height="252" rx="6" fill="#ffe7a8" opacity=".85"/>
    <path d="M104 476 L276 728 M276 476 L104 728 M190 476 L190 728" stroke="#8a6a24" stroke-width="3" opacity=".7"/>
    <circle cx="190" cy="440" r="36" fill="#f3ead2"/>
    <path d="M190 440 L176 424 M190 440 L208 428" stroke="#1d1428" stroke-width="4"/>
    <circle cx="176" cy="448" r="5" fill="#1d1428"/><circle cx="204" cy="448" r="5" fill="#1d1428"/>
  </g>
`, function (svg) {
  // selciato in prospettiva: file di pietre arrotondate, sempre uguali (generatore con un seme fisso)
  var NS = "http://www.w3.org/2000/svg", g = svg.querySelector("#dam-selciato"), seme = 7;
  if (!g) return;
  function caso() { seme = (seme * 9301 + 49297) % 233280; return seme / 233280; }
  var TONI = ["#b8895a", "#c89a68", "#a87a4a", "#d0a676", "#9a6c40"];
  for (var y = 652, h = 14; y < 900; y += h + 2, h *= 1.16) {
    var w = h * 2.4;
    for (var x = -caso() * w; x < 1600; x += w + 3) {
      var p = document.createElementNS(NS, "rect");
      p.setAttribute("x", x.toFixed(1)); p.setAttribute("y", y.toFixed(1));
      p.setAttribute("width", (w * (0.8 + caso() * 0.25)).toFixed(1)); p.setAttribute("height", h.toFixed(1));
      p.setAttribute("rx", (h * 0.45).toFixed(1));
      p.setAttribute("fill", TONI[Math.floor(caso() * TONI.length)]);
      p.setAttribute("stroke", "#5a3a20"); p.setAttribute("stroke-width", "1.5");
      g.appendChild(p);
    }
  }
});
