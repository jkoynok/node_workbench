
var L = 1, x, y;
var Nt = 10000000000;

function dist(x,y) {
    //return Math.sqrt(Math.pow(x-0.5,2) + Math.pow(y-0.5,2));
    return Math.sqrt( 2* x * x);
}

var Nc = 0;

for (var i =0; i<=Nt; i++) {
    x= Math.random() * L;
    y= Math.random() * L;
    //console.log(dist(x,y));
    if (dist(x,y) <= 0.5 * L) {
        Nc+=1;
    }

    if (i % (Nt/1000) == 0) {
    	console.log('step ' + i + ' is ' + 4 * Nc / i);
    }
}

var pi = 4 * Nc / Nt;

console.log(pi);


