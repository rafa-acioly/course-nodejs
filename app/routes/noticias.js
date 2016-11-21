/**
 * News routes
 */
module.exports = function(application) {
    application.get('/noticias', function(request, response) {
    	application.app.controllers.Noticias.getAll(application, request, response);
    });

    application.get('/noticia', function(request, response) {
    	application.app.controllers.Noticias.findOne(application, request, response);
    });
};