<?php
    header("content-type:text/html;charset=utf-8");  //设置页面内容是html  编码是utf-8
    error_reporting(E_ALL &~ E_NOTICE);     //屏蔽错误信息
    include ('conn.php');     //调用数据库连接文件
    $username=$_POST['username'];
    $password=$_POST['password'];     //接收前台post值
    $selsql="SELECT username,password FROM user WHERE username = '$username'";
    $res=mysql_query($selsql);
    $arr=mysql_fetch_array($res);
    if ($arr['username']==$username){//查询是否有此用户
        if ($arr['password']==$password){  //判断密码是否正确         
            echo "<script>sessionStorage.setItem('username',".$username.");</script>";
            echo "<script>alert('登录成功');location.href='../../travel.html'</script>";
        }else{
            echo "<script>alert('密码错误');history.back();</script>";
        }
    }else{
        echo "<script>alert('用户不存在');history.back();</script>";
    }
?>