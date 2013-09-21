var net = require('net');

function display(num) { return num < 10 ? '0' + num : num }

var server = net.createServer (function (socket) {
  var date = new Date();
  timeServer =  date.getFullYear() + '-'
  + display(date.getMonth()+1) + '-'
  + display(date.getDate()) + ' '
  + display(date.getHours()) + ':' 
  + display(date.getMinutes()) + '\n';
  socket.end(timeServer);
});
server.listen(8000);
