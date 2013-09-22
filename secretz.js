var tar = require('tar');
var through = require('through');
var crypto = require('crypto').createHash('md5', { encoding: 'hex'});
var zlib = require('zlib');

var parser = tar.Parse();
parser.on('entry', function(entry) {
  if (entry.type !== 'File') return;  
  entry.pipe(crypto).pipe(through (null, end)).pipe(process.stdout);
  function end () { this.queue(' ' + entry.path + '\n') }
});

process.stdin
  .pipe(crypto.createDecipher(process.argv[2], process.argv[3]))
  .pipe(zlib.createGunzip())
  .pipe(parser);


