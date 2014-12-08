// This is a bit of copypasta from old scripts. It could deal with some clean up.

// Initialization
// =============================================================================

var express    = require('express'),
app            = express(),
bodyParser     = require('body-parser'),
data           = require('./data'),
path           = require('path'),
highId         = 2;

var Hat = function(){
  this.id = (highId + 1).toString();
  this.herf = '/api/hats/' + (highId + 1);
  // href is optional for single resources. But, it's there anyway.
  // It should be retured during POSTs.
  // Another option when returning collections is to
  // adding a URL template at the top of the collection.
  this.name = 'An as of Yet Unnamed Hat';
  this.description = 'A dark horse rises up.';
  this.features = ['Nothing!'];
  this.price = '0.00';
  this.image = 'unknown.jpg';
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

var port = process.env.PORT || 9090;        // Set our port.

// all environments
app.set('port', process.env.PORT || port);
app.set("jsonp callback", true);
app.enable('jsonp callback');
app.set('jsonp callback name', 'cb');
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// ROUTES FOR OUR API
// =============================================================================
// We could be doing this to make it much more DRY.

// MAIN
// ==================
app.get('/api/', function(req, res) {
  res.jsonp({ message: 'NerdHat initiated!' });   
});

// HATS
// ==================
app.get('/api/hats', function(req, res) {
  res.jsonp({ hats: data });
  console.log('Returning: ' + data);
});

// Ideally, we would have something for comma seperate GETs here. 

app.post('/api/hats', function(req, res) {

  if (Object.keys(req.body).length >= 5){
    var hat = new Hat();
    highId++;
    hat.name = req.body.name;
    hat.description = req.body.description;
    hat.features = req.body.features;
    hat.price = req.body.price;
//    hat.image = req.body.image;

    data.push(hat);
    console.log('Created: ' + hat);

    res.status(201);
    res.jsonp({ 'hats': data[data.length - 1] });
  } else {
    res.status(400);
    var errorResponse = {
      'code': 'api_error',
      'detail': 'The new object appears to be missing keys.'
    };
    res.jsonp(errorResponse);
  }

});

// Ideally, we would have something for creating multiple rescources. 

// ...And something here for a PUT with comma seperated IDs.

// ...And, further still, something allowing for comma seperated DELETEs.

// SINGLE HAT
// ==================
app.get('/api/hats/:id', function(req, res) {
  selectedHat = searchHats(req.params.id);
  res.jsonp({ hats: data[selectedHat] });
  console.log('Returning: ' + data[selectedHat]);
});

app.put('/api/hats/:id', function(req, res) {
  selectedHat = searchHats(req.params.id);

  // Technically, this means that a put missing an attribute will pass.
  // (That would probably be more correct.)
  // That's because the test curl commands lack real ID info at the moment.
  if (Object.keys(req.body).length >= 5){ 

    data[selectedHat].name = req.body.name;
    data[selectedHat].description = req.body.description;
    data[selectedHat].features = req.body.features;
    data[selectedHat].price = req.body.price;
    data[selectedHat].image = req.body.image;

//    res.status(204);
//    res.send();
//    Normally we would send that 204. However, Backbone needs the resource.
//    Therefore, we'll keep it similar to the GET.

    res.send({'hats': data[selectedHat]});

    console.log('Returning: ' + data[req.params.id]);
  } else {
    res.status(400);
    var errorResponse = {
      'code': 'api_error',
      'detail': 'The updated object appears to be incomplete.' // Probably doens't actually need to be.
    };
    res.send(errorResponse);
  }
});

app.delete('/api/hats/:id', function(req, res) {
  console.log('Deleting: ' + data[req.params.id]);
  data.splice(req.params.id, 1);
  res.status(204);
  res.send();
});

// HELPERS
// ==================
var searchHats = function(qId) {
  for (var i = 0; i < data.length; i++) {
    if (data[i].id === qId) {
      return i;
    }
  }
  return null;
};

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('API server in now running on port ' + port + '.');