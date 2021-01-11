一.全局安装webpack  :
	1.先安装nodejs环境(注:路径中一定一定一定不能出现中文),
	2.windows键 + r 打开运行窗口,输入cmd回车--进入windows命令窗口
	3. 测试nodejs是否安装成功: node -v,  npm -v   有空格
	4. 安装cnpm : npm install -g cnpm --registry=https://registry.npm.taobao.org
	5. 全局安装webpack : npm(cnpm) install -g webpack@3   测试webpack :   webpack -v,
二.准备项目
	1.在项目根目录下(shift + 右键--选择在此处打开命令窗口),初始化package.json文件 :   npm(cnpm) init [-y],中括号不要写
	2.在项目根目录下,本地安装webpack :  npm(cnpm) install --save-dev webpack@3,
	3.在项目根目录下,创建webpack.config.js的配置文件
	4. 在webpack.config.js中配置如下代码:
		//通过require导入插件
		var path = require('path');
		//模块导出
		module.exports = {
			entry : "./src/js/index.js", //入口文件（相对路径）
			output : {
				path : path.resolve(__dirname,"dist"), //出口路径（绝对路径）  __dirname : 在node中是获取当前目录所在的绝对路径
				filename : "index.js"
			}
		}
	5. 运行webpack开始打包:  webpack,
	6. 设置自动监听: webpack --watch,
三.插件
	1. html-webpack-plugin : 自动生成index.html文件,
		1>先本地安装这个插件 : npm(cnpm) install --save-dev 插件名,
		2>在webpack.config.js中:
			<1> 通过require导入插件
			<2>在module.exports中配置
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
						new HtmlWebpackPlugin()
					]
				}
	2.css-loader style-loader :设置样式,
		1>先本地安装插件: npm(cnpm) install --save-dev 插件名,
		2>在入口文件中通过require("!style-loader!css-loader!css文件的路径")