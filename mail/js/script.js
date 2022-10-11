// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// DATI
const mailPermitted = ['pippo@mail.it', 'pluto@mail.it', 'topolino@mail.it'];
let flag = false;

// Chiedo la mail all'utente
const userMail = prompt('digitare mail con la formula "nome@mail.it"');

if (userMail === "") {
    alert("Inserisci una mail valida!");
}

else {
// controllo se la mail è nella lista
for (let i = 0; i < mailPermitted.length; i++) {
    const checkedMail = mailPermitted[i];

    if (checkedMail === userMail) {
        flag = true;
    }
    
}

if (flag) {
    alert("Complimenti, hai accesso al sito!");
}
else {
    alert("Mi spiace, non sei il benvenuto");
}}