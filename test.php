<?php
	//允许跨域
header('content-type:application:json;charset=utf8');
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers:x-requested-with,content-type');

  mysql_connect('localhost:3306','root','123456');
  //编码规则
  mysql_query('set names utf8');
  //连接数据库的名称
  mysql_select_db('farm');
  //写sql语句
  $sql="select * from environ";
 //执行sql
  $res=mysql_query($sql);
  $rows = array();
  //遍历($row接收每一行遍历的数据)
  while($row = mysql_fetch_assoc($res)){
    //每一条数据给数组接收
    $rows[]=$row;
  }
  //数组接收数据转换成对象
  $data=json_encode( $rows);
echo $data;

?>