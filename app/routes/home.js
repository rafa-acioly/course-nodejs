/**
 * Home routes
 */
module.exports = function(application) {
    application.get('/', function(request, response) {
        application.app.controllers.Home.index(application, request, response);
    });    
};