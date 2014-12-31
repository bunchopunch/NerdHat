/* globals _, Backbone */

define([
  'application',
  'text!apps/about/show/about.jst'         // Adding IETF language tag
], function(App, AboutTemp) {
  'use strict';

  App.module('AboutApp.Show.View', function(View) {
    View.AboutView = Backbone.Marionette.ItemView.extend({
      template: _.template(AboutTemp)
    });

    View.ShowModule = function() {
      return new View.AboutView();
    };
  });

  return App.AboutApp.Show.View;
});