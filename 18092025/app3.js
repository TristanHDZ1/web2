//Objetos similares a arreglos 

/* var Micarro = new Object();
Micarro.marca = 'Toyota';
Micarro.modelo = 'supra';
Micarro.color = 'rojo';

console.log(Micarro); */


/* let frutas = ["banana","manzana"];
console.log(frutas);
 */

//Objeto literal
var Micarro ={
    marca : 'Toyota',
    modelo : 'supra',
    color : 'azul'
}
console.log(Micarro);



var perro={
    nombre : 'said',
    color : 'desconocido',
    edad : '21',
    talla : '1,75',
    enemigos: ["santi","bruno"]
}

console.log(perro);
console.log(perro.color);
console.log(perro.enemigos[1]);

perro.raza = "Asiatica";

console.log(perro);


//ELIMINAR
delete perro.edad;
console.log(perro);









