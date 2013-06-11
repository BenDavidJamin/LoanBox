module.exports = function(grunt) {
  //Do grunt-related things in here

  grunt.loadNpmTasks('grunt-contrib');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-requirejs');

  //Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // Pull in the npm install package for possible variables
    requirejs: {
      compile : {
        options : {
          appDir: "app",
          baseUrl: "js",
          dir: "production",
          name: 'main',
          mainConfigFile: 'app/js/main.js',
          optimizeCss: 'standard',

          //How to optimize all the JS files in the build output directory.
          optimize: "uglify2",

          removeCombined:true,

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
            mangle: true
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

    clean: [
      'production/tests',
      'production/testRunner.html',
      'production/css/sass',
      'production/css/config.rb'    
    ],

    jshint: {
      files: ['app/js/**/*.js']
    },

    shell: {
      testemCI: {
        command: "testem ci > testem.tap"
      },
      postBuild:{
        command: [
          'cd production',
          // save require.js but remove everything else in vendor dir
          'mv vendor/requirejs/require.js require.js',
          'rm -rf vendor',
          'mkdir -p vendor/requirejs',
          'mv require.js vendor/requirejs/require.js',
          // save main.js but remove everything else in js dir
          'mv js/main.js main.js',
          'rm -rf js',
          'mkdir js',
          'mv main.js js/main.js'
        ].join('&&')
      }
    },

    yuidoc: {
      compile: {
        name: '<%= pkg.name %>',
        description: '<%= pkg.description %>',
        version: '<%= pkg.version %>',
        url: '<%= pkg.homepage %>',
        options: {
          paths: 'app/js/.',
          outdir: 'apidocs/'
        }
      }
    }

  });

  grunt.registerTask('test', ['jshint', 'shell:testemCI']);
  grunt.registerTask('default', ['requirejs', 'clean', 'shell:postBuild']);
};
