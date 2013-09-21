var http = require('http');
var bl = require('bl');

for ( i = 2; i < 5; i++) {
  http.get(process.argv[i], function (request) {
    request.pipe(bl(function (err, data) {
      if (err)
        return console.error(data);
      data = data.toString();
      console.log(data);
    }));
  });
}
