/* Gioco di Matematica · terze · Capitolo 1: DELFT, ANNO 1676. La bottega di Antoni van Leeuwenhoek.
   Mercante di stoffe e costruttore di microscopi a una sola lente. Pavimento a scacchi, piastrelle bianche e blu,
   finestra sul canale, pezze di stoffa, banco con i microscopi (piccole piastre d'ottone con la lente),
   un cassetto con la serratura a numeri e il cavalletto della "pittrice". */
Grafica.definizioni(`
  <linearGradient id="df-muro" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#d8cdb4"/><stop offset="1" stop-color="#b8aa8a"/>
  </linearGradient>
  <linearGradient id="df-legno" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#7a4a24"/><stop offset="1" stop-color="#4a2a14"/>
  </linearGradient>
  <linearGradient id="df-cielo" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#9ac0e0"/><stop offset="1" stop-color="#e0ecf4"/>
  </linearGradient>
  <linearGradient id="df-giacca" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#1a1a24"/><stop offset=".55" stop-color="#2e2e40"/><stop offset="1" stop-color="#3a3a4e"/>
  </linearGradient>
  <linearGradient id="df-pelle" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#d0a080"/><stop offset=".55" stop-color="#f0ccae"/><stop offset="1" stop-color="#f8dcc4"/>
  </linearGradient>
  <radialGradient id="df-goccia" cx="45%" cy="40%" r="60%">
    <stop offset="0" stop-color="#e8f8f0"/><stop offset=".7" stop-color="#b8e0d0"/><stop offset="1" stop-color="#7ab8a8"/>
  </radialGradient>

  <!-- ===== ANTONI VAN LEEUWENHOEK (tre quarti; piedi in 0,0) ===== -->
  <symbol id="leeuwenhoek" viewBox="-110 -600 230 615" overflow="visible">
    <ellipse cx="0" cy="0" rx="64" ry="11" fill="#000" opacity=".4"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <!-- calze e scarpe con la fibbia -->
      <path d="M-30 -150 L-28 -20 L-8 -20 L-6 -150 Z M10 -150 L12 -20 L32 -20 L34 -150 Z" fill="#e8e0d0"/>
      <path d="M-42 -22 L-4 -22 L-4 0 L-46 0 Q-50 -12 -42 -22 Z M8 -22 L44 -22 Q54 -10 50 0 L8 0 Z" fill="#1a1a1a"/>
      <rect x="-28" y="-20" width="12" height="8" fill="url(#t8-ottone)" stroke-width="1.5"/><rect x="22" y="-20" width="12" height="8" fill="url(#t8-ottone)" stroke-width="1.5"/>
      <!-- calzoni e giacca lunga scura -->
      <path d="M-36 -300 L-34 -140 L40 -140 L40 -300 Z" fill="#2a2a38"/>
      <path d="M-50 -446 C-62 -380 -66 -300 -64 -170 Q0 -156 66 -170 C66 -300 62 -380 52 -446 Q0 -458 -50 -446 Z" fill="url(#df-giacca)"/>
      <path d="M2 -440 L4 -170" stroke="#5a5a6a" stroke-width="2"/>
      <g fill="url(#t8-ottone)" stroke-width="1.5"><circle cx="12" cy="-400" r="4"/><circle cx="12" cy="-370" r="4"/><circle cx="12" cy="-340" r="4"/><circle cx="12" cy="-310" r="4"/><circle cx="12" cy="-280" r="4"/></g>
      <!-- colletto bianco largo -->
      <path d="M-44 -452 Q0 -420 46 -452 L40 -428 Q0 -404 -38 -428 Z" fill="#f8f6f0"/>
      <!-- braccio con il microscopio d'ottone in mano -->
      <path d="M48 -436 C70 -410 84 -380 84 -350" fill="none" stroke="#1d1428" stroke-width="27"/>
      <path d="M48 -436 C70 -410 84 -380 84 -350" fill="none" stroke="#2e2e40" stroke-width="21"/>
      <ellipse cx="84" cy="-342" rx="10" ry="11" fill="url(#df-pelle)"/>
      <path d="M78 -360 L78 -404 L98 -404 L98 -360 Z" fill="url(#t8-ottone)"/>
      <circle cx="88" cy="-392" r="4" fill="#dff4ff"/><path d="M88 -374 V-356" stroke-width="2"/>
      <path d="M-48 -432 C-64 -400 -66 -360 -58 -320" fill="none" stroke="#1d1428" stroke-width="27"/>
      <path d="M-48 -432 C-64 -400 -66 -360 -58 -320" fill="none" stroke="#2e2e40" stroke-width="21"/>
      <ellipse cx="-56" cy="-312" rx="10" ry="11" fill="url(#df-pelle)"/>
      <!-- testa: capelli lunghi e mossi fino alle spalle -->
      <path d="M-44 -440 C-60 -500 -40 -560 2 -566 C44 -566 60 -510 50 -440 C40 -460 36 -490 32 -500 C20 -470 -20 -470 -30 -500 C-34 -480 -38 -460 -44 -440 Z" fill="#6a4a2a"/>
      <path d="M-8 -470 L-10 -446 L14 -446 L12 -470 Z" fill="url(#df-pelle)"/>
      <path d="M-24 -524 C-26 -494 -18 -474 2 -468 C20 -464 32 -476 36 -494 C40 -510 38 -530 32 -544 C20 -560 -16 -560 -24 -524 Z" fill="url(#df-pelle)"/>
      <path d="M-28 -530 C-26 -560 0 -572 22 -566 C40 -560 44 -540 38 -526 C30 -544 10 -550 -6 -546 Z" fill="#6a4a2a"/>
      <g fill="none" stroke="#4a3018" stroke-width="2.5"><path d="M-40 -500 q-6 14 0 28 M-46 -470 q-6 12 2 24 M44 -500 q6 14 0 28 M48 -470 q6 12 -2 24"/></g>
      <path d="M-4 -510 Q6 -518 16 -510" fill="none" stroke-width="3"/>
      <path d="M21 -509 Q28 -516 35 -509" fill="none" stroke-width="3"/>
      <circle cx="6" cy="-509" r="2.6" fill="#1d1428" stroke="none"/><circle cx="28" cy="-508" r="2.4" fill="#1d1428" stroke="none"/>
      <path d="M-6 -524 Q4 -530 14 -524 M20 -523 Q28 -528 36 -522" fill="none" stroke="#4a3018" stroke-width="3.5"/>
      <path d="M24 -502 Q30 -490 25 -486" fill="none" stroke="#b8805a" stroke-width="3"/>
      <path d="M12 -482 Q20 -486 28 -482" fill="none" stroke="#4a3018" stroke-width="3"/>
      <path d="M10 -476 Q20 -470 30 -478" fill="none" stroke="#8a3a2a" stroke-width="3"/>
    </g>
  </symbol>

  <!-- ===== Madama Parolona travestita da pittrice: basco largo, grembiule macchiato, tavolozza ===== -->
  <symbol id="parolona-pittrice" viewBox="-150 -720 300 735" overflow="visible">
    <use href="#parolona" x="-150" y="-700" width="300" height="715"/>
    <g stroke="#1d1428" stroke-width="3" stroke-linejoin="round">
      <path d="M-70 -460 Q0 -440 70 -460 L104 -20 Q0 0 -104 -20 Z" fill="#e8e0cc"/>
      <g stroke="none"><circle cx="-40" cy="-300" r="10" fill="#2a5ab8"/><circle cx="30" cy="-220" r="8" fill="#e8b84a"/><circle cx="-10" cy="-140" r="9" fill="#c8402f"/><circle cx="50" cy="-340" r="6" fill="#3a8a4a"/></g>
      <ellipse cx="0" cy="-602" rx="96" ry="24" fill="#3a2a5a"/>
      <circle cx="0" cy="-622" r="8" fill="#3a2a5a"/>
      <path d="M90 -400 Q140 -420 150 -380 Q150 -340 110 -340 Q100 -360 80 -360 Q76 -384 90 -400 Z" fill="#c8945a"/>
      <g stroke="none"><circle cx="118" cy="-392" r="7" fill="#2a5ab8"/><circle cx="134" cy="-372" r="6" fill="#e8b84a"/><circle cx="112" cy="-362" r="6" fill="#c8402f"/></g>
      <path d="M-100 -380 L-140 -470" stroke="#8a5a32" stroke-width="6"/><path d="M-140 -470 L-146 -486" stroke="#2a5ab8" stroke-width="8"/>
    </g>
  </symbol>

  <!-- icone (140 × 140) -->
  <symbol id="ogg-lente" viewBox="0 0 140 140">
    <ellipse cx="70" cy="118" rx="30" ry="5" fill="#000" opacity=".25"/>
    <circle cx="70" cy="66" r="30" fill="#dff4ff" fill-opacity=".7" stroke="#1d1428" stroke-width="3"/>
    <path d="M52 52 Q60 44 72 44" fill="none" stroke="#fff" stroke-width="5"/>
    <circle cx="70" cy="66" r="30" fill="none" stroke="#9ac0e0" stroke-width="2"/>
  </symbol>
  <symbol id="ogg-filo" viewBox="0 0 140 140">
    <ellipse cx="70" cy="116" rx="40" ry="5" fill="#000" opacity=".2"/>
    <path d="M24 90 Q44 50 66 80 Q86 110 112 52" fill="none" stroke="#1d1428" stroke-width="7" stroke-linecap="round"/>
    <path d="M24 90 Q44 50 66 80 Q86 110 112 52" fill="none" stroke="#9a48a8" stroke-width="4" stroke-linecap="round"/>
  </symbol>
`);

