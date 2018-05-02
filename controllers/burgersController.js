var express = require('express');
var Burger = require('../models/burger.js');

var router = express.Router();

router.get('/', function(req, res) {
    Burger.getAll(function(results) {
        res.render('index', {burgers: results});
    })
});

router.post('/burger', function(req, res) {
    var burgerName = req.body.burgerName;
    Burger.create(burgerName, function(results) {
        res.redirect('/');
    })
});

router.post('/burger/:id', function(req, res) {
    Burger.devour(req.params.id, function(results) {
        res.redirect('/');
    })
});

module.exports = router;