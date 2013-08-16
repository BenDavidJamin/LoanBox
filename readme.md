## GIS Backbone Boilerplate

Web App development is still the wild west of programing. There are hundreds of ways to do the same thing with different languages and ideas on how to structure a program. This is just one example of how we think things should be done. It is an opion not a known fact. 



## Setup

### Requirements

- nodejs
- npm
- testem 
- grunt-cli
- bower

	
		npm install –g testem@0.3.x
		npm install –g grunt-cli
		npm install –g bower 



There are two steps to get the boiler plate running. The first one is setting up the tools from the nodejs side. 

    npm install

Next after installing the all of the node packages we need we can run the javascript package manager. 

    bower install

Finally to build our application there are grunt tasks setup to compile the entire project.


    grunt


That's it we've just installed all of our node tools for developing. The javascript packages that the boiler plate uses and compiled it for production. 


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
6. Watch our directory directory for changes. If any change is detected compass will compile the scss into the main style.css file automagically.

        compass watch

### Testing the front end with Testem

 The problem with testing is generally the overhead in setup. Hopefully this setup with testem will remove some of the 
 head aches. All of the test scripts use requirejs so imported the files you want to do testing on can be done in an AMD fashion.

 Ensure that testem is installed on your machine. 

    npm install -g testem@0.3.x

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

A reference for browser language codes can be found [here](http://www.metamodpro.com/browser-language-codes)
