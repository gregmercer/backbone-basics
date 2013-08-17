define([
  'jquery',
  'underscore',
  'backbone',
  'stackmobinit'
], function($,_,Backbone,StackMob) {

  var WineModel = StackMob.Model.extend({
  	schemaName: "wines"
  });
  
  return WineModel;

});

