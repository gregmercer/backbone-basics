define([
  'jquery',
  'underscore',
  'backbone',
  'stackmobinit',
  'models/wine/WineModel'
], function($,_,Backbone,StackMob,WineModel){

	var  WineCollection = StackMob.Collection.extend({
    	model: WineModel
    });

  return WineCollection;

});