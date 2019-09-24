<?php
	header('Content-type:text/html;charset=utf-8');
	//接收传过来的sql语句
	$sql_get=$_GET["sql"];
	//外部接口连接数据库
	include("conn.php");
	//执行sql
	$res=mysql_query($sql_get);
	//定义空得数组
	$rows = array();
	//遍历($row接收每一行遍历的数据)
	while($row = mysql_fetch_assoc($res)){
		//每一条数据给数组接收
		$rows[]=$row;
	}
	//数组接收数据转换成对象
	$data=json_encode($rows);
	echo $data;
?>