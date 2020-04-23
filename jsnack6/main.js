//Stampa le potenze di 2 fino a 1000
//chiedo all'utente l'esponente massimo che vuole raggiungere
var scelta_utente = parseInt(prompt('inserisci un numero'));

//inizializzo la variabile potenza a 1(esponente 0);
var potenza = 1;

//eseguo un ciclo ed ad ogni iterazione moltiplico potenza per 2 e stampo
for (var i = 0; i<scelta_utente; i++){
    var potenza = potenza * 2;
    console.log(potenza);
}
