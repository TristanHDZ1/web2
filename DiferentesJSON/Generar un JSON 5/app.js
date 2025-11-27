    let usuarios = []; // Almacenará los usuarios

    const form = document.getElementById('formUsuario');
    const tabla = document.getElementById('tablaUsuarios');
    const inputArchivo = document.getElementById('importarJSON');
    const btnDescargar = document.getElementById('descargar');

    //  Generar ID consecutivo
    function generarId() {
      return usuarios.length > 0 ? Math.max(...usuarios.map(u => u.id)) + 1 : 1;
    }

    //  Agregar usuario
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const nombre = document.getElementById('nombre').value;
      const correo = document.getElementById('correo').value;

      usuarios.push({ id: generarId(), nombre, correo });
      mostrarUsuarios();
      form.reset();
    });

    //  Mostrar usuarios en tabla
    function mostrarUsuarios() {
      tabla.innerHTML = '';
      usuarios.forEach((user, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${user.id}</td>
          <td contenteditable onblur="editarCampo(${index}, 'nombre', this.textContent)">${user.nombre}</td>
          <td contenteditable onblur="editarCampo(${index}, 'correo', this.textContent)">${user.correo}</td>
          <td><button onclick="eliminarUsuario(${index})">Eliminar</button></td>
        `;
        tabla.appendChild(row);
      });
    }

    //  Editar campo editable
    function editarCampo(index, campo, valor) {
      usuarios[index][campo] = valor.trim();
    }

    //  Eliminar usuario
    function eliminarUsuario(index) {
      if (confirm("¿Seguro que quieres eliminar este usuario?")) {
        usuarios.splice(index, 1);
        mostrarUsuarios();
      }
    }

    //  Importar JSON desde archivo
    inputArchivo.addEventListener('change', function(e) {
      const archivo = e.target.files[0];
      const lector = new FileReader();
      lector.onload = function(e) {
        try {
          const datos = JSON.parse(e.target.result);
          if (Array.isArray(datos)) {
            usuarios = datos;
            mostrarUsuarios();
          } else {
            alert("El archivo no contiene un arreglo JSON válido.");
          }
        } catch (err) {
          alert("Error al leer el archivo: " + err.message);
        }
      };
      lector.readAsText(archivo);
    });

    //  Descargar JSON actual
    btnDescargar.addEventListener('click', function() {
      const blob = new Blob([JSON.stringify(usuarios, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'usuarios_actualizados.json';
      a.click();
      URL.revokeObjectURL(url);
    });