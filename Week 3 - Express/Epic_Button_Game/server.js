var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var path = require("path");

var count = 0;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));


var server = app.listen(8001, function() {
 console.log("listening on port 8001");
});


app.get('/', function(request, response){
	response.render("index", {number: count});
});

var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
  socket.on( "pushButton", function (){
  	count++;
  	console.log(count);
  	io.emit("update_number", {number: count});

  });

  socket.on("countReset", function(){
  	count = 0;
  	io.emit("update_number", {number: count});
  });
});
