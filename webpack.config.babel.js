import 'dotenv/config';
import {HotModuleReplacementPlugin} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: {
    main: './client/index.js'
  },
  output: {
    path: './dist/client',
    filename: '/[name].[hash].js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.js$/, loader: 'react-hot!babel', exclude: /node_modules/}
    ]
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './client/index.ejs'
    })
  ],
  devServer: {
    port: process.env.WEBPACK_PORT,
    hot: true,
    inline: true,
    historyApiFallback: true,
    proxy: {
      '/api/*': {
        target: `http://localhost:${process.env.PORT}/`
      }
    }
  }
};