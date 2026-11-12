/* Gioco di Matematica · terze · G1 «Il cerchio senza π»: SIRACUSA, circa 250 a.C.
   Il cortile della casa di Archimede, sul porto: portico con le colonne, la tavola di sabbia per disegnare,
   lo sgabello con il compasso; a destra la bancarella della fruttivendola (fichi, olive, melagrane,
   la bilancia con i pesetti, il tavolo rotondo). In fondo il mare, le navi e l'isola di Ortigia.
   Archimede e la fruttivendola sono interi, appoggiati a terra (attori fissi). */
Grafica.definizioni(`
  <linearGradient id="sr-cielo" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#5ab0e0"/><stop offset=".6" stop-color="#a8daf0"/><stop offset="1" stop-color="#f6e4b8"/>
  </linearGradient>
  <linearGradient id="sr-mare" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#2a8ab8"/><stop offset="1" stop-color="#1a5a8a"/>
  </linearGradient>
  <linearGradient id="sr-muro" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#f2dcb0"/><stop offset="1" stop-color="#d8b480"/>
  </linearGradient>
  <linearGradient id="sr-colonna" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#c8a878"/><stop offset=".35" stop-color="#fff2d8"/><stop offset=".7" stop-color="#e8cfa0"/><stop offset="1" stop-color="#b08a5a"/>
  </linearGradient>
  <linearGradient id="sr-tegole" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#d8784a"/><stop offset="1" stop-color="#a8482a"/>
  </linearGradient>
  <linearGradient id="sr-sabbia" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#f6e2a8"/><stop offset="1" stop-color="#e2c27a"/>
  </linearGradient>
  <linearGradient id="sr-tenda" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#e8e0c8"/><stop offset=".5" stop-color="#e8e0c8"/><stop offset=".5" stop-color="#c8502f"/><stop offset="1" stop-color="#c8502f"/>
  </linearGradient>
  <pattern id="sr-righe" width="60" height="10" patternUnits="userSpaceOnUse"><rect width="30" height="10" fill="#f2ead2"/><rect x="30" width="30" height="10" fill="#c8502f"/></pattern>
  <linearGradient id="sr-legno" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#a8703a"/><stop offset="1" stop-color="#6a4020"/>
  </linearGradient>
  <linearGradient id="sr-pelle" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#e8b088"/><stop offset="1" stop-color="#c88a64"/>
  </linearGradient>
  <linearGradient id="sr-chitone" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#d8d0c0"/><stop offset=".45" stop-color="#fbf6ea"/><stop offset="1" stop-color="#c8bca8"/>
  </linearGradient>
  <linearGradient id="sr-mantello" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#5a6ab8"/><stop offset="1" stop-color="#2a3478"/>
  </linearGradient>
  <linearGradient id="sr-peplo" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#c88a2a"/><stop offset=".5" stop-color="#e8b04a"/><stop offset="1" stop-color="#a86a1a"/>
  </linearGradient>

  <!-- ===== ARCHIMEDE: chitone chiaro, mantello blu sulla spalla, barba grigia, bastoncino per la sabbia ===== -->
  <symbol id="archimede" viewBox="-110 -600 230 615" overflow="visible">
    <ellipse cx="0" cy="0" rx="74" ry="11" fill="#000" opacity=".35"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <!-- sandali -->
      <path d="M-40 -2 Q-46 -14 -26 -14 H-6 V2 Z M8 2 V-14 H28 Q44 -14 50 -4 Q44 2 8 2 Z" fill="#8a5a2a"/>
      <path d="M-30 -14 L-22 -30 M-14 -14 L-18 -30 M20 -14 L24 -30 M34 -14 L30 -30" stroke="#5a3418" stroke-width="3"/>
      <!-- gambe -->
      <path d="M-22 -100 L-24 -16 M22 -100 L24 -16" stroke="#1d1428" stroke-width="22"/>
      <path d="M-22 -100 L-24 -16 M22 -100 L24 -16" stroke="url(#sr-pelle)" stroke-width="16"/>
      <!-- chitone lungo fino al polpaccio -->
      <path d="M-50 -440 C-62 -330 -70 -200 -66 -90 Q0 -76 68 -90 C72 -200 64 -330 52 -440 Q0 -454 -50 -440 Z" fill="url(#sr-chitone)"/>
      <path d="M-30 -420 L-36 -100 M0 -430 L2 -86 M30 -420 L36 -100" stroke="#b8ac98" stroke-width="2" fill="none"/>
      <!-- cintura di corda -->
      <path d="M-46 -282 Q0 -270 48 -282" fill="none" stroke="#8a6a3a" stroke-width="6"/>
      <!-- mantello blu dalla spalla sinistra alla vita -->
      <path d="M-54 -446 C-30 -440 30 -380 62 -300 C70 -250 72 -190 66 -120 L30 -110 C40 -200 30 -270 -6 -320 C-30 -350 -52 -380 -66 -410 Z" fill="url(#sr-mantello)"/>
      <path d="M-40 -420 C-10 -380 30 -330 44 -270 M-20 -400 C10 -360 40 -300 52 -230" fill="none" stroke="#1a2258" stroke-width="2.5"/>
      <!-- braccio sinistro lungo il corpo, mano aperta -->
      <path d="M-52 -432 C-74 -380 -80 -320 -74 -266" fill="none" stroke="#1d1428" stroke-width="30"/>
      <path d="M-52 -432 C-74 -380 -80 -320 -74 -266" fill="none" stroke="url(#sr-chitone)" stroke-width="24"/>
      <ellipse cx="-72" cy="-254" rx="12" ry="14" fill="url(#sr-pelle)"/>
      <!-- braccio destro in avanti con il bastoncino -->
      <path d="M46 -430 C80 -400 98 -352 104 -310" fill="none" stroke="#1d1428" stroke-width="30"/>
      <path d="M46 -430 C80 -400 98 -352 104 -310" fill="none" stroke="url(#sr-pelle)" stroke-width="24"/>
      <ellipse cx="106" cy="-300" rx="12" ry="13" fill="url(#sr-pelle)"/>
      <path d="M104 -300 L128 -120" stroke="#7a5a3a" stroke-width="6"/>
      <!-- collo e testa -->
      <path d="M-10 -470 L-12 -444 L14 -444 L12 -470 Z" fill="url(#sr-pelle)"/>
      <path d="M-28 -524 C-30 -490 -20 -470 2 -464 C22 -460 34 -474 38 -494 C42 -512 40 -532 32 -546 C18 -562 -20 -560 -28 -524 Z" fill="url(#sr-pelle)"/>
      <path d="M-26 -508 Q-36 -512 -34 -498 Q-32 -488 -24 -492" fill="#c88a64"/>
      <!-- barba grigia riccia -->
      <path d="M-26 -504 C-30 -466 -12 -432 10 -428 C34 -430 44 -458 42 -496 C34 -480 26 -476 18 -478 C10 -482 -2 -482 -8 -478 C-16 -484 -22 -494 -26 -504 Z" fill="#d8d4cc"/>
      <path d="M-14 -470 q6 6 4 14 M4 -458 q6 6 2 14 M24 -462 q4 8 -2 14" fill="none" stroke="#a8a49c" stroke-width="2.5"/>
      <path d="M8 -484 Q18 -478 28 -484" fill="none" stroke="#6a2a26" stroke-width="3"/>
      <path d="M24 -508 Q31 -496 25 -492" fill="none" stroke="#9a5a3a" stroke-width="3"/>
      <path d="M6 -490 Q16 -496 22 -492 Q30 -496 38 -490" fill="none" stroke="#d8d4cc" stroke-width="5"/>
      <!-- occhi assorti, sopracciglia alzate -->
      <circle cx="6" cy="-514" r="2.8" fill="#1d1428" stroke="none"/><circle cx="28" cy="-513" r="2.6" fill="#1d1428" stroke="none"/>
      <path d="M-8 -532 Q4 -540 16 -530 M20 -530 Q28 -538 38 -530" fill="none" stroke="#c8c4bc" stroke-width="4"/>
      <!-- testa quasi calva con capelli grigi ai lati -->
      <path d="M-28 -530 C-30 -560 -10 -574 8 -574 C30 -574 42 -560 40 -534 C36 -548 24 -556 8 -556 C-8 -556 -20 -548 -28 -530 Z" fill="url(#sr-pelle)"/>
      <path d="M-30 -536 C-40 -546 -36 -524 -30 -512 M40 -538 C50 -546 48 -522 40 -510" fill="#d8d4cc"/>
      <path d="M-6 -566 Q4 -570 16 -566" fill="none" stroke="#fff" stroke-width="3" opacity=".6"/>
    </g>
  </symbol>

  <!-- ===== LA FRUTTIVENDOLA: velo sul capo, peplo color ocra, grembiule, un fico in mano ===== -->
  <symbol id="fruttivendola" viewBox="-110 -600 230 615" overflow="visible">
    <ellipse cx="0" cy="0" rx="66" ry="10" fill="#000" opacity=".35"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <path d="M-34 -2 Q-40 -14 -22 -14 H-4 V2 Z M6 2 V-14 H24 Q38 -14 42 -4 Q36 2 6 2 Z" fill="#6a3a1a"/>
      <!-- peplo lungo -->
      <path d="M-44 -420 C-56 -300 -64 -160 -64 -14 Q0 0 64 -14 C64 -160 56 -300 46 -420 Q0 -434 -44 -420 Z" fill="url(#sr-peplo)"/>
      <path d="M-24 -400 L-30 -20 M2 -410 L2 -14 M26 -400 L32 -20" stroke="#8a5a1a" stroke-width="2" fill="none"/>
      <!-- grembiule chiaro con le macchie di frutta -->
      <path d="M-40 -270 Q0 -262 42 -270 L50 -90 Q0 -78 -48 -90 Z" fill="#f2ead2"/>
      <circle cx="-14" cy="-180" r="6" fill="#8a2a5a" stroke="none" opacity=".6"/><circle cx="20" cy="-140" r="5" fill="#5a7a2a" stroke="none" opacity=".6"/>
      <path d="M-40 -270 Q0 -262 42 -270" fill="none" stroke="#c8502f" stroke-width="6"/>
      <!-- braccia: una sul fianco, una in avanti con il fico -->
      <path d="M-44 -412 C-68 -360 -76 -300 -60 -262" fill="none" stroke="#1d1428" stroke-width="28"/>
      <path d="M-44 -412 C-68 -360 -76 -300 -60 -262" fill="none" stroke="url(#sr-peplo)" stroke-width="22"/>
      <ellipse cx="-56" cy="-254" rx="11" ry="12" fill="url(#sr-pelle)"/>
      <path d="M44 -412 C70 -380 84 -340 70 -300" fill="none" stroke="#1d1428" stroke-width="28"/>
      <path d="M44 -412 C70 -380 84 -340 70 -300" fill="none" stroke="url(#sr-pelle)" stroke-width="22"/>
      <path d="M70 -300 C64 -290 46 -290 34 -296" fill="none" stroke="#1d1428" stroke-width="24"/>
      <path d="M70 -300 C64 -290 46 -290 34 -296" fill="none" stroke="url(#sr-pelle)" stroke-width="18"/>
      <path d="M30 -310 C18 -312 14 -296 22 -288 C30 -280 44 -286 42 -298 C42 -306 38 -310 30 -310 Z" fill="#6a2a5a"/>
      <path d="M30 -310 L32 -318" stroke="#3a5a1a" stroke-width="3"/>
      <!-- testa con il velo -->
      <path d="M-8 -446 L-10 -422 L12 -422 L10 -446 Z" fill="url(#sr-pelle)"/>
      <path d="M-24 -496 C-26 -466 -16 -448 4 -444 C22 -442 32 -454 34 -474 C36 -490 34 -506 28 -516 C16 -530 -18 -528 -24 -496 Z" fill="url(#sr-pelle)"/>
      <circle cx="4" cy="-488" r="2.6" fill="#1d1428" stroke="none"/><circle cx="24" cy="-487" r="2.4" fill="#1d1428" stroke="none"/>
      <path d="M-4 -500 Q4 -506 12 -500 M18 -500 Q24 -506 32 -500" fill="none" stroke="#3a2220" stroke-width="3"/>
      <path d="M8 -466 Q16 -460 24 -466" fill="none" stroke="#a83a3a" stroke-width="3"/>
      <circle cx="-4" cy="-474" r="6" fill="#e88a7a" stroke="none" opacity=".45"/><circle cx="30" cy="-474" r="5" fill="#e88a7a" stroke="none" opacity=".45"/>
      <path d="M-36 -470 C-44 -520 -20 -548 6 -548 C34 -548 50 -526 44 -470 C40 -500 30 -516 6 -516 C-16 -516 -30 -500 -36 -470 Z M-36 -470 C-44 -440 -50 -420 -46 -400 L-30 -404 C-34 -424 -30 -446 -28 -470 Z" fill="#7a9a5a"/>
      <path d="M-20 -536 Q6 -546 34 -532" fill="none" stroke="#5a7a3a" stroke-width="3"/>
    </g>
  </symbol>

  <!-- la tavola di sabbia: cerchio e poligoni disegnati -->
  <symbol id="sr-tavola-sabbia" viewBox="0 0 340 80">
    <path d="M10 70 L40 10 H300 L330 70 Z" fill="url(#sr-legno)" stroke="#1d1428" stroke-width="3"/>
    <path d="M22 64 L48 16 H292 L318 64 Z" fill="url(#sr-sabbia)" stroke="#1d1428" stroke-width="2"/>
    <ellipse cx="120" cy="40" rx="50" ry="17" fill="none" stroke="#a8884a" stroke-width="3"/>
    <path d="M70 40 L95 26 H145 L170 40 L145 54 H95 Z" fill="none" stroke="#a8884a" stroke-width="2.5"/>
    <path d="M210 30 l30 -8 l26 12 l-8 22 l-34 4 Z" fill="none" stroke="#a8884a" stroke-width="2.5"/>
    <path d="M10 70 H330 V78 H10 Z" fill="#4a2a14" stroke="#1d1428" stroke-width="2"/>
  </symbol>
`);

