var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
	getTitles(res);
}).listen(2000);

function getTitles(res) {
	fs.readFile('./titles.json', function (err, data) {
		if (err) {
			return hadError(err, res);
		}

        /*
        * The JSON.parse() method parses a string as JSON, i.e. it returns
        * the object corresponding to the given text.
        * */

		getTemplate(JSON.parse(data.toString()), res);
	});
}

function getTemplate(titles, res) {
	fs.readFile('./template.html', function (err, data) {
		if (err) {
			return hadError(err, res);
		}

		formatHTML(titles, data.toString(), res);
	});	
}

function formatHTML(titles, tmpl, res) {
	var html = tmpl.replace('%', titles.join('</li><li>'));
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end(html);
}

function hadError(err, res) {
	console.error (err);
	res.end('Server Error');
}