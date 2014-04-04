var http = require('http'),
    request = require("request"),
    r = /<(\w+)>/g,
    rr = new RegExp('<(\w+)>','g');
var s = '<a><b></b></a><m></m>';

var res = r.exec(s);
console.log(res);
