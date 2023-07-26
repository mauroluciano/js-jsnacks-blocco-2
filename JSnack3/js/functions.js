// definisco una lista di numeri interi
const nums = [10, 30, 50, 70, 90, 110, 130, 150, 170, 190];

// definisco la variabile con la quale calcolare la somma
let somma = 0;

// scorro su tutti gli elementi della lista
for (let i = 0; i < nums.length; i++) {
  //controllo se la posizione è dispari
  if (i % 2 != 0) {
    //aggiungo il valore alla somma
    somma = somma + nums[i];
  }
}
console.log(somma);
