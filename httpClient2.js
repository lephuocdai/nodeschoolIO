var request = require('request');
var localhost = 'http://localhost:8000/';
var google = 'http://google.com/'; // Just in case
var r = request.post(url);
process.stdin.pipe(r).pipe(process.stdout);
