//make sure to install node-dir (npm install node-dir) and line-reader (npm install line-reader)
var lineReader = require("eachline"),
    fs = require('fs'),
    dir = require('node-dir'),
    eachline = require('eachline');

//delete the output file
fs.unlink('cpu_stats.txt', function(err) {
    if (err) {
        console.log('fnf');
    }
    console.log('successfully deleted file.');
});

//logfiles is the folder with the text files that will be traversed
dir.files('logfiles', function(err, files) {
    if (err) throw err;

    for (var x in files) {
        var file = files[x];

        //only look at SpeechPlatform logs
        if (file.indexOf('SpeechPlatform') > 0) {
            console.log('starting ' + file);

            eachline. in (file, function(line) {
                var i = line.indexOf('CPU/Recent:');
                var c = line.substring(i + 11, i + 13);
                if (line.indexOf('CPU/Recent:') > 0) {
                    fs.appendFileSync('cpu_stats.txt', file + ',' + c + '\n');

                }
            }).on('finish', function() {
                checkcomplete();
            });
        }
    }
});