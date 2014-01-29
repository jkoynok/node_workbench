//make sure to install node-dir (npm install node-dir) and line-reader (npm install line-reader)
var eachline = require('eachline');
var fs = require("fs");

eachline.in ('pickrequest.csv', function(line) {
    var parts = line.split(',');
    fs.appendFileSync('putcounts.txt', parts[0] + '\n');

}).on('finish', function() {
    console.log('done');
});