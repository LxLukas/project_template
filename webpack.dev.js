/**
 * name: webpack.dev.js
 * desc: 开发环境webpack打包配置
 * date: 2018/9/8
 * author: kelvin
 */
const { resolve } = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: './src/pages/app.js',
    },
    output: {
        path: resolve(__dirname, './build'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].[chunkhash].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader'
                },{
                    loader: 'css-loader'
                },{
                    loader: 'sass-loader'
                }]
            },
            {
                test: /\.(png|jpg|jpeg|svg)$/,
                loader: 'url-loader?limit=8192'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: ['file-loader']
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        }),
        new cleanWebpackPlugin('dist')
    ],
    devServer: {
        port: 8083,
        historyApiFallback: true
    },
    mode: 'development'
};
