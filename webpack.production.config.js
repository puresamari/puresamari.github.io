var path = require('path');
var webpack = require('webpack');

var nodeModulesDir = path.resolve(__dirname, './node_modules');


module.exports = {
    entry: './src/app/app.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['babel-loader'],
                externals: {
                    angular2 : ['/node_modules/angular2/es6/prod']
                },
            }
        ]
    },
    extensions: ['', '.js'],
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.DedupePlugin()
    ],
    plugins: [
        new webpack.NoErrorsPlugin()
    ],
    stats: {
        colors: true
    },
    devtool: 'source-map'
};