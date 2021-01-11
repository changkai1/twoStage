Day一
一.JS概述
	1. 什么是JS?
	2. 哪一年?哪个公司?谁?第一个名字?
	3. W3C第一个标准: ECMA-262,
	4. JS包含哪几部分?  
二.如何引入JS?
三.JS中有哪些输出方式?区别?
四.输出中的换行?
五.数据类型有哪些? Number/String/Boolean/Null/Undefined/Object/Symbol
六.标识符的命名规则?
七.什么是变量?常量?
八.如何声明变量?
九.如何给变量赋值?
十.运算符
	1. ++  -- 
	2. 算术运算符
	3. 关系运算符
	4. 逻辑运算符(0,false,'',null,undefined,NaN)
	5. 三元运算符 ?:
	6. 赋值运算符 =  +=  -=  *= /= %=
	7.特殊运算符   new   typeof   instanceof
十一.isNaN()
     eval()
	 parseInt()
	 parseFloat()
	 Number()
Day二
一.三大结构?概念?
二.实现选择结构的语句有哪些?
Day三
一.循环思想
二.实现循环的语句?
表达式1;
for(;表达式2;){
	语句组;
	表达式3;
}
三.什么无限循环?
四.break/continue
Day四
一.什么函数?
二.如何定义函数?
三.如何封装函数?
	无参无返回值函数
	无参有返回值函数
	有参无返回值函数
	有参有返回值函数
四.如何调用函数?
	1.一般调用
	2.递归调用
	3.事件调用
	4.计时器调用
五.参数?
六.返回值?
七.作用域及作用域链
Day五
一.什么全局变量?
二.什么局部变量?
三.递归调用?
四.事件?事件驱动?事件处理函数?
五. onload
    onclick
	ondblclick
	onmouseup
	onmousedown
	onmouseenter
	onmouseleave
	onmouseover
	onmouseout
	onmousemove
	onfocus
	onblur
	onchange
	onsubmit
	onkeyup
	onkeydown
	onkeypress
	oncontextmenu
	ondragstart
	onscroll
	onresize

Day六
一.什么数组?
二.数组的好处?
三.什么时候使用数组?
四.如何定义数组?
五.如何给数组赋值?
六.数组的属性
七.数组的方法(增/删/改/截/拼/复/排/转)
八.值传递与引用传递
九.for in 

Day七
一.严格模式
二.数组的扩展方式 ?
	1. indexOf
	2. lastIndexOf
	3. forEach(function(value,index,array){})
	4. map(function(value,index,array){return ...})
	5. reduce(function(up,down,index,array){return ...})
	6. filter(function(value,index,array){return ...})
三.如何定义字符串?
四.属性
五.方式 (查/替/截/转)
六.静态方式
七.字符集
Day八
Math.PI
Math.abs()
Math.round()
Math.ceil()
Math.floor()
Math.max.apply(null,数组)
Math.min.apply(null,数组)
Math.floor(Math.random() * (max - min + 1) + min)
Math.pow()
Math.sqrt()
二.如何创建日期对象?
三.对象的方法?
Day九
一.什么BOM?
二.顶级对象?
三.子对象?
四.如何跳转页面?
五.如何刷新页面?
六.如何获取浏览器及操作系统的信息?
七.计时器
八.什么DOM?
九.如何获取页面元素?
十.如何创建元素节点/文本节点?
十一.如何修改节点?
十二.如何删除 节点?
十三.如何复制节点?
十四.如何插入节点?
十五.如何追加节点?
十六.常见节点有?
十七. 节点属性?
Day十
一.如何设置或访问节点中的属性及自定义属性?
二.outerHTML/innerHTML/innerText
三.如何获取所有子节点?
四.如何删除空白文本节点?
五.高级选取
六.获取非行内样式(兼容)
七.offsetWidth/offsetHeight/offsetLeft/offsetTop
Day十一
一.什么是事件对象?
二.如何获取事件对象?
三.如何鼠标的编码值?
四.如何鼠标的坐标值?
五.获取键盘的编码值?
六.什么是事件冒泡?
七.如何阻止事件冒泡?
Day十二
一.默认行为
二.事件监听
三.事件委托
四.拖拽思想
五.JSON
Day十三
一.什么是cookie?
二.如何创建cookie? "key=value[;expires=日期对象;path=/]"
三.如何封装?
四.购物车
Day十四
一.什么是正则表达式?
二.如何创建正则表达式?
三.正则的方法?
	1.test
	2.exec
四.元字符 三三二三个一  {}[]()   *+?   ^ $   .  |  \
五.标志位: i    g,
六.字符串的方法
	match()
	search()
Day十五
一.严格模式
二.bind()/apply()/call()
三.JSON.parse() / JSON.stringify()
四. let /const
	1.
	2.
	3.
	4.
五.解构赋值
	1. [] =[]
	2. {} = {}
六.字符串扩展方法
	includes()
	startsWith()
	endsWith()
	repeat()
七.箭头函数
八.Symbol
九.Set
十.Map
十一.生成器函数
	function * 函数名(){
		yield 语句;
	}
	next()
十二.class