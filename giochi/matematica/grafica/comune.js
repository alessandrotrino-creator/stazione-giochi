/* Gioco di Matematica: grafica comune (dalla prova di stile approvata, prove-stile/matematica.html).
   Sfumature e filtri, oggetti, e lo sfondo dell'atrio del condominio con Ottone, l'ascensore del tempo. */
Grafica.definizioni(`
<filter id="grana" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency=".85" numOctaves="2" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/>
    </filter>
    <filter id="venatura-marmo" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="turbulence" baseFrequency=".008 .03" numOctaves="4" seed="9"/>
      <feColorMatrix type="matrix" values="0 0 0 0 .35  0 0 0 0 .3  0 0 0 0 .22  0 0 0 2.2 -1.25"/>
    </filter>
    <filter id="sfoca-forte"><feGaussianBlur stdDeviation="18"/></filter>
    <filter id="sfoca"><feGaussianBlur stdDeviation="6"/></filter>

    <!-- carta da parati art déco: ventagli dorati -->
    <pattern id="p-deco" width="120" height="90" patternUnits="userSpaceOnUse">
      <g fill="none" stroke="#3f8a80" stroke-width="2" opacity=".45">
        <path d="M0 90 A60 60 0 0 1 120 90"/><path d="M15 90 A45 45 0 0 1 105 90"/><path d="M30 90 A30 30 0 0 1 90 90"/>
        <path d="M60 90 L60 30 M60 90 L28 40 M60 90 L92 40"/>
      </g>
    </pattern>

    <linearGradient id="g-parete" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0d2e2e"/><stop offset=".55" stop-color="#1f5c58"/><stop offset="1" stop-color="#174642"/>
    </linearGradient>
    <linearGradient id="g-zoccolo" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#123836"/><stop offset="1" stop-color="#0a2422"/>
    </linearGradient>
    <linearGradient id="g-ottone" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#6e4a16"/><stop offset=".3" stop-color="#f3c45a"/><stop offset=".55" stop-color="#c8922e"/><stop offset="1" stop-color="#5a3a10"/>
    </linearGradient>
    <linearGradient id="g-ottone-v" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#f6d27a"/><stop offset=".5" stop-color="#c8922e"/><stop offset="1" stop-color="#6e4a16"/>
    </linearGradient>
    <linearGradient id="g-oro" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#fff2a8"/><stop offset=".45" stop-color="#ffc93c"/><stop offset="1" stop-color="#b8700c"/>
    </linearGradient>
    <radialGradient id="g-cabina" cx="50%" cy="35%" r="75%">
      <stop offset="0" stop-color="#ffe0a0"/><stop offset=".45" stop-color="#b8743a"/><stop offset="1" stop-color="#2b1a0c"/>
    </radialGradient>
    <radialGradient id="g-quadrante" cx="50%" cy="100%" r="100%">
      <stop offset="0" stop-color="#fffaf0"/><stop offset="1" stop-color="#e6d2a4"/>
    </radialGradient>
    <radialGradient id="g-luce-calda" cx="50%" cy="50%" r="50%">
      <stop offset="0" stop-color="#ffdc8a" stop-opacity=".55"/><stop offset=".5" stop-color="#ffb347" stop-opacity=".18"/><stop offset="1" stop-color="#ffb347" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="g-vignetta" cx="50%" cy="55%" r="78%">
      <stop offset=".5" stop-color="#020a0a" stop-opacity="0"/><stop offset="1" stop-color="#020a0a" stop-opacity=".75"/>
    </radialGradient>
    <linearGradient id="g-legno" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#3a2212"/><stop offset=".5" stop-color="#7a4a2a"/><stop offset="1" stop-color="#2e1a0e"/>
    </linearGradient>
    <linearGradient id="g-ferro" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#0a0a10"/><stop offset=".5" stop-color="#3a3a4a"/><stop offset="1" stop-color="#0a0a10"/>
    </linearGradient>
    <linearGradient id="g-vaso" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#6a2a1a"/><stop offset=".4" stop-color="#d0704a"/><stop offset="1" stop-color="#5a2216"/>
    </linearGradient>

    <!-- vestiti e pelle di Leo -->
    <linearGradient id="g-pelle-l" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#b07a52"/><stop offset=".55" stop-color="#e0b38a"/><stop offset="1" stop-color="#f4cca4"/>
    </linearGradient>
    <linearGradient id="g-felpa" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#9a6a14"/><stop offset=".6" stop-color="#e2ab36"/><stop offset="1" stop-color="#f8cc62"/>
    </linearGradient>
    <linearGradient id="g-pantaloni" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#22242e"/><stop offset=".6" stop-color="#3c4050"/><stop offset="1" stop-color="#5a6074"/>
    </linearGradient>
    <linearGradient id="g-sciarpa" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#14706a"/><stop offset="1" stop-color="#3cc8b6"/>
    </linearGradient>

    <!-- ============ LEO, 17 anni ============
         origine ai piedi, guarda a destra; luce calda dall'ascensore (destra) -->
    <symbol id="leo" viewBox="-110 -660 240 675" overflow="visible">
      <ellipse cx="10" cy="0" rx="72" ry="11" fill="#000" opacity=".4"/>
      <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
        <!-- sciarpa lunghissima dietro -->
        <path d="M-14 -498 C-60 -470 -76 -400 -78 -320 C-80 -260 -70 -210 -58 -170 L-36 -176 C-48 -220 -54 -270 -52 -320 C-50 -390 -36 -450 6 -486 Z" fill="url(#g-sciarpa)"/>
        <path d="M-77 -300 L-52 -302 M-76 -270 L-52 -272 M-70 -214 L-46 -218" stroke="#f0e6c8" stroke-width="7"/>
        <path d="M-60 -172 l-6 16 M-52 -174 l-2 18 M-44 -176 l2 16" stroke-width="3"/>
        <!-- gambe lunghe -->
        <path d="M-30 -334 C-34 -250 -36 -170 -34 -110 C-33 -70 -31 -42 -29 -24 L-8 -24 C-8 -62 -6 -112 -6 -160 C-4 -230 -2 -290 0 -330 Z" fill="url(#g-pantaloni)"/>
        <path d="M2 -330 C6 -270 12 -210 18 -160 C22 -112 26 -66 30 -24 L52 -24 C50 -66 46 -112 44 -160 C42 -226 40 -286 40 -334 Z" fill="url(#g-pantaloni)"/>
        <path d="M22 -190 Q32 -180 42 -188" fill="none" stroke="#14141c" stroke-width="2" opacity=".7"/>
        <!-- scarpe da ginnastica -->
        <path d="M-36 -28 L-6 -28 L-4 -8 Q-4 0 -12 0 L-50 0 Q-54 -12 -36 -28 Z" fill="#eeeeee"/>
        <path d="M28 -28 L54 -28 Q58 -14 74 -10 Q84 -4 80 0 L26 0 Z" fill="#f6f6f6"/>
        <path d="M-50 -4 L-4 -4 M26 -4 L80 -4" stroke="#2bb3a3" stroke-width="5"/>
        <path d="M34 -22 L48 -20 M36 -16 L50 -14" stroke-width="2"/>
        <!-- felpa con cappuccio -->
        <path d="M-40 -504 C-48 -440 -44 -380 -40 -320 Q0 -306 46 -320 C48 -380 52 -440 48 -504 Z" fill="url(#g-felpa)"/>
        <path d="M-24 -390 Q4 -380 30 -390 L28 -348 Q4 -340 -22 -348 Z" fill="#c08a20" stroke-width="2.5"/>
        <path d="M-40 -330 Q0 -318 46 -330" fill="none" stroke="#8a5a10" stroke-width="5"/>
        <path d="M-4 -496 L-6 -440 M14 -496 L16 -444" stroke="#f0e6c8" stroke-width="2.5"/>
        <!-- braccio dietro lungo il fianco -->
        <path d="M-40 -494 C-54 -450 -58 -400 -54 -350 C-52 -330 -50 -318 -48 -306" fill="none" stroke="#1d1428" stroke-width="28"/>
        <path d="M-40 -494 C-54 -450 -58 -400 -54 -350 C-52 -330 -50 -318 -48 -306" fill="none" stroke="#a8761c" stroke-width="22"/>
        <ellipse cx="-48" cy="-298" rx="10" ry="12" fill="url(#g-pelle-l)"/>
        <!-- collo, testa, capelli -->
        <path d="M-2 -536 L-4 -504 L18 -504 L16 -536 Z" fill="#c08e66"/>
        <path d="M-24 -590 C-26 -556 -20 -536 0 -528 C14 -524 30 -532 36 -552 C40 -568 40 -588 34 -604 C24 -620 -16 -620 -24 -590 Z" fill="url(#g-pelle-l)"/>
        <path d="M-20 -574 Q-30 -578 -28 -564 Q-26 -554 -18 -558" fill="#c8946a"/>
        <path d="M-32 -578 C-44 -610 -30 -642 -6 -646 C4 -660 30 -654 36 -636 C52 -630 54 -606 44 -590 C40 -606 30 -616 14 -612 C4 -608 -4 -616 -14 -606 C-20 -598 -24 -588 -26 -576 Z" fill="#3a2416"/>
        <path d="M-6 -646 L-14 -664 L2 -650 M18 -650 L22 -668 L28 -648 M40 -630 L56 -640 L46 -622" fill="#3a2416"/>
        <path d="M6 -638 Q-6 -628 -12 -612 M24 -636 Q16 -626 14 -612" fill="none" stroke="#6a4a30" stroke-width="2.5"/>
        <!-- viso: guarda l'orologio, in alto a destra -->
        <path d="M-4 -576 Q7 -588 18 -576 Q7 -567 -4 -576 Z" fill="#fff" stroke-width="2"/>
        <path d="M21 -575 Q29 -585 37 -575 Q29 -567 21 -575 Z" fill="#fff" stroke-width="2"/>
        <circle cx="12" cy="-578" r="5" fill="#3a6a8a" stroke="none"/>
        <circle cx="32" cy="-577" r="4.4" fill="#3a6a8a" stroke="none"/>
        <circle cx="12.5" cy="-578.5" r="2.4" fill="#0a1018" stroke="none"/>
        <circle cx="32.5" cy="-577.5" r="2.1" fill="#0a1018" stroke="none"/>
        <circle cx="14" cy="-580.5" r="1.5" fill="#fff" stroke="none"/>
        <path d="M-5 -577 Q7 -590 19 -577 M20 -576 Q29 -587 38 -575" fill="none" stroke-width="3.5"/>
        <path d="M-5 -592 Q5 -601 16 -598 M22 -599 Q30 -603 39 -596" fill="none" stroke="#3a2416" stroke-width="4"/>
        <path d="M27 -568 Q36 -554 28 -550 Q23 -549 20 -552" fill="none" stroke="#a06a44" stroke-width="3"/>
        <path d="M12 -540 Q20 -545 30 -540" fill="none" stroke="#7a3a30" stroke-width="3"/>
        <path d="M-22 -590 C-24 -560 -18 -540 0 -528 C-8 -544 -12 -566 -10 -590 Z" fill="#7a4a2e" opacity=".3" stroke="none"/>
        <!-- sciarpa davanti -->
        <path d="M-30 -518 Q4 -500 42 -520 L44 -496 Q4 -478 -32 -494 Z" fill="url(#g-sciarpa)"/>
        <path d="M-10 -506 L-12 -488 M20 -508 L20 -490" stroke="#f0e6c8" stroke-width="6"/>
        <!-- braccio alzato con l'orologio rotto -->
        <path d="M44 -498 C70 -478 86 -456 84 -430 C82 -420 80 -440 76 -470 C74 -490 74 -520 76 -548" fill="none" stroke="#1d1428" stroke-width="28"/>
        <path d="M44 -498 C70 -478 86 -456 84 -430 C82 -420 80 -440 76 -470 C74 -490 74 -520 76 -548" fill="none" stroke="#e2ab36" stroke-width="22"/>
        <path d="M60 -486 C76 -470 84 -452 84 -436" fill="none" stroke="#ffe08a" stroke-width="5" opacity=".7"/>
        <ellipse cx="76" cy="-560" rx="11" ry="13" fill="url(#g-pelle-l)"/>
        <rect x="64" y="-552" width="26" height="18" rx="5" fill="#f6ecd0" stroke-width="3"/>
        <circle cx="77" cy="-543" r="6" fill="#fffaf0" stroke-width="2"/>
        <path d="M77 -543 L77 -547 M77 -543 L80 -541" stroke-width="1.5"/>
        <path d="M92 -548 q12 -6 6 -14 q-8 -8 4 -14 q12 -6 4 -14" fill="none" stroke="#c8922e" stroke-width="2.5"/>
        <circle cx="104" cy="-596" r="3" fill="#c8922e" stroke-width="1.5"/>
        <!-- luce calda sul fianco destro -->
        <path d="M48 -500 C52 -440 48 -380 46 -324 M44 -160 C46 -110 50 -66 52 -26" fill="none" stroke="#ffdc8a" stroke-width="3" opacity=".6"/>
      </g>
    </symbol>

    <!-- ============ OGGETTI ============ -->
    <symbol id="ogg-virgola" viewBox="0 0 140 140">
      <circle cx="70" cy="66" r="54" fill="url(#g-luce-calda)"/>
      <ellipse cx="68" cy="126" rx="30" ry="5" fill="#000" opacity=".25"/>
      <path d="M72 22 Q106 22 106 56 Q106 98 52 122 L44 112 Q70 98 72 84 Q38 86 38 56 Q38 22 72 22 Z" fill="url(#g-oro)" stroke="#1d1428" stroke-width="3.5" stroke-linejoin="round"/>
      <path d="M72 30 Q98 30 98 56 Q98 80 80 92" fill="none" stroke="#b8700c" stroke-width="3" opacity=".6"/>
      <path d="M56 34 Q64 28 76 30" fill="none" stroke="#fffbe0" stroke-width="5" stroke-linecap="round"/>
      <circle cx="58" cy="48" r="4" fill="#fffbe0" opacity=".9"/>
      <g fill="#fff8c8" stroke="#1d1428" stroke-width="2">
        <path d="M114 20 l3 9 9 3 -9 3 -3 9 -3 -9 -9 -3 9 -3 z"/>
        <path d="M24 96 l2 6 6 2 -6 2 -2 6 -2 -6 -6 -2 6 -2 z"/>
      </g>
    </symbol>

    <symbol id="ogg-astrolabio" viewBox="0 0 140 140">
      <ellipse cx="70" cy="130" rx="40" ry="5" fill="#000" opacity=".25"/>
      <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
        <circle cx="70" cy="14" r="8" fill="none" stroke-width="5"/>
        <circle cx="70" cy="14" r="8" fill="none" stroke="#f3c45a" stroke-width="2"/>
        <path d="M56 32 Q70 16 84 32 L80 36 L60 36 Z" fill="url(#g-ottone-v)"/>
        <circle cx="70" cy="78" r="50" fill="url(#g-ottone)"/>
        <circle cx="70" cy="78" r="43" fill="none" stroke="#6e4a16" stroke-width="2"/>
        <g stroke="#5a3a10" stroke-width="1.5">
          <path d="M70 28 L70 34 M70 122 L70 128 M20 78 L26 78 M114 78 L120 78 M35 43 L39 47 M101 109 L105 113 M105 43 L101 47 M39 109 L35 113"/>
        </g>
        <circle cx="70" cy="78" r="38" fill="#1f4f7a"/>
        <path d="M32 78 A38 38 0 0 1 108 78" fill="#2c6a9a" stroke="none" opacity=".6"/>
        <g fill="none" stroke="#f3c45a" stroke-width="2.5">
          <circle cx="70" cy="86" r="24"/>
          <path d="M70 40 Q96 62 82 110 M70 40 Q44 62 58 110"/>
        </g>
        <g fill="#fff6c8" stroke="none"><circle cx="54" cy="62" r="2"/><circle cx="88" cy="70" r="2.4"/><circle cx="62" cy="98" r="1.8"/><circle cx="92" cy="96" r="1.6"/></g>
        <path d="M32 112 L108 44" stroke-width="8"/>
        <path d="M32 112 L108 44" stroke="#f3c45a" stroke-width="4"/>
        <circle cx="70" cy="78" r="6" fill="url(#g-ottone-v)"/>
        <path d="M34 56 A44 44 0 0 1 60 32" fill="none" stroke="#fff2a8" stroke-width="4" opacity=".8"/>
      </g>
    </symbol>

    <symbol id="ogg-ingranaggio" viewBox="0 0 140 140">
      <ellipse cx="70" cy="128" rx="44" ry="5" fill="#000" opacity=".25"/>
      <path id="profilo-ingranaggio" fill="url(#g-ottone)" stroke="#1d1428" stroke-width="3.5" stroke-linejoin="round"/>
      <circle cx="70" cy="70" r="36" fill="none" stroke="#6e4a16" stroke-width="3"/>
      <g fill="#5a3a10" stroke="#1d1428" stroke-width="2.5">
        <circle cx="70" cy="44" r="7"/><circle cx="96" cy="70" r="7"/><circle cx="70" cy="96" r="7"/><circle cx="44" cy="70" r="7"/>
      </g>
      <circle cx="70" cy="70" r="16" fill="url(#g-ottone-v)" stroke="#1d1428" stroke-width="3"/>
      <circle cx="70" cy="70" r="6" fill="#1d1428"/>
      <path d="M38 46 Q50 30 70 28" fill="none" stroke="#fff2a8" stroke-width="5" stroke-linecap="round" opacity=".8"/>
    </symbol>
<symbol id="ogg-virgola" viewBox="0 0 140 140">
      <circle cx="70" cy="66" r="54" fill="url(#g-luce-calda)"/>
      <ellipse cx="68" cy="126" rx="30" ry="5" fill="#000" opacity=".25"/>
      <path d="M72 22 Q106 22 106 56 Q106 98 52 122 L44 112 Q70 98 72 84 Q38 86 38 56 Q38 22 72 22 Z" fill="url(#g-oro)" stroke="#1d1428" stroke-width="3.5" stroke-linejoin="round"/>
      <path d="M72 30 Q98 30 98 56 Q98 80 80 92" fill="none" stroke="#b8700c" stroke-width="3" opacity=".6"/>
      <path d="M56 34 Q64 28 76 30" fill="none" stroke="#fffbe0" stroke-width="5" stroke-linecap="round"/>
      <circle cx="58" cy="48" r="4" fill="#fffbe0" opacity=".9"/>
      <g fill="#fff8c8" stroke="#1d1428" stroke-width="2">
        <path d="M114 20 l3 9 9 3 -9 3 -3 9 -3 -9 -9 -3 9 -3 z"/>
        <path d="M24 96 l2 6 6 2 -6 2 -2 6 -2 -6 -6 -2 6 -2 z"/>
      </g>
    </symbol>
<symbol id="ogg-astrolabio" viewBox="0 0 140 140">
      <ellipse cx="70" cy="130" rx="40" ry="5" fill="#000" opacity=".25"/>
      <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
        <circle cx="70" cy="14" r="8" fill="none" stroke-width="5"/>
        <circle cx="70" cy="14" r="8" fill="none" stroke="#f3c45a" stroke-width="2"/>
        <path d="M56 32 Q70 16 84 32 L80 36 L60 36 Z" fill="url(#g-ottone-v)"/>
        <circle cx="70" cy="78" r="50" fill="url(#g-ottone)"/>
        <circle cx="70" cy="78" r="43" fill="none" stroke="#6e4a16" stroke-width="2"/>
        <g stroke="#5a3a10" stroke-width="1.5">
          <path d="M70 28 L70 34 M70 122 L70 128 M20 78 L26 78 M114 78 L120 78 M35 43 L39 47 M101 109 L105 113 M105 43 L101 47 M39 109 L35 113"/>
        </g>
        <circle cx="70" cy="78" r="38" fill="#1f4f7a"/>
        <path d="M32 78 A38 38 0 0 1 108 78" fill="#2c6a9a" stroke="none" opacity=".6"/>
        <g fill="none" stroke="#f3c45a" stroke-width="2.5">
          <circle cx="70" cy="86" r="24"/>
          <path d="M70 40 Q96 62 82 110 M70 40 Q44 62 58 110"/>
        </g>
        <g fill="#fff6c8" stroke="none"><circle cx="54" cy="62" r="2"/><circle cx="88" cy="70" r="2.4"/><circle cx="62" cy="98" r="1.8"/><circle cx="92" cy="96" r="1.6"/></g>
        <path d="M32 112 L108 44" stroke-width="8"/>
        <path d="M32 112 L108 44" stroke="#f3c45a" stroke-width="4"/>
        <circle cx="70" cy="78" r="6" fill="url(#g-ottone-v)"/>
        <path d="M34 56 A44 44 0 0 1 60 32" fill="none" stroke="#fff2a8" stroke-width="4" opacity=".8"/>
      </g>
    </symbol>
<symbol id="ogg-ingranaggio" viewBox="0 0 140 140">
      <ellipse cx="70" cy="128" rx="44" ry="5" fill="#000" opacity=".25"/>
      <path id="profilo-ingranaggio" fill="url(#g-ottone)" stroke="#1d1428" stroke-width="3.5" stroke-linejoin="round"/>
      <circle cx="70" cy="70" r="36" fill="none" stroke="#6e4a16" stroke-width="3"/>
      <g fill="#5a3a10" stroke="#1d1428" stroke-width="2.5">
        <circle cx="70" cy="44" r="7"/><circle cx="96" cy="70" r="7"/><circle cx="70" cy="96" r="7"/><circle cx="44" cy="70" r="7"/>
      </g>
      <circle cx="70" cy="70" r="16" fill="url(#g-ottone-v)" stroke="#1d1428" stroke-width="3"/>
      <circle cx="70" cy="70" r="6" fill="#1d1428"/>
      <path d="M38 46 Q50 30 70 28" fill="none" stroke="#fff2a8" stroke-width="5" stroke-linecap="round" opacity=".8"/>
    </symbol>
`);

