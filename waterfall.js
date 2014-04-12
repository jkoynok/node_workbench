
var async = require('async');
var request = require('request');
var cheerio = require('cheerio');
var _ = require('lodash');


function postgazette(req,res,next)  {
	request('http://www.postgazette.com', function (error, response, body) {
  	if (!error && response.statusCode == 200) {
  		var $ = cheerio.load(body);
  		res.stories = res.stories || [];
  		res.stories = res.stories.concat(_.map( $('h2'), function(x) { return $(x).text(); }));
    	next(null, req, res)
  	}
	})
}


function nytimes(req,res,next)  {
	request('http://www.nytimes.com', function (error, response, body) {
  	if (!error && response.statusCode == 200) {
  		var $ = cheerio.load(body);
  		res.stories = res.stories || [];
  		res.stories = res.stories.concat( _.map( $('h6'), function(x) { return $(x).text(); }));
    	next(null, req, res)
  	}
	})
}



function f1(req, res, next) {
 res.f1 = 'data from f1';
 next(null, req, res);
}

function f2(req, res, next) {
 res.f2 = 'data from f2';
 console.log('f2 sees res.f1:' + res.f1);
 next(null, req, res);
}

function f3(req, res, next) {
 res.f3 = 'data from f3';
 next(null, req, res);
}

function rend(er, req, res) {
    console.log(res);
}

function doStuff(req, res, next) {

	async.waterfall([
		function(cb) {
			cb(null, req, res);
		}
		,postgazette	
		,nytimes	
		 ]
		,rend
		);    
    
}



doStuff('a', {}, 'c');