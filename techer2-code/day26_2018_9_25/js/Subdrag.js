function Subdrag(id){
	//实例继承
	Drag.call(this,id);
}
//原型链继承
for(var i in Drag.prototype){
	Subdrag.prototype[i] = Drag.prototype[i];
}
Subdrag.prototype.fnMove = function(evt){
	evt = evt || window.event;
	var left = evt.pageX - this.disX;
	var top = evt.pageY - this.disY;
	if(left <= 0){
		left = 0;
	}else if(left >= document.documentElement.clientWidth - this.ele.offsetWidth){
		left = document.documentElement.clientWidth - this.ele.offsetWidth;
	}
	if(top <= 0){
		top = 0;
	}else if(top >= document.documentElement.clientHeight - this.ele.offsetHeight){
		top = document.documentElement.clientHeight - this.ele.offsetHeight;
	}
	this.ele.style.left = left + 'px';
	this.ele.style.top = top + 'px';
}