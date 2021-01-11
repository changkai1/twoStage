class Subdrag extends Drag{
	constructor(id) {
	    super(id);
	}
	fnMove(evt){
		let e = evt || window.event;
		let left = e.pageX - this.disX;
		let top = e.pageY - this.disY;
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
}