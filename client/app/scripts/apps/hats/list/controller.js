/* globals _, Backbone */

define([
  'application',
], function(App) {
  'use strict';

  App.module('HatsApp.Show', function(Show) {
    Show.Controller = {
      listHats: function(){
        console.log('Hats App is now running: Show Hats');
        require(['apps/hats/list/view'], function(View){
          App.hostLayout.primaryViewport.show( View.ShowModule() );
        });
      }
    };
  });

  return App.HatsApp.Show.Controller;
});