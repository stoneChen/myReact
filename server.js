var path = require('path');
var express = require('express');
var open = require('open');

var webpack, config, compiler;

var app = express();
var port = 3000;

  console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV !== 'production') {
  console.log('dev mode')
  webpack = require('webpack');
  config = require('./webpack.config');
  compiler = webpack(config);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));
} else {
  console.log('production mode')
  app.use(express.static('dist'));
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './dist/index.html'));
});

app.listen(port, 'localhost', function (err) {
  if (err) {
    console.error(err);
    return;
  }

  console.log('Listening at http://localhost:' + port);
  open('http://localhost:' + port);
});