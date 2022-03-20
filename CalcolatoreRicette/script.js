// function calcolatore() {
//     let grammi = parseInt(prompt("Quanti grammi?"));
//     let persone = parseInt(prompt("Per quante persone prevede la ricetta originale?"));
//     let personeFinale = parseInt(prompt("Per quante persone vuoi cucinare adesso?"));
//     let calcolo = (grammi / persone) * personeFinale;
//     return alert(calcolo);
// }

// calcolatore();

const inputGrammi = document.querySelector("#quantiGrammi");
const inputPersonePrima = document.querySelector("#quantePersonePrima");
const inputPersoneDopo = document.querySelector("#quantePersoneDopo");
const button = document.querySelector("#pulsante");
const risultato = document.querySelector("#result");

function riCalcolatore() {
    let grammi = parseInt(inputGrammi.value);
    let personePrima = parseInt(inputPersonePrima.value);
    let personeDopo = parseInt(inputPersoneDopo.value);

    let calcolo = (grammi / personePrima) * personeDopo;
    return risultato.innerHTML = "La quantità che ti serve è " + Math.round(calcolo) + " grammi.";
}



button.addEventListener("click", () => {
    riCalcolatore();
    inputGrammi.value = "";
    inputPersonePrima.value = "";
    inputPersoneDopo.value = "";
   
});
