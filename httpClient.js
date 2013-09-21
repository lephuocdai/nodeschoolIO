var http = require('http');

http.get(process.argv[2], function(request){
  request.setEncoding('utf8');
  request.on('data', function(chunk){
    console.log(chunk);
  });
  request.on('error', function(e) {
    console.log("Error:" + e.message);
  });
});
