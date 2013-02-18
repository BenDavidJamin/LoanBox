require.config({
  baseUrl: '../',
  paths: {
    'jquery': 'vendor/jquery/jquery',
    'underscore': 'vendor/underscore-amd/underscore',
    'backbone': 'vendor/backbone-amd/backbone',
    'handlebars': 'vendor/handlebars/handlebars'
  }
});

require(["jquery", "backbone", "router"],
 function($, Backbone, Router) {
        return new Router();
 }
);
