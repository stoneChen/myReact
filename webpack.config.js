var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var srcDir = path.join(__dirname, 'app');
module.exports = {
  devtool: 'source-map',
  debug: true,
  entry: [
    'webpack-hot-middleware/client',
    './app/index'
  ],
  output: {
    filename: 'app.[hash].js',
    path: path.join(__dirname, 'dist'),
    publicPath: ''
  },
  resolve: {
    extensions: [ '', '.js' ],
    alias: {
      'components': path.join(srcDir, 'components'),
      'modules': path.join(srcDir, 'modules'),
      'utils': path.join(srcDir, 'utils'),
      'base': path.join(srcDir, 'base')
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('index.[contenthash].css', {allChunks: true}),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      },
      '__DEVTOOLS__': process.env.DEVTOOLS === 'true' ? true : false
    }),
    new HtmlWebpackPlugin({
      title: 'Redux React Router Example',
      filename: 'index.html',
      template: 'index.template.html',
      inject: true
    })
  ],
  module: {
    loaders: [
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
      { test: /\.styl$/, loader: 'style-loader!css-loader!cssnext-loader!stylus-loader' },
      { test: /\.js$/, loaders: [ 'babel' ], include: srcDir },
      { test: /\.js$/, loader: "eslint-loader", include: srcDir },
      { test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf)$/, loader: 'url-loader?limit=8192' }
    ]
  },
  cssnext: {
    browsers: 'last 2 versions'
  }
};
