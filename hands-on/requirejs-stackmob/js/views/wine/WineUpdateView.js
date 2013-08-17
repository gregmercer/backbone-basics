define([
  'jquery',
  'underscore',
  'backbone',
  'models/wine/WineModel',
  'text!templates/wine/WineAddTemplate.html'
], function($, _, Backbone, WineModel, WineAddTemplate){

  var WineUpdateView = Backbone.View.extend({
    className:"span8",
    tagName: "div",

    events: {
       "click #saveBtn": "save",  
       "keypress .addName":  "onEnter"
    },

    initialize: function() {
      this.template = _.template(WineAddTemplate);
      this.model = this.options.model;
      this.render();
    },

    render: function() {
      $('.span8').remove();
      $(this.el).html(this.template(this.model.toJSON()));
      $('.row').append(this.el);
      return this;
    },

    onEnter: function(e) {
      if (e.keyCode == 13) {
        this.save(e); 
      }
    },

    save: function(e) {
      e.preventDefault();

      this.model.save({name:$('#name').val()},{
        success: function(model) {
          
        }
      });
      
      return this;
    }

  });

  return WineUpdateView;
  
});