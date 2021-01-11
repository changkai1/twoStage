showList();

//工具箱
//1.获取
function $get(selecter){
	return document.querySelectorAll(selecter);
}
//2.创建元素
function $create(tagName){
	return document.createElement(tagName);
}
//3.添加页面
function $appendBody(ele){
	document.body.appendChild(ele);
}
//1.显示错题系统
function showList(){
	//1.获取tbody
	let oTbody = $get('#tbody')[0];
	//2.通过ajax请求数据
	ajax.get("php/show.php",function(data){
		console.log(data);
		//解析字符串
		var json = JSON.parse(data);
		console.log(json);
		//遍历数组
		for(let i = 0,len = json.length;i < len;i ++){
			let tr = $create('tr');
			tr.className = 'text-center middle';
			//设置ES6的模板字符串  ： `....${变量}....`
			let str = `
				<td>${json[i].wid}</td>
				<td>${json[i].content}</td>
				<td>${json[i].where}</td>
				<td>${json[i].idea}</td>
				<td>
					<button class="btn del" data-wq-id = "${json[i].wid}">删除</button>
				</td>
				<td>
					<button class="btn update" data-wq-id = "${json[i].wid}">
						<span class="glyphicon glyphicon-cog">修改</span>
					</button>
				</td>
			`;
			tr.innerHTML = str;
			oTbody.appendChild(tr);
		}
		addWQ();
		removeWQ();
		updateWQ();
	})
}
//2.添加错功能
function addWQ(){
	//获取模态框中的内容所在的文本框
	let oContent = $get('#wq-content')[0];
	//获取模态框中的在哪里
	let oWhere = $get('#wq-where')[0];
	//获取模态框中的想法
	let oIdea = $get('#wq-idea')[0];
	let oBtn = $get('#wq-save-question')[0];
	oBtn.onclick = function(){
		//“key=value&key=value"
		var msg = `content=${oContent.value}&where=${oWhere.value}&idea=${oIdea.value}`; //参数
		ajax.post('php/addwq.php',msg,function(){
			location.reload(true);
		})
	}
}
//3.删除功能
function removeWQ(){
	//获取所有的删除按钮
	var oDel = $get('#tbody .del');
	//遍历数组添加事件
	for(let i = 0,len = oDel.length;i < len;i ++){
		oDel[i].onclick = function(){
			ajax.get(`php/del.php?id=${this.getAttribute('data-wq-id')}`,function(){});
			this.parentNode.parentNode.remove(); //删除 tr
		}
	}
}
//4.修改功能
function updateWQ(){
	//获取所有的修改按钮
	var oUpdate = $get('#tbody .update');
	for(let i = 0,len = oUpdate.length;i < len;i ++){
		oUpdate[i].onclick = function(){
			ajax.get(`php/update.php?id=${this.getAttribute('data-wq-id')}`,function(data){
				console.log(data);
				data = JSON.parse(data);
				var oMark = $create('div');
				var oFloat = $create('div');
				oMark.style.cssText = "width : 100%;height: 100%;position:absolute;left:0;top:0;background:black;opacity:0.7;z-index:10000;";
				oFloat.style.cssText = "width:300px;height:300px;position:absolute;left:600px;top:300px;background:0xffffff;z-index:10001;border:1px solid yellow;color:yellow;";
				var str = `
					<form action="php/updateDoing.php" method="post">
						<p><input type="hidden" name="wid" value="${data.wid}">易错内容:<input type="text" name="content" value="${data.content}"></p>
						<p>错在哪里:<input type="text" name="where" value="${data.where}"></p>
						<p>您的想法:<input type="text" name="idea" value="${data.idea}"></p>
						<p><input type="submit" value="修改"></p>
					</form>
				`;
				oFloat.innerHTML = str;
				document.body.appendChild(oMark);
				document.body.appendChild(oFloat);
			});
		}
	}
}