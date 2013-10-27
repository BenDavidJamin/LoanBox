define(['backbone', 'underscore', 'jquery', 'app', 'views/loan/new', 'views/loan/item', "i18n!nls/app", "hbs!templates/app"],
	function (Backbone, _, $, App, NewLoan, LoanItem, AppStrings, AppTemplate) {

  /**
   * @class App
   * @extends Backbone.View
   * The first touch down to the application
   */
  var AppView = Backbone.View.extend({

    // The html template
    template: AppTemplate,

    events: {
      "click #addLoan": "addLoan"
    },

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
      App.trigger("init");
      console.log( 'Using', AppStrings.title);


      this.newLoan = new NewLoan();

      this.listenTo(this.collection, "all", this.render);
      this.collection.fetch();
    },

    render: function(){
      this.$el.empty();
      _.each(this.collection.models, function(model){
        this.$el.append(new LoanItem({model: model}).render().el);
      }, this);
      return this;
    },

    addLoan: function(event){
      console.log("So you want to add a loan");
    }

  });

  return AppView;
});
