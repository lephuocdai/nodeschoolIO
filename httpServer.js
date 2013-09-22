var http = require('http');
var through = require('through');
var tr = through(
  function write (buf) {
    this.queue(buf.toString().toUpperCase());
  },
  function end () {  // Optional
    this.queue(null);
});
var server = http.createServer(function (req, res){
  if (req.method == 'POST') 
    req.pipe(tr).pipe(res);
  else res.end('send me POST\n');
}).listen(8000);
