/*
* Basic Server with router definition,
*
* url - this module is used to to parse interpret and manipulate urls
* */


var http = require("http");
var url = require('url');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    console.log('connection');

    var path = url.parse(req.url).pathname;
    console.log(path);

    switch(path) {
        case '/':
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('hello world!');
            break;

        case '/socket.html':
            fs.readFile(__dirname + path, function (err, data) {
               console.log(data.toString());

                if (err){
                    res.writeHead(404);
                    res.write('This File Does not exist - 404');
                } else {
                    res.writeHead(200, {'Content-Type': 'text/plain'});
                    res.write("<strong>hello</strong>", "utf8");
                }
            });
            break;
        default:
            res.writeHead(404);
            res.write('File Does not exist - 404');
            break;
    }

    res.end();
});

server.listen(8001);
