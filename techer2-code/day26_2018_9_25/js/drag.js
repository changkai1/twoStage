function Drag(id){
	var that = this;
	//实例属性
	this.ele = document.getElementById(id);
	this.ele.onmousedown = function(evt){
		that.fnDown(evt);
	}
}
//原型方法
Drag.prototype.fnDown = function(evt){
	var that = this;
	evt = evt || window.event;
	this.disX = evt.offsetX;
	this.disY = evt.offsetY;
	document.onmousemove = function(evt){
		that.fnMove(evt);
	}
	document.onmouseup = this.fnUp;
	document.ondragstart = function(){
		return false;
	}
}
Drag.prototype.fnMove = function(evt){
	evt = evt || window.event;
	this.ele.style.left = evt.pageX - this.disX + 'px';
	this.ele.style.top = evt.pageY - this.disY + 'px';
}
Drag.prototype.fnUp = function(){
	document.onmousemove = null;
}