var s = 'asdfasd hjkl1412354123454asdfasdfasdf33321354sdfes2arf';

function CountChars(s) {
    var a = [];
    a.GetByKey = function(k) {
        for (var x in this) {
            if (this[x].key === k) {
                return this[x];
            }
        }
    }

    var h;
    for (var c in s) {
        h = a.GetByKey(s[c]);
        if (!h) {
            a.push({
                key: s[c],
                value: 1
            });
        }
        else {
            h.value += 1;
        }
    }
    return a;
}

console.log(CountChars(s));