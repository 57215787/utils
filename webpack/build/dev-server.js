'use strict';

const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config.js');

const compiler = Webpack(webpackConfig);
const devServerOptions = Object.assign({}, webpackConfig.devServer, {

});
const server = new WebpackDevServer(compiler, devServerOptions);

const {
    port,
    host
} = devServerOptions;

server.listen(port, host, () => {
    console.log(`Starting server on http://${host}:${port}`);
});