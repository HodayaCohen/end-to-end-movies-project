<?php
    require_once 'model.php';
    
    class DirectorModel extends Model implements JsonSerializable {
        private $id;
        private $name;

        function __construct($params) {
            // parent::__construct('Customer');
        
            if (array_key_exists("id", $params)) $this->id = $params["id"];
            if (array_key_exists("name", $params)) $this->name = $params["name"];
            $this->tableName ='Director';
            
        
    }

        public function getName(){
            return $this->name;
            }
    

            public function getId(){
                return $this->id;
                }
        
            
        public function jsonSerialize() {
            return [
                "id" => $this->id,
                "name" => $this->name
            ];
        }
    }

?>
