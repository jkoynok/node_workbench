
<<<<<<< HEAD

var L = 10000000000;

function dist(x,y) {
    return Math.sqrt(Math.pow(x-L/2,2) + Math.pow(y-L/2,2));
=======
var L = 1, x, y;
var Nt = 10000000000;

function dist(x,y) {
    //return Math.sqrt(Math.pow(x-0.5,2) + Math.pow(y-0.5,2));
    return Math.sqrt( 2* x * x);
>>>>>>> da1f5107c37081d4b86ee279c397fcfe9d23caa4
}

var Nc = 0;

<<<<<<< HEAD
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

=======
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


>>>>>>> da1f5107c37081d4b86ee279c397fcfe9d23caa4
