// var app = require('express')();
// var http = require('http').Server(app);
// var io = require('socket.io')(http);

// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/index.html');
// });

// io.on('connection', function(socket){
//   socket.on('chat message', function(msg){
//     io.emit('chat message', msg);
//   });
// });

// http.listen(3000, function(){
//   console.log('listening on *:3000');
// });

var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 5000));

var http = require('http').Server(app);

var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
  	console.log("hello");
    io.emit('chat message', msg);
  });
});


http.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});