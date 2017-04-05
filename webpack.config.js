var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'tofd.js',
    library: 'tofd',
    libraryTarget: 'umd',
  },
  module: {
    loaders: [{
      test: /.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compressor: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        screw_ie8: true,
        warnings: false
      },
    }),
  ],
};
