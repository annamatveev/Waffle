const AutoPrefixer = require('autoprefixer');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'stage-0', 'react'],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader', {
          loader: 'postcss-loader',
          options: {
            plugins: () => [AutoPrefixer],
          },
        }],
      },
    ],
  },
};
