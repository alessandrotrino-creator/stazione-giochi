/* Gioco di Scienze · Capitolo 1 · Sfondo: l'ATRIO del museo, di notte.
   Albero della Vita (ramo degli invertebrati spezzato), portone della Sala degli Invertebrati,
   fontana con la conchiglia. Ritratti, casse, incavi della porta e targhette sono "elementi" a parte. */
Grafica.sfondo("atrio", `
  <!-- parete -->
  <rect width="1600" height="610" fill="url(#g-parete)"/>
  <rect width="1600" height="610" fill="url(#p-carta)"/>
  <!-- soffitto a cassettoni -->
  <rect width="1600" height="80" fill="#0a0f24"/>
  <g fill="#141c3c" stroke="#070b1c" stroke-width="3">
    <rect x="20" y="10" width="140" height="56"/><rect x="180" y="10" width="140" height="56"/><rect x="340" y="10" width="140" height="56"/>
    <rect x="500" y="10" width="140" height="56"/><rect x="660" y="10" width="140" height="56"/><rect x="820" y="10" width="140" height="56"/>
    <rect x="980" y="10" width="140" height="56"/><rect x="1140" y="10" width="140" height="56"/><rect x="1300" y="10" width="140" height="56"/><rect x="1460" y="10" width="140" height="56"/>
  </g>
  <rect y="80" width="1600" height="14" fill="#2a3870"/>
  <rect y="92" width="1600" height="4" fill="#5a6aa8" opacity=".5"/>
  <!-- lampadario spento -->
  <g stroke="#1d1428" stroke-width="3">
    <path d="M800 80 L800 120" stroke-width="4"/>
    <path d="M740 140 Q800 110 860 140 L850 156 L750 156 Z" fill="url(#g-oro)" opacity=".8"/>
    <path d="M760 156 L752 176 M800 156 L800 182 M840 156 L848 176" stroke="#b8892f" stroke-width="3"/>
    <g fill="#f6efe0" opacity=".5"><circle cx="752" cy="180" r="5"/><circle cx="800" cy="186" r="5"/><circle cx="848" cy="180" r="5"/></g>
  </g>

  <!-- lunetta sopra il portone con la luna -->
  <path d="M680 250 A120 120 0 0 1 920 250 Z" fill="url(#g-cielo)"/>
  <circle cx="850" cy="212" r="22" fill="url(#g-luna)"/>
  <path d="M680 250 A120 120 0 0 1 920 250 Z M800 130 L800 250 M712 180 L800 250 M888 180 L800 250" fill="none" stroke="#2a1a10" stroke-width="7"/>
  <path d="M690 250 L560 610 L1040 610 L910 250 Z" fill="#b8ccff" opacity=".07" filter="url(#sfoca-forte)"/>

  <!-- portone della Sala degli Invertebrati (gli incavi sono elementi a parte) -->
  <rect x="660" y="250" width="280" height="360" fill="url(#g-marmo)"/>
  <rect x="660" y="250" width="280" height="360" filter="url(#venatura)" opacity=".25"/>
  <path d="M690 610 L690 300 Q690 270 720 270 L880 270 Q910 270 910 300 L910 610 Z" fill="url(#g-legno)" stroke="#1d1428" stroke-width="5"/>
  <path d="M690 610 L690 300 Q690 270 720 270 L880 270 Q910 270 910 300 L910 610 Z" filter="url(#venatura)" opacity=".5"/>
  <path d="M800 272 L800 610" stroke="#1d1428" stroke-width="5"/>
  <g fill="none" stroke="#2a160c" stroke-width="4">
    <rect x="712" y="300" width="70" height="80" rx="4"/><rect x="818" y="300" width="70" height="80" rx="4"/>
    <rect x="712" y="500" width="70" height="90" rx="4"/><rect x="818" y="500" width="70" height="90" rx="4"/>
  </g>
  <!-- fascia di pietra con i tre incavi -->
  <rect x="700" y="400" width="200" height="86" rx="8" fill="#5d5a72" stroke="#1d1428" stroke-width="4"/>
  <rect x="700" y="400" width="200" height="86" rx="8" filter="url(#venatura)" opacity=".3"/>
  <circle cx="780" cy="560" r="7" fill="url(#g-oro)" stroke="#1d1428" stroke-width="2"/><circle cx="820" cy="560" r="7" fill="url(#g-oro)" stroke="#1d1428" stroke-width="2"/>
  <path d="M650 250 L950 250 L940 236 L660 236 Z" fill="url(#g-oro)" stroke="#1d1428" stroke-width="3"/>

  <!-- lesene ai lati -->
  <g id="lesena-atrio">
    <rect x="420" y="96" width="60" height="514" fill="url(#g-pilastro)"/>
    <path d="M434 120 L434 590 M450 120 L450 590 M466 120 L466 590" stroke="#141c3a" stroke-width="3" opacity=".6"/>
    <rect x="410" y="96" width="80" height="22" fill="#3a4c86"/><rect x="412" y="584" width="76" height="26" fill="#2a3a6e"/>
  </g>
  <use href="#lesena-atrio" x="700"/>

  <!-- zoccolatura -->
  <rect y="540" width="660" height="70" fill="url(#g-legno-scuro)"/>
  <rect x="940" y="540" width="660" height="70" fill="url(#g-legno-scuro)"/>
  <rect y="536" width="660" height="8" fill="#5a3622"/><rect x="940" y="536" width="660" height="8" fill="#5a3622"/>

  <!-- pavimento a lastre di pietra -->
  <g id="pavimento"></g>
  <!-- passatoia rossa dal portone -->
  <path d="M720 610 L880 610 L1010 900 L590 900 Z" fill="url(#g-tappeto)"/>
  <path d="M734 614 L866 614 L986 900 L614 900 Z" fill="none" stroke="#c89a4a" stroke-width="4" opacity=".7"/>
  <path d="M720 610 L880 610 L1010 900 L590 900 Z" filter="url(#grana)" opacity=".15"/>

  <!-- ALBERO DELLA VITA in bronzo -->
  <ellipse cx="300" cy="700" rx="190" ry="30" fill="#000" opacity=".45" filter="url(#sfoca)"/>
  <path d="M140 690 L140 650 Q300 610 460 650 L460 690 Q300 730 140 690 Z" fill="url(#g-marmo)" stroke="#1d1428" stroke-width="4"/>
  <path d="M150 650 Q300 616 450 650 Q300 680 150 650 Z" fill="#c8c4d8" stroke="#1d1428" stroke-width="3"/>
  <g fill="none" stroke-linecap="round" stroke-linejoin="round">
    <g stroke="#1d1428" stroke-width="40">
      <path d="M300 656 C296 560 304 470 300 390"/>
    </g>
    <g stroke="#1d1428" stroke-width="22">
      <path d="M300 420 C260 340 210 280 180 210"/><path d="M296 470 C230 450 170 420 120 360"/>
      <path d="M302 400 C340 330 380 290 400 250"/><path d="M400 250 C430 200 470 170 500 140"/><path d="M400 250 C430 260 455 275 470 296"/>
    </g>
    <g stroke="#7a5228" stroke-width="32"><path d="M300 656 C296 560 304 470 300 390"/></g>
    <g stroke="#7a5228" stroke-width="15">
      <path d="M300 420 C260 340 210 280 180 210"/><path d="M296 470 C230 450 170 420 120 360"/>
      <path d="M302 400 C340 330 380 290 400 250"/><path d="M400 250 C430 200 470 170 500 140"/><path d="M400 250 C430 260 455 275 470 296"/>
    </g>
    <g stroke="#c8925a" stroke-width="5" opacity=".7">
      <path d="M292 640 C288 560 296 480 292 400"/><path d="M294 414 C256 340 210 284 184 216"/><path d="M308 396 C344 330 380 292 398 256"/>
    </g>
  </g>
  <!-- il ramo spezzato degli invertebrati -->
  <path d="M462 286 L478 280 L472 296 L486 300 L470 308 Z" fill="#c8925a" stroke="#1d1428" stroke-width="3"/>
  <!-- simboli in cima ai rami: foglia, fungo, pesce -->
  <path d="M180 210 Q150 170 170 130 Q210 160 180 210 Z" fill="#3fa05a" stroke="#1d1428" stroke-width="3"/>
  <path d="M176 200 L172 150" stroke="#1d5a34" stroke-width="2"/>
  <path d="M96 360 Q96 322 124 322 Q152 322 152 360 Z" fill="#c8402f" stroke="#1d1428" stroke-width="3"/>
  <path d="M116 360 L116 388 L132 388 L132 360" fill="#f6efe0" stroke="#1d1428" stroke-width="3"/>
  <circle cx="112" cy="340" r="4" fill="#fff"/><circle cx="134" cy="334" r="3" fill="#fff"/>
  <path d="M498 142 Q520 118 548 136 Q520 156 498 142 Z M548 136 L566 120 L564 152 Z" fill="#7fb8e8" stroke="#1d1428" stroke-width="3"/>
  <circle cx="512" cy="136" r="3" fill="#1d1428"/>

  <!-- FONTANA con la conchiglia (Gamberto dorme nella vasca) -->
  <path d="M1250 540 Q1250 380 1390 380 Q1530 380 1530 540 Z" fill="#2a3a6e" stroke="#1d1428" stroke-width="4"/>
  <path d="M1300 520 Q1290 420 1390 410 Q1490 420 1480 520 Q1440 470 1390 466 Q1340 470 1300 520 Z" fill="#e8d9c0" stroke="#1d1428" stroke-width="4"/>
  <path d="M1390 466 L1390 412 M1350 474 L1326 424 M1430 474 L1454 424 M1316 494 L1300 452 M1464 494 L1480 452" stroke="#b8a888" stroke-width="3"/>
  <path d="M1390 520 Q1386 560 1392 600" fill="none" stroke="#9fe8ff" stroke-width="6" opacity=".8"/>
  <ellipse cx="1390" cy="660" rx="180" ry="44" fill="url(#g-marmo)" stroke="#1d1428" stroke-width="4"/>
  <ellipse cx="1390" cy="650" rx="158" ry="32" fill="url(#g-acqua)" stroke="#1d1428" stroke-width="3"/>
  <path d="M1250 650 Q1300 640 1350 650 T1450 650 T1530 646" fill="none" stroke="#c8fff0" stroke-width="2" opacity=".5"/>
  <path d="M1210 660 L1210 700 Q1390 760 1570 700 L1570 660" fill="url(#g-marmo)" stroke="#1d1428" stroke-width="4"/>
  <ellipse cx="1390" cy="690" rx="180" ry="20" fill="#000" opacity=".25"/>
  <circle cx="1390" cy="650" r="110" fill="url(#g-luce-verde)"/>

  <!-- primo piano: colonnina con cordone a sinistra -->
  <g>
    <rect x="34" y="700" width="22" height="200" fill="url(#g-ottone)"/>
    <circle cx="45" cy="696" r="17" fill="url(#g-ottone)"/>
  </g>

  <g id="polvere" fill="#fff6d8"></g>
  <rect width="1600" height="900" fill="url(#g-vignetta)"/>
  <rect width="1600" height="900" filter="url(#grana)" opacity=".07" style="mix-blend-mode:overlay"/>
`, function (svg) {
  Grafica.pavimentoListoni(svg.querySelector("#pavimento"), { fuga: { x: 800, y: 260 }, alto: 610, basso: 900, colori: ["#4a4258", "#433b50", "#4e465c", "#3e364a"] });
  Grafica.polvere(svg.querySelector("#polvere"), { x: 560, y: 260, larghezza: 480, altezza: 340, quanti: 30 });
});
