const { merge } = require('webpack-merge');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const directories = require('./components/directories');
const extractStyles = require('./components/styles.extract');

const common = require('./webpack.common');

const smp = new SpeedMeasurePlugin({
    disable: !process.env.MEASURE,
})

const prodConfig = merge(common, {
        mode: 'production',

        output: {
			path: directories.distribution,
			filename: './js/[name].[contenthash].js'
		},

        optimization: {
            minimize: true,
            minimizer: [
                new TerserPlugin()
            ],
        },
        
        plugins: [
            new CleanWebpackPlugin()
        ]
    },

    extractStyles()
);

module.exports = smp.wrap(prodConfig)