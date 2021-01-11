<?php
	header("content-type:text/html;charset=utf-8");
	//接收客户端提交的内容
	$con = $_POST["content"];
	
	//strip_tags()  去掉内容中的标签字符
	echo strip_tags($con);
?>