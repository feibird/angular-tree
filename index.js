var path = require('path');
var fs = require('fs');
var express = require('express');
var app = express();
app.enable('trust proxy');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

app.use(express.static(path.join(__dirname,'/')));
var server = app.listen("1024", function() {
	console.log('Listening on port ' + server.address().port)
});
