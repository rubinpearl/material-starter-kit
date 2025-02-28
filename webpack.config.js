'use strict';

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const htmlmin = require("html-minifier");
const autoprefixer = require("autoprefixer");

// 'development',production
const dist = __dirname + '/dist'

function tryResolve_(url, sourceFilename) {
    // Put require.resolve in a try/catch to avoid node-sass failing with
    // cryptic libsass errors
    // when the importer throws
    try {
        return require.resolve(url, {
            paths: [path.dirname(sourceFilename)]
        });
    } catch (e) {
        return '';
    }
}

function tryResolveScss(url, sourceFilename) {
    // Support omission of .scss and leading _
    const normalizedUrl = url.endsWith('.scss') ? url : `${url}.scss`;
    return tryResolve_(normalizedUrl, sourceFilename) ||
        tryResolve_(path.join(path.dirname(normalizedUrl), `_${path.basename(normalizedUrl)}`),
            sourceFilename);
}

function materialImporter(url, prev) {
    if (url.startsWith('@material')) {
        const resolved = tryResolveScss(url, prev);
        return {
            file: resolved || url
        };
    }
    return {
        file: url
    };
}


module.exports = [{
  entry:
	  {
	  first:[
          path.resolve(__dirname, 'src/public/index.html'),
          path.resolve(__dirname, 'src/style/app.scss'),
          path.resolve(__dirname, 'src/app/app.js')
		  ],
	  signin:[
          path.resolve(__dirname, 'src/public/signin.html'),
          path.resolve(__dirname, 'src/style/app.scss'),
          path.resolve(__dirname, 'src/app/app.js')
		  ],
	  getstarted:[
          path.resolve(__dirname, 'src/public/elements.html'),
          path.resolve(__dirname, 'src/style/app.scss'),
          path.resolve(__dirname, 'src/app/app.js')
		  ],
	  regist:[
          path.resolve(__dirname, 'src/public/elements.html'),
          path.resolve(__dirname, 'src/style/app.scss'),
          path.resolve(__dirname, 'src/app/app.js')
		  ],
	  search:[
          path.resolve(__dirname, 'src/public/signin.html'),
          path.resolve(__dirname, 'src/style/app.scss'),
          path.resolve(__dirname, 'src/app/app.js')
		  ],
      list:[
          path.resolve(__dirname, 'src/public/elements.html'),
          path.resolve(__dirname, 'src/style/app.scss'),
          path.resolve(__dirname, 'src/app/app.js')
		  ],
	  detail:[
          path.resolve(__dirname, 'src/public/elements.html'),
          path.resolve(__dirname, 'src/style/app.scss'),
          path.resolve(__dirname, 'src/app/app.js')
		  ],
	  musical:[
	      path.resolve(__dirname, 'src/public/musical.html'),
	      path.resolve(__dirname, 'src/style/musical.scss'),
	      path.resolve(__dirname, 'src/app/musical.js')
		  ]		  
	  },
	 // ['./app.scss', './app.js'],
  output: {
	 filename: '[name].js',
	 // filename: 'bundle.js',
  },
  module: {
      rules: [{
          test: /\.scss$/,
          use: [{
                  loader: MiniCssExtractPlugin.loader,
              }, 
              {
                  loader: 'css-loader',
              }, {
                  loader: 'postcss-loader',
                  options: {
                      plugins: () => [autoprefixer()],
                  },
              }, {
                  loader: 'sass-loader',
                  options: {
                      importer: materialImporter
                  },
              }
          ],
      }, {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets:  ["@babel/preset-env"] ,
          plugins: ['transform-object-assign']
        },
      },
      {
          test: /\.html$/,
          use: [{
              loader: "html-loader",
              options: {
                  interpolate: true,
                  minimize: false,
                  removeComments: false,
                  collapseWhitespace: true
              }
          }]
      }, {
          test: /\.svg$/,
          use: [{
              loader: "svg-url-loader"
          }]
      }, {
          test: /\.(jpe?g|png|gif|ico)(\?.+)?$/,
          use: {
              loader: 'url-loader',
              options: {
                  limit: 8192,
                  name: './img/[name].[ext]'
              }
          }
      }],
	},
    plugins: [
        new HtmlWebpackPlugin({
        	title: 'index',
            hash: true,
            inject: true,
            template: path.resolve(__dirname, 'src/public/index.html'),
            chunks: ['first'],
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
        	title: 'sign-in',
            hash: true,
            inject: true,
            template: path.resolve(__dirname, 'src/public/signin.html'),
            chunks: ['signin'],
            filename: 'signin.html'
        }),
        new HtmlWebpackPlugin({
        	title: 'get-started',
            hash: true,
            inject: true,
            template: path.resolve(__dirname, 'src/public/getstarted.html'),
            chunks: ['getstarted'],
            filename: 'getstarted.html'
        }),
        new HtmlWebpackPlugin({
        	title: 'regist',
            hash: true,
            inject: true,
            template: path.resolve(__dirname, 'src/public/regist.html'),
            chunks: ['regist'],
            filename: 'regist.html'
        }),
        new HtmlWebpackPlugin({
        	title: 'search',
            hash: true,
            inject: true,
            template: path.resolve(__dirname, 'src/public/search.html'),
            chunks: ['search'],
            filename: 'search.html'
        }),
        new HtmlWebpackPlugin({
        	title: 'list',
            hash: true,
            inject: true,
            template: path.resolve(__dirname, 'src/public/list.html'),
            chunks: ['list'],
            filename: 'list.html'
        }),
        new HtmlWebpackPlugin({
        	title: 'detail',
            hash: true,
            inject: true,
            template: path.resolve(__dirname, 'src/public/detail.html'),
            chunks: ['detail'],
            filename: 'detail.html'
        }),
        new HtmlWebpackPlugin({
        	title: 'musical',
            hash: true,
            inject: true,
            template: path.resolve(__dirname, 'src/public/musical.html'),
            chunks: ['musical'],
            filename: 'musical.html'
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            // filename: devMode ? '[name].css' : '[name].[hash].css',
            // chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
            // filename: 'bundle.css',
            chunkFilename: '[name].css'
        })],
        devServer: {
            contentBase: './dist/',
            watchContentBase: true,
            open: true,
            hot: true,
            inline: true,
            progress: true
        }
}];

