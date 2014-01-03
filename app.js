require.config({
  paths: {
    "jquery": "libs/jquery.min",
    "underscore": "libs/underscore.min",
    "backbone" : "libs/backbone.min"
  }
});

require([
  'scripts/test',
  'order!libs/jquery.min',
  'order!libs/underscore.min',
  'order!libs/backbone.min'
  ], function(test){
  var initialize = function(){
    test.render();
    }
  return {
    initialize: initialize
  };
});