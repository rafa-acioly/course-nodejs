/**
 * Adicionar noticia
 */
module.exports = function(application) {
    application.get('/formulario', function(request, response) {
        response.render('admin/form_add_noticia');
    });

    application.post('/noticias/salvar', function(request, response) {
    	var data = request.body;
    	var connection = application.config.db();
    	var noticiasModel = application.app.models.noticiasModel;

    	noticiasModel.salvarNoticia(data, connection, function(error, result) {
    		response.redirect('/noticias');
    	});
    });
};