//Load the 'fs' module
var fs = require('fs');

//Read the contents of the file in the memory
fs.readFile('example_log.txt', function (err, data) {
	if (err) {
		return;
	}

	//data is a Buffer, convert to string
	var text = data.toString();

	var results = {};

	var lines = text.split('\n');

	lines.forEach(function (line) {
		var parts = line.split(' ');
		var letter = parts[1];
		var count = parseInt(parts[2]);

		if (!results[letter]) {
			results[letter] = 0;
		}

		results[letter] += parseInt(count);
	});

	console.log(results);
});