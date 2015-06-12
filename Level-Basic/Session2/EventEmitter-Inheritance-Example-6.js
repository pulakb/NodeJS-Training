var http = require("http");
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