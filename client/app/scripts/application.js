define([
  'jquery',
  'underscore',
  'backbone',
  'modernizr',
  'foundation',
  'marionette',
  'text!templates/en-us/hats-collection.jst',         // Adding IETF language tag
  'text!templates/en-us/hats-collection-single.jst'
], function($, _, Backbone, Modernizr, Foundation, Marionette, HatsViewTemp, HatsViewSingleTemp){
  'use strict';
  console.log('Application was loaded');

  var initialize = function() {
    // Start Foundation
    $(document).foundation();
    // Set up a Marionette Application
    var App = new Backbone.Marionette.Application();

    // Set up basic paths.
    App.root = 'http://localhost:9090/api/';

    // We will eventually require templates here, but with a dynamic culture/language code.
    // If we choose to go down that road.

    // THE APP. STUFF THAT WILL EVENTUALLY BE BROKEN OUT TO MODULES =============================
    App.addRegions({
      primaryViewport: '#applicationHost'
    });

    App.Router = Marionette.AppRouter.extend({
      appRoutes: {
        '': 'hatCollection',        // http://localhost:9000/#
        'hats': 'hatCollection',    // http://localhost:9000/#/hats
        'hats/:id': 'hatCollection' // http://localhost:9000/#/hats Not yet implemented.
      }
    });

    App.Controller = Marionette.Controller.extend({
      hatCollection: function() {
        indexHats.fetch().success(function(){ 
          console.log(indexHats);
          App.primaryViewport.show(hatCollectionView);
        });
      }
    });

    // TODO: Add a state model?

    var hatModel = Backbone.Model.extend();

    var HatCollection = Backbone.Collection.extend({
      url: App.root + 'hats',
      model: hatModel,
      parse: function(response){  // Our models are not sored directly on the root response, 
        return response.hats;     // but inside a hats object.
      }
    });

    var indexHats = new HatCollection();

    // VIEWS (ALSO TO BE BROKEN OUT) ============================================================

    // As long as we're dropping the item view for now...
    // var HatView = Backbone.Marionette.ItemView.extend();

    var HatCompositeView = Backbone.Marionette.CompositeView.extend({
      className: 'panel clearfix hat',
      childViewContainer: '#collectionOutput',
      template: _.template(HatsViewSingleTemp)

      // Doesn't seem that this bit is needed:
      // ItemView: HatView

      // May want to add this once we start updating the collection:
      // modelEvents: {
      //   'change': 'render'
      // },
    });

    var hatCollectionView = new HatCompositeView({
      id: 'primaryPanel',           // If we don't add an ID and class here it will
      className: 'hatCollection',   // get the ones from the constructor.
      collection: indexHats,
      template: _.template(HatsViewTemp)
    });

    // SET UP START LISTNER ======================================================================
    App.on('start', function() {
      App.hatController = new App.Controller();
      App.router = new App.Router({
        controller: App.hatController
      });
      Backbone.history.start();
    });

    // START THE APP =============================================================================
    App.start();

  };

  return {
    initialize: initialize
  };
});