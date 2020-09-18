<?php
header('content-type=text/html;charset="utf-8"');
$username=$_GET["username"];
$password=$_GET["password"];
$responseData=array("code"=>0,"message"=>"");
//   echo json_encode($_GET);
if(!$username){
    $responseData["code"]=1;
    $responseData["message"]="用户名不能为空啦";
    echo json_encode($responseData);
    exit;
}
if(!$password){
    $responseData["code"]=2;
    $responseData["message"]="密码不能为空啦";
    echo json_encode($responseData);
    exit;
}

//连接数据库
$link=mysql_connect("localhost","root","123456");
if(!$link){
    $responseData["code"]=3;
    $responseData["message"]="数据库连接失败";
    echo json_encode($responseData);
    exit;
}
mysql_set_charset("utf8");
mysql_select_db("user");
$sql1="select * from info where username='{$username}'";
$res1=mysql_query($sql1);
if(mysql_fetch_assoc($res1)){
    $responseData["code"]=4;
    $responseData["message"]="用户名已存在，无法注册";
    echo json_encode($responseData);
    exit;
}
$sql2="insert into info(username,password)  values( '{$username}' , '{$password}' )";
 $res2=mysql_query($sql2);
 if(!$res2){
    $responseData["code"]=5;
    $responseData["message"]="系统忙，暂时无法注册";
    echo json_encode($responseData);
    exit;
 }
 $responseData["message"]="恭喜，注册成功";
 echo json_encode($responseData);
 mysql_close($link);

?>