Grafica.sfondo("siracusa", `
  <!-- ===== CIELO, MARE, ORTIGIA ===== -->
  <rect width="1600" height="900" fill="url(#sr-cielo)"/>
  <circle cx="1220" cy="140" r="120" fill="#fff6d0" opacity=".35"/>
  <circle cx="1220" cy="140" r="52" fill="#fffbe8"/>
  <g fill="#fff" opacity=".85">
    <ellipse cx="300" cy="120" rx="90" ry="20"/><ellipse cx="360" cy="104" rx="60" ry="22"/><ellipse cx="900" cy="90" rx="70" ry="14"/><ellipse cx="950" cy="80" rx="44" ry="16"/>
  </g>
  <rect y="400" width="1600" height="200" fill="url(#sr-mare)"/>
  <g stroke="#bfe8ff" stroke-width="3" stroke-linecap="round" opacity=".7">
    <path d="M700 430 h40 M820 450 h60 M1000 424 h50 M1120 470 h70 M760 500 h40 M1300 440 h60 M1420 486 h40 M900 520 h50"/>
  </g>
  <!-- l'isola di Ortigia con le case e le mura -->
  <path d="M960 410 Q1100 360 1300 372 Q1450 380 1600 400 V420 H960 Z" fill="#c8a878" stroke="#5a4028" stroke-width="2"/>
  <g fill="#f2dcb0" stroke="#7a5a3a" stroke-width="1.5">
    <rect x="1040" y="372" width="30" height="34"/><rect x="1080" y="364" width="38" height="42"/><rect x="1130" y="372" width="26" height="34"/>
    <rect x="1190" y="360" width="44" height="46"/><rect x="1250" y="368" width="30" height="38"/><rect x="1300" y="362" width="40" height="44"/><rect x="1360" y="372" width="34" height="34"/><rect x="1420" y="378" width="40" height="28"/>
  </g>
  <g fill="#c8603a" stroke="#7a3a1a" stroke-width="1.5">
    <path d="M1036 372 l19 -10 l19 10 Z M1076 364 l23 -12 l23 12 Z M1186 360 l26 -12 l26 12 Z M1296 362 l24 -12 l24 12 Z M1356 372 l21 -10 l21 10 Z"/>
  </g>
  <path d="M970 408 h630" stroke="#a88a5a" stroke-width="6"/>
  <!-- navi nel porto -->
  <g stroke="#1d1428" stroke-width="2.5" stroke-linejoin="round">
    <path d="M760 470 Q820 492 900 470 L890 486 Q820 500 772 486 Z" fill="#6a3a1a"/>
    <path d="M830 474 V398"/><path d="M800 404 H862 L856 450 H806 Z" fill="#f2e8d0"/>
    <path d="M806 418 H856 M808 434 H854" stroke="#c8502f" stroke-width="3"/>
    <path d="M1180 520 Q1230 538 1300 520 L1292 532 Q1232 544 1190 532 Z" fill="#5a3418"/>
    <path d="M1240 522 V468"/><path d="M1216 472 H1266 L1260 508 H1222 Z" fill="#f2e8d0"/>
    <path d="M1196 530 l-8 14 M1210 534 l-6 14 M1270 534 l6 14 M1284 530 l8 14" stroke-width="2"/>
  </g>
  <!-- gabbiani -->
  <g fill="none" stroke="#2a2a3a" stroke-width="3" stroke-linecap="round">
    <path d="M620 180 q10 -10 20 0 q10 -10 20 0"/><path d="M700 220 q8 -8 16 0 q8 -8 16 0"/><path d="M1040 230 q8 -8 16 0 q8 -8 16 0"/>
  </g>

  <!-- ===== MURETTO DEL CORTILE CON VASI E VITE ===== -->
  <rect x="0" y="560" width="1600" height="90" fill="url(#sr-muro)" stroke="#1d1428" stroke-width="4"/>
  <path d="M0 560 H1600" stroke="#fff4dc" stroke-width="5"/>
  <g stroke="#b89a68" stroke-width="2"><path d="M0 590 H1600 M0 620 H1600 M80 560 V590 M240 590 V620 M400 560 V590 M560 590 V620 M720 560 V590 M880 590 V620 M1040 560 V590 M1200 590 V620"/></g>
  <!-- vite che corre sul muretto -->
  <path d="M560 560 C620 540 660 570 720 548 C780 530 820 556 880 540" fill="none" stroke="#5a4a2a" stroke-width="5"/>
  <g fill="#5a8a3a" stroke="#2a4a1a" stroke-width="2">
    <path d="M590 548 q-14 -16 4 -24 q12 8 -4 24 Z M650 556 q-16 -14 0 -26 q14 8 0 26 Z M710 548 q-14 -16 4 -24 q12 8 -4 24 Z M780 538 q-14 -14 2 -24 q14 8 -2 24 Z M840 548 q-14 -16 4 -24 q12 8 -4 24 Z"/>
  </g>
  <g fill="#6a2a6a" stroke="#1d1428" stroke-width="1.5"><circle cx="676" cy="566" r="6"/><circle cx="686" cy="574" r="6"/><circle cx="672" cy="578" r="6"/><circle cx="812" cy="556" r="6"/><circle cx="822" cy="564" r="6"/></g>

  <!-- ===== LA CASA DI ARCHIMEDE: PORTICO A SINISTRA ===== -->
  <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <rect x="0" y="120" width="520" height="530" fill="url(#sr-muro)"/>
    <path d="M-10 120 L260 40 L530 120 Z" fill="url(#sr-tegole)"/>
    <path d="M-10 120 H530 V140 H-10 Z" fill="#e8cfa0"/>
    <path d="M10 140 H510 V160 H10 Z" fill="#c8a878"/>
    <!-- porta di legno con le borchie -->
    <rect x="200" y="300" width="130" height="300" rx="6" fill="url(#sr-legno)"/>
    <path d="M265 300 V600" stroke-width="3"/>
  </g>
  <g fill="#e8c26a" stroke="#1d1428" stroke-width="1.5"><circle cx="220" cy="330" r="4"/><circle cx="310" cy="330" r="4"/><circle cx="220" cy="570" r="4"/><circle cx="310" cy="570" r="4"/><circle cx="252" cy="450" r="5"/><circle cx="278" cy="450" r="5"/></g>
  <g fill="#c88a5a" stroke="#7a4a2a" stroke-width="2"><path d="M10 72 l40 -12 M80 52 l40 -12 M150 34 l40 -10 M330 40 l40 10 M400 58 l40 12 M470 78 l40 12" /></g>
  <!-- le tre colonne doriche del portico -->
  <g stroke="#1d1428" stroke-width="3.5">
    <rect x="40" y="160" width="56" height="470" fill="url(#sr-colonna)"/><rect x="30" y="160" width="76" height="20" fill="#fff2d8"/><rect x="34" y="620" width="68" height="18" fill="#e8cfa0"/>
    <rect x="410" y="160" width="56" height="470" fill="url(#sr-colonna)"/><rect x="400" y="160" width="76" height="20" fill="#fff2d8"/><rect x="404" y="620" width="68" height="18" fill="#e8cfa0"/>
  </g>
  <g stroke="#b89868" stroke-width="2" opacity=".8"><path d="M54 180 V620 M68 180 V620 M82 180 V620 M424 180 V620 M438 180 V620 M452 180 V620"/></g>
  <!-- finestrella con la mensola dei rotoli -->
  <g stroke="#1d1428" stroke-width="3">
    <rect x="130" y="210" width="60" height="70" fill="#3a2a2a"/>
    <rect x="352" y="214" width="46" height="60" fill="#3a2a2a"/>
    <rect x="120" y="280" width="80" height="10" fill="#c8a878"/>
  </g>
  <g fill="#f2e2b0" stroke="#7a5a3a" stroke-width="2"><rect x="136" y="252" width="14" height="28" rx="6"/><rect x="152" y="246" width="14" height="34" rx="6"/><rect x="168" y="256" width="14" height="24" rx="6"/></g>
  <!-- vaso di basilico e anfora appoggiata -->
  <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round">
    <path d="M120 600 L112 560 H168 L160 600 Z" fill="#c8603a"/>
    <path d="M370 640 C350 610 352 560 380 540 L376 520 H404 L400 540 C428 560 430 610 410 640 Z" fill="#b8683a"/>
    <path d="M376 528 C360 530 356 548 366 556 M404 528 C420 530 424 548 414 556" fill="none" stroke-width="4"/>
  </g>
  <path d="M392 548 l-6 10 l7 6 l-8 12 l6 8" fill="none" stroke="#1d1428" stroke-width="2.5" stroke-linejoin="round"/>
  <path d="M362 586 H418" stroke="#1d1428" stroke-width="3"/><path d="M366 596 h48" stroke="#2a1a14" stroke-width="2" stroke-dasharray="6 4"/>
  <g fill="#5a9a3a" stroke="#2a4a1a" stroke-width="2"><ellipse cx="128" cy="548" rx="14" ry="9"/><ellipse cx="150" cy="544" rx="14" ry="9"/><ellipse cx="140" cy="532" rx="12" ry="8"/></g>

  <!-- ===== ULIVO AL CENTRO, DIETRO IL MURETTO ===== -->
  <path d="M1000 560 C990 500 1010 470 996 420 C1020 460 1030 500 1024 560 Z" fill="#6a5a44" stroke="#1d1428" stroke-width="3"/>
  <g fill="#7a9a6a" stroke="#3a5a2a" stroke-width="2.5">
    <ellipse cx="960" cy="410" rx="70" ry="38"/><ellipse cx="1040" cy="392" rx="76" ry="40"/><ellipse cx="1000" cy="360" rx="60" ry="34"/>
  </g>
  <g fill="#a8c8a0" opacity=".6"><ellipse cx="980" cy="398" rx="30" ry="10"/><ellipse cx="1050" cy="378" rx="34" ry="10"/></g>

  <!-- ===== LA BANCARELLA DELLA FRUTTIVENDOLA, A DESTRA ===== -->
  <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <path d="M1250 300 V680 M1580 300 V680" stroke-width="10"/>
    <path d="M1250 300 V680 M1580 300 V680" stroke="#8a5a2a" stroke-width="5"/>
    <path d="M1220 300 L1610 300 L1590 230 L1240 230 Z" fill="url(#sr-righe)"/>
    <path d="M1220 300 Q1245 330 1270 300 Q1295 330 1320 300 Q1345 330 1370 300 Q1395 330 1420 300 Q1445 330 1470 300 Q1495 330 1520 300 Q1545 330 1570 300 Q1590 324 1610 300" fill="#c8502f"/>
    <rect x="1236" y="540" width="360" height="150" fill="url(#sr-legno)"/>
    <path d="M1230 540 H1600 V556 H1230 Z" fill="#c8945a"/>
  </g>
  <g stroke="#5a3418" stroke-width="2"><path d="M1236 590 H1596 M1236 636 H1596 M1320 556 V690 M1420 556 V690 M1520 556 V690"/></g>
  <!-- cesti di olive e melagrane sul banco -->
  <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round">
    <path d="M1440 540 L1450 500 H1530 L1540 540 Z" fill="#c89a4a"/>
    <path d="M1446 512 H1534 M1444 526 H1536" stroke="#8a6a2a" stroke-width="2"/>
  </g>
  <g fill="#3a4a2a" stroke="#1d1428" stroke-width="1.5"><ellipse cx="1462" cy="498" rx="8" ry="6"/><ellipse cx="1478" cy="494" rx="8" ry="6"/><ellipse cx="1494" cy="498" rx="8" ry="6"/><ellipse cx="1510" cy="494" rx="8" ry="6"/><ellipse cx="1486" cy="486" rx="8" ry="6"/><ellipse cx="1502" cy="486" rx="8" ry="6"/></g>
  <g fill="#c8302f" stroke="#1d1428" stroke-width="2.5"><circle cx="1560" cy="520" r="16"/><circle cx="1584" cy="528" r="14"/><circle cx="1570" cy="500" r="13"/></g>
  <g fill="#f3c45a" stroke="#1d1428" stroke-width="1.5"><path d="M1554 506 l4 -6 l4 6 Z M1578 514 l4 -6 l4 6 Z"/></g>
  <!-- grappoli d'uva appesi -->
  <g fill="#7a3a8a" stroke="#1d1428" stroke-width="1.5">
    <circle cx="1300" cy="330" r="7"/><circle cx="1312" cy="330" r="7"/><circle cx="1306" cy="342" r="7"/><circle cx="1294" cy="342" r="7"/><circle cx="1300" cy="354" r="7"/>
    <circle cx="1530" cy="330" r="7"/><circle cx="1542" cy="330" r="7"/><circle cx="1536" cy="342" r="7"/><circle cx="1524" cy="342" r="7"/><circle cx="1530" cy="354" r="7"/>
  </g>
  <path d="M1300 300 V324 M1530 300 V324" stroke="#1d1428" stroke-width="2"/>
  <!-- la bilancia a bracci appesa al palo -->
  <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round" fill="none">
    <path d="M1392 360 V384"/><path d="M1340 388 H1444" stroke-width="5"/><path d="M1340 388 H1444" stroke="#c88a3a" stroke-width="2.5"/>
    <path d="M1340 388 L1326 440 M1340 388 L1354 440 M1444 388 L1430 440 M1444 388 L1458 440"/>
    <path d="M1318 440 Q1340 456 1362 440 Z M1422 440 Q1444 456 1466 440 Z" fill="#c88a3a"/>
  </g>

  <!-- ===== PAVIMENTO DI LASTRE IN PROSPETTIVA ===== -->
  <g id="sr-pav"></g>
`, function (svg) {
  var pav = svg.querySelector("#sr-pav");
  if (pav) {
    var vx = 800, vy = 360, alto = 650, basso = 900, p = "";
    function ax(xb, yy) { return vx + (xb - vx) * (yy - vy) / (basso - vy); }
    var righe = [0, 0.14, 0.32, 0.54, 0.8, 1.1];
    for (var i = 0; i < righe.length - 1; i++) {
      var y1 = alto + (basso - alto) * Math.min(1, righe[i]), y2 = Math.min(basso, alto + (basso - alto) * righe[i + 1]);
      if (y1 >= basso) break;
      for (var j = -12; j < 12; j++) {
        var b1 = vx + j * 150 + (i % 2) * 75, b2 = b1 + 150;
        var c = ["#d8c49a", "#cdb68a", "#e2d0a8"][(i * 7 + j * 3 + 30) % 3];
        p += '<path d="M' + ax(b1, y1).toFixed(1) + " " + y1.toFixed(1) + " L" + ax(b2, y1).toFixed(1) + " " + y1.toFixed(1) + " L" + ax(b2, y2).toFixed(1) + " " + y2.toFixed(1) + " L" + ax(b1, y2).toFixed(1) + " " + y2.toFixed(1) +
          ' Z" fill="' + c + '" stroke="#9a8460" stroke-width="2"/>';
      }
    }
    p += '<rect y="' + alto + '" width="1600" height="26" fill="#000" opacity=".18"/>';
    pav.innerHTML = p;
  }
});
