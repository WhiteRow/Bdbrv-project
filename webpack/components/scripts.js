module.exports = function () {
	return {
		module: {
			rules: [
				{
					enforce: 'pre',
					test: /\.(js)$/,
					exclude: /node_modules/,
					loader: 'eslint-loader',
					options: {
						cache: true,
					},
				},
				{
					test: /\.(js)$/,
					exclude: /node_modules/,
					use: [
						{
							loader: 'cache-loader'
						},
						{
							loader: 'babel-loader',
							options: {
								presets: [
									'@babel/preset-env'
								]
							}
						}
					],
				}
			]
		}
	};
};