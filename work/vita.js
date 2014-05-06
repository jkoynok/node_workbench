app.get('/jk', function(req, req, next) {
      var reqs = 300;
      var tasks = {};
      var i = 0;
      while ( i < reqs) {
          tasks[i] = r;
          i++;
      }
      console.log(tasks[1]);
      console.log('queuing 300 requests');
      async.parallel(tasks, function(err, results) {
          if (err) {
            console.log('err:' + err.toString());
          }
          console.log('done');
          return next();
      });
      
    });

    function r(cb) {
        var start = new Date();
        request({

            uri: 'http://localhost:4000/tenseconds?seconds=' + 125
        }, function(err, resp, body) {
          if (err) { console.log(err); }
          console.log('Request took:', new Date() - start, 'ms');
          cb(err, 1);
        });
    }



-----be


  app.get('/tenseconds', function(req, res, next) {
      //console.log(req.query.seconds + " secs");
      setTimeout(function() {
          return res.send(200);
      }, req.query.seconds * 1000);    
  });

---adjust maxSockets and default timeout
