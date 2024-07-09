
<?php
// في ملف index.php
include 'mineUx.html';

// استقبال البيانات من الصفحة الويب
$first_direction = $_POST['first_direction'];
$no_Tdirection = $_POST['no_Tdirection'];
$last_direction = $_POST['last_direction'];
$no_TCounter = $_POST['no_TCounter'];

// إدخال البيانات في قاعدة البيانات
$sql = "INSERT INTO move_direc (first_direction, no_Tdirection, last_direction, no_TCounter)
        VALUES ('$first_direction', $no_Tdirection, '$last_direction', $no_TCounter)";

if ($conn->query($sql) === TRUE) {
    echo "Data saved successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>