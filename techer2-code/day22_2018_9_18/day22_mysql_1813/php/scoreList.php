<?php
	header("content-type:text/html;charset=utf-8");
	
	//1.连接数据库服务器
	$db = mysql_connect("localhost",'root','root');
	//2.选择数据库
	mysql_select_db('db1813',$db);
	//3.设置字符集
	mysql_query("set names utf-8");
	//4.编写sql语句
	$sql = "SELECT * FROM `scoretab` WHERE 1";
	//5.执行sql语句
	$set = mysql_query($sql);
	//mysql_fetch_array() : 一次只能转一条记录
	echo "<table width=500 border=1>";
	echo    "<tr><td>学号</td><td>姓名</td><td>h5成绩</td><td>js成绩</td><td>操作</td></tr>";
	    while($arr = mysql_fetch_array($set)){
			echo "
				<tr>
					<td>{$arr['sid']}</td>
					<td>{$arr['sname']}</td>
					<td>{$arr['h5']}</td>
					<td>{$arr['js']}</td>
					<td><a href='delete.php?id={$arr['sid']}'>删除</a>|<a href='update.php?id={$arr['sid']}'>修改</a></td>
				</tr>
			";
		}
	echo "</table>";
?>
<h3><a href='../add.html'>添加学生成绩</a></h3>