/* Un alert espone 5 numeri casuali.Da li parte un timer di 30s.
Dopo 30 secondi l utente deve inserire un prompt alla volta i numeri che ha visto precedent.Dopo che sono stati inseriti i 5 numeri , il software dice quanti e quali dei numeri da indovinare sono stati individuati */
//@ts-check
var gruppoNumDaRicordare = [];
var gruppoNumeriGiocatore = [];
var numeriIndovinati = [];
var numRand;
var punteggio = 0;
var avviso;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; // il max è escluso il min è incluso
}

console.log("questi sono i numeri da ricordare" + gruppoNumDaRicordare)


while (gruppoNumDaRicordare.length < 5) {
    numRand = getRandomInt(1, 101);
    if (gruppoNumDaRicordare.includes(numRand) == false) {
        gruppoNumDaRicordare.push(numRand);
    }

}
console.log(gruppoNumDaRicordare)
alert("Guarda questi numeri e ricordali , quando sei pronto premi ok e aspetta 30 secondi " + gruppoNumDaRicordare)

//Aggiungo un my interval per tracciare i secondi
var secondi = 3;
var myinterval = setInterval(countdown, 1000);
function countdown() {
    secondi = secondi - 1;

    if (secondi == 0) {
        
        clearInterval(myinterval);
    } else {
        console.log(secondi);
    }
}

setTimeout(giocoMemoria, 3000)

function giocoMemoria() {
    avviso = alert("inserisci i numeri che hai visto prima , se li ricordi");
    while (gruppoNumeriGiocatore.length <  gruppoNumDaRicordare.length) {
        var insertNum = parseInt(prompt("inserisci un numero"));
        if(gruppoNumeriGiocatore.includes(insertNum) == true){

            alert("Ok...Questo lo ricordi , però inserisci anche gli altri");

        }else{
                gruppoNumeriGiocatore.push(insertNum);

            if (gruppoNumDaRicordare.includes(insertNum) == true){
                punteggio++;
                numeriIndovinati.push(insertNum);
            }
        }
    }

    console.log("questi sono i numeri del giocatore " + gruppoNumeriGiocatore)
    console.log("questo è il punteggio che hai totalizzato :" + punteggio + " su " + gruppoNumDaRicordare.length)
    console.log("questi sono i numeri che hai indovinato : " + numeriIndovinati)
}