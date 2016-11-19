var app = require('./config/server'); 

var routeNews = require('./app/routes/noticias')(app);
var routeHome = require('./app/routes/home')(app);
var routeForm = require('./app/routes/formulario')(app);

app.listen(4000, function() {
    console.log('Servidor iniciado na porta 4000');
});