
define(['backbone', 'underscore', 'jquery', 'app', 'i18n!nls/app'],
function (Backbone, _, $, App, AppStrings) {

  /**
   * @class  Transaction 
   * @extends Backbone.View
   */
  var Transaction = Backbone.View.extend({

    initialize: function(){

    },

    render: function(){
      this.$el.html(template());

      return this;
    }

  });

  return Transaction;

  });