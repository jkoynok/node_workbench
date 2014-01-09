//8 queens
var u = require("underscore");

var space = function(_x, _y) {
    this.x = _x;
    this.y = _y;
    this.populated = false;
}

var board = [];

var x = 0,
    y = 0;
while (x < 8) {
    while (y < 8) {
        board.push(new space(x, y));
        y += 1;
    }
    y = 0;
    x += 1;
}

logit(queens(board));

function queens(board) {

    var x = 0,
        y = 0;
    while (x < 8) {
        while (y < 8) {
            //rank
            if (!u.some(board, function(i) {
                return (i.x == x && i.populated);
            })
            //file
            &&
            !u.some(board, function(i) {
                return (i.y == y && i.populated);
            })) {
                var p = u.findWhere(board, {
                    x: x,
                    y: y
                });
                p.populated = true;
                console.log(p);
                console.log('match!');

            }
            else {
                //console.log('no match for ' + x + ',' + y);
            }
            y += 1;
        }
        y = 0;
        x += 1;
    }
    return board;
}

function logit(b) {
    var x = 0,
        y = 0;
    var l = '';
    while (x < 8) {
        while (y < 8) {
            if (u.findWhere(b, {
                x: x,
                y: y
            }).populated) {
                l += '1 ';
            }
            else {
                l += '0 ';
            }
            y += 1;
        }
        y = 0;
        console.log(l);
        l = '';
        x += 1
    }
}
