require.config({
  baseUrl: 'js',
  paths: {
    'jquery': '../vendor/jquery/jquery',
    'underscore': '../vendor/underscore-amd/underscore',
    'backbone': '../vendor/backbone-amd/backbone',
    'handlebars': '../vendor/handlebars/handlebars',
    'hbs': '../vendor/require-handlebars-plugin/hbs',
    'i18nprecompile': '../vendor/require-handlebars-plugin/hbs/i18nprecompile',
    'json2': '../vendor/require-handlebars-plugin/hbs/json2',
    'async': '../vendor/async/lib/async',
    'subroute': '../vendor/subroute/backbone.subroute',
    'text': '../vendor/text/text',
    'formatter': '../vendor/number-formatter/index',
    'i18n': '../vendor/i18n/i18n',
    'nls': '../nls',
    'templates': '../templates'

  },

  hbs: {
    disableI18n: true
  },

  shim: {

    'handlebars': {
      exports: 'Handlebars'
    },

    'underscore': {
      exports: "_",
      deps: ["handlebars", "text", "i18n"]
    },

    'formatter': {
      exports: "NumberFormatter"
    }
  }
});


require(["rout"],

  function(Router) {
    if (typeof DEBUG == 'undefined') DEBUG = true;
    if (typeof PRODUCTION == 'undefined') PRODUCTION = false;
    return new Router();
  }
);


