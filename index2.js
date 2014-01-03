var __ = require('underscore');

var a = [1,2,3,4];
__.each(a, function(x) {
    console.log(x); 
});

var express = require('express');

var app = express.createServer(express.logger());
var CouchClient = require('couch-client');
var cfm = CouchClient("https://fultairendaytookenimpain:Ysu25toulvfUbVAoNEHIgn2N@jkoynok.cloudant.com:443/cfm");

app.get('/', function(request, response) {
  cfm.get('436b8837de0edc614ddab49d20eb5f2e', function(er,doc) {
        response.send(doc)
    });
});

app.listen(process.env.C9_PORT, function() {
  console.log("Listening on " + process.env.C9_PORT);
});




