CREATE DATABASE ProyectoWEB2;
USE ProyectoWEB2;

CREATE TABLE usersLogin (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE personasTabla (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100),
    apellidos VARCHAR(100),
    correo VARCHAR(150),
    edad INT
);
