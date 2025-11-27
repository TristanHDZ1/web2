let inventario = [];

function mostrarMenu(){
    return parseInt(prompt(
        `Seleccione una opción:
        1.- Agregar producto
        2.-Mostrar todos los productos
        3.-Buscar productos por nombre 
        4.-Salir
        Elige una opcion:
        `));
    }

    function agregarProducto(){

        let nombre = prompt("Ingrese el nombre del producto:");
        let precio = parseFloat(prompt("Ingrese el precio del producto:"));
        let cantidad = parseInt(prompt("Ingrese la cantidad del producto:"));

        if(cantidad > 0 && precio > 0){ 
            let producto = {
                nombre: nombre,
                precio: precio,
                cantidad: cantidad
        };
        inventario.push(producto);
        alert("Producto agregado")
    }else{
        alert("La cantida de los precios debe ser positiva ")
    }


}
function mostrarProducto(){
    if(inventario.length === 0){
        alert("Inventario vacio");
    }else{
        let mensaje = "Productos del inventario \n";
        for(let i= 0; i < inventario.length; i ++){
            mensaje +=`Producto: ${i+1}\n`+
            `Nombre: ${inventario[i].nombre}\n`+
            `Precio: ${inventario[i].precio}\n`+
            `Cantidad: ${inventario[i].cantidad}\n`+
            "----------------------------------------";
        }
        alert(mensaje);
}


}

function buscarProducto(){
    let nombre = promt("Ingrese el nombre del producto a buscar: ");
    let producto = inventario.find(producto=>producto.nombre === nombre);
    if(producto){
        alert(`Producto encontrado: ${producto.nombre}\n`+
        `Precio: ${producto.precio}\n`+
        `Cantidad: ${producto.cantidad}`
        );

        
}else{
    alert(`Producto no se encontro: ${nombre}`);
}


}


function MenuInventario() {
    let continuar = true;
    while (continuar) {
        let opcion = mostrarMenu();
        switch (opcion) {
            case 1:
                agregarProducto();
                break;
            case 2:
                mostrarProducto();
                break;
            case 3:
                buscarProducto();
                break;
            case 4:
                eliminarProducto();
                break;
            case 5:
                continuar = false;
                break;
            default:
                alert("Opción inválida");
                break;
        }
    }
    alert("Programa finalizado");
}


manejarFlujoPrograma();
