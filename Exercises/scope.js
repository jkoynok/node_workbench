
//hoisting

function ScopeTest() {
  var x = 0;
  y = 1;
  z = function() {
        console.log('channel z');
   }
}

var yyy;
yyy = null;
console.log(yyy);

ScopeTest();

console.log(y);
z();

var y  = [1,11,1,1,3,4,5];

y.sort(function(a,b) { return (a < b);});

console.log(y);
console.log(y.join('-'));


var z = ['a', 'z','t','s', 'p','n'];
//z.sort();
console.log(z);


console.log(z.splice(1,2));

