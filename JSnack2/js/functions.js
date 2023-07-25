// Genero nomi e cognomi casuali
const nomi = ["Alessio", "Samuele", "Francesco", "Mauro"];

const cognomi = ["Montebello", "Benato", "Pepi", "Luciano"];

const length = nomi.length;

for (let i = 0; i < 16; i++) {
  let randomNum1 = Math.round(Math.random() * (length - 1));
  document.getElementById("nomi").innerHTML = "Il nome è " + nomi[randomNum1];

  let randomNum2 = Math.round(Math.random() * (length - 1));
  document.getElementById("cognomi").innerHTML =
    "Il cognome è " + cognomi[randomNum2];

  //console.log(nomi[randomNum1] + " " + cognomi[randomNum2]);
}

// il Grande Gatsby ha una lista di nomi e una lista di cognomi

// la lista genera una falsa lista di invitati con nome e cognome
