


    // Referencia al formulario y botón de descarga
    const form = document.getElementById('userForm');
    const salida = document.getElementById('salidaJSON');
    const descargarBtn = document.getElementById('descargarBtn');

    // Inicializar el arreglo de usuarios desde localStorage
    // localStorage.getItem('usuarios') obtiene los datos almacenados como string
    // JSON.parse() convierte el string en un array de objetos JS
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Mostrar los usuarios guardados en pantalla (si los hay)
    mostrarUsuarios();

 
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Evita que el formulario recargue la página

      // Obtener los valores ingresados en los campos
      const nombre = document.getElementById('nombre').value;
      const correo = document.getElementById('correo').value;

      // Crear un objeto que representa al nuevo usuario
      const nuevoUsuario = {
        nombre: nombre,
        correo: correo
      };

      // Agregar al array de usuarios
      usuarios.push(nuevoUsuario);

      // Guardar el array actualizado en localStorage
      // JSON.stringify convierte el array en un texto JSON
      localStorage.setItem('usuarios', JSON.stringify(usuarios));

      // Mostrar en pantalla el JSON actualizado
      mostrarUsuarios();

      // Limpiar el formulario
      form.reset();
    });

    function mostrarUsuarios() {
      // JSON.stringify con formato legible (espacios)
      salida.textContent = JSON.stringify(usuarios, null, 2);
    }

 
    descargarBtn.addEventListener('click', function () {
      // Convertir el array de objetos a texto JSON
      const contenidoJSON = JSON.stringify(usuarios, null, 2);

      // Crear un objeto Blob con el contenido
      // Blob es un contenedor de datos binarios (texto plano en este caso)
      const blob = new Blob([contenidoJSON], { type: "application/json" });

      // Crear una URL temporal que apunta al Blob
      const url = URL.createObjectURL(blob);

      // Crear un enlace <a> invisible para forzar la descarga
      const enlace = document.createElement('a');
      enlace.href = url;
      enlace.download = 'usuarios.json'; // Nombre del archivo
      enlace.click(); // Ejecutar descarga

      // Liberar la URL temporal (buena práctica)
      URL.revokeObjectURL(url);
    });
