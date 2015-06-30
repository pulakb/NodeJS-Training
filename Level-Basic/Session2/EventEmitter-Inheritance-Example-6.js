// To use the HTTP server and client one must require('http').
var http = require("http");

/*
* http.createServer([requestListener])
* Returns a new instance of http.Server.
*
* This is an EventEmitter with event like 'request', 'connection', 'close'
* */
var server = http.createServer();
 
/*
* When the server instance gets the request from your browser, 
* it emits a "request" event, an event that our listener will 
* receive and can act upon.
*/

server.on("request", function (req, res) {
    res.end("this is the response");
});
 
server.listen(3000);