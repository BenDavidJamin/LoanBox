## What is This?

Switching to a more modular approach to writing JavaScript is unfortunately a more difficult process than we might hope. Once you understand the concept of AMD, you then have to figure out the logistics.

- How do you install RequireJS?
- What about non-AMD libraries and frameworks?
- What about dependency management?
- What about optimization or build processes (concatenation, minification)?
- What about configuration?

This repo, along with the associated video tutorial on Nettuts+ should give you an excellent start. Also, at some point, be sure to consider Yeoman with RequireJS support.

## Setup

First, of course, download this repo. Then, from the Terminal (assuming Node.js installed), install RequireJS.

    npm install requirejs

Next, we need an easy way to deal with dependency management. We'll use Bower, from the guys at Twitter.

    npm install bower

Let's now install the dependencies for this project. I'm assuming that we're building a Backbone project, so I've listed RequireJS, jQuery, Underscore, and Backbone as dependencies.

    bower install

> Please note that we're using the AMD versions of both Backbone and Underscore to make the setup process as easy as possible.

When ready to build the project, run:

    build/build.sh

this will create a new `dist` directory, copy the files over, run the r.js optimizer on assets, and clean it the file structure a bit for production. Refer to `app.build.js`for configuration options.

### CSS Imports

If you're not using a preprocessor, feel free to modularize your stylesheets, and `@import` them into a master stylesheet. During the build process, r.js will merge these files together, so that you don't have to deal with any performance hits from using `@import`.

#### Sass
 
To get sass up and running you'll need to do a few things

1. Install Ruby
2. Install ruby gem
3. 

        gem install sass

4. Set it up to watch the sass files 

         sass --watch style.scss:style.css
5. We're using compass for further simplification and a nice framework for provided helpers so lets setup that. 

		gem install compass
6. Watch our directory

		compass watch

### Testing with Testem

 The problem with testing is generally the overhead in setup. Hopefully this setup with testem will remove some of the 
 head aches. All of the test scripts use requirejs so imported the files you want to do testing on can be done in an AMD fashion.

 Ensure that testem is installed on your machine. 

    npm install -g testem

 The tests for the project will be in files and subfolders under 

    app/tests

 Once you have your tests you can run testem with 
 
    testem
 
 For further documentation [testem documenation](https://github.com/airportyh/testem)

### I18n Support

Right now we aren't really concerned with adding any language support besides english, but doesn't mean we should be prepared. This boilerplate currently uses the plugin for requirejs [i18n](https://github.com/requirejs/i18n) 

The way it works is that requirejs looks for the web browser language tag. It then looks in the app/nls/app.js for a related language. If no supported language is found it will default to the root file, which in our case is english.

You can use the application strings by defining the import with requirejs by doing

		define["i18n!nls/app", AppStrings] 

Then you can pass it into any templating functionality with the AppStrings
and do something like

	{{AppStrings.title}}

Exmaple above in Handlebars template
