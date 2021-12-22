const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const copyPluguin = require('copy-webpack-plugin');
const fullPaths = require('./src/utils/getLibs');

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
      '@comp': path.resolve(__dirname, './src/components/'),
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
        generator: {
          filename: 'assets/images/[name].[hash][ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name].[hash][ext]',
        },
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
    new copyPluguin({
      // Se encarga de copiar todas las librerias a la carpeta lib
      patterns: fullPaths.map((libpath) => {
        return {
          from: path.resolve(__dirname, `node_modules/${libpath}`),
          to: path.resolve(__dirname, './src/lib/'),
        };
      }),
    }),
  ],
};
