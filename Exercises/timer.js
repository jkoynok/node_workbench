var max = 3;
var n = 0;
var t = setTimeout(task, 2);

var task = function() {
    console.log('firing (' + n + ')');
    if (n <= max) {
        setTimeout(task, 2)
    }
    else {
        clearTimeout(t);
    }

}

while(true) {
    ///    

}