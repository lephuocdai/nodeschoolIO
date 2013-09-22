// The instruction didn't help !

var crypto = require('crypto').createDecipher('aes256', process.argv[2]);
process.stdin.pipe(crypto).pipe(process.stdout);

