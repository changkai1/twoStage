<?php
	header("content-type:text/html;charset=utf-8"); //设置PHP的字符集
	echo "我不是乱码！";
	echo "<br>";
	echo true;
	echo false;
	//var_dump() : 输出数据类型与值
	var_dump(true);
	var_dump(false);
	var_dump(3);
	var_dump(0.3);
	var_dump('a');
	
	
	$num = 3;
	var_dump($num);
	var_dump((bool)$num);
	var_dump((string)$num);
	echo "<br>";
	$num1 = NULL;
	var_dump((bool)"");
	var_dump((bool)0);
	var_dump((bool)'0');
	var_dump((bool)NULL);
	var_dump((bool)[]);
	var_dump((bool)$num1);
	
	