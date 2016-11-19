var sql = require('mysql');

module.exports = function() {
    return sql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'nodejs'
    });
};