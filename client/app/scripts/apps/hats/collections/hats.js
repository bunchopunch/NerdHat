define(['underscore','backbone','HatModel'],function(_,Backbone,HatModel){
  var Hats=Backbone.Collection.extend({
    url:'./data/hats.json',
    model: HatModel,
    initialize:function(){
      console.log('Hat Collection Started');
      this.first_load=true;
      this.fetch({
        success:_.bind(function(collection) {
          console.log(this,arguments);
          this.trigger('update',collection);
          if(this.first_load){
            this.first_load=false;
            this.trigger('ready',collection);
          }
        }, this)
      });
      
    },
    get_hats:function(attributes){
      if(typeof attributes==='object'){
        return this.where(attributes);
      }
      else if(attributes===undefined){
        return this.models;
      }
      else{
        return null;
      }
    },
    parse:utils.parse_collection
  });
  return Hats;
});
