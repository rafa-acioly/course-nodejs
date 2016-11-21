function NoticiasDAO(connection)
{
	this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback) {
	this._connection.query('select * from noticias', callback);
};

NoticiasDAO.prototype.getNoticia = function(callback) {
	this._connection.query('select * from noticia where id = 1', callback);
};

NoticiasDAO.prototype.salvarNoticia = function(data, callback) {
	this._connection.query('insert into noticias set ?', data, callback);
};

module.exports = function() {
	return NoticiasDAO;
}