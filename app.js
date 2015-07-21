var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');


var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

//================= part 1 =====================

// app.get('/', function(req, res){
// 	var fileContents = fs.readFileSync('data.txt');
// 	res.header('Content-Type', 'text/html');
// 	res.send(fileContents)
// })

//================ part 2/ bonus ================

app.get('/:filename', function(req, res){
	
		fs.readFile(req.params.filename, function(err, data){
		res.header('Content-Type', 'text/html');
		res.send(data)
	});
});



app.get('/', indexController.index);

var server = app.listen(7877, function() {
	console.log('Express server listening on port ' + server.address().port);
});
