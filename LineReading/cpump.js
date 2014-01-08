//make sure to install node-dir (npm install node-dir) and line-reader (npm install line-reader)
var lineReader = require("line-reader"),
    fs = require('fs'),
    dir = require('node-dir'),
    u = require("underscore");


var mapResult = [];
var reduceResult = [];


//logfiles is the folder with the text files that will be traversed
dir.files('logfiles', function(err, files) {
    if (err) throw err;

    for (var x in files) {
        var file = files[x];
        //only look at SpeechPlatform logs
        if (file.indexOf('SpeechPlatform') > 0) {
            console.log('starting ' + file);

            lineReader.eachLine(file, function(line, last) {
                var i = line.indexOf('CPU/Recent:');
                if (line.indexOf('CPU/Recent:') > 0) {
                    var cpureading = line.substring(i + 11, i + 13);
                    console.log('pushing ' +cpureading);
                    mapResult.push({
                        key: cpureading,
                        value: 1
                    });
                }
            }, function() {
                console.log('done');
            });
        }
        else {
            // console.log('skipping ' + file);
        }
    }
});
