var path = require('path');
var webpack = require('webpack');

var nodeModulesDir = path.resolve(__dirname, './node_modules');
var appDir = path.resolve(__dirname, './app');

module.exports = {
    entry: './app/main.js',
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'app.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['babel-loader'],
                externals: {
                    angular2: ['/node_modules/angular2/es6/prod']
                }
            },
            {
                test: /\.scss$/,
                loaders: [ 'style', 'css', 'sass' ]
            },
            {
               test: /\.html$/,
               loader: 'raw-loader'
            }
        ]
    },
    sassLoader: {
        includePaths: [appDir]
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
    ],
    stats: {
        colors: true
    },
    devtool: '#inline-source-map',
    resolve: {
        extensions: ['', '.js', '.scss', '.html'],
        root: [appDir]
    },
    devServer: {
        port: 8080,
        historyApiFallback: true,
    }
};