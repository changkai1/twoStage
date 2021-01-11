<?php
	header('content-type:text/html;charset=utf-8');
	//接收前端数据
	$id = $_GET['id'];
	//echo $id;
	//1.连接
	$db = mysql_connect('localhost','root','root');
	//2.选择
	mysql_select_db('db1813',$db);
	//3.字符集
	mysql_query('set names utf-8');
	//4.编写
	$sql = "DELETE FROM `scoretab` WHERE sid=$id";
	//5.执行
	$row = mysql_query($sql);
	if($row){
		echo "<script>alert('删除成功！');location.href='scoreList.php';</script>";
	}else{
		echo "<script>alert('删除失败！');location.href='scoreList.php';</script>";
	}