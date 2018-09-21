
var http = require('http'); //includes the http package 
var url = require('url'); //includes the url package

//start the server
var server = http.createServer().listen(3000);//listens for traffic on port 3000
console.log('Server is running on server 3000')
//create an HTTP server that expects both request and response objects
//as the two arguments to a callback 
server.on('request', function(request, response){ 
    console.log(request.headers);

    var urlObj = url.parse(request.url); 
    var pathname = urlObj.pathname; //parsing the important info in the url

    console.log('Requested ' + pathname);

    //returns a string with the contents of a basic HTML page as a reponse
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write('<!DOCTYPE html>')
    response.write('<html lang="en">');
    response.write('<head>');
    response.write('<meta charset="utf-8">');
    response.write('<title>' + pathname + '</title>');
    response.write('</head>');
    response.write('<body>');
    response.write('<h1> You wanted the ' + pathname + ' path!</h1>');
    response.write('</body>');
    response.write('</html>');
    response.end();

});