define(['jquery', 'backbone', 'underscore', 'subroute'], function ($, Backbone, _){

  var ExampleRoutes = Backbone.SubRoute.extend({
    routes: {

        // matches http://yourserver.org/examples 
        ""               : "examples",

        // matches http://yourserver.org/examples/search 
        "search"         : "searchExamples",

        // matches http://yourserver.org/examples/:id 
        ":id"   : "viewExampleDetail"
    },
    examples: function() {
        // ...module-specific code
        console.log("index of examples");
    },
    searchExamples: function() {
        // ...module-specific code
        console.log("SearchExamples");
    },
    viewExampleDetail: function(id) {
        // ...module-specific code
        console.log("The id of the example we're looking at is: "+id);
    }

  });

  return ExampleRoutes;

});