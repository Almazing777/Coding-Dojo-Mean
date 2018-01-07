const mongoose = require("mongoose");
const users = require("../controllers/users.js");

module.exports = function (app){
//main page
app.get("/login", function(req, res){
  users.login(req, res);
});

//registering
app.post("/register", function(req, res){
  users.register(req, res);
});

app.post("/success", function(req, res){
	users.success(reg, res);
});

app.get("/logout", function(req, res){
	users.logout(req, res);
})

