 // Obtener los elementos del DOM
    const form = document.getElementById('userForm');
    const salida = document.getElementById('salidaJSON');
    const descargarBtn = document.getElementById('descargarBtn');

    // Recuperar usuarios guardados en localStorage o iniciar con un array vacío
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Mostrar los usuarios en pantalla al cargar
    mostrarUsuarios();

    // Evento que se ejecuta cuando el usuario envía el formulario
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Evita que se recargue la página

      // Obtener valores del formulario
      const nombre = document.getElementById('nombre').value;
      const correo = document.getElementById('correo').value;

      // Crear un objeto con los datos ingresados
      const nuevoUsuario = { nombre, correo };

      // Agregar el objeto al array de usuarios
      usuarios.push(nuevoUsuario);

      // Guardar el array actualizado en localStorage (como cadena JSON)
      localStorage.setItem('usuarios', JSON.stringify(usuarios));

      // Mostrar el contenido actualizado en pantalla
      mostrarUsuarios();

      // Limpiar los campos del formulario
      form.reset();
    });

    // Evento para descargar los datos como un archivo JSON
    descargarBtn.addEventListener('click', function () {
      // Convertir el array de usuarios a texto JSON con formato
      const blob = new Blob([JSON.stringify(usuarios, null, 2)], {
        type: "application/json"
      });

      // Crear una URL temporal para el archivo
      const url = URL.createObjectURL(blob);

      // Crear un enlace invisible y simular clic para descargar
      const enlace = document.createElement('a');
      enlace.href = url;
      enlace.download = 'usuarios.json'; // Nombre del archivo
      enlace.click(); // Ejecutar descarga

      // Liberar memoria eliminando la URL temporal
      URL.revokeObjectURL(url);
    });

    // Función para mostrar el contenido del JSON en pantalla
    function mostrarUsuarios() {
      salida.textContent = JSON.stringify(usuarios, null, 2);
    }