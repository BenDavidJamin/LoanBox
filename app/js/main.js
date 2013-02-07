require.config({
  paths: {
    'jquery': 'vendor/jquery/jquery',
    'underscore': 'vendor/underscore-amd/underscore',
    'backbone': 'vendor/backbone-amd/backbone',
    'handlebars': 'vendor/handlebars/handlebars'
  }
});

require(['views/app'], function(AppView) {
  new AppView;
});
