<?php
// 標頭增加CORS 跨域資源共用參數
header("Access-Control-Allow-Origin: *","Access-Control-Allow-Headers: *");
// 連接資料庫(本地,帳號,密碼,資料庫名稱,port)
$mysqli = new mysqli('localHost','root','','spost',3306);
$mysqli->set_charset('utf8');

// 用來判斷是否連接資料庫成功

    // if ($mysqli){
    //     echo "ok";
    // }else{
    //     echo "NO";
    // }
    
// echo  $_SERVER ["SERVER_NAME"];  //   localhost
// echo  $_SERVER ["SERVER_PORT"];  //   80
// echo  $_SERVER ["REQUEST_URI"];  //   /bigtest/mysqli.php
?>