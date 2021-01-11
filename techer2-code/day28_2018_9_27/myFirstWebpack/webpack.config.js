//通过require导入插件
var path = require('path');
var HtmlWebpackPlugin = require("html-webpack-plugin");
//模块导出
module.exports = {
	entry : "./src/js/index.js", //入口文件（相对路径）
	output : {
		path : path.resolve(__dirname,"dist"), //出口路径（绝对路径）  __dirname : 在node中是获取当前目录所在的绝对路径
		filename : "index.js"
	},
	plugins : [
		new HtmlWebpackPlugin({template : './src/html/index.html'})
	]
}