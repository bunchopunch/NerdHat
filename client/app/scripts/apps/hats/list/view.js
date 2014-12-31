/* globals _, Backbone */

define([
  'application',
  'text!apps/hats/list/templates/hats-collection.jst',
  'text!apps/hats/list/templates/hats-collection-single.jst'
], function(App, HatsCollectionTemp, HatsItemTemp) {
  'use strict';

  App.module('HatsApp.Show.View', function(View) {
    View.ListView = Backbone.Marionette.ItemView.extend({
      template: _.template(HatsCollectionTemp)
    });

      var hatModel = Backbone.Model.extend();

      View.HatCollection = Backbone.Collection.extend({
        url: App.root + 'hats',
        model: hatModel,
        parse: function(response){  // Our models are not sored directly on the root response, 
          return response.hats;     // but inside a hats object.
        }
      });

      View.indexHats = new View.HatCollection();


      View.HatCompositeView = Backbone.Marionette.CompositeView.extend({
        className: 'panel clearfix hat',
        childViewContainer: '#collectionOutput',
        template: _.template(HatsItemTemp)
      });

      View.ShowModule = function() {
        View.indexHats.fetch().success();
        View.hatCollectionView = new View.HatCompositeView({
          id: 'primaryPanel',           // If we don't add an ID and class here it will
          className: 'hatCollection',   // get the ones from the constructor.
          collection: View.indexHats,
          template: _.template(HatsCollectionTemp)
        });
        return View.hatCollectionView;
      };

  });

  return App.HatsApp.Show.View;
});