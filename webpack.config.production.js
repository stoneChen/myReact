var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './app/index.js'
  },
  output: {
    filename: '[name].min.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/'
  },
  plugins: [
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
    new ExtractTextPlugin('app.css', { allChunks: true }),
    new HtmlWebpackPlugin({
      title: 'Redux React Router Example',
      filename: 'index.html',
      template: 'index.template.html',
      favicon: path.join(__dirname, 'assets/images/favicon.ico')
    })
  ],
  module: {
    loaders: [
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!cssnext-loader') },
      { test: /\.js$/, loaders: ['babel'], include: path.join(__dirname, 'app') },
      {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
      {test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf)$/, loader: 'url-loader?limit=8192'}
    ]
  },
  cssnext: {
    browsers: 'last 2 versions'
  }
};