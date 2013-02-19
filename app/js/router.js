// Filename: router.js
define([
  'jquery',
  'backbone',
  'views/app'
], function($, Backbone, App){

  /**
   *
   * @class Router
   * @extends Backbone.Router
   * Provides the routes for the app
   *
   */
  var Router = Backbone.Router.extend({
    /**
     * @method initialize
     * Starts up the Backbone history for correct
     * site navigation.
     */
    initialize: function() {
      Backbone.history.start();
    },

    routes: {
      // Define some URL routes
      "": "index"
    },

    /**
     * @method index
     * The default view for the application.
     */
    index: function(){
        var app = new App();
        $("#main").append(app.el);
    }
  });

  return Router;
});