Grafica.sfondo("condominio", `
<!-- PARETE -->
      <rect width="1600" height="620" fill="url(#g-parete)"/>
      <rect width="1600" height="420" fill="url(#p-deco)"/>
      <ellipse cx="800" cy="420" rx="460" ry="330" fill="url(#g-luce-calda)"/>
      <ellipse cx="300" cy="300" rx="260" ry="260" fill="url(#g-luce-calda)" opacity=".7"/>

      <!-- soffitto e cornice dorata -->
      <rect width="1600" height="54" fill="#071a1a"/>
      <rect y="54" width="1600" height="10" fill="url(#g-ottone-v)"/>
      <rect y="64" width="1600" height="16" fill="#0f3432"/>
      <rect y="80" width="1600" height="4" fill="#d4a23a" opacity=".7"/>

      <!-- lesene con motivo a gradini -->
      <g id="lesena">
        <rect x="490" y="84" width="54" height="320" fill="#174642"/>
        <rect x="490" y="84" width="10" height="320" fill="#2a6a64"/>
        <rect x="534" y="84" width="10" height="320" fill="#0c2a28"/>
        <path d="M482 404 L552 404 L546 392 L488 392 Z M486 92 L548 92 L544 84 L490 84 Z" fill="url(#g-ottone-v)"/>
        <path d="M517 120 L517 380" stroke="#d4a23a" stroke-width="2" opacity=".6"/>
      </g>
      <use href="#lesena" x="566"/>

      <!-- zoccolatura -->
      <rect y="404" width="1600" height="216" fill="url(#g-zoccolo)"/>
      <rect y="404" width="1600" height="216" filter="url(#venatura-marmo)" opacity=".5"/>
      <rect y="398" width="1600" height="10" fill="url(#g-ottone-v)"/>
      <rect y="412" width="1600" height="2" fill="#d4a23a" opacity=".6"/>
      <g fill="none" stroke="#071a1a" stroke-width="3">
        <g id="riquadro"><rect x="30" y="434" width="160" height="160" rx="4"/><path d="M110 444 L110 584 M40 514 L180 514" stroke="#d4a23a" stroke-width="1.5" opacity=".35"/></g>
        <use href="#riquadro" x="190"/><use href="#riquadro" x="1210"/><use href="#riquadro" x="1400"/>
      </g>

      <!-- LAMPADARIO art déco con cono di luce -->
      <path d="M300 84 L300 140" stroke="#1d1428" stroke-width="4"/>
      <path d="M246 140 L354 140 L338 186 L262 186 Z" fill="url(#g-ottone)" stroke="#1d1428" stroke-width="3"/>
      <path d="M262 186 L338 186 L322 214 L278 214 Z" fill="#fff0b8" stroke="#1d1428" stroke-width="3"/>
      <path d="M256 152 L344 152" stroke="#fff2a8" stroke-width="2" opacity=".7"/>
      <path d="M278 214 L322 214 L470 620 L130 620 Z" fill="#fff0b8" opacity=".08" filter="url(#sfoca)"/>

      <!-- CASSETTE DELLA POSTA -->
      <rect x="84" y="244" width="252" height="128" rx="4" fill="url(#g-legno)" stroke="#1d1428" stroke-width="3"/>
      <g id="cassetta">
        <rect x="94" y="254" width="74" height="52" rx="3" fill="url(#g-ottone)" stroke="#1d1428" stroke-width="3"/>
        <rect x="106" y="266" width="50" height="7" rx="2" fill="#2a1a0a"/>
        <circle cx="131" cy="292" r="4" fill="#5a3a10" stroke="#1d1428" stroke-width="1.5"/>
      </g>
      <use href="#cassetta" x="80"/><use href="#cassetta" x="160"/>
      <use href="#cassetta" y="56"/><use href="#cassetta" x="80" y="56"/><use href="#cassetta" x="160" y="56"/>
      <!-- una busta che spunta -->
      <path d="M212 318 L246 312 L250 330 L216 336 Z" fill="#f6efe0" stroke="#1d1428" stroke-width="2"/>
      <path d="M212 318 L232 326 L246 312" fill="none" stroke="#1d1428" stroke-width="1.5"/>

      <!-- BACHECA: il prezzo ha perso la virgola (testo sovrapposto, traducibile) -->
      <g transform="rotate(-3 420 180)">
        <rect x="350" y="112" width="140" height="120" rx="4" fill="#9a6a44" stroke="#1d1428" stroke-width="3"/>
        <rect x="350" y="112" width="140" height="120" rx="4" filter="url(#grana)" opacity=".25"/>
        <rect x="364" y="126" width="112" height="92" fill="#fff8e6" stroke="#1d1428" stroke-width="2"/>
        <circle cx="420" cy="126" r="6" fill="#d84a3a" stroke="#1d1428" stroke-width="2"/>
        <circle cx="414" cy="198" r="8" fill="none" stroke="#d84a3a" stroke-width="2.5" stroke-dasharray="3 3"/>
      </g>

      <!-- ============ OTTONE, l'ascensore del tempo ============ -->
      <g id="ottone" stroke="#1d1428" stroke-linejoin="round" stroke-linecap="round">
        <ellipse cx="820" cy="624" rx="230" ry="16" fill="#000" opacity=".45" stroke="none" filter="url(#sfoca)"/>
        <!-- cornice -->
        <rect x="620" y="196" width="400" height="424" rx="6" fill="url(#g-ottone)" stroke-width="4"/>
        <path d="M640 210 L640 610 M1000 210 L1000 610" stroke="#fff2a8" stroke-width="2" opacity=".6"/>
        <rect x="604" y="600" width="432" height="22" rx="3" fill="url(#g-ottone-v)" stroke-width="3"/>
        <!-- cabina illuminata con specchio e corrimano -->
        <rect x="660" y="250" width="320" height="352" fill="url(#g-cabina)" stroke-width="4"/>
        <rect x="740" y="290" width="160" height="200" rx="4" fill="#d8c09a" opacity=".35" stroke="#5a3a1a" stroke-width="3"/>
        <path d="M680 430 L960 430" stroke="#5a3a1a" stroke-width="8"/>
        <path d="M680 430 L960 430" stroke="#f3c45a" stroke-width="3"/>
        <path d="M660 560 L980 560" stroke="#3a2210" stroke-width="3" opacity=".6"/>
        <!-- cancello a pantografo, con ombra -->
        <g fill="none">
          <g stroke="#2a1a08" stroke-width="9" opacity=".5" transform="translate(6 6)">
            <path d="M660 262 L740 590 M740 262 L820 590 M820 262 L900 590 M900 262 L980 590 M740 262 L660 590 M820 262 L740 590 M900 262 L820 590 M980 262 L900 590"/>
          </g>
          <g stroke="#1d1428" stroke-width="9">
            <path d="M660 262 L740 590 M740 262 L820 590 M820 262 L900 590 M900 262 L980 590 M740 262 L660 590 M820 262 L740 590 M900 262 L820 590 M980 262 L900 590"/>
          </g>
          <g stroke="url(#g-ottone-v)" stroke-width="5">
            <path d="M660 262 L740 590 M740 262 L820 590 M820 262 L900 590 M900 262 L980 590 M740 262 L660 590 M820 262 L740 590 M900 262 L820 590 M980 262 L900 590"/>
          </g>
          <g fill="#f3c45a" stroke-width="2">
            <circle cx="700" cy="426" r="5"/><circle cx="780" cy="426" r="5"/><circle cx="860" cy="426" r="5"/><circle cx="940" cy="426" r="5"/>
          </g>
        </g>
        <path d="M656 256 L984 256 M656 596 L984 596" stroke-width="7"/>
        <path d="M656 256 L984 256 M656 596 L984 596" stroke="#f3c45a" stroke-width="3"/>
        <!-- fregio art déco sopra la porta -->
        <path d="M640 196 L1000 196 L960 168 L680 168 Z" fill="url(#g-ottone-v)" stroke-width="3"/>
        <path d="M700 176 L940 176" stroke="#6e4a16" stroke-width="2"/>
        <!-- QUADRANTE-FACCIA -->
        <path d="M670 168 A150 150 0 0 1 970 168 Z" fill="url(#g-ottone)" stroke-width="4"/>
        <path d="M696 168 A124 124 0 0 1 944 168 Z" fill="url(#g-quadrante)" stroke-width="3"/>
        <g stroke-width="3">
          <path d="M710 156 L724 158 M736 104 L748 112 M786 64 L792 78 M854 64 L848 78 M904 104 L892 112 M930 156 L916 158"/>
        </g>
        <g font-family="Segoe UI, Arial" font-weight="800" font-size="17" fill="#1d1428" stroke="none" text-anchor="middle">
          <text x="740" y="146">952</text><text x="782" y="108">1202</text><text x="858" y="108">1427</text><text x="900" y="146">1600</text>
        </g>
        <!-- occhi con palpebre e sopracciglia preoccupate -->
        <ellipse cx="788" cy="142" rx="20" ry="17" fill="#fff" stroke-width="3"/>
        <ellipse cx="852" cy="142" rx="20" ry="17" fill="#fff" stroke-width="3"/>
        <circle cx="793" cy="145" r="8" fill="#3a2a10" stroke="none"/>
        <circle cx="857" cy="145" r="8" fill="#3a2a10" stroke="none"/>
        <circle cx="796" cy="141" r="3" fill="#fff" stroke="none"/>
        <circle cx="860" cy="141" r="3" fill="#fff" stroke="none"/>
        <path d="M768 136 Q788 124 808 134 M832 134 Q852 124 872 136" fill="#c8922e" stroke-width="3"/>
        <path d="M764 116 L808 126 M876 116 L832 126" stroke-width="6"/>
        <!-- lancetta-baffo -->
        <path d="M820 168 L812 98" stroke="#a8281e" stroke-width="7"/>
        <path d="M820 168 L812 98" stroke="#e8402f" stroke-width="3"/>
        <path d="M790 168 Q806 156 820 164 Q834 156 850 168" fill="#5a3a10" stroke-width="3"/>
        <circle cx="820" cy="166" r="10" fill="url(#g-ottone-v)" stroke-width="3"/>
        <path d="M708 160 A112 112 0 0 1 800 58" fill="none" stroke="#fff" stroke-width="4" opacity=".5"/>
        <!-- pulsantiera -->
        <rect x="1040" y="326" width="62" height="170" rx="10" fill="url(#g-ottone)" stroke-width="3"/>
        <g fill="#fffaf0" stroke-width="2.5">
          <circle cx="1071" cy="360" r="13"/><circle cx="1071" cy="404" r="13"/><circle cx="1071" cy="448" r="13"/>
        </g>
        <circle cx="1071" cy="404" r="7" fill="#ffd36b" stroke="none"/>
        <path d="M1050 336 L1050 486" stroke="#fff2a8" stroke-width="2" opacity=".6"/>
      </g>
      <!-- bollino rosso del Conte Arrotondo -->
      <g transform="rotate(12 1074 296)" stroke="#1d1428" stroke-width="3">
        <circle cx="1074" cy="296" r="24" fill="#e8402f"/>
        <circle cx="1074" cy="296" r="11" fill="none" stroke="#fff8e6" stroke-width="4"/>
        <path d="M1085 302 L1092 316" stroke="#fff8e6" stroke-width="3"/>
        <path d="M1058 284 Q1066 276 1078 276" fill="none" stroke="#ffb0a0" stroke-width="3" opacity=".8"/>
      </g>

      <!-- SCALA con ringhiera in ferro battuto -->
      <g stroke="#1d1428" stroke-linejoin="round">
        <path d="M1140 620 L1140 572 L1210 572 L1210 524 L1280 524 L1280 476 L1350 476 L1350 428 L1420 428 L1420 380 L1490 380 L1490 332 L1560 332 L1560 284 L1630 284 L1630 620 Z" fill="url(#g-legno)" stroke-width="3"/>
        <path d="M1140 572 L1210 572 M1210 524 L1280 524 M1280 476 L1350 476 M1350 428 L1420 428 M1420 380 L1490 380 M1490 332 L1560 332" stroke="#d8a06a" stroke-width="2" opacity=".6"/>
        <path d="M1140 620 L1630 300" fill="none" stroke="#000" stroke-width="40" opacity=".25" stroke-linecap="butt"/>
        <g stroke="url(#g-ferro)" stroke-width="5">
          <path d="M1164 572 L1164 504 M1234 524 L1234 456 M1304 476 L1304 408 M1374 428 L1374 360 M1444 380 L1444 312 M1514 332 L1514 264 M1584 284 L1584 216"/>
        </g>
        <g fill="none" stroke="#2a2a36" stroke-width="3.5">
          <path d="M1186 548 q16 -26 -6 -30 q-14 0 -6 14"/><path d="M1256 500 q16 -26 -6 -30 q-14 0 -6 14"/>
          <path d="M1326 452 q16 -26 -6 -30 q-14 0 -6 14"/><path d="M1396 404 q16 -26 -6 -30 q-14 0 -6 14"/>
          <path d="M1466 356 q16 -26 -6 -30 q-14 0 -6 14"/><path d="M1536 308 q16 -26 -6 -30 q-14 0 -6 14"/>
        </g>
        <path d="M1150 510 Q1360 380 1630 200" fill="none" stroke="#1d1428" stroke-width="14" stroke-linecap="round"/>
        <path d="M1150 510 Q1360 380 1630 200" fill="none" stroke="url(#g-legno)" stroke-width="9" stroke-linecap="round"/>
        <path d="M1150 504 Q1360 374 1630 194" fill="none" stroke="#d8a06a" stroke-width="2" opacity=".7"/>
        <circle cx="1150" cy="510" r="12" fill="url(#g-ottone-v)" stroke-width="3"/>
      </g>

      <!-- PAVIMENTO a mosaico in prospettiva (generato dallo script) -->
      <g id="pavimento"></g>
      <rect y="620" width="1600" height="280" filter="url(#venatura-marmo)" opacity=".35"/>
      <!-- riflesso della cabina sul pavimento lucido -->
      <path d="M660 622 L980 622 L1040 800 L600 800 Z" fill="#ffd890" opacity=".22" filter="url(#sfoca)"/>
      <!-- zerbino -->
      <path d="M690 650 L950 650 L990 720 L650 720 Z" fill="#6a3a22" stroke="#1d1428" stroke-width="3"/>
      <path d="M700 660 L940 660 L974 712 L666 712 Z" fill="none" stroke="#a8683a" stroke-width="3" stroke-dasharray="8 6"/>

      <!-- PALMA IN VASO -->
      <g stroke="#1d1428" stroke-linejoin="round">
        <ellipse cx="1078" cy="624" rx="50" ry="8" fill="#000" opacity=".4" stroke="none"/>
        <path d="M1046 624 L1036 548 L1120 548 L1110 624 Z" fill="url(#g-vaso)" stroke-width="3"/>
        <path d="M1032 540 L1124 540 L1120 554 L1036 554 Z" fill="#a04a2a" stroke-width="3"/>
        <g fill="none" stroke-linecap="round">
          <g stroke="#0e2a16" stroke-width="12">
            <path d="M1078 542 Q1040 470 990 456"/><path d="M1078 542 Q1070 450 1092 400"/><path d="M1078 542 Q1120 470 1170 470"/><path d="M1078 542 Q1040 500 1000 510"/>
          </g>
          <g stroke="#3b9a52" stroke-width="7">
            <path d="M1078 542 Q1040 470 990 456"/><path d="M1078 542 Q1070 450 1092 400"/><path d="M1078 542 Q1120 470 1170 470"/><path d="M1078 542 Q1040 500 1000 510"/>
          </g>
          <g stroke="#7ad08a" stroke-width="2">
            <path d="M1074 530 Q1040 474 996 460"/><path d="M1080 530 Q1074 452 1092 410"/>
          </g>
        </g>
      </g>

      <!-- PRIMO PIANO: portaombrelli con un ombrello -->
      <g stroke="#1d1428" stroke-linejoin="round">
        <ellipse cx="1500" cy="896" rx="80" ry="10" fill="#000" opacity=".5" stroke="none"/>
        <path d="M1520 740 L1560 600 L1580 606 L1546 746 Z" fill="#7a2a3a" stroke-width="3"/>
        <path d="M1560 600 Q1580 580 1596 596" fill="none" stroke="#1d1428" stroke-width="7"/>
        <path d="M1440 740 L1560 740 L1550 900 L1450 900 Z" fill="url(#g-ottone)" stroke-width="3"/>
        <path d="M1440 760 L1560 760 M1446 860 L1554 860" stroke="#6e4a16" stroke-width="4"/>
      </g>

      <!-- PENOMBRA E GRANA PITTORICA -->
      <rect width="1600" height="900" fill="url(#g-vignetta)"/>
      <rect width="1600" height="900" filter="url(#grana)" opacity=".07" style="mix-blend-mode:overlay"/>
`, function (svg) {
  // pavimento a scacchiera di marmo in prospettiva
  var NS = "http://www.w3.org/2000/svg", pav = svg.querySelector("#pavimento"), fuga = { x: 800, y: 260 }, alto = 620, basso = 900, righe = [];
  if (!pav) return;
  for (var k = 0; k <= 10; k++) righe.push(alto + (basso - alto) * Math.pow(k / 10, 1.5));
  function xAt(xb, y) { return fuga.x + (xb - fuga.x) * (y - fuga.y) / (basso - fuga.y); }
  for (var r = 0; r < righe.length - 1; r++) {
    for (var c = -20; c < 20; c++) {
      var b1 = 800 + c * 90, b2 = b1 + 90, y1 = righe[r], y2 = righe[r + 1], p = document.createElementNS(NS, "path");
      p.setAttribute("d", "M" + xAt(b1, y1) + " " + y1 + " L" + xAt(b2, y1) + " " + y1 + " L" + xAt(b2, y2) + " " + y2 + " L" + xAt(b1, y2) + " " + y2 + " Z");
      p.setAttribute("fill", (r + c) % 2 === 0 ? "#c9b994" : "#2f504b");
      p.setAttribute("stroke", "#1d1428"); p.setAttribute("stroke-width", "1.5");
      pav.appendChild(p);
    }
  }
  var ombra = document.createElementNS(NS, "rect");
  ombra.setAttribute("y", alto); ombra.setAttribute("width", 1600); ombra.setAttribute("height", 60); ombra.setAttribute("opacity", ".35");
  pav.appendChild(ombra);
});

/* profilo dell'ingranaggio (12 denti) per l'oggetto "ogg-ingranaggio" */
(function () {
  var p = document.getElementById("profilo-ingranaggio");
  if (!p) return;
  var n = 12, cx = 70, cy = 70, rEst = 58, rInt = 47, d = "";
  for (var i = 0; i < n; i++) {
    var a = (i / n) * Math.PI * 2, passo = Math.PI * 2 / n;
    [[rInt, a - passo * 0.5], [rInt, a - passo * 0.27], [rEst, a - passo * 0.17], [rEst, a + passo * 0.17], [rInt, a + passo * 0.27]].forEach(function (q, k) {
      d += (i === 0 && k === 0 ? "M" : "L") + (cx + q[0] * Math.cos(q[1])).toFixed(1) + " " + (cy + q[0] * Math.sin(q[1])).toFixed(1) + " ";
    });
  }
  p.setAttribute("d", d + "Z");
})();
