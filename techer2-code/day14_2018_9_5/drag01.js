var arr = [];
function drag(id,deId){
	var ele = document.getElementById(id);
	ele.onmousedown = function(evt){
		evt = evt || window.event;
		var disX = evt.offsetX;
		var disY = evt.offsetY;
		var target = evt.target || evt.srcElement;
		arr.push({left : ele.offsetLeft,top : ele.offsetTop}); //记录初始位置
		if(target.id == deId){
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
				//记录位置
				arr.push({left : ele.offsetLeft,top : ele.offsetTop});
			}
			document.onmouseup = function(){
				document.onmousemove = null;
			}
			document.ondragstart = function(){
				return false;
			}
		}
	}
}