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
    	var noticiasModel = new application.app.models.NoticiasDAO(connection);

    	noticiasModel.salvarNoticia(data, connection, function(error, result) {
    		response.redirect('/noticias');
    	});
    });
};