<?php session_start();

    if(isset($_SESSION['usuario'])){
        require 'frontend/principal-vista.php';
    }else{
        header ('location: login.php');
    }
        
?>