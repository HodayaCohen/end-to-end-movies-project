<?php
require_once ('DAL.php');

class BL {
private $DB;

    function __construct() {
        $this->DB = new DAL();
        

    }

    
// selects all from a table in a DB and returns it as array
  function SelectAllFromTable($table_name, $classname) {
        $res = $this->DB->GetAllTable("SELECT * FROM `".$table_name."`", $classname);
        return $res;

    }

// checks if a id exists on a id row in a DB and returns true or false
 function Check_if_id_exists($table_name, $id) {
        $res =  $this->DB->CheckId("SELECT id FROM ".$table_name." WHERE id='$id'");
        $istrue = ($res > 0 ?  true : false);
        return $istrue;
    }


 // updates data in a table 
 function update_table($table_name, $id, $updateValues) {
        $update = $this->DB->updateSQL("UPDATE ".$table_name." SET ".$updateValues." WHERE id='$id'");
        return $update;

}


 function create_new_row($table_name, $column, $values, $exicute) {
        $query = "INSERT INTO ".$table_name."(".$column.") VALUES (".$values.")";
        $Create = $this->DB->insertSQL($query, $exicute);
        return $Create;


}

 function DeleteRow($table_name, $id) {
    $getdb = $this->DB->getDB();
    

        $delete =  $getdb->prepare("DELETE FROM ".$table_name." WHERE id =". $id);
        $delete->execute();
        return $delete;

}


function innerJoin($table_name, $column, $join1, $join2) {
    $innerJion = $this->DB->prepare("SELECT * FROM ".$table_name." INNER JOIN  ".$column." ON  ".$join1." = ".$join2);
    $innerJion->execute();
    return $innerJion;

}

}