var ajax = {};
ajax.get = function(url,fn){
	var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
	xhr.open('GET',url);
	xhr.send();
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4 && xhr.status === 200){
			if(typeof fn === 'function'){
				fn(xhr.responseText);
			}
		}
	}
}
ajax.post = function(url,data,fn){
	var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
	xhr.open('POST',url);
	//设置请求头
	xhr.setRequestHeader("content-type","application/x-www-form-urlencoded;charset=utf-8");
	xhr.send(data);
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4 && xhr.status === 200){
			if(typeof fn === 'function'){
				fn(xhr.responseText);
			}
		}
	}
}