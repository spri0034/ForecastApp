<?php
header("Content-type: application/json");

$apikey = "54d59e6fab0051403256fb6b3a690893"; 


// create a new cURL resource
$ch = curl_init();
// set URL and other appropriate options
curl_setopt($ch, CURLOPT_URL, "https://api.darksky.net/forecast/". $apikey ."/45.5555,-75.5555?units=ca");
//ADD the proper value for UNITS to the end of the URL on the line above


curl_setopt($ch, CURLOPT_HEADER, 0);

// grab URL and pass it to the browser
curl_exec($ch);

// close cURL resource, and free up system resources
curl_close($ch);
?>