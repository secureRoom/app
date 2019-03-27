const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './client/index.js'),
  mode: 'development',

  output: {
    path: path.resolve(__dirname, './client/dist'),
    filename: 'bundle.js',
  },

  module: {
    rules: [{
      test: /.jsx?$/,
      exclude: [
        path.resolve(__dirname, './node_modules'),
      ],
      loader: 'babel-loader',
    }],
  },
};
