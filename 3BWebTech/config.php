<?php
// config.php
date_default_timezone_set('Asia/Kolkata');

// Database Connection
$mysqli_user = mysqli_connect('localhost', 'root', '', "3bweb");

if (!$mysqli_user) {
    die("Connection failed: " . mysqli_connect_error());
}

// Baki ki purani lines (Agar zaroorat ho to)
$GLOBALS['AppConfig']['folderpath'] = '/3BWebTech';
$domain = (isset($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : 'localhost');
$GLOBALS['AppConfig']['HomeURL'] = 'http://'.$domain.$GLOBALS['AppConfig']['folderpath'];
$GLOBALS['AppConfig']['mysqli_conn'] = $mysqli_user;

?>