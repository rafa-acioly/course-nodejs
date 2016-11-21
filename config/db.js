var sql = require('mysql');

var connect = function() {
	return sql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'nodejs'
    });
}

module.exports = function() {
  return connect;  
};