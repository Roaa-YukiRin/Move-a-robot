
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "dirct-rubot";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
// في ملف index.php


// استقبال البيانات من الصفحة الويب
$first_direction = $_POST['first_direction'];
$no_Tdirection = $_POST['no_Tdirection'];
$last_direction = $_POST['last_direction'];
$no_TCounter = $_POST['no_TCounte'];

// إدخال البيانات في قاعدة البيانات
$sql = "INSERT INTO move_direc (id,first_direction, no_Tdirection, last_direction, no_TCounte)
        VALUES ('','$first_direction', '$no_Tdirection', '$last_direction', '$no_TCounte')";

if ($conn->query($sql) === TRUE) {
    echo "Data saved successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>