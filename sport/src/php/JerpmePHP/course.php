<?php
    include('sql.php');

    // 場地介紹頁
    $pid = $materialPost["pid"];

    $sql = " SELECT * FROM place WHERE pid = $pid ";
    $result = $sportSql->query($sql);

    $myJSON=[];
    while ($date = $result->fetch_object()) {
        $date->img1 = base64_encode($date->img1);
        $date->img2 = base64_encode($date->img2);
        $date->img3 = base64_encode($date->img3);
        $myJSON = $date;
    }
    $MaterialToClient = json_encode($myJSON);
    echo $MaterialToClient;


