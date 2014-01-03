//make sure to install node-dir (npm install node-dir) and line-reader (npm install line-reader)
var LineByLineReader = require('line-by-line'),
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

        var stream = fs.createReadStream(file);

        eachline(stream, function(line) {
            console.log(line);
        });


        //only look at SpeechPlatform logs
        if (file.indexOf('SpeechPlatform') > 0) {
            console.log('starting ' + file);

            lineReader.eachLine(file, function(line, last) {
                var i = line.indexOf('CPU/Recent:');
                if (line.indexOf('CPU/Recent:') > 0) {
                    fs.appendFileSync('cpu_stats.txt', file + ',' + line.substring(i + 11, i + 13) + '\n');
                }
            });
        }
        else {
            // console.log('skipping ' + file);
        }
    }
});


var LineByLineReader = require('line-by-line'),
var lr = new LineByLineReader('big_file.txt');

lr.on('error', function (err) {
    // 'err' contains error object
});

lr.on('line', function (line) {
    // 'line' contains the current line without the trailing newline character.
});

lr.on('end', function () {
    // All lines are read, file is closed now.
});
