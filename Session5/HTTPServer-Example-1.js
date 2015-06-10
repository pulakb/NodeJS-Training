//Import 'http' module
var http = require("http");

/*
 * http.createServer([requestListener])
 * Returns a new instance of http.Server.

 * The requestListener is a function which is automatically added to the 'request' event.
*/

var server = http.createServer(function (req, res) {
  res.writeHead(200, {"Content-Type": "text/html"});
  res.write("<!DOCTYPE 'html'>");
  res.write("<html>");
  res.write("<head>");
  res.write("<title>Hello World Page</title>");
  res.write("</head>");
  res.write("<body>");
  res.write("Hello World!");
  res.write("</body>");
  res.write("</html>");
  res.end();
});

/*
 * server.listen(port[, hostname][, backlog][, callback])
 * Begin accepting connections on the specified port and hostname. If the hostname is omitted, 
 * the server will accept connections directed to any IPv4 address (INADDR_ANY).
*/
server.listen(7653, function () {
	console.log('Server is listening');
});

// hit http://localhost:7653/ in the browser