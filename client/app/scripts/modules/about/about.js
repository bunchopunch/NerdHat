/* globals _, Backbone */

define([
  'application',
  'text!modules/about/about.jst'         // Adding IETF language tag
], function(App, AboutTemp) {

  'use strict';

  var AboutMod = App.module('AboutMod', function(AboutMod) {
    AboutMod.addInitializer(function() {

      console.log('Module: AboutMod has been initialized.');

      var AboutView = Backbone.Marionette.ItemView.extend({
        template: _.template(AboutTemp)
      });

      AboutMod.aboutView = new AboutView(); 

    });
  });

  return AboutMod;

});