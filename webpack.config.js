const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: '/client/main.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: '/index.html',
  //   }),
  // ],
  devServer: {
    static: {
      directory: path.join(__dirname, '/'),
      publicPath: '/',
    },
    compress: true,
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: true,
      },
    },
  },
};
