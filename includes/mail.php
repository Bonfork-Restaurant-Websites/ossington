<?php
$name = $_POST["name"];
$email = $_POST["email"];
$guests = $_POST["guests"];
$date = $_POST["Date"];
$time = $_POST["Time"];
$phone = $_POST["phone"];


$EmailTo = "matty@aledia.ca";
$Subject = "New Message Received";

// prepare email body text
$Fields .= "Name: ";
$Fields .= $name;
$Fields .= "\n";

$Fields.= "Email: ";
$Fields .= $email;
$Fields .= "\n";

$Fields .= "Guests: ";
$Fields .= $guests;
$Fields .= "\n";

$Fields .= "Date: ";
$Fields .= $date;
$Fields .= "\n";

$Fields .= "Time: ";
$Fields .= $time;
$Fields .= "\n";

$Fields .= "Phone: ";
$Fields .= $phone;
$Fields .= "\n";


// send email
$success = mail($EmailTo,  $Subject,  $Fields, "From:".$email);

