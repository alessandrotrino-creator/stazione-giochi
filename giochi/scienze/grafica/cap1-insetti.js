/* Gioco di Scienze · Capitolo 1 · Sfondo: la SALA DEGLI INSETTI (e degli altri artropodi).
   Vetrine entomologiche, libellula gigante appesa, lungo tavolo per i modelli.
   Ritratti, tavola della metamorfosi, cassaforte, modelli e formicaio sono elementi a parte. */
Grafica.definizioni(`
  <linearGradient id="g-parete-ins" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#1e2a1a"/><stop offset=".6" stop-color="#34482a"/><stop offset="1" stop-color="#26361e"/>
  </linearGradient>
  <pattern id="p-carta-ins" width="90" height="90" patternUnits="userSpaceOnUse">
    <g fill="none" stroke="#4a6a3a" stroke-width="2" opacity=".5">
      <path d="M45 30 q-10 -10 -16 0 q6 8 16 2 q10 6 16 -2 q-6 -10 -16 0 Z"/><path d="M45 32 L45 50"/>
      <circle cx="10" cy="80" r="3"/><circle cx="80" cy="10" r="3"/>
    </g>
  </pattern>
  <symbol id="cassetto-insetti" viewBox="0 0 120 80">
    <rect x="2" y="2" width="116" height="76" rx="3" fill="#e8dcc0" stroke="#3e2416" stroke-width="4"/>
    <g stroke="#1d1428" stroke-width="1.5">
      <ellipse cx="24" cy="24" rx="8" ry="11" fill="#2a6a3a"/><path d="M24 13 L24 35 M16 18 L10 12 M32 18 L38 12 M16 30 L10 36 M32 30 L38 36" />
      <ellipse cx="60" cy="24" rx="7" ry="10" fill="#8a2a1a"/><path d="M60 14 L60 34"/>
      <ellipse cx="96" cy="24" rx="9" ry="12" fill="#2a3a8a"/><path d="M96 12 L96 36"/>
      <path d="M24 56 q-10 -8 -14 2 q4 8 14 2 q10 6 14 -2 q-4 -10 -14 -2 Z" fill="#d88a2a"/>
      <path d="M60 56 q-10 -8 -14 2 q4 8 14 2 q10 6 14 -2 q-4 -10 -14 -2 Z" fill="#3a8ad8"/>
      <ellipse cx="96" cy="58" rx="6" ry="12" fill="#5a5a2a"/>
    </g>
    <rect x="2" y="2" width="116" height="76" rx="3" fill="url(#g-vetro)"/>
  </symbol>
`);

