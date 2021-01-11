function drag(id){
	var ele = document.getElementById(id);
	ele.onmousedown = function(evt){
		evt = evt || window.event;
		var disX = evt.offsetX;
		var disY = evt.offsetY;
		document.onmousemove = function(evt){
			evt = evt || window.event;
			var left = evt.pageX - disX;
			var top = evt.pageY - disY;
			//边界
			if(left <= 0){
				left = 0;
			}else if(left >= document.documentElement.clientWidth - ele.offsetWidth){
				left = document.documentElement.clientWidth - ele.offsetWidth;
			}
			if(top <= 0){
				top = 0;
			}else if(top >= document.documentElement.clientHeight - ele.offsetHeight){
				top = document.documentElement.clientHeight - ele.offsetHeight;
			}
			ele.style.left = left + 'px';
			ele.style.top = top + 'px';
		}
		document.onmouseup = function(){
			document.onmousemove = null;
		}
		document.ondragstart = function(){
			return false;
		}
	}
}