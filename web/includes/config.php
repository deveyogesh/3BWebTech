<?php
// config.php
date_default_timezone_set('Asia/Kolkata');

// Database Connection
$mysqli_user = mysqli_connect('localhost', 'root', '', "3bweb");

if (!$mysqli_user) {
    die("Connection failed: " . mysqli_connect_error());
}

// Vendor ki jagah hamari banayi hui DB file
require_once __DIR__ . '/DB.php'; 

$GLOBALS['AppConfig']['folderpath'] = '/3BWebTech';
$domain = (isset($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : 'localhost');

// Ye do lines bahut zaruri hain header ke liye
$GLOBALS['AppConfig']['HomeURL'] = 'http://'.$domain.$GLOBALS['AppConfig']['folderpath'];
$GLOBALS['AppConfig']['AdminURL'] = $GLOBALS['AppConfig']['HomeURL'].'/adminpanel';

$GLOBALS['AppConfig']['mysqli_conn'] = $mysqli_user;
?>