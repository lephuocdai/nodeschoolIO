var level = require('level');
var db = level(process.argv[2]);
var count = 0;
function fetchNext(i) {
  key = 'gibberish'+i.toString();
  db.get(key, function (err, value) {
    if (err) {
      if (!err.notFound)
        throw err;
    }else
      console.log(key+"="+value);
    if (i<100)
      fetchNext(i+1);
  });
}

fetchNext(0);


//while(count < 101) {
//  key = 'gibberish'+count.toString();
//  db.get(key, function (err, value) {
//    if (err) {
//      if (!err.notFound) 
//        throw err;
//    }else
//      console.log(key+"="+value);
//    count++;
//}
