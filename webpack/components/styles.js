module.exports = function() {
	return {
		module: {
			rules: [
				{
					test: /\.(sc|sa|c)ss$/,
					use: [
						{
							loader: 'cache-loader'
						},
						{
							loader: 'style-loader'
						},
						{
							loader: 'css-loader',
							options: {
								sourceMap: true
							}
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true
							}
						}
					]
				}
			]
		}
	};
};
