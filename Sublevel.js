var sublevel = require('level-sublevel');
var level = require('level');
var db = sublevel(level(process.argv[2]));

var robots = db.sublevel('robots');
robots.put('slogan', 'beep boop');

var dinosaurs = db.sublevel('dinosaurs');
dinosaurs.put('slogan', 'rawr');

