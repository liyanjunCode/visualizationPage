const path = require("path");
const fs = require("fs");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const dirPath = path.resolve(__dirname, "../build.json")
process.env.BUILD_CONFIG = fs.readFileSync(dirPath, { encoding: "utf-8" });
fs.unlinkSync(dirPath);
module.exports = {
    // devtool: "inline-cheap-eval-source-map",
    module: {
        rules: [
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 2048,
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
                    loader: 'babel-loader'
                }
            },
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
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 2,
                        },
                    },
                    "postcss-loader",
                    "sass-loader"
                ],
            },
            // {
            //     test: /\.tsx?$/,
            //     exclude: /node_modules/,
            //     loader: "ts-loader"
            // }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, "../../dist/**/*")] })
    ]
}