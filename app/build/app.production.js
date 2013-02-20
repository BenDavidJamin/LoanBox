({
  appDir: "../",
  baseUrl: "js",
  paths: {
    'jquery': '../vendor/jquery/jquery',
    'underscore': '../vendor/underscore-amd/underscore',
    'backbone': '../vendor/backbone-amd/backbone',
    'handlebars': '../vendor/handlebars/handlebars',
    'async': '../vendor/async/lib/async'
  },
  dir: "../../production",
  name: 'main',
  mainConfigFile: '../js/main.js',
  optimizeCss: 'standard',

  //How to optimize all the JS files in the build output directory.
  optimize: "uglify2",

  uglify2: {
    //Example of a specialized config. If you are fine
    //with the default options, no need to specify
    //any of these properties.
    output: {
        beautify: false
    },
    compress: {
        sequences: false,
        global_defs: {
            DEBUG: false,
            PRODUCTION: true
        }
    },
    warnings: true,
    mangle: false
  }
})
