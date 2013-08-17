define([
  'jquery',
  'underscore', 
  'backbone',
  'stackmobinit',
  'models/wine/WineModel'
], function($,_,Backbone,StackMob,Model){

  var Collection = StackMob.Collection.extend({
 	model: Model
  });

  return Collection;

});