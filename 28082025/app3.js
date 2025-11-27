let optUser = prompt("Dame unas opcion de las siguintes: 1.Principito, 2. Quijote , 3. 100 años de soledad");

switch(optUser){
 case "1" :
    console.log("Principito");
    break;

    case "2" :
       console.log("El Quijote");
    break;

    case "3":
     console.log("100 años de soledad");
        break;
     default:
        console.log("Opcion no valida");
        break;

}