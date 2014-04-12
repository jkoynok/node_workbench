
var async = require('async');

function f1(req, res, next) {
 res.f1 = 'data from f1';
 next(null);
}

function f2(req, res, next) {
 res.f2 = 'data from f2';
 console.log('f2 sees res.f1:' + res.f1);
 next('error!');   
}

function f3(req, res, next) {
 res.f3 = 'data from f3';
 next(null);   
}

function rend(er,result, a) {
    console.log('rend ' + result);
//          res.render('test', { data: res.f1 });
}



function doStuff(req, res, next) {
    async.applyEach([f1, f2, f3], req, res, cb);

    function cb(er) {
    	if (er)
    		console.log(er);
    	console.log(res);
    }
    
}

doStuff('a', {},'c' );