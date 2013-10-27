
define(['backbone', 'underscore', 'jquery', 'app', 'i18n!nls/app'],
function (Backbone, _, $, App, AppStrings) {

  /**
   * @class  TransactionItem 
   * @extends Backbone.View
   */
  var TransactionItem = Backbone.View.extend({

    initialize: function(){

    },

    render: function(){
      this.$el.html(template());

      return this;
    }

  });

  return TransactionItem;

  });