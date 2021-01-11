<?php
	header("content-type:text/html;charset=utf-8");
	//服务器如何接收客户端发送的数据
	// 根据客户端的method属性确定接收数据的方式
	//  method="get"   $_GET["name值"]
	//  method="post"  $_POST["name值"]
	//   $_REQUEST[]  既可以接收get传值 也可以接收post传值
	$username = $_REQUEST["uname"];
	$userpwd  = $_REQUEST["upwd"];
	
	echo "用户名是： $username , 密码是 ：  $userpwd";
?>