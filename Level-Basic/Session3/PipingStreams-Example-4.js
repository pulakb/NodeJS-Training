var http = require('http');
var fs = require("fs");

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type' : 'image/png'});

	fs.createReadStream('./50.png').pipe(res);
}).listen(2000);
