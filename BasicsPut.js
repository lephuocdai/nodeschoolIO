var level = require('level');
var db = level(process.argv[2]);
var json = process.argv[3],
    obj = JSON.parse(json);
for (var key in obj) {
  db.put(key, obj[key]);
}

