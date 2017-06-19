/*
 * Webpack development server configuration
 *
 * This file is set up for serving the webpack-dev-server, which will watch for changes and recompile as required if
 * the subfolder /webpack-dev-server/ is visited. Visiting the root will not automatically reload.
 */
'use strict';
var webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {

  output: {
   path: path.join(__dirname, 'dist'),
   filename: 'js/[name].[hash].js'
  },

  cache: true,
  debug: true,
  devtool: 'sourcemap',
  entry: [
      'webpack/hot/only-dev-server',
      './src/components/ReactHotApp.js'
  ],

  stats: {
    colors: true,
    reasons: true
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      'styles': __dirname + '/src/styles',
      'mixins': __dirname + '/src/mixins',
      'components': __dirname + '/src/components/',
      'images': __dirname + '/src/images/',
      'fonts': __dirname + '/src/fonts/'
    }
  },
  module: {
    preLoaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'eslint-loader'
    }],
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel-loader'
    }, {
      test: /\.sass/,
      loader: 'style-loader!css-loader!sass-loader!file-loader!url-loader?outputStyle=expanded&indentedSyntax'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.(png|jpg|gif)$/,
      loader: 'url-loader'
    }, {
      test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
      loader: 'file-loader?limit=50000&name=[path][name].[ext]'
    }]
  },

  plugins: [
      new HtmlWebpackPlugin({ //为您的Web应用程序生成一个坚实的基础html页面，其中包含所有Webpack生成的css和js文件。支持自定义模板，favicon，html-minification等：
			filename: 'index.html',
			template: 'src/index.html',
			minify: { //压缩html文件
				removeComments: true, //移除HTML中的注释
				collapseWhitespace: true // 删除空白符与换行符
			}
		}),
		//提取公共库
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			filename: 'js/vendor.[hash].js'
		}),
    new webpack.HotModuleReplacementPlugin()
  ]

};
