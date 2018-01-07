const express = require ('express');
bodyParser = require("body-parser");
path = require("path");
session = require("express-session");
mongoose = require('mongoose');
port = process.env.PORT || 8005;

app = express();

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, './client/views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './client/static')));

require("./server/config/mongoose.js")

const routes_setter = require('./server/config/routes.js');
// invoke the function stored in routes_setter and pass it the "app" variable
routes_setter(app);



app.listen(port, () => console.log(`express server listening on port ${ port }`));
