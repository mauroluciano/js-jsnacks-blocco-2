//Inserisci un numero;

// da 1 a 100
let num = Math.floor(Math.random() * 100);
document.getElementById("originale").innerHTML = "il numero ORIGINALE è " + num;

//SE il numero è pari STAMPA;
if (num % 2 === 0) {
  document.getElementById("pari").innerHTML = "il numero pari è " + num;
}

//ALTRIMENTI SE è dispari stampa il numero successivo.
else {
  let dispari = num + 1;
  document.getElementById("dispari").innerHTML =
    "il numero dispari è " + dispari;
}
