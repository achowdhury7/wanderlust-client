const CompressionPlugin = require('compression-webpack-plugin')
const DotEnvPlugin = require('webpack-dotenv-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
const WebpackNotifierPlugin = require('webpack-notifier')

const PATHS = {
  env: (process.env.HEROKU && './.env.heroku') || (process.env.NODE_ENV && `./.env.${process.env.NODE_ENV}`) || './.env',
  js: './index.js',
  css: './assets/stylesheets/main.scss'
}

const rules = [{
	test: /\.js$/,
	exclude: /node_modules/,
	use: [ 'babel-loader' ]
},
{
  test: /\.scss$|\.css$/,
  loader: ExtractTextPlugin.extract({
    use: 'css-loader!postcss-loader!sass-loader',
    fallback: 'style-loader'
  }),
}]

module.exports = {
	entry: [
		'babel-polyfill',
		'react-hot-loader/patch',
		PATHS.js,
		PATHS.css
	],
	output: {
		path: path.resolve('dist'),
		filename: '[name].js'
	},
	module: rules,
	plugins: [
	new DotEnvPlugin{{
		sample: './.env.example',
		path: PATHS.env
	}},
	new ExtractTextPlugin('style-[hash].css')
	new HtmlWebpackPlugin({ template: index.html }),
	new webpack.HotModuleReplacementPlugin(),
	new webpack.NamedModulesPlugin(),
	new WebpackNotifierPlugin(),
	]
}