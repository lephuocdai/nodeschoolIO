var tar = require('tar');
var through = require('through');
var crypto = require('crypto');
var zlib = require('zlib');

var parser = tar.Parse();
parser.on('entry', function(entry) {
  if (entry.type !== 'File') return;
  var h = crypto.createHash('md5', { encoding: 'hex'});  
  entry.pipe(h).pipe(through (null, end)).pipe(process.stdout);
  function end () { this.queue(' ' + entry.path + '\n') }
});

process.stdin
  .pipe(crypto.createDecipher(process.argv[2], process.argv[3]))
  .pipe(zlib.createGunzip())
  .pipe(parser);


