// mysql package
var mysql = require('mysql');

// connecting to database
var connection = mysql.createConnection({
  host: process.env.dbHost,
  user: process.env.dbUser,
  password: process.env.dbPassword,
  database: process.env.db
});

// Error handling and success console
connection.connect(function(err) {
    if (err) {
        throw err.stack;
    }

    console.log('Connected as id ' + connection.threadId);
});

// Exporting the connection to the database
module.exports = connection;