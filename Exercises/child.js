
var cp = require('child_process');
cp.exec("dir", function(er,stdout, stderr) {
	if (er) {
		console.log(er.toString());
	} else if (stderr != '') {
		console.error(stderr);
	} else {
	console.log(stdout);
	}
});
