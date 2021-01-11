
function sport_08(obj,attr,target){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var cur = attr === 'opacity' ? parseInt(parseFloat(getStyle(obj,attr)) * 100) : parseInt(getStyle(obj,attr));
		var speed  = (target - cur) / 8;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		if(cur === target){
			clearInterval(obj.timer);
		}else{
			if(attr === 'opacity'){
				obj.style.opacity = (cur + speed) / 100;
				obj.style.filter = 'alpha(opacity=' + (cur + speed) + ')';
			}else{
				obj.style[attr] = cur + speed + 'px';
			}
			
		}
		document.title= cur + ":" + target + ":" + speed;
	},30)
}
function getStyle(obj,attr){
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj,true)[attr];
}