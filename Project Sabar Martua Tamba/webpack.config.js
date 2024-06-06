const path = require('path');

module.exports = {
  entry: './app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development', // or 'production'
  devtool: 'source-map', // optional but helpful for debugging
  devServer: {
    contentBase: './dist',
  },
};
