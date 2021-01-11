//obj 代表运动对象
// target 代表运动元素的目标值
// attr  运动的样式
// 支持 缓冲和多物体  
function startMove(obj,target,attr){
	clearInterval( obj.timer );
	obj.timer = setInterval( function(){
		//获取元素的实际宽度
		var current = parseInt( getStyle(obj,attr) ) ;
		var speed = (target-current)/10;
		speed = speed>0?Math.ceil(speed) : Math.floor(speed);
		if( current == target ){
			clearInterval( obj.timer );
		}else{
			obj.style[attr] = current+speed + "px";
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