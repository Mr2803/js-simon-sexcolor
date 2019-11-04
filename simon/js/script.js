/* Un alert espone 5 numeri casuali.Da li parte un timer di 30s.
Dopo 30 secondi l utente deve inserire un prompt alla volta i numeri che ha visto precedent.Dopo che sono stati inseriti i 5 numeri , il software dice quanti e quali dei numeri da indovinare sono stati individuati */
//@ts-check
var gruppoNumeriGiocatore = [];
var punteggio = 0;
var numeriIndovinati = [];


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; // il max è escluso il min è incluso
}

var gruppoNumDaRicordare = [];
console.log("questi sono i numeri da ricordare" + gruppoNumDaRicordare)
var numRand;

while (gruppoNumDaRicordare.length < 5) {
    numRand = getRandomInt(1, 101);
    if (gruppoNumDaRicordare.includes(numRand) == false) {
        gruppoNumDaRicordare.push(numRand);
    }

}
console.log(gruppoNumDaRicordare)
alert("Guarda questi numeri e ricordali , quando sei pronto premi ok e aspetta 30 secondi " + gruppoNumDaRicordare)
var avviso;
setTimeout(giocoMemoria, 3000)

function giocoMemoria() {
    avviso = alert("inserisci i numeri che hai visto prima , se li ricordi");
    for (var i = 0; i < gruppoNumDaRicordare.length; i++) {
        var insertNum = parseInt(prompt("inserisci un numero"));

        gruppoNumeriGiocatore.push(insertNum);

        if (gruppoNumDaRicordare.includes(insertNum) == true) {
            punteggio++;
            numeriIndovinati.push(insertNum);
        }
    }
    console.log("questi sono i numeri del giocatore " + gruppoNumeriGiocatore)
    console.log("questo è il punteggio che hai totalizzato :" + punteggio)
    console.log("questi sono i numeri che hai indovinato : " + numeriIndovinati)
}