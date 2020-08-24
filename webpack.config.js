const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { Template } = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
          },
         { test: /\.scss$/,
            use: [
            'style-loader',
            MiniCssExtractPlugin.loader,
        {
            loader: 'css-loader',
            options: { sourceMap: true }
        }, {
            loader: 'sass-loader',
            options: { sourceMap: true }
        }
      ]},
        ]
      },
      devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true
      },
      plugins: [new HtmlWebpackPlugin({
          template: path.join(__dirname, 'index.html'),
        }),
        new MiniCssExtractPlugin(),
    ]
};