/* Gioco di Scienze: Nina vista DI PROFILO (guarda a destra) e DI SCHIENA.
   Stessa cornice del disegno di tre quarti (viewBox -110 -600 230 615, piedi in 5,0),
   così il motore passa da una vista all'altra senza spostamenti.
   Le parti con una classe (gamba-..., stinco-..., braccio-..., busto, pendolo) si muovono nella camminata. */
Grafica.definizioni(`
  <!-- ================= PROFILO ================= -->
  <symbol id="nina-profilo" viewBox="-110 -600 230 615" overflow="visible">
    <ellipse cx="8" cy="0" rx="56" ry="10" fill="#000" opacity=".4"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <!-- borsa: dietro il fianco -->
      <g class="borsa">
        <path d="M-50 -332 Q-54 -300 -50 -264 Q-32 -256 -16 -264 Q-12 -300 -16 -332 Q-32 -340 -50 -332 Z" fill="url(#g-cuoio)"/>
        <path d="M-52 -328 Q-32 -322 -14 -328 L-14 -302 Q-32 -296 -52 -302 Z" fill="#5a3a20"/>
        <circle cx="-33" cy="-302" r="3" fill="#e8b85a"/>
      </g>
      <!-- gamba lontana (più scura) -->
      <g class="gamba-dietro">
        <path d="M-12 -296 C-14 -246 -14 -196 -13 -144 L13 -144 C14 -200 15 -252 16 -296 Z" fill="#1f2a4e"/>
        <g class="stinco-dietro">
          <path d="M-13 -160 C-12 -110 -10 -50 -9 -22 L11 -22 C11 -62 12 -110 13 -160 Z" fill="#1f2a4e"/>
          <ellipse cx="0" cy="-152" rx="13.5" ry="9" fill="#1f2a4e" stroke="none"/>
          <path d="M-12 -26 L11 -26 Q14 -12 30 -8 Q38 -4 36 0 L-14 0 Q-16 -14 -12 -26 Z" fill="#3a2214"/>
        </g>
      </g>
      <!-- gamba vicina -->
      <g class="gamba-avanti">
        <path d="M-12 -296 C-14 -246 -14 -196 -13 -144 L13 -144 C14 -200 15 -252 16 -296 Z" fill="url(#g-jeans)"/>
        <path d="M-3 -236 Q1 -196 -1 -162" fill="none" stroke="#0f1630" stroke-width="2" opacity=".6"/>
        <g class="stinco-avanti">
          <path d="M-13 -160 C-12 -110 -10 -50 -9 -22 L11 -22 C11 -62 12 -110 13 -160 Z" fill="url(#g-jeans)"/>
          <ellipse cx="0" cy="-152" rx="13.5" ry="9" fill="#34467a" stroke="none"/>
          <path d="M-12 -26 L11 -26 Q14 -12 30 -8 Q38 -4 36 0 L-14 0 Q-16 -14 -12 -26 Z" fill="#5a3620"/>
          <path d="M-14 -3 L36 -3" stroke="#22140a" stroke-width="5"/>
          <path d="M12 -150 C12 -110 11 -60 11 -26" fill="none" stroke="#ffcf70" stroke-width="3" style="opacity:calc(var(--lanterna,1) * .5)"/>
        </g>
      </g>
      <g class="busto">
        <!-- braccio lontano con il quaderno -->
        <g class="braccio-dietro">
          <path d="M-6 -434 C-12 -400 -12 -370 -10 -346 C-8 -326 -6 -312 -4 -302" fill="none" stroke="#1d1428" stroke-width="25"/>
          <path d="M-6 -434 C-12 -400 -12 -370 -10 -346 C-8 -326 -6 -312 -4 -302" fill="none" stroke="#163a38" stroke-width="19"/>
          <path d="M-18 -306 L8 -310 L10 -272 L-16 -268 Z" fill="#5a1826"/>
          <ellipse cx="-4" cy="-296" rx="8" ry="10" fill="#8e5a3a"/>
        </g>
        <!-- collo -->
        <path d="M-2 -474 L-4 -444 L16 -444 L14 -470 Z" fill="#9a6440"/>
        <!-- maglia: si intravede sul davanti -->
        <path d="M8 -444 C16 -392 20 -340 18 -296 L34 -296 C38 -340 40 -392 32 -444 Z" fill="url(#g-maglia)"/>
        <path d="M16 -302 L36 -302" stroke="#3a2416" stroke-width="7"/>
        <!-- giacca di fianco, aperta sul davanti -->
        <path d="M-28 -448 C-36 -400 -34 -340 -30 -266 L22 -262 C24 -330 20 -392 14 -446 Z" fill="url(#g-giacca)"/>
        <path d="M26 -442 C36 -392 40 -332 38 -270 L48 -274 C50 -340 48 -400 38 -446 Z" fill="url(#g-giacca)"/>
        <path d="M-22 -352 L4 -350 L4 -320 L-22 -322 Z" fill="#245a56" stroke-width="2.5"/>
        <path d="M-24 -440 L-27 -300" stroke="#0c2a28" stroke-width="2" opacity=".6"/>
        <path d="M-8 -456 L-18 -428 L4 -440 Z" fill="#245a56"/>
        <!-- tracolla -->
        <path d="M22 -442 L-32 -328" stroke="#3e2414" stroke-width="9"/>
        <path d="M22 -442 L-32 -328" stroke="#8a5a32" stroke-width="4"/>
        <!-- testa di profilo: ricci raccolti dietro -->
        <circle cx="-36" cy="-562" r="22" fill="#24160f"/>
        <circle cx="-28" cy="-492" r="11" fill="#24160f"/>
        <path d="M-24 -536 C-28 -510 -22 -486 -6 -472 C2 -466 12 -462 22 -464 C28 -465 31 -470 30 -476 C33 -478 34 -481 32 -484 C35 -486 35 -489 33 -491 C36 -494 40 -498 44 -503 C42 -507 38 -509 36 -512 C37 -522 36 -534 30 -544 C18 -560 -14 -560 -24 -536 Z" fill="url(#g-pelle-n)"/>
        <path d="M-4 -512 Q-13 -514 -12 -502 Q-11 -493 -2 -496" fill="#a86c46"/>
        <path d="M-32 -520 C-44 -556 -18 -584 10 -580 C30 -576 42 -562 38 -540 C32 -550 22 -554 12 -550 C2 -546 -6 -538 -10 -526 C-12 -516 -18 -508 -26 -500 Z" fill="#2a1a12"/>
        <path d="M8 -574 Q-8 -562 -12 -540 M-20 -566 Q-26 -548 -24 -530" fill="none" stroke="#5a3a26" stroke-width="2.5"/>
        <!-- lampada frontale -->
        <path d="M-34 -548 Q2 -568 38 -542" fill="none" stroke="#1d1428" stroke-width="8"/>
        <path d="M-34 -548 Q2 -568 38 -542" fill="none" stroke="#6a3a8a" stroke-width="4"/>
        <rect x="22" y="-565" width="18" height="13" rx="5" fill="#3a3346"/>
        <circle cx="38" cy="-558" r="4.5" fill="#fff6c2" stroke-width="2"/>
        <!-- occhio, sopracciglio, bocca -->
        <path d="M17 -516 Q25 -523 31 -515 Q24 -510 17 -516 Z" fill="#fff" stroke-width="2"/>
        <circle cx="26.5" cy="-515.5" r="3.8" fill="#5a3418" stroke="none"/>
        <circle cx="27.5" cy="-515.5" r="1.9" fill="#140a06" stroke="none"/>
        <circle cx="28.4" cy="-517" r="1" fill="#fff" stroke="none"/>
        <path d="M16 -517 Q24 -525 32 -516" fill="none" stroke-width="3"/>
        <path d="M16 -529 Q25 -533 34 -526" fill="none" stroke="#24160f" stroke-width="3.5"/>
        <path d="M33 -487.5 L27 -486.5" stroke="#5a2a26" stroke-width="2.5"/>
        <circle cx="14" cy="-493" r="7" fill="#e07a6a" opacity=".25" stroke="none"/>
        <path d="M-26 -534 C-30 -508 -24 -486 -8 -472" fill="none" stroke="#9ab8ff" stroke-width="2" opacity=".6"/>
        <!-- braccio vicino con la lanterna -->
        <g class="braccio-avanti">
          <path d="M6 -434 C12 -400 14 -370 14 -350 C14 -330 16 -314 18 -300" fill="none" stroke="#1d1428" stroke-width="27"/>
          <path d="M6 -434 C12 -400 14 -370 14 -350 C14 -330 16 -314 18 -300" fill="none" stroke="#3a8a80" stroke-width="21"/>
          <path d="M10 -420 C15 -394 16 -370 16 -350" fill="none" stroke="#6cc0ae" stroke-width="5" opacity=".7"/>
          <ellipse cx="19" cy="-294" rx="9" ry="11" fill="url(#g-pelle-n)"/>
          <g transform="translate(21 -246)" style="opacity:var(--lanterna,1)">
            <g class="pendolo">
              <path d="M-8 -40 Q0 -54 8 -40" fill="none" stroke-width="3"/>
              <path d="M-14 -40 L14 -40 L10 -32 L-10 -32 Z" fill="url(#g-ottone)"/>
              <rect x="-12" y="-32" width="24" height="34" rx="4" fill="url(#g-vetro-lanterna)"/>
              <path d="M-4 -32 L-4 2 M4 -32 L4 2" stroke="#7a521c" stroke-width="2.5"/>
              <path d="M-15 2 L15 2 L11 10 L-11 10 Z" fill="url(#g-ottone)"/>
              <path d="M-2 -12 Q0 -22 3 -12 Q0 -7 -2 -12 Z" fill="#fff" stroke="none"/>
            </g>
          </g>
        </g>
      </g>
    </g>
  </symbol>

  <!-- ================= SCHIENA ================= -->
  <symbol id="nina-schiena" viewBox="-110 -600 230 615" overflow="visible">
    <ellipse cx="5" cy="0" rx="68" ry="11" fill="#000" opacity=".4"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <!-- gambe viste da dietro, con i talloni degli stivaletti -->
      <g class="gamba-sx">
        <path d="M-28 -296 C-32 -226 -32 -166 -30 -116 C-29 -76 -28 -44 -27 -22 L-7 -22 C-7 -62 -5 -112 -4 -152 C-3 -202 -2 -252 0 -294 Z" fill="url(#g-jeans)"/>
        <path d="M-18 -158 Q-16 -146 -18 -136" fill="none" stroke="#0f1630" stroke-width="2" opacity=".7"/>
        <path d="M-32 -28 L-5 -28 L-4 -6 Q-4 0 -10 0 L-30 0 Q-36 -12 -32 -28 Z" fill="#4a2c1a"/>
        <path d="M-34 -3 L-5 -3" stroke="#22140a" stroke-width="5"/>
        <path d="M-32 -230 C-33 -180 -32 -130 -29 -60" fill="none" stroke="#9ab8ff" stroke-width="2" opacity=".6"/>
      </g>
      <g class="gamba-dx">
        <path d="M10 -294 C12 -252 13 -202 14 -152 C15 -112 17 -62 17 -22 L37 -22 C38 -44 39 -76 40 -116 C42 -166 42 -226 38 -296 Z" fill="url(#g-jeans)"/>
        <path d="M28 -158 Q26 -146 28 -136" fill="none" stroke="#0f1630" stroke-width="2" opacity=".7"/>
        <path d="M15 -28 L42 -28 Q46 -12 42 0 L22 0 Q14 0 14 -6 Z" fill="#4a2c1a"/>
        <path d="M15 -3 L44 -3" stroke="#22140a" stroke-width="5"/>
      </g>
      <g class="busto">
        <!-- collo -->
        <path d="M-6 -476 L-8 -446 L18 -446 L16 -476 Z" fill="#8e5a3a"/>
        <!-- giacca vista da dietro: carré, cucitura centrale, orlo -->
        <path d="M-48 -446 C-60 -400 -58 -340 -54 -266 Q5 -254 64 -266 C68 -340 70 -400 58 -446 Q5 -458 -48 -446 Z" fill="url(#g-giacca)"/>
        <path d="M-50 -416 Q5 -404 60 -416" fill="none" stroke="#0c2a28" stroke-width="3"/>
        <path d="M5 -408 L5 -262" stroke="#0c2a28" stroke-width="2.5"/>
        <path d="M-54 -282 Q5 -270 64 -282" fill="none" stroke="#0c2a28" stroke-width="2.5"/>
        <path d="M-22 -454 Q5 -442 32 -454 L28 -436 Q5 -428 -18 -436 Z" fill="#245a56"/>
        <!-- tracolla e borsa sul fianco sinistro -->
        <path d="M42 -446 L-40 -318" stroke="#3e2414" stroke-width="9"/>
        <path d="M42 -446 L-40 -318" stroke="#8a5a32" stroke-width="4"/>
        <g class="borsa">
          <path d="M-66 -332 Q-70 -300 -66 -262 Q-44 -254 -22 -262 Q-18 -300 -22 -332 Q-44 -340 -66 -332 Z" fill="url(#g-cuoio)"/>
          <path d="M-62 -322 L-26 -322" stroke="#5a3a20" stroke-width="2.5"/>
        </g>
        <!-- braccio sinistro con il quaderno -->
        <g class="braccio-sx">
          <path d="M-46 -436 C-58 -400 -62 -370 -60 -344 C-58 -324 -56 -312 -54 -300" fill="none" stroke="#1d1428" stroke-width="27"/>
          <path d="M-46 -436 C-58 -400 -62 -370 -60 -344 C-58 -324 -56 -312 -54 -300" fill="none" stroke="#1f4c4a" stroke-width="21"/>
          <path d="M-64 -306 L-42 -310 L-40 -274 L-62 -270 Z" fill="#7a2232"/>
          <ellipse cx="-54" cy="-296" rx="9" ry="11" fill="#8e5a3a"/>
          <path d="M-62 -420 C-66 -390 -66 -360 -64 -340" fill="none" stroke="#9ab8ff" stroke-width="2" opacity=".6"/>
        </g>
        <!-- braccio destro con la lanterna -->
        <g class="braccio-dx">
          <path d="M56 -436 C66 -404 70 -374 70 -350 C70 -330 70 -314 70 -300" fill="none" stroke="#1d1428" stroke-width="27"/>
          <path d="M56 -436 C66 -404 70 -374 70 -350 C70 -330 70 -314 70 -300" fill="none" stroke="#2f7a72" stroke-width="21"/>
          <ellipse cx="70" cy="-294" rx="9" ry="11" fill="#b07a52"/>
          <g transform="translate(72 -246)" style="opacity:var(--lanterna,1)">
            <g class="pendolo">
              <path d="M-8 -40 Q0 -54 8 -40" fill="none" stroke-width="3"/>
              <path d="M-14 -40 L14 -40 L10 -32 L-10 -32 Z" fill="url(#g-ottone)"/>
              <rect x="-12" y="-32" width="24" height="34" rx="4" fill="url(#g-vetro-lanterna)"/>
              <path d="M-4 -32 L-4 2 M4 -32 L4 2" stroke="#7a521c" stroke-width="2.5"/>
              <path d="M-15 2 L15 2 L11 10 L-11 10 Z" fill="url(#g-ottone)"/>
            </g>
          </g>
        </g>
        <!-- testa vista da dietro: ricci, chignon, cinghia della lampada -->
        <path d="M-30 -508 Q-38 -512 -36 -500 Q-34 -492 -28 -496 Z M40 -508 Q48 -512 46 -500 Q44 -492 38 -496 Z" fill="#a86c46"/>
        <path d="M-32 -520 C-36 -562 -12 -582 5 -582 C22 -582 46 -562 42 -520 C40 -494 28 -476 5 -474 C-18 -476 -30 -494 -32 -520 Z" fill="#2a1a12"/>
        <circle cx="-14" cy="-482" r="9" fill="#24160f"/>
        <circle cx="5" cy="-478" r="9" fill="#24160f"/>
        <circle cx="24" cy="-482" r="9" fill="#24160f"/>
        <circle cx="5" cy="-576" r="24" fill="#24160f"/>
        <path d="M-8 -584 Q0 -594 14 -586 M-10 -568 Q2 -560 18 -568" fill="none" stroke="#5a3a26" stroke-width="2.5"/>
        <path d="M-20 -548 Q-26 -528 -22 -506 M30 -548 Q36 -528 32 -506 M5 -550 L5 -500" fill="none" stroke="#4a3020" stroke-width="2.5"/>
        <path d="M-33 -536 Q5 -524 43 -536" fill="none" stroke="#1d1428" stroke-width="8"/>
        <path d="M-33 -536 Q5 -524 43 -536" fill="none" stroke="#6a3a8a" stroke-width="4"/>
        <path d="M-32 -520 C-34 -500 -28 -486 -16 -478" fill="none" stroke="#9ab8ff" stroke-width="2" opacity=".6"/>
      </g>
    </g>
  </symbol>
`);
