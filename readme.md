## TRACCIA

Descrizione:
Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.


## STEPS

- Creo i due input ed il bottone in html
- Creo tag html per stampare il risultato
- Salvo il value dei 2 input in 2 variabili
- Calcolo il prezzo del ticket tramite i valori di input e lo salvo in una variabile
- Salvo in due variabili le entità degli sconti secondo l'età
- SE età < 18 applico sconto 20% ed aggiorno il prezzo del biglietto
- ALTRIMENTI SE età > 65 applico sconto 40% ed aggiorno il prezzo del biglietto
- Stampo NOME, ETA', 2 N° RANDOM (per cabina e cod CP), PREZZO 

## TOOLS

- <input>
- <botton>
- let / const
- if / else if
- element.innerHTML
- element.addEventListener()