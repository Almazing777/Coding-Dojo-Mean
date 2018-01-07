const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const UserSchema = new mongoose.Schema({
  name: {
  	type: String,
  	required: [true, "What's your name?"]
  },

  lastname: {
  	type: String,
  	required: [true, "What's your last name"]
  },

  email: {
  	type: String,
  	required: [true, "What's your email?"],
  	index: { unique: [true, "Email is already in use"]},
  	validate: {
  		validator: function(value) {
  			return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
  		},
  		message: "Email is not valid"
  	}
  },

  password: {
  	type: String,
  	required: [true, "password is required!"],
  	minlength: 8,
  	validate: {
  		validator: function (value){
  			return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
  		},
  		message: "Password needs at least 8 characters, one number, one uppercase."
  	},
  }
}, {
  timestamps:true
});

UserSchema.pre("save", function(done) {
	brypt.hash(this.password, 10)
		.then(hashedpw => {
			this.password = hashedpw;
			done();
		})
		.catch(error => {
			console.log(error);
			done();
		})
})



const User = mongoose.model("User", UserSchema);