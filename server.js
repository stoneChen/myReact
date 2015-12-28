var path = require('path');
var ip = require('ip');
var express = require('express');
var debug = require('debug')('app');
var open = require('open');

var webpack, config, compiler, mockApi, bodyParser;


var curIP = ip.address();
var port = 3000;
var app = express();

if (process.env.NODE_ENV !== 'production') {
  webpack = require('webpack');
  config = require('./webpack.config');
  compiler = webpack(config);
  bodyParser = require('body-parser');
  app.all('*', function (req, res, next) {
    debug('request:', req.originalUrl);
    return next();
  });
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    //quiet: true,
    publicPath: config.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));
  app.use(bodyParser.json()); // for parsing application/json
  app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
  require('./mock/api')(app, debug);
} else {
  app.use(express.static('dist'));
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './dist/index.html'));
});

app.listen(port, curIP, function (err) {
  if (err) {
    console.error(err);
    return;
  }
  var address = ['http://', curIP, ':', port].join('');
  console.log('Serving in [ %s ] mode', process.env.NODE_ENV);
  console.log('Listening at %s', address);
  open(address);
});



