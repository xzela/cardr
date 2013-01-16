<?php
if($_SERVER['REQUEST_METHOD'] === 'POST') {
    header("HTTP/1.1 404 Not Found");
    die('i told you bitch, no POSTs');
}

echo file_get_contents('response.html');
?>