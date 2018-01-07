const express = require('express');
const parser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const port = process.env.PORT || 8005;

const app = express();

app.set('views', path.resolve('views'));
app.set('view engine', 'ejs');

app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "static")));

mongoose.connect('mongodb://localhost/quoting_dojo');
mongoose.connection.on('connected', () => console.log('connected to mongodb'));


const quoteSchema = new mongoose.Schema({
  name: String,
  quote: String
},{
  timestamps:true
});

const Quote = mongoose.model('quote', quoteSchema);


//index
app.get('/', function(request, response) {
  response.render('index');
});


// quotes main page
app.get('/quotes', function(request, response){
  Quote.find({})
    .populate("quotes")
    .then(quotes => {
      response.render("quotes", { quotes });
    })
    .catch(error => console.log(error));
});

  //alternative solution
  // Quote.find()
  //   .then(function(quotes){
  //     console.log(quotes);
  //     response.render("quotes", { quotes })
  //   })
  //   .catch(function(error){
  //     const errors = Object.keys(error.errors).map(function(key){
  //       return error.errors[key].message;
  //     });
  //     response.render("error", { errors });
  //   });
//});

//quotes when something is posted
app.post('/quotes', function(request, response){
  console.log("authors", request.body);

  Quote.create(request.body)
  .then(quote => {
    console.log(quote);
    response.redirect("/quotes");
  })
  .catch(error => {
    const errors = Object.keys(error.errors)
      .map(key => error.errors[key].message);

    console.log(errors);
    throw error;
  });
});


//alternative solution
//  const quote = new Quote({name: request.body.name, quote: request.body.quote});
//  quote.save()
//   .then(function(q){
//     console.log("add quote successful", q);
//     response.redirect("/quotes")
//   })
//   .catch(function(error){
//     const errors = Object.keys(error.errors).map(function(key){
//       return error.errors[key].message;
//     });
//     response.render("error", { errors });
//   });
// });




app.listen(port, () => console.log(`express server listening on port ${ port }`));