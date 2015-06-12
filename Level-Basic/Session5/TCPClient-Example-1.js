// Import the net module
var net = require('net');

/*
 * net.connect(port[, host][, connectListener])
 
 * Creates a TCP connection to port on host. If host is omitted, 'localhost' will be assumed. 
 * The connectListener parameter will be added as an listener for the 'connect' event.

 * Is a factory method which returns a new 'net.Socket'. 
*/
var client = net.connect({port: 7070}, function () {
	console.log('connected to server');
});

client.on('data', function (data) {
	console.log(data.toString());
	client.end();
});

client.on('end', function () {
	console.log('disconnected from server');
});