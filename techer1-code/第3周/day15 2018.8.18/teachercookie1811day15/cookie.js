//设置cookie
function setCookie( key , value ,day ){
	if( day ){
		var now = new Date();
		now.setDate( now.getDate() + day );
		document.cookie = key +"=" + value + ";expires="+now;
	}else{
		document.cookie = key +"=" + value;
	}
}

//获取cookie  "username"  "password"
function getCookie(key){//tel
	var str = document.cookie;
	if( str ){ //如果cookie存在  根据key取对应的值
		str = str.replace( /\s/g ,"");//去掉cookie中的空格
		var arr = str.split(";");//将字符串拆成数组
		for( var i = 0 ; i < arr.length ; i++ ){
			var item = arr[i].split("=");
			if( item[0] == key ){
				return item[1];
			}
		}
		//循环结束后 如果没有找到对应的key   返回""
		return "";
	}
	//cookie 不存在  返回""
	return "";
}

//删除cookie   将key的值设置为""
function removeCookie( key ){
	setCookie( key , "" );
}
