const { merge } = require("webpack-merge");
const frontConfig = require("./webpack.front.pro.js");
const manageConfig = require("./webpack.manage.pro.js");
const baseConfig = require("./webpack.common.js");
const { flag } = require("../config.js");
const commonConfig = {

}
// 用于区分打包， 如果是front只打包前台页面，manage打包后台页面，否则两个一起打包
const front = merge(baseConfig, commonConfig, frontConfig);
const manage = merge(baseConfig, commonConfig, manageConfig)
module.exports = flag.name == "front" ? front : flag.name == "manage" ? manage : [front, manage];