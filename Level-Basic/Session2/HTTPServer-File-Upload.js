/*
* File Upload Example
* */

var http = require('http');
/*
* formidable is a streaming parser meaning it can accept chunks of data as they arrive,
 * parse them and emit specific parts.
* */
var formidable = require('formidable');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    switch (req.method) {
        case 'GET':
            show(req, res);
            break;
        case 'POST':
            upload(req, res);
    }
});

function show (req, res) {
    var html = ''
    + '<form method="post" action="/" encType="multipart/form-data">'
    + '<p><input type="text" name="name" /></p>'
    + '<p><input type="file" name="file" /></p>'
    + '<p><input type="submit" value="Upload" /></p>'
    +'</form>';

    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Length', Buffer.byteLength(html));
    res.end(html);
}

function upload(req, res) {
    if (!isFormData(req)) {
        res.statusCode = 400;
        res.end('Bad Request');
        return;
    }

    /*
    * Create an instance of formidable.IncomingForm form and then use form.parse(req)
    * */
    var form = new formidable.IncomingForm();

    //The IncomingForm object has many events

    form.on('field', function (field, value) {
        console.log(field);
        console.log(value);
    });

    form.on('file', function (name, file) {
        console.log(name);
        console.log(file);

        //Copy file to a directory, 'uploads'
        fs.readFile(file.path, function (err, data) {
         var newPath = __dirname +"/uploads/"+file.name;

         fs.writeFile(newPath, data, function (err) {
             if (err) throw err;
         });
        });
    });

    form.on('end', function() {
        res.end('upload complete');
    });

    form.parse(req);
}

/*
* The following helper function checks the Content-Type header field for the multipart/form-data
 * by using the JavaScript String.indexOf() method to assert that multipart/form-data is at the
 * beginning of the field's value
*
* */
function isFormData(req) {
    var type = req.headers['content-type'] || '';
    return 0 == type.indexOf('multipart/form-data');
}

server.listen(7653, function () {
    console.log('Server is listening');
});
