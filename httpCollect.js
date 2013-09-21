var http = require('http');
var bl = require('bl');
var concat = require('concat-stream');

http.get(process.argv[2], function(request){
   request.setEncoding('utf8');
   var str = "";
   request.on('data', function(chunk) {
     str += chunk.toString();
   });
   request.on('end', function(){
     console.log(str.length);
     console.log(str);
   });
});


