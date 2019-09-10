'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    module: {
        rules: [{
            test: /\.(sa|sc|c)ss$/,
            use: [{
                    loader: MiniCssExtractPlugin.loader,
                },
                'css-loader',
                'postcss-loader',
                {
                    loader: 'sass-loader',
                    options: {
                        // Prefer `dart-sass`
                        implementation: require('sass'),
                    },
                },
            ]
        }]
    },
    plugins: [
        new webpack.HashedModuleIdsPlugin(),
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
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[hash:8].css',
            chunkFilename: '[id].[hash:8].css'
        }),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin(),
    ],

})

if (config.build.bundleAnalyzerReport) {
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
    webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig