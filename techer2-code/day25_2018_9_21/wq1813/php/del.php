<?php
	include "public.php";
	$id = $_REQUEST['id'];
	
	$sql = "DELETE FROM `wqtab` WHERE wid=$id";
	mysql_query($sql);