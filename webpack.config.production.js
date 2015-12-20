var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var sourceDir = path.join(__dirname, 'app');
module.exports = {
  entry: {
    app: './app/index.js'
    //,vendor: ['react', 'react-router', 'redux', 'redux-router', 'react-redux', 'redux-thunk', 'redux-logger']
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.join(__dirname, 'dist'),
    publicPath: ''
  },
  resolve: {
    extensions: [ '', '.js' ],
    alias: {
      util: sourceDir + '/util/',
      widget: sourceDir + '/widget/'
    }
  },
  plugins: [
    //new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.[chunkhash].js"),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      },
      '__DEVTOOLS__': false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('app.[contenthash].css', { allChunks: true }),
    new HtmlWebpackPlugin({
      title: 'Redux React Router Example',
      filename: 'index.html',
      template: 'index.template.html',
      inject: true
    })
  ],
  module: {
    loaders: [
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!cssnext-loader') },
      { test: /\.styl$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!cssnext-loader!stylus-loader') },
      { test: /\.js$/, loaders: [ 'babel' ], include: sourceDir },
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
      { test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf)$/, loader: 'url-loader?limit=8192' }
    ]
  },
  cssnext: {
    browsers: 'last 2 versions'
  }
};