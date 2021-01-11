<?php
	header("content-type:text/html;charset=utf-8");
	//接收前端数据
	$sname = $_POST['sname'];
	$h5 = $_POST['h5'];
	$js = $_POST['js'];
	
	//1.连接
	$db = mysql_connect('localhost','root','root');
	//2.选择
	mysql_select_db("db1813",$db);
	//3.字符集
	mysql_query('set names utf-8');
	//4.编写
	$sql = "INSERT INTO `scoretab`( `sname`, `h5`, `js`) VALUES ('$sname',$h5,$js)";
	//5.执行
	$row = mysql_query($sql);
	
	if($row){
		echo "<script>alert('添加成功！');window.location='scoreList.php';</script>";
	}else{
		echo "<script>alert('添加失败！');window.location='../add.html';</script>";
	}