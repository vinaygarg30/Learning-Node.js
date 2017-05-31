var express = require('express'),
	app = express(),
	path = require('path')

//sets up key value pairs where key = views folder, path = current directory
app.set('views',path.join(__dirname,'views'));

//To use hogan template engine to render the files
app.engine('html',require('hogan-express'));
app.set('view engine','html');

//To find static asset files, we need express static module
app.use(express.static(path.join(__dirname,'public')));

// Call the route module with the express, app parameters
require('./routes/routes.js')(express,app);

app.listen(3000,function(){
	console.log('ChitChat working on port 3000');
})