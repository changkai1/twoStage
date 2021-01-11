<?php
	header("content-type:text/html;charset=utf-8");
	/*
	$arr = [1,2,3,4,5];
	$list = array(true,2,3,1,5,'a'=>10,'b'=>11);
	$list[] = 20;
	echo $list[0],$list['a']."<br>";
	//输出数组
	
	var_dump($list); //数据类型+值
	echo "<br>";
	print_r($list); //值
	echo "<br>";
	*/
   $arr1 = [];
   $arr1['name'] = '张三';
   $arr1['age'] = 18;
   $arr1[] = 110;
   /*
   for($i = 0;$i < count($arr1);$i ++){
	   echo $arr1[$i]."<br>";
   }
   
	forEach($arr1 as $key){
		echo $key.'<br>';
	}*/
	echo json_encode($arr1);
	
	
	
	$num = 3;
	function fn($num){
		echo $num;
	}
	fn($num);