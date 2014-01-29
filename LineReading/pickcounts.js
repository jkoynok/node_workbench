//make sure to install node-dir (npm install node-dir) and line-reader (npm install line-reader)
var eachline = require('eachline');
var fs = require("fs");

// eachline.in ('pickrequest.csv', function(line) {
//     var parts = line.split(',');
//     fs.appendFileSync('putcounts.txt',parts[10] + ',' + parts[14] + '\n');

// }).on('finish', function() {
//     console.log('done');
// });

var pr = [];
eachline. in ('putcounts.txt', function(line) {
    var parts = line.split(',');
    if (parseInt(parts[1])) pr.push(parseInt(parts[1]));

}).on('finish', function() {

    //console.log(pr);
    
    console.log(stdev(pr));
    pr = removeOutliers(pr,10);
    console.log(stdev(pr));
});

var stdev = function(a) {

    var s = 0;
    var mean = 0;
    a.forEach(function(x) {
        mean += x;
    });
    mean = mean / a.length;

    a.forEach(function(x) {
        s += Math.pow(mean - x, 2);
    });

    return Math.sqrt(s / a.length);
};

var removeOutliers = function(a, n) {

    a.sort(function(a, b) {
        return -(a - b);
    });

    //remove lowest 5
    a.splice(0, n);
    //remove hightest 5
    a.splice(a.length - n+1, n);
    return a;
};
