<?php
    require_once 'directors-api.php';

    $method = $_SERVER['REQUEST_METHOD']; // verb
    $params = $_REQUEST['activitiesArray'];

    if($_SERVER['REQUEST_METHOD'] == 'PUT') {
        parse_str(file_get_contents("php://input"),$post_vars);
        $params = $post_vars['activitiesArray']; // you can access query parameters like this
    $params =$params;
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
