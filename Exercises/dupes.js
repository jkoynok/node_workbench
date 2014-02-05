var a = [1, 3, 4, 6, 8, 7,7,8,9,9];

function Dedupe(a) {
 
    var dd = []
    for (var i in a) {
        if (dd.indexOf(a[i]) === -1) dd.push(a[i]);
    }
    return dd;

}



function TheDupes(a) {
    var h = [];
    h.getByKey = function(k) {
        for(var x in this) {
            if (this[x].key === k) return this[x];
        }
    } 
    
    for (var i in a) {
        var hv = h.getByKey(a[i]);
        if (hv) {
            hv.value +=1;
            
        } else {
            h.push({key: a[i], value :1});
        }
        
    }
    a = [];
    for (var j in h ) {
        if (h[j].value > 1) a.push(h[j].key);
        
    }
    return a;

}
console.log(Dedupe(a));
console.log(TheDupes(a));
