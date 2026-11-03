/* Gioco di Scienze: "Il Museo Sottosopra". Elenco dei capitoli e dei loro file.
   Per aggiungere un capitolo: aggiungere qui una voce (vedi README, "Come aggiungere un capitolo"). */
Piattaforma.gioco({
  id: "scienze",
  titolo: "gioco.scienze.titolo",
  materia: "gioco.scienze.materia",
  descrizione: "gioco.scienze.descr",
  /* grafica comune a tutti i capitoli del gioco */
  grafica: [
    "giochi/scienze/grafica/definizioni.js",
    "giochi/scienze/grafica/nina-viste.js",
    "giochi/scienze/grafica/oggetti.js",
    "giochi/scienze/grafica/sala-invertebrati.js"
  ],
  capitoli: [
    {
      id: "prova", anno: 2, numero: 0, titolo: "cap.scienze.prova", sempreAperto: true, durata: 10,
      file: [
        "giochi/scienze/capitoli/00-prova/stanza.js",
        "giochi/scienze/capitoli/00-prova/testi/it.js",
        "giochi/scienze/capitoli/00-prova/testi/en.js",
        "giochi/scienze/capitoli/00-prova/testi/fr.js",
        "giochi/scienze/capitoli/00-prova/testi/ar.js",
        "giochi/scienze/capitoli/00-prova/testi/es.js"
      ],
      /* per il riepilogo del docente */
      argomenti: ["corallo e cnidari (celenterati)"],
      errori: {
        "corallo-pietra": "Il corallo scambiato per una pietra",
        "corallo-vegetale": "Il corallo scambiato per una pianta"
      }
    },
    {
      id: "cap01", anno: 2, numero: 1, titolo: "cap.scienze.01", durata: 30,
      file: [
        "giochi/scienze/grafica/cap1-personaggi.js",
        "giochi/scienze/grafica/cap1-ritratti2.js",
        "giochi/scienze/grafica/cap1-oggetti2.js",
        "giochi/scienze/grafica/cap1-atrio.js",
        "giochi/scienze/grafica/cap1-serra.js",
        "giochi/scienze/grafica/cap1-insetti.js",
        "giochi/scienze/capitoli/01-invertebrati/capitolo.js",
        "giochi/scienze/capitoli/01-invertebrati/stanze/atrio.js",
        "giochi/scienze/capitoli/01-invertebrati/stanze/sala.js",
        "giochi/scienze/capitoli/01-invertebrati/stanze/serra.js",
        "giochi/scienze/capitoli/01-invertebrati/stanze/insetti.js",
        "giochi/scienze/capitoli/01-invertebrati/stanze/finale.js",
        "giochi/scienze/capitoli/01-invertebrati/testi/it.js",
        "giochi/scienze/capitoli/01-invertebrati/testi/en.js",
        "giochi/scienze/capitoli/01-invertebrati/testi/fr.js",
        "giochi/scienze/capitoli/01-invertebrati/testi/es.js",
        "giochi/scienze/capitoli/01-invertebrati/testi/ar.js"
      ],
      argomenti: ["invertebrati e vertebrati", "simmetria (raggiata, bilaterale, nessuna)", "poriferi", "cnidari e ciclo della medusa",
        "classi dei molluschi", "echinodermi", "vermi (platelminti, nematodi, anellidi)", "metamorfosi", "artropodi (insetti, aracnidi, crostacei, miriapodi)", "società degli insetti"],
      errori: {
        "p1-vertebrato": "Un vertebrato (passero o pesce) scambiato per invertebrato",
        "p1-simmetria": "Simmetria sbagliata (raggiata, bilaterale, nessuna)",
        "p2-corallo-pietra": "Il corallo scambiato per una pietra",
        "p2-corallo-pianta": "Il corallo scambiato per una pianta",
        "p2-spugna-vegetale": "La spugna scambiata per un vegetale",
        "p2-spugna-fungo": "La spugna scambiata per un fungo",
        "p2-medusa-pesce": "La medusa scambiata per un pesce",
        "p2-medusa-plastica": "La medusa scambiata per un oggetto",
        "p2-ciclo-larva": "Ciclo della medusa: ordine sbagliato (larva)",
        "p2-ciclo-pesce": "Ciclo della medusa: dal polipo un pesce",
        "p2-ciclo-polipo": "Ciclo della medusa: la medusa torna subito polipo",
        "p2-ciclo-spugna": "Ciclo della medusa: confusione con le spugne",
        "p2-ciclo-medusa": "Ciclo della medusa: la larva diventa subito medusa",
        "p2-ciclo-stella": "Ciclo della medusa: confusione con gli echinodermi",
        "p4-verme-gasteropodi": "Il verme ad anelli messo tra i molluschi", "p4-verme-bivalvi": "Il verme ad anelli messo tra i molluschi", "p4-verme-cefalopodi": "Il verme ad anelli messo tra i molluschi", "p4-verme-echinodermi": "Il verme ad anelli messo tra gli echinodermi",
        "p4-polpo-gasteropodi": "Il polpo: classe dei molluschi sbagliata", "p4-polpo-bivalvi": "Il polpo: classe dei molluschi sbagliata", "p4-polpo-echinodermi": "Il polpo non riconosciuto come mollusco", "p4-polpo-anellidi": "Il polpo non riconosciuto come mollusco",
        "p4-riccio-gasteropodi": "Il riccio di mare scambiato per un mollusco", "p4-riccio-bivalvi": "Il riccio di mare scambiato per un mollusco", "p4-riccio-cefalopodi": "Il riccio di mare scambiato per un mollusco", "p4-riccio-anellidi": "Il riccio di mare scambiato per un anellide",
        "p5-metamorfosi": "Metamorfosi della farfalla: ordine sbagliato",
        "p5-formica-aracnidi": "La formica scambiata per un aracnide", "p5-formica-crostacei": "La formica scambiata per un crostaceo", "p5-formica-miriapodi": "La formica scambiata per un miriapode",
        "p5-ragno-insetti": "Il ragno scambiato per un insetto", "p5-ragno-crostacei": "Il ragno scambiato per un crostaceo", "p5-ragno-miriapodi": "Il ragno scambiato per un miriapode",
        "p5-granchio-insetti": "Il granchio scambiato per un insetto", "p5-granchio-aracnidi": "Il granchio scambiato per un aracnide", "p5-granchio-miriapodi": "Il granchio scambiato per un miriapode",
        "p5-millepiedi-insetti": "Il millepiedi scambiato per un insetto", "p5-millepiedi-aracnidi": "Il millepiedi scambiato per un aracnide", "p5-millepiedi-crostacei": "Il millepiedi scambiato per un crostaceo",
        "p6-vista": "Formiche: credono che si orientino con la vista", "p6-caso": "Formiche: credono che vadano a caso",
        "p7-1": "Duello finale: la spugna", "p7-2": "Duello finale: medusa e corallo", "p7-3": "Duello finale: i vermi", "p7-4": "Duello finale: il polpo", "p7-5": "Duello finale: la stella marina", "p7-6": "Duello finale: il ragno",
        "p3-platelminta": "Un platelminta (verme piatto) scelto per scavare il terreno",
        "p3-nematode": "Un nematode (verme cilindrico) scelto per scavare il terreno",
        "p4-chiocciola-bivalvi": "La chiocciola: classe dei molluschi sbagliata", "p4-chiocciola-cefalopodi": "La chiocciola: classe dei molluschi sbagliata", "p4-chiocciola-echinodermi": "La chiocciola non riconosciuta come mollusco", "p4-chiocciola-anellidi": "La chiocciola non riconosciuta come mollusco"
      }
    }
  ]
});
