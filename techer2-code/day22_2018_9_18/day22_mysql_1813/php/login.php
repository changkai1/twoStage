<?php
	header("content-type:text/html;charset=utf-8");
	//接收前端数据
	$uname = $_POST['uname'];
	$upwd = $_POST['upwd'];
	
	//1.连接数据库服务器
	$db = mysql_connect("localhost",'root','root');
	//2.选择数据库
	mysql_select_db('db1813',$db);
	//3.设置字符集
	mysql_query("set names utf-8");
	//4.编写sql语句
	$sql = "SELECT * FROM `users` WHERE uname='$uname'";
	//5.执行sql语句
	$set = mysql_query($sql); //查询返回一个集合
	//将集合转为PHP数组
	$arr = mysql_fetch_array($set);
	//print_r($arr);
	//如果用户名存在，则判断密码是否一致，如果不一致，密码错误。如果用户名不存在，。。。
	if($uname === $arr['uname']){
		if($upwd == $arr['upwd']){
			echo "<script>alert('登录成功！');location.href='scoreList.php';</script>";
		}else{
			echo "<script>alert('密码错误！');location.href='../login.html';</script>";
		}
	}else{
		echo "<script>alert('用户名不存在！');location.href='../login.html';</script>";
	}