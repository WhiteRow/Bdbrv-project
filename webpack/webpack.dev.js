const webpack = require('webpack')
const { merge } = require('webpack-merge');

const directories = require('./components/directories');
const styles = require('./components/styles');
const surceMap = require('./components/source.map');
const server = require('./components/server');

const common = require('./webpack.common');

const devConfig = merge(common, {
        mode: 'development',

        output: {
			path: directories.distribution,
			filename: './js/[name].js'
		},

        plugins: [
            new webpack.HotModuleReplacementPlugin(),
        ],
    },
    
    server(),
    styles(),
    surceMap()
);

module.exports = devConfig