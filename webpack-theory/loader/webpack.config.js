const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {　
	watch: true,
	mode: 'development',
	entry: {　　　　
		main: './src/index.js'　　
	},
	devServer: {
		contentBase: false,
		compress: true,
		port: 9000,
	},
	output: {　　　　
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'　　
	},
	resolveLoader: {
		// 去哪些目录下寻找 Loader，有先后顺序之分
		modules: ['node_modules', './loaders/'],
	},
	module: {
		rules: [{
			test: /\.js$/,
			use: 'comment-require-loader'
		}, {
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		}, ]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	]
}
