const config = {
	mode: 'production',
	// mode: 'development',
	entry: {
		main: './src/js/main.js',
		// main2: './src/js/main2.js',
	},
	output: {
		filename: '[name].js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
};

module.exports = config;
