
    const form = document.getElementById('userForm');
    const salida = document.getElementById('salidaJSON');

    //  Recuperar datos desde localStorage si existen
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Mostrar los datos almacenados en pantalla
    mostrarUsuarios();

    //  Evento al enviar el formulario
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Obtener valores del formulario
      const nombre = document.getElementById('nombre').value;
      const correo = document.getElementById('correo').value;

      const nuevoUsuario = { nombre, correo };

      // Agregar al array y guardar en localStorage
      usuarios.push(nuevoUsuario);
      localStorage.setItem('usuarios', JSON.stringify(usuarios));

      // Mostrar en pantalla
      mostrarUsuarios();

      form.reset();
    });

    //  Función para mostrar los usuarios guardados
    function mostrarUsuarios() {
      salida.textContent = JSON.stringify(usuarios, null, 2);
    }
