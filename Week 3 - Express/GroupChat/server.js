var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, "./static")));
app.use(express.bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
 res.render("index", {chats: chats});
})

var server = app.listen(5001, function() {
 console.log("listening on port 5001");
});

var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
  console.log("Client/socket is connected!");
  console.log("Client/socket id is: ", socket.id);
  // all the server socket code goes in here
  socket.on("user", function (name){
    users[socket.id] = name.name;
    socket.emit("message_board", {chats: chats}); 
  })
  socket.on("new", function (message){
    let user_name = users[socket.id];
    chats.push({[user_name]: message.message});
    io.emit('update_message_board', {name: user_name, message: message.message}); // sending new message to all users to update their boards
  })
})