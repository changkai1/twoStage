var timer = null;
function sport_05(obj,attr,target){
	clearInterval(timer);
	timer = setInterval(function(){
		var cur = parseInt(getStyle(obj,attr));
		var speed  = (target - cur) / 8;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		if(cur === target){
			clearInterval(timer);
		}else{
			obj.style[attr] = cur + speed + 'px';
		}
		document.title= cur + ":" + target + ":" + speed;
	},30)
}
function getStyle(obj,attr){
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj,true)[attr];
}