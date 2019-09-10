'use strict'
const path = require('path')
const webpack = require("webpack");
const utils = require('./utils')
const config = require('../config')


function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: {
        app: './src/index.js',
    },
    output: {
        path: config.build.assetsRoot,
        chunkFilename: `[name].bundle.js`,
        filename: `[name].js`,
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            '@': resolve('src'),
        }
    },
    module: {
        rules: [{
            test: /\.html$/,
            use: [
                'html-loader',
            ]
        }, {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/plugin-proposal-object-rest-spread'],
                    cacheDirectory: true
                }
            }
        }]
    },
    node: {
        // process: true,
        setImmediate: 'empty',
        fs: 'empty',
        dgram: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    },
    plugins: [
        // new webpack.ProvidePlugin({
        //     '_': 'lodash',
        // }),
    ]
}