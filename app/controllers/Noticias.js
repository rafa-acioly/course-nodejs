module.exports.getAll = function(application, request, response) {
	var connection = application.config.db();
	var noticiasModel = new application.app.models.NoticiasDAO(connection);

	noticiasModel.getNoticias(function(error, result) {
		response.render('noticias/noticias', {noticias: result});
	});
}

module.exports.findOne = function(application, request, response) {
	var connection = application.config.db();
	var noticiasModel = new application.app.models.NoticiasDAO(connection);

	noticiasModel.getNoticia(function(error, result) {
		response.render('noticias/noticia', {noticia: result});
	})
}