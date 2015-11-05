var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');
var open = require('open');

var app = express();
var port = 3000;
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function (req, res) {
  console.log(req.url);
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