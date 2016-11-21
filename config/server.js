var express = require('express');
var consign = require('consign');
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
 * Set the autoload to routes
 */
consign().include('app/routes').into(app);

module.exports = app;
