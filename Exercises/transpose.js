var  a= [[1,2],[3,4],[5,6]];

var  c= [[1,2,3],[4,5,6],[7,8,9]];


var transpose = function(a) {
    
    //in js a matrix is a list of rows
    var b = [];
    var M = a.length;
    var N = a[0].length;
    
    //for each col add a row
    for (var j = 0; j < N; j++) {
        var row = [];
        //for each row add a col
        for (var i = 0; i< M; i++) {
            row.push(a[i][j]);       
        }
        b.push(row);
    }
    return b;
}

//console.log(transpose(c));

var flipvert = function(a) {
    
    var M = a.length;
    var N = a[0].length;
            
    for (var j = 0; j < N; j++) {
        for (var i=0; i < M-1; i++) {
             var placeholder =a[i][j];
             console.log('holding ' + placeholder);
             a[i][j] = a[M-1-i][j];
             a[M-1-i][j] = placeholder;
        }            
    }
    //return a;
}

var d = [[1,2],[3,4],[5,6]];
flipvert(d);
console.log(d);
