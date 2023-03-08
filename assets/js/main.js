/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */


// Chiedere all'utente i chilometri che vuole percorrere 
const kilometers = prompt('Quanti chilometri vuoi percorrere?')
console.log(kilometers);

// Chiedere l'età al passegero 
const passengerAge = prompt('Inserisci l\'età');
console.log(passengerAge);

if(passengerAge < 18){
    console.log('Minorenne');
} else if (passengerAge > 18){
    console.log('Maggiorenne')
};

// Calcolare il prezzo totale del viaggio


// Definire il prezzo in base ai chilometri (0.21 € al km)

// Applicare sconto su minorenni del 20%



// Applicare sconto per gli over 65 del 40%

// Prezzo finale
