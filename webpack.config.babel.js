import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: {
    main: './client/index.js'
  },
  output: {
    path: './dist/public',
    filename: '[name].[hash].js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.js$/, loader: "babel" }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.ejs'
    })
  ]
};