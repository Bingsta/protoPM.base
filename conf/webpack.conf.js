const webpack = require('webpack');
const conf = require('./gulp.conf');
const path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FailPlugin = require('webpack-fail-plugin');
const autoprefixer = require('autoprefixer');


module.exports = {
  module: {
    loaders: [
      {
        test: /.json$/,
        loaders: [
          'json-loader'
        ]
      },
      {
        test: /.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        enforce: 'pre'
      },
      {
        test: /^((?!\.global).)*(less|css)$/,
        exclude:"/theme/",
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader', 
          loader:['css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader', 'less-loader']
        }) 
      },
      {
        test: /\.global.less$/,
        loader: 'style-loader!css-loader!less-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        loader: 'url-loader?limit=10000',
      }, 
      {
        test: /\.(eot|ttf|wav|mp3)$/,
        loader: 'file-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot-loader',
          'babel-loader'
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({filename: 'style.css', allChunks: true }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    FailPlugin,
    new HtmlWebpackPlugin({
      template: conf.path.src('index.html')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: () => [autoprefixer]
      },
      debug: true
    })
  ],
  devtool: 'source-map',
  output: {
    path: path.join(process.cwd(), conf.paths.tmp),
    filename: 'index.js'
  },
  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    `./${conf.path.src('index')}`
  ]
};
