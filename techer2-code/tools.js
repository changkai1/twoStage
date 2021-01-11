//冒泡排序(从小到大)
function bubbleSortFromSmallToBig(arr){
	for(var i = 1;i < arr.length;i ++){
		for(var j = 0;j < arr.length - i;j ++){
			if(arr[j] > arr[j + 1]){
				var t = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = t;
			}
		}
	}
	return arr;
}
function bubbleSortFromBigToSmall(arr){
	for(var i = 1;i < arr.length;i ++){
		for(var j = 0;j < arr.length - i;j ++){
			if(arr[j] < arr[j + 1]){
				var t = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = t;
			}
		}
	}
	return arr;
}
//选择排序(从小到大)
function selectionSortFromSmallToBig(arr){
   for(var i = 0;i < arr.length - 1;i ++){
	   for(var j = i + 1;j < arr.length;j ++){
		   if(arr[i] > arr[j]){
			   var t = arr[i];
			   arr[i] = arr[j];
			   arr[j] = t;
		   }
	   }
   }
   return arr;
}
//选择排序(从大到小)
function selectionSortFromBigToSmall(arr){
   for(var i = 0;i < arr.length - 1;i ++){
	   for(var j = i + 1;j < arr.length;j ++){
		   if(arr[i] < arr[j]){
			   var t = arr[i];
			   arr[i] = arr[j];
			   arr[j] = t;
		   }
	   }
   }
   return arr;
}
//任意范围的随机整数
function randomInt(min,max){
	 if(min > max){
		 var t = min;
		 min = max;
		 max = t;
	 }
	 return Math.floor(Math.random() * (max - min + 1) + min);
 }
 //去除空白文本节点
 function removeSpace(node){
 	//获取所有子节点
 	var childs = node.childNodes;
 	//遍历所有的子节点
 	for(var i = 0;i < childs.length;i ++){
 		//找出文本节点且是空白文本
 		if(childs[i].nodeType === 3 && /^\s+$/.test(childs[i].nodeValue)){
 			node.removeChild(childs[i]); //删除子节点
 		}
 	}
 	return node;
 }
 //获取非行内样式
 function getStyle(obj,attr){
 	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj,1)[attr];
 }
 //拖拽
 function drag(id){
 	var obj = document.getElementById(id);
 	obj.onmousedown = function(evt){
 		var e = evt || window.event;
 		var disX = e.offsetX;
 		var disY = e.offsetY;
 		document.onmousemove = function(evt){
 			evt = evt || window.event;
 			obj.style.left = evt.pageX - disX + 'px';
 			obj.style.top = evt.pageY - disY + 'px';
 		}
 		document.onmouseup = function(){
 			document.onmousemove = null;
 		}
 		//阻止拖拽的默认行为
 		document.ondragstart = function(){
 			return false;
 		}
 	}
 }
 //数组去重
 function noRepeatArray(arr){
 	return [... new Set(arr)];
 }