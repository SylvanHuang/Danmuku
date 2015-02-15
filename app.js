var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(8080);

var uidStr = new String("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ=+");

function getUid(uti) {
  var ret = new String();
  while (uti > 0) {
    ret = uidStr.charAt(uti % 64) + ret;
    uti = ( ( uti - uti % 64 ) / 64);
  }
  while (ret.length < 10) {
    ret = '0' + ret;
  }
  return ret;
}

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/show', function (req, res) {
  res.sendFile(__dirname + '/show.html');
});

io.on('connection', function (socket) {
  var curTime = new Date();
  socket.emit('message-hello', { server: 'EJQDanmuku' , uid: getUid(curTime)});
  socket.on('dmk', function (msg) {
    console.log(msg);
    io.emit('message', msg);
  });
});
