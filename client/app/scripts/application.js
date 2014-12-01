define([
  'jquery',
  'underscore',
  'backbone',
  'modernizr',
  'foundation',
  'marionette'
], function($, _, Backbone, Modernizr, Foundation, Marionette){

  console.log('Application was loaded')

  var initialize = function(){

    $(document).foundation();	// Start Foundation
    var App = new Backbone.Marionette.Application();

  }


  return {
    initialize: initialize
  };
});