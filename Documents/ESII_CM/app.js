var express = require('express');
var app = express();
var port = 3000;

app.get('/', function(req, res){
    res.send("<h1>Olá Mundo</h1>")
});
app.listen(port, function(){
    console.log("Ouvindo na porta "+port);

});