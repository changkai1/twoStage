class Drag{
	constructor(id){
		//实例属性
		this.ele = document.getElementById(id);
		this.ele.onmousedown = (evt)=>{
			this.fnDown(evt);
		}
		//实例方法（每new一个对象，这个方法都会单独开辟一块空间）
		this.hehe = function(){
			
		}
	}
	//方法（无论new多少个对象，这里的方法只会开辟一块空间）
	fnDown(evt){
		let e = evt || window.event;
		this.disX = e.offsetX;
		this.disY = e.offsetY;
		document.onmousemove = (evt)=>{
			this.fnMove(evt);
		}
		document.onmouseup = this.fnUp;
		document.ondragstart = function(){
			return false;
		}
	}
	fnMove(evt){
		let e = evt || window.event;
		this.ele.style.left = e.pageX - this.disX + 'px';
		this.ele.style.top = e.pageY - this.disY + 'px';
	}
	fnUp(){
		document.onmousemove = null;
	}
}