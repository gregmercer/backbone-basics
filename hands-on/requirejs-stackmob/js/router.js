// Filename: router.js
define([
  'jquery',
  'views/home/HomeView',
  'views/wine/WineAddView',
  'views/wine/WineUpdateView',
  'collections/wine/WineCollection'
], function($, HomeView, WineAddView, WineUpdateView, WineCollection) {
  
  AppRouter = Backbone.Router.extend({

    initialize: function(options) {
      this.collection = options.collection;
    },

    routes:{
        "":"home",
        "add":"add",
        "update/:id":"update",
    },
    home:function(e) {
      var homeView = new HomeView({collection: this.collection}).render();
    },

    add:function(e) {
      var addView = new WineAddView({collection: this.collection}).render();
    },

    update:function(e) { 
      model = this.collection.get(e);
      new WineUpdateView({model: model});
    }
  });
  
  var initialize = function(){
    var wineCollection = new WineCollection();
    wineCollection.fetch({async: false});
    var app_router = new AppRouter({collection: wineCollection});

    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});