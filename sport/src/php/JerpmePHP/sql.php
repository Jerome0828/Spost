<?php
    header('Access-Control-Allow-Origin: *');
    $sportSql = new mysqli("localhost", "root", "", "sport", 3306);
    $sportSql->set_charset('utf8');

    $materialPost = $_POST;
    $materialGet = $_GET;
?>