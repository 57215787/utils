'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf.js')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const portfinder = require('portfinder')

const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

const HappyPack = require('happypack');
const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({
    size: os.cpus().length
});

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: "development",
    output: {
        path: config.build.assetsRoot,
        chunkFilename: `[name].js`,
        publicPath: '/'
    },
    devServer: {
        progress: true,
        contentBase: "./public",
        host: HOST || config.dev.host,
        port: PORT || config.dev.port,
        open: config.dev.autoOpenBrowser,
    },
    plugins: [
        new HtmlWebpackPlugin({
            // chunks: ['chunks'],
            template: "./public/index.html",
            filename: "index.html",
            meta: {
                'Content-Security-Policy': {
                    'http-equiv': `X-UA-Compatible`,
                    'content': 'IE=edge'
                },
                'format-detection': 'telephone=no',
                'viewport': `width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no,viewport-fit=cover`,
            },

        }),
        // new HappyPack({
        //     id: 'css',
        //     threadPool: happyThreadPool,
        //     loaders: [

        //     ],
        // }),
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                chunks: {
                    chunks: 'all',
                    minChunks: 2,
                    minSize: 0,
                    name: 'chunks'
                }
            },
        },
    },
})

module.exports = new Promise((resolve, reject) => {
    portfinder.basePort = process.env.PORT || config.dev.port
    portfinder.getPort((err, port) => {
        if (err) {
            reject(err)
        } else {
            process.env.PORT = port
            devWebpackConfig.devServer.port = port

            devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
                compilationSuccessInfo: {
                    messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
                },
                onErrors: config.dev.notifyOnErrors ?
                    utils.createNotifierCallback() : undefined
            }))
            resolve(devWebpackConfig)
        }
    })
})