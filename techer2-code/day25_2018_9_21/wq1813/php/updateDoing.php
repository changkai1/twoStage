<?php
	include "public.php";
	$wid = $_POST['wid'];
	$content = $_POST['content'];
	$where = $_POST['where'];
	$idea = $_POST['idea'];
	
	$sql = "UPDATE `wqtab` SET `content`='$content',`where`='$where',`idea`='$idea' WHERE wid=$wid";
	$row = mysql_query($sql);
	if($row){
		echo "<script>window.location = '../index.html';</script>";
	}
	