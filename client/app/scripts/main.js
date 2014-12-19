require.config({
  baseUrl: 'scripts',

  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: [
        'underscore',
        'jquery'
      ],
      exports: 'Backbone'
    },
    marionette: {
      deps: ['backbone'],
      exports: 'Backbone.Marionette'
    },
    foundation: {
      deps: [
        'jquery',
        'modernizr'
      ],
      exports: 'Foundation'
    },
    modernizr: {
      exports: 'Modernizr'
    },
  },
  paths: {
    jquery: '../bower_components/jquery/dist/jquery',
    modernizr: '../bower_components/modernizr/modernizr',
    foundation: '../bower_components/foundation/js/foundation',
    backbone: '../bower_components/backbone/backbone',
    marionette: '../bower_components/marionette/lib/backbone.marionette',
    underscore: '../bower_components/underscore/underscore',
    text: '../bower_components/text/text'
  }
});

console.log('Main was fired');

require(['application'], function (Application) {
  Application;
});
