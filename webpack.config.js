var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var sourceDir = path.join(__dirname, 'app');
module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './app/index'
  ],
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist'),
    publicPath: ''
  },
  resolve: {
    extensions: ['', '.js'],
    alias: {
      util: sourceDir + '/util',
      widget: sourceDir + '/widget'
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      },
      '__DEVTOOLS__': process.env.DEVTOOLS === 'true' ? true : false
    }),
    new ExtractTextPlugin('app.css', {allChunks: true}),
    new HtmlWebpackPlugin({
      title: 'Redux React Router Example',
      filename: 'index.html',
      template: 'index.template.html',
      favicon: path.join(__dirname, 'assets', 'images', 'favicon.ico')
    })
  ],
  module: {
    loaders: [
      {test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!cssnext-loader')},
      {test: /\.js$/, loaders: ['babel'], include: sourceDir},
      {test: /\.js$/, loader: "eslint-loader", include: sourceDir},
      {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
      {test: /\.scss/,loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'},
      {test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf)$/, loader: 'url-loader?limit=8192'}
    ]
  },
  cssnext: {
    browsers: 'last 2 versions'
  }
};