Grafica.sfondo("sala-insetti", `
  <rect width="1600" height="600" fill="url(#g-parete-ins)"/>
  <rect width="1600" height="600" fill="url(#p-carta-ins)"/>
  <ellipse cx="800" cy="420" rx="520" ry="300" fill="url(#g-luce-ambra)" opacity=".35"/>
  <!-- cornicione -->
  <rect width="1600" height="70" fill="#121a10"/><rect y="70" width="1600" height="12" fill="#4a5a2a"/><rect y="80" width="1600" height="4" fill="#8a9a4a" opacity=".5"/>
  <!-- grande mobile a cassetti con gli insetti, lungo la parete di fondo -->
  <g>
    <rect x="460" y="110" width="680" height="300" rx="6" fill="url(#g-legno)" stroke="#1d1428" stroke-width="5"/>
    <rect x="460" y="110" width="680" height="300" filter="url(#venatura)" opacity=".5"/>
    <g id="riga-cassetti">
      <use href="#cassetto-insetti" x="482" y="128" width="120" height="80"/><use href="#cassetto-insetti" x="612" y="128" width="120" height="80"/>
      <use href="#cassetto-insetti" x="742" y="128" width="120" height="80"/><use href="#cassetto-insetti" x="872" y="128" width="120" height="80"/>
      <use href="#cassetto-insetti" x="1002" y="128" width="120" height="80"/>
    </g>
    <use href="#riga-cassetti" y="94"/>
    <rect x="470" y="320" width="660" height="80" fill="#3e2416"/>
    <g fill="url(#g-ottone)" stroke="#1d1428" stroke-width="2"><circle cx="560" cy="360" r="7"/><circle cx="800" cy="360" r="7"/><circle cx="1040" cy="360" r="7"/></g>
  </g>
  <!-- libellula gigante appesa (modello) -->
  <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round">
    <path d="M700 82 L720 120 M900 82 L880 120" stroke-width="1.5" stroke="#8a8aa8"/>
    <path d="M640 118 Q700 96 790 122 Q700 136 640 118 Z M640 146 Q700 160 790 128 Q700 128 640 146 Z" fill="#9fd7ff" fill-opacity=".45"/>
    <path d="M960 118 Q900 96 810 122 Q900 136 960 118 Z M960 146 Q900 160 810 128 Q900 128 960 146 Z" fill="#9fd7ff" fill-opacity=".45"/>
    <rect x="788" y="112" width="24" height="30" rx="10" fill="#2a8a6a"/>
    <path d="M800 142 L800 236" stroke="#1d1428" stroke-width="12" stroke-linecap="round"/><path d="M800 142 L800 236" stroke="#3ab88a" stroke-width="7" stroke-linecap="round"/>
    <circle cx="792" cy="108" r="8" fill="#5ad8a8"/><circle cx="808" cy="108" r="8" fill="#5ad8a8"/>
  </g>
  <!-- zoccolatura -->
  <rect y="520" width="1600" height="80" fill="url(#g-legno-scuro)"/>
  <rect y="514" width="1600" height="10" fill="#5a3622"/>
  <!-- pavimento -->
  <g id="pavimento"></g>
  <!-- lungo tavolo per i modelli degli artropodi (a destra) -->
  <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <ellipse cx="1250" cy="648" rx="260" ry="16" fill="#000" opacity=".45" stroke="none" filter="url(#sfoca)"/>
    <rect x="1030" y="540" width="460" height="22" rx="3" fill="url(#g-legno)"/>
    <rect x="1050" y="562" width="18" height="82" fill="url(#g-legno)"/><rect x="1452" y="562" width="18" height="82" fill="url(#g-legno)"/>
  </g>
  <!-- tavolino per il formicaio (a sinistra) -->
  <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <ellipse cx="240" cy="648" rx="150" ry="14" fill="#000" opacity=".45" stroke="none" filter="url(#sfoca)"/>
    <rect x="110" y="590" width="260" height="20" rx="3" fill="url(#g-legno)"/>
    <rect x="126" y="610" width="16" height="36" fill="url(#g-legno)"/><rect x="338" y="610" width="16" height="36" fill="url(#g-legno)"/>
  </g>
  <g id="polvere" fill="#fff6d8"></g>
  <rect width="1600" height="900" fill="url(#g-vignetta)"/>
  <rect width="1600" height="900" filter="url(#grana)" opacity=".07" style="mix-blend-mode:overlay"/>
`, function (svg) {
  Grafica.pavimentoListoni(svg.querySelector("#pavimento"), { fuga: { x: 800, y: 260 }, alto: 600, basso: 900, colori: ["#4a3a2a", "#433426", "#4e3e2e", "#3e3022"] });
  Grafica.polvere(svg.querySelector("#polvere"), { x: 400, y: 200, larghezza: 800, altezza: 360, quanti: 30 });
});

