var express = require('express');
var dust = require('dust');
var controller = require('./lib/rememberthisname');
var Models = require('./models/models');
var Collections = require('./models/collections');
require('./lib/watcher').watch(dust, './templates', './public/templates', '.jst');

var app = express.createServer();
app.use(express.cookieParser());
app.listen(process.env.PORT || 8124);

//lilac.initialize(app);
controller.initialize(app);

// Static resources
app.get('/public/*.(js|css)', function(req, res, next) {
    res.sendfile('./' + req.url);
});

app.get('/', function(req, res, next) {
    var collection = new Collections.DelayedCollection();
    controller.render(req, res, collection, 'index');
});
