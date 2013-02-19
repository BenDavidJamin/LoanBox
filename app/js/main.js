require.config({
  baseUrl: '../',
  paths: {
    'jquery': 'vendor/jquery/jquery',
    'underscore': 'vendor/underscore-amd/underscore',
    'backbone': 'vendor/backbone-amd/backbone',
    'handlebars': 'vendor/handlebars/handlebars'
  }
});

require(["router"],
  /**
   *
   * Initiates the router for the app.
   *
   */
  function(Router) {
    return new Router();
  }
);
