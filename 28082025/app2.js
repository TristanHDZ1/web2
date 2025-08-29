//IF 
let clave = prompt("Ingresa la clase secreta");

if (clave === "12345"){
    console.log("Exito");
}
console.log("Continua el flujo");


console.log("======Ciclo ==========");

let num = parseInt(prompt(" Dame un numemero del 1 al 10"));

if (num <10){
    console.log("Te saliste del rango ");
}else{
    console.log("Ingresate un numero dentro del rango ")
}

console.log("Finaliza el proceso")



console.log("========= Conexion a internet========")
let port = 3008;

if(port){
    console.log("Definicion de puerto correcto");
}else {
    console.error("Error en puerto")
}




console.log("========= Comparación de números =========");


let num1 = parseInt(prompt("Dame el primer número:"));
let num2 = parseInt(prompt("Dame el segundo número:"));
let num3 = parseInt(prompt("Dame el tercer número:"));




if (num1 === num2 && num2 === num3) {
    console.log(" Los tres números son iguales.");
} else {
    
    if (num1 >= num2 && num1 >= num3) {
        console.log("El primer número (" + num1 + ") es el mayor.");
    } else if (num2 >= num1 && num2 >= num3) {
        console.log("El segundo número (" + num2 + ") es el mayor.");
    } else {
        console.log("El tercer número (" + num3 + ") es el mayor.");
    }

    
    if (num1 <= num2 && num1 <= num3) {
        console.log("El primer número (" + num1 + ") es el menor.");
    } else if (num2 <= num1 && num2 <= num3) {
        console.log("El segundo número (" + num2 + ") es el menor.");
    } else {
        console.log("El tercer número (" + num3 + ") es el menor.");
    }
}





