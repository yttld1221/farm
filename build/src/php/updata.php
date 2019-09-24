<?php
	header("content-type:text/html;charset=utf-8"); 
	//连接数据(ip 端口 用户名 密码 )
	mysql_connect("localhost","root","12345");
	//编码规则
	mysql_query('set names utf8');
	//连接数据库的名称
	mysql_select_db('farm');
    $lookNum=$_POST["lookNum"];
    $id=$_POST["id"];
	//写sql语句
	$sql="UPDATE travel SET num='$lookNum' WHERE id='$id'";
	// //执行sql
	$res=mysql_query($sql);
    if(mysql_affected_rows()>0){
        echo $lookNum;
    }else{
        echo "no";
    }
?>