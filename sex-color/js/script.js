/*  2.  Il software deve chiedere all’utente il suo nome e il sesso con due prompt diversi.
Sulla pagina html deve apparire “Ciao <nome>“, il colore del nome deve essere azzurro o rosa a seconda del sesso inserito. */
//@ts-check
var sesso;
var nome;
var el;



el = document.getElementById("saluto");



function chiediNome(){
    var valoreValido = false;
    var name;
  
    while(valoreValido == false){
        name = prompt("Inserisci il tuo nome");
        if(!isNaN(name)){
            alert("Inserisci un valore corretto")
        }else{
            valoreValido = true;
        }
    }
    return name;
}

function chiediSesso(name){
    var valoreValido = false;
    var sex; 

    while(valoreValido == false){
        sex = prompt("Inserisci il tuo sesso");
        if (sex == "uomo" || sex == "m" || sex == "M" || sex == "donna" || sex == "f" || sex == "F"){
            valoreValido = true;
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
    return sex;
}


    nome = chiediNome();
    console.log(nome)//Chiara
    sesso = chiediSesso(nome);


//console.log(elementi)