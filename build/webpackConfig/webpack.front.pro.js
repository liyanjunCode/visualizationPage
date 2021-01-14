const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "production",
    entry: path.resolve(__dirname, "../../src/frontPage/src/index.ts"),
    output: {
        filename: "js/[name].[contenthash].bundle.js",
        path: path.resolve(__dirname, "../../dist/frontPage"),
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

