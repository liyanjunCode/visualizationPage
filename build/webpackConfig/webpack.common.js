const path = require("path");
const fs = require("fs");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const dirPath = path.resolve(__dirname, "../build.json")
process.env.BUILD_CONFIG = fs.readFileSync(dirPath, { encoding: "utf-8" });
fs.unlinkSync(dirPath);
module.exports = {
    // devtool: "inline-cheap-eval-source-map",
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "../../src"),
            "frontPage": path.resolve(__dirname, "../../src/frontPage"),
            "managePage": path.resolve(__dirname, "../../src/managePage"),
            "front": path.resolve(__dirname, "../../src/frontPage/src"),
            "manage": path.resolve(__dirname, "../../src/managePage/src"),
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: "vue-loader"
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: [
                    {
                        loader: "file-loader",
                    },
                ],
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 2048,
                            name: "images/[name]_[hash:7].[ext]",
                        },
                    },
                ],
            },
            // {
            //     test: /\.(htm|html)$/,
            //     loader: 'html-withimg-loader'
            // },
            // 转换es6等语法
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: "ts-loader"
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, "../../dist/**/*")] }),
        // new ESLintPlugin({
        //     eslintPath: path.resolve(__dirname, "../../.eslintrc.js"),
        //     extensions: ["js", "vue", "ts"]
        // })
    ]
}