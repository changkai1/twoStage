<?php
	header("content-type:text/html;charset=utf-8");
	$num = 23;
	echo "今年$num++ 岁<br>";  //变量在""中可以解析变量的值
	echo '今年$num岁<br>'; //变量在''中以字符串形式显示，不会解析值            
	echo '今年'.$num.'岁<br>';
	//unset($num);
	//echo $num."<br>";
	echo gettype($num).'<br>';
	if(is_bool($num)){
		echo "bool";
	}else if(is_int($num)){
		echo "int";
	}else if(is_string($num)){
		echo "string";
	}
	echo '<br>';
	$n = 3;
	switch($n):
		case 1 : echo '周一';break;
		case 2 : echo '周二';break;
		case 3 : echo '周三';break;
		case 4 : echo '周四';break;
		case 5 : echo '周五';break;
		case 6 : echo '周六';break;
		case 7 : echo '周日';break;
		default : echo "错误！";
	endswitch;
	echo '<br>';
	$sum = 0;
	for($i = 1;$i < 6;$i ++):
		$sum += $i;
	endfor;
	echo $sum;