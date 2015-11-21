var path = require('path');
var os = require('os');
var express = require('express');
var open = require('open');

var webpack, config, compiler, mockApi;


var curIP = getIPAddress();
var port = 3000;
var app = express();

if (process.env.NODE_ENV !== 'production') {
  webpack = require('webpack');
  config = require('./webpack.config');
  compiler = webpack(config);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));
  require('./mock/api')(app);
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



function getIPAddress () {
  var ifaces = os.networkInterfaces();
  var ip = '';
  for (var dev in ifaces) {
    ifaces[dev].forEach(function (details) {
      if (ip === '' && details.family === 'IPv4' && !details.internal) {
        ip = details.address;

      }
    });
  }
  return ip || "127.0.0.1";
}