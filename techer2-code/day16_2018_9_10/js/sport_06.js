var timer = null;
function sport_06(obj,attr,target){
	clearInterval(timer);
	timer = setInterval(function(){
		var cur = parseInt(parseFloat(getStyle(obj,attr)) * 100);
		var speed  = (target - cur) / 8;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		if(cur === target){
			clearInterval(timer);
		}else{
			obj.style.opacity = (cur + speed) / 100;
			obj.style.filter = 'alpha(opacity=' + (cur + speed) + ')';
		}
		document.title= cur + ":" + target + ":" + speed;
	},30)
}
function getStyle(obj,attr){
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj,true)[attr];
}