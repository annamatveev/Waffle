const HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Waffle',
      filename: 'index.html',
    }),
  ],
};
