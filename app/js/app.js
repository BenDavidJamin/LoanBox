define(['jquery', 'backbone', 'underscore'], function ($, Backbone, _){

  var App = {
    //App state in here
    user: {},
    routes: {},
    session: {}

  }

  /**
   * Extending Backbone.Events to provide the ability to have a central location to 
   * trigger and listen to events. 
   */
  return _.extend(App, {}, Backbone.Events);

});