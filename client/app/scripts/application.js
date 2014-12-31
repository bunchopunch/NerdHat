define([
  'jquery',
  'underscore',
  'backbone',
  'modernizr',
  'foundation',
  'marionette',
  'text!templates/en-us/layout.jst',
], function($, _, Backbone, Modernizr, Foundation, Marionette, LayoutTemp){
  'use strict';
  console.log('Application was loaded');

  // THE MAIN APPLICATION =====================================================================

  // Set up a Marionette Application
  var App = new Backbone.Marionette.Application();

  // Start Foundation
  $(document).foundation();

  // Set up a path to the API.
  App.root = 'http://localhost:9090/api/';

  console.log(Backbone.Marionette);

  var HostLayout = Backbone.Marionette.LayoutView.extend({
    template: _.template(LayoutTemp),
    // define regions
    el: '#applicationHost',
    regions: {
      navViewport: '#navHost',
      primaryViewport: '#primaryHost'
    }
  });

  App.hostLayout = new HostLayout();

  require(['modules/nav/nav'], function (navMod) {
    App.hostLayout.navViewport.show( navMod.ShowModule() );
  });

  // It would be neat to abstract routes so they aren't hard coded.
  App.Router = Marionette.AppRouter.extend({
    appRoutes: {
      '': 'about',        // http://localhost:9000/#            - Not yet implemented.
      'hats': 'hatCollection',    // http://localhost:9000/#/hats       - Hats module
      'hats/:id': 'hatCollection' // http://localhost:9000/#/hats/{ID}  - Not yet implemented.
    }
  });

  App.Controller = Marionette.Controller.extend({
    about: function() {
      showAboutModule();
    },
    hatCollection: function() {
      showHatCollection();
    }
  });


  var showAboutModule = function() {
    require(['modules/about/about'], function (aboutMod) {
      App.hostLayout.primaryViewport.show( aboutMod.ShowModule() );
    });
  };

  var showHatCollection = function() {
    require(['modules/hats/hats'], function (hatsMod) {
      App.hostLayout.primaryViewport.show( hatsMod.ShowModule() );
    });
  };

  // TODO: Add a screen/UI state model?
  // https://devblog.supportbee.com//2011/07/29/backbone-js-tips-lessons-from-the-trenches/

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