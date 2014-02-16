var r = /<(\w+)>/;
var h = '<a><b></b><c><d></d></c></a><b></b>';
r.matches = [];

r.getMatches = function(s) {
    var m = this.exec(s);
    console.log(m);
    if (m) {
        this.matches[m[0]] = this.matches[m[0]] ? this.matches[m[0]] + 1 : 1
    }
    else {
        return;
    }
    
    s = s.slice(m.index+1);
    return this.getMatches(s);
}

r.getMatches(h);

console.log(r.matches);