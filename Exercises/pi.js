

var L = 10000000000;

function dist(x,y) {
    return Math.sqrt(Math.pow(x-L/2,2) + Math.pow(y-L/2,2));
}

var Nc = 0;

for (var i =0; i<=L; i++) {
    var x= Math.random() * L;
    var y = x; //= Math.random() * L;
    //console.log(dist(x,y));
    if (dist(x,y) < 0.5 * L) {
        Nc+=1;
    }
}

var pi = 4 * Nc / L;

console.log(pi);

