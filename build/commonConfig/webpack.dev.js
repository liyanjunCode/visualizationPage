
const { merge } = require("webpack-merge");
const frontConfig = require("../frontPage/front.dev.js");
const manageConfig = require("../managePage/manage.dev.js");
const baseConfig = require("./webpack.common.js")
const commonConfig = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader'
        ],
      },
    ]
  }
}
module.exports = [merge(baseConfig, commonConfig, frontConfig), merge(baseConfig, commonConfig, manageConfig)];