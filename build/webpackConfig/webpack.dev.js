
const { merge } = require("webpack-merge");
const path = require("path");
const baseConfig = require("./webpack.common.js");
const { openPageConfig, pageConfig } = require("../config.js");

module.exports = merge(baseConfig, {
  entry: pageConfig.entry,
  output: {
    path: path.resolve(__dirname, "../../dist"),
    filename: "[name].[contenthash].js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "../../dist"),
    host: "localhost",
    port: "8080",
    hotOnly: true,
    open: true, //启动服务自动打开页面
    openPage: openPageConfig, //启动服务自动打开的指定页面， 可自行控制
    progress: true, //开启进度条
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader"
        ],
      },
      {
        test: /\.scss$/i,
        exclude: /node_modules/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ],
      },
    ]
  },
  plugins: [
    ...pageConfig.plugins
  ]
})