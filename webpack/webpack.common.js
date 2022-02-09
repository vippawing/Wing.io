const path = require('path')

module.exports = {
  entry: path.join(__dirname, '../src/index.ts'),
  output: {
    filename: 'index.js',
    path: path.join(__dirname, '../dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      { test:/\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.(woff|woff2|eot|ttf|otf)$/, use: [ { loader: 'url-loader' } ] },
      { test: /\.ts(x?)$/, use: [ { loader: 'ts-loader', }, ], },
    ],
  },
}