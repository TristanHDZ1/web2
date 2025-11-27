/* function saludar(nombre){
console.log("Hola" + nombre);
}

function sumar(n1 ,n2){
return parseInt(n1) +parseInt(n2);
}


//let numero1 = prompt("Numero 1: ");
//let numero2 = prompt("Numero 2: ");

let resultado = sumar(numero1,numero2);
console.log("El toal de la suma es : " + resultado);
 */

let Operaciones = prompt("Dame unas opcion de las siguintes: 1.Suma, 2. Resta , 3.Multiplicacion , 4. Division");

function suma(n1 ,n2){
return parseInt(n1) +parseInt(n2);

}

function resta(n1 ,n2){
return parseInt(n1) -parseInt(n2);
}

function multiplicacion(n1 ,n2){
return parseInt(n1) *parseInt(n2);
}

function division(n1 ,n2){
return parseInt(n1) / parseInt(n2);
}

let numero1 = prompt("Numero 1: ");
let numero2 = prompt("Numero 2: ");





switch(Operaciones){
 case "1" :
    let resultado = suma(numero1,numero2);
console.log("El total de la suma es : " + resultado);
    break;

    case "2" :
       let resultado2 = resta(numero1,numero2);
console.log("El total de la resta es : " + resultado2);
    break;

    case "3":
     let resultado3 = multiplicacion(numero1,numero2);
console.log("El total de la multiplicacion es : " + resultado3);
        break;
     default:
       let resultado4 = division(numero1,numero2);
console.log("El total de la divicion es : " + resultado4);
        break;

}
