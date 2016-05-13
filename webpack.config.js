var path = require('path');
var webpack = require('webpack');
var nodeModulesDir = path.resolve(__dirname, './node_modules');

module.exports = {
    entry: './src/app.js',
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
                    angular2: ['/node_modules/angular2/es6/prod']
                }
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            }
        ]
    },
      sassLoader: {
        includePaths: [path.resolve(__dirname, "./src")]
      },
    plugins: [
        new webpack.NoErrorsPlugin(),
    ],
    stats: {
        colors: true
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.js', '.scss'],
        root: [path.join(__dirname, './src')]
    }
};