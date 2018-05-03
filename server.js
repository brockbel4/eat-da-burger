// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var burgerController = require('./controllers/burgersController.js');
var handlebars = require('express-handlebars');

var PORT = process.env.PORT || 8080;

var app = express();

app.engine('handlebars', handlebars({ defaultLayout: 'main' }));

app.set('view engine', 'handlebars');

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(burgerController);

app.listen(PORT, function() {
    console.log('Listening on port: ' + PORT);
});