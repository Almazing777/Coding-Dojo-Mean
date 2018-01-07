const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded());
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost/mongoose_dashboard");
mongoose.connection.on("connected", () => console.log("connected to mongoDB"));
mongoose.P


const Schema = mongoose.Schema;
const MessageSchema = new mongoose.Schema({
  name: String,
  message: String,
  _comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
});

MessageSchema.path('name').required(true, 'Name cannot be blank');
MessageSchema.path('message').required(true, 'Message cannot be blank');
mongoose.model("Message", MessageSchema);

const Message = mongoose.model("Message");
const CommentSchema = new mongoose.Schema({
  name: String,
  text: String,
  _message: {type: Schema.Types.ObjectId, ref: 'Message'}
});

CommentSchema.path('name').required(true, 'Name cannot be blank');
CommentSchema.path('text').required(true, 'Comment cannot be blank');
mongoose.model("Comment", CommentSchema);

const Comment = mongoose.model("Comment");




//index route
// app.get("/", function(request, response){
//   Message.find({})
//   .populate("index")
//   .then(messages => {
//     response.render("index", { messages });
//   })
//   .catch(error => console.log(error));
// });
app.get("/", function(req, res) {
  Message.find({}, false, true).populate('_comments').exec(function(err, messages) {
        res.render('index.ejs', { messages: messages });
  });
});


//message post route
// app.post("/message", function(request, response){
//   Message.create(request.body)
//   .then(message => {
//     const errors = Object.keys(error.errors)
//     .map(key => error.errors[key].message);

//     console.log(errors);
//     throw errors;
//   });
//   response.redirect("/")
// });

app.post("/message", function(req, res){
  var newMessage = new Message({ name: req.body.name, message: req.body.message });
  newMessage.save(function(err) {
    if (err) {
      console.log(err);
      res.render('index.ejs', { errors: newMessage.errors });
    } else {
      console.log("success");
      res.redirect('/');
    }
  })
})



//comment post route
app.post("/comment/:id", function(req, res) {
  const messageId = req.params.id;
  Message.findOne({ _id: messageId }, function(err, message) {
    const newComment = new Comment({ name: req.body.name, text: req.body.comment });
    newComment._message = message._id;
    Message.update({ _id: message._id }, { $push: { _comments: newComment }}, function(err) {

    });
    newComment.save(function(err) {
      if (err) {
        console.log(err);
        res.render('index.ejs', { errors: newComment.errors });
      } else {
        console.log("comment added");
        res.redirect("/");
      }
    });
  });
});


app.listen(8000, function() {
  console.log("server running on port 8000");
});


// // define Schema variable
// var Schema = mongoose.Schema;
// // define Post Schema
// var PostSchema = new mongoose.Schema({
//  text: {type: String, required: true }, 
//  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
// }, {timestamps: true });
// // define Comment Schema
// var CommentSchema = new mongoose.Schema({
//  _post: {type: Schema.Types.ObjectId, ref: 'Post'},
//  text: {type: String, required: true }
// }, {timestamps: true });
// // set our models by passing them their respective Schemas
// mongoose.model('Post', PostSchema);
// mongoose.model('Comment', CommentSchema);
// // store our models in variables
// var Post = mongoose.model('Post');
// var Comment = mongoose.model('Comment');
// // route for getting a particular post and comments
// app.get('/posts/:id', function (req, res){
//  Post.findOne({_id: req.params.id})
//  .populate('comments')
//  .exec(function(err, post) {
//       res.render('post', {post: post});
//         });
// });
// // route for creating one comment with the parent post id
// app.post('/posts/:id', function (req, res){
//   Post.findOne({_id: req.params.id}, function(err, post){
//          var comment = new Comment(req.body);
//          comment._post = post._id;
//          post.comments.push(comment);
//          comment.save(function(err){
//                  post.save(function(err){
//                        if(err) { console.log('Error'); } 
//                        else { res.redirect('/'); }
//                  });
//          });
//    });
//  });