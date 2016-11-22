# node-mysql
Sample Guide for Node and MySQL


###Part 1

* Use XAMPP and Start Apache and MySQL
* Click MySQL Admin button
* Choose test database then create a `user` table that contain columns `id` and `name`

###Part 2

* Dowload tools at 172.30.10.135/st (Sublime and GitBash)
* Open git bash then follow the commands

```
	$ cd /d
	$ mkdir lastname
	$ cd lastname
	$ npm init -y
	$ npm install --save-dev mysql
	wait until it will finish downloading...
```

* Navigate /d/lastname folder and drag it to sublime text editor
* Create new file `mysql_script1.js`
* Write the sample mysql script file

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

* Using git bash, run your script using the following command
	$ node mysql_script1
* Create another script `mysql_script2.js` with the following codes

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

* Modify the script so that it will display the two users with their corresponding id's

```
Sample Console Output

ID: 1
NAME: clyde

ID: 2
NAME: rj

```

* Create another script `mysql_script3.js` with the following codes

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

* Run mysql_script3 then run mysql_script2 and include a code that will display the third username. Observe that `dada` is inserted in the list.

