/* eslint-disable no-var, strict, prefer-arrow-callback */'use strict';var path = require('path');var webpack = require('webpack');var packageJson = require('./package.json');var vendorDependencies = Object.keys(packageJson['dependencies']);//const postcssNormalize = require('postcss-normalize');const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';const entry = [  path.resolve(__dirname, 'src', 'main.ts'),  path.resolve(__dirname, 'src', 'main.css')];const plugins = [  new (require('html-webpack-plugin'))()];var babelLoader = {  loader: 'babel-loader',  options: {    cacheDirectory: true,  }};module.exports = {  entry,  mode,  output: {    filename: "./dist/bundle.js"  },  devServer: {    contentBase: ".",    host: "localhost",    port: 9000  },  module: {    rules: [      {        test: /\.js$/,        exclude: /node_modules/,        use: [babelLoader]      },      {        test: /\.ts$/,        exclude: /node_modules/,        use: [          babelLoader,          {            loader: 'ts-loader'          }        ]      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      },    ]  },  plugins,  resolve: {
    extensions: ['.ts', '.js', '.json']
  }};