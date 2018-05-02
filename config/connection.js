// mysql package
var mysql = require('mysql');
var connection;

// connecting to database
if(proecess.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
    connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "burgers_db"
    });
}

// Error handling and success console
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }

    console.log('Connected as id ' + connection.threadId);
});

// Exporting the connection to the database
module.exports = connection;