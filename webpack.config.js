var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './main.js',
    output: { path: __dirname, filename: 'bundle.js' },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            },
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
};