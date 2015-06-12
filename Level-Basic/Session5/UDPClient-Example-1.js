var dgram = require('dgram');
var client = dgram.createSocket('udp4');

var message = new Buffer('my diagram');
client.send(message, 0, message.length, 4000,
	'localhost', function (err, bytes) {
		if (err) {
			throw err;
		}

		//Reuse the message buffer or close client
		client.close();
	});

// http://www.graemeboy.com/node-udp