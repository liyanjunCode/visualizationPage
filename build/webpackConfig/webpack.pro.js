const { merge } = require("webpack-merge");
const frontConfig = require("./webpack.front.pro.js");
const manageConfig = require("./webpack.manage.pro.js");
const baseConfig = require("./webpack.common.js");
const { flag } = require("../config.js");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const commonConfig = {
    module: {
        rules: [
            {
            test: /\.css$/i,
            exclude: /node_modules/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                "postcss-loader"
            ],
            },
            {
            test: /\.scss$/i,
            exclude: /node_modules/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                "postcss-loader",
                "sass-loader"
            ],
            },
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: "main.css"
        })
    ]
}
// 用于区分打包， 如果是front只打包前台页面，manage打包后台页面，否则两个一起打包
const front = merge(baseConfig, commonConfig, frontConfig);
const manage = merge(baseConfig, commonConfig, manageConfig)
module.exports = flag.name == "front" ? front : flag.name == "manage" ? manage : [front, manage];