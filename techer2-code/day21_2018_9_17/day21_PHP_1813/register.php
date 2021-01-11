<?php
	//设置字符集
	header("content-type:text/html;charset=utf-8");
	//接收前端传递的数据
// 	$uname = $_GET['uname'];
// 	$upwd = $_GET['upwd'];
// 	$uname = $_POST['uname'];
// 	$upwd = $_POST['upwd'];
	$uname = $_REQUEST['uname'];
	$upwd = $_REQUEST['upwd'];
	
	echo $uname,$upwd;