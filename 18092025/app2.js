/* //Funcion tradicional


function numero(a){
    return a+100;
}

//Paso numero 1
//a) Eliminar la palabra funtion
(a) => {
    return a+100;
}


//2 
(a) => {
 a+100;
}

//3 

(a) =>  a+100;

//4 con varias variables
(a,b) => {a+100};


 */

const miNumeroFlecha = (max) => {
    return Math.floor(Math.random()* (max-1)+1);
}

console.log(miNumeroFlecha(50));

console.log(" ========== Otra funtion flecha =========")
//Funtion flecha

 const miNumeroFlecha1 = (max) => Math.floor(Math.random()* (max-1)+1);

console.log(miNumeroFlecha(50));
