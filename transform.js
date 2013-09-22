var through = require('through');

var tr = through(
  function write (buf) {
    this.queue(buf.toString().toUpperCase());
  },
  function end () {  // Optional
    this.queue(null);
});

process.stdin.pipe(tr).pipe(process.stdout);
