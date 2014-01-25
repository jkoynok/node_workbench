
var r = [];

for (var i=0; i < 10; i++) {
    var next = (i > 0) ? r[i-1] : null;
    r.push({ data: Math.ceil(Math.random() * 10),
        next: next
    });
}

console.log(r);

r.sort(function(i,j) { return (i.data > j.data); });

console.log(r);

var i = 0;

r.forEach(function(x) {
   r.next = (i < r.length-1) ? r[i+1] : null;
   i+=1;
});

console.log(r);