/*{
		type : get/post
		url : url
		ansyc :   true/false
		data : {}
		success : function()
		error : function()
	}
	
	?"key=value&key=value&key=value"
*/
function ajax(obj){
	//初始化参数
	obj = obj || {};
	obj.type = obj.type.toUpperCase() || "GET";
	obj.url = obj.url || "";
	obj.ansyc = obj.ansyc || true;
	obj.data = obj.data || null;
	obj.success = obj.success || function(){}
	obj.error = obj.error || function(){}
	
	//?"key=value&key=value"
	var arr = [];
	for(var key in obj.data){
		arr.push(key + '=' + obj.data[key]);
	}
	var str = arr.join('&');
	
	//创建xhr对象
	var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
	//open
	
	if(obj.type.toUpperCase() === 'GET'){
		xhr.open(obj.type,obj.url + "?" + str,obj.ansyc);
		xhr.send();
	}else if(obj.type.toUpperCase() === 'POST'){
		xhr.open(obj.type,obj.url,obj.ansyc);
		xhr.setRequestHeader("content-type","application/x-www-form-urlencoded;charset=utf-8");
		xhr.send(str);
	}
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4 && xhr.status === 200){
			if(typeof obj.success === 'function'){
				obj.success(xhr.responseText);
			}
		}else{
			if(typeof obj.error === 'function'){
				obj.error();
			}
		}
	}
}