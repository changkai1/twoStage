//obj 代表运动对象
//json ： 代表多个attr和target
// callback 表示一个函数 （下一个动作） 当一个参数代表一个函数时，这个参数表示 回调函数
// 支持 缓冲和多物体    支持透明度  支持链式运动  支持完美运动
function startMove(obj,json,callback){
	clearInterval( obj.timer );
	obj.timer = setInterval( function(){
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
			
			var speed = json[attr]-current > 0 ? 3:-3;
			if( Math.abs(json[attr]-current) < Math.abs(speed) ){
				obj.style[attr] = json[attr] + "px";
				clearInterval( obj.timer );
				//进入下一个动作（功能、方法 、函数） 
				//动作是可变的
				//调用下一个动作
				if( callback ){
					callback();
				}
			}else{
				if( attr == "opacity" ){
					obj.style["opacity"] = (current+speed)/100;
				}else{
					obj.style[attr] = current+speed + "px";
				}
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