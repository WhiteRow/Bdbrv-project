const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(path) {
    return {
        plugins: [
            new HtmlWebpackPlugin({
				filename: 'index.html',
				template: path + '/index.html',
				chunks: ['app'],
				favicon: path + '/favicon.png'
			}),
        ]
    }
}