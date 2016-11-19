var express = require('express');
var app = express();

/**
 * Set view engine
 */
app.set('view engine', 'ejs');
/**
 * Set view directory
 */
app.set('views', './app/views');

module.exports = app;
