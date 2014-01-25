var a = [1, 4, 5, 7, 88, 99, 5, 44, 33, 22];

function stdev(a) {

    var sum = 0;
    a.forEach(function(x) {
        sum += x
    });
    var avg = sum / a.length;

    var s = 0;
    a.forEach(function(x) {
        s += Math.pow(x - avg, 2)
    })

    s = s / a.length;

    return Math.sqrt(s);
}

console.log(stdev(a));

a.sort(function(i,j) { return (i<j); });
console.log(a);

var median = function(a) {
    
    if (a.length % 2 > 0) {
        return a[Math.floor(a.length/2)];
    } else {
        
        return 0.5 * ( a[Math.floor(a.length/2)-1] + a[Math.floor(a.length/2)]);
    }
    
}
console.log(median(a));

