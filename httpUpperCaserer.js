var http = require('http');
var map = require('through2-map');

http.createServer(function (req, res) {
  if (req.method != 'POST')
    return req.end('Not a POST request, send me a POST request!');
  req.pipe(map(function (chunk){
   // return chunk.toString().toUpperCase().split('').join('');
    return chunk.toString().toUpperCase();
  })).pipe(res);
}).listen(8000);

