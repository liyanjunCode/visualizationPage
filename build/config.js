const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//  本地服务采用多页面运行
const getMultyPage = () => {
    const nameList = ["frontPage", "managePage"];
    const config = { entry: {}, plugins: [] };
    nameList.forEach(item => {
        config.entry[item] = path.resolve(__dirname, `../src/${item}/src/index.ts`);
        config.plugins.push(new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../public/index.html"),
            title: "管理页面",
            filename: item + ".html",
            minify: true,
            chunks: [item]
        }))
    })
    return config;
}
// 用于区分打包， 如果是front只打包前台页面，manage打包后台页面，否则两个一起打包
const flag = JSON.parse(process.env.BUILD_CONFIG);
const openPageConfig = flag.name == "front" ? ["frontPage.html"] : flag.name == "manage" ? ["managePage.html"] : ["frontPage.html", "managePage.html"];
module.exports = {
    pageConfig: getMultyPage(),
    openPageConfig,
    flag
}