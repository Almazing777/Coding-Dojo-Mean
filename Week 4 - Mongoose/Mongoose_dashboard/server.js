const express = require ('express');
parser = require("body-parser");
path = require("path");
mongoose = require('mongoose');
const { Schema } = mongoose;
port = process.env.PORT || 8102;


app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));

mongoose.connect("mongodb://localhost/mongoose_dashboard");
mongoose.connection.on("connected", () => console.log("connected to mongoDB"));
mongoose.P



const fishSchema = new mongoose.Schema({
  name: String,
  color: String,
  age: Number
}, {
  timestamps:true
});

const Fish = mongoose.model("fish", fishSchema);

//routes
app.get("/", function(request, response){
  Fish.find({})
    .populate("index")
    .then(fishes => {
      response.render("index", { fishes });
    })
    .catch(error => console.log(error));
});

//rendering new fish page
app.get("/mongoose/new", function(request, response){
  response.render("new");
});


//creating new fish
app.post("/mongoose/new", function(request, response){
  Fish.create(request.body)
  .then(fish => {
    const errors = Object.keys(error.errors)
      .map(key => error.errors[key].message);

      console.log(errors);
      throw errors;

  });
  response.redirect('/')
});

//select new fish by ID
app.get("/mongoose/:id", function(request, response){
  Fish.findById(request.params.id)
  .populate('show')
  .then(fish => {
    console.log(fish);

    response.render('show', { fish })
  })
  .catch(console.log);
});


//edit fish information 
app.get("/mongoose/:id/edit", function(request, response){
  Fish.findById(request.params.id)
  .populate("edit")
  .then(fish => {
    console.log(fish);

    response.render("edit", { fish })
  })
  .catch(console.log);
});

//post information
app.post("/mongoose/:id", function(request, response) {
  Fish.findByIdAndUpdate(request.params.id, {
    $set: {
      name: request.body.name,
      color: request.body.color,
      age: request.body.age
    }
  })
  .then(function (updatedFish) {
    response.redirect('/mongoose/' + updatedFish.id);
  })
  .catch(function(error){
    console.log(error);
  })
});

//delete
app.post('/mongoose/:id/delete', function (req, res) {
    Fish.findByIdAndRemove(req.params.id)
        .then(function (destroyedFish) {
            console.log(destroyedFish);
            res.redirect('/');
        })
        .catch(function (error) {
            console.log(error);

        })
})

app.listen(port, () => console.log(`express server listening on port ${ port }`));
