//Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente
var n = parseInt(prompt('inserisci un numero'));

//per ogni numero da uno a n calcolo il cubo e lo stampo
for(var i = 1; i <= n; i++){
    var cubo = i * i * i;
    console.log(cubo);
}
