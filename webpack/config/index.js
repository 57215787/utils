'use strict'
const path = require('path')

module.exports = {
    dev: {
        host: '0.0.0.0',
        port: 8080,
        autoOpenBrowser: false,
    },
    build: {
        index: path.resolve(__dirname, '../dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        productionSourceMap: true,
        devtool: '#source-map',
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
    }
}