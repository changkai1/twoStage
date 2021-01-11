<?php
	header("content-type:text/html;charset=utf-8");
	//接收前端数据
	$uname = $_GET['uname'];
	$upwd = $_GET['upwd'];
	
	//操作数据库
	//1.连接数据库服务器
	//第一个参数: 连接数据库服务器的URL地址
	//第二个参数: 登录数据库的用户名
	//第三个参数: 登录数据库的密码
	$db = mysql_connect("localhost","root","root");
	//2. 选择数据库
	//第一个参数: 选择要操作的数据库
	//第二个参数: 连接数据库的返回值
	mysql_select_db("db1813",$db);
	//3. 设置数据库的字符集
	mysql_query("set names utf-8");
	//4. 编写sql语句
	$sql = "INSERT INTO `users`( `uname`, `upwd`) VALUES ('$uname','$upwd')";
	//5. 执行sql语句
	$row = mysql_query($sql);
	
	if($row){
		echo "<script>alert('注册成功！');location.href='../login.html';</script>";
	}else{
		echo "<script>alert('注册失败！');location.href='../1register.html';</script>";
	}