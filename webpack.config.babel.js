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
      {test: /\.js$/, loader: 'react-hot!babel', exclude: /node_modules/},
      {test: /\.jpg$/, loader: 'url?name=/[hash].[ext]&limit=10000'},
      {test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader: 'file?name=/[hash].[ext]'}
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
    host: '0.0.0.0',
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