var timer = null;
function sport_03(obj,target){
	clearInterval(timer);
	timer = setInterval(function(){
		var speed  = (target - obj.offsetLeft) / 8;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		if(obj.offsetLeft === target){
			clearInterval(timer);
		}else{
			obj.style.left = obj.offsetLeft + speed + 'px';
		}
		console.log(obj.offsetLeft,target,speed)
	},30)
}