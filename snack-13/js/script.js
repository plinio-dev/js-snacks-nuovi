// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.



var a = ["Matteo", "Laura","Francesca"];
var b = ["Luca", "Andrea","Mario", "Giada", "Marco"];

var elementoB = b.shift();

do {
  a.push(elementoB);

} while ( a.length = b.length);

console.log(a);
