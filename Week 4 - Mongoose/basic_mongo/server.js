var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/basic_mongoose");

var UserSchema = new mongoose.Schema({
 name: String,
 age: Number
})
mongoose.model('User', UserSchema);
var User = mongoose.model('User');
mongoose.Promise = global.Promise;


var path = require("path");
var port = process.env.PORT || 5002;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));

app.get('/', function(request, response){
	response.render("index");
});

app.post('/users', function(req, res) {
  console.log("POST DATA", req.body);
  // create a new User with the name and age corresponding to those from req.body
  var user = new User({name: req.body.name, age: req.body.age});
  // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
  user.save(function(err) {
    // if there is an error console.log that something went wrong!
    if(err) {
      console.log('something went wrong');
    } else { // else console.log that we did well and then redirect to the root route
      console.log('successfully added a user!');
      res.redirect('/');
    }
  })
})

app.listen(port, () => console.log(`express server listening on port ${port}`));



