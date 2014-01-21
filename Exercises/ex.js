

var orders = [5, 7, 3];
var o2 = [99, 2, 70];
var o3 = [100,99,1];

var results = [];

function calc(orders) {
 
    var item = orders.shift();

    if (orders.length == 0) return;

    var next = orders[0];
    //get dist while adjusting for loop -- this is hard
    //if 100 lies between current and next then add 100 to lower and take abs of diff 
    var  clockswise = Math.abs(item-next);
    var counterclockwise = Math.abs(Math.max(item, next)-100) + Math.min(item,next);
    
    var dist = Math.min(clockswise,counterclockwise);

    results.push(dist);
    //recurse
    if (orders.length) return calc(orders);

    }

function totalsteps(o) {
    calc(o);
    
    console.log(results);
    var total = 0;
    results.forEach(function(x) {
        total += x;
    })
    return total;    
}

console.log(totalsteps(o3));

