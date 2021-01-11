//定义一个函数  功能实现通过id查找页面元素  返回值就是一个页面元素
function $id(id){
	return document.getElementById(id);
}



//获取任意区间整数值
function rand ( min , max ){
	return Math.round( Math.random()* (max-min) + min );
}

//随机获取六位十六进制颜色值
	function getColor(){
		//定义一个字符串
		var str = "0123456789abcdef"
		//颜色拼接用#
		var color = "#";
		for( var i = 1; i <= 6; i++ ){
			color += str.charAt( rand(0,15) );			
		}
		return color;
	}
	
//自定义日期时间格式
	function dateToString(now){
		var year = now.getFullYear();
		var month= toTwo( now.getMonth()+1 );
		var d = toTwo( now.getDate() );
		var h = toTwo( now.getHours() );
		var m = toTwo( now.getMinutes() );
		var s = toTwo( now.getSeconds() );
		return year+"-"+month+"-"+d+"-"+" "+h+":"+m+":"+s;
	}
	function toTwo(str){
		return str<10 ? "0"+str : str;
	}

//将字符串转换成日期时间格式
	function stringToDate( str ){
		return new Date (str);
	}
	
//封装时间差函数
	function diff( start , end ){
		return ( end.getTime()-now.getTime() )/1000;
	}














