<?php
	include "public.php";
	
	//接收前端数据
	$content = $_POST['content'];
	$where = $_POST['where'];
	$idea = $_POST['idea'];
	
	//3.编写
	$sql = "INSERT INTO `wqtab`(`content`, `where`, `idea`) VALUES ('$content','$where','$idea')";
	//4.执行
	mysql_query($sql);