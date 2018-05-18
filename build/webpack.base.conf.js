const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let config = {
  entry: path.resolve(__dirname, "../a.js"), //入口，可以是一个字符串，也可以是一个数组或者对象
  output: {
    filename: "b.js", //打包完成后的文件名
    path: path.resolve(__dirname, "../dist") //打包后的文件夹
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.(png|jpe?g)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 8192
          }
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1 //意思是在使用css-loader之前对引用的css进行的操作。
            }
          },
          {
            loader: "postcss-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "name"
    }),
    new ExtractTextPlugin("style.css")
  ]
};

module.exports = config;