/* modelli degli artropodi, formicaio di vetro, cassaforte, tavola della metamorfosi */
Grafica.definizioni(`
  <symbol id="mod-formica" viewBox="0 0 120 80"><g stroke="#1d1428" stroke-width="2.5" stroke-linejoin="round">
    <path d="M30 50 L14 30 M30 50 L10 52 M30 50 L16 70 M60 50 L56 26 M60 50 L60 74 M60 50 L76 28 M60 50 L78 72 M86 46 L104 28 M86 46 L104 66" stroke="#2a1a1a" stroke-width="3" fill="none"/>
    <ellipse cx="30" cy="46" rx="16" ry="12" fill="#5a2a1a"/><ellipse cx="62" cy="46" rx="12" ry="9" fill="#5a2a1a"/><circle cx="88" cy="42" r="11" fill="#5a2a1a"/>
    <path d="M94 34 Q104 16 112 14 M90 32 Q96 14 102 8" fill="none" stroke-width="2"/><circle cx="92" cy="40" r="2.5" fill="#fff"/></g></symbol>
  <symbol id="mod-ragno" viewBox="0 0 120 80"><g stroke="#1d1428" stroke-width="2.5" stroke-linejoin="round" fill="none">
    <path d="M52 40 Q30 16 10 20 M52 42 Q26 30 6 38 M52 44 Q26 52 8 62 M52 46 Q32 66 16 76 M68 40 Q90 16 110 20 M68 42 Q94 30 114 38 M68 44 Q94 52 112 62 M68 46 Q88 66 104 76" stroke="#2a2a2a" stroke-width="3"/>
    <ellipse cx="60" cy="50" rx="16" ry="14" fill="#3a3a3a"/><circle cx="60" cy="32" r="10" fill="#3a3a3a"/>
    <circle cx="56" cy="30" r="2" fill="#fff" stroke="none"/><circle cx="64" cy="30" r="2" fill="#fff" stroke="none"/></g></symbol>
  <symbol id="mod-granchio" viewBox="0 0 120 80"><g stroke="#1d1428" stroke-width="2.5" stroke-linejoin="round">
    <path d="M40 50 L18 60 L10 72 M42 54 L24 70 M46 56 L34 76 M80 50 L102 60 L110 72 M78 54 L96 70 M74 56 L86 76 M40 46 L20 52 M80 46 L100 52" fill="none" stroke="#a8281e" stroke-width="3.5"/>
    <ellipse cx="60" cy="46" rx="26" ry="18" fill="#e8402f"/>
    <path d="M36 38 Q20 20 30 10 Q40 12 38 22 Q46 22 44 32 Z M84 38 Q100 20 90 10 Q80 12 82 22 Q74 22 76 32 Z" fill="#e8402f"/>
    <path d="M52 30 L50 20 M68 30 L70 20" stroke-width="2.5"/><circle cx="50" cy="18" r="4" fill="#fff"/><circle cx="70" cy="18" r="4" fill="#fff"/></g></symbol>
  <symbol id="mod-millepiedi" viewBox="0 0 120 80"><g stroke="#1d1428" stroke-width="2" stroke-linejoin="round">
    <path d="M10 44 Q40 30 60 44 T112 40" fill="none" stroke="#1d1428" stroke-width="16" stroke-linecap="round"/>
    <path d="M10 44 Q40 30 60 44 T112 40" fill="none" stroke="#8a5a2a" stroke-width="11" stroke-linecap="round"/>
    <path d="M18 40 l-2 14 M26 37 l-2 14 M34 36 l0 14 M42 37 l2 14 M50 39 l2 14 M58 42 l2 14 M66 45 l2 13 M74 46 l2 13 M82 45 l2 13 M90 43 l2 13 M98 41 l2 13 M106 40 l2 13 M18 40 l-2 -12 M34 36 l0 -12 M50 39 l2 -12 M66 45 l2 -12 M82 45 l2 -12 M98 41 l2 -12" stroke="#5a3a1a" stroke-width="2"/>
    <circle cx="112" cy="40" r="6" fill="#8a5a2a"/></g></symbol>
  <symbol id="formicaio" viewBox="0 0 240 150"><g stroke="#1d1428" stroke-width="3" stroke-linejoin="round">
    <rect x="10" y="10" width="220" height="132" rx="6" fill="#c8a06a"/>
    <path d="M30 120 Q60 80 100 100 Q140 120 160 70 Q180 40 210 60" fill="none" stroke="#5a3a1a" stroke-width="10" opacity=".6"/>
    <ellipse cx="60" cy="110" rx="18" ry="10" fill="#7a5a2a"/><ellipse cx="170" cy="62" rx="20" ry="10" fill="#7a5a2a"/>
    <g fill="#f6efe0" stroke-width="1"><ellipse cx="164" cy="62" rx="4" ry="2.5"/><ellipse cx="174" cy="60" rx="4" ry="2.5"/><ellipse cx="170" cy="66" rx="4" ry="2.5"/></g>
    <rect x="10" y="10" width="220" height="132" rx="6" fill="url(#g-vetro)"/>
    <rect x="4" y="138" width="232" height="10" rx="3" fill="url(#g-legno)"/></g></symbol>
  <symbol id="cassaforte" viewBox="0 0 180 170"><g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <rect x="8" y="8" width="164" height="150" rx="10" fill="#3a4a5a"/>
    <rect x="22" y="22" width="136" height="122" rx="6" fill="#4a5a6a"/>
    <g fill="url(#g-ottone)" stroke-width="2.5"><circle cx="58" cy="62" r="18"/><circle cx="122" cy="62" r="18"/><circle cx="58" cy="110" r="18"/><circle cx="122" cy="110" r="18"/></g>
    <rect x="8" y="154" width="24" height="12" fill="#2a3a4a"/><rect x="148" y="154" width="24" height="12" fill="#2a3a4a"/>
    <path d="M30 30 L60 30" stroke="#8aa0b8" stroke-width="3" opacity=".7"/></g></symbol>
`);
