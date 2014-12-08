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
      url: 'localhost:9090/api/hats',
//      sync : function(method, collection, options) {
//        var params = _.extend({
//          type:         'GET',
//          dataType:     'jsonp',
//          url:      HatModel.url,
//          jsonp:    "cb",   // the api requires the jsonp callback name to be this exact name
//          processData:  false
//        }, options);
//
//        return $.getJSON(params);
//      },
//      parse : function(response) {
//        return response.data.results;
//      },
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
    hatModel.fetch({dataType: 'jsonp'});

    console.log(hatModel);
  };

  return {
    initialize: initialize
  };
});