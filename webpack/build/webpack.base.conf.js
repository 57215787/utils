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
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production';

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}



module.exports = {
    entry: {
        app: './src/index.ts',
    },

    resolve: {
        extensions: ['.js', '.ts', 'tsx', 'json', 'vue'],
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
                use: [
                    {
                    loader: `vue-loader`,
                    options:{
                        compilerOptions: {
                            preserveWhitespace: false
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
                test: /\.(js|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    //enable sub-packages to find babel config
                    options: {
                        rootMode: 'upward'
                    }
                },
                include: path.resolve('src'),
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    devMode ? 'style-loader' : {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            // Prefer `dart-sass`
                            implementation: require('sass'),
                            sassOptions: {
                                fiber: false,
                            },                            
                        },
                    },
                    {
                        loader:'sass-resources-loader',
                        options:{
                            resources: [path.resolve(__dirname, '../src/styles/_variables.scss')]
                        }
                    }
                ],
            },
            {
                test: /\.css$/i,
                use: [
                    devMode ? 'style-loader' : {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'postcss-loader',
                ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 5
        }),
        new LodashModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        }),
        // new HappyPack({
        //     id: 'js',
        //     threadPool: happyThreadPool,
        //     loaders: [

        //     ],
        // }),

    ]
}