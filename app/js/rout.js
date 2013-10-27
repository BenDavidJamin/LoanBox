// Filename: router.js
define([
  'jquery',
  'backbone',
  'app',
  'views/app',
  'collections/loans'
], function($, Backbone, App, AppView, Loans){

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


    collections: function(){
      loans: new Loans();
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
      App.on("init", function(){ console.log("We're initing via Backbone.Events"); });
      
      var appView = new AppView({collection: (new Loans())});

      $("#main").append(appView.render().el);
    }
  });

  return App.Router;

});
