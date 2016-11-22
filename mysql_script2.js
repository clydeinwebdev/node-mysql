var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'test'
});
 
connection.connect();
 
connection.query('SELECT * FROM user', 
	function(err, rows, fields) {
  if (err) throw err;
 
  console.log('ID: ', rows[0].id);
  console.log('NAME: ', rows[0].name);

  console.log('ID: ', rows[1].id);
  console.log('NAME: ', rows[1].name);

  console.log('ID: ', rows[2].id);
  console.log('NAME: ', rows[2].name);

});
 
connection.end();