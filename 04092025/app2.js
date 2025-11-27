// conjunto de intruciones para poder realizar operaciones 

// Ejemplo

function saludo(){
console.log("Hello word from funtion");
}

console.log(saludo());
//console.log(saludo);
saludo();


function saludo2(nombreUsuario){
console.log("Hola como estas " +nombreUsuario);
}

saludo2("Javier");

//con alerta
///corregir este 
function saludo2(nombreUsuario){
console.log(alert(prompt("Hola como estas " +nombreUsuario)));
saludo2("Javier");
}




