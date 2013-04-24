require.config({
  baseUrl: 'js',
  paths: {
    'jquery': '../vendor/jquery/jquery',
    'underscore': '../vendor/underscore-amd/underscore',
    'backbone': '../vendor/backbone-amd/backbone',
    'handlebars': '../vendor/handlebars/handlebars',
    'async': '../vendor/async/lib/async',
    'subroute': '../vendor/subroute/backbone.subroute',
    'text': '../vendor/text/text',
    'formatter': '../vendor/number-formatter/index',
    'i18n': '../vendor/i18n/i18n',
    'nls': '../nls'
  },

  shim: {

    'handlebars': {
      exports: 'Handlebars'
    },

    'underscore': {
      deps: ["handlebars", "text", "i18n"]
    },

    'formatter': {
      exports: "NumberFormatter"
    }
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
