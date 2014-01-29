var sqrt = function(n) {

    var g = n / 2;

    //subtract til whole sqr less than nex 
    while (g * g > n) {
        g -= 1;
    }

    //add decimals till over
    var counter = 0;
    while (g * g < n && counter < 100000) {
        g += 0.00001;
        counter+=1;
    }

    return g;

}

var n = 413;
var sq = sqrt(n);
console.log(sq);
console.log(sq*sq);