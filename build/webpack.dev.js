const merge = require('webpack-merge');
const webpack = require('webpack');
const base = require('./webpack.base.js');

module.exports = merge(base, {
    mode: 'development',
    devServer: {
        compress: false,
        hot: true,
        port: 8080
    }
})
