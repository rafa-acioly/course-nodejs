/**
 * Adicionar noticia
 */
module.exports = function(application) {
    application.get('/formulario', function(request, response) {
        application.app.controllers.Admin.formulario_inclusao_noticia(application, request, response);
    });

    application.post('/noticias/salvar', function(request, response) {
    	application.app.controllers.Admin.noticias_salvar(application, request, response); 
    });
};