const path = require('path');
const CopyRightWebpackPlugin = require('./plugins/copyright-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
module.exports = {　　
	mode: 'development',
	entry: {　　　　
		main: './src/index.js'　　
	},
	devServer: {
    contentBase: false,
    compress: true,
    port: 9000,
    publicPath: '/assets/'
  },
	output: {　　　　
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'　　
	},
	plugins: [　　　　
		/**
		 * 所以知道为什么插件要一个new，因为是一个类，用的时候需要new一下。
		 * new这个插件的时候，就使用了这个插件
		 */
		// new webpack.HotModuleReplacementPlugin(),
		new ProgressBarPlugin(),
		new CopyRightWebpackPlugin(),
		new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
		new ManifestPlugin()
	],
}
