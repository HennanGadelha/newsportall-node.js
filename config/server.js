const express = require('express');
const app = express();
const consign = require('consign');
const bodyParser = require('body-parser');



app.set('view engine', 'ejs');
app.set('views', './app/views');

//config body parser
    app.use(bodyParser.urlencoded({extended: false}));


// realizando auto-loads
    consign().include('app/routes')
        .then('config/dbConnection.js')
        .then('app/models').into(app);


module.exports = app;