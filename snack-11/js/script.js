// Generatore di “nomi cognomi” casuali: prendendo una lista
// di nomi e una lista di cognomi, Gatsby vuole generare una
// falsa lista di 3 invitati.



var nomi = ["Luca", "Mario", "Francesca", "Maria"];
var cognomi = ["Meticola", "Arese", "Grande", "Rossi"];

var listaFalsa = [];

for ( i = 1; i <= 3; i++) {
  var icognomiRandom = Math.floor(Math.random()* cognomi.length);
  var inomiRandom = Math.floor(Math.random()* nomi.length);
  var nomeCompleto = nomi[inomiRandom] + " " + cognomi[icognomiRandom];
  listaFalsa.push(nomeCompleto);
}
console.log(listaFalsa);
