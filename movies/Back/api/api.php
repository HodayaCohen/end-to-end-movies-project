<?php
    require_once 'directors-api.php';

    $method = $_SERVER['REQUEST_METHOD']; 

    if($_SERVER['REQUEST_METHOD'] == 'PUT' || $_SERVER['REQUEST_METHOD'] == 'DELETE') {
        parse_str(file_get_contents("php://input"),$post_vars);
        $params = $post_vars['activitiesArray']; 
    }
    else{
        $params = $_REQUEST['activitiesArray'];
    }
    

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
