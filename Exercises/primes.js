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
    x += 1;
}
console.log('starting');
logit(queens(board));

function queens(board) {

    var x = 0,
        y = 0;
    while (x < 8) {
        while (y < 8) {
            //rank
            if ((!u.where(board, {
                x: x
            }).length > 0)
            //file
            &&
            (!u.where(board, {
                y: y
            }).length > 0)) {
                u.where(board, {
                    x: x,
                    y: y
                })[0].populated = true;
                console.log('match!');

            }
            y += 1;
        }
        x += 1;
    }
}

function logit(b) {
    var x = 0,
        y = 0;
    var l;
    while (x < 8) {
        while (y < 8) {
            if (u.where(board, {
                x: x,
                y: y
            }).populated) {
                l += '1';
            }
            else {
                l += '0';
            }
        }
    }
    x += 1;
}


