一.什么是事件对象?
	类似于飞机上的黑匣子,当绑定对象的事件被触发时,所发生一切信息保存在一个地方,这个地方就叫做事件对象.
二.如何获取事件对象?
	标注浏览器 : 给事件触发函数传递的第一个参数,
	IE9以下:  window.event
三.如何获取鼠标按键的编码值?
	event.button
四.如何获取鼠标的坐标值?
	相对坐标值: event.offsetX/event.offsetY,
	绝对坐标值: event.pageX/event.pageY,   ====   可视区坐标 + 滚动条距顶端的距离
	可视区坐标值 : event.clientX/event.clientY,
	屏幕坐标值: event.screenX/event.screenY,
	
	思考: 实现鼠标跟随效果
五.onkeydown/onkeyup 是如何获取键盘按键的编码值   (event.keyCode/event.charCode/event.which)
   onkeypress 是如何获取键盘按键的编码值
	 
	 思考: 使用wasd控制div移动,并设置边界
六.组合键:event.ctrlKey/event.shiftKey/event.altKey,
七.什么是事件冒泡?
	事件流: 触发事件时,事件传递的过程叫事件流,
	事件流三个阶段: 事件捕获/事件目标/事件冒泡,
	事件捕获: 事件由祖先元素依次向子孙元素(事件目标)传递事件的过程,叫事件捕获,
	事件冒泡: 事件由子孙元素(事件目标)依次向祖先元素传递事件的过程,叫事件冒泡
八.如何阻止事件冒泡?
	标准浏览器: event.stopPropagation(),
	IE : event.cancelBubble = true;