
define(['backbone', 'underscore', 'jquery', 'app', 'i18n!nls/app', 'views/transaction/new', "hbs!templates/loan/item"],
function (Backbone, _, $, App, AppStrings, NewTransaction, LoanItemTemplate) {

  /**
   * @class  LoanItem 
   * @extends Backbone.View
   */
  var LoanItem = Backbone.View.extend({

    template: LoanItemTemplate,

    initialize: function(){
      //get the mongodb id and send it to new transaction for adding a transaction
      this.newTransaction = new NewTransaction({loanId: this.model.get("_id")});

      this.listenTo(this.newTransaction, "transaction", this.render);
    },

    render: function(){
      this.$el.empty();
      //apend the item view of loan 
      this.$el.append(this.template(this.model.attributes));

      //append the newTransaction html
      this.$el.append(this.newTransaction.render().el);

      return this;
    }

  });

  return LoanItem;

  });