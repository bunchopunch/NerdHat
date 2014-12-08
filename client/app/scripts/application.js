define([
  'jquery',
  'underscore',
  'backbone',
  'modernizr',
  'foundation',
  'marionette'
], function($, _, Backbone, Modernizr, Foundation, Marionette){

  console.log('Application was loaded');

  var initialize = function(){
  	// Start Foundation
    $(document).foundation();
    // Set up a Marionette Application
    var App = new Backbone.Marionette.Application();

    // Now lets build things ------
    App.addRegions({
      primaryViewport: '#applicationHost'
    });

    var HatModel = Backbone.Model.extend({
      baseURL: 'http://localhost:9090/api/',
      url: 'hats',
      defaults: {
        id: '0',
        href: '/api/hats/0',
        name: 'A Hat for a Head',
        description: 'What a lovely head you have. Why not add a delightfully nerdy hat?',
        features: [
          'None.... yet.'
        ],
        price: '0.00',
        image: 'unknown.jpg'
      }
    });

    var hatModel = new HatModel();

    hatModel.fetch();

    console.log(hatModel);
  };

  return {
    initialize: initialize
  };
});