/*  2.  Il software deve chiedere all’utente il suo nome e il sesso con due prompt diversi.
Sulla pagina html deve apparire “Ciao <nome>“, il colore del nome deve essere azzurro o rosa a seconda del sesso inserito. */
//@ts-check

var nome;
var sesso;
var el;
var elementi = [];


el = document.getElementById("saluto");


    nome = prompt("Inserisci il tuo nome");
    sesso = prompt("Inserisci il tuo sesso");
    if (sesso == "uomo" || sesso == "m" || sesso == "M" || sesso == "donna" || sesso == "f" || sesso == "F") {
        if (sesso == "uomo" || sesso == "m" || sesso == "M") {
            elementi.push(nome);
            elementi.push(sesso);
            el.style.color = "blue"
            el.innerHTML = "Ciao " + nome;
        } else if (sesso == "donna" || sesso == "f" || sesso == "F") {
            elementi.push(nome);
            elementi.push(sesso);
            el.style.color = "pink"
            el.innerHTML = "Ciao " + nome;
        }
    } 



console.log(elementi)