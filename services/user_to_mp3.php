<?php

$userName = $_POST["nom"];
$mediaLink = "https://maghribioriginal.ma/preprod/medias/maghri-bioriginal-beat.wav";
$status = 1;


$response = array(
     'whatsthestate' => $status,
	 'userName' => $userName,
	 'mediaLink' => $mediaLink
);


  echo (json_encode($response));

?>