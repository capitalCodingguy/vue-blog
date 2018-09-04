'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/main.js'
  },
  // externals: {
  //   "echarts": "echarts",
  //   "wordCloud": "wordCloud"
  // },
  output: {
    path: config.build.assetsRoot,
    filename: config.dev?'[name].js':'[name].js?[chunkhash]',
    chunkFilename: 'chunk[id].js?[chunkhash]',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
              loader: 'vue-loader',
              options: {
                vueLoaderConfig
              }
          },
          {
              loader: 'iview-loader',
              options: {
                  prefix: false
              }
          },
          // {
          //     loader: 'babel-loader',
          //     options: {
          //       presets: [['es2015', {modules: false}]],
          //       plugins: ['syntax-dynamic-import']
          //     }
          // }
        ]
      }, 
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('/node_modules/iview/src'), resolve('/node_modules/iview/packages')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
