var express = require('express');

var app = express();

app.use(express.static('source'));
app.use(express.static('dist'));
app.use(express.static('node_modules'));

app.get('/*', function(request, response){
    var options = {root: __dirname + '/source/'}
    response.sendFile('index.html', options);
});

app.listen(8080);