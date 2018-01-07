const mongoose = require("mongoose");
const Person = require("../controllers/1955.js");

module.exports = function (app){
//routes
	app.get("/", function(request, response){
  		Person.index(request, response);
	});

//create new person
	app.get("/new/:name", function(request, response){
  		Person.create(request, response);	
	});

//select new Person by ID
	app.get("/:name", function(request, response){
  		Person.selectbyid(request, response);
	});

//delete
	app.post('/mongoose/:id/delete', function (request, response) {
  		Person.delete(request, response);
	});
}