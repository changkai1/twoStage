<?php
	//定义头文件  防止乱码
	header("content-type:text/html;charset=utf-8");
	//输出
	echo "hello php","hello world","大家好";
	//变量定义  以$符号开头
	$age = 19;
	$sname="jack";
	echo "<br>";
	echo "我的名字叫$sname , 我今年  $age 岁了";//php中的双引号可以自动识别变量   
	
	//三大结构 ：顺序 选择  循环
	/*
	 选择结构 ： 
	 	if()
	 	switch()
	 */
	echo "<br>";
	if( $age>=20 ){
		echo "你可以去当兵啦";
	}else{
		echo "你可以来千锋啦";
	}
	$day = 2;
	switch( $day ){
		case 1 : echo "星期一";break;
		case 2 : echo "星期二";break;
		default : echo  "输入有误";
	}
	echo "<br>";
		
	/*
	 循环结构 ： 
	 for(){
	 	
	 }
	 while()
	 
	 do...while()
	 */
	$i = 1;
	$sum = 0;
	do{
		$sum += $i;
		$i++;
	}while( $i <= 100 );
	echo $sum;
	
	echo "<br>";
	$sum = 0;
	for( $i = 1 ; $i <= 30 ; $i++ ){
		if( $i%2 ){
			$sum += $i;
		}
	}
	echo $sum;
	
	echo "<br>";
	//了解 函数定义
	function fn($a,$b){
		return $a>$b?$a:$b;
	}
	echo fn(6,7);
	
	echo "<br>";
	//定义一个函数求任意区间的素数个数
	function fnPrimerCount($m,$n){
		$t = 0;
		if( $m > $n ){
			$t = $m;
			$m = $n;
			$n = $t;
		}
		$count = 0;
		for( $i = $m ; $i <= $n ; $i++ ){
			$flag = true;
			for( $j = 2 ; $j < $i ; $j++ ){
				if( $i%$j == 0 ){
					$flag = false;
					break;
				}
			}
			if( $flag ){
				$count++;
			}
		}
		return $count;
	}
	echo fnPrimerCount(3,7);
	
	echo "<br>";
	//php中的数组
	//索引数组   关联数组
	//索引数组 
	$arr = array(3,4,5,6,7);
	print_r( $arr );
	for( $i = 0 ; $i < count($arr) ; $i++ ){
		echo $arr[$i]." ";
	}
	
	echo "<br>";
	//关联数组  
	$arr2 = array( "sname"=>"jack" , "age"=>19 ,"tel" => "17899998888");
	//echo $arr2["sname"];
	//打印整个数组
	//print_r( $arr2 );
	
	//二维数组
	$arr3 = array( 
				array( "sname"=>"jack" , "age"=>19 ,"tel" => "17899998888"),
				array( "sname"=>"xiaobai" , "age"=>13 ,"tel" => "13222222333" ),
				array( "sname"=>"xiaohei" , "age"=>15 ,"tel" => "18999998888" )
			);
	print_r( $arr3 );  
?>