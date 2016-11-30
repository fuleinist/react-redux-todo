var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    noParse: [
      /node_modules\/dist/,
    ],
    loaders: [
      {
        // JS.
        include: APP_DIR,
        loader : 'babel',
        test: /\.js$/,
      }
    ],
  },
};

module.exports = config;