const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: "development",
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  output: {
    filename: 'index.bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
};
