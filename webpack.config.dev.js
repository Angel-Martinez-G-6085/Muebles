const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    app: './src/index.js',
  },
  devServer: {
    static: './dist',
    port: 3000,
    open: true,
  },
  output: {
    assetModuleFilename: 'assets/[name].[ext]',
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js',
    clean: true,
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@img': path.resolve(__dirname, './src/assets/images/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: ['html-loader'],
      },
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'Development',
      inject: 'body',
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contentHash].css',
    }),
    new CopyPlugin({
      patterns: [{ from: './src/assets/images/', to: 'assets/images' }],
    }),
  ],
};
