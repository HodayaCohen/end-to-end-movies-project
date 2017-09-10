<?php 
    require_once 'controller.php';
    require_once '../models/DirectorModel.php';
    require_once '../data/bl.php';
    

    class DirectorController extends Controller {
        private $db;
        private $table_name = "directors";
        private $classneame = "DirectorModel";
        

        function __construct() {
            $this->db = new BL();
        }
        

// creates a new line in director table
        function CreateDirector($param) {
            $c = new DirectorModel($param);
            // $create = $this->db->CreateEntity($this->table_name, $c);
            $column="name";
            $values=":name";
            $exicute = array(
                    "name"=> $c->getName());

        $update = $this->db->create_new_row($this->table_name, $column, $values, $exicute);
        return $this->checkIsWasGood($update);
                }


// selects all from directors table and returns a object array
        function getAllDirectors() {
            $allDirectors = array();
            $getall = $this->db->SelectAllFromTable($this->table_name, $this->classneame);
            
            for($i=0; $i<count($getall); $i++) {
                $c = new DirectorModel($getall[$i]);
                array_push($allDirectors, $c->jsonSerialize());
            }

            return $allDirectors;
            
            
        }

// deletes a line from directors table
        function DeleteDirecotrById($id) {
            $c = new DirectorModel($id);
            $deleted =  $this->db->DeleteRow($this->table_name, $id);
            return $this->checkIsWasGood($deleted);
    
        }

// updates a line in directos table
        function UpdateDirecotrById($param) {
            $c = new DirectorModel($param);
            $updateValues= "name =  '".$c->getName()."'";
            $update =  $this->db->update_table($this->table_name, $c->getId(), $updateValues);
            return $this->checkIsWasGood($update);
    
        }



        function getDirectorById($id) {
            // // CONNECT BL
            // $array = [
            //     "id" => $id,
            //     "name" => MD5($id)
            // ];
           
            // $c = new CustomerModel($array);
            // return $c->jsonSerialize();
        }






}