'use strict'

var mongoose = require ('mongoose');
var app = require('./app'); // De esta manera recogemos lo que tenemos en el fichero app que es el que tiene el framework express
var port = 3800;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/red_social', { useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => {
            console.log("La conexion a la base de datos red_social se ha realizado correctamente!!!")

            // Creamos el servidor mediante el framework express que lo llamamos mediante app
            app.listen(port, () => {
                console.log("servidor ejecutandose correctamente en http://localhost:3800");
            });

        })
        .catch(err => console.log(err));