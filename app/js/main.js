require.config({
  baseUrl: 'js',
  paths: {
    'jquery': '../vendor/jquery/jquery',
    'underscore': '../vendor/underscore-amd/underscore',
    'backbone': '../vendor/backbone-amd/backbone',
    'handlebars': '../vendor/handlebars/handlebars',
    'async': '../vendor/async/lib/async',
    'subroute': '../vendor/subroute/backbone.subroute'
  }

});

require(["router"],
  /**
   *
   * Initiates the router for the app.
   *
   */
  function(Router) {
    if (typeof DEBUG == 'undefined') DEBUG = true;
    if (typeof PRODUCTION == 'undefined') PRODUCTION = false;
    return new Router();
  }
);
