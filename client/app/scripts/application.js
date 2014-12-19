define([
  'jquery',
  'underscore',
  'backbone',
  'modernizr',
  'foundation',
  'marionette'
], function($, _, Backbone, Modernizr, Foundation, Marionette){
  'use strict';
  console.log('Application was loaded');

  // THE MAIN APPLICATION =====================================================================

  // Set up a Marionette Application
  var App = new Backbone.Marionette.Application();

  // Start Foundation
  $(document).foundation();

  // Set up a path to the API.
  App.root = 'http://localhost:9090/api/';

  App.addRegions({
    primaryViewport: '#applicationHost'
  });

  App.Router = Marionette.AppRouter.extend({
    appRoutes: {
      '': 'hatCollection',        // http://localhost:9000/# - Not yet implemented.
      'hats': 'hatCollection',    // http://localhost:9000/#/hats
      'hats/:id': 'hatCollection' // http://localhost:9000/#/hats/{ID} - Not yet implemented.
    }
  });

  App.Controller = Marionette.Controller.extend({
    hatCollection: function() {
      require(['modules/hats/hats'], function (hatsMod) {
        // This fetch logic should move into the module
        hatsMod.indexHats.fetch().success(function(){ 
          // We'll want to load a layout from the module instead
          App.primaryViewport.show(hatsMod.hatCollectionView);
        });
      });
    }
  });

  // TODO: Add a state model?

  // SET UP START LISTNER =====================================================================
  App.on('start', function() {
    App.hatController = new App.Controller();
    App.router = new App.Router({
      controller: App.hatController
    });
    Backbone.history.start();
  });

  // START THE APP ============================================================================
  App.start();

  return App;
});