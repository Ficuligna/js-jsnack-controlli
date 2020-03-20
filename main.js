// DESCRIZIONE:
// 1 - L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.
// 2 - L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.
// 3 - Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.
// BONUS: (ma solo se il resto è fatto)
// tutto ciò che vi viene in mente in più a livello di stlilizzazione dell’output tramite css;
// controlli che potete pensare su dati e casi limite.






//ex1

var primoNum = parseFloat(prompt("inserisci primo numero"));
var secondoNum = parseFloat(prompt("inserisci secondo numero"));
var numOut;
if (primoNum > secondoNum) {
  numOut = primoNum;
}else if (primoNum < secondoNum) {
  numOut = secondoNum;
}else {
  numOut = "i numeri sono uguali"
}

console.log(numOut);

//ex2

var primaParola = prompt("inserisci una parola");
var secondaParola = prompt("inserisci una seconda parola");
var parolaOut;
if (primaParola.length > secondaParola.length) {
  parolaOut = secondaParola + " " + primaParola;
}else if (primaParola.length < secondaParola.length) {
  parolaOut = primaParola + " " + secondaParola;
}else {
  parolaOut ="le due parole sono uguali"
}

console.log(parolaOut);

// ex3

var sum = parseFloat(prompt("inserisci primo numero")) + parseFloat(prompt("inserisci secondo numero")) + parseFloat(prompt("inserisci terzo numero")) + parseFloat(prompt("inserisci quarto numero")) + parseFloat(prompt("inserisci quinto numero"));

console.log(sum);
