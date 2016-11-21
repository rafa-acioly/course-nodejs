/**
 * Listagem de noticias
 */
module.exports = function(app) {
    app.get('/noticias', function(request, response) {

    	var connection = app.config.connection();

        connection.query('select * from noticias', function(error, result) {
            response.render('noticias/noticias', {noticias: result});
        });
    });
};