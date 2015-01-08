/* globals _, Backbone */

define([
  'application',
], function(App) {
  'use strict';

  App.module('HatsApp.List', function(List) {
    List.Controller = {
      listHats: function(){
        console.log('Hats App is now running: List Hats');
        require(['apps/hats/list/view'], function(View){
          App.hostLayout.primaryViewport.show( View.ShowModule() );
        });
      }
    };
  });

  return App.HatsApp.List.Controller;
});