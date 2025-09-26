var productos = [
    { nombre: 'camisa', precio: 300 },
    { nombre: 'pantalon', precio: 500 },
    { nombre: 'zapatos', precio: 400 },
    { nombre: 'sombrero', precio: 200 }
];

var carrito = [];

// Función para mostrar el menú de productos (para el usuario)
function mostrarMenuUsuario() {
    var menu = "Seleccione un producto para agregar al carrito:\n";
    for (var i = 0; i < productos.length; i++) {
        menu += (i + 1) + ". " + productos[i].nombre + " - $" + productos[i].precio + "\n";
    }
    menu += (productos.length + 1) + ". Ver Carrito y Total\n";
    menu += (productos.length + 2) + ". Salir\n";
    return menu;
}

// Función para mostrar el menú de administración
function mostrarMenuAdmin() {
    return "Opciones de Administrador:\n1. Agregar Producto\n2. Eliminar Producto\n3. Actualizar Producto\n4. Ver Productos\n5. Salir";
}

// Función para agregar producto al carrito
function agregarAlCarrito(index) {
    var productoSeleccionado = productos[index];
    carrito.push(productoSeleccionado);
    console.log('Producto "' + productoSeleccionado.nombre + '" agregado al carrito.');
}

// Función para mostrar carrito y total
function mostrarCarritoYTotal() {
    if (carrito.length === 0) {
        console.log("El carrito está vacío.");
    } else {
        var mensajeCarrito = "Carrito de compras:\n";
        var total = 0;
        for (var i = 0; i < carrito.length; i++) {
            mensajeCarrito += (i + 1) + ". " + carrito[i].nombre + " - $" + carrito[i].precio + "\n";
            total += carrito[i].precio;
        }
        mensajeCarrito += "\nTotal: $" + total;
        console.log(mensajeCarrito);
    }
}

// Funciones para administración
function agregarProducto() {
    var nombre = prompt("Ingrese el nombre del producto:");
    var precio = Number(prompt("Ingrese el precio del producto:"));
    if (nombre && !isNaN(precio)) {
        productos.push({ nombre: nombre, precio: precio });
        console.log("Producto agregado correctamente.");
    } else {
        console.log("Datos inválidos. Producto no agregado.");
    }
}

function eliminarProducto() {
    var lista = "Seleccione el producto a eliminar:\n";
    for (var i = 0; i < productos.length; i++) {
        lista += (i + 1) + ". " + productos[i].nombre + "\n";
    }
    var opcion = Number(prompt(lista));
    if (!isNaN(opcion) && opcion >= 1 && opcion <= productos.length) {
        console.log('Producto "' + productos[opcion - 1].nombre + '" eliminado.');
        productos.splice(opcion - 1, 1);
    } else {
        console.log("Opción inválida.");
    }
}

function actualizarProducto() {
    var lista = "Seleccione el producto a actualizar:\n";
    for (var i = 0; i < productos.length; i++) {
        lista += (i + 1) + ". " + productos[i].nombre + " - $" + productos[i].precio + "\n";
    }
    var opcion = Number(prompt(lista));
    if (!isNaN(opcion) && opcion >= 1 && opcion <= productos.length) {
        var nuevoNombre = prompt("Ingrese el nuevo nombre del producto:");
        var nuevoPrecio = Number(prompt("Ingrese el nuevo precio del producto:"));
        if (nuevoNombre && !isNaN(nuevoPrecio)) {
            productos[opcion - 1].nombre = nuevoNombre;
            productos[opcion - 1].precio = nuevoPrecio;
            console.log("Producto actualizado correctamente.");
        } else {
            console.log("Datos inválidos. Producto no actualizado.");
        }
    } else {
        console.log("Opción inválida.");
    }
}

// Menú principal
var rol = prompt("Ingrese su rol:\n1. Administrador\n2. Usuario");

if (rol === "1") {
    var opcionAdmin;
    do {
        opcionAdmin = prompt(mostrarMenuAdmin());
        switch (opcionAdmin) {
            case "1":
                agregarProducto();
                break;
            case "2":
                eliminarProducto();
                break;
            case "3":
                actualizarProducto();
                break;
            case "4":
                console.log("Lista de productos:");
                productos.forEach(p => console.log(p.nombre + " - $" + p.precio));
                break;
            case "5":
                console.log("Saliendo del menú de administrador.");
                break;
            default:
                console.log("Opción inválida.");
        }
    } while (opcionAdmin !== "5");
} else if (rol === "2") {
    var opcionUsuario;
    do {
        opcionUsuario = Number(prompt(mostrarMenuUsuario()));
        if (!isNaN(opcionUsuario) && opcionUsuario >= 1 && opcionUsuario <= productos.length) {
            agregarAlCarrito(opcionUsuario - 1);
        } else if (opcionUsuario === productos.length + 1) {
            mostrarCarritoYTotal();
        } else if (opcionUsuario === productos.length + 2) {
            console.log("Gracias por visitar la tienda.");
        } else {
            console.log("Opción no válida, por favor intenta de nuevo.");
        }
    } while (opcionUsuario !== productos.length + 2);
} else {
    console.log("Rol no válido.");
}