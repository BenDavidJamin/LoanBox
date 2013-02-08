


define(['backbone'], 
	function(Backbone) {
  var App = Backbone.View.extend({

  	tagName: "div",

    initialize: function() {
      console.log( 'Wahoo!' );
    }
  });

  return App;
});
