// dependencies
var express = require('express');
var handlebars = require('express-handlebars');
var http = require('http');
var mongoose = require('mongoose');
var routes = require('./app/routes/routes');
var db = require('./config/db');

// create express instance, set port
var app = express();
var port = process.env.PORT || 3000;

// set handlebars as templating engine
app.engine('handlebars', handlebars({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// connect to database
mongoose.connect(db.url); 
mongoose.connection.on('error', console.error.bind(console, 'Failed to connect to mongodb'));
mongoose.connection.once('open', function() {
	console.log('Connected to mongodb');
});

// index route
app.get('/', routes.index);

// set static content directory
app.use("/", express.static(__dirname + "/public/"));

// start server
var server = http.createServer(app).listen(port, function() {
	console.log('Server listening on port ' + port);
});