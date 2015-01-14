require.config({
  baseUrl: 'scripts',

  shim: {
    underscore: {
        exports: '_'
    },
    backbone: {
        exports: 'Backbone',
        deps: ['jquery', 'underscore']
    },
    marionette: {
        exports: 'Backbone.Marionette',
        deps: ['backbone']
    },
    'radio.shim': {
        exports: 'radio.shim',
        deps: ['backbone', 'underscore', 'backbone.radio']
    }
  },
  deps: ['jquery', 'underscore'],
  paths: {
    jquery: '../bower_components/jquery/dist/jquery',
    modernizr: '../bower_components/modernizr/modernizr',
    foundation: '../bower_components/foundation/js/foundation',
    underscore: '../bower_components/underscore/underscore',
    text: '../bower_components/text/text',
    backbone: '../bower_components/backbone/backbone',
    'backbone.babysitter': '../bower_components/backbone.babysitter/lib/backbone.babysitter',
//    'backbone.wreqr': '../bower_components/backbone.wreqr/lib/backbone.wreqr',
    'backbone.radio': '../bower_components/backbone.radio/build/backbone.radio',
//    'backbone.localStorage': '../bower_components/Backbone.localStorage/Backbone.localStorage',
    'radio.shim': 'shims/radio.shim',
    marionette: '../bower_components/marionette/lib/core/backbone.marionette',
  },
  map: {
      '*': {
          'backbone.wreqr': 'backbone.radio'
      }
  }
});

console.log('Main was fired');

require(['application'], function (Application) {
  Application;
});
