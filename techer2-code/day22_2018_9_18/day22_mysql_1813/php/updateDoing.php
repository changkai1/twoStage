<?php
	header("content-type:text/html;charset=utf-8");
	$sid = $_POST['sid'];
	$sname = $_POST['sname'];
	$h5 = $_POST['h5'];
	$js = $_POST['js'];
	
	$db = mysql_connect('localhost','root','root');
	mysql_select_db('db1813',$db);
	mysql_query('set names utf-8');
	$sql = "UPDATE `scoretab` SET `sname`='$sname',`h5`=$h5,`js`=$js WHERE sid=$sid";
	$row = mysql_query($sql);
	if($row){
		echo "<script>alert('修改成功！');location.href='scoreList.php';</script>";
	}else{
		echo "<script>alert('修改失败！');location.href='update.php';</script>";
	}