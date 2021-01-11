(一)	浏览器的默认行为及阻止默认行为
	1. 右键菜单   oncontextmenu      return false
	2. 超链接  //e.preventDefault(); 标准浏览器阻止超链接的默认行为
				//e.returnValue = false; IE阻止超链接的默认行为
				e.preventDefault ? e.preventDefault() : e.returnValue = false;
	3. 拖拽  ondragstart   return false
(二)	事件监听器的添加及移除
		对象.addEventListener(事件,函数,是否捕获)
		对象.removeEventListener(事件,函数,是否捕获)
		对象.attachEvent(事件驱动,函数)
		对象.detachEvent(事件驱动,函数)
(三)	事件捕获
(四)	事件委托
(五)	拖拽思想

思考: 设置拖拽边界,
	2. 只能在按下标题部分实现拖拽,点击标题右边的按钮时,回到原点.
(六)	JSON : 是网络数据传输的一种公共格式.,
	[]
	{"key" : "value"},
	
	
	
	原生 对象
	{ key : 'value'},
	{ 'key' : "value"},
	{ "key" : 'value'}
