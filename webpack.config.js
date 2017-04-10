var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, './dist/js'),
    publicPath: '/dist/js/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devtool: '#eval-source-map'
}
