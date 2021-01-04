
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: path.resolve(__dirname, "../../frontPage/src/index.js"),
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "../../dist/frontPage"),
    publicPath: "/"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../../public/index.html"),
      title: "前端页面",
      filename: "index.html",
      minify: true,
    })
  ]
}