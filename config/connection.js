// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "testtest",
  database: "burgers_db"
});

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);

} else {
  connection = mysql.createConnection({
    host: 'otmaa16c1i9nwrek.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'jni7pe3mjyea7cf5',
    password: 'nfwu4aboany9zga6',
    database: 'nfwu4aboany9zga6'

  })
}

// Make connection.
connection.connect(function(err){
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;