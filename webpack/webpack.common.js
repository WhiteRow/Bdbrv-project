const { merge } = require('webpack-merge');

const scripts = require('./components/scripts');
const directories = require('./components/directories');
const images = require('./components/images');
const extractFonts = require('./components/fonts.extract');
const extractHtml = require('./components/html.extract');

const commonConfig = merge({
		entry: {
			app: directories.source + '/index.js',
		},

		target: 'web',

		resolve: {
			extensions: ['.js', '.json'],
			alias: {
				JsComponents: `${directories.source}/js/components`,
				fonts: `${directories.source}/assets/fonts`
			}
		},

		optimization: {
			splitChunks: {
				chunks: 'async',
				name: true
			}
		}
	},

	scripts(),
	images(),
	extractHtml(directories.source),
	extractFonts()
);

module.exports = commonConfig
