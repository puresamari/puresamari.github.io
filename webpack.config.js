const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressPlugin = require('webpack/lib/ProgressPlugin');

const { root, dist, src } = require('./config.js');

const HOST = 'localhost';
const PORT = 8080;

const publicPath = '/';
const appEnv = process.env.NODE_ENV || 'development';
const exclude = /node_modules/;

const conf = {
  entry: {
    app: [
      'react-hot-loader/patch',
      path.resolve(src, 'index.js')
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Custom template',
      template: path.resolve(root, 'index.ejs')
    }),
    new ProgressPlugin({ profile: false }),
    new webpack.NamedModulesPlugin(),
    new webpack.NamedChunksPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(appEnv)
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: [
          {
            loader: 'babel-loader',
            options: { cacheDirectory: true }
          }
        ],
        exclude
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader'
        ]
      }
    ]
  },
  output: {
    path: dist,
    publicPath,
    filename: 'app.js'
  },
  // resolve: {
  //   extensions: [ '.js', '.jsx', '.json' ],
  //   modules: [ src ]
  // },
  devServer: {
    clientLogLevel: 'warning',
    compress: true,
    contentBase: src,
    historyApiFallback: true,
    noInfo: true,
    overlay: {
      warnings: false,
      errors: true
    },
    publicPath
  }
};

if (appEnv === 'development') {
  config.devtool = 'inline-source-map';
}

module.exports = conf;
