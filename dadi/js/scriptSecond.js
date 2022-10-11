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
const submitBtn = document.getElementById('submit');


// Genero i numeri random al click del bottone
submitBtn.addEventListener('click', function(){

    userNum = Math.floor (Math.random() * 6 + 1);
    computerNum = Math.floor (Math.random() * 6 + 1);

    
    console.log(userNum, computerNum);
    
    // Stabilisco il vincitore
    if (computerNum < userNum) {
        winner = "user";
        const result = document.getElementById('win');
        result.classList.add('show');
    }
    
    else if (computerNum > userNum) {
        winner = "computer";
        const result = document.getElementById('loss');
        result.classList.add('show');
    }
    
    if (winner === ""){
        console.log('Parità');
        const result = document.getElementById('draw');
        result.classList.add('show');
    }
    
    console.log(winner);

    setTimeout(function(){
        window.location.reload();
     }, 1500);
})

