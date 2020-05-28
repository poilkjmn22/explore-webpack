const merge = require('webpack-merge');
const base = require('./webpack.base');
const UglifyjsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(base, {
    mode: 'production',
    devtool: "hidden-source-map",
    optimization: {
        minimizer: [new UglifyjsPlugin()],
    },
    plugins: [
    ],
})
