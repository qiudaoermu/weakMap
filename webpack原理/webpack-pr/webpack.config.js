// webpack.config.js

const path = require('path')
const root = path.join(__dirname, './')
const webpackDistPlugin = require('webpack-afteremit-zipfolder-plugin')
const config = {
  mode: 'development',
  entry: path.join(root, 'src/app.js'),
  output: {
    path: path.join(root, 'dist'),
    filename: 'bundle.js'
  },
  resolveLoader: {
    modules: [path.join(root, 'loaders')]
  },
  module: {
    rules: [{
      test: /\.styl(us)?$/,
      use: [{
        loader: "style-loader.js"
      }, {
        loader: "stylus-loader.js",
        options: {
          sourceMap: true
        }
      }]
    }, {
      test: /\.less(us)?$/,
      use: [{
        loader: "style-loader.js"
      }, {
        loader: "less-loader.js",
        options: {
          sourceMap: true
        }
      }]
    }, {
      test: /\.js$/,
      use: [{
        loader: "babel-loader.js",
        options: {
          sourceMap: true,
          presets: ['@babel/preset-env']
        }
      }]
    }]
  },
  plugins: [
    new webpackDistPlugin({targetPath:'/dist',outPut:'dist.zip'})
  ]
}

module.exports = config
