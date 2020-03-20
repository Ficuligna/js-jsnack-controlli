// DESCRIZIONE:
// 1 - L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.
// 2 - L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.
// 3 - Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.
// BONUS: (ma solo se il resto è fatto)
// tutto ciò che vi viene in mente in più a livello di stlilizzazione dell’output tramite css;
// controlli che potete pensare su dati e casi limite.




function giochiamo(){
  var sceltaGame = prompt("seleziona il gioco al quale vuoi giocare. Ti avverto, potrebbe essere divertentissimo: digita 1 per giocare a 'scopri quale numero è il maggiore'; 2 per giocare a 'ti stampo in ordine due parole, ma prima quella più corta'; 3 per giocare a 'ti faccio la somma di 5 numeri'")
  var result;
  if (sceltaGame == 1) {
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
      result = numOut;

      console.log(numOut);

  }else if (sceltaGame == "2") {
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
      result = parolaOut;

      console.log(parolaOut);

  }else if (sceltaGame == 3) {
      var sum = parseFloat(prompt("inserisci primo numero")) + parseFloat(prompt("inserisci secondo numero")) + parseFloat(prompt("inserisci terzo numero")) + parseFloat(prompt("inserisci quarto numero")) + parseFloat(prompt("inserisci quinto numero"));
      console.log(sum);
      result = sum;
  }else {
    alert ("we, Luigi, devi digitare SOLTANTO '1' '2' oppure '3'. riprova");
    giochiamo();
  }
  return result;
}

document.getElementById("ciao").innerHTML = giochiamo();
