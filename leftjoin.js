var a = [1, 3, 4, 6, 8, 7];
var b = [66, 4, 5, 6, 7, 1];


//find a that's is not in b

function ds(a, b) {

    var common = [];
    var i = 0;
    while (i < 6) {
        if (b.indexOf(a[i]) > 0) common.push(a[i]);
        i++;
    }

    var notin = [];
    for (var j in a) {
        if (common.indexOf(a[j]) === -1) notin.push(a[j]);

    }
    return notin;
}


console.log(ds(a,b));