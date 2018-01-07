const express = require ('express');
parser = require("body-parser");
path = require("path");
mongoose = require('mongoose');
const { Schema } = mongoose;
port = process.env.PORT || 8005;


app = express();

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, './client/views'));

app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './client/static')));

require("./server/config/mongoose.js")

const routes_setter = require('./server/config/routes.js');
// invoke the function stored in routes_setter and pass it the "app" variable
routes_setter(app);



app.listen(port, () => console.log(`express server listening on port ${ port }`));
