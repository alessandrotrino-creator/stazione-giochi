/* Gioco di Scienze · Capitolo 1 · Sfondo: la SERRA del museo, di notte.
   Vetrate in ferro, piante, banco da giardiniere. Ritratto di Darwin, barattoli, vaso e annaffiatoio sono elementi a parte. */
Grafica.definizioni(`
  <linearGradient id="g-serra-cielo" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#0a1430"/><stop offset="1" stop-color="#2a4a6a"/>
  </linearGradient>
  <linearGradient id="g-foglia" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#4ab86a"/><stop offset="1" stop-color="#1a5a34"/>
  </linearGradient>
  <linearGradient id="g-cotto" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#6a2a1a"/><stop offset=".4" stop-color="#d0704a"/><stop offset="1" stop-color="#5a2216"/>
  </linearGradient>
  <linearGradient id="g-mattoni" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#6a3a2e"/><stop offset="1" stop-color="#3a2018"/>
  </linearGradient>
  <pattern id="p-mattoni" width="60" height="30" patternUnits="userSpaceOnUse">
    <rect width="60" height="30" fill="url(#g-mattoni)"/>
    <path d="M0 15 L60 15 M30 0 L30 15 M0 15 L0 30 M60 15 L60 30" stroke="#2a140e" stroke-width="2" opacity=".7"/>
  </pattern>
  <symbol id="foglione" viewBox="0 0 120 200">
    <path d="M60 200 Q56 120 60 20" fill="none" stroke="#1a4a2a" stroke-width="5"/>
    <path d="M60 30 Q10 60 14 120 Q40 150 60 170 Q80 150 106 120 Q110 60 60 30 Z" fill="url(#g-foglia)" stroke="#0e2a16" stroke-width="3"/>
    <path d="M60 40 L60 170 M60 70 L30 90 M60 70 L90 90 M60 100 L26 120 M60 100 L94 120 M60 130 L38 148 M60 130 L82 148" stroke="#7ad08a" stroke-width="2" opacity=".6"/>
  </symbol>
`);

Grafica.sfondo("serra", `
  <rect width="1600" height="900" fill="url(#g-serra-cielo)"/>
  <circle cx="1240" cy="150" r="46" fill="url(#g-luna)"/>
  <circle cx="1240" cy="150" r="96" fill="url(#g-alone)"/>
  <g fill="#fff" opacity=".7"><circle cx="300" cy="80" r="2"/><circle cx="520" cy="140" r="1.5"/><circle cx="900" cy="60" r="2"/><circle cx="1400" cy="260" r="1.5"/><circle cx="700" cy="220" r="1.2"/></g>
  <!-- vetrate: archi e montanti in ferro -->
  <g fill="none" stroke="#141c2a" stroke-linecap="round">
    <path d="M-20 520 Q800 -120 1620 520" stroke-width="22"/>
    <path d="M100 520 L100 160 M300 520 L300 70 M500 520 L500 30 M700 520 L700 10 M900 520 L900 10 M1100 520 L1100 30 M1300 520 L1300 70 M1500 520 L1500 160" stroke-width="10"/>
    <path d="M0 300 L1600 300 M0 420 L1600 420 M120 190 Q800 -60 1480 190" stroke-width="7"/>
  </g>
  <g fill="#9fd7ff" opacity=".05"><rect x="100" y="160" width="200" height="140"/><rect x="900" y="10" width="200" height="290"/><rect x="1300" y="300" width="200" height="120"/></g>
  <!-- muretto di mattoni e colonna -->
  <rect y="520" width="1600" height="90" fill="url(#p-mattoni)"/>
  <rect y="514" width="1600" height="10" fill="#8a5a46"/>
  <rect x="560" y="150" width="120" height="460" fill="url(#p-mattoni)"/>
  <rect x="550" y="140" width="140" height="18" fill="#8a5a46"/>
  <!-- piante alte sullo sfondo -->
  <g>
    <use href="#foglione" x="20" y="300" width="140" height="240"/><use href="#foglione" x="120" y="250" width="160" height="280" transform="rotate(-8 200 520)"/>
    <use href="#foglione" x="1380" y="260" width="160" height="280" transform="rotate(10 1460 540)"/><use href="#foglione" x="1480" y="320" width="130" height="220"/>
    <use href="#foglione" x="760" y="320" width="110" height="200"/><use href="#foglione" x="1180" y="330" width="120" height="200" transform="rotate(-6 1240 530)"/>
  </g>
  <!-- palma -->
  <g stroke="#0e2a16" stroke-width="3">
    <path d="M330 610 Q320 420 360 260" fill="none" stroke="#5a3a1a" stroke-width="18"/>
    <path d="M360 260 Q300 220 220 250 Q290 240 360 270 Z M360 260 Q430 210 510 250 Q430 240 360 270 Z M360 260 Q340 180 280 160 Q330 200 362 266 Z M360 260 Q400 180 460 170 Q410 210 362 266 Z" fill="url(#g-foglia)"/>
  </g>
  <!-- pavimento di mattonelle in cotto -->
  <g id="pavimento"></g>
  <!-- banco da giardiniere (i barattoli dei vermi ci stanno sopra) -->
  <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <ellipse cx="1050" cy="690" rx="250" ry="16" fill="#000" opacity=".45" stroke="none" filter="url(#sfoca)"/>
    <rect x="820" y="560" width="460" height="24" rx="4" fill="url(#g-legno)"/>
    <rect x="840" y="584" width="20" height="104" fill="url(#g-legno)"/><rect x="1240" y="584" width="20" height="104" fill="url(#g-legno)"/>
    <rect x="860" y="640" width="380" height="14" fill="#3e2416"/>
    <path d="M880 640 L900 610 L940 610 L960 640 Z M1160 640 L1172 616 L1206 616 L1218 640 Z" fill="url(#g-cotto)"/>
    <path d="M900 612 q8 -20 18 -2 q10 -16 18 2 M1176 618 q6 -16 14 -2 q8 -12 14 2" fill="#3fa05a" stroke-width="2"/>
  </g>
  <!-- vasi piccoli a sinistra -->
  <g stroke="#1d1428" stroke-width="3">
    <path d="M120 690 L110 630 L180 630 L170 690 Z" fill="url(#g-cotto)"/><path d="M100 622 L190 622 L186 634 L104 634 Z" fill="#a04a2a"/>
    <path d="M144 622 Q120 560 84 548 M144 622 Q150 556 176 530" fill="none" stroke="#3fa05a" stroke-width="7"/>
  </g>
  <g id="polvere" fill="#fff6d8"></g>
  <rect width="1600" height="900" fill="url(#g-vignetta)"/>
  <rect width="1600" height="900" filter="url(#grana)" opacity=".07" style="mix-blend-mode:overlay"/>
`, function (svg) {
  Grafica.pavimentoListoni(svg.querySelector("#pavimento"), { fuga: { x: 800, y: 300 }, alto: 610, basso: 900, colori: ["#8a4a32", "#7a4030", "#944e36", "#6e3a2a"] });
  Grafica.polvere(svg.querySelector("#polvere"), { x: 300, y: 200, larghezza: 1000, altezza: 400, quanti: 30 });
});
