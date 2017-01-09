var webpack = require('webpack');
var path    = require('path');
var config  = require('./webpack.config');

config.output = {
  filename: '[name].bundle.js',
  publicPath: '/',
  path: path.resolve(__dirname, 'client')
};

config.entry.app = [
  // this modules required to make HRM working
  // it responsible for all this webpack magic
  'webpack-hot-middleware/client?reload=true',
  'babel-polyfill',
  // application entry point
  path.join(__dirname, 'client', 'app/app.js')
];

config.output = {
  // Don't use hashes in dev mode for better performance
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'client')
};

config.plugins = config.plugins.concat([

  // Adds webpack HMR support. It act's like livereload,
  // reloading page after webpack rebuilt modules.
  // It also updates stylesheets and inline assets without page reloading.
  new webpack.HotModuleReplacementPlugin()
]);

module.exports = config;
