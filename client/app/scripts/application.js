define([
  'jquery',
  'underscore',
  'backbone',
  'modernizr',
  'foundation',
  'marionette'
], function($, _, Backbone, Modernizr, Foundation, Marionette){

  console.log('Application was loaded');

  var initialize = function() {
  	// Start Foundation
    $(document).foundation();
    // Set up a Marionette Application
    var App = new Backbone.Marionette.Application();

    // THE APP. STUFF THAT WILL EVENTUALLY BE BROKEN OUT TO MODULES =============================
    App.addRegions({
      primaryViewport: '#applicationHost'
    });

    App.Router = Marionette.AppRouter.extend({
      appRoutes: {
        '': 'hatCollection'
      }
    });

    App.Controller = Marionette.Controller.extend({
      hatCollection: function() {
        var hatCollectionView = new HatCollectionView();
        App.primaryViewport.show(hatCollectionView);
      }
    });

    // VIEWS (ALSO TO BE BROKEN OUT) ============================================================

    var HatModel = Backbone.Model.extend({
      url: 'http://localhost:9090/api/hats',
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

    var HatCollection = Backbone.Collection.extend({
      model: hatModel
    });

    var HatView = Backbone.Marionette.ItemView.extend({
      template: '',
      tagName: 'div',
      className: 'collectionItem hat-item'
    });

    var HatCollectionView = Backbone.Marionette.CompositeView.extend({
      tagName: 'div',
      id: 'primaryPanel',
      template: '',
      ItemView: HatView
    });

    //    hatModel.fetch();

    // SET UP START LISTNER =======================================================================
    App.on('start', function() {
      App.hatController = new App.Controller();
      App.router = new App.Router({
        controller: App.hatController
      });
      Backbone.history.start();
    });

    // START THE APP =============================================================================
    $(function(){
      App.start();
    });

  };

  return {
    initialize: initialize
  };
});