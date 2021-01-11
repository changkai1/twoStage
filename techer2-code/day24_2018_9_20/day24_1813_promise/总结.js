一. Promise : 是ES6提供的用于解决异步问题的一个构造函数,
二. 如何使用:
	new Promise(function(resolve,reject){
		//处理语句
		成功: resolve([参数]);
		失败: reject([参数]);
	}).then(function([参数]){
		当处理语句返回resolve时,要执行的语句
	}).catch(function([参数]){
		当promise对象中处理语句失败返回reject时,要执行的语句
	})
三. Promise 中的三种状态 : 成功(resolved)     失败(rejected)   进行(pending),
四. Promise.prototype.then : 当返回resolve时,要调用的方法,
    Promise.prototype.catch : 当返回reject时,要调用的方法,
五. Promise.all() : 静态方法,
	当所有的promise对象都标志成resolve时,Promise.all返回resolve,只要有一个是reject,Promise.all返回reject.