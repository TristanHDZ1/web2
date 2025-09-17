/*let estado = true;

if (estado){
    let estado = false;

}
console.log(estado);
var estado = true;

if (estado) {
    var estado = false;
}
console.log(estado);

for (let i = 0; i<10; i++){
    console.log(i)
}

let i = "javier"
console.log(i);

const miarray = [];
miarray [0] = ["javier y javier"];
    console.log(miarray);

const frutas = ["Platano"];
//frutas.push("sandia"); al final
frutas.unshift("mango");
frutas.push("fresa", "piña", "kiwi", "melón");
console.log (frutas);

//for in indices 
//for of los elementos 


    for (let fruta of frutas ){
        console.log(fruta)
    }

//shift elimina el primero
//por el primero 
console.log("------------elimina-------------")
frutas.pop();
frutas.shift();

    for (let fruta of frutas ){
        console.log(fruta)
    }*/

//inicia el programa en agregar una fruta al carrito y se inserte al carrito y se imprima la lista de frutas al dar ñao prompt, while y si no quiero se sale del while y despues para imprimir el prompt con el for of 

let bolsaDeVerduras = [];
let seguirComprando = true;

while (seguirComprando) {
  let verdura = prompt("Escribe una verdura para añadir a la bolsa:");

  bolsaDeVerduras.push(verdura);

  let opcion = prompt("¿Deseas agregar otra verdura? (si/no)");

  if (opcion.toLowerCase() === "no") {
    seguirComprando = false;
  }
}

console.log("Las verduras en tu bolsa son:");
for (let item of bolsaDeVerduras) {
  console.log("Llevaste:", item);
}
