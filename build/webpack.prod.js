const merge = require('webpack-merge');
const base = require('./webpack.base');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyjsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(base, {
    mode: 'production',
    optimization: {
        minimizer: [new UglifyjsPlugin()],
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
})