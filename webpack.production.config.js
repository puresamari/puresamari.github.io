var webpack = require('webpack');

var exports = require('./webpack.exports.js');

exports.plugins = [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),
    new webpack.optimize.DedupePlugin()
];

exports.devtool = 'source-map';

exports.output.filename = 'app.min.js';

module.exports = exports;