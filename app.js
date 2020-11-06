// use strict para usar las novedades de javascrypt
'use strict'

// para usar las librerias
var express = require('express');
var bodyParser = require('body-parser');

// así caregamos el framework express que es el encargado de realizar el enrutado (http)
var app = express();

// cargar rutas

// middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


// cors

// rutas

// Creamos una ruta para poder probar la accion

app.get('/', (req, res) => {
    res.status(200).send({
        message: 'Hola mundo desde el servidor de NodeJS'
    });
});

app.get('/pruebas', (req, res) => {
    res.status(200).send({
        message: 'Acción de pruebas en el servidor de NodeJS'
    });
});

// exportar
module.exports = app;