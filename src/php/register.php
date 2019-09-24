<?php
    header("content-type:text/html;charset=utf-8");  //设置页面内容是html  编码是utf-8
    error_reporting(E_ALL &~ E_NOTICE);     //屏蔽错误信息
    include("conn.php");  //调用数据库连接文件
    $username=$_POST['username'];
    $password=$_POST['password'];
    $tel=$_POST['tel'];
    $email=$_POST['email'];  //接收前台传递过来的post值
    $selsql="SELECT username FROM user WHERE username = '$username'";
    $selres=mysql_query($selsql);
    if (mysql_affected_rows()>0){//判断用户名是否存在
        echo "<script>alert('用户名已存在');history.back()</script>";
    }else{
        $inssql="INSERT INTO user(username,password,tel,email) VALUES('$username','$password','$tel','$email')";
        $insres=mysql_query($inssql);
        if (mysql_affected_rows()>0){
            echo "<script>alert('注册成功');location.href='../../login.html';</script>";
        }else{
            echo "<script>alert('注册失败');history.back();</script>";
        }
    }
?>