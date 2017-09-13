<?php
    require_once 'model.php';
    require_once '../common/validation.php';
    
    
    class MoviesModel extends Model implements JsonSerializable {
        private $id;
        private $name;
        private $d_id;
        private $validation;

        function __construct($params) {
            $this->validation = new validation;
            $this->tableName ='movies';
        
            if (array_key_exists("id", $params)) $this->id = $params["id"];  
            if (array_key_exists("name", $params)) $this->name = $params["name"];
            if (array_key_exists("d_id", $params)) $this->d_id = $params["d_id"];
            

        
    }

        public function getName(){
            if ($this->validation->NotNull($this->name) == false){
            return 'null';}
            else{
            return $this->name;
            }
        }
    

        public function getId(){
            if ($this->validation->NotNull($this->id) == false) {
                return 'null';
            }
            elseif ($this->validation->isNumber($this->id) == false) {
                return 'NaN';
            }
            else {
            return $this->id;
            }
        }
            
        public function getd_id(){
            if ($this->validation->NotNull($this->d_id) == false) {
                return 'null';
            }
            elseif ($this->validation->isNumber($this->d_id) == false) {
                return 'NaN';
            }
            else {
            return $this->d_id;
            }
        }
            



        public function jsonSerialize() {
            return [
                "id" => $this->id,
                "name" => $this->name,
                "d_id" => $this->d_id
                
            ];
        }
    }

?>
