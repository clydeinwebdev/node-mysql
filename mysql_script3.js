var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'test'
});
 
connection.connect();
 
connection.query(
	'INSERT INTO user VALUES("","jhong")', 
	function(err, rows, fields) {
  if (err) throw err;
 
  console.log('Row has been inserted!');

});
 
connection.end();