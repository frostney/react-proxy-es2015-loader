var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './app',
  output: {
    path: path.join(__dirname, 'output'),
    filename: 'bundle.js'
  },
  resolveLoader: {
    alias: {
      'react-proxy-es2015': path.join(__dirname, '..')
    }
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [{
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/
      }]
  }
};
