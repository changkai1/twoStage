<?php
	//定义头文件  防止乱码
	header("content-type:text/html;charset=utf-8");
	
	//定义关联数组
	$arr = array( "sname"=>"jack","age"=>17,"tel"=>"18988887777" );
	
	//定义多维的关联数组
	$arr2 = array( 
				array( "sname"=>"jack" , "age"=>19 ,"tel" => "17899998888"),
				array( "sname"=>"xiaobai" , "age"=>13 ,"tel" => "13222222333" ),
				array( "sname"=>"xiaohei" , "age"=>15 ,"tel" => "18999998888" )
	 		);
	//将一个关联数组 转成json对象   返回json对象
	echo json_encode( $arr2 )."<br>";
	echo "hello";
?>