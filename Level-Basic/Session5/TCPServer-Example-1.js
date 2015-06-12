// Import the net module
var net = require('net');

/*
 * Creates a new TCP server. The connectionListener argument is automatically set as a 
 * listener for the 'connection' event.

 * net.createServer([options][, connectionListener])
*/

var server = net.createServer(function (connection) {

	/*
	 * Event: 'connection'
	 *         > Socket object The connection object
     *		   Emitted when a new connection is made. socket is an instance of net.Socket.
	*/
	console.log('client connected');

	connection.on('end', function () {
		console.log('client disconnected');
	});

	connection.write('Hello World!\r\n') ;
	connection.pipe(connection);
});

/*
* server.listen(path[, callback])
* Start a local socket server listening for connections on the given path.
*/
server.listen(7070, function () {
	console.log('server is listening');
});