// Filename: router.js
define([
  'jquery',
  'backbone',
  'views/app',
  'routers/examples'
], function($, Backbone, AppView, ExampleRoutes){

  var App = {
    Routers: {}
  };
  /**
   *
   * @class Router
   * @extends Backbone.Router
   * Provides the routes for the app
   *
   */
  App.Router = Backbone.Router.extend({
    /**
     * @method initialize
     * Starts up the Backbone history for correct
     * site navigation.
     */
    initialize: function() {
      this.Routers = {};
      Backbone.history.start();

      _.bindAll(this, "invokeExamplesModule");
    },

    routes: {
      // Define some URL routes
      "": "index",
      "examples/*subroute": "invokeExamplesModule"
    },

    invokeExamplesModule: function(subroute){
      console.log(subroute);
      if(DEBUG){
        console.log("invoking subroutes for Examples");
      }
      if(!App.Routers.Examples){
        App.Routers.Examples = new ExampleRoutes("examples/");
      }
    },

    /**
     * @method index
     * The default view for the application.
     */
    index: function(){
        var app = new AppView();
        $("#main").append(app.el);
    }
  });

  return App.Router;
});