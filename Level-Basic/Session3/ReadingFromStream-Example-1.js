var fs = require('fs');
var data = '';

//Create a readable stream
var readStream = fs.createReadStream('input.txt');

//Set the encoding to be utf8
readStream.setEncoding('UTF8');

//Handle Stream events like data, end and error
readStream.on('data', function (chunk) {
	data += chunk;
});

//Handle Stream event end
readStream.on('end', function () {
	console.log('end');
	console.log(data);
});

//Handle Stream event error
readStream.on('error', function (err) {
	console.log(err.stack);
});

console.log("Program Ended");