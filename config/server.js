var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var app = express();

/**
 * Set view engine
 */
app.set('view engine', 'ejs');
/**
 * Set view directory
 */
app.set('views', './app/views');
/**
 * Using body parser to solve requests
 */
app.use(bodyParser.urlencoded({extended: true}));
/**
 * Set the autoload to routes
 */
consign()
	.include('app/routes')
	.then('config/db.js')
	.then('app/models')
	.into(app);

module.exports = app;
