define(['jquery', 'backbone', 'underscore', "models/loan"], function ($, Backbone, _, Loan){

  var Loans = Backbone.Collection.extend({

    //the Models 
    model: Loan,

    url: "/loans"

  });

  return Loans;

});