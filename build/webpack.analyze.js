const merge = require('webpack-merge');
const base = require('./webpack.base.js');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(base, {
    plugins: [new BundleAnalyzerPlugin({
      analyzerMode: 'server'
    })]
})
