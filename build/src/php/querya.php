<?php
	header('Content-type:text/html;charset=utf-8');
	//外部接口连接数据库
    include("conn.php");
    //接收传过来的sql语句
    $sql=$_GET["sql"];
    echo $sql;
	//执行sql
    $res=mysql_query($sql);
?> 