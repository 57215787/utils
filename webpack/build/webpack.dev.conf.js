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

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: "development",
    module: {
        rules: [{
            test: /\.(sa|sc|c)ss$/,
            use: [

                'style-loader',
                'css-loader',
                'postcss-loader',
                {
                    loader: 'sass-loader',
                    options: {
                        // Prefer `dart-sass`
                        implementation: require('sass'),
                    },
                },
            ],
        }, ]
    },
    devServer: {
        clientLogLevel: 'warning',
        compress: true,
        contentBase: "./public",
        host: HOST || config.dev.host,
        port: PORT || config.dev.port,
        open: config.dev.autoOpenBrowser,
        overlay: {
            warnings: true,
            errors: true
        },
        quiet: true,
        useLocalIp: true,

    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./public/index.html",
            inject: true,
            meta: {
                'Content-Security-Policy': {
                    'http-equiv': `X-UA-Compatible`,
                    'content': 'IE=edge'
                },
                'format-detection': 'telephone=no',
                'viewport': `width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no,viewport-fit=cover`,
            },

        }),
    ]
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