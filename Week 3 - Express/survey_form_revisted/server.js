var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var path = require("path");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));


var server = app.listen(5001, function() {
 console.log("listening on port 5001");
});

var io = require('socket.io').listen(server);

app.get('/', function(request, response){
	response.render("index");
});


io.sockets.on('connection', function (socket) {
  socket.on( "posting_form", function (data){
  	var random_number = Math.floor((Math.random()*1000) + 1);

    socket.emit("updated_message", {response: data});
    	socket.emit('random_number', {response: random_number});
	});
});
