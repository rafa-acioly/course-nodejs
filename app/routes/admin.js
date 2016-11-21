/**
 * Adicionar noticia
 */
module.exports = function(app) {
    app.get('/formulario', function(request, response) {
        response.render('admin/form_add_noticia');
    });

    app.post('/noticias/salvar', function(request, response) {
    	var noticia = request.body;
    	response.send(noticia);
    });
};