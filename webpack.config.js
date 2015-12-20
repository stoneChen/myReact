var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var sourceDir = path.join(__dirname, 'app');
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
    new HtmlWebpackPlugin({
      title: 'Redux React Router Example',
      filename: 'index.html',
      template: 'index.template.html',
      inject: true
    })
  ],
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.styl$/, loader: 'style-loader!css-loader!cssnext-loader!stylus-loader' },
      { test: /\.js$/, loaders: [ 'babel' ], include: sourceDir },
      { test: /\.js$/, loader: "eslint-loader", include: sourceDir },
      { test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf)$/, loader: 'url-loader?limit=8192' }
    ]
  },
  cssnext: {
    browsers: 'last 2 versions'
  }
};
