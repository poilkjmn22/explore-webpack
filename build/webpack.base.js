const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js'
    },
    devtool: "eval-source-map",
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader'
            }
        }, {
            test: /\.s[ac]ss$/i,
            exclude: /(node_modules|bower_components)/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: 'Explore Webpack',
        template: 'index.html'
      })
    ],
    output: {
        filename: '[name].[hash:7].js',
        path: path.resolve(__dirname, '../dist'),
    },
};
