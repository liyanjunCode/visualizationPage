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
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 2048,
            },
          },
        ],
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, "../../dist/**/*")] })
  ]
}