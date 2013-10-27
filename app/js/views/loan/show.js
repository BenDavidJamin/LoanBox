define(['backbone', 'underscore', 'jquery', 'app', "i18n!nls/app", "hbs!templates/loan/show", "models/loan"],
  function (Backbone, _, $, App, AppStrings, LoanTempate, Loan) {

  /**
   * @class App
   * @extends Backbone.View
   * The first touch down to the application
   */
  var LoanView = Backbone.View.extend({

    // The html template
    template: LoanTempate,

    events: {
    },

    /**
     * @method initialize
     *
     * This is just the boilerplate so we only print something to the
     * console.log (WARNING: May not work in IE)
     */
    initialize: function() {
      this.loan = new Loan();
    },

    render: function(){
      this.$el.html(this.template());

      return this;
    }

  });

  return LoanView;
});
