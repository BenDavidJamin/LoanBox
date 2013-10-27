define(['backbone', 'underscore', 'jquery', 'app', "i18n!nls/app", "hbs!templates/loan/new", "models/loan"],
  function (Backbone, _, $, App, AppStrings, NewLoanTempate, Loan) {

  /**
   * @class App
   * @extends Backbone.View
   * The first touch down to the application
   */
  var AppView = Backbone.View.extend({

    // The html template
    template: NewLoanTempate,

    events: {
      "click #submit-button": "addLoan"
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
    },

    addLoan: function(event){
      event.preventDefault();

      this.loan.set("balance", this.$el.find("#balance").val());
      //this.loan.set("rate", $("#rate").val());

      this.loan.save();
      this.render();
    }

  });

  return AppView;
});
