/* globals _, Backbone */

define([
  'application',
  'text!modules/nav/nav.jst'         // Adding IETF language tag
], function(App, NavTemp) {
  'use strict';

  var NavMod = App.module('NavMod', function(NavMod) {
    NavMod.addInitializer(function() {
      console.log('Module: NavMod has been initialized.');

      NavMod.AboutView = Backbone.Marionette.ItemView.extend({
        template: _.template(NavTemp)
      });

      NavMod.ShowModule = function() {
        return new NavMod.AboutView();
      };

    });
  });

  return NavMod;
});