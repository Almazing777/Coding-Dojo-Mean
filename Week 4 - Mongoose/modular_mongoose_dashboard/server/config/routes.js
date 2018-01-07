const mongoose = require("mongoose");
const Fish = require("../controllers/dashboard.js");

module.exports = function (app){
//routes
app.get("/", function(request, response){
  Fish.index(request, response);
});

//rendering new fish page
app.get("/mongoose/new", function(request, response){
  response.render("new");
});


//creating new fish
app.post("/mongoose/new", function(request, response){
  Fish.create(request, response);
});

//select new fish by ID
app.get("/mongoose/:id", function(request, response){
  Fish.selectbyid(request, response);
});


//edit fish information 
app.get("/mongoose/:id/edit", function(request, response){
  Fish.edit(request, response);
});

//post information
app.post("/mongoose/:id", function(request, response) {
  Fish.update(request, response);
});

//delete
app.post('/mongoose/:id/delete', function (request, response) {
  Fish.delete(request, response);
});
}