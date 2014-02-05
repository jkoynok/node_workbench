//make sure to install node-dir (npm install node-dir) and line-reader (npm install line-reader)
var lineReader = require("line-reader"),
    fs = require('fs'),
    dir = require('node-dir'),
    u = require("underscore");


var mapResult = [];
var reduceResult = [];
var cpureading;


dir.readFiles('logfiles', {
    match: /SpeechPlatform.txt$/
}, function(err, content, next) {
    if (err) throw err;

    next();
    var lines = content.split('\n');
    for (var x in lines) {
        var line = lines[x];
        if (line.indexOf('CPU/Recent:') > 0) {
            var i = line.indexOf('CPU/Recent:');
            cpureading = line.substring(i + 11, i + 13);
            console.log('pushing ' + cpureading);
            mapResult.push({
                key: cpureading,
                value: 1
            });
            console.log('count is ' + mapResult.length);
        }
    }

}
// ,

// function(err, files) {
//     if (err) throw err;
//     console.log('finished reading files:', files);
//     var reduceResult = [];
//     for (var x in mapResult) {
//         if (!u.contains(reduceResult, {
//             key: mapResult[x].key
//         })) {
//             reduceResult.push({
//                 key: mapResult[x].key,
//                 val: 1
//             });
//         }
//     }
//     console.log(reduceResult);
// }
);