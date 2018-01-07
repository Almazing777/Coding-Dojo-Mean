const express = require('express');
const bodyParser = require("body-parser");
const port = process.env.PORT || 8100;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./server/config/database")
const routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(port, () => console.log(`express server listening on port ${ port }`));
