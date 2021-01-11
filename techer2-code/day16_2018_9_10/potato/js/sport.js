//获取非行内样式
function getStyle(obj,attr){
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj,1)[attr];
}
//运动框架
function sport(obj,json,fn){
	//1.先清除上一次的计时器
	clearInterval(obj.timer);
	//2.开启新的计时器
	obj.timer = setInterval(function(){
		//1. 设置开关
		var stop = true;
		//2. 遍历对象
		for(var attr in json){
			//1. 获取属性的当前值
			var cur = attr === 'opacity' ? parseInt(parseFloat(getStyle(obj,attr)) * 100) : parseInt(getStyle(obj,attr));
			//2. 计算速度 
			var speed = (json[attr] - cur) / 8;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			//3. 判断属性是否到达目标
			if(cur != json[attr]){
				stop = false;
			}
			//4. 设置运动
			if(attr === 'opacity'){
				obj.style.opacity = (cur + speed) / 100;
				obj.style.filter = 'alpha(opacity=' + (cur + speed) + ')';
			}else{
				obj.style[attr] = cur + speed + 'px';
			}
		}
		//3. 停止计时器
		if(stop){
			clearInterval(obj.timer);
			if(typeof fn === 'function'){
				fn();
			}
		}
	},30)
}