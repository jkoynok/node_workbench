var async = require('async');
var request = require("request");
var fs = require('fs');
var eachline = require('eachline');

var q = async.queue(function(task, cb) {

    request.post('http://lucasware.com', {
        form: {
            picklineid: task.picklineid,
            status: task.status
        }
    }, function(er, res, body) {
        console.log(res.statusCode + ' ' + body);
        console.log('posted ' + task.picklineid);
        cb(null);
    })

}, 1);


eachline. in ('file.txt', function(line) {
    q.push({
        picklineid: line.split(',')[0],
        status: line.split(',')[1]
    })
})