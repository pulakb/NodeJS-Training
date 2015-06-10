// Import the net module
var net = require('net');

/*
 * Class: net.Socket
 * This object is an abstraction of a TCP or local socket. net.Socket instances implement a 
 * duplex Stream interface. They can be created by the user and used as a client (with connect()) 
 * or they can be created by Node and passed to the user through the 'connection' event of a server.

 * new net.Socket([options])
 * Construct a new socket object.
*/

var client = new net.Socket();

client.connect(1345, '127.0.0.1', function () {
	console.log('connected');
	client.write('Hello server!');
});

client.on('data', function (data) {
	console.log('Received :' + data);
	
	/* Ensures that no more I/O activity happens on this socket. Only necessary in case of errors 
	 * (parse error or so).
	 */
	client.destroy();
});

client.on('close', function () {
	console.log('Connection closed');
});