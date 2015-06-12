var fs = require('fs');
var data = 'Node.js is facinating to learn.';

//Create a writable stream
var writeStream = fs.createWriteStream('output.txt');

//Write the data to stream with encoding to be utf8
writeStream.write(data, 'UTF8');

// Mark the end of file
writeStream.end();

//Handle the stream events like finish, error
writeStream.on('finish', function () {
	console.log('Write Completed');
});

//Handle the stream events like finish, error
writeStream.on('error', function (err) {
	console.log(err.stack);
});

console.log('Program Ended');