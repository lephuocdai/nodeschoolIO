var http = require('http');
var bl = require('bl');
var result = [];
var count = 0;

function printResults () {
  for (var i = 0; i < 3; i++) { console.log(result[i]); }
}

function httpGet (index) {
  http.get(process.argv[2+index], function (request) {
    request.pipe(bl(function (err, data) {
      if (err)
        return console.error(data);
      
      result[index] = data.toString();
      count++;
      
      if(count==3)
        printResults();
    }));
  });
}

for (var i = 0; i < 3; i++) { httpGet(i); }

