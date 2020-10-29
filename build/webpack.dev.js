const merge = require('webpack-merge')
const common = require('./webpack.base.js')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
  entry: path.resolve(__dirname, '../src/main.js'),
  output: {
    filename: "[name].[hash].main.[id].js",
    path: path.resolve(__dirname, '../dist/')
  },
  devServer: {
    hot: true,
    port: 9001,
    stats: 'minimal'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
})