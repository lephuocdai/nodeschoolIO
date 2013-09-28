
module.exports = function (database, date, callback) {
  //var level = require('level');
  var count = 0;
  database.createReadStream({start: date})
    .on('data', function (d){ // we don't use 'd' here
      count++;
    })
    .on('error', function (err) {
      if (callback) {
        callback(err);
        callback = null;
      }
    })
    .on('end', function (){
      if (callback) {
        callback(null, count);
        callback = null;
      }
    });
}
