// Filename: router.js
define([
  'jquery',
  'backbone',
  'app',
  'views/app',
  'routers/examples'
], function($, Backbone, App, AppView, ExampleRoutes){

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
      Backbone.history.start();
    },

    routes: {
      // Define some URL routes
      "": "index",
      "examples/*subroute": "invokeExamplesModule"
    },

    /**
     * [A sub section of the application that deals with extentions of examples/]
     * @method invokeExamplesModule
     * @param  {[type]}             subroute [The subroute of the examples router]
     * @return {[type]}                      [description]
     */
    invokeExamplesModule: function(subroute){
      if(DEBUG){
        console.log("invoking subroutes for Examples");
      }
      if(!App.routes.Examples){
        App.routes.Examples = new ExampleRoutes("examples/");
      }
    },

    /**
     * @method index
     * The default view for the application.
     */
    index: function(){
        App.on("init", function(){ console.log("We're initing via Backbone.Events"); });

        var appView = new AppView();

        $("#main").append(appView.render().el);
    }
  });

  return App.Router;
});
