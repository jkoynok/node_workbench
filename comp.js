var a = [1, 3, 4, 6, 8, 7];
var b = [66, 4, 5, 6, 7, 1];
var c = 'the quick brown fox jumped over the lazy dog'.split(' ');

function Sort(a, f) {
 
    if (a.length <= 1) return a;
 
    var gt = [], lt = [], t=[], p = a.pop();
    
    for (var i in a) {
        if (f(a[i],p)) {
            lt.push(a[i]);
        } else {
            gt.push(a[i]);
        }
    }
    t.push(p);
    return Sort(lt,f).concat(t,Sort(gt,f));
    
}

var comp = function(a,b) { return (a.length <= b.length); }

console.log(Sort(c,function(a,b) { return (a.length <= b.length); } ));


console.log(Sort(b,function(a,b) { return (a < b); } ));

