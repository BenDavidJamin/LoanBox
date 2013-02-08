// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/app'
], function($, _, Backbone, App){

  var Router = Backbone.Router.extend({

    initialize: function() {
            Backbone.history.start();
    },
    routes: {
      // Define some URL routes
      "": "index"
    },

    index: function(){
        var app = new App();
        $("#main").append(app.el);
    }
  });

  return Router
});