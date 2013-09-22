var split = require('split');
var through = require('through');
count = 1;

process.stdin
  .pipe(split())
  .pipe(through( function write(line) {
    this.queue( (count % 2 === 0)
               ? line.toString().toUpperCase() + '\n'
               : line.toString().toLowerCase() + '\n');
    count += 1;
}))
  .pipe(process.stdout);
