var helpers = require('./helpers'); 
var webpack = require('webpack');

var ProvidePlugin = require('webpack/lib/ProvidePlugin');
var DefinePlugin = require('webpack/lib/DefinePlugin');
var OccurenceOrderPlugin = require('webpack/lib/optimize/OccurenceOrderPlugin');
var DedupePlugin = require('webpack/lib/optimize/DedupePlugin');
var UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
var CompressionPlugin = require('compression-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackMd5Hash = require('webpack-md5-hash');
var ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8080;

const METADATA = {
  title: 'Quickbook',
  baseUrl: '/',
  host: HOST,
  port: PORT,
  ENV: ENV
};

module.exports = {
  metadata: METADATA,
  debug: false,
  devtool: 'source-map',
  entry: {
    'polyfills': './source/app/polyfills.ts',
    'vendor': './source/app/vendor.ts',
    'main': './source/app/main.ts'
  },
  resolve: {
      extensions: ['', '.ts', '.js'],
      root: helpers.root('src'),
  },
  output: {
    path: helpers.root('dist'),
    filename: '[name].[chunkhash].bundle.js',
    sourceMapFilename: '[name].[chunkhash].bundle.map',
    chunkFilename: '[id].[chunkhash].chunk.js'
  },
  module: {
      preLoaders: [
          {test: /\.ts$/, loader: 'tslint-loader', exclude: [helpers.root('node_modules')]},
          {test: /\.js$/, loader: 'source-map-loader', exclude: [helpers.root('node_modules/rxjs')]}
        ],
    loaders: [
      {
        test: /\.ts$/, loader: 'awesome-typescript-loader',
        query: {
          'compilerOptions': {
            'removeComments': true
          }
        },
        exclude: [
          /\.(spec|e2e)\.ts$/
        ]
      },
      {test: /\.json$/, loader: 'json-loader'},
      {test: /\.css$/, loader: 'raw-loader'},
      {test: /\.html$/, loader: 'raw-loader', exclude: [helpers.root('source/index.html')]}
    ],
    noParse: [
      helpers.root('zone.js', 'dist'),
      helpers.root('angular2', 'bundles')
    ]

  },
  plugins: [
      new ForkCheckerPlugin(),
      new WebpackMd5Hash(),
    new DedupePlugin(),
    new OccurenceOrderPlugin(true),
    new CommonsChunkPlugin({name: ['main', 'vendor', 'polyfills'], minChunks: Infinity}),
    new CopyWebpackPlugin([{from: 'source/assets', to: 'assets'}]),
    new HtmlWebpackPlugin({template: 'source/index.html', chunksSortMode: 'none'}),
    new DefinePlugin({'ENV': JSON.stringify(METADATA.ENV), 'HMR': false}),
    new UglifyJsPlugin({
      beautify: false,
      mangle: false,
      compress: {screw_ie8: true}, //prod
      comments: false //prod
    }),
    new CompressionPlugin({
      algorithm: helpers.gzipMaxLevel,
      regExp: /\.css$|\.html$|\.js$|\.map$/,
      threshold: 2 * 1024
    })
  ],
  htmlLoader: {
    minimize: true,
    removeAttributeQuotes: false,
    caseSensitive: true,
    customAttrSurround: [[/#/, /(?:)/], [/\*/, /(?:)/], [/\[?\(?/, /(?:)/]],
    customAttrAssign: [/\)?\]?=/]
  },
  node: {
    global: 'window',
    process: false,
    crypto: 'empty',
    module: false,
    clearImmediate: false,
    setImmediate: false
  }
};
