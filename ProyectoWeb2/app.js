require('dotenv').config();  

const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser'); 
const session = require('express-session');
const bcrypt = require('bcrypt');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use(session({
    secret: process.env.SESSION_SECRET || 'defaultsecret',
    resave: false,
    saveUninitialized: false
}));


app.set('views', './views');
app.set('view engine', 'ejs');


//conexion
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

db.connect(err => {
    if (err) {
        console.log("Error conectando a MySQL:", err);
    } else {
        console.log("Base de datos conectada correctamente");
    }
});

// proteccion
function checkAuth(req, res, next) {
    if (!req.session.user) return res.redirect('/login');
    next();
}

app.get('/', (req, res) => {
    res.redirect('/login');
});

//seccion de login
app.get('/login', (req, res) => {
    res.render('login', { error: null });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const sql = "SELECT * FROM usersLogin WHERE username = ?";
    db.query(sql, [username], async (err, results) => {
        if (err) {
            console.log(err); 
            return res.send("Error en BD");
        }

        if (results.length === 0) {
            return res.render('login', { error: "Usuario no encontrado" });
        }

        const user = results[0];
        const valid = await bcrypt.compare(password, user.password);

        if (!valid) {
            return res.render('login', { error: "Contraseña incorrecta" });
        }

        req.session.user = user;
        res.redirect('/panel');
    });
});

//registro
app.get('/register', (req, res) => {
    res.render('register', { error: null });
});

app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    const hash = await bcrypt.hash(password, 10);

    const sql = "INSERT INTO usersLogin (username, password) VALUES (?, ?)";

    db.query(sql, [username, hash], err => {
        if (err) return res.render("register", { error: "El usuario ya existe o error en BD" });
        res.redirect('/login');
    });
});

//panel
app.get('/panel', checkAuth, (req, res) => {
    db.query("SELECT * FROM personasTabla", (err, results) => {
        if(err) {
            console.log(err);
            return res.send("Error al obtener personas");
        }
        res.render('panel', { 
            user: req.session.user, 
            people: results 
        });
    });
});



//Seccion del CRUD

//crear
app.post('/addPerson', checkAuth, (req, res) => {
    const { nombre, apellidos, correo, edad } = req.body;
    const sql = "INSERT INTO personasTabla (nombre, apellidos, correo, edad) VALUES (?, ?, ?, ?)";
    db.query(sql, [nombre, apellidos, correo, edad], (err) => {
        if(err) console.log(err);
        res.redirect('/panel');
    });
});

//actualizar
app.get('/editPerson/:id', checkAuth, (req, res) => {
    db.query("SELECT * FROM personasTabla WHERE id = ?", [req.params.id], (err, result) => {
        if(err || result.length === 0) return res.redirect('/panel');
        res.render('editPerson', { person: result[0] });
    });
});

app.post('/updatePerson/:id', checkAuth, (req, res) => {
    const { nombre, apellidos, correo, edad } = req.body;
    const sql = "UPDATE personasTabla SET nombre=?, apellidos=?, correo=?, edad=? WHERE id=?";
    db.query(sql, [nombre, apellidos, correo, edad, req.params.id], (err) => {
        if(err) console.log(err);
        res.redirect('/panel');
    });
});

//eliminar
app.get('/deletePerson/:id', checkAuth, (req, res) => {
    db.query("DELETE FROM personasTabla WHERE id = ?", [req.params.id], (err) => {
        if(err) console.log(err);
        res.redirect('/panel');
    });
});

//salir
app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/login');
});


//servidor
const PORT = process.env.PORT || 3008;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});