<?php
    require_once 'directors-api.php';

    $method = $_SERVER['REQUEST_METHOD']; // verb
    $params = $_REQUEST['activitiesArray'];
    
    switch ($params['ctrl']) {
        case 'Director':
            $capi = new DirectorApi();
            $result  = $capi->gateway($method, $params);
            echo json_encode($result);
        
            break;
        case 'Movie':
        $capi = new MovieApi();
        echo $capi->gateway($method, $params);
        break;
    }

?>
