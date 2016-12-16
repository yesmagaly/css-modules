var path = require('path')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

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
    new ExtractTextPlugin("styles.css")
  ]
};
