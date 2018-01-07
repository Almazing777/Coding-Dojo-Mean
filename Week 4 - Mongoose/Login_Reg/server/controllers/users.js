const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcrypt-as-promised');

module.exports = {

      index: (req, res) => {
        if(req.session.user) {
          res.redirect("/success");
        } else {
          res.render("index", {
            errors.req.session.errors
          });
        }
      },

      success: (req, res) => {
        if(req.session.user){
          res.render("success", {
            user: req.session.user
          })
        } else {
          
        }
      }

      register: function(req, res){
        if(req.body.password != req.body.password_confirm){
            res.json({errors: "Passwords don't match!!"})
        }
        else{
            if(req.body.password){
                req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8));
            }
            User.create(req.body, function(err, user){
                if(err){
                    res.json(err);
                }
                else{
                    res.json(user);
                }
            })
        }
    },
      login: function(req, res){
        User.findOne({email: req.body.email}, function(err, user){
            if(err){
                res.json(err);
            }
            else if(!user){
                res.json({errors: "This email does not have an account!!"})
            }
            else if(bcrypt.compareSync(req.body.password, user.password)){
                res.json(user);
            }
            else{
                res.json({errors: "Invalid password!!"})
            }
        })
    },

}