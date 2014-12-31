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

  var HostLayout = Backbone.Marionette.LayoutView.extend({
    template: _.template(LayoutTemp),
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

  // TODO: It would be neat to abstract routes so they aren't hard coded.
  // App.Router = Marionette.AppRouter.extend({
  // });

  // TODO: Add a screen/UI state model?
  // https://devblog.supportbee.com//2011/07/29/backbone-js-tips-lessons-from-the-trenches/


  // SET UP START LISTNER =====================================================================
  App.on('start', function() {
    if(Backbone.history){
      require(['modules/about/about', 'modules/hats/hats'], function () {
        Backbone.history.start();
      });
    }
  });

  // START THE APP ============================================================================
  App.start();

  return App;
});