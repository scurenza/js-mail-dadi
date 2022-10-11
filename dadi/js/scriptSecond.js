/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve? */

// Dati
let userNum = 0;
let computerNum = 0;
let winner = "";

// Genero i numeri random
userNum = Math.floor (Math.random() * 6 + 1);
computerNum = Math.floor (Math.random() * 6 + 1);

console.log(userNum, computerNum);

// Stabilisco il vincitore
if (computerNum < userNum) {
    winner = "user";
}

else if (computerNum > userNum) {
    winner = "computer";
}

if (winner === ""){
    console.log('Parità');
}

console.log(winner);