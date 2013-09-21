// You should upgrade node to v0.10.18 to execute the code

var http = require('http');
var fs = require('fs');

var server = http.createServer ( function(req, res) {
  fs.createReadStream(process.argv[2]).pipe(res);
}).on('error', function(err) {
  console.log('server error', err);
}).listen(8000);


