var orm = require('../config/orm.js');

module.exports = {
    getAll: function(cb) {
        orm.selectAll('burgers', function(res) {
            cb(res);
        })
    },

    create: function(name, cb) {
        orm.insertOne('burgers', ['burgerName, devoured'], [name, false], function(res) {
            cb(res);
        })
    },

    devour: function(id, cb) {
        orm.updateOne('burgers', {devoured: true}, 'id = ' + id, function(res) {
            cb(res);
        })
    }
}