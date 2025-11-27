const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();

// Middleware para procesar datos de formularios
app.use(bodyParser.urlencoded({ extended: false }));

// Configuración de EJS y carpeta de vistas
app.set('views', './views');
app.set('view engine', 'ejs');

// Conexión a la base de datos
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '75891100',
    database: 'node_crud',
    port: 3306
});

// Verificar la conexión
db.connect((err) => {
    if (err) {
        console.error('Error en la conexion:', err);
    } else {
        console.log(' Conexion establecida con la base de datos');
    }
});

// Ruta principal para listar los usuarios
app.get('/', (req, res) => {
    const consulta = 'SELECT * FROM users';
    db.query(consulta, (err, results) => {
        if (err) {
            console.error('Error en la consulta:', err);
            res.send('Error en la consulta a la base de datos');
        } else {
            res.render('index', { users: results });
        }
    });
});

// Servidor
const port = 3008;
app.listen(port, () => {
    console.log(` Servidor: http://localhost:${port}`);
});

//agregar usuario
app.post('/add', (req, res) => {
    const { name, email } = req.body;

    const consulta = 'INSERT INTO users (name, email) VALUES (?, ?)';


    db.query(consulta, [name, email], (err) => {
        if (err) {
            console.error('Error al agregar usuario:', err);
            res.send('Error al agregar usuario');
        } else {
            res.redirect('/');
        }
    });
});


//Slicitar datos del usuario por medio del listado
app.get('/edit/:id', (req, res) => {
    const { id } = req.params; 
    const consulta = 'SELECT * FROM users WHERE id = ?';

    db.query(consulta, [id], (err, results) => {
        if (err) {
            console.error('Error en la petición de datos:', err);
            return res.send('Error en la consulta a la base de datos');
        }
        if (results.length === 0) {
            return res.send('Usuario no encontrado');
        }
        res.render('edit', { user: results[0] });
    });
});

app.post('/update/:id', (req, res) => {
    const {id} = req.params;
    const {name, email} = req.body;
    const consultaUpdate = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
    db.query(consultaUpdate, [name, email, id], (err) => {
        if (err) {
            console.error('Error', err);
            res.send('Error al actualizar usuario');
        }else{
            res.redirect('/');
        }
    });
});

app.get('/delete/:id', (req, res) => {
    const { id } = req.params;
    const consultaElimina = 'DELETE FROM users WHERE id = ?';
    db.query(consultaElimina, [id], (err) => {
        if (err) {
            console.error('Error', err);
            res.send('Error');
        }else
        {
            res.redirect('/');
        }
        });
    });
    
    app.use(express.static('public'));