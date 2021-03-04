// Crea un array di numeri interi e fai la somma di tutti gli
// elementi che sono in posizione dispari



var interi = ["1", "2","4", "5", "0", "3"];

sommaDispari = 0;

for ( var i = 0; i < interi.length; i = i + 2) {
  sommaDispari += interi[i];

}

console.log(sommaDispari);
