<?php
    require_once 'abstract-api.php';
    require_once 'api.php';
   require_once '../controllers/DirectorsController.php';

    class DirectorApi extends Api{

        function Create($params) {
            $c = new DirectorController;
            return $c->CreateDirector($params);
        }
        

        function Read($params) {
            $c = new DirectorController;
            if (array_key_exists("method", $params)) {
                $c = new DirectorController;
                $director = $c->DeleteDirecotrById($params);
                return $director;
                
            }
            // else if (array_key_exists("update", $params)) {
            //     $c = new DirectorController;
            //     $director = $c->UpdateDirecotrById($params);
            //     return $director;
    
            // }
            // else if (array_key_exists("create", $params)) {
            //     $c = new DirectorController;
            //     return $c->CreateDirector($params);
    
            // }

            else if (array_key_exists("id", $params)) {
                $director = $c->getDirecotrById($params);
                return $director;
                // return json_encode($director, JSON_PRETTY_PRINT);
            }
            else {
                return $c->getAllDirectors();
            }
        } 

        function Update($params) {
            $c = new DirectorController;
            $director = $c->UpdateDirecotrById($params);
            return $director;
            }

            
         function Delete($params) {
            $c = new DirectorController;
            $director = $c->DeleteDirecotrById($params["id"]);
            return $director;
            
        }

    }
?>
