/**
 * Adicionar noticia
 */
module.exports = function(app) {
    app.get('/formulario', function(request, response) {
        response.render('admin/form_add_noticia');
    });
};