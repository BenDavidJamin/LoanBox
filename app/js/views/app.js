define(['backbone', 'underscore', 'jquery'],
	function (Backbone, _, jquery) {

  /**
   * @class App
   * @extends Backbone.View
   * The first touch down to the application
   */
  var App = Backbone.View.extend({
    // The tag type of the appview.
    tagName: "div",

    /**
     * @method initialize
     *
     * This is just the boilerplate so we only print something to the
     * console.log (WARNING: May not work in IE)
     */
    initialize: function() {
      if(DEBUG){
        console.log("we're using the debug mode");
      }

      if(PRODUCTION){
        console.log("we're using the production mode");
      }
      console.log( 'Wahoo!' );
    }

  });

  return App;
});
