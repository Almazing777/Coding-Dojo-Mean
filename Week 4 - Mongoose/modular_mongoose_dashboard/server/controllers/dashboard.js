const mongoose = require("mongoose");
const Fish = mongoose.model("fish");

module.exports = {
	index: function (request, response){
	Fish.find({})
    .populate("index")
    .then(fishes => {
      response.render("index", { fishes });
    })
    .catch(error => console.log(error));
	},

	create: function(request, response){
	Fish.create(request.body)
  	.then(fish => {
    	const errors = Object.keys(error.errors)
      	.map(key => error.errors[key].message);

      	console.log(errors);
      	throw errors;
  	});
  		response.redirect('/')
	},

	edit: function(request, response){
		Fish.findById(request.params.id)
  		.populate("edit")
  		.then(fish => {
    	console.log(fish);

    	response.render("edit", { fish })
  	})
  		.catch(console.log);
	},

	selectbyid: function(request, response){
		Fish.findById(request.params.id)
  		.populate('show')
  		.then(fish => {
    	console.log(fish);

    	response.render('show', { fish })
  	})
  		.catch(console.log);
	},

	update: function(request, response){
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
	},

	delete: function(request, response){
		Fish.findByIdAndRemove(request.params.id)
        .then(function (destroyedFish) {
            console.log(destroyedFish);
            response.redirect('/');
        })
        .catch(function (error) {
            console.log(error);
        })
	}
}