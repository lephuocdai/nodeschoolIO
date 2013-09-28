var level = require('level');
var fs = require('fs');
// read file and split into an array of lines
var lines = fs.readFileSync(process.argv[3], 'utf8').split('\n');
level (process.argv[2], function(err, db) {
//  if (err) throw err;
//  // chained batch object
//  var batch = db.batch();
//  lines.forEach(function (line){
//    var command = line.split(',');
//    if (command[0] == 'del'){
//      batch.del(command[1]);
//    }else{
//      batch.put(command[1], command[2]);
//    }
//  });
//  // commit the batch
//  batch.write(function (err) { console.error(err)});
  var ops = lines.map(function (line) {
    var command = line.split(',');
    return {type: command[0], key: command[1], value: command[2]};//'value' is ignored for 'del'
  });
  db.batch(ops, function (err) {
    if (err) throw err;
    db.close();
  });
});