Grafica.sfondo("delft", `
  <rect width="1600" height="900" fill="url(#df-muro)"/>
  <rect width="1600" height="90" fill="#4a3a2a"/>
  <g fill="url(#df-legno)" stroke="#1d1428" stroke-width="4"><rect y="80" width="1600" height="24"/></g>
  <!-- fascia di piastrelle bianche e blu -->
  <g stroke="#7a8ab8" stroke-width="1.5">
    ${(function () { var s = ""; for (var x = 0; x < 1600; x += 40) { s += '<rect x="' + x + '" y="560" width="40" height="40" fill="#f4f6fa"/><path d="M' + (x + 12) + ' 580 q8 -10 16 0 q-8 10 -16 0" fill="none" stroke="#2a4ab0" stroke-width="2"/>'; } return s; })()}
  </g>
  <!-- finestra sul canale -->
  <g stroke="#1d1428" stroke-width="4">
    <rect x="620" y="170" width="340" height="300" fill="url(#df-cielo)"/>
    <path d="M620 380 H960 V470 H620 Z" fill="#5a7a8a"/>
    <path d="M620 380 Q700 370 800 382 Q880 372 960 380" fill="none" stroke="#3a5a6a" stroke-width="3"/>
    <g fill="#a85a3a" stroke-width="2"><path d="M640 380 V300 L670 270 L700 300 V380 Z"/><path d="M720 380 V290 L745 262 L770 290 V380 Z"/><path d="M860 380 V310 L890 280 L920 310 V380 Z"/></g>
    <g fill="#f0e0a0" stroke="none"><rect x="660" y="320" width="10" height="14"/><rect x="740" y="310" width="10" height="14"/><rect x="884" y="330" width="10" height="14"/></g>
    <g fill="none" stroke="#3a2a1a" stroke-width="8"><rect x="620" y="170" width="340" height="300"/><path d="M790 170 V470 M620 320 H960"/></g>
    <path d="M610 470 H970 V490 H610 Z" fill="#7a5a3a"/>
  </g>
  <!-- scaffale con le pezze di stoffa (era un mercante di stoffe) -->
  <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <rect x="1250" y="160" width="300" height="400" fill="url(#df-legno)"/>
    <path d="M1250 260 H1550 M1250 360 H1550 M1250 460 H1550" stroke-width="7"/>
    <g stroke-width="2.5">
      <rect x="1262" y="210" width="80" height="46" rx="10" fill="#2a4ab0"/><rect x="1350" y="214" width="80" height="42" rx="10" fill="#c8402f"/><rect x="1438" y="208" width="100" height="48" rx="10" fill="#e8d8b0"/>
      <rect x="1262" y="310" width="100" height="46" rx="10" fill="#3a7a4a"/><rect x="1370" y="314" width="70" height="42" rx="10" fill="#8a5a32"/><rect x="1448" y="310" width="90" height="46" rx="10" fill="#e8b84a"/>
      <rect x="1262" y="410" width="120" height="46" rx="10" fill="#f4f0e8"/><rect x="1390" y="414" width="146" height="42" rx="10" fill="#5a3a7a"/>
      <rect x="1262" y="504" width="276" height="52" rx="10" fill="#9ab8d8"/>
    </g>
  </g>
  <!-- pavimento a scacchi bianchi e neri -->
  <g id="df-pav"></g>
  <!-- banco da lavoro con i microscopi; il mobile con il cassetto a numeri -->
  <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <path d="M200 560 L560 560 L580 590 L180 590 Z" fill="#8a5a32"/>
    <path d="M190 590 H570 V620 H190 Z" fill="#5a3a1e"/>
    <path d="M210 620 L200 790 M550 620 L560 790" stroke-width="12"/>
    <g fill="url(#t8-ottone)" stroke-width="2.5">
      <path d="M250 560 V500 H276 V560 Z"/><path d="M300 560 V492 H326 V560 Z"/>
    </g>
    <g fill="#dff4ff" stroke-width="1.5"><circle cx="263" cy="512" r="4"/><circle cx="313" cy="504" r="4"/></g>
    <path d="M420 560 Q418 530 440 528 L470 528 Q492 530 490 560 Z" fill="#6a8a9a"/>
    <path d="M340 558 L404 558 L398 538 L346 538 Z" fill="#f0e2c0" stroke-width="3"/>
    <path d="M372 538 L372 558 M352 544 H366 M352 550 H366 M378 544 H394 M378 550 H392" stroke="#8a6a3a" stroke-width="2"/>
    <path d="M384 540 L396 552" stroke="#9a48a8" stroke-width="3"/>
    <!-- mobile con il cassetto -->
    <rect x="980" y="600" width="200" height="190" fill="url(#df-legno)"/>
    <rect x="996" y="616" width="168" height="70" rx="4" fill="#6a3e20"/>
    <rect x="1050" y="636" width="60" height="30" rx="4" fill="#0d0b12"/>
    <path d="M996 700 H1164 V770 H996 Z" fill="#5a3418"/>
    <circle cx="1080" cy="735" r="7" fill="url(#t8-ottone)"/>
  </g>
  <!-- il cavalletto della "pittrice", con un quadro di un paesaggio -->
  <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <path d="M1300 840 L1360 560 M1440 840 L1380 560 M1370 560 L1370 840" stroke="#7a4a24" stroke-width="10"/>
    <rect x="1290" y="560" width="160" height="130" fill="#f0e8d0"/>
    <rect x="1300" y="570" width="140" height="110" fill="#9ac0e0" stroke-width="2"/>
    <path d="M1300 640 Q1340 620 1370 640 Q1400 630 1440 646 V680 H1300 Z" fill="#5a8a4a" stroke-width="2"/>
    <path d="M1286 690 H1454" stroke="#7a4a24" stroke-width="8"/>
  </g>
  <!-- a sinistra la porta del vagone del Binario 8 -->
  <g stroke="#1d1428" stroke-width="4" stroke-linejoin="round">
    <rect x="-10" y="300" width="130" height="420" fill="#7a2228"/>
    <rect x="8" y="320" width="92" height="380" rx="6" fill="#4a2018"/>
    <circle cx="54" cy="410" r="28" fill="url(#t8-ottone)"/><circle cx="54" cy="410" r="20" fill="#ffd27a"/>
    <path d="M-10 720 H130 L120 748 H-10 Z" fill="url(#t8-ottone-v)"/>
  </g>
`, function (svg) {
  var g = svg.querySelector("#df-pav");
  if (!g) return;
  var fx = 800, fy = 300, righe = [600, 640, 690, 750, 820, 900], out = "";
  function a(xb, y) { return (fx + (xb - fx) * (y - fy) / (900 - fy)).toFixed(1); }
  for (var j = 0; j < righe.length - 1; j++) {
    for (var i = -10; i < 10; i++) {
      var b1 = 800 + i * 120, b2 = b1 + 120, y1 = righe[j], y2 = righe[j + 1];
      out += '<path d="M' + a(b1, y1) + " " + y1 + " L" + a(b2, y1) + " " + y1 + " L" + a(b2, y2) + " " + y2 + " L" + a(b1, y2) + " " + y2 +
        ' Z" fill="' + ((i + j) % 2 ? "#ece4d4" : "#2a2a32") + '"/>';
    }
  }
  g.innerHTML = out + '<rect y="600" width="1600" height="18" fill="#000" opacity=".25"/>';
});
