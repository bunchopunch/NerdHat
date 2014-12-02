// This is a bit of copypasta from old scripts. It could deal with some clean up.

// Initialization
// =============================================================================

var express    = require('express'),
app            = express(),
bodyParser     = require('body-parser'),
data           = require('./data'),
path           = require('path');

var Hat = function(){
  this.name = 'An as of Yet Unnamed Hat';
  this.description = 'A dark horse rises up.';
  this.features = ['Nothing!'];
  this.price = '0.00';
  this.image = 'unknown.jpg'
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

var port = process.env.PORT || 9090;        // set our port

// all environments
app.set('port', process.env.PORT || port);
app.set("jsonp callback", true);
app.enable('jsonp callback');
// app.set('jsonp callback name', 'cb');
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
  res.json({ message: 'NerdHat initiated!' });   
});

// HATS
// ==================
app.get('/api/hats', function(req, res) {
  res.json({ hats: data });
  console.log('Returning: ' + data);
});

app.post('/api/hats', function(req, res) {

  if (Object.keys(req.body).length = 5){
    var hat = new Hat;

    hat.name = req.body.name;
    hat.description = req.body.description;
    hat.features = req.body.features;
    hat.price = req.body.price;
//    hat.image = req.body.image;

    data.push(hat);
    console.log('Created: ' + hat);

    res.status(201);
    res.json({ created: data[data.length - 1] });
  } else {
    res.status(400);
    res.send('The new object appears to be missing keys.')
  }


});

// SINGLE HAT
// ==================
app.get('/api/hats/:id', function(req, res) {
  res.json({ hat: data[req.params.id] });
  console.log('Returning: ' + data[req.params.id]);
});

app.put('/api/hats/:id', function(req, res) {
  if (Object.keys(req.body).length = Object.keys(data[req.params.id]).length){
    data[req.params.id] = req.body;
    res.json({ updated: data[req.params.id] });
    console.log('Returning: ' + data[req.params.id]);
  } else {
    res.status(400);
    res.send('The updated object appears to be incomplete.')
  }
});

app.delete('/api/hats/:id', function(req, res) {
  console.log('Deleting: ' + data[req.params.id]);
  data.splice(req.params.id, 1);
  res.status(202)
  res.send('Hat deleted')
});


// START THE SERVER
// =============================================================================
app.listen(port);
console.log('API server in now running on port ' + port + '.');