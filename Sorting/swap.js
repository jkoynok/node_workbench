var a = [3, 5, 7, 4, 3, 2, 4, 6, 8, 9, 7, 5, 3, 1, 1, 2, 3, 4, 5, 6, 7, 6, 4, 3, 2];

var swapsort = function(a) {
    console.log(a);
    for (var j = 0; j < a.length; j++) {
        for (var i = 1; i < a.length; i++) {
            if (a[i] < a[i - 1]) {
                var ph = a[i - 1];
                a[i - 1] = a[i];
                a[i] = ph;
            }
        }
        console.log(a);
    }
};
swapsort(a);
console.log(a);