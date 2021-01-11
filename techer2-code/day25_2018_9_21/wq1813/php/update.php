<?php
	include "public.php";
	$id = $_REQUEST['id'];
	
	$sql = "SELECT * FROM `wqtab` WHERE wid=$id";
	$set = mysql_query($sql);
	$arr = mysql_fetch_array($set);
	echo json_encode($arr);