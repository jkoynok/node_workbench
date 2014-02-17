var http = require('http'),
    request = require("request"),
    r = /<(\w+)>/;

r.matches = {};
r.a = [];

r.getMatches = function(s) {
    var m = this.exec(s);

    if (m) {
        this.matches[m[0]] = this.matches[m[0]] ? this.matches[m[0]] + 1 : 1
    }
    else {
        for (var x in this.matches) {
            this.a.push({
                tag: x,
                count: this.matches[x]
            });
        }
        this.a.sort(function(a, b) {
            a = a.count; b = b.count;
            return a < b ? -1 : (a > b ? 1 : 0);
        });
        return;
    }

    s = s.slice(m.index + 1);
    return this.getMatches(s);
}

request("http://www.nytimes.com", function(error, response, body) {
    r.getMatches(body);
    console.log(r.a);

});