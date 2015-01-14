//- web/app/config.js
 
require.config({
 
  baseUrl: 'scripts',
 
  paths: {
    'jquery': '../../bower_components/jquery/dist/jquery',
    'modernizr': '../../bower_components/modernizr/modernizr',
    'foundation': '../../bower_components/foundation/js/foundation',
    'underscore': '../../bower_components/underscore/underscore',
    'text': '../../bower_components/text/text',
    'backbone': '../../bower_components/backbone/backbone',
    'backbone.babysitter': '../../bower_components/backbone.babysitter/lib/backbone.babysitter',
    'backbone.radio': '../../bower_components/backbone.radio/build/backbone.radio',
//    'backbone.localStorage': '../../bower_components/Backbone.localStorage/Backbone.localStorage',
    'radio.shim': 'shims/radio.shim',
    'marionette': '../../bower_components/marionette/lib/core/backbone.marionette',
    'vendor': '../../vendor_components'
  }, 
  map: {
      '*': {
          'backbone.wreqr': 'backbone.radio'
      }
  },  
  shim: {
    'underscore': {
        exports: '_'
    },
    'backbone': {
        exports: 'Backbone',
        deps: ['jquery', 'underscore']
    },
    'marionette': {
        exports: 'Backbone.Marionette',
        deps: ['backbone']
    },
    'radio.shim': {
        exports: 'radio.shim',
        deps: ['backbone', 'underscore', 'backbone.radio']
    }
  },
});
 
require(['main'], function() {});