/* Gioco di Matematica, stagione delle TERZE: i personaggi nuovi.
   - ZARA, 16 anni, detective dei simboli: tre viste (tre quarti, profilo, schiena) con lo stesso
     "scheletro" di Leo e Nina (viewBox -110 -600 230 615, piedi in 5,0), così cammina con il motore.
     Impermeabile corallo, capelli ricci raccolti in una nuvola con una matita infilata,
     lente d'ingrandimento al collo, borsa a tracolla.
   - PENNA, penna d'oca parlante: vola accanto a Zara (viewBox -70 -230 150 240, punta in 0,0).
   - MADAMA PAROLONA, la cattiva: grande, a campana, abito pieno di "scritte" (solo ghirigori,
     niente testo vero), cappello con piume a rotolo di pergamena, occhialino e vocabolario enorme
     (viewBox -150 -700 300 715, piedi in 0,0).
   Nessuna scritta nei disegni: valgono per tutte le lingue. */
Grafica.definizioni(`
  <linearGradient id="z-pelle" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#5a3420"/><stop offset=".55" stop-color="#8a5634"/><stop offset="1" stop-color="#a06a44"/>
  </linearGradient>
  <linearGradient id="z-giacca" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#a8322a"/><stop offset=".6" stop-color="#e4573f"/><stop offset="1" stop-color="#f47a5a"/>
  </linearGradient>
  <linearGradient id="z-jeans" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#1a2440"/><stop offset=".6" stop-color="#2e4270"/><stop offset="1" stop-color="#3c5488"/>
  </linearGradient>
  <linearGradient id="z-ottone" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#6e4a16"/><stop offset=".35" stop-color="#f3c45a"/><stop offset=".6" stop-color="#c8922e"/><stop offset="1" stop-color="#5a3a10"/>
  </linearGradient>
  <radialGradient id="z-lente" cx="40%" cy="35%" r="70%">
    <stop offset="0" stop-color="#ffffff"/><stop offset=".5" stop-color="#bfe6f2"/><stop offset="1" stop-color="#6aa8c0"/>
  </radialGradient>
  <linearGradient id="pn-piuma" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#d8d2c8"/><stop offset=".5" stop-color="#fbf8f0"/><stop offset="1" stop-color="#e8e2d6"/>
  </linearGradient>
  <linearGradient id="mp-abito" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#3e1450"/><stop offset=".55" stop-color="#7a2f8e"/><stop offset="1" stop-color="#9a48a8"/>
  </linearGradient>
  <linearGradient id="mp-pelle" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#d8a890"/><stop offset=".55" stop-color="#f4d0bc"/><stop offset="1" stop-color="#fbe2d2"/>
  </linearGradient>
  <linearGradient id="mp-pergamena" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#fbf0d0"/><stop offset="1" stop-color="#d8c08a"/>
  </linearGradient>

  <!-- ================= ZARA, TRE QUARTI ================= -->
  <symbol id="zara-fronte" viewBox="-110 -600 230 615" overflow="visible">
    <ellipse cx="10" cy="0" rx="62" ry="11" fill="#000" opacity=".4"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <!-- borsa a tracolla, dietro il fianco -->
      <g class="borsa">
        <path d="M-58 -330 L-14 -334 L-12 -274 Q-36 -266 -60 -272 Z" fill="#7a4a2a"/>
        <path d="M-58 -330 Q-36 -340 -14 -334 L-16 -312 Q-36 -318 -58 -310 Z" fill="#5a3418"/>
        <circle cx="-36" cy="-312" r="5" fill="url(#z-ottone)" stroke-width="2"/>
      </g>
      <g class="gamba-dietro">
        <path d="M-28 -292 C-32 -244 -34 -196 -33 -144 L-6 -144 C-5 -200 -3 -250 0 -288 Z" fill="url(#z-jeans)"/>
        <g class="stinco-dietro">
          <path d="M-33 -160 C-32 -110 -30 -50 -28 -24 L-9 -24 C-9 -62 -7 -110 -6 -160 Z" fill="url(#z-jeans)"/>
          <path d="M-32 -30 L-8 -30 L-6 -8 Q-6 0 -12 0 L-46 0 Q-50 -12 -40 -18 Z" fill="#f2c13a"/>
          <path d="M-46 -3 L-6 -3" stroke="#fff6e0" stroke-width="5"/>
        </g>
      </g>
      <g class="gamba-avanti">
        <path d="M2 -290 C6 -242 12 -194 16 -144 L40 -144 C38 -204 37 -254 36 -292 Z" fill="url(#z-jeans)"/>
        <g class="stinco-avanti">
          <path d="M16 -160 C20 -112 24 -64 28 -24 L47 -24 C45 -64 41 -112 40 -160 Z" fill="url(#z-jeans)"/>
          <path d="M26 -30 L48 -30 Q52 -14 66 -10 Q74 -5 72 0 L22 0 Z" fill="#f2c13a"/>
          <path d="M22 -3 L72 -3" stroke="#fff6e0" stroke-width="5"/>
          <path d="M32 -26 L44 -20 M34 -20 L46 -14" stroke="#1d1428" stroke-width="2.5"/>
        </g>
      </g>
      <g class="busto">
        <!-- braccio dietro -->
        <g class="braccio-dietro">
          <path d="M-36 -432 C-50 -400 -54 -368 -50 -340 C-48 -322 -44 -310 -40 -298" fill="none" stroke="#1d1428" stroke-width="27"/>
          <path d="M-36 -432 C-50 -400 -54 -368 -50 -340 C-48 -322 -44 -310 -40 -298" fill="none" stroke="#b03a2c" stroke-width="21"/>
          <ellipse cx="-40" cy="-292" rx="9" ry="11" fill="url(#z-pelle)"/>
        </g>
        <!-- impermeabile corallo, aperto sul davanti, fino ai fianchi -->
        <path d="M-40 -446 C-52 -390 -52 -320 -50 -262 Q4 -248 54 -262 C58 -320 58 -390 48 -446 Q4 -458 -40 -446 Z" fill="url(#z-giacca)"/>
        <path d="M2 -444 L-2 -262 L20 -258 L22 -444 Z" fill="#f6ecd8"/>
        <path d="M2 -444 L-10 -404 L8 -388 Z M22 -444 L36 -404 L18 -388 Z" fill="#c8442f"/>
        <path d="M-50 -300 Q4 -288 54 -300" fill="none" stroke="#8a2a20" stroke-width="7"/>
        <rect x="-8" y="-308" width="16" height="14" rx="2" fill="url(#z-ottone)" stroke-width="2"/>
        <circle cx="30" cy="-350" r="3.5" fill="#f6ecd8" stroke-width="1.5"/><circle cx="32" cy="-326" r="3.5" fill="#f6ecd8" stroke-width="1.5"/>
        <!-- tracolla della borsa -->
        <path d="M-30 -440 L40 -300" stroke="#5a3418" stroke-width="7"/>
        <!-- collo e testa -->
        <path d="M-2 -472 L-4 -444 L16 -444 L14 -472 Z" fill="#7a4a2c"/>
        <!-- nuvola di ricci, dietro la testa -->
        <g fill="#1e1410">
          <circle cx="-14" cy="-556" r="30"/><circle cx="14" cy="-574" r="30"/><circle cx="40" cy="-552" r="24"/>
          <circle cx="-30" cy="-528" r="22"/><circle cx="-6" cy="-588" r="20"/><circle cx="30" cy="-584" r="20"/>
        </g>
        <path d="M-24 -526 C-26 -494 -20 -474 0 -466 C14 -462 28 -470 34 -490 C38 -504 38 -524 32 -540 C22 -556 -16 -556 -24 -526 Z" fill="url(#z-pelle)"/>
        <path d="M-20 -508 Q-30 -512 -28 -498 Q-26 -488 -18 -492" fill="#6a3e24"/>
        <circle cx="-22" cy="-484" r="4" fill="none" stroke="url(#z-ottone)" stroke-width="2.5"/>
        <!-- fascia gialla e matita infilata nei ricci -->
        <path d="M-30 -532 Q4 -560 40 -534 L38 -524 Q4 -548 -28 -522 Z" fill="#f2c13a"/>
        <g transform="rotate(-28 30 -586)">
          <rect x="16" y="-592" width="44" height="10" fill="#f2c13a" stroke-width="2"/>
          <path d="M60 -592 L72 -587 L60 -582 Z" fill="#e8c8a0" stroke-width="2"/><path d="M68 -588.5 L72 -587 L68 -585.5 Z" fill="#1d1428" stroke="none"/>
          <rect x="10" y="-592" width="7" height="10" fill="#e88a9a" stroke-width="2"/>
        </g>
        <!-- frangetta riccia -->
        <path d="M-26 -522 Q-22 -546 0 -546 Q24 -548 34 -532 Q22 -540 10 -536 Q0 -544 -10 -534 Q-18 -540 -26 -522 Z" fill="#1e1410"/>
        <!-- viso: occhi grandi, sopracciglio alzato da detective -->
        <path d="M-5 -510 Q6 -522 17 -510 Q6 -501 -5 -510 Z" fill="#fff" stroke-width="2"/>
        <path d="M20 -509 Q28 -519 36 -509 Q28 -501 20 -509 Z" fill="#fff" stroke-width="2"/>
        <circle cx="9" cy="-510" r="5.2" fill="#4a2a14" stroke="none"/><circle cx="30" cy="-509" r="4.5" fill="#4a2a14" stroke="none"/>
        <circle cx="9.5" cy="-510" r="2.4" fill="#0e0a08" stroke="none"/><circle cx="30.5" cy="-509" r="2.1" fill="#0e0a08" stroke="none"/>
        <circle cx="11" cy="-512" r="1.5" fill="#fff" stroke="none"/>
        <path d="M-6 -518 L-9 -522 M-3 -521 L-5 -526" stroke-width="2"/>
        <path d="M-6 -530 Q5 -538 16 -530 M22 -524 Q30 -528 38 -522" fill="none" stroke="#1e1410" stroke-width="4"/>
        <path d="M26 -503 Q33 -490 27 -486 Q22 -485 19 -488" fill="none" stroke="#4a2a18" stroke-width="3"/>
        <path d="M8 -478 Q20 -470 32 -480" fill="#fff" stroke="#5a2420" stroke-width="3"/>
        <!-- colletto alzato -->
        <path d="M-26 -462 L-8 -470 L-2 -444 L-24 -440 Z M40 -462 L22 -470 L18 -444 L44 -440 Z" fill="#e4573f"/>
        <!-- lente d'ingrandimento appesa al collo -->
        <path d="M2 -462 Q4 -420 16 -384 M16 -462 Q18 -420 18 -386" fill="none" stroke="#1d1428" stroke-width="2"/>
        <circle cx="17" cy="-370" r="16" fill="url(#z-lente)" stroke="url(#z-ottone)" stroke-width="5"/>
        <circle cx="17" cy="-370" r="18.5" fill="none" stroke-width="2"/>
        <path d="M10 -378 Q14 -382 19 -381" fill="none" stroke="#fff" stroke-width="2.5"/>
        <!-- braccio avanti -->
        <g class="braccio-avanti">
          <path d="M44 -436 C54 -404 58 -374 60 -350 C62 -330 68 -314 76 -300" fill="none" stroke="#1d1428" stroke-width="27"/>
          <path d="M44 -436 C54 -404 58 -374 60 -350 C62 -330 68 -314 76 -300" fill="none" stroke="#e4573f" stroke-width="21"/>
          <path d="M50 -420 C57 -394 59 -370 62 -350" fill="none" stroke="#f89a7a" stroke-width="5" opacity=".7"/>
          <ellipse cx="78" cy="-294" rx="9" ry="11" fill="url(#z-pelle)"/>
          <path d="M66 -316 L86 -306" stroke="#f6ecd8" stroke-width="6"/>
        </g>
      </g>
    </g>
  </symbol>

  <!-- ================= ZARA, PROFILO (guarda a destra) ================= -->
  <symbol id="zara-profilo" viewBox="-110 -600 230 615" overflow="visible">
    <ellipse cx="8" cy="0" rx="52" ry="10" fill="#000" opacity=".4"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <g class="borsa">
        <path d="M-50 -330 L-14 -332 L-12 -276 Q-32 -268 -52 -274 Z" fill="#7a4a2a"/>
        <path d="M-50 -330 Q-32 -338 -14 -332 L-16 -312 Q-32 -318 -50 -310 Z" fill="#5a3418"/>
      </g>
      <g class="gamba-dietro">
        <path d="M-14 -292 C-16 -246 -16 -196 -14 -144 L12 -144 C14 -196 16 -246 18 -292 Z" fill="#1a2440"/>
        <g class="stinco-dietro">
          <path d="M-14 -160 C-13 -110 -12 -60 -11 -24 L11 -24 C11 -60 12 -110 12 -160 Z" fill="#1a2440"/>
          <path d="M-13 -30 L12 -30 Q16 -14 30 -10 Q38 -5 36 0 L-15 0 Q-17 -14 -13 -30 Z" fill="#c89a28"/>
          <path d="M-15 -3 L36 -3" stroke="#e8dcc0" stroke-width="5"/>
        </g>
      </g>
      <g class="gamba-avanti">
        <path d="M-10 -292 C-12 -246 -12 -196 -10 -144 L16 -144 C18 -196 20 -246 22 -292 Z" fill="url(#z-jeans)"/>
        <g class="stinco-avanti">
          <path d="M-10 -160 C-9 -110 -8 -60 -7 -24 L15 -24 C15 -60 16 -110 16 -160 Z" fill="url(#z-jeans)"/>
          <path d="M-9 -30 L16 -30 Q20 -14 34 -10 Q42 -5 40 0 L-11 0 Q-13 -14 -9 -30 Z" fill="#f2c13a"/>
          <path d="M-11 -3 L40 -3" stroke="#fff6e0" stroke-width="5"/>
        </g>
      </g>
      <g class="busto">
        <g class="braccio-dietro">
          <path d="M-2 -432 C-8 -400 -10 -366 -8 -336 C-6 -318 -4 -308 -2 -298" fill="none" stroke="#1d1428" stroke-width="25"/>
          <path d="M-2 -432 C-8 -400 -10 -366 -8 -336 C-6 -318 -4 -308 -2 -298" fill="none" stroke="#b03a2c" stroke-width="19"/>
        </g>
        <path d="M-32 -446 C-42 -390 -40 -320 -36 -262 L38 -262 C42 -320 44 -390 32 -446 Q0 -458 -32 -446 Z" fill="url(#z-giacca)"/>
        <path d="M-38 -300 L40 -300" stroke="#8a2a20" stroke-width="7"/>
        <path d="M22 -444 L32 -404 L38 -264 L28 -262 Z" fill="#c8442f"/>
        <path d="M-30 -440 Q10 -400 36 -320" fill="none" stroke="#5a3418" stroke-width="7"/>
        <path d="M0 -472 L-2 -444 L18 -444 L16 -472 Z" fill="#7a4a2c"/>
        <!-- ricci dietro la nuca -->
        <g fill="#1e1410">
          <circle cx="-22" cy="-548" r="30"/><circle cx="0" cy="-578" r="28"/><circle cx="-34" cy="-520" r="20"/><circle cx="20" cy="-574" r="20"/>
        </g>
        <path d="M-22 -530 C-26 -500 -20 -478 -2 -468 C10 -462 22 -466 28 -476 Q34 -486 31 -495 L42 -505 L34 -516 C34 -540 22 -556 0 -556 C-14 -556 -20 -546 -22 -530 Z" fill="url(#z-pelle)"/>
        <path d="M-6 -512 Q-16 -516 -14 -502 Q-12 -492 -4 -496" fill="#6a3e24"/>
        <circle cx="-8" cy="-488" r="4" fill="none" stroke="url(#z-ottone)" stroke-width="2.5"/>
        <path d="M-30 -530 Q0 -562 34 -540 L32 -530 Q0 -552 -26 -520 Z" fill="#f2c13a"/>
        <g transform="rotate(-20 -4 -584)">
          <rect x="-18" y="-590" width="44" height="10" fill="#f2c13a" stroke-width="2"/>
          <path d="M26 -590 L38 -585 L26 -580 Z" fill="#e8c8a0" stroke-width="2"/>
          <rect x="-25" y="-590" width="7" height="10" fill="#e88a9a" stroke-width="2"/>
        </g>
        <path d="M6 -540 Q22 -548 34 -534 Q24 -538 14 -532 Z" fill="#1e1410"/>
        <path d="M23 -513 Q31 -521 38 -513 Q31 -507 23 -513 Z" fill="#fff" stroke-width="2"/>
        <circle cx="32" cy="-513" r="3.8" fill="#4a2a14" stroke="none"/><circle cx="33" cy="-513" r="1.9" fill="#0e0a08" stroke="none"/>
        <path d="M37 -516 L41 -519" stroke-width="2"/>
        <path d="M22 -528 Q30 -533 40 -526" fill="none" stroke="#1e1410" stroke-width="4"/>
        <path d="M22 -480 Q29 -476 33 -482" fill="none" stroke="#5a2420" stroke-width="3"/>
        <path d="M20 -462 L32 -470 L34 -446 L18 -444 Z" fill="#e4573f"/>
        <path d="M16 -460 Q24 -420 34 -386" fill="none" stroke-width="2"/>
        <circle cx="36" cy="-372" r="13" fill="url(#z-lente)" stroke="url(#z-ottone)" stroke-width="4"/>
        <g class="braccio-avanti">
          <path d="M6 -432 C12 -400 14 -366 12 -336 C10 -318 10 -308 12 -298" fill="none" stroke="#1d1428" stroke-width="25"/>
          <path d="M6 -432 C12 -400 14 -366 12 -336 C10 -318 10 -308 12 -298" fill="none" stroke="#e4573f" stroke-width="19"/>
          <ellipse cx="13" cy="-290" rx="8" ry="10" fill="url(#z-pelle)"/>
          <path d="M3 -312 L22 -310" stroke="#f6ecd8" stroke-width="6"/>
        </g>
      </g>
    </g>
  </symbol>

  <!-- ================= ZARA, SCHIENA ================= -->
  <symbol id="zara-schiena" viewBox="-110 -600 230 615" overflow="visible">
    <ellipse cx="5" cy="0" rx="62" ry="11" fill="#000" opacity=".4"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <g class="gamba-sx">
        <path d="M-26 -292 C-30 -226 -30 -166 -28 -116 C-27 -76 -26 -44 -25 -24 L-7 -24 C-7 -62 -5 -112 -4 -152 C-3 -202 -2 -252 0 -290 Z" fill="url(#z-jeans)"/>
        <path d="M-30 -30 L-5 -30 L-4 -6 Q-4 0 -10 0 L-28 0 Q-34 -12 -30 -30 Z" fill="#f2c13a"/>
        <path d="M-32 -3 L-5 -3" stroke="#fff6e0" stroke-width="5"/>
      </g>
      <g class="gamba-dx">
        <path d="M10 -290 C12 -252 13 -202 14 -152 C15 -112 17 -62 17 -24 L35 -24 C36 -44 37 -76 38 -116 C40 -166 40 -226 36 -292 Z" fill="url(#z-jeans)"/>
        <path d="M15 -30 L40 -30 Q44 -12 40 0 L22 0 Q14 0 14 -6 Z" fill="#f2c13a"/>
        <path d="M15 -3 L42 -3" stroke="#fff6e0" stroke-width="5"/>
      </g>
      <g class="busto">
        <path d="M-6 -476 L-8 -446 L18 -446 L16 -476 Z" fill="#7a4a2c"/>
        <path d="M-44 -446 C-56 -400 -56 -330 -52 -256 Q5 -244 62 -256 C66 -330 66 -400 54 -446 Q5 -458 -44 -446 Z" fill="url(#z-giacca)"/>
        <path d="M-52 -300 Q5 -288 62 -300" fill="none" stroke="#8a2a20" stroke-width="7"/>
        <path d="M5 -296 L5 -256" stroke="#8a2a20" stroke-width="4"/>
        <path d="M-34 -446 L46 -312" stroke="#5a3418" stroke-width="7"/>
        <path d="M24 -330 L64 -326 L66 -276 Q46 -268 26 -274 Z" fill="#7a4a2a"/>
        <path d="M-24 -470 L-6 -476 L16 -476 L34 -470 L34 -446 L-24 -446 Z" fill="#e4573f"/>
        <g class="braccio-sx">
          <path d="M-42 -436 C-56 -400 -58 -364 -54 -336 C-52 -318 -50 -306 -48 -296" fill="none" stroke="#1d1428" stroke-width="27"/>
          <path d="M-42 -436 C-56 -400 -58 -364 -54 -336 C-52 -318 -50 -306 -48 -296" fill="none" stroke="#b03a2c" stroke-width="21"/>
          <ellipse cx="-48" cy="-290" rx="9" ry="11" fill="url(#z-pelle)"/>
        </g>
        <g class="braccio-dx">
          <path d="M52 -436 C66 -400 68 -364 64 -336 C62 -318 60 -306 58 -296" fill="none" stroke="#1d1428" stroke-width="27"/>
          <path d="M52 -436 C66 -400 68 -364 64 -336 C62 -318 60 -306 58 -296" fill="none" stroke="#e4573f" stroke-width="21"/>
          <ellipse cx="58" cy="-290" rx="9" ry="11" fill="url(#z-pelle)"/>
        </g>
        <!-- testa da dietro: la grande nuvola di ricci con la fascia e la matita -->
        <path d="M-24 -508 Q-32 -512 -30 -498 Q-28 -490 -20 -494" fill="#6a3e24"/>
        <path d="M34 -508 Q42 -512 40 -498 Q38 -490 30 -494" fill="#6a3e24"/>
        <g fill="#1e1410">
          <circle cx="5" cy="-540" r="40"/><circle cx="-22" cy="-560" r="28"/><circle cx="32" cy="-560" r="28"/>
          <circle cx="-4" cy="-588" r="24"/><circle cx="20" cy="-590" r="22"/><circle cx="-26" cy="-524" r="20"/><circle cx="36" cy="-524" r="20"/>
        </g>
        <!-- nuca: i capelli scendono fino al collo, e sotto si vede un po' di collo sopra il colletto -->
        <path d="M-6 -486 L-8 -468 L18 -468 L16 -486 Z" fill="#7a4a2c"/>
        <path d="M-32 -520 C-34 -496 -20 -482 -6 -480 Q5 -477 16 -480 C30 -482 44 -496 42 -520 Z" fill="#1e1410"/>
        <path d="M-20 -500 q4 6 0 12 M-6 -496 q4 6 0 12 M8 -496 q4 6 0 12 M22 -500 q4 6 0 12" fill="none" stroke="#3a2a20" stroke-width="2"/>
        <path d="M-34 -520 Q5 -500 44 -520 L44 -508 Q5 -488 -34 -508 Z" fill="#f2c13a"/>
        <g transform="rotate(-28 14 -588)">
          <rect x="0" y="-594" width="44" height="10" fill="#f2c13a" stroke-width="2"/>
          <path d="M44 -594 L56 -589 L44 -584 Z" fill="#e8c8a0" stroke-width="2"/>
          <rect x="-7" y="-594" width="7" height="10" fill="#e88a9a" stroke-width="2"/>
        </g>
      </g>
    </g>
  </symbol>

  <!-- ================= PENNA, la penna d'oca parlante ================= -->
  <symbol id="penna" viewBox="-70 -230 150 240" overflow="visible">
    <ellipse cx="0" cy="6" rx="22" ry="5" fill="#000" opacity=".25"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <!-- goccia d'inchiostro che sta per cadere -->
      <path d="M0 -2 Q-6 -12 0 -20 Q6 -12 0 -2 Z" fill="#2a3a8a" stroke-width="2"/>
      <!-- pennino d'ottone -->
      <path d="M0 -20 L-9 -52 L9 -52 Z" fill="url(#z-ottone)"/>
      <path d="M0 -22 L0 -44" stroke-width="2"/><circle cx="0" cy="-44" r="2.5" fill="#1d1428" stroke="none"/>
      <!-- fusto e vessillo della piuma, leggermente piegati -->
      <path d="M-6 -52 Q-40 -100 -34 -160 Q-26 -208 22 -226 Q40 -190 34 -140 Q30 -90 6 -52 Z" fill="url(#pn-piuma)"/>
      <path d="M0 -52 Q-6 -130 22 -222" fill="none" stroke="#b8ae9c" stroke-width="3.5"/>
      <path d="M-30 -100 L-12 -110 M-36 -130 L-10 -138 M-34 -160 L-6 -164 M-24 -190 L2 -188 M30 -100 L6 -110 M34 -130 L6 -140 M34 -160 L10 -168 M28 -190 L16 -194" fill="none" stroke="#c8beac" stroke-width="2"/>
      <path d="M-34 -150 L-44 -146 L-36 -140 M34 -170 L44 -172 L36 -160" fill="url(#pn-piuma)" stroke-width="2"/>
      <!-- faccina sul vessillo -->
      <ellipse cx="-8" cy="-150" rx="8" ry="10" fill="#fff" stroke-width="2.5"/>
      <ellipse cx="14" cy="-154" rx="8" ry="10" fill="#fff" stroke-width="2.5"/>
      <circle cx="-6" cy="-149" r="4" fill="#1d1428" stroke="none"/><circle cx="16" cy="-153" r="4" fill="#1d1428" stroke="none"/>
      <circle cx="-5" cy="-151" r="1.4" fill="#fff" stroke="none"/><circle cx="17" cy="-155" r="1.4" fill="#fff" stroke="none"/>
      <path d="M-18 -168 Q-10 -174 -2 -168 M6 -172 Q14 -178 22 -170" fill="none" stroke-width="2.5"/>
      <path d="M-6 -128 Q4 -120 14 -130" fill="#c8402f" stroke-width="2.5"/>
      <!-- occhialini da precisina -->
      <path d="M-1 -152 Q3 -156 6 -153" fill="none" stroke="url(#z-ottone)" stroke-width="2.5"/>
    </g>
  </symbol>

  <!-- ================= MADAMA PAROLONA ================= -->
  <symbol id="parolona" viewBox="-150 -700 300 715" overflow="visible">
    <ellipse cx="0" cy="2" rx="120" ry="14" fill="#000" opacity=".4"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <!-- gonna a campana, piena di "scritte" (ghirigori) -->
      <path d="M-60 -330 C-80 -260 -110 -130 -128 -14 Q-130 4 -110 6 L110 6 Q130 4 128 -14 C110 -130 80 -260 60 -330 Z" fill="url(#mp-abito)"/>
      <g fill="none" stroke="#e8c26a" stroke-width="2.5" opacity=".75">
        <path d="M-66 -280 q8 -6 16 0 t16 0 t16 0 M-4 -284 q8 -6 16 0 t16 0 t16 0"/>
        <path d="M-82 -220 q8 -6 16 0 t16 0 t16 0 t16 0 M2 -222 q8 -6 16 0 t16 0 t16 0 t16 0"/>
        <path d="M-96 -160 q8 -6 16 0 t16 0 t16 0 t16 0 t16 0 M10 -160 q8 -6 16 0 t16 0 t16 0 t16 0"/>
        <path d="M-108 -100 q8 -6 16 0 t16 0 t16 0 t16 0 M-20 -100 q8 -6 16 0 t16 0 t16 0 t16 0 t16 0 t16 0"/>
        <path d="M-118 -44 q8 -6 16 0 t16 0 t16 0 t16 0 t16 0 t16 0 M10 -44 q8 -6 16 0 t16 0 t16 0 t16 0 t16 0 t16 0"/>
      </g>
      <!-- balza di pizzo in fondo -->
      <path d="M-126 -8 Q-114 -26 -102 -8 Q-90 -26 -78 -8 Q-66 -26 -54 -8 Q-42 -26 -30 -8 Q-18 -26 -6 -8 Q6 -26 18 -8 Q30 -26 42 -8 Q54 -26 66 -8 Q78 -26 90 -8 Q102 -26 114 -8 Q122 -20 126 -8" fill="#f6ecd8" stroke-width="2.5"/>
      <!-- scarpette a punta -->
      <path d="M-40 6 Q-60 6 -66 14 L-30 14 Z M30 6 Q56 6 70 14 L26 14 Z" fill="#3e1450"/>
      <!-- corpetto e fiocco -->
      <path d="M-56 -470 C-66 -430 -66 -370 -62 -326 Q0 -312 62 -326 C66 -370 66 -430 56 -470 Q0 -484 -56 -470 Z" fill="url(#mp-abito)"/>
      <path d="M-62 -334 Q0 -318 62 -334" fill="none" stroke="#e8c26a" stroke-width="7"/>
      <path d="M0 -336 L-26 -352 L-26 -320 Z M0 -336 L26 -352 L26 -320 Z" fill="#e8c26a"/>
      <circle cx="0" cy="-336" r="7" fill="#c8402f"/>
      <!-- gorgiera di pizzo -->
      <path d="M-58 -470 Q-48 -490 -36 -474 Q-24 -494 -12 -476 Q0 -496 12 -476 Q24 -494 36 -474 Q48 -490 58 -470 Q0 -450 -58 -470 Z" fill="#f6ecd8"/>
      <!-- braccio sinistro: stringe un vocabolario enorme -->
      <path d="M-58 -458 C-90 -420 -100 -380 -86 -350" fill="none" stroke="#1d1428" stroke-width="29"/>
      <path d="M-58 -458 C-90 -420 -100 -380 -86 -350" fill="none" stroke="#6a2a7e" stroke-width="23"/>
      <g transform="rotate(-8 -96 -380)">
        <rect x="-148" y="-430" width="96" height="120" rx="6" fill="#8a2a2a"/>
        <rect x="-142" y="-422" width="84" height="104" rx="3" fill="none" stroke="#e8c26a" stroke-width="3"/>
        <path d="M-52 -428 L-44 -424 L-44 -312 L-52 -310" fill="#f6ecd8"/>
        <path d="M-50 -416 L-46 -416 M-50 -404 L-46 -404 M-50 -392 L-46 -392 M-50 -380 L-46 -380 M-50 -368 L-46 -368 M-50 -356 L-46 -356 M-50 -344 L-46 -344 M-50 -332 L-46 -332" stroke-width="1.5"/>
        <circle cx="-100" cy="-370" r="16" fill="none" stroke="#e8c26a" stroke-width="3"/>
      </g>
      <ellipse cx="-80" cy="-346" rx="11" ry="12" fill="url(#mp-pelle)"/>
      <!-- braccio destro alzato con l'occhialino -->
      <path d="M58 -458 C88 -430 98 -400 94 -372" fill="none" stroke="#1d1428" stroke-width="29"/>
      <path d="M58 -458 C88 -430 98 -400 94 -372" fill="none" stroke="#9a48a8" stroke-width="23"/>
      <path d="M94 -372 C92 -340 80 -320 70 -302" fill="none" stroke="#1d1428" stroke-width="24"/>
      <path d="M94 -372 C92 -340 80 -320 70 -302" fill="none" stroke="#f6ecd8" stroke-width="18"/>
      <ellipse cx="70" cy="-296" rx="10" ry="11" fill="url(#mp-pelle)"/>
      <path d="M72 -306 L78 -380" stroke="url(#z-ottone)" stroke-width="5"/>
      <circle cx="70" cy="-396" r="15" fill="url(#z-lente)" stroke="url(#z-ottone)" stroke-width="4"/>
      <circle cx="98" cy="-394" r="15" fill="url(#z-lente)" stroke="url(#z-ottone)" stroke-width="4"/>
      <path d="M85 -396 L83 -396" stroke="url(#z-ottone)" stroke-width="4"/>
      <!-- collo e testa -->
      <path d="M-10 -500 L-12 -470 L14 -470 L12 -500 Z" fill="#f0c8b0"/>
      <path d="M-34 -556 C-38 -520 -28 -496 0 -490 C24 -486 38 -500 42 -522 C46 -540 44 -560 36 -574 C22 -590 -26 -590 -34 -556 Z" fill="url(#mp-pelle)"/>
      <!-- capelli raccolti, grigio argento -->
      <path d="M-38 -546 C-46 -580 -24 -600 4 -600 C32 -600 50 -584 44 -552 C36 -572 18 -578 0 -576 C-16 -576 -28 -568 -38 -546 Z" fill="#c8c4dc"/>
      <path d="M-40 -540 Q-52 -530 -44 -512 Q-36 -522 -34 -536 Z" fill="#c8c4dc"/>
      <!-- cappellone con le piume-pergamena arrotolate -->
      <path d="M-86 -592 Q0 -630 96 -592 Q100 -578 86 -576 Q0 -604 -78 -576 Q-92 -578 -86 -592 Z" fill="#3e1450"/>
      <path d="M-44 -598 Q-40 -660 4 -664 Q48 -660 52 -600 Q4 -616 -44 -598 Z" fill="url(#mp-abito)"/>
      <path d="M-44 -606 Q4 -624 52 -608 L52 -598 Q4 -614 -44 -596 Z" fill="#e8c26a"/>
      <g fill="url(#mp-pergamena)">
        <path d="M30 -650 Q60 -700 96 -690 Q110 -684 100 -672 Q92 -664 84 -672 Q90 -680 82 -680 Q62 -676 44 -642 Z"/>
        <path d="M14 -660 Q24 -716 60 -720 Q74 -720 70 -706 Q66 -696 58 -702 Q62 -710 54 -708 Q36 -702 28 -656 Z"/>
        <path d="M-8 -660 Q-30 -706 -64 -700 Q-78 -696 -70 -684 Q-62 -676 -56 -684 Q-62 -692 -54 -690 Q-36 -686 -22 -654 Z"/>
      </g>
      <path d="M58 -688 q6 -4 12 0 M40 -712 q6 -4 12 0 M-58 -694 q6 -4 12 0" fill="none" stroke="#8a6a3a" stroke-width="1.5"/>
      <!-- viso: sopracciglio alzato, naso all'insù, neo, sorriso furbo -->
      <path d="M-12 -548 Q-2 -556 8 -548 Q-2 -542 -12 -548 Z" fill="#fff" stroke-width="2"/>
      <path d="M16 -548 Q25 -556 34 -548 Q25 -542 16 -548 Z" fill="#fff" stroke-width="2"/>
      <circle cx="0" cy="-548" r="3.6" fill="#4a2a5a" stroke="none"/><circle cx="27" cy="-548" r="3.4" fill="#4a2a5a" stroke="none"/>
      <path d="M-14 -552 Q-2 -558 10 -552 M14 -552 Q25 -558 36 -552" fill="none" stroke-width="2.5"/>
      <path d="M-16 -566 Q-4 -572 8 -564 M16 -572 Q28 -586 40 -568" fill="none" stroke="#8a86a0" stroke-width="4"/>
      <path d="M22 -540 Q34 -530 32 -522 Q26 -518 20 -522" fill="none" stroke="#b8806a" stroke-width="3"/>
      <circle cx="-14" cy="-524" r="7" fill="#f09a9a" stroke="none" opacity=".7"/><circle cx="34" cy="-520" r="5" fill="#f09a9a" stroke="none" opacity=".7"/>
      <circle cx="-4" cy="-512" r="2" fill="#1d1428" stroke="none"/>
      <path d="M2 -508 Q16 -500 30 -512" fill="none" stroke="#a02a4a" stroke-width="4"/>
      <circle cx="-34" cy="-526" r="5" fill="url(#z-ottone)" stroke-width="2"/>
    </g>
  </symbol>
`);
