var timer = null;
function sport_04(obj,target){
	clearInterval(timer);
	timer = setInterval(function(){
		var speed  = (target - obj.offsetTop) / 8;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		if(obj.offsetTop === target){
			clearInterval(timer);
		}else{
			obj.style.top = obj.offsetTop + speed + 'px';
		}
		console.log(obj.offsetTop,target,speed)
	},30)
}