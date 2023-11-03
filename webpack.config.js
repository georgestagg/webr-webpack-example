const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
  },
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      chunks: ['main']
    }),
    new CopyWebpackPlugin({
        patterns: [
          {
            context: "node_modules/webr/dist",
            from: "webr-*.js",
          },
          {
            context: "node_modules/webr/dist",
            from: "R.bin.*",
          },
          {
            context: "node_modules/webr/dist",
            from: "*.so",
          },
          {
            context: "node_modules/webr/dist",
            from: "vfs",
            to: "vfs",
          },
        ]
    })
]
};
