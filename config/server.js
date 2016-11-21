var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var validator = require('express-validator');
var app = express();

/**
 * Set view engine
 */
app.set('view engine', 'ejs');
/**
 * Set view directory
 */
app.set('views', './app/views');

// Set static files
app.use(express.static('./app/public'));
// Set body parser
app.use(bodyParser.urlencoded({extended: true}));
// Set validators
app.use(validator());
/**
 * Set the autoload to routes
 */
consign()
	.include('app/routes')
	.then('config/db.js')
	.then('app/models')
	.then('app/controllers')
	.into(app);

module.exports = app;
