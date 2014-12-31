/* globals _, Backbone */

define([
  'application',
  'text!modules/about/about.jst'         // Adding IETF language tag
], function(App, AboutTemp) {
  'use strict';

  var AboutMod = App.module('AboutMod', function(AboutMod) {
    AboutMod.addInitializer(function() {
      console.log('Module: AboutMod has been initialized.');

      AboutMod.AboutView = Backbone.Marionette.ItemView.extend({
        template: _.template(AboutTemp)
      });

      AboutMod.ShowModule = function() {
        return new AboutMod.AboutView();
      };

      AboutMod.Router = Backbone.Marionette.AppRouter.extend({
        appRoutes: {
          '': 'showAbout'
        }
      });

      AboutMod.API = {
        showAbout: function(){
          App.hostLayout.primaryViewport.show( AboutMod.ShowModule() );
        }
      };

      App.addInitializer(function(){
        new AboutMod.Router({
          controller: AboutMod.API
        });
      });

    });
  });

  return AboutMod;
});