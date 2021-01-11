<?php
	if($_REQUEST['name'] == '张三' && $_REQUEST['pwd'] == 123){
		echo "你找的张三的资料";
	}else{
		echo "no,没有";
	}