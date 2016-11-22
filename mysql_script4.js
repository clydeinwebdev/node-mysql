var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'test'
});
 
connection.connect();

var attempt = {
  "username" : "joseph"
}
 
connection.query('SELECT * FROM user', 
	function(err, rows, fields) {
  if (err) throw err;
 
  var isValid = false;
  for(i=0;i<rows.length;i++){
    if(attempt.username == rows[i].name){
      isValid = true;
    }
    // console.log('ID: ', rows[i].id);
    // console.log('NAME: ', rows[i].name);
  }

  if(isValid==true)  {
    console.log("Login Successful!");
  }
  else if(isValid==false)  {
    console.log("Invalid Account");
  }

  // console.log('ID: ', rows[0].id);
  // console.log('NAME: ', rows[0].name);

  // console.log('ID: ', rows[1].id);
  // console.log('NAME: ', rows[1].name);

  // console.log('ID: ', rows[2].id);
  // console.log('NAME: ', rows[2].name);

});
 
connection.end();