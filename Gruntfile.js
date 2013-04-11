module.exports = function(grunt) {
  //Do grunt-related things in here

  grunt.loadNpmTasks('grunt-contrib');
  grunt.loadNpmTasks('grunt-testem');
  //Project configuration
  grunt.initConfig({
    // Pull in the npm install package for possible variables
    requirejs: {
      compile : {
        options : {
          appDir: "app",
          baseUrl: "js",
          paths: {
            'jquery': '../vendor/jquery/jquery',
            'underscore': '../vendor/underscore-amd/underscore',
            'backbone': '../vendor/backbone-amd/backbone',
            'handlebars': '../vendor/handlebars/handlebars'
          },
          dir: "production",
          name: 'main',
          mainConfigFile: 'app/js/main.js',
          optimizeCss: 'standard',

          //How to optimize all the JS files in the build output directory.
          optimize: "none",

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
        }
      }
    },

    uglify: {
      my_target: {
        options: {
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

        },

        files: {
          'production/js/main.js': ['production/js/main.js']
        }
      }
    },

    clean: ['production/js/collections', 'production/js/models', 'production/js/views'],

    jshint: {
      files: ['app/js/**/*.js']
    },

    'testem': {
      options: {
        "src_files": [
          "app/tests/*"
        ],
        "test_page": "app/testRunner.html",
        launch_in_ci : [
          'phantomjs'
        ]
      },
      main : {
        files : {
          'tests.tap': [
            'app/testRunner.html'
          ]
        }
      }
    }

  });


  grunt.registerTask('test', ['jshint', 'testem']);
  grunt.registerTask('default', ['jshint', 'requirejs', 'uglify', 'clean']);
};