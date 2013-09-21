var fs = require('fs');

//var str = fs.readFileSync(process.argv[2]).toString() ;
// console.log(str.split("\n").length);
console.log(fs.readFileSync(process.argv[2], 'utf8').split("\n").length);


