var express = require('express'),
app = express();

app.route('/').get(function(req,res,next) {
	res.send('Hello World');
})

app.listen(3000,function(){
	console.log('ChitChat working on port 3000');
})