const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './app/index.js',
  output: { 
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/assets/'
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    inline: true,
    port: 9000
  },

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