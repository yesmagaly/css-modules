var path = require('path')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var ComponentResolverPlugin = require('component-resolver-webpack')
var webpack = require('webpack')

module.exports = {
  entry: './src',
  output: {
    path: 'dist',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel',
        include: __dirname + '/src',
      },
      {
        test: /\.css/,
        loader: ExtractTextPlugin.extract('css?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]')
      }
    ],
  },
  plugins: [
    new webpack.ResolverPlugin([
      new ComponentResolverPlugin()
    ]),
    new ExtractTextPlugin("styles.css")
  ]
};
