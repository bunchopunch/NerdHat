define([
  'application'
], function(App) {

  'use strict';

  var HatsMod = App.module('hatsMod', function(hatsMod) {
    hatsMod.addInitializer(function() {
      console.log('HatsMod has been initialized.');
    });

  });

  return HatsMod;

});