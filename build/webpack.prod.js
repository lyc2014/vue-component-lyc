const merge = require("webpack-merge")
const common = require('./webpack.base.js')
const MinifyPlugin = require('babel-minify-webpack-plugin')
const path = require('path')
const glob = require('glob')
const PAGE_LIBS = path.resolve(__dirname, '../src/libs/')

const entries = function () {
  let entryFiles = glob.sync(PAGE_LIBS + '/*/index.js')
  let obj = {}
  entryFiles.forEach(filePath => {
    let fileName = filePath.split('/')[filePath.split('/').length - 2]
    obj[fileName] = filePath
  })
  obj.index = path.resolve(__dirname, '../src/libs/index.js')
  return obj
}
module.exports = merge(common, {
  entry: entries(),
  output: {
    filename: '[name].js',
    chunkFilename: '[name].[id].js',
    path: path.resolve(__dirname, '../dist/'),
    libraryTarget: 'amd'
  },
  externals: {
    vue: {
      root: 'Vue',
      amd: 'vue'
    }
  },
  stats: 'normal',
  mode: 'production',
  plugins: [
    new MinifyPlugin({
      removeConsole: true
    })
  ]
})