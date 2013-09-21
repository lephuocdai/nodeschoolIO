var fs = require('fs');
var regex = new RegExp('\\.' + process.argv[3] + '$');
//var extension = process.argv[3];
fs.readdir(process.argv[2], function(err, files) {
  if (err) throw err;
  files.forEach(function(file){
   // if (file.indexOf('.'+extension) > -1)  {console.log(file); }
    if (regex.test(file)) {console.log(file);}
  });
});

