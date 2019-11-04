/*  2.  Il software deve chiedere all’utente il suo nome e il sesso con due prompt diversi.
Sulla pagina html deve apparire “Ciao <nome>“, il colore del nome deve essere azzurro o rosa a seconda del sesso inserito. */
//@ts-check

var nome;
var sesso;
var el;
var elementi = [];
var valoreValido = false;
var valoreValido2 = false;

el = document.getElementById("saluto");



function chiediNome(name){
    valoreValido;
    while(valoreValido == false){
        name = prompt("Inserisci il tuo nome");
        if(!isNaN(name)){
            alert("Inserisci un valore corretto")
        }else{
            valoreValido = true;
            elementi.push(name);
        }
    }
}

function chiediSesso(sex,name){
    valoreValido2;
    while(valoreValido2 == false){
        sex = prompt("Inserisci il tuo sesso");
        if (sex == "uomo" || sex == "m" || sex == "M" || sex == "donna" || sex == "f" || sex == "F"){
            elementi.push(sex);
            valoreValido2 = true;
            if (sex == "uomo" || sex == "m" || sex == "M") {
                el.style.color = "blue";
                el.innerHTML = "Ciao " + name;
            } else {
                el.style.color = "pink";
                el.innerHTML = "Ciao " + name;
            }
        }else{
            alert("inserisci un valore valido")
        }
    }
}

while (elementi.length < 2) {
    chiediNome(nome);
    chiediSesso(sesso,nome);
}

console.log(elementi)