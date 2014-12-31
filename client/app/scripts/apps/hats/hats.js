/* globals _, Backbone */

define([
  'application',
  'text!templates/en-us/hats-collection.jst',         // Adding IETF language tag
  'text!templates/en-us/hats-collection-single.jst'
], function(App, HatsCollectionTemp, HatsItemTemp) {
  'use strict';

  var HatsApp = App.module('HatsApp', function(HatsApp) {
    HatsApp.addInitializer(function() {
      console.log('HatsApp has been initialized.');

      var HatsAPI = {
        showHats: function(){
          App.hostLayout.primaryViewport.show( HatsApp.ShowModule() );
        }
      };

      var hatModel = Backbone.Model.extend();

      HatsApp.HatCollection = Backbone.Collection.extend({
        url: App.root + 'hats',
        model: hatModel,
        parse: function(response){  // Our models are not sored directly on the root response, 
          return response.hats;     // but inside a hats object.
        }
      });

      HatsApp.indexHats = new HatsApp.HatCollection();

      HatsApp.HatCompositeView = Backbone.Marionette.CompositeView.extend({
        className: 'panel clearfix hat',
        childViewContainer: '#collectionOutput',
        template: _.template(HatsItemTemp)
      });

      HatsApp.ShowModule = function() {
        HatsApp.indexHats.fetch().success();
        HatsApp.hatCollectionView = new HatsApp.HatCompositeView({
          id: 'primaryPanel',           // If we don't add an ID and class here it will
          className: 'hatCollection',   // get the ones from the constructor.
          collection: HatsApp.indexHats,
          template: _.template(HatsCollectionTemp)
        });
        return HatsApp.hatCollectionView;
      };

      HatsApp.Router = Backbone.Marionette.AppRouter.extend({
        appRoutes: {
          'hats': 'showHats'
        }
      });

      App.addInitializer(function(){
        new HatsApp.Router({
          controller: HatsAPI
        });
      });

    });
  });

  return HatsApp;
});