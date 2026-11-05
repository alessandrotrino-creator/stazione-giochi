/* Gioco di Matematica: LEO, 17 anni, nelle tre viste (tre quarti, profilo, schiena).
   Stessa cornice e stesso "scheletro" di Nina (viewBox -110 -600 230 615, piedi in 5,0):
   le parti con una classe (gamba-..., stinco-..., braccio-..., busto) si muovono nella camminata.
   Felpa senape, sciarpa lunghissima verde petrolio, capelli spettinati, orologio rotto al polso. */
Grafica.definizioni(`
  <!-- ================= TRE QUARTI ================= -->
  <symbol id="leo-fronte" viewBox="-110 -600 230 615" overflow="visible">
    <ellipse cx="10" cy="0" rx="66" ry="11" fill="#000" opacity=".4"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <!-- coda della sciarpa, dietro la schiena -->
      <g class="borsa">
        <path d="M-30 -452 C-60 -420 -70 -360 -66 -300 L-48 -296 C-50 -350 -44 -400 -18 -440 Z" fill="url(#g-sciarpa)"/>
        <path d="M-60 -330 L-46 -328 M-62 -310 L-47 -308" stroke="#0c4a46" stroke-width="3"/>
      </g>
      <g class="gamba-dietro">
        <path d="M-30 -296 C-34 -246 -36 -196 -35 -144 L-6 -144 C-5 -200 -3 -252 0 -290 Z" fill="url(#g-pantaloni)"/>
        <g class="stinco-dietro">
          <path d="M-35 -160 C-34 -110 -31 -50 -29 -24 L-9 -24 C-9 -62 -7 -110 -6 -160 Z" fill="url(#g-pantaloni)"/>
          <path d="M-34 -28 L-8 -28 L-6 -8 Q-6 0 -12 0 L-48 0 Q-52 -10 -42 -16 Z" fill="#ece6d8"/>
          <path d="M-48 -3 L-6 -3" stroke="#b8322c" stroke-width="5"/>
        </g>
      </g>
      <g class="gamba-avanti">
        <path d="M2 -292 C6 -244 12 -194 16 -144 L41 -144 C39 -204 38 -254 38 -296 Z" fill="url(#g-pantaloni)"/>
        <g class="stinco-avanti">
          <path d="M16 -160 C20 -112 24 -64 28 -24 L48 -24 C46 -64 42 -112 41 -160 Z" fill="url(#g-pantaloni)"/>
          <path d="M26 -28 L50 -28 Q54 -14 68 -10 Q76 -5 74 0 L22 0 Z" fill="#f6f1e4"/>
          <path d="M22 -3 L74 -3" stroke="#b8322c" stroke-width="5"/>
          <path d="M34 -24 L46 -18" stroke="#b8322c" stroke-width="3"/>
        </g>
      </g>
      <g class="busto">
        <!-- felpa con tasca a marsupio -->
        <path d="M-44 -446 C-56 -390 -52 -330 -48 -280 Q4 -268 56 -280 C60 -330 62 -390 52 -446 Q4 -460 -44 -446 Z" fill="url(#g-felpa)"/>
        <path d="M-26 -336 Q6 -328 36 -336 L42 -298 Q6 -290 -32 -298 Z" fill="#c08a22"/>
        <path d="M-48 -292 Q4 -280 56 -292" fill="none" stroke="#8a5a10" stroke-width="5"/>
        <!-- braccio dietro, lungo il fianco -->
        <g class="braccio-dietro">
          <path d="M-40 -434 C-54 -400 -58 -368 -54 -340 C-52 -322 -48 -310 -44 -298" fill="none" stroke="#1d1428" stroke-width="27"/>
          <path d="M-40 -434 C-54 -400 -58 -368 -54 -340 C-52 -322 -48 -310 -44 -298" fill="none" stroke="#b07a1a" stroke-width="21"/>
          <ellipse cx="-44" cy="-292" rx="9" ry="11" fill="url(#g-pelle-l)"/>
        </g>
        <!-- collo, cappuccio, testa -->
        <path d="M-4 -472 L-6 -444 L16 -444 L14 -472 Z" fill="#c8946a"/>
        <path d="M-36 -452 Q4 -480 44 -452 Q4 -436 -36 -452 Z" fill="#b07a1a"/>
        <path d="M-24 -526 C-26 -494 -20 -474 0 -466 C14 -462 28 -470 34 -490 C38 -504 38 -524 32 -540 C22 -556 -16 -556 -24 -526 Z" fill="url(#g-pelle-l)"/>
        <path d="M-20 -508 Q-30 -512 -28 -498 Q-26 -488 -18 -492" fill="#d29c74"/>
        <!-- capelli spettinati -->
        <path d="M-32 -512 C-46 -540 -36 -572 -10 -582 L-4 -596 L6 -584 L18 -598 L22 -582 L38 -590 L36 -572 C46 -560 44 -540 38 -528 C30 -546 14 -550 0 -544 C-12 -540 -20 -530 -26 -510 Z" fill="#7a5524"/>
        <path d="M-8 -574 Q-18 -560 -20 -542 M12 -578 Q4 -566 2 -552 M28 -572 Q24 -560 26 -548" fill="none" stroke="#b08440" stroke-width="2.5"/>
        <!-- viso -->
        <path d="M-5 -511 Q6 -522 17 -511 Q6 -503 -5 -511 Z" fill="#fff" stroke-width="2"/>
        <path d="M20 -510 Q28 -519 36 -510 Q28 -503 20 -510 Z" fill="#fff" stroke-width="2"/>
        <circle cx="9" cy="-511" r="5" fill="#3a6a9a" stroke="none"/>
        <circle cx="30" cy="-510" r="4.4" fill="#3a6a9a" stroke="none"/>
        <circle cx="9.5" cy="-511" r="2.4" fill="#0e1622" stroke="none"/>
        <circle cx="30.5" cy="-510" r="2.1" fill="#0e1622" stroke="none"/>
        <circle cx="11" cy="-513" r="1.5" fill="#fff" stroke="none"/>
        <path d="M-6 -527 Q5 -533 16 -526 M22 -525 Q30 -530 38 -522" fill="none" stroke="#5a3c18" stroke-width="4"/>
        <path d="M26 -504 Q34 -490 27 -486 Q22 -485 19 -488" fill="none" stroke="#a0623e" stroke-width="3"/>
        <path d="M10 -478 Q22 -472 32 -482" fill="none" stroke="#7a3a2a" stroke-width="3"/>
        <!-- sciarpa avvolta e capo davanti -->
        <path d="M-22 -466 Q8 -450 42 -464 L44 -446 Q8 -432 -22 -448 Z" fill="url(#g-sciarpa)"/>
        <path d="M28 -452 L20 -372 L40 -370 L42 -450 Z" fill="url(#g-sciarpa)"/>
        <path d="M22 -392 L40 -390 M23 -380 L40 -378" stroke="#0c4a46" stroke-width="3"/>
        <path d="M20 -372 L18 -362 M26 -371 L25 -360 M32 -371 L32 -360 M38 -370 L39 -360" stroke="#3cc8b6" stroke-width="2.5"/>
        <!-- braccio avanti con l'orologio rotto -->
        <g class="braccio-avanti">
          <path d="M48 -436 C58 -404 62 -374 64 -350 C66 -330 72 -314 80 -300" fill="none" stroke="#1d1428" stroke-width="27"/>
          <path d="M48 -436 C58 -404 62 -374 64 -350 C66 -330 72 -314 80 -300" fill="none" stroke="#e2ab36" stroke-width="21"/>
          <path d="M54 -420 C61 -394 63 -370 66 -350" fill="none" stroke="#f8d880" stroke-width="5" opacity=".7"/>
          <ellipse cx="82" cy="-294" rx="9" ry="11" fill="url(#g-pelle-l)"/>
          <rect x="70" y="-318" width="22" height="10" rx="3" fill="#3a3346" transform="rotate(-25 81 -313)"/>
          <circle cx="81" cy="-313" r="8" fill="#f2ead2" stroke-width="2.5"/>
          <path d="M78 -318 L82 -312 L79 -308" fill="none" stroke="#b8322c" stroke-width="1.5"/>
        </g>
      </g>
    </g>
  </symbol>

  <!-- ================= PROFILO (guarda a destra) ================= -->
  <symbol id="leo-profilo" viewBox="-110 -600 230 615" overflow="visible">
    <ellipse cx="8" cy="0" rx="54" ry="10" fill="#000" opacity=".4"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <g class="borsa">
        <path d="M-22 -452 C-52 -420 -62 -360 -58 -300 L-42 -296 C-44 -350 -38 -400 -10 -440 Z" fill="url(#g-sciarpa)"/>
      </g>
      <g class="gamba-dietro">
        <path d="M-14 -296 C-16 -246 -16 -196 -14 -144 L12 -144 C14 -196 16 -246 18 -296 Z" fill="#2c2f3a"/>
        <g class="stinco-dietro">
          <path d="M-14 -160 C-13 -110 -12 -60 -11 -24 L11 -24 C11 -60 12 -110 12 -160 Z" fill="#2c2f3a"/>
          <path d="M-13 -28 L12 -28 Q16 -14 32 -10 Q40 -5 38 0 L-15 0 Q-17 -14 -13 -28 Z" fill="#d8d2c4"/>
          <path d="M-15 -3 L38 -3" stroke="#8a2622" stroke-width="5"/>
        </g>
      </g>
      <g class="gamba-avanti">
        <path d="M-10 -296 C-12 -246 -12 -196 -10 -144 L16 -144 C18 -196 20 -246 22 -296 Z" fill="url(#g-pantaloni)"/>
        <g class="stinco-avanti">
          <path d="M-10 -160 C-9 -110 -8 -60 -7 -24 L15 -24 C15 -60 16 -110 16 -160 Z" fill="url(#g-pantaloni)"/>
          <path d="M-9 -28 L16 -28 Q20 -14 36 -10 Q44 -5 42 0 L-11 0 Q-13 -14 -9 -28 Z" fill="#f6f1e4"/>
          <path d="M-11 -3 L42 -3" stroke="#b8322c" stroke-width="5"/>
        </g>
      </g>
      <g class="busto">
        <g class="braccio-dietro">
          <path d="M-2 -432 C-8 -400 -10 -366 -8 -336 C-6 -318 -4 -308 -2 -298" fill="none" stroke="#1d1428" stroke-width="25"/>
          <path d="M-2 -432 C-8 -400 -10 -366 -8 -336 C-6 -318 -4 -308 -2 -298" fill="none" stroke="#a87418" stroke-width="19"/>
        </g>
        <path d="M-32 -446 C-40 -390 -36 -330 -32 -280 L36 -280 C40 -330 44 -390 32 -446 Q0 -458 -32 -446 Z" fill="url(#g-felpa)"/>
        <path d="M6 -336 L40 -334 L42 -298 L8 -298 Z" fill="#c08a22"/>
        <path d="M-32 -292 L36 -292" stroke="#8a5a10" stroke-width="5"/>
        <!-- cappuccio dietro il collo -->
        <path d="M-38 -448 Q-52 -474 -28 -482 Q-6 -476 -8 -452 Z" fill="#b07a1a"/>
        <path d="M0 -472 L-2 -444 L18 -444 L16 -472 Z" fill="#c8946a"/>
        <!-- testa di profilo -->
        <path d="M-22 -530 C-26 -500 -20 -478 -2 -468 C10 -462 22 -466 28 -476 Q34 -486 31 -495 L44 -506 L34 -517 C34 -540 22 -556 0 -556 C-14 -556 -20 -546 -22 -530 Z" fill="url(#g-pelle-l)"/>
        <path d="M-6 -512 Q-16 -516 -14 -502 Q-12 -492 -4 -496" fill="#d29c74"/>
        <path d="M-30 -510 C-44 -540 -32 -574 -6 -584 L0 -598 L10 -586 L22 -598 L24 -582 L38 -586 L34 -566 C40 -556 38 -544 34 -536 C22 -546 6 -546 -6 -536 C-12 -528 -16 -518 -18 -504 Z" fill="#7a5524"/>
        <path d="M24 -514 Q31 -521 37 -514 Q31 -508 24 -514 Z" fill="#fff" stroke-width="2"/>
        <circle cx="32" cy="-514" r="3.6" fill="#3a6a9a" stroke="none"/>
        <circle cx="33" cy="-514" r="1.8" fill="#0e1622" stroke="none"/>
        <path d="M22 -528 Q30 -532 40 -526" fill="none" stroke="#5a3c18" stroke-width="4"/>
        <path d="M22 -480 Q28 -478 32 -482" fill="none" stroke="#7a3a2a" stroke-width="3"/>
        <!-- sciarpa avvolta -->
        <path d="M-10 -466 Q12 -452 30 -464 L32 -446 Q12 -434 -10 -448 Z" fill="url(#g-sciarpa)"/>
        <path d="M18 -452 L22 -376 L38 -378 L32 -452 Z" fill="url(#g-sciarpa)"/>
        <g class="braccio-avanti">
          <path d="M6 -432 C12 -400 14 -366 12 -336 C10 -318 10 -308 12 -298" fill="none" stroke="#1d1428" stroke-width="25"/>
          <path d="M6 -432 C12 -400 14 -366 12 -336 C10 -318 10 -308 12 -298" fill="none" stroke="#e2ab36" stroke-width="19"/>
          <ellipse cx="13" cy="-290" rx="8" ry="10" fill="url(#g-pelle-l)"/>
          <circle cx="12" cy="-310" r="7" fill="#f2ead2" stroke-width="2.5"/>
        </g>
      </g>
    </g>
  </symbol>

  <!-- ================= SCHIENA ================= -->
  <symbol id="leo-schiena" viewBox="-110 -600 230 615" overflow="visible">
    <ellipse cx="5" cy="0" rx="66" ry="11" fill="#000" opacity=".4"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <g class="gamba-sx">
        <path d="M-28 -296 C-32 -226 -32 -166 -30 -116 C-29 -76 -28 -44 -27 -24 L-7 -24 C-7 -62 -5 -112 -4 -152 C-3 -202 -2 -252 0 -294 Z" fill="url(#g-pantaloni)"/>
        <path d="M-32 -28 L-5 -28 L-4 -6 Q-4 0 -10 0 L-30 0 Q-36 -12 -32 -28 Z" fill="#ece6d8"/>
        <path d="M-34 -3 L-5 -3" stroke="#b8322c" stroke-width="5"/>
      </g>
      <g class="gamba-dx">
        <path d="M10 -294 C12 -252 13 -202 14 -152 C15 -112 17 -62 17 -24 L37 -24 C38 -44 39 -76 40 -116 C42 -166 42 -226 38 -296 Z" fill="url(#g-pantaloni)"/>
        <path d="M15 -28 L42 -28 Q46 -12 42 0 L22 0 Q14 0 14 -6 Z" fill="#ece6d8"/>
        <path d="M15 -3 L44 -3" stroke="#b8322c" stroke-width="5"/>
      </g>
      <g class="busto">
        <path d="M-6 -476 L-8 -446 L18 -446 L16 -476 Z" fill="#c8946a"/>
        <path d="M-48 -446 C-60 -400 -58 -340 -54 -270 Q5 -258 64 -270 C68 -340 70 -400 58 -446 Q5 -458 -48 -446 Z" fill="url(#g-felpa)"/>
        <path d="M-54 -286 Q5 -274 64 -286" fill="none" stroke="#8a5a10" stroke-width="5"/>
        <!-- cappuccio abbassato sulla schiena -->
        <path d="M-26 -452 Q5 -470 36 -452 Q40 -410 5 -396 Q-30 -410 -26 -452 Z" fill="#b07a1a"/>
        <path d="M-16 -446 Q5 -456 26 -446 Q28 -418 5 -408 Q-18 -418 -16 -446 Z" fill="#8a5a10" opacity=".5"/>
        <!-- coda della sciarpa che pende sulla schiena -->
        <path d="M14 -456 L2 -330 L24 -326 L34 -454 Z" fill="url(#g-sciarpa)"/>
        <path d="M4 -350 L24 -347 M6 -338 L24 -336" stroke="#0c4a46" stroke-width="3"/>
        <path d="M-22 -466 Q5 -452 34 -466 L36 -450 Q5 -436 -22 -450 Z" fill="url(#g-sciarpa)"/>
        <g class="braccio-sx">
          <path d="M-46 -436 C-60 -400 -62 -364 -58 -336 C-56 -318 -54 -306 -52 -296" fill="none" stroke="#1d1428" stroke-width="27"/>
          <path d="M-46 -436 C-60 -400 -62 -364 -58 -336 C-56 -318 -54 -306 -52 -296" fill="none" stroke="#b07a1a" stroke-width="21"/>
          <ellipse cx="-52" cy="-290" rx="9" ry="11" fill="url(#g-pelle-l)"/>
        </g>
        <g class="braccio-dx">
          <path d="M56 -436 C70 -400 72 -364 68 -336 C66 -318 64 -306 62 -296" fill="none" stroke="#1d1428" stroke-width="27"/>
          <path d="M56 -436 C70 -400 72 -364 68 -336 C66 -318 64 -306 62 -296" fill="none" stroke="#e2ab36" stroke-width="21"/>
          <ellipse cx="62" cy="-290" rx="9" ry="11" fill="url(#g-pelle-l)"/>
        </g>
        <!-- testa da dietro: capelli spettinati e orecchie -->
        <path d="M-26 -510 Q-34 -514 -32 -500 Q-30 -490 -22 -494" fill="#d29c74"/>
        <path d="M36 -510 Q44 -514 42 -500 Q40 -490 32 -494" fill="#d29c74"/>
        <path d="M-28 -500 C-40 -540 -30 -574 -6 -584 L0 -598 L10 -586 L22 -598 L26 -582 L40 -588 L38 -566 C48 -546 44 -516 34 -496 C24 -480 -16 -480 -28 -500 Z" fill="#7a5524"/>
        <path d="M-4 -560 Q-10 -530 -6 -500 M14 -566 Q18 -530 14 -498" fill="none" stroke="#b08440" stroke-width="2.5"/>
      </g>
    </g>
  </symbol>
`);
