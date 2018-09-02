var express = require('express');
var app = express();
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

// configuration ==================================

app.use(express.static(__dirname + '/public'));     // set the static files location /public/img will be /img for users
app.use('/libraries', express.static(__dirname +'/node_modules'));
app.use(morgan('dev'));                               // log every request to the console
app.use(bodyParser.urlencoded({'extended': true})); // parse application/x-www-forl-urlencoded
app.use(bodyParser.json());                         // parse application/json
app.use(methodOverride());

app.get('/', function(req, resp){
    resp.sendfile('./public/app/index.html');        // load the single view file (angular will handle the page changes on the front-end)
});

// listen (start app with node server.js) ==========================
var port = 8000;
app.listen(port);
console.log("App listening on port "+port);