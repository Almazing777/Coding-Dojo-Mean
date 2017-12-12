var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var path = require("path");
var port = process.env.PORT || 5002;
var session = require("express-session");

var sessionConfig = {
	saveUninitialized: true,
	resave: false,
	name: "session",
	secret: "thisisSecretKey"
};


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.use(session(sessionConfig)); 

app.get('/', function(request, response){
	response.render("index");
});

app.post("/results", function(request, response){
	console.log(request.body);
	response.render('results', request.body);
});

// app.post("/reset", function(request, response){
// 	request.session.destroy();
// 	response.redirect('/');
// });

app.listen(port, () => console.log(`express server listening on port ${port}`));



