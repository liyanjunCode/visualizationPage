const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  // devtool: "inline-cheap-eval-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "../../dist"),
    // host: "localhost",
    port: "8080",
    hotOnly: true,
    open: true,
    progress: true,
  },
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