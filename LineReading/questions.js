//make sure to install node-dir (npm install node-dir) and line-reader (npm install line-reader)
var l = 0;
var questions = [];
var eachline = require('eachline');

eachline. in ('questions.txt', function(line) {
    if (line[0] == 'Q')
        questions.push(line);
    
}).on('finish', function(){
    //console.log(questions);
    var index = Math.floor(Math.random() * questions.length);
    //console.log(l);
    console.log(questions[index]);
});




