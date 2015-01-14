/* globals _, Backbone */

define([
  'application',
  'apps/hats/models/HatsAppModel'
],function(App, HatsAppModel){
  'use strict';

  var HatsAppCollection = Backbone.Collection.extend({
    url: App.root + 'hats',
    model: HatsAppModel,
//    localStorage: new Backbone.LocalStorage('localHatsAppCollection'),
    parse: function(response){  // Our models are not sored directly on the root response, 
      return response.hats;     // but inside a hats object.
    },

    initialize:function(){
      console.log('Hat Collection Init');
//      this.first_load=true;
//      this.fetch({
//        success:_.bind(function(collection) {
//          console.log(this,arguments);
//          this.trigger('update',collection);
//          if(this.first_load){
//            this.first_load=false;
//            this.trigger('ready',collection);
//          }
//        }, this)
//      });
    },
    get_hats:function(attributes){
      if(typeof attributes==='object'){
        return this.where(attributes);
      }
      else if(attributes===undefined){
        return this.models;
      }
      else{
        return null;
      }
    },
  });

  return HatsAppCollection;
});
