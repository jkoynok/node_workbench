define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){
    
    var t = Backbone.View.extend({
        el: 'body',
        render: function() {
            this.$el.append("hello world");
            return this;
        }
    });     
    return new t().render();
});

