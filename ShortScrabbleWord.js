
module.exports.init = function (database, words, callback) {
 var ops = words.map (function (word) {
   var key = word.length + "!"+word;
   return {type: 'put', key: key, value: word};
 }); 
 database.batch(ops, callback);
}

module.exports.query = function (database, word, callback) {
  var words = [];
  var key = word.length+"!"+word.replace(/\*+/,'');
  database.createReadStream({start: key, end: key+'\xff'})
    .on('data', function (data) {
      words.push(data.value);
    })
    .on('error', function (err) {
      if (callback)
        callback(err)
      callback = null;
    })
    .on('end', function () {
      if (callback)
        callback(null, words);
      callback = null;
    });
}



