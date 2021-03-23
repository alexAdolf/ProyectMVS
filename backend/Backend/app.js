'use strict'

//cargar modulos de node para crear servidor

var express = require('express');
const bodyParser = require('body-parser');
const { restart } = require('nodemon');

// ejecutar express (http)
var app = express();

//cargar ficheros

var article_routes = require('./routes/article');

//middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//cors

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//Añadir prefijos a rutas / cargar rutas

app.use('/api', article_routes);

/*app.use('/', article_routes);*/



/*app.use(article_routes);*/ // otra forma


// Rutas o metodos de prueba para API REST

/*app.post('/probando', (req, res) => {
    var hola = req.body.hola;

    return res.status(200).send({
        curso: 'Master en Frameworks Js',
        autor: 'Adolfo astorga',
        url: 'adolfo.cl',
        hola
    })
});
*/

//exportar modulo
module.exports = app;