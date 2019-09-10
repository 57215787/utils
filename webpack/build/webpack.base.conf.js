'use strict'
const path = require('path')
const webpack = require("webpack");
const utils = require('./utils')
const config = require('../config')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}



module.exports = {
    entry: {
        app: './src/index.js',
    },
    output: {
        path: config.build.assetsRoot,
        chunkFilename: `[name].[hash:8].js`,
        filename: `[name].[hash:8].js`,
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
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 5
        }),
        new LodashModuleReplacementPlugin()
    ]
}