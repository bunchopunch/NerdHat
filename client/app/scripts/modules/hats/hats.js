/* globals _, Backbone */

define([
  'application',
  'text!templates/en-us/hats-collection.jst',         // Adding IETF language tag
  'text!templates/en-us/hats-collection-single.jst'
], function(App, HatsCollectionTemp, HatsItemTemp) {
  'use strict';

  var HatsMod = App.module('HatsMod', function(HatsMod) {
    HatsMod.addInitializer(function() {
      console.log('Module: HatsMod has been initialized.');

      var hatModel = Backbone.Model.extend();

      HatsMod.HatCollection = Backbone.Collection.extend({
        url: App.root + 'hats',
        model: hatModel,
        parse: function(response){  // Our models are not sored directly on the root response, 
          return response.hats;     // but inside a hats object.
        }
      });

      HatsMod.indexHats = new HatsMod.HatCollection();

      HatsMod.HatCompositeView = Backbone.Marionette.CompositeView.extend({
        className: 'panel clearfix hat',
        childViewContainer: '#collectionOutput',
        template: _.template(HatsItemTemp)
      });

      HatsMod.ShowModule = function() {
        HatsMod.indexHats.fetch().success();
        HatsMod.hatCollectionView = new HatsMod.HatCompositeView({
          id: 'primaryPanel',           // If we don't add an ID and class here it will
          className: 'hatCollection',   // get the ones from the constructor.
          collection: HatsMod.indexHats,
          template: _.template(HatsCollectionTemp)
        });
        return HatsMod.hatCollectionView;
      };

    });
  });

  return HatsMod;
});