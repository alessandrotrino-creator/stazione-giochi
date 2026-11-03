/* Gioco di Scienze: sfumature, texture, personaggi e oggetti (disegni vettoriali condivisi).
   Generato dalla prova di stile approvata il 2 novembre 2026; da qui in poi si modifica questo file. */
Grafica.definizioni(`
    <!-- texture e filtri -->
    <filter id="grana" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency=".85" numOctaves="2" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/>
    </filter>
    <filter id="venatura" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency=".012 .35" numOctaves="3" seed="4"/>
      <feColorMatrix type="matrix" values="0 0 0 0 .1  0 0 0 0 .05  0 0 0 0 .02  0 0 0 1.4 -.55"/>
    </filter>
    <filter id="sfoca-forte"><feGaussianBlur stdDeviation="18"/></filter>
    <filter id="sfoca"><feGaussianBlur stdDeviation="6"/></filter>
    <filter id="sfoca-poco"><feGaussianBlur stdDeviation="2"/></filter>

    <!-- carta da parati con motivo di conchiglie e foglie -->
    <pattern id="p-carta" width="110" height="110" patternUnits="userSpaceOnUse">
      <g fill="none" stroke="#3a4f86" stroke-width="2" stroke-linecap="round" opacity=".55">
        <path d="M55 40 a10 10 0 1 1 -10 10 a7 7 0 1 1 7 -7 a4 4 0 1 1 -4 4"/>
        <path d="M20 95 q10 -18 0 -30 q-10 12 0 30 z M90 95 q10 -18 0 -30 q-10 12 0 30 z"/>
        <path d="M0 55 h6 M104 55 h6 M55 0 v6 M55 104 v6"/>
      </g>
    </pattern>

    <linearGradient id="g-parete" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0e1430"/>
      <stop offset=".55" stop-color="#1f2d58"/>
      <stop offset="1" stop-color="#172246"/>
    </linearGradient>
    <linearGradient id="g-legno-scuro" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#4a2c1c"/>
      <stop offset="1" stop-color="#24140c"/>
    </linearGradient>
    <linearGradient id="g-legno" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#7a4a2c"/>
      <stop offset="1" stop-color="#3e2416"/>
    </linearGradient>
    <linearGradient id="g-pilastro" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#2c3b6c"/>
      <stop offset=".35" stop-color="#34457a"/>
      <stop offset="1" stop-color="#141c3a"/>
    </linearGradient>
    <linearGradient id="g-oro" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#f6d27a"/>
      <stop offset=".45" stop-color="#b8892f"/>
      <stop offset="1" stop-color="#5e3f12"/>
    </linearGradient>
    <linearGradient id="g-cielo" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#08102c"/>
      <stop offset="1" stop-color="#223a78"/>
    </linearGradient>
    <radialGradient id="g-luna" cx="50%" cy="50%" r="50%">
      <stop offset="0" stop-color="#fff9dc"/>
      <stop offset=".7" stop-color="#f1e3a8"/>
      <stop offset="1" stop-color="#d9c37c"/>
    </radialGradient>
    <radialGradient id="g-alone" cx="50%" cy="50%" r="50%">
      <stop offset="0" stop-color="#cfe0ff" stop-opacity=".45"/>
      <stop offset="1" stop-color="#cfe0ff" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="g-velluto" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#2e0c16"/>
      <stop offset=".2" stop-color="#6e2338"/>
      <stop offset=".4" stop-color="#3c111e"/>
      <stop offset=".6" stop-color="#6e2338"/>
      <stop offset=".8" stop-color="#3c111e"/>
      <stop offset="1" stop-color="#5a1c2e"/>
    </linearGradient>
    <linearGradient id="g-vetro" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#cfeaff" stop-opacity=".28"/>
      <stop offset=".5" stop-color="#9fd7ff" stop-opacity=".08"/>
      <stop offset="1" stop-color="#cfeaff" stop-opacity=".2"/>
    </linearGradient>
    <linearGradient id="g-acqua" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#7cf2cf"/>
      <stop offset=".5" stop-color="#2aa98a"/>
      <stop offset="1" stop-color="#0c4a48"/>
    </linearGradient>
    <linearGradient id="g-formalina" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#8a8a2a" stop-opacity=".75"/>
      <stop offset=".35" stop-color="#d8d06a" stop-opacity=".7"/>
      <stop offset="1" stop-color="#6a6a20" stop-opacity=".8"/>
    </linearGradient>
    <linearGradient id="g-marmo" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#8d8aa0"/>
      <stop offset=".4" stop-color="#d9d4e4"/>
      <stop offset="1" stop-color="#5d5a72"/>
    </linearGradient>
    <linearGradient id="g-tappeto" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#5a1a26"/>
      <stop offset="1" stop-color="#7a2a34"/>
    </linearGradient>
    <radialGradient id="g-luce-ambra" cx="50%" cy="50%" r="50%">
      <stop offset="0" stop-color="#ffcf70" stop-opacity=".6"/>
      <stop offset=".5" stop-color="#ff9a3c" stop-opacity=".2"/>
      <stop offset="1" stop-color="#ff9a3c" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="g-luce-verde" cx="50%" cy="50%" r="50%">
      <stop offset="0" stop-color="#5ef0c2" stop-opacity=".35"/>
      <stop offset="1" stop-color="#5ef0c2" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="g-vignetta" cx="45%" cy="60%" r="78%">
      <stop offset=".5" stop-color="#03050f" stop-opacity="0"/>
      <stop offset="1" stop-color="#03050f" stop-opacity=".8"/>
    </radialGradient>
    <radialGradient id="g-vetro-lanterna" cx="50%" cy="55%" r="60%">
      <stop offset="0" stop-color="#fffbe6"/>
      <stop offset=".45" stop-color="#ffd36b"/>
      <stop offset="1" stop-color="#d9701c"/>
    </radialGradient>
    <linearGradient id="g-ottone" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#6e4a16"/>
      <stop offset=".35" stop-color="#e8b85a"/>
      <stop offset=".6" stop-color="#b07d2a"/>
      <stop offset="1" stop-color="#5a3a10"/>
    </linearGradient>

    <!-- pelle, capelli, vestiti di Nina -->
    <linearGradient id="g-pelle-n" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#8e5a3a"/>
      <stop offset=".55" stop-color="#c38558"/>
      <stop offset="1" stop-color="#e0a574"/>
    </linearGradient>
    <linearGradient id="g-giacca" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#173c3c"/>
      <stop offset=".6" stop-color="#2f6f6a"/>
      <stop offset="1" stop-color="#4c9a8a"/>
    </linearGradient>
    <linearGradient id="g-jeans" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#1a2443"/>
      <stop offset=".6" stop-color="#2e3f6c"/>
      <stop offset="1" stop-color="#4a5f96"/>
    </linearGradient>
    <linearGradient id="g-maglia" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#a8701c"/>
      <stop offset="1" stop-color="#f0bf52"/>
    </linearGradient>
    <linearGradient id="g-cuoio" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#8a5a32"/>
      <stop offset="1" stop-color="#3e2414"/>
    </linearGradient>

    <!-- ============ NINA, 16 anni, apprendista del museo ============
         origine ai piedi, guarda a destra; luce calda da destra, luna da sinistra -->
    <symbol id="nina" viewBox="-110 -600 230 615" overflow="visible">
      <ellipse cx="10" cy="0" rx="70" ry="11" fill="#000" opacity=".4"/>
      <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
        <!-- borsa a tracolla, dietro (segue il busto) -->
        <g class="borsa">
          <path d="M-62 -330 Q-66 -300 -62 -262 Q-40 -254 -18 -262 Q-14 -300 -18 -330 Q-40 -338 -62 -330 Z" fill="url(#g-cuoio)"/>
          <path d="M-64 -326 Q-40 -320 -16 -326 L-16 -298 Q-40 -290 -64 -298 Z" fill="#5a3a20"/>
          <circle cx="-40" cy="-300" r="3.5" fill="#e8b85a"/>
        </g>
        <!-- gamba dietro con lo stivaletto (si muove nella camminata) -->
        <g class="gamba-dietro">
          <!-- coscia -->
          <path d="M-30 -296 C-34 -246 -36 -196 -35 -144 L-6 -144 C-5 -200 -3 -252 0 -290 Z" fill="url(#g-jeans)"/>
          <path d="M-28 -200 Q-25 -170 -25 -150" fill="none" stroke="#0f1630" stroke-width="2" opacity=".6"/>
          <path d="M-36 -220 C-37 -190 -36 -160 -35 -150" fill="none" stroke="#9ab8ff" stroke-width="2" opacity=".6"/>
          <!-- stinco e stivaletto: si piegano al ginocchio -->
          <g class="stinco-dietro">
            <path d="M-35 -160 C-34 -110 -31 -50 -29 -22 L-9 -22 C-9 -62 -7 -110 -6 -160 Z" fill="url(#g-jeans)"/>
            <ellipse cx="-20.5" cy="-152" rx="15.5" ry="10" fill="#2a3a66" stroke="none"/>
            <path d="M-33 -26 L-8 -26 L-6 -6 Q-6 0 -12 0 L-44 0 Q-48 -8 -40 -14 Z" fill="#4a2c1a"/>
            <path d="M-44 -3 L-6 -3" stroke="#22140a" stroke-width="5"/>
            <path d="M-35 -150 C-35 -120 -34 -90 -33 -60" fill="none" stroke="#9ab8ff" stroke-width="2" opacity=".6"/>
          </g>
        </g>
        <!-- gamba avanti con lo stivaletto -->
        <g class="gamba-avanti">
          <path d="M2 -292 C6 -244 12 -194 16 -144 L41 -144 C39 -204 38 -254 38 -296 Z" fill="url(#g-jeans)"/>
          <path d="M20 -170 Q30 -160 40 -168" fill="none" stroke="#0f1630" stroke-width="2" opacity=".7"/>
          <path d="M38 -296 C38 -254 39 -204 41 -152" fill="none" stroke="#ffcf70" stroke-width="3" style="opacity:calc(var(--lanterna,1) * .55)"/>
          <g class="stinco-avanti">
            <path d="M16 -160 C20 -112 24 -64 28 -22 L48 -22 C46 -64 42 -112 41 -160 Z" fill="url(#g-jeans)"/>
            <ellipse cx="28.5" cy="-152" rx="14.5" ry="9" fill="#3a4c80" stroke="none"/>
            <path d="M26 -26 L49 -26 Q52 -12 66 -8 Q74 -4 72 0 L24 0 Z" fill="#5a3620"/>
            <path d="M24 -3 L72 -3" stroke="#22140a" stroke-width="5"/>
            <path d="M41 -152 C42 -112 46 -64 48 -22" fill="none" stroke="#ffcf70" stroke-width="3" style="opacity:calc(var(--lanterna,1) * .55)"/>
          </g>
        </g>
        <!-- BUSTO: tronco, braccia e testa (ruota e si inclina nella camminata) -->
        <g class="busto">
        <!-- maglia -->
        <path d="M-36 -442 C-40 -384 -34 -334 -32 -294 L40 -294 C40 -334 44 -384 46 -442 Z" fill="url(#g-maglia)"/>
        <path d="M-34 -302 L40 -302" stroke="#3a2416" stroke-width="7"/>
        <rect x="-2" y="-307" width="12" height="10" rx="2" fill="#d9b25a" stroke-width="2"/>
        <!-- giacca da campo aperta -->
        <path d="M-46 -444 C-60 -404 -58 -344 -54 -270 L-22 -264 C-20 -324 -18 -384 -8 -440 Z" fill="url(#g-giacca)"/>
        <path d="M22 -440 C28 -384 32 -334 36 -266 L60 -272 C64 -344 62 -404 52 -444 Z" fill="url(#g-giacca)"/>
        <path d="M-50 -360 L-26 -358 L-27 -330 L-50 -332 Z M38 -356 L58 -358 L58 -330 L38 -328 Z" fill="#245a56" stroke-width="2.5"/>
        <path d="M-12 -452 L-22 -420 L-4 -436 Z M24 -452 L34 -420 L18 -436 Z" fill="#245a56"/>
        <!-- tracolla -->
        <path d="M44 -440 L-44 -322" stroke="#3e2414" stroke-width="9"/>
        <path d="M44 -440 L-44 -322" stroke="#8a5a32" stroke-width="4"/>
        <!-- braccio dietro con il quaderno (oscilla nella camminata) -->
        <g class="braccio-dietro">
          <path d="M-42 -432 C-56 -400 -60 -370 -56 -344 C-54 -324 -50 -312 -44 -300" fill="none" stroke="#1d1428" stroke-width="27"/>
          <path d="M-42 -432 C-56 -400 -60 -370 -56 -344 C-54 -324 -50 -312 -44 -300" fill="none" stroke="#1f4c4a" stroke-width="21"/>
          <path d="M-60 -306 L-28 -312 L-24 -270 L-58 -264 Z" fill="#7a2232"/>
          <path d="M-56 -300 L-30 -305" stroke="#e8d7a8" stroke-width="2"/>
          <ellipse cx="-44" cy="-296" rx="9" ry="11" fill="url(#g-pelle-n)"/>
        </g>
        <!-- collo e testa -->
        <path d="M-4 -472 L-6 -444 L16 -444 L14 -472 Z" fill="#9a6440"/>
        <!-- capelli dietro: ricci raccolti -->
        <circle cx="-30" cy="-566" r="24" fill="#24160f"/>
        <circle cx="-36" cy="-500" r="12" fill="#24160f"/>
        <circle cx="-30" cy="-486" r="9" fill="#24160f"/>
        <path d="M-24 -526 C-26 -494 -20 -474 0 -466 C14 -462 28 -470 34 -490 C38 -504 38 -524 32 -540 C22 -556 -16 -556 -24 -526 Z" fill="url(#g-pelle-n)"/>
        <!-- orecchio -->
        <path d="M-20 -508 Q-30 -512 -28 -498 Q-26 -488 -18 -492" fill="#a86c46"/>
        <!-- capelli davanti -->
        <path d="M-36 -516 C-48 -552 -22 -580 6 -578 C34 -578 48 -560 42 -530 C36 -546 18 -552 2 -546 C-10 -542 -18 -532 -26 -512 Z" fill="#2a1a12"/>
        <path d="M2 -572 Q-14 -560 -18 -540 M18 -574 Q8 -562 6 -548" fill="none" stroke="#5a3a26" stroke-width="2.5"/>
        <!-- lampada frontale alzata sui capelli -->
        <path d="M-34 -548 Q4 -568 42 -544" fill="none" stroke="#1d1428" stroke-width="8"/>
        <path d="M-34 -548 Q4 -568 42 -544" fill="none" stroke="#6a3a8a" stroke-width="4"/>
        <rect x="14" y="-568" width="20" height="14" rx="5" fill="#3a3346"/>
        <circle cx="30" cy="-561" r="5" fill="#fff6c2" stroke-width="2"/>
        <!-- viso -->
        <path d="M-5 -511 Q6 -523 17 -511 Q6 -502 -5 -511 Z" fill="#fff" stroke-width="2"/>
        <path d="M20 -510 Q28 -520 36 -510 Q28 -502 20 -510 Z" fill="#fff" stroke-width="2"/>
        <circle cx="9" cy="-511" r="5.4" fill="#5a3418" stroke="none"/>
        <circle cx="30" cy="-510" r="4.6" fill="#5a3418" stroke="none"/>
        <circle cx="9.5" cy="-511" r="2.6" fill="#140a06" stroke="none"/>
        <circle cx="30.5" cy="-510" r="2.3" fill="#140a06" stroke="none"/>
        <circle cx="11" cy="-513.5" r="1.6" fill="#fff" stroke="none"/>
        <circle cx="32" cy="-512.5" r="1.4" fill="#fff" stroke="none"/>
        <path d="M-6 -512 Q6 -525 18 -512 M19 -511 Q28 -522 37 -510" fill="none" stroke-width="3.5"/>
        <path d="M-5 -529 Q5 -535 15 -529 M22 -527 Q30 -532 37 -524" fill="none" stroke="#24160f" stroke-width="3.5"/>
        <path d="M26 -504 Q34 -490 27 -486 Q22 -485 19 -488" fill="none" stroke="#6a3e24" stroke-width="3"/>
        <path d="M8 -478 Q21 -470 33 -484" fill="#8a3a36" stroke="#5a2a26" stroke-width="2.5"/>
        <path d="M12 -476 Q21 -472 29 -480" fill="none" stroke="#e8a08a" stroke-width="1.5"/>
        <circle cx="-2" cy="-492" r="7" fill="#e07a6a" opacity=".25" stroke="none"/>
        <!-- ombra sul viso e luce di luna -->
        <path d="M-22 -526 C-24 -494 -18 -474 0 -466 C-8 -480 -12 -500 -10 -526 Z" fill="#5a3422" opacity=".35" stroke="none"/>
        <path d="M-25 -530 C-27 -500 -21 -478 -4 -468" fill="none" stroke="#9ab8ff" stroke-width="2" opacity=".7"/>
        <!-- braccio avanti con la lanterna (oscilla poco; la lanterna dondola) -->
        <g class="braccio-avanti">
          <path d="M48 -436 C58 -404 62 -374 64 -350 C66 -330 72 -314 80 -300" fill="none" stroke="#1d1428" stroke-width="27"/>
          <path d="M48 -436 C58 -404 62 -374 64 -350 C66 -330 72 -314 80 -300" fill="none" stroke="#3a8a80" stroke-width="21"/>
          <path d="M52 -420 C60 -394 63 -370 66 -350" fill="none" stroke="#6cc0ae" stroke-width="5" opacity=".7"/>
          <path d="M58 -340 C62 -380 62 -404 54 -436" fill="none" stroke="#ffcf70" stroke-width="3" style="opacity:calc(var(--lanterna,1) * .5)"/>
          <ellipse cx="82" cy="-294" rx="9" ry="11" fill="url(#g-pelle-n)"/>
          <g transform="translate(84 -246)" style="opacity:var(--lanterna,1)">
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
        <!-- luce di luna sul contorno della giacca -->
        <path d="M-58 -350 C-60 -380 -58 -404 -48 -440" fill="none" stroke="#9ab8ff" stroke-width="2" opacity=".6"/>
        </g>
      </g>
    </symbol>

    <!-- ============ GAMBERTO, il paguro ============ -->
    <linearGradient id="g-guscio" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#ffe7b0"/>
      <stop offset=".5" stop-color="#e2a85a"/>
      <stop offset="1" stop-color="#8a5226"/>
    </linearGradient>
    <linearGradient id="g-chela" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ff7a5a"/>
      <stop offset="1" stop-color="#a8281e"/>
    </linearGradient>
    <symbol id="gamberto" viewBox="-80 -110 170 120" overflow="visible">
      <ellipse cx="0" cy="2" rx="60" ry="7" fill="#000" opacity=".3"/>
      <g stroke="#1d1428" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round">
        <!-- zampe -->
        <path d="M18 -14 Q34 -10 40 2 M12 -10 Q24 -2 26 4 M4 -8 Q10 0 8 4" fill="none" stroke="#1d1428" stroke-width="7"/>
        <path d="M18 -14 Q34 -10 40 2 M12 -10 Q24 -2 26 4 M4 -8 Q10 0 8 4" fill="none" stroke="#d8483a" stroke-width="4"/>
        <!-- conchiglia presa in prestito (di gasteropode) -->
        <path d="M-6 -6 C-44 -4 -66 -30 -56 -60 C-46 -92 -8 -100 14 -78 C30 -62 26 -34 8 -22 C-8 -12 -26 -22 -24 -40 C-22 -54 -6 -58 2 -48" fill="url(#g-guscio)"/>
        <path d="M-54 -40 Q-40 -44 -30 -36 M-50 -68 Q-36 -64 -28 -54 M-30 -88 Q-22 -76 -20 -62 M-2 -92 Q-4 -78 -10 -66" fill="none" stroke="#8a5226" stroke-width="2"/>
        <path d="M-40 -80 Q-24 -94 -4 -88" fill="none" stroke="#fff6dc" stroke-width="3" opacity=".8"/>
        <!-- corpo e chela grande -->
        <path d="M2 -46 Q22 -52 30 -36 Q34 -22 18 -16 Q4 -14 0 -24 Z" fill="url(#g-chela)"/>
        <path d="M24 -30 Q44 -40 58 -32 Q70 -26 66 -14 Q60 -6 46 -12 Q50 -20 42 -22 Q34 -20 28 -18 Z" fill="url(#g-chela)"/>
        <path d="M46 -12 Q58 -4 66 -14" fill="none" stroke="#1d1428" stroke-width="2.5"/>
        <circle cx="54" cy="-28" r="2" fill="#ffd0c0" stroke="none"/>
        <!-- occhi sui peduncoli, sopracciglia imbronciate -->
        <path d="M20 -46 L22 -70 M28 -44 L34 -66" fill="none" stroke-width="4"/>
        <ellipse cx="22" cy="-74" rx="6" ry="7" fill="#fff"/>
        <ellipse cx="35" cy="-70" rx="6" ry="7" fill="#fff"/>
        <circle cx="24" cy="-73" r="2.6" fill="#1d1428" stroke="none"/>
        <circle cx="37" cy="-69" r="2.6" fill="#1d1428" stroke="none"/>
        <path d="M15 -84 L28 -79 M30 -78 L42 -80" fill="none" stroke-width="3"/>
        <path d="M30 -44 Q50 -60 64 -54 M26 -46 Q38 -72 54 -74" fill="none" stroke="#d8483a" stroke-width="1.5"/>
      </g>
    </symbol>

    <!-- ============ OGGETTI DELL'INVENTARIO ============ -->
    <symbol id="ogg-lanterna" viewBox="0 0 140 140">
      <circle cx="70" cy="78" r="58" fill="url(#g-luce-ambra)"/>
      <ellipse cx="70" cy="128" rx="34" ry="5" fill="#000" opacity=".25"/>
      <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
        <path d="M54 30 Q70 4 86 30" fill="none" stroke-width="5"/>
        <path d="M54 30 Q70 4 86 30" fill="none" stroke="#e8b85a" stroke-width="2"/>
        <path d="M44 40 Q70 22 96 40 L92 46 L48 46 Z" fill="url(#g-ottone)"/>
        <rect x="64" y="24" width="12" height="8" rx="2" fill="url(#g-ottone)"/>
        <rect x="47" y="46" width="46" height="58" rx="6" fill="url(#g-vetro-lanterna)"/>
        <path d="M62 46 L62 104 M78 46 L78 104" stroke="#7a521c" stroke-width="4"/>
        <path d="M62 46 L62 104 M78 46 L78 104" stroke="#e8b85a" stroke-width="1.5"/>
        <path d="M65 84 Q70 62 76 84 Q70 92 65 84 Z" fill="#fff" stroke="#ffb347" stroke-width="2"/>
        <rect x="68" y="88" width="4" height="10" fill="#f6efe0" stroke-width="1.5"/>
        <path d="M40 104 L100 104 L96 114 L44 114 Z" fill="url(#g-ottone)"/>
        <path d="M48 118 L92 118" stroke-width="5"/>
        <path d="M51 50 L55 98" stroke="#fff" stroke-width="3" opacity=".6"/>
      </g>
    </symbol>

    <radialGradient id="g-spugna" cx="40%" cy="35%" r="70%">
      <stop offset="0" stop-color="#ffd877"/>
      <stop offset=".6" stop-color="#e09a32"/>
      <stop offset="1" stop-color="#8a5416"/>
    </radialGradient>
    <radialGradient id="g-poro" cx="40%" cy="30%" r="70%">
      <stop offset="0" stop-color="#5a320c"/>
      <stop offset="1" stop-color="#a86a22"/>
    </radialGradient>
    <symbol id="ogg-spugna" viewBox="0 0 140 140">
      <ellipse cx="70" cy="124" rx="44" ry="6" fill="#000" opacity=".25"/>
      <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round">
        <path d="M30 108 C14 96 16 70 30 60 C22 40 38 24 54 30 C60 14 84 14 90 30 C108 26 122 44 112 60 C126 74 120 100 104 108 C96 122 46 122 30 108 Z" fill="url(#g-spugna)"/>
        <g fill="url(#g-poro)" stroke-width="2">
          <ellipse cx="72" cy="34" rx="9" ry="6"/>
          <ellipse cx="46" cy="56" rx="7" ry="9"/>
          <ellipse cx="94" cy="58" rx="10" ry="8"/>
          <ellipse cx="68" cy="72" rx="6" ry="5"/>
          <ellipse cx="38" cy="88" rx="6" ry="5"/>
          <ellipse cx="86" cy="94" rx="8" ry="6"/>
          <ellipse cx="60" cy="100" rx="5" ry="4"/>
          <ellipse cx="108" cy="82" rx="4" ry="5"/>
        </g>
        <g fill="#8a5416" stroke="none" opacity=".6">
          <circle cx="56" cy="44" r="2"/><circle cx="84" cy="44" r="2.4"/><circle cx="58" cy="82" r="2"/><circle cx="78" cy="84" r="1.8"/>
          <circle cx="98" cy="74" r="2"/><circle cx="48" cy="72" r="1.6"/><circle cx="72" cy="110" r="2"/><circle cx="102" cy="100" r="1.6"/>
        </g>
      </g>
      <path d="M36 62 C34 50 44 38 56 40" fill="none" stroke="#fff3c4" stroke-width="4" stroke-linecap="round" opacity=".8"/>
    </symbol>

    <radialGradient id="g-stella" cx="50%" cy="50%" r="55%">
      <stop offset="0" stop-color="#ffb27a"/>
      <stop offset=".6" stop-color="#f0642e"/>
      <stop offset="1" stop-color="#a83414"/>
    </radialGradient>
    <symbol id="ogg-stella" viewBox="0 0 140 140">
      <ellipse cx="72" cy="122" rx="46" ry="6" fill="#000" opacity=".25"/>
      <path id="braccia-stella" d="M70 12 C78 12 80 40 86 50 C96 56 126 50 128 58 C130 66 102 78 98 88 C100 100 114 124 106 128 C98 132 80 110 70 106 C60 110 42 132 34 128 C26 124 40 100 42 88 C38 78 10 66 12 58 C14 50 44 56 54 50 C60 40 62 12 70 12 Z"
        fill="url(#g-stella)" stroke="#1d1428" stroke-width="3" stroke-linejoin="round"/>
      <g fill="#ffd9b8" stroke="#a83414" stroke-width="1">
        <circle cx="70" cy="28" r="3"/><circle cx="70" cy="42" r="3.4"/><circle cx="70" cy="56" r="3.8"/>
        <circle cx="114" cy="60" r="3"/><circle cx="100" cy="64" r="3.4"/><circle cx="86" cy="68" r="3.8"/>
        <circle cx="100" cy="116" r="3"/><circle cx="92" cy="102" r="3.4"/><circle cx="82" cy="88" r="3.8"/>
        <circle cx="40" cy="116" r="3"/><circle cx="48" cy="102" r="3.4"/><circle cx="58" cy="88" r="3.8"/>
        <circle cx="26" cy="60" r="3"/><circle cx="40" cy="64" r="3.4"/><circle cx="54" cy="68" r="3.8"/>
      </g>
      <circle cx="70" cy="72" r="8" fill="#ff9a5a" stroke="#a83414" stroke-width="2"/>
      <path d="M62 22 C60 32 58 42 54 48" fill="none" stroke="#fff0dc" stroke-width="3" stroke-linecap="round" opacity=".7"/>
    </symbol>
  `);
