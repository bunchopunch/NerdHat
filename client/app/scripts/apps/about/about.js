/* globals _, Backbone */

define([
  'application',
], function(App) {
  'use strict';

  var AboutApp = App.module('AboutApp', function(AboutApp) {
    AboutApp.addInitializer(function() {

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
        console.log('AboutApp router has been initialized.');
        new AboutApp.Router({
          controller: AboutAPI
        });
      });

    });
  });

  return AboutApp;
});