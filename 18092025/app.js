// funciones en una sola linea o anonimas 
//Funcionn declarativa
function numeroAletorio(min,max){
    return Math.floor(Math.random()*(max-min)+min);
    
}
console.log(numeroAletorio(1,11));

//Funcion expresada

const miNumero =function numeroAletorio(min,max){
    return Math.floor(Math.random()*(max-min)+min);
    
}
console.log(numeroAletorio(2,20));

//funcion flecha



