//Import the 'fs' module
var fs = require('fs');

//File path
var filePath = 'input.xml';

console.log('Start Reading....');

//Read the file
fs.readFile(filePath, function (err, data) {
	if (err) {
		console.error("Could not open file: %s", err);
		return;
	}

	console.log('Reading Done but Writing Starts....');

	//Write to a file
	fs.writeFile('output.xml', data, function (err) {
		if (err) {
			console.error("Could not open file: %s", err);
		}
	});
});
console.log('After Read-Write....');