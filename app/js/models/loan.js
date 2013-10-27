define(['jquery', 'backbone', 'underscore'], function ($, Backbone, _){

  var Loan = Backbone.Model.extend({

    url: "loans",

    defaults: {
      compounding: false,
      rate: 0,
      description: "You borrowed some money",
      interest: 0
    }

  });

  return Loan;

});