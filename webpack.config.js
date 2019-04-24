const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './app/index.js',
  output: { path: __dirname, filename: 'dist/build.js'},

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|dist)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
}