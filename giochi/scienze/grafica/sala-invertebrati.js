/* Sfondo: Sala degli Invertebrati, di notte. Il pavimento e la polvere sono disegnati dalla funzione 'dopo'. */
Grafica.sfondo('sala-invertebrati', `
      <!-- PARETE -->
      <rect width="1600" height="600" fill="url(#g-parete)"/>
      <rect width="1600" height="600" fill="url(#p-carta)"/>
      <!-- bagliori sulla parete: luna, acquario, lanterna -->
      <path d="M300 160 L900 260 L900 600 L300 470 Z" fill="#9db8ff" opacity=".07" filter="url(#sfoca-forte)"/>
      <ellipse cx="1420" cy="420" rx="260" ry="220" fill="url(#g-luce-verde)"/>
      <ellipse cx="700" cy="560" rx="380" ry="260" fill="url(#g-luce-ambra)" opacity=".6"/>

      <!-- cornicione con dentelli -->
      <rect width="1600" height="64" fill="#0b1026"/>
      <rect y="64" width="1600" height="14" fill="#2a3870"/>
      <rect y="76" width="1600" height="4" fill="#5a6aa8" opacity=".5"/>
      <g fill="#1a2350"><rect y="80" width="1600" height="20"/></g>
      <g id="dentelli" fill="#2c3b74">
        <rect x="6" y="82" width="22" height="14"/><rect x="46" y="82" width="22" height="14"/><rect x="86" y="82" width="22" height="14"/>
        <rect x="126" y="82" width="22" height="14"/><rect x="166" y="82" width="22" height="14"/><rect x="206" y="82" width="22" height="14"/>
        <rect x="246" y="82" width="22" height="14"/><rect x="286" y="82" width="22" height="14"/><rect x="326" y="82" width="22" height="14"/>
        <rect x="366" y="82" width="22" height="14"/>
      </g>
      <use href="#dentelli" x="400"/><use href="#dentelli" x="800"/><use href="#dentelli" x="1200"/>
      <rect y="100" width="1600" height="6" fill="#070b1c" opacity=".6"/>

      <!-- PILASTRI -->
      <g id="pilastro">
        <rect x="330" y="106" width="64" height="390" fill="url(#g-pilastro)"/>
        <path d="M344 130 L344 480 M358 130 L358 480 M372 130 L372 480" stroke="#141c3a" stroke-width="3" opacity=".6"/>
        <path d="M346 130 L346 480 M360 130 L360 480" stroke="#4a5c96" stroke-width="1.5" opacity=".6"/>
        <rect x="320" y="106" width="84" height="22" fill="#3a4c86"/>
        <rect x="320" y="124" width="84" height="6" fill="#141c3a"/>
        <rect x="322" y="470" width="80" height="26" fill="#2a3a6e"/>
      </g>
      <use href="#pilastro" x="880"/>

      <!-- ZOCCOLATURA IN LEGNO -->
      <rect y="480" width="1600" height="120" fill="url(#g-legno-scuro)"/>
      <rect y="480" width="1600" height="120" filter="url(#venatura)" opacity=".7"/>
      <rect y="474" width="1600" height="12" fill="#5a3622"/>
      <rect y="474" width="1600" height="3" fill="#a8744a" opacity=".6"/>
      <g fill="none" stroke-width="3">
        <g id="pannello"><rect x="20" y="500" width="170" height="80" rx="3" stroke="#160c06"/><path d="M22 580 L190 580 L190 502" stroke="#7a4e32" opacity=".5"/></g>
        <use href="#pannello" x="200"/><use href="#pannello" x="400"/><use href="#pannello" x="600"/>
        <use href="#pannello" x="800"/><use href="#pannello" x="1000"/><use href="#pannello" x="1200"/><use href="#pannello" x="1400"/>
      </g>

      <!-- FINESTRA con tende di velluto -->
      <path d="M100 470 L100 210 Q200 80 300 210 L300 470 Z" fill="url(#g-cielo)"/>
      <circle cx="232" cy="200" r="70" fill="url(#g-alone)"/>
      <circle cx="232" cy="200" r="34" fill="url(#g-luna)"/>
      <circle cx="222" cy="192" r="6" fill="#e0cf8a" opacity=".6"/><circle cx="244" cy="212" r="4" fill="#e0cf8a" opacity=".6"/>
      <path d="M110 270 Q150 250 190 268 Q220 254 260 270 L260 286 L110 286 Z" fill="#33467e" opacity=".7" filter="url(#sfoca-poco)"/>
      <g fill="#fff"><circle cx="150" cy="170" r="2"/><circle cx="270" cy="300" r="1.5"/><circle cx="140" cy="380" r="1.5"/><circle cx="190" cy="140" r="1.2"/><circle cx="280" cy="420" r="1.2"/></g>
      <g stroke="#2a1a10" stroke-width="10" fill="none">
        <path d="M100 470 L100 210 Q200 80 300 210 L300 470 Z"/>
        <path d="M200 126 L200 470 M100 300 L300 300 M100 390 L300 390"/>
      </g>
      <path d="M104 470 L104 214 Q200 88 296 214" fill="none" stroke="#6a4a30" stroke-width="2"/>
      <path d="M86 470 L314 470 L326 490 L74 490 Z" fill="#4a2e1c"/>
      <path d="M74 490 L326 490" stroke="#1a0e08" stroke-width="4"/>
      <!-- tende -->
      <path d="M40 92 L60 92 Q128 200 92 340 Q80 420 98 520 L40 520 Z" fill="url(#g-velluto)"/>
      <path d="M360 92 L340 92 Q272 200 308 340 Q320 420 302 520 L360 520 Z" fill="url(#g-velluto)"/>
      <path d="M86 330 Q100 340 112 330 M288 330 Q300 340 314 330" stroke="#e8b85a" stroke-width="5" fill="none"/>
      <rect x="24" y="84" width="352" height="10" rx="5" fill="url(#g-oro)"/>
      <circle cx="24" cy="89" r="10" fill="url(#g-oro)"/><circle cx="376" cy="89" r="10" fill="url(#g-oro)"/>

      <!-- RITRATTO DI DARWIN (spento) -->
      <g transform="rotate(-2 545 255)">
        <rect x="438" y="128" width="214" height="264" rx="4" fill="url(#g-oro)"/>
        <rect x="452" y="142" width="186" height="236" fill="#5e3f12"/>
        <rect x="456" y="146" width="178" height="228" fill="#2a2028"/>
        <rect x="456" y="146" width="178" height="228" fill="#000" opacity=".2"/>
        <!-- dipinto scuro: Darwin anziano, barba bianca -->
        <path d="M470 374 Q480 300 545 290 Q610 300 620 374 Z" fill="#1c1820"/>
        <path d="M520 296 L545 330 L570 296" fill="#5a5450"/>
        <ellipse cx="545" cy="232" rx="38" ry="44" fill="#7a6252"/>
        <path d="M508 210 Q512 176 545 174 Q578 176 582 210 Q570 196 545 196 Q520 196 508 210 Z" fill="#8a7464"/>
        <path d="M506 236 Q500 290 520 312 Q545 330 570 312 Q590 290 584 236 Q570 266 545 268 Q520 266 506 236 Z" fill="#a8a29a"/>
        <path d="M520 226 Q528 220 536 226 M554 226 Q562 220 570 226" stroke="#3a2e28" stroke-width="5" fill="none"/>
        <path d="M512 214 Q528 204 540 214 M550 214 Q562 204 578 214" stroke="#c8c2ba" stroke-width="5" fill="none"/>
        <rect x="456" y="146" width="178" height="228" fill="url(#g-vetro)"/>
        <path d="M444 134 L646 134" stroke="#fff3c4" stroke-width="2" opacity=".6"/>
        <rect x="512" y="400" width="66" height="16" rx="3" fill="url(#g-oro)"/>
      </g>

      <!-- TELAIO CON LE FARFALLE (omaggio a Maria Sibylla Merian) -->
      <rect x="680" y="168" width="150" height="110" rx="3" fill="#3a2214"/>
      <rect x="690" y="178" width="130" height="90" fill="#e8dcc0"/>
      <rect x="690" y="178" width="130" height="90" fill="#000" opacity=".35"/>
      <g id="farfalla">
        <path d="M720 204 q-16 -12 -18 2 q2 12 18 2 z M720 204 q16 -12 18 2 q-2 12 -18 2 z" fill="#3f8fd8"/>
        <path d="M720 206 q-12 6 -10 14 q8 2 10 -8 z M720 206 q12 6 10 14 q-8 2 -10 -8 z" fill="#2a5f9a"/>
        <path d="M720 196 L720 216" stroke="#1d1428" stroke-width="2"/>
      </g>
      <use href="#farfalla" x="44" y="-2" style="filter:hue-rotate(150deg)"/>
      <use href="#farfalla" x="0" y="40" style="filter:hue-rotate(260deg)"/>
      <use href="#farfalla" x="44" y="40" style="filter:hue-rotate(60deg)"/>
      <rect x="690" y="178" width="130" height="90" fill="url(#g-vetro)"/>

      <!-- MENSOLA CON I BARATTOLI IN FORMALINA -->
      <path d="M880 250 L1190 250 L1196 262 L874 262 Z" fill="#5a3622"/>
      <path d="M900 262 L912 290 L924 262 M1150 262 L1162 290 L1174 262" fill="#3e2416"/>
      <g id="barattolo">
        <rect x="900" y="176" width="54" height="74" rx="10" fill="url(#g-formalina)"/>
        <rect x="904" y="168" width="46" height="12" rx="3" fill="url(#g-ottone)"/>
        <path d="M910 186 L910 238" stroke="#fff" stroke-width="4" opacity=".35"/>
      </g>
      <!-- dentro: un verme ad anelli -->
      <path d="M916 232 Q930 220 922 206 Q916 194 932 188" fill="none" stroke="#c46a6a" stroke-width="7" stroke-linecap="round"/>
      <path d="M918 228 l6 -3 M922 216 l6 0 M922 204 l6 -2" stroke="#7a3a3a" stroke-width="1.5"/>
      <use href="#barattolo" x="80" y="-20" transform="scale(1)"/>
      <rect x="980" y="148" width="54" height="94" rx="10" fill="url(#g-formalina)"/>
      <rect x="984" y="140" width="46" height="12" rx="3" fill="url(#g-ottone)"/>
      <!-- dentro: un piccolo polpo -->
      <ellipse cx="1007" cy="182" rx="13" ry="15" fill="#b86a7a"/>
      <path d="M996 194 q-6 18 2 30 M1004 196 q-2 20 4 34 M1012 196 q4 18 -2 30 M1018 194 q8 14 4 26" fill="none" stroke="#b86a7a" stroke-width="4" stroke-linecap="round"/>
      <path d="M990 156 L990 232" stroke="#fff" stroke-width="4" opacity=".35"/>
      <use href="#barattolo" x="160" y="0"/>
      <!-- dentro: riccio di mare -->
      <circle cx="1087" cy="222" r="14" fill="#5a2a6a"/>
      <path d="M1087 200 L1087 244 M1065 222 L1109 222 M1072 207 L1102 237 M1072 237 L1102 207" stroke="#7a4a8a" stroke-width="2.5"/>
      <use href="#barattolo" x="240" y="-10"/>
      <!-- dentro: una conchiglia di chiocciola -->
      <circle cx="1167" cy="222" r="13" fill="#c8a06a"/>
      <path d="M1167 222 m-7 0 a7 7 0 1 1 7 7 a4 4 0 1 1 -4 -4" fill="none" stroke="#6a4a2a" stroke-width="2"/>

      <!-- CALAMARO GIGANTE appeso -->
      <g>
        <path d="M1120 106 L1140 150 M1240 106 L1222 156" stroke="#8a8aa8" stroke-width="1.5"/>
        <linearGradient id="g-calamaro" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stop-color="#5a1e3a"/><stop offset=".45" stop-color="#b24a6e"/><stop offset="1" stop-color="#6a2444"/>
        </linearGradient>
        <path d="M1146 140 Q1182 96 1218 144 L1236 262 Q1182 290 1128 262 Z" fill="url(#g-calamaro)" stroke="#1d1428" stroke-width="3"/>
        <path d="M1146 146 L1110 120 L1140 196 Z M1218 148 L1258 124 L1228 202 Z" fill="#8a3456" stroke="#1d1428" stroke-width="3"/>
        <g fill="#d87aa0" opacity=".6"><circle cx="1170" cy="180" r="4"/><circle cx="1196" cy="200" r="5"/><circle cx="1176" cy="226" r="3"/><circle cx="1206" cy="166" r="3"/></g>
        <ellipse cx="1158" cy="250" rx="11" ry="13" fill="#f4f0e0" stroke="#1d1428" stroke-width="2.5"/>
        <ellipse cx="1206" cy="250" rx="11" ry="13" fill="#f4f0e0" stroke="#1d1428" stroke-width="2.5"/>
        <circle cx="1161" cy="254" r="5" fill="#1d1428"/><circle cx="1203" cy="254" r="5" fill="#1d1428"/>
        <g fill="none" stroke-linecap="round">
          <g stroke="#1d1428" stroke-width="13">
            <path d="M1140 268 Q1120 310 1136 344 Q1146 372 1126 396"/><path d="M1160 274 Q1150 316 1164 350"/>
            <path d="M1182 278 Q1180 320 1188 356"/><path d="M1204 274 Q1216 316 1200 352"/>
            <path d="M1226 268 Q1250 310 1234 346 Q1224 374 1246 398"/>
          </g>
          <g stroke="url(#g-calamaro)" stroke-width="8">
            <path d="M1140 268 Q1120 310 1136 344 Q1146 372 1126 396"/><path d="M1160 274 Q1150 316 1164 350"/>
            <path d="M1182 278 Q1180 320 1188 356"/><path d="M1204 274 Q1216 316 1200 352"/>
            <path d="M1226 268 Q1250 310 1234 346 Q1224 374 1246 398"/>
          </g>
          <g stroke="#f0b0c8" stroke-width="3" stroke-dasharray="1 7" opacity=".8">
            <path d="M1138 290 Q1126 316 1138 344"/><path d="M1230 290 Q1242 316 1232 344"/>
          </g>
        </g>
      </g>

      <!-- PAVIMENTO a listoni (generato dallo script) -->
      <g id="pavimento"></g>
      <!-- chiazza di luna sul pavimento -->
      <path d="M150 600 L330 600 L560 860 L120 860 Z" fill="#b8ccff" opacity=".1" filter="url(#sfoca)"/>
      <!-- tappeto -->
      <path d="M360 700 L1000 700 L1120 880 L240 880 Z" fill="url(#g-tappeto)"/>
      <path d="M378 712 L982 712 L1090 868 L270 868 Z" fill="none" stroke="#c89a4a" stroke-width="4" opacity=".8"/>
      <path d="M396 724 L964 724 L1060 856 L300 856 Z" fill="none" stroke="#3a0e16" stroke-width="10" opacity=".7"/>
      <g fill="#c89a4a" opacity=".5">
        <path d="M680 760 L710 790 L680 820 L650 790 Z"/><path d="M520 770 L540 790 L520 810 L500 790 Z"/><path d="M840 770 L860 790 L840 810 L820 790 Z"/>
      </g>
      <path d="M360 700 L1000 700 L1120 880 L240 880 Z" filter="url(#grana)" opacity=".18"/>
      <path d="M360 700 L1000 700" stroke="#2a0a10" stroke-width="3"/>

      <!-- TECA CENTRALE: corallo, medusa, spugna, riccio -->
      <ellipse cx="840" cy="608" rx="200" ry="14" fill="#000" opacity=".45" filter="url(#sfoca)"/>
      <rect x="690" y="470" width="300" height="134" rx="4" fill="url(#g-legno)"/>
      <rect x="690" y="470" width="300" height="134" filter="url(#venatura)" opacity=".6"/>
      <rect x="704" y="490" width="130" height="46" rx="3" fill="none" stroke="#2a160c" stroke-width="3"/>
      <rect x="846" y="490" width="130" height="46" rx="3" fill="none" stroke="#2a160c" stroke-width="3"/>
      <circle cx="769" cy="513" r="5" fill="url(#g-ottone)"/><circle cx="911" cy="513" r="5" fill="url(#g-ottone)"/>
      <rect x="682" y="462" width="316" height="12" rx="3" fill="#8a5a36"/>
      <path d="M684 463 L996 463" stroke="#d8a06a" stroke-width="2" opacity=".6"/>
      <!-- interno della vetrina -->
      <path d="M700 462 L706 292 L978 284 L982 462 Z" fill="#0d1430" opacity=".55"/>
      <!-- corallo -->
      <g fill="none" stroke-linecap="round">
        <path d="M760 462 L760 404 Q744 380 752 346 M760 404 Q786 378 782 340 M760 424 Q732 414 726 388 M782 362 Q800 352 798 330" stroke="#1d1428" stroke-width="15"/>
        <path d="M760 462 L760 404 Q744 380 752 346 M760 404 Q786 378 782 340 M760 424 Q732 414 726 388 M782 362 Q800 352 798 330" stroke="#ff8fb1" stroke-width="10"/>
        <path d="M757 450 L757 406 Q742 384 749 350 M778 380 Q788 362 782 344" stroke="#ffd0de" stroke-width="3"/>
      </g>
      <!-- spugna naturale -->
      <use href="#ogg-spugna" x="812" y="400" width="70" height="70"/>
      <!-- medusa sotto la sua campanella -->
      <path d="M890 360 Q930 308 970 360 Q930 350 890 360 Z" fill="#c9b8ff" opacity=".85" stroke="#1d1428" stroke-width="2.5"/>
      <path d="M900 360 q-6 30 4 54 M918 360 q6 34 -4 66 M940 360 q-4 30 6 58 M960 360 q6 24 -2 46" fill="none" stroke="#c9b8ff" stroke-width="3"/>
      <ellipse cx="930" cy="340" rx="24" ry="9" fill="#efe6ff" opacity=".5"/>
      <!-- vetro e telaio -->
      <path d="M700 462 L706 292 L978 284 L982 462 Z" fill="url(#g-vetro)"/>
      <path d="M720 300 L748 298 L716 440 Z" fill="#fff" opacity=".12"/>
      <path d="M700 462 L706 292 L978 284 L982 462" fill="none" stroke="#3e2416" stroke-width="8"/>
      <path d="M842 288 L842 462" stroke="#3e2416" stroke-width="6"/>
      <!-- etichetta sbagliata di Etichetti -->

      <!-- PIEDISTALLO DI MARMO con l'argonauta sotto la campana -->
      <ellipse cx="1110" cy="608" rx="90" ry="10" fill="#000" opacity=".45" filter="url(#sfoca)"/>
      <rect x="1050" y="476" width="120" height="126" fill="url(#g-marmo)"/>
      <path d="M1066 490 Q1090 530 1080 590 M1130 486 Q1120 520 1146 560" fill="none" stroke="#8a86a0" stroke-width="2" opacity=".7"/>
      <rect x="1040" y="466" width="140" height="14" rx="2" fill="url(#g-marmo)"/>
      <rect x="1040" y="594" width="140" height="10" fill="#6a6680"/>
      <!-- argonauta: conchiglia sottile a costole -->
      <path d="M1074 456 Q1056 420 1080 392 Q1110 364 1142 384 Q1160 400 1152 430 Q1142 456 1112 458 Z" fill="#f6efe0" stroke="#1d1428" stroke-width="2.5"/>
      <path d="M1082 446 Q1070 420 1088 400 M1096 452 Q1084 420 1104 392 M1112 454 Q1104 424 1124 390 M1128 450 Q1124 420 1142 398" fill="none" stroke="#c8b48a" stroke-width="2"/>
      <path d="M1140 390 q10 -8 16 2 q-6 8 -16 -2" fill="#e8dcc0" stroke="#1d1428" stroke-width="2"/>
      <path d="M1084 400 Q1100 384 1120 382" fill="none" stroke="#fff" stroke-width="3" opacity=".7"/>
      <!-- campana di vetro -->
      <path d="M1056 466 L1056 380 Q1056 304 1110 304 Q1164 304 1164 380 L1164 466 Z" fill="url(#g-vetro)" stroke="#cfeaff" stroke-opacity=".45" stroke-width="3"/>
      <path d="M1074 440 L1074 384 Q1076 336 1100 322" fill="none" stroke="#fff" stroke-width="5" opacity=".3"/>
      <circle cx="1110" cy="300" r="7" fill="#cfeaff" opacity=".5"/>

      <!-- ACQUARIO con Gamberto -->
      <ellipse cx="1430" cy="608" rx="170" ry="14" fill="#000" opacity=".45" filter="url(#sfoca)"/>
      <rect x="1286" y="476" width="290" height="128" rx="4" fill="url(#g-legno)"/>
      <rect x="1286" y="476" width="290" height="128" filter="url(#venatura)" opacity=".6"/>
      <rect x="1300" y="494" width="262" height="92" rx="3" fill="none" stroke="#2a160c" stroke-width="3"/>
      <rect x="1290" y="292" width="282" height="178" fill="url(#g-acqua)"/>
      <!-- riflessi di luce nell'acqua (caustiche) -->
      <g fill="none" stroke="#c8fff0" stroke-width="2" opacity=".35">
        <path d="M1300 320 q20 -8 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0"/>
        <path d="M1310 350 q14 -6 28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0"/>
      </g>
      <path d="M1290 430 Q1350 410 1420 432 Q1500 450 1572 424 L1572 470 L1290 470 Z" fill="#e8c98a"/>
      <path d="M1290 436 Q1350 418 1420 438" fill="none" stroke="#fff3c4" stroke-width="2" opacity=".6"/>
      <path d="M1320 450 Q1330 426 1356 430 Q1372 440 1362 456 Z" fill="#6a6a7a" stroke="#1d1428" stroke-width="2"/>
      <path d="M1520 446 Q1528 420 1552 426 Q1562 444 1546 456 Z" fill="#5a5a6a" stroke="#1d1428" stroke-width="2"/>
      <g fill="none" stroke-linecap="round">
        <path d="M1340 430 Q1326 380 1346 340 M1352 432 Q1370 390 1360 356 M1540 428 Q1530 380 1548 330" stroke="#1d5a34" stroke-width="10"/>
        <path d="M1340 430 Q1326 380 1346 340 M1352 432 Q1370 390 1360 356 M1540 428 Q1530 380 1548 330" stroke="#3fa05a" stroke-width="6"/>
      </g>
      <g fill="none" stroke="#e8fff6" stroke-width="2.5">
        <circle cx="1488" cy="372" r="6"/><circle cx="1496" cy="350" r="4"/><circle cx="1490" cy="332" r="2.5"/>
        <circle cx="1350" cy="320" r="3"/><circle cx="1356" cy="304" r="2"/>
      </g>
      <rect x="1290" y="292" width="282" height="178" fill="url(#g-vetro)"/>
      <path d="M1302 300 L1330 300 L1302 440 Z" fill="#fff" opacity=".12"/>
      <rect x="1290" y="292" width="282" height="178" fill="none" stroke="#3e2416" stroke-width="8"/>
      <path d="M1280 280 L1582 280 L1572 296 L1290 296 Z" fill="#3e2416"/>
      <path d="M1282 281 L1580 281" stroke="#a8744a" stroke-width="2"/>

      

      <!-- PRIMO PIANO: transenna di velluto e felce -->
      <g>
        <ellipse cx="1350" cy="898" rx="60" ry="10" fill="#000" opacity=".5"/>
        <rect x="1338" y="700" width="24" height="200" fill="url(#g-ottone)"/>
        <circle cx="1350" cy="696" r="18" fill="url(#g-ottone)"/>
        <rect x="1556" y="690" width="26" height="210" fill="url(#g-ottone)"/>
        <circle cx="1569" cy="686" r="20" fill="url(#g-ottone)"/>
        <path d="M1356 712 Q1460 800 1562 704" fill="none" stroke="#1d0810" stroke-width="22" stroke-linecap="round"/>
        <path d="M1356 712 Q1460 800 1562 704" fill="none" stroke="#8a2a3e" stroke-width="16" stroke-linecap="round"/>
        <path d="M1364 716 Q1460 790 1556 710" fill="none" stroke="#c85a6e" stroke-width="3" opacity=".6"/>
      </g>
      <g>
        <path d="M-20 900 L10 790 L150 790 L170 900 Z" fill="#2a1410"/>
        <path d="M2 800 L158 800" stroke="#5a2e20" stroke-width="6"/>
        <g fill="none" stroke="#0a1a12" stroke-width="16" stroke-linecap="round">
          <path d="M80 800 Q30 720 -20 690"/><path d="M80 800 Q70 700 110 640"/><path d="M80 800 Q140 730 200 720"/><path d="M80 800 Q20 760 -30 770"/>
        </g>
        <g fill="none" stroke="#1d4a30" stroke-width="7" stroke-linecap="round">
          <path d="M80 800 Q30 720 -20 690"/><path d="M80 800 Q70 700 110 640"/><path d="M80 800 Q140 730 200 720"/>
        </g>
      </g>

      <!-- polvere che galleggia nella luce -->
      <g id="polvere" fill="#fff6d8"></g>

      <!-- PENOMBRA E GRANA PITTORICA -->
      <rect width="1600" height="900" fill="url(#g-vignetta)"/>
      <rect width="1600" height="900" filter="url(#grana)" opacity=".07" style="mix-blend-mode:overlay"/>
    `, function (svg) {
  Grafica.pavimentoListoni(svg.querySelector('#pavimento'), { fuga: { x: 800, y: 240 }, alto: 600, basso: 900, colori: ['#3a2a40', '#33243a', '#3e2d44', '#2f2136'] });
  Grafica.polvere(svg.querySelector('#polvere'), { x: 180, y: 180, larghezza: 900, altezza: 560, quanti: 40 });
});
