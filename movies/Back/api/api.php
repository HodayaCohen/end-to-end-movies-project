<?php
    require_once 'directors-api.php';

    $method = $_SERVER['REQUEST_METHOD']; // verb
     $params = $_REQUEST['arraydata'];
            // switch ($_REQUEST["ctrl"]) {


    // $method = "POST";
    // $params = array("name"=>"שם חדש");
    
    // $params = array("id"=>4, "name"=>"וגם אני עודכנתי");
$type = "director";
    switch ($type) {
        case 'director':
            $capi = new DirectorApi();
            $result  = $capi->gateway($method, $params);
            echo json_encode($result);
        
            break;
        case 'movie':
        $capi = new MovieApi();
        echo $capi->gateway($method, $params);
        break;
    }



// <!-- ['id'=> $_REQUEST["id"]] -->
// <!-- echo $capi->gateway($method, ['id'=> $_REQUEST["id"]]); -->

