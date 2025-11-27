
    // Array donde se guardarán los usuarios
    const usuarios = [];

    // Obtener el formulario y el área de salida
    const form = document.getElementById('userForm');
    const salida = document.getElementById('salidaJSON');

    // Evento al enviar el formulario
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Evita que la página se recargue

      // Obtener los valores del formulario
      const nombre = document.getElementById('nombre').value;
      const correo = document.getElementById('correo').value;

      // Crear objeto usuario
      const nuevoUsuario = {
        nombre: nombre,
        correo: correo
      };

      // Guardar en el array
      usuarios.push(nuevoUsuario);

      // Mostrar el JSON en pantalla (formateado)
      salida.textContent = JSON.stringify(usuarios, null, 2);

      // Opcional: limpiar el formulario
      form.reset();
    });
