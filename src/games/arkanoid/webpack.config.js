var path = require('path');

module.exports = {
  entry: './src/games/arkanoid/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/'
  },
	devServer: {
		contentBase: path.join(__dirname, ""),
		compress: true,
		port: 9000
	},
	module: {
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader", options: { presets: ['es2015'] } }
		]
	},
};
