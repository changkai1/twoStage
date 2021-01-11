var timer = null;
function sport_01(obj,target){
	clearInterval(timer);
	timer = setInterval(()=>{
		var speed = target > obj.offsetLeft ? 10 : -10;
		if(obj.offsetLeft == target){
			clearInterval(timer);
		}else{
			obj.style.left = obj.offsetLeft + speed + 'px';
		}
		
	},30)
}