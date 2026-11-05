/* Gioco di Matematica: "Contrattempo!". Elenco dei capitoli e dei loro file.
   Per aggiungere un capitolo: aggiungere qui una voce (vedi README, "Come aggiungere un capitolo"). */
Piattaforma.gioco({
  id: "matematica",
  titolo: "gioco.matematica.titolo",
  materia: "gioco.matematica.materia",
  descrizione: "gioco.matematica.descr",
  /* grafica comune a tutti i capitoli del gioco */
  grafica: [
    "giochi/matematica/grafica/comune.js",
    "giochi/matematica/grafica/leo-viste.js"
  ],
  capitoli: [
    {
      id: "cap01", anno: 2, numero: 1, titolo: "cap.matematica.01", durata: 30,
      file: [
        "giochi/matematica/grafica/damasco.js",
        "giochi/matematica/grafica/samarcanda.js",
        "giochi/matematica/grafica/spiaggia.js",
        "giochi/matematica/grafica/mercato.js",
        "giochi/matematica/capitoli/01-decimali/capitolo.js",
        "giochi/matematica/capitoli/01-decimali/stanze/condominio.js",
        "giochi/matematica/capitoli/01-decimali/stanze/damasco.js",
        "giochi/matematica/capitoli/01-decimali/stanze/samarcanda.js",
        "giochi/matematica/capitoli/01-decimali/stanze/spiaggia.js",
        "giochi/matematica/capitoli/01-decimali/stanze/mercato.js",
        "giochi/matematica/capitoli/01-decimali/stanze/finale.js",
        "giochi/matematica/capitoli/01-decimali/testi/it.js"
      ],
      argomenti: ["frazioni decimali e numeri decimali", "frazioni non decimali: la divisione", "tipo di decimale dai fattori del denominatore", "numeri razionali", "troncamento e arrotondamento", "frazione generatrice di decimali limitati e periodici", "operazioni con i decimali (divisione, moltiplicazione, sottrazione, addizione, potenza)", "operazioni con i periodici passando per le frazioni", "0,999… = 1"],
      errori: {
        "m1-facile-spostata": "Frazione decimale: virgola spostata di un posto",
        "m1-facile-incollata": "Frazione decimale scritta «numeratore virgola denominatore»",
        "m1-zeri-spostata": "Frazione decimale con zeri: virgola nel posto sbagliato",
        "m1-zeri-incollata": "Frazione decimale con zeri scritta «numeratore virgola denominatore»",
        "m1-divisione-incollata": "Frazione non decimale scritta «numeratore virgola denominatore»",
        "m1-divisione-dentro": "Frazione non decimale scritta «zero virgola numeratore denominatore»",
        "m1-divisione-rovescio": "Divisione al contrario (denominatore diviso numeratore)",
        "m1-divisione-spostata": "Divisione giusta ma virgola spostata",
        "m2-trappola": "Tipo di decimale: frazione non semplificata prima di guardare il denominatore",
        "m2-limitato": "Decimale limitato non riconosciuto (denominatore con soli 2 e 5)",
        "m2-semplice": "Periodico semplice non riconosciuto (denominatore senza 2 e 5)",
        "m2-misto": "Periodico misto non riconosciuto (denominatore con 2 o 5 e altri fattori)",
        "m3-tronca-modo": "Ha arrotondato invece di troncare",
        "m3-arrotonda-modo": "Ha troncato invece di arrotondare",
        "m3-tronca-cifra": "Troncamento alla cifra decimale sbagliata",
        "m3-arrotonda-cifra": "Arrotondamento alla cifra decimale sbagliata",
        "m4-cerchi": "Notazione di Stevino letta male (posizione delle cifre decimali)",
        "m4-limitato-num": "Frazione generatrice di un limitato: numeratore sbagliato",
        "m4-limitato-den": "Frazione generatrice di un limitato: denominatore sbagliato (zeri)",
        "m4-semplice-num": "Periodico semplice: numeratore sbagliato (sottrazione della parte non periodica)",
        "m4-semplice-den": "Periodico semplice: denominatore sbagliato (i 9)",
        "m4-misto-num": "Periodico misto: numeratore sbagliato (antiperiodo dimenticato)",
        "m4-misto-den": "Periodico misto: denominatore sbagliato (9 e 0)",
        "m5-divisione": "Divisione di un decimale per un intero (prezzo al chilo)",
        "m5-prezzo": "Moltiplicazione di decimali: virgola o procedimento sbagliati",
        "m5-resto": "Sottrazione di decimali (il resto)",
        "m5-bilancia": "Addizione di decimali sulla bilancia",
        "m5-potenza": "Potenza di un decimale (area del quadrato)",
        "m6-1": "Duello: 0,2 periodico in frazione",
        "m6-2": "Duello: 1,3 periodico in frazione",
        "m6-3": "Duello: periodico misto in frazione",
        "m6-4": "Duello: 0,9 periodico (= 1)"
      }
    }
  ]
});
