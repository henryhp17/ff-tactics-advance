// modules ===
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');


// configuration ===

// config files
var db = require('./config/db');

// port settings
var port = process.env.PORT || 8080;

// mongoDB connection
mongoose.connect(db.url);

// get all data of the body parameters, parse JSON
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location
app.use(express.static(__dirname + '/public'));

// routes ===
require('./app/routes')(app); // configure all routes

// start app ===
// start app at http://localhost:8080
app.listen(port);
console.log('Application started successfully at port ' + port);
exports = module.exports = app;