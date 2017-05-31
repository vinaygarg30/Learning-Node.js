// To run an existing website on the Node Server. 
// Save this BasicServer.js inside the website core folder

var http = require('http'),
	fs = require('fs'),
	path = require('path'),
    hostname = '127.0.0.1',
    port = 9000;

// Various extension types depending on the Website folder
var mimes = {
	".html" : "text/html",
	".css" : "text/css",
	".js" : "text/javascript",
	".png" : "image/png",
	".jpg" : "image/jpg"
}
var server = http.createServer(function(req,res){
	//To set the URL path to open the requested file as per context path
	//Eg. 127.0.0.1:9000/1.jpg
	var filepath = (req.url === '/') ? ('./index.html') : ('.' + req.url);

	//Extract the content type from the req URL and search the corresponding content type from array
	var contentType = mimes[path.extname(filepath)];
	// File exists function check for the existence of the file. Pass the file path and callback function, 
	//		if exists -> read and serve
	//		else -> error message 
	fs.exists(filepath,function(file_exists){
		if(file_exists){
		
	// Read and serve
			fs.readFile(filepath,function(error,content){
				if(error){
					res.writeHead(500);
					res.end();
				}
				else{
					res.writeHead(200, {'Content-Type' : contentType});
					res.end(content,'utf-8');

				}
			})
		}
		else{
			res.writeHead(404);
			res.end('Sorry we cannot find the file');
		}
	})
}).listen(port,hostname,function(){
	console.log('Server is running at 127.0.0.1:9000');
})