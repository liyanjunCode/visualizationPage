const { merge } = require("webpack-merge");
const frontConfig = require("../frontPage/front.pro.js");
const manageConfig = require("../managePage/manage.pro.js");
const baseConfig = require("./webpack.common.js");
const commonConfig = {

}
module.exports = [merge(baseConfig, commonConfig, frontConfig), merge(baseConfig, commonConfig, manageConfig)];