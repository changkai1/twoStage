var timer = null;
function sport_02(obj,target){
	clearInterval(timer);
	timer = setInterval(()=>{
		var speed = target > obj.offsetLeft ? 7 : -7;
		if(Math.abs(target - obj.offsetLeft) < Math.abs(7)){
			clearInterval(timer);
			obj.style.left = target + 'px';
		}else{
			obj.style.left = obj.offsetLeft + speed + 'px';
		}
		document.title = obj.offsetLeft + ":" + target + ":" + speed;
	},30)
}