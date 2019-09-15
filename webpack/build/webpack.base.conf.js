'use strict'
const path = require('path')
const webpack = require("webpack");
const utils = require('./utils')
const config = require('../config')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HappyPack = require('happypack');
const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
const StyleLintPlugin = require('stylelint-webpack-plugin');

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}



module.exports = {
    entry: {
        app: './src/index.ts',
    },

    resolve: {
        extensions: ['.js', 'jsx', '.ts', 'tsx', 'json', 'vue'],
        alias: {
            '@': resolve('src'),
            'vue$': 'vue/dist/vue.esm.js',
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                use: [{
                    loader: `vue-loader`,
                    options: {
                        loaders: {
                            css: [
                                'vue-style-loader',
                                {
                                    loader: 'css-loader',
                                    options: {
                                        sourceMap: true
                                    }
                                }
                            ],
                            postcss: [
                                'vue-style-loader',
                                {
                                    loader: 'css-loader',
                                    options: {
                                        sourceMap: true
                                    }
                                }
                            ],
                            scss: [
                                'vue-style-loader', {
                                    loader: 'css-loader',
                                    options: {
                                        sourceMap: true
                                    }
                                }, {
                                    loader: 'sass-loader',
                                    options: {
                                        sourceMap: true
                                    }
                                }
                            ]
                        },
                        cssSourceMap: true,
                        cacheBusting: true,
                        transformToRequire: {
                            video: [
                                "src",
                                "poster"
                            ],
                            source: "src",
                            img: "src",
                            image: "xlink:href"
                        }
                    }
                }],

            },
            {
                test: /\.ext$/,
                use: [`cache-loader`],
                include: path.resolve('src'),
            },
            {
                test: /\.html$/,
                use: [
                    'html-loader',
                ]
            }, {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ],
                include: path.resolve('src'),
            },
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
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
        //     // '_': 'lodash',
        //     'Vue': 'vue'
        // }),
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 5
        }),
        new LodashModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new StyleLintPlugin({
            syntax:'scss'
        })
        // new HappyPack({
        //     id: 'js',
        //     threadPool: happyThreadPool,
        //     loaders: [

        //     ],
        // }),

    ]
}