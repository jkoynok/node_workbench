var line1 = { x1: 0, y1: 1, x2:10, y2: 20};
var line2 = { x1: 3, y1: 2, x2:14, y2: 25};

//y = mx + b
function GetMB(l) {

    var m = (l.x2-l.x1 === 0) ? 0 : (l.y2 - l.y1) / (l.x2 - l.x1);
    var b = l.y1 - m * l.x1;
    return { m: m, b: b};
    
}

console.log(GetMB(line1));
