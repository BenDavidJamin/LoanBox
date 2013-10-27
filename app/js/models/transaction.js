define(['jquery', 'backbone', 'underscore'], function ($, Backbone, _){

  var Transaction = Backbone.Model.extend({

    url: "transactions",

    defaults: {
      amount: false,
      deposited: Date.now(),
      loanId: "",
      payBalance: true
    }

  });

  return Transaction;

});