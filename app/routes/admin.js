/**
 * Adicionar noticia
 */
module.exports = function(application) {
    application.get('/formulario', function(request, response) {
        response.render('admin/form_add_noticia', {validationFail: '', dados: ''});
    });

    application.post('/noticias/salvar', function(request, response) {
    	var data = request.body;

        request.assert('titulo', 'Titulo é obrigatório').notEmpty();
        request.assert('resumo', 'Titulo é obrigatório').len(10, 100);
        request.assert('noticia', 'O corpo da noticia é obrigatória').notEmpty();
        request.assert('autor', 'O nome do autor é obrigatório').notEmpty();
        request.assert('data', 'O nome do autor é obrigatório').notEmpty().isDate({format: 'YYY-MM-DD'});
        var errors = request.validationErrors();
        console.log(errors);
        if (errors) {
            response.render('admin/form_add_noticia', {validationFail: errors, dados: data});
            return;
        }

    	var connection = application.config.db();
    	var noticiasModel = new application.app.models.NoticiasDAO(connection);

    	noticiasModel.salvarNoticia(data, connection, function(error, result) {
    		response.redirect('/noticias');
    	});
    });
};