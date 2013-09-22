// You might encounter the followig issue:
// Error: EACCES, permission denied '/Users/lephuocdai/.nvm/v0.10.18/lib/node_modules/stream-adventure/problems/meet_pipe/data.txt'
// To fix: you just make the 'node_modules' or only the 'stream-adventure' reachable by
// sudo chmod -R 777 /Users/lephuocdai/.nvm/v0.10.18/lib/node_modules/
var fs = require('fs');
fs.createReadStream(process.argv[2]).pipe(process.stdout);

