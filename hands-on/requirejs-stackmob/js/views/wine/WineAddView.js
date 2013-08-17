define([
  'jquery',
  'underscore',
  'backbone',
  'models/wine/WineModel',
  'text!templates/wine/WineAddTemplate.html'
], function($, _, Backbone, WineModel, WineAddTemplate){

 var WineAddView = Backbone.View.extend({

    className:"span8",
    tagName: "div",

    events: {
       "click #saveBtn": "save",  
       "keypress .addName":  "onEnter"
    },

    initialize: function(options) {
      this.collection = this.options.collection;
      this.template = _.template(WineAddTemplate);
    },

    render: function() {
        var _this = this,
        template = this.template;;

      $('.span8').remove();

      $(this.el).html(template());
      $('.row').append(this.el);

      return this;
    },

    onEnter: function(e) {
      if (e.keyCode == 13) {
        this.save(e); 
      }
    },

    save: function(e) {
      var collection  = this.collection;
      console.log(collection)
      e.preventDefault();

      var newWine = new WineModel({name:$('#name').val() });

      newWine.create({
        success: function(model){
          collection.add(model);
        }
      });  

      //this.collection.add(newWine);

      $('#name').val('');   
      
      return this;
    }

  });

  return WineAddView;
  
});