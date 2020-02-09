<?php 
$arr = [];
$arr['naziv'] = $_POST['naziv'];
$arr['opis'] = $_POST['opis'];

$con=new mysqli("localhost","root","","proizvodi");
$sql = "insert into proizvod (naziv,opis) values ('".$arr['naziv']."','".$arr['opis']."');";

if($con->ping()){
     $arr['connected']  = true ;
}else{
        $arr['connected']  = false; 
}

if ($con->query($sql) === TRUE) {
    $arr['xstatus']  = "Created" ;
    $arr['id']  = $con->insert_id;
}else{
    $arr['xstatus']  = "Error" ;
    $arr['message']  = $con->error;
}

echo json_encode($arr);

?>
