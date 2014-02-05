
var pi =0;
for (var n =0; n< 100000000; n++) {
	pi += Math.pow(-1,n) / (2*n+1);
}

pi *=4;

console.log(pi);