function quicksort(a) {

    if (a.length <= 1) return a;

    var p = a.pop();

    var gt = [];
    var lt = [];

    for (var i in a) {
        if (a[i] <= p) {
            lt.push(a[i]);
        }
        else {
            gt.push(a[i]);
        }
    }
    var l = [];
    l.push(p);

    return quicksort(lt).concat(l, quicksort(gt));
}

console.log(quicksort([1, 4, 5, 7, 8, 9, 5, 34, 2, 4, 5]));

function randomize(a) {
    
    for (var i in a) {
        var placeholder = a[i]
        var rand_index = Math.floor( Math.random() * a.length);
        a[i] = a[rand_index];
        a[rand_index] = placeholder;
    }    
    return a;
    
}

console.log(randomize(quicksort([1, 4, 5, 7, 8, 9, 5, 34, 2, 4, 5])));

