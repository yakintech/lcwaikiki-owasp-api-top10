var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'example.org',
  user     : 'yourusername',
  password : 'yourpassword',
  database : 'yourdatabase'
});

connection.connect();

var userId = 'example_user'; // Kullanıcı girdisi
var sql = 'SELECT * FROM users WHERE id = ?';
connection.query(sql, [userId], function (error, results, fields) {
  if (error) throw error;

});

connection.end();
