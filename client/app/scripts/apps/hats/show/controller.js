/* globals _, Backbone */

define([
  'application',
], function(App) {
  'use strict';

  App.module('HatsApp.Show', function(Show) {
    Show.Controller = {
      showHats: function(hatId){
        console.log('Hats App is now running: Show Hats - For: ' + hatId);
        require(['apps/hats/show/view'], function(View){
          App.hostLayout.primaryViewport.show( View.ShowModule(hatId) );
        });
      }
    };
  });

  return App.HatsApp.Show.Controller;
});