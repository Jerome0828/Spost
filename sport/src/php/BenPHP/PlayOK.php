<?php

require('ECPay.Payment.Integration.php');
header("Access-Control-Allow-Origin:*");
    try {
        // 收到綠界科技的付款結果訊息，並判斷檢查碼是否相符
        $AL = new ECPay_AllInOne();
        $AL->MerchantID = '3002607';
        $AL->HashKey = 'pwFHCqoQZGmho4w6';
        $AL->HashIV = 'EkRm7iFT261dpevs';
        // $AL->EncryptType = ECPay_EncryptType::ENC_MD5;  // MD5
        $AL->EncryptType = ECPay_EncryptType::ENC_SHA256; // SHA256
        $feedback = $AL->CheckOutFeedback();
 
        // // 以付款結果訊息進行相對應的處理
        // /** 
        // 回傳的綠界科技的付款結果訊息如下:
        // Array
        // (
        //     [MerchantID] =>
        //     [MerchantTradeNo] =>
        //     [StoreID] =>
        //     [RtnCode] =>
        //     [RtnMsg] =>
        //     [TradeNo] =>
        //     [TradeAmt] =>
        //     [PaymentDate] =>
        //     [PaymentType] =>
        //     [PaymentTypeChargeFee] =>
        //     [TradeDate] =>
        //     [SimulatePaid] =>
        //     [CustomField1] =>
        //     [CustomField2] =>
        //     [CustomField3] =>
        //     [CustomField4] =>
        //     [CheckMacValue] =>
        // )
 
        // 再個別寫入資料庫更新即可
        // */
 
        // 在網頁端回應 1|OK
        echo '1|OK';
    } catch(Exception $e) {
        echo '0|' . $e->getMessage();
    }
?>