<?php
	//允许跨域
header('content-type:application:json;charset=utf8');
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods:GET');
header('Access-Control-Allow-Headers:x-requested-with,content-type');

	$linkData=mysql_connect("localhost:3306","root","123456");
	mysql_query("SET NAMES 'utf8'");    //编码字符
	if(!$linkData){
	echo "数据库连接出错";
	}
	$link=mysql_select_db("farm");
	if(!$link){
	   echo "找不到数据库";
	}
?>