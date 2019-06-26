const express = require('express');
const app = express();
const consign = require('consign');
const bodyParser = require('body-parser');



app.set('view engine', 'ejs');
app.set('views', './app/views');

//config body parser
    app.use(bodyParser.urlencoded({extended: false}));

//mapeando arquivos estaticos

    app.use(express.static('./app/public'));

// realizando auto-loads
    consign().include('app/routes')
        .then('config/dbConnection.js')
        .then('app/controllers')
        .then('app/models').into(app);


module.exports = app;