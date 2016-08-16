var express = require('express');
app = express();
var http = require('http').Server(app);
var morgan = require('morgan');
var wagner = require('wagner-core');
var bodyParser = require('body-parser');

var port     = process.env.PORT || 8083;

console.log("from serverjs");
app.use(morgan('dev'));
app.use(express.static('./public/')); //public folder run by gulp
app.use('/bower_components', express.static('./bower_components'));

app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json


var dependencies = require("./app/dependencies.js")(wagner);

require('./app/routes.js')(app,wagner);



// app.listen(port);
   // console.log("App listening on port " + port);


http.listen(port,function(){
  console.log('listening on *:'+port);
});  
 
