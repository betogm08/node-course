const express = require('express');
const morgan = require('morgan');
const app = express();
const hbs = require('hbs');

app.use(morgan('dev'));
app.use(express.static(__dirname+'/public'));

app.set('view engine', 'hbs');

hbs.registerHelper('getDate', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizacion', (texto) => {
    let palabras = texto.split(' ');

    palabras.forEach((palabra, i) => {
        palabras[i] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');
});

hbs.registerPartials(__dirname + '/views/partials');

app.get('/', function(req, res){
    res.render('home', {
        title: 'Home Page',
        nombre: 'Oscar'
    });
});

app.get('/about', function(req, res){
    res.render('about', {
        title: 'About Page'
    });
});

app.listen(3000, () => {
    console.log("Escuchando en el puerto 3000");
});