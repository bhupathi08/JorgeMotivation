var express = require('express');
var app = express();
var server = require('http').Server(app);

app.use(express.static('C:/Users/SaiKrishna/Desktop/JorgeMotivation(OLD)'));

app.get('/', function(req,res){
 res.sendfile('C:/Users/SaiKrishna/Desktop/JorgeMotivation(OLD)'+'index.html');
});

server.listen(3000, function(){
    console.log('App listening on port 3000!');
});


