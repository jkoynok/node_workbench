
var t = new Object();

t['firstname'] = 'jon';
t['lastname'] = 'koynok';

for (var prop in t) {
    console.log(prop);   
}

console.log(t.hasOwnProperty('firstname'));


var t2 = { x: 1, y: 2};
console.log(t2.prototype);

t2.shout = function() {
    console.log('my x is ' +this.x + ' and my y is ' + this.y);
};

t2.shout();