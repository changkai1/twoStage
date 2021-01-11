//obj 代表运动对象
//json ： 代表多个attr和target
// callback 表示一个函数 （下一个动作） 当一个参数代表一个函数时，这个参数表示 回调函数
// 支持 缓冲和多物体    支持透明度  支持链式运动  支持完美运动
//解决完美运动 bug
function startMove(obj,json,callback){//{width:101,height:200}
	clearInterval( obj.timer );
	obj.timer = setInterval( function(){
		var flag = true;//假设定时器为true时  可以停止定时器了
		//attr 就是要操作的样式
		//json[attr] 就是目标值
		for( var attr in json ){
			var current = 0;
			//获取元素的实际宽度
			if( attr == "opacity" ){
				current = getStyle( obj, attr )*100;
			}else{
				current = parseInt( getStyle(obj,attr) ) ;
			}			
			var speed = (json[attr]-current)/10;
			speed = speed>0?Math.ceil(speed) : Math.floor(speed);
			if( current != json[attr] ){
				//当操作的样式没有达到目标值时  不能停止定时器
				flag = false;
			}
			//继续操作当前的样式值
			if( attr == "opacity" ){
				obj.style["opacity"] = (current+speed)/100;
			}else{
				obj.style[attr] = current+speed + "px";
			}
		}
		//当循环结束后 如果flag值还是true  假设成立
		if( flag ){
			clearInterval( obj.timer );
			//进入下一个动作（功能、方法 、函数） 
			//动作是可变的
			//调用下一个动作
			if( callback ){
				callback();
			}
		}
	},30 )
}

function getStyle(obj,attr){
	if( window.getComputedStyle ){
		return window.getComputedStyle( obj )[attr];
	}else{
		return obj.currentStyle[attr];
	}
}