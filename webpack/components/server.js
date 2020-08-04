module.exports = function(base) {
	return {
		devServer: {
			overlay: true,
			port: 3030,
			progress: true,
			historyApiFallback: true
		}
	};
};
