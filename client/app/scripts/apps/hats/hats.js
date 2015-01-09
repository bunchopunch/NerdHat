/* globals _, Backbone */

define([
  'application'
], function(App) {
  'use strict';

  var HatsApp = App.module('HatsApp', function(HatsApp) {
    HatsApp.addInitializer(function() {

      var HatsAPI = {
        listHats: function(){
          require(['apps/hats/list/controller'], function(ListController){
            ListController.listHats();
          });
        },
        showHats: function(hatId){
          console.log('show hat: ' + hatId);
          require(['apps/hats/show/controller'], function(ShowController){
            ShowController.showHats(hatId);
          });
        }
      };

      HatsApp.Router = Backbone.Marionette.AppRouter.extend({
        appRoutes: {
          'hats/:hatId': 'showHats',
          'hats': 'listHats'
        }
      });

      App.addInitializer(function(){
        console.log('HatsApp router has been initialized.');
        new HatsApp.Router({
          controller: HatsAPI
        });
      });

      HatsApp.newHatsModel = Backbone.Model.extend();

    });
  });

  return HatsApp;
});