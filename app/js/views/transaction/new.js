
define(['backbone', 'underscore', 'jquery', 'app', 'models/transaction', 'i18n!nls/app', "hbs!/templates/transaction/new"],
function (Backbone, _, $, App, Transaction, AppStrings, NewTransactionTemplate) {

  /**
   * @class NewTransaction  
   * @extends Backbone.View
   */
  var NewTransaction = Backbone.View.extend({

    template: NewTransactionTemplate,

    initialize: function(options){
      console.log(options.loanId);
      this.loanId = options.loanId;
      this.transaction = new Transaction();
      this.listenTo(this, "transaction", this.render);
    },

    events: {
      "click #submit-button": "addTransaction"
    },


    render: function(){
      this.$el.html(this.template({loanId: this.loanId}));

      return this;
    },

    addTransaction: function(event){
      event.preventDefault();
      // get parent

      var payBalance = this.$el.find('#payBalance').is(":checked");

      this.transaction.set("loanId", this.loanId);
      this.transaction.set("payBalance", payBalance);
      this.transaction.set("amount", -this.$el.find('#amount').val());

      this.transaction.save();
      this.trigger("transaction");
    }

  });

  return NewTransaction;

  });