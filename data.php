<?php 
$arr = array();
$con=new mysqli("localhost","root","","proizvodi");
$sql = "select id,naziv,opis from proizvod";
if($result = $con->query($sql) ){
    while($row = $result->fetch_assoc()){
        $arr[] = $row;
    }
    echo json_encode($arr);
 }
?>