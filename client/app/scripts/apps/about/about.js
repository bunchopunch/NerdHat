/* globals _, Backbone */

define([
  'application',
], function(App) {
  'use strict';

  var AboutApp = App.module('AboutApp', function(AboutApp) {
    AboutApp.addInitializer(function() {
      console.log('AboutApp has been initialized.');

      var AboutAPI = {
        showAbout: function(){
          require(['apps/about/show/controller'], function(ShowController){
            ShowController.showAbout();
          });
        }
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