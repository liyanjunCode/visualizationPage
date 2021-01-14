const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "production",
    entry: path.resolve(__dirname, "../../src/managePage/src/index.ts"),
    output: {
        filename: "js/[name].[contenthash].js",
        path: path.resolve(__dirname, "../../dist/managePage"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../../public/index.html"),
            title: "管理页面",
            filename: "index.html",
            minify: true,
        })
    ]
}
