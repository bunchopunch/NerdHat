/* globals _, Backbone */

define([
  'application',
], function(App) {
  'use strict';

  App.module('AboutApp.Show', function(Show) {
    Show.Controller = {
      showAbout: function(){
        console.log('About App is now running: Show About');
        require(['apps/about/show/view'], function(View){
          App.hostLayout.primaryViewport.show( new View.ShowModule() );
        });
      }
    };
  });

  return App.AboutApp.Show.Controller;
});