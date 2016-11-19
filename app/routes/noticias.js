var db = require('../../config/db.js');
/**
 * Listagem de noticias
 */
module.exports = function(app) {
    var connection = db();
    app.get('/noticias', function(request, response) {
        connection.query('select * from noticias', function(error, result) {
            response.render('noticias/noticias', {noticias: result});
        });
    });
};