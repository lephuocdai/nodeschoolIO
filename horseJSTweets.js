
module.exports = function (database, date, callback) {
  var tweets = [];
  database.createReadStream({start: date, end: date+'\xff'})
    .on('data', function (data) {
      tweets.push(data.value);
    })
    .on('error', function (err) {
      if (callback) 
        callback(err);
      callback = null;
    })
    .on('end', function () {
      if (callback)
        callback(null, tweets);
      callback = null;
    });
}
