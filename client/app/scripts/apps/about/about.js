/* globals _, Backbone */

define([
  'application',
  'text!apps/about/about.jst'         // Adding IETF language tag
], function(App, AboutTemp) {
  'use strict';

  var AboutApp = App.module('AboutApp', function(AboutApp) {
    AboutApp.addInitializer(function() {
      console.log('AboutApp has been initialized.');

      var AboutAPI = {
        showAbout: function(){
          App.hostLayout.primaryViewport.show( AboutApp.ShowModule() );
        }
      };

      var AboutView = Backbone.Marionette.ItemView.extend({
        template: _.template(AboutTemp)
      });

      AboutApp.ShowModule = function() {
        return new AboutView();
      };

      AboutApp.Router = Backbone.Marionette.AppRouter.extend({
        appRoutes: {
          '': 'showAbout'
        }
      });

      App.addInitializer(function(){
        new AboutApp.Router({
          controller: AboutAPI
        });
      });

    });
  });

  return AboutApp;
});