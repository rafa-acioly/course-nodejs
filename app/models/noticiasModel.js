module.exports = function(app) {
	this.getNoticias = function(connection, callback) {
		connection.query('select * from noticias', callback);
	}

	this.getNoticia = function(connection, callback) {
		connection.query('select * from noticia where id = 1', callback);
	}

	this.salvarNoticia = function(data, connection, callback) {
		connection.query('insert into noticias set ?', data, callback);
	}

	return this;
}