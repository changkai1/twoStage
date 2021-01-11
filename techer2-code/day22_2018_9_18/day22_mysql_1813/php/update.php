<?php
	header("content-type:text/html;charset=utf-8");
	$id = $_GET['id'];
	
	$db = mysql_connect('localhost','root','root');
	mysql_select_db('db1813',$db);
	mysql_query('set names utf-8');
	$sql = "SELECT * FROM `scoretab` WHERE sid=$id";
	$set = mysql_query($sql);
	$arr = mysql_fetch_array($set);
?>
<form action="updateDoing.php" method="post">
	<p><input type="hidden" name="sid" value="<?php echo $arr['sid'];?>"/> 姓名: <input type="text" name ="sname" value="<?php echo $arr['sname'];?>"/></p>
	<p>h5成绩： <input type='text' name="h5" value="<?php echo $arr['h5'];?>" /></p>
	<p>js成绩： <input type='text' name="js" value="<?php echo $arr['js'];?>" /></p>
	<p> <input type="submit" value="修改成绩"></p>
</form>