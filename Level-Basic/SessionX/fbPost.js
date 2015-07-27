var https = require('https');
    
function postToFacebook(str, cb) {
  var req = https.request({
    host: 'graph.facebook.com',
    path: '/me/feed',
    method: 'POST'
  }, function(res) {
    res.setEncoding('utf8');
    res.on('data', function(chunk) {
      console.log('got chunk '+chunk);
    });
    res.on('end', function() {
      console.log('response end with status '+res.status);
    });
  });

  req.end('message='+encodeURIComponent(str)
    +'&access_token='+encodeURIComponent('CAACEdEose0cBADnnMFSGdSGB865HJOTs0sduNSIkINZBvZAsGe9LcssD2ssWqjL4aFwyMB6Tu4ZCvxiuEGvUNUcmfMIzWLjhuP7QWn0DfVSZCEvfoMJXDcRXMcVWJ94B7I2B7hqCiFUG6cSFNvtx1t8QO1owjpnmZCqZApfG0fVM0qETx66HEbYhfAoslVCrYZD'));
   
   console.log('hello') ;
}

postToFacebook('test from my personal server');