# node-mysql
Sample Guide for Node and MySQL

Part 1
1. Use XAMPP and Start Apache and MySQL
2. Click MySQL Admin button
3. Choose test database then create a `user` table that contain columns `id` and `name`

Part 2
4. Dowload tools at 172.30.10.135/st
   Sublime and GitBash
5. Open git bash then follow the commands

```
	$ cd /d
	$ mkdir lastname
	$ cd lastname
	$ npm init -y
	$ npm install --save-dev mysql
	wait until it will finish downloading...
```

6. Navigate /d/lastname folder and drag it to sublime text editor
7. Create new file `mysql_script1.js`
8. Write the sample mysql script file

```
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'test'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', 
	function(err, rows, fields) {
  if (err) throw err;
 
  console.log('The solution is: ', rows[0].solution);
});
 
connection.end();
```

9. Using git bash, run your script using the following command
	$ node mysql_script1
10. Create another script `mysql_script2.js` with the following codes

```
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
 
  console.log('The first user name is: ', 
  rows[0].name);
  console.log('The second user name is: ', rows[1].name);
});
 
connection.end();
```

11. Modify the script so that it will display the two users with their corresponding id's

```
Sample Console Output

ID: 1
NAME: clyde

ID: 2
NAME: rj

```

12. Create another script `mysql_script3.js` with the following codes

```
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'test'
});
 
connection.connect();
 
connection.query(
	'INSERT INTO user VALUES("","dada")', 
	function(err, rows, fields) {
  if (err) throw err;
 
  console.log('Row has been inserted!')
});
 
connection.end();
```

13. Run mysql_script3 then run mysql_script2 and include a code that will display the third username. Observe that `dada` is inserted in the list.

