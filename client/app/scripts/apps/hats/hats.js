/* globals _, Backbone */

define([
  'application'
], function(App) {
  'use strict';

  var HatsApp = App.module('HatsApp', function(HatsApp) {
    HatsApp.addInitializer(function() {

      var HatsAPI = {
        showHats: function(){
          require(['apps/hats/list/controller'], function(ListController){
            ListController.listHats();
          });
          // App.hostLayout.primaryViewport.show( HatsApp.ShowModule() );
        }
      };

      HatsApp.Router = Backbone.Marionette.AppRouter.extend({
        appRoutes: {
          'hats': 'showHats'
        }
      });

      App.addInitializer(function(){
        console.log('HatsApp router has been initialized.');
        new HatsApp.Router({
          controller: HatsAPI
        });
      });

    });
  });

  return HatsApp;
});