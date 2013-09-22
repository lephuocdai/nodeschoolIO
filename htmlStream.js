var trumpet = require('trumpet');
var through = require('through');
var tr = trumpet();

var th = through(function write (buf) {
  this.queue(buf.toString().toUpperCase());
});

var loud = tr.select('.loud').createStream();
loud.pipe(th).pipe(loud);

process.stdin.pipe(tr).pipe(process.stdout);
