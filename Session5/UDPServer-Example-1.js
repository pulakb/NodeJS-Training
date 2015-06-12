var dgram = require('dgram');
var server = dgram.createSocket('udp4');

//Listen for "message" event
server.on('message', function (message) {
	console.log('received a message ' + message);
});

server.on("listening", function () {
    var address = server.address();
    console.log("I am listening on " + 
        address.address + ":" + address.port);
});

// Listen for error events on the socket. When we get an error, we
// want to be sure to CLOSE the socket; otherwise, it's possible that
// we won't be able to get it back without restarting the process.

server.on("error", function (error) {
	server.close();
});

//Bind to a port 4000
var port = 4000;
server.bind(port);