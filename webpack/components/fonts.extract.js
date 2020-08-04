module.exports = function() {
	return {
		module: {
			rules: [
				{
					test: /\.(eot|ttf|otf|woff|woff2)$/,
					use: {
						loader: 'file-loader',
						options: {
							name: 'assets/fonts/[name].[ext]'
						}
					}
				}
			]
		}
	}
